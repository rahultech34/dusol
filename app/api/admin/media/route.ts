import { NextRequest, NextResponse } from "next/server";
import { getCurrentAdmin } from "@/lib/auth";
import { getDb } from "@/lib/firebase-admin";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const db = getDb();
  const mediaList: any[] = [];

  if (db) {
    try {
      const snap = await db.collection("media").orderBy("createdAt", "desc").get();
      snap.forEach((doc: any) => {
        mediaList.push({ id: doc.id, ...doc.data() });
      });
    } catch (e) {
      console.warn("[Media API] Firestore fetch failed, falling back to directory scan:", e);
    }
  }

  // Fallback to reading public/uploads if Firestore collection is empty
  if (mediaList.length === 0) {
    try {
      const uploadsDir = path.join(process.cwd(), "public", "uploads");
      const files = await fs.readdir(uploadsDir);
      for (const file of files) {
        if (!file.startsWith(".")) {
          const stats = await fs.stat(path.join(uploadsDir, file));
          mediaList.push({
            id: file,
            name: file,
            fileName: file,
            url: `/uploads/${file}`,
            size: stats.size,
            type: "image",
            createdAt: stats.birthtime.toISOString(),
          });
        }
      }
    } catch (e) {
      // directory might not exist yet
    }
  }

  return NextResponse.json({ media: mediaList });
}

export async function DELETE(request: NextRequest) {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Media ID or filename is required" }, { status: 400 });
  }

  const db = getDb();
  if (db) {
    try {
      await db.collection("media").doc(id).delete();
    } catch (e) {}
  }

  try {
    const filePath = path.join(process.cwd(), "public", "uploads", id);
    await fs.unlink(filePath);
  } catch (e) {}

  return NextResponse.json({ success: true });
}
