import { NextRequest, NextResponse } from "next/server";
import { getCurrentAdmin } from "@/lib/auth";
import { getAllPrograms, saveProgram } from "@/lib/firestore-cms";

export async function GET(request: NextRequest) {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const typeParam = searchParams.get("type");
  const type: "ug" | "pg" | "mba" = typeParam === "mba" ? "mba" : typeParam === "pg" ? "pg" : "ug";

  const programs = await getAllPrograms(type, false);
  return NextResponse.json({ programs });
}

export async function POST(request: NextRequest) {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    if (!body.name || !body.name.trim()) {
      return NextResponse.json({ error: "Program name is required" }, { status: 400 });
    }

    const type: "ug" | "pg" | "mba" = body.type === "mba" ? "mba" : body.type === "pg" ? "pg" : "ug";
    const result = await saveProgram(type, body, body.id);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json({ success: true, id: result.id });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to save program" }, { status: 500 });
  }
}
