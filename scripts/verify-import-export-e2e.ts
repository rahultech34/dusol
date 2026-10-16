import { Document, Packer, Paragraph, HeadingLevel, TextRun, Table, TableRow, TableCell } from "docx";
import { jsPDF } from "jspdf";
import fs from "fs";
import path from "path";

async function main() {
  console.log("=== Starting End-to-End Test for Import & Export System ===");

  const tmpDir = path.join(process.cwd(), "scripts", ".tmp");
  if (!fs.existsSync(tmpDir)) {
    fs.mkdirSync(tmpDir, { recursive: true });
  }

  // 1. Create a sample DOCX file with headings, paragraphs, bold/italic, lists, and a table
  console.log("\n[1] Creating sample DOCX document...");
  const docxFile = path.join(tmpDir, "test_blog_sample.docx");
  const doc = new Document({
    sections: [
      {
        children: [
          new Paragraph({
            text: "Complete Guide to Distance MBA Admission 2026",
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Learn all about eligibility, syllabus, and career paths for the DU SOL Distance MBA program. ",
              }),
              new TextRun({
                text: "This guide covers key deadlines and admission steps.",
                bold: true,
              }),
            ],
          }),
          new Paragraph({
            text: "Eligibility & Requirements",
            heading: HeadingLevel.HEADING_2,
          }),
          new Paragraph({
            text: "Graduation with at least 50% marks from a recognized university.",
            bullet: { level: 0 },
          }),
          new Paragraph({
            text: "No entrance exam required for direct admission category.",
            bullet: { level: 0 },
          }),
          new Paragraph({
            text: "Fee Structure Overview",
            heading: HeadingLevel.HEADING_2,
          }),
          new Table({
            rows: [
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph("Semester")] }),
                  new TableCell({ children: [new Paragraph("Fee Amount")] }),
                  new TableCell({ children: [new Paragraph("Status")] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph("Semester 1")] }),
                  new TableCell({ children: [new Paragraph("₹26,000")] }),
                  new TableCell({ children: [new Paragraph("Payable at Admission")] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph("Semester 2")] }),
                  new TableCell({ children: [new Paragraph("₹24,000")] }),
                  new TableCell({ children: [new Paragraph("Payable in Jan")] }),
                ],
              }),
            ],
          }),
        ],
      },
    ],
  });

  const docxBuffer = await Packer.toBuffer(doc);
  fs.writeFileSync(docxFile, docxBuffer);
  console.log(`✓ Sample DOCX created at: ${docxFile} (${docxBuffer.length} bytes)`);

  // 2. Create a sample PDF file
  console.log("\n[2] Creating sample PDF document...");
  const pdfFile = path.join(tmpDir, "test_program_sample.pdf");
  const pdf = new jsPDF();
  pdf.setFontSize(22);
  pdf.text("Master of Business Administration (MBA)", 20, 30);
  pdf.setFontSize(14);
  pdf.text("Comprehensive PG management degree offered by DU SOL.", 20, 45);
  pdf.setFontSize(16);
  pdf.text("Eligibility Criteria", 20, 60);
  pdf.setFontSize(12);
  pdf.text("- Minimum 50% in Bachelor Degree", 25, 72);
  pdf.text("- Work experience preferred but not mandatory", 25, 82);
  pdf.setFontSize(16);
  pdf.text("Program Highlights", 20, 98);
  pdf.setFontSize(12);
  pdf.text("Duration: 2 Years (4 Semesters) | Flexible Weekend Classes", 20, 110);
  pdf.text("Fee: Approx Rs 50,000 total course fee", 20, 120);

  const pdfArrayBuffer = pdf.output("arraybuffer");
  const pdfBuffer = Buffer.from(pdfArrayBuffer);
  fs.writeFileSync(pdfFile, pdfBuffer);
  console.log(`✓ Sample PDF created at: ${pdfFile} (${pdfBuffer.length} bytes)`);

  const BASE_URL = "http://localhost:3000";

  // Login as admin
  console.log("\n[Auth] Logging into admin account...");
  const loginRes = await fetch(`${BASE_URL}/api/admin/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "admin@distanceeducation.com", password: "admin123" }),
  });
  if (!loginRes.ok) {
    const errorText = await loginRes.text();
    throw new Error(`Admin login failed with status ${loginRes.status}: ${errorText}`);
  }
  const authCookie = loginRes.headers.get("set-cookie") || "";
  console.log("✓ Logged in as administrator successfully!");

  // 3. Test API: POST /api/admin/import/parse with DOCX (blogs section)
  console.log("\n[3] Testing POST /api/admin/import/parse (DOCX -> blogs)...");
  const docxFormData = new FormData();
  const docxBlob = new Blob([new Uint8Array(docxBuffer)], {
    type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  });
  docxFormData.append("file", docxBlob, "test_blog_sample.docx");
  docxFormData.append("section", "blogs");

  const parseDocxRes = await fetch(`${BASE_URL}/api/admin/import/parse`, {
    method: "POST",
    headers: {
      Cookie: authCookie,
    },
    body: docxFormData,
  });

  if (!parseDocxRes.ok) {
    const errorText = await parseDocxRes.text();
    throw new Error(`DOCX parse failed with status ${parseDocxRes.status}: ${errorText}`);
  }

  const parseDocxJson = await parseDocxRes.json();
  console.log("✓ DOCX parsed successfully!");
  console.log("  - Title detected:", parseDocxJson.parsed?.title);
  console.log("  - Headings count:", parseDocxJson.parsed?.headings?.length);
  console.log("  - Tables count:", parseDocxJson.parsed?.tables?.length);
  console.log("  - Mapped fields:", Object.keys(parseDocxJson.mapped?.fields || {}));
  console.log("  - Field values sample:", {
    title: parseDocxJson.mapped?.fields?.title?.value,
    slug: parseDocxJson.mapped?.fields?.slug?.value,
    h1: parseDocxJson.mapped?.fields?.h1?.value,
    confidence: parseDocxJson.mapped?.fields?.title?.confidence,
  });

  // 4. Test API: POST /api/admin/import/parse with PDF (pg-programs section)
  console.log("\n[4] Testing POST /api/admin/import/parse (PDF -> pg-programs)...");
  const pdfFormData = new FormData();
  const pdfBlob = new Blob([new Uint8Array(pdfBuffer)], { type: "application/pdf" });
  pdfFormData.append("file", pdfBlob, "test_program_sample.pdf");
  pdfFormData.append("section", "pg-programs");

  const parsePdfRes = await fetch(`${BASE_URL}/api/admin/import/parse`, {
    method: "POST",
    headers: {
      Cookie: authCookie,
    },
    body: pdfFormData,
  });

  if (!parsePdfRes.ok) {
    const errorText = await parsePdfRes.text();
    throw new Error(`PDF parse failed with status ${parsePdfRes.status}: ${errorText}`);
  }

  const parsePdfJson = await parsePdfRes.json();
  console.log("✓ PDF parsed successfully!");
  console.log("  - Title detected:", parsePdfJson.parsed?.title);
  console.log("  - Raw text length:", parsePdfJson.parsed?.rawText?.length);
  console.log("  - Mapped fields for PG Program:", Object.keys(parsePdfJson.mapped?.fields || {}));
  console.log("  - Mapped title/name:", parsePdfJson.mapped?.fields?.title?.value);
  console.log("  - Mapped eligibility:", parsePdfJson.mapped?.fields?.eligibility?.value);

  // 5. Test API: POST /api/admin/import/save (saving as draft)
  console.log("\n[5] Testing POST /api/admin/import/save (saving as draft)...");
  const savePayload = {
    section: "blogs",
    status: "draft",
    fileMeta: {
      fileName: "test_blog_sample.docx",
      fileSize: docxBuffer.length,
      fileType: "docx",
    },
    data: {
      title: (parseDocxJson.mapped?.fields?.title?.value || "Complete Guide to Distance MBA Admission 2026") + ` [Imported ${Date.now()}]`,
      slug: (parseDocxJson.mapped?.fields?.slug?.value || "complete-guide-to-distance-mba-admission-2026") + `-${Date.now()}`,
      metaTitle: parseDocxJson.mapped?.fields?.metaTitle?.value || "DU SOL Distance MBA Admission 2026",
      metaDescription: parseDocxJson.mapped?.fields?.metaDescription?.value || "DU SOL Distance MBA details",
      content: parseDocxJson.mapped?.fields?.content?.value || "<p>Sample blog content</p>",
      category: "mba",
      published: false,
    },
  };

  const saveRes = await fetch(`${BASE_URL}/api/admin/import/save`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: authCookie,
    },
    body: JSON.stringify(savePayload),
  });

  if (!saveRes.ok) {
    const errorText = await saveRes.text();
    throw new Error(`Import save failed with status ${saveRes.status}: ${errorText}`);
  }

  const saveJson = await saveRes.json();
  console.log("✓ Saved draft successfully! Doc ID:", saveJson.id);

  // 6. Test API: GET /api/admin/import/history
  console.log("\n[6] Testing GET /api/admin/import/history...");
  const historyRes = await fetch(`${BASE_URL}/api/admin/import/history?section=blogs&limit=5`, {
    headers: {
      Cookie: authCookie,
    },
  });
  if (!historyRes.ok) {
    const errorText = await historyRes.text();
    throw new Error(`Import history failed with status ${historyRes.status}: ${errorText}`);
  }
  const historyJson = await historyRes.json();
  const historyList = historyJson.history || [];
  console.log(`✓ Fetched ${historyList.length} history items.`);
  if (historyList.length > 0) {
    console.log("  - Latest item:", {
      fileName: historyList[0].fileName,
      section: historyList[0].section,
      status: historyList[0].status,
      timestamp: historyList[0].timestamp,
    });
  }

  // 7. Test API: POST /api/admin/export for JSON, CSV, DOCX, and PDF
  const formats: Array<"json" | "csv" | "docx" | "pdf"> = ["json", "csv", "docx", "pdf"];
  for (const fmt of formats) {
    console.log(`\n[7.${fmt}] Testing POST /api/admin/export (format: ${fmt}, section: blogs)...`);
    const exportRes = await fetch(`${BASE_URL}/api/admin/export`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: authCookie,
      },
      body: JSON.stringify({
        section: "blogs",
        format: fmt,
        scope: "all",
      }),
    });

    if (!exportRes.ok) {
      const errorText = await exportRes.text();
      throw new Error(`Export ${fmt} failed with status ${exportRes.status}: ${errorText}`);
    }

    const exportBlob = await exportRes.arrayBuffer();
    const disposition = exportRes.headers.get("content-disposition");
    const contentType = exportRes.headers.get("content-type");
    console.log(`✓ Exported ${fmt.toUpperCase()} successfully!`);
    console.log(`  - Size: ${exportBlob.byteLength} bytes`);
    console.log(`  - Content-Type: ${contentType}`);
    console.log(`  - Content-Disposition: ${disposition}`);
  }

  // Cleanup tmp dir
  fs.rmSync(tmpDir, { recursive: true, force: true });
  console.log("\n=======================================================");
  console.log("✓ ALL END-TO-END TESTS PASSED SUCCESSFULLY! 🚀");
  console.log("=======================================================");
}

main().catch((err) => {
  console.error("Test failed with error:", err);
  process.exit(1);
});
