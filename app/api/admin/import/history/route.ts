import { NextResponse } from "next/server";
import { getCurrentAdmin } from "@/lib/auth";
import { getImportHistory } from "@/lib/firestore-cms";

export const dynamic = "force-dynamic";

export async function GET() {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  try {
    const history = await getImportHistory(50);
    return NextResponse.json({ success: true, history });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to fetch import history." }, { status: 500 });
  }
}
