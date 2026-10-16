import { NextRequest, NextResponse } from "next/server";
import { getCurrentAdmin } from "@/lib/auth";
import { getAllStudentZoneItems, saveStudentZoneItem } from "@/lib/firestore-cms";

export async function GET() {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const items = await getAllStudentZoneItems(false);
  return NextResponse.json({ items });
}

export async function POST(request: NextRequest) {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    if (!body.title || !body.title.trim()) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    const result = await saveStudentZoneItem(body, body.id);
    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json({ success: true, id: result.id, slug: result.slug });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to save student zone item" }, { status: 500 });
  }
}
