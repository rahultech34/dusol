import { NextResponse } from "next/server";
import { getHomePageContent } from "@/lib/home-page-cms";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const content = await getHomePageContent();
    return NextResponse.json(content, {
      headers: {
        "Cache-Control": "public, s-maxage=30, stale-while-revalidate=59",
      },
    });
  } catch (error: any) {
    console.error("[GET /api/public/home-page] Error:", error);
    return NextResponse.json(
      { error: error.message || String(error) },
      { status: 500 }
    );
  }
}
