import { NextRequest, NextResponse } from "next/server";
import { getCurrentAdmin } from "@/lib/auth";
import {
  getAllBlogs,
  getAllPrograms,
  getAllStudentZoneItems,
  getAllCategories,
} from "@/lib/firestore-cms";
import {
  generateJsonExport,
  generateCsvExport,
  generateDocxExport,
  generatePdfExport,
} from "@/lib/doc-import/export-generator";
import { ImportSection, ExportFormat } from "@/lib/doc-import/types";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  try {
    const body = await request.json();
    let section = (body.section as ImportSection) || "blogs";
    if ((section as string) === "ug-programs") section = "ug";
    if ((section as string) === "pg-programs") section = "pg";
    if ((section as string) === "mba-specializations") section = "mba";
    const format = (body.format as ExportFormat) || "json";
    const ids = Array.isArray(body.ids) ? (body.ids as string[]) : null;

    let items: any[] = [];

    if (section === "blogs") {
      items = await getAllBlogs(false);
    } else if (section === "ug" || section === "pg" || section === "mba") {
      items = await getAllPrograms(section, false);
    } else if (section === "student-zone") {
      items = await getAllStudentZoneItems(false);
    } else if (section === "categories") {
      items = await getAllCategories();
    } else {
      return NextResponse.json({ error: "Invalid section specified." }, { status: 400 });
    }

    // Filter by specific IDs if requested
    if (ids && ids.length > 0) {
      items = items.filter((item) => ids.includes(item.id || item.slug));
    }

    if (items.length === 0) {
      return NextResponse.json({ error: "No records found matching the export criteria." }, { status: 404 });
    }

    const timestamp = new Date().toISOString().slice(0, 10);
    const baseName = `dusol-${section}-export-${timestamp}`;

    if (format === "json") {
      const jsonContent = generateJsonExport(items, section);
      return new NextResponse(jsonContent, {
        status: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Content-Disposition": `attachment; filename="${baseName}.json"`,
        },
      });
    }

    if (format === "csv") {
      const csvContent = generateCsvExport(items, section);
      return new NextResponse(csvContent, {
        status: 200,
        headers: {
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": `attachment; filename="${baseName}.csv"`,
        },
      });
    }

    if (format === "docx") {
      const docxBuffer = await generateDocxExport(items, section);
      return new NextResponse(new Uint8Array(docxBuffer), {
        status: 200,
        headers: {
          "Content-Type":
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "Content-Disposition": `attachment; filename="${baseName}.docx"`,
        },
      });
    }

    if (format === "pdf") {
      const pdfBuffer = await generatePdfExport(items, section);
      return new NextResponse(new Uint8Array(pdfBuffer), {
        status: 200,
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": `attachment; filename="${baseName}.pdf"`,
        },
      });
    }

    return NextResponse.json({ error: "Unsupported export format." }, { status: 400 });
  } catch (error: any) {
    console.error("[api/admin/export] Error:", error);
    return NextResponse.json({ error: error.message || "Failed to generate export file." }, { status: 500 });
  }
}
