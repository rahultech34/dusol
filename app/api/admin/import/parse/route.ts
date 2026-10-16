import { NextRequest, NextResponse } from "next/server";
import { getCurrentAdmin } from "@/lib/auth";
import { parseDocxBuffer } from "@/lib/doc-import/docx-parser";
import { parsePdfBuffer } from "@/lib/doc-import/pdf-parser";
import { mapParsedDocumentToSection } from "@/lib/doc-import/field-mapper";
import { ImportSection, ParsedDocument } from "@/lib/doc-import/types";

export const dynamic = "force-dynamic";

const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25 MB

export async function POST(request: NextRequest) {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const section = (formData.get("section") as ImportSection) || "blogs";

    if (!file) {
      return NextResponse.json({ error: "No file provided for extraction." }, { status: 400 });
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "File exceeds the 25MB maximum size limit. Please upload a smaller document." },
        { status: 400 }
      );
    }

    const fileName = file.name;
    const fileExt = fileName.split(".").pop()?.toLowerCase();

    if (fileExt !== "pdf" && fileExt !== "docx") {
      return NextResponse.json(
        { error: "Unsupported file format. Please upload a Microsoft Word (.docx) or PDF (.pdf) file." },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    let parsedDoc: ParsedDocument;

    if (fileExt === "docx") {
      parsedDoc = await parseDocxBuffer(buffer, fileName, file.size);
    } else {
      parsedDoc = await parsePdfBuffer(buffer, fileName, file.size);
    }

    if (!parsedDoc.rawText.trim() && !parsedDoc.htmlContent.trim()) {
      return NextResponse.json(
        {
          error:
            "The document appears to be empty or contains scanned images without extractable text. Please ensure the document contains selectable text.",
        },
        { status: 422 }
      );
    }

    const mapped = mapParsedDocumentToSection(parsedDoc, section);

    return NextResponse.json({
      success: true,
      parsed: parsedDoc,
      mapped,
    });
  } catch (error: any) {
    console.error("[api/admin/import/parse] Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to parse and extract content from the document." },
      { status: 500 }
    );
  }
}
