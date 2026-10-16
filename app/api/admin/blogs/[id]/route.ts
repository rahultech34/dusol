import { NextRequest, NextResponse } from "next/server";
import { getCurrentAdmin } from "@/lib/auth";
import { getBlogById, saveBlog, deleteBlog } from "@/lib/firestore-cms";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const blog = await getBlogById(id);
  if (!blog) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  return NextResponse.json({ blog });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  try {
    const body = await request.json();
    const result = await saveBlog(body, id);
    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }
    return NextResponse.json({ success: true, id: result.id });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const result = await deleteBlog(id);
  if (!result.success) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  return NextResponse.json({ success: true });
}
