import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { getDb } from "@/lib/firebase-admin";

export const dynamic = "force-dynamic";

const MIME_TYPES: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".avif": "image/avif",
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path: pathSegments } = await params;
    if (!pathSegments || pathSegments.length === 0) {
      return new NextResponse("Not Found", { status: 404 });
    }

    // Join and sanitize to prevent directory traversal
    const relativePath = pathSegments.join("/");
    const safePath = path.normalize(relativePath).replace(/^(\.\.[\/\\])+/, "");
    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    const filePath = path.join(uploadsDir, safePath);

    const ext = path.extname(safePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";

    // 1. Try reading from local disk first
    try {
      const fileBuffer = await fs.readFile(filePath);
      return new NextResponse(fileBuffer, {
        headers: {
          "Content-Type": contentType,
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    } catch {
      // File not found on disk, attempt Firestore backup
    }

    // 2. Fallback to Firestore media document (preserves images across git resets/deploys)
    const fileName = path.basename(safePath);
    const db = getDb();
    if (db) {
      try {
        const doc = await db.collection("media").doc(fileName).get();
        if (doc.exists) {
          const data = doc.data();
          if (data?.base64) {
            const buffer = Buffer.from(data.base64, "base64");
            // Restore file back to disk for subsequent fast hits
            try {
              await fs.mkdir(path.dirname(filePath), { recursive: true });
              await fs.writeFile(filePath, buffer);
            } catch {}

            return new NextResponse(buffer, {
              headers: {
                "Content-Type": data.type || contentType,
                "Cache-Control": "public, max-age=31536000, immutable",
              },
            });
          }
        }
      } catch (err) {
        console.error("[Uploads Route] Firestore backup retrieval error:", err);
      }
    }

    return new NextResponse("File Not Found", { status: 404 });
  } catch (error: any) {
    console.error("[Uploads Route] Error:", error);
    return new NextResponse("Server Error", { status: 500 });
  }
}

