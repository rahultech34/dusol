import { NextRequest, NextResponse } from "next/server";
import { getCurrentAdmin } from "@/lib/auth";
import {
  saveBlog,
  saveProgram,
  saveStudentZoneItem,
  saveCategory,
  logImportHistory,
} from "@/lib/firestore-cms";
import { ImportSection } from "@/lib/doc-import/types";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  try {
    const body = await request.json();
    let { section, data, status = "draft", fileMeta } = body;

    if (!section || !data) {
      return NextResponse.json({ error: "Section and data are required." }, { status: 400 });
    }

    if (section === "ug-programs") section = "ug";
    if (section === "pg-programs") section = "pg";
    if (section === "mba-specializations") section = "mba";

    let saveResult: { success: boolean; id?: string; slug?: string; error?: string };
    let recordTitle = "";

    if (section === "blogs") {
      if (!data.title?.trim()) {
        return NextResponse.json({ error: "Blog title is required." }, { status: 400 });
      }
      recordTitle = data.title;
      saveResult = await saveBlog({
        ...data,
        status: status || "draft",
      });
    } else if (section === "ug" || section === "pg" || section === "mba") {
      if (!data.name?.trim()) {
        return NextResponse.json({ error: "Program name is required." }, { status: 400 });
      }
      recordTitle = data.name;
      saveResult = await saveProgram(section, {
        ...data,
        status: status || "draft",
      });
    } else if (section === "student-zone") {
      if (!data.title?.trim()) {
        return NextResponse.json({ error: "Resource title is required." }, { status: 400 });
      }
      recordTitle = data.title;
      saveResult = await saveStudentZoneItem({
        ...data,
        status: status || "draft",
      });
    } else if (section === "categories") {
      if (!data.name?.trim()) {
        return NextResponse.json({ error: "Category name is required." }, { status: 400 });
      }
      recordTitle = data.name;
      saveResult = await saveCategory(data.name, data.description);
    } else {
      return NextResponse.json({ error: "Invalid section specified." }, { status: 400 });
    }

    if (!saveResult.success) {
      return NextResponse.json({ error: saveResult.error || "Failed to save record to Firestore." }, { status: 400 });
    }

    // Log to import history
    await logImportHistory({
      fileName: fileMeta?.fileName || "imported-document",
      fileSize: fileMeta?.fileSize || 0,
      fileType: fileMeta?.fileType || "docx",
      section,
      recordId: saveResult.id || saveResult.slug || "unknown",
      recordTitle,
      status: status || "draft",
      adminEmail: admin.email,
    });

    return NextResponse.json({
      success: true,
      id: saveResult.id,
      slug: saveResult.slug,
      message: `Document content successfully saved to ${section.toUpperCase()} as ${status}.`,
    });
  } catch (error: any) {
    console.error("[api/admin/import/save] Error:", error);
    return NextResponse.json({ error: error.message || "Failed to save imported content." }, { status: 500 });
  }
}
