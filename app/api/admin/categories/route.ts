import { NextRequest, NextResponse } from "next/server";
import { getCurrentAdmin } from "@/lib/auth";
import { getAllCategories, saveCategory, deleteCategory } from "@/lib/firestore-cms";

export async function GET() {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const categories = await getAllCategories();
  return NextResponse.json({ categories });
}

export async function POST(request: NextRequest) {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { name, description } = await request.json();
    if (!name || !name.trim()) {
      return NextResponse.json({ error: "Category name is required" }, { status: 400 });
    }

    const result = await saveCategory(name, description);
    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  if (!slug) {
    return NextResponse.json({ error: "Slug is required" }, { status: 400 });
  }

  const result = await deleteCategory(slug);
  if (!result.success) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  return NextResponse.json({ success: true });
}
