import { NextRequest, NextResponse } from "next/server";
import { getCurrentAdmin } from "@/lib/auth";
import { getDb } from "@/lib/firebase-admin";
import path from "path";
import fs from "fs/promises";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Validate mime type
    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/svg+xml"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Invalid file type. Only JPEG, PNG, WebP, GIF, and SVG images are allowed." },
        { status: 400 }
      );
    }

    // Validate size (max 5MB)
    const MAX_SIZE = 5 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      return NextResponse.json(
        { error: "File exceeds 5MB size limit. Please upload a smaller image." },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Generate safe unique filename
    const ext = path.extname(file.name) || ".png";
    const baseName = path.basename(file.name, ext).replace(/[^a-zA-Z0-9-_]/g, "_").toLowerCase();
    const randomHash = crypto.randomBytes(6).toString("hex");
    const uniqueFileName = `${baseName}_${randomHash}${ext}`;

    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    await fs.mkdir(uploadsDir, { recursive: true });

    const filePath = path.join(uploadsDir, uniqueFileName);
    await fs.writeFile(filePath, buffer);

    const publicUrl = `/uploads/${uniqueFileName}`;

    // Store media metadata in Firestore
    const db = getDb();
    if (db) {
      await db.collection("media").doc(uniqueFileName).set({
        name: file.name,
        fileName: uniqueFileName,
        url: publicUrl,
        size: file.size,
        type: file.type,
        uploadedBy: admin.email,
        createdAt: new Date().toISOString(),
      });
    }

    return NextResponse.json({
      success: true,
      url: publicUrl,
      fileName: uniqueFileName,
      size: file.size,
    });
  } catch (error: any) {
    console.error("[Upload API] Error:", error);
    return NextResponse.json({ error: error.message || "Failed to upload file" }, { status: 500 });
  }
}
