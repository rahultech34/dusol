import { NextRequest, NextResponse } from "next/server";
import { getCurrentAdmin } from "@/lib/auth";
import { getHomePageContent, saveHomePageContent } from "@/lib/home-page-cms";
import { HomePageContent } from "@/lib/home-page-types";

export const dynamic = "force-dynamic";

export async function GET() {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const content = await getHomePageContent();
    return NextResponse.json({ success: true, content });
  } catch (error: any) {
    console.error("[GET /api/admin/home-page] Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch home page content" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = (await request.json()) as HomePageContent;

    if (!body || !body.seo || !body.about) {
      return NextResponse.json(
        { error: "Invalid homepage content payload" },
        { status: 400 }
      );
    }

    const result = await saveHomePageContent(body);
    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: "Home page content updated successfully",
    });
  } catch (error: any) {
    console.error("[POST /api/admin/home-page] Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to update home page content" },
      { status: 500 }
    );
  }
}
