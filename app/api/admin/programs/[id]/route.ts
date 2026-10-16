import { NextRequest, NextResponse } from "next/server";
import { getCurrentAdmin } from "@/lib/auth";
import { getProgramById, saveProgram, deleteProgram } from "@/lib/firestore-cms";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const { searchParams } = new URL(request.url);
  const typeParam = searchParams.get("type");
  const type: "ug" | "pg" | "mba" = typeParam === "mba" ? "mba" : typeParam === "pg" ? "pg" : "ug";

  const program = await getProgramById(type, id);
  if (!program) {
    return NextResponse.json({ error: "Program not found" }, { status: 404 });
  }

  return NextResponse.json({ program });
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
    const type: "ug" | "pg" | "mba" = body.type === "mba" ? "mba" : body.type === "pg" ? "pg" : "ug";
    const result = await saveProgram(type, body, id);

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
  const { searchParams } = new URL(request.url);
  const typeParam = searchParams.get("type");
  const type: "ug" | "pg" | "mba" = typeParam === "mba" ? "mba" : typeParam === "pg" ? "pg" : "ug";

  const result = await deleteProgram(type, id);
  if (!result.success) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  return NextResponse.json({ success: true });
}
