import { ParsedDocument, ParsedHeading, ParsedTable } from "./types";
import { sanitizeDocumentHtml } from "./doc-sanitizer";

import path from "path";
import fs from "fs";
import { pathToFileURL } from "url";

// Safe dynamic loader for pdf-parse supporting both CJS/ESM
async function getPdfParserClass() {
  const mod = await import("pdf-parse");
  // Check if PDFParse class exists on module or default
  const PDFParseClass = (mod as any).PDFParse || (mod as any).default?.PDFParse || (mod as any).default;

  if (PDFParseClass && typeof PDFParseClass.setWorker === "function") {
    try {
      const localWorkerPath = path.resolve(
        process.cwd(),
        "node_modules/pdfjs-dist/legacy/build/pdf.worker.mjs"
      );
      if (fs.existsSync(localWorkerPath)) {
        PDFParseClass.setWorker(pathToFileURL(localWorkerPath).href);
      } else {
        PDFParseClass.setWorker(
          "https://cdn.jsdelivr.net/npm/pdfjs-dist@5.4.296/legacy/build/pdf.worker.min.mjs"
        );
      }
    } catch {
      // Ignore worker setup error if already initialized
    }
  }

  return PDFParseClass;
}

export async function parsePdfBuffer(
  buffer: Buffer,
  fileName: string,
  fileSize: number
): Promise<ParsedDocument> {
  const PDFParseClass = await getPdfParserClass();
  const parser = new PDFParseClass({ data: buffer });
  await parser.load();

  const textData = await parser.getText();
  const rawText = (typeof textData === "string" ? textData : textData?.text) || "";
  const pages: any[] = textData?.pages || [];

  // Check if this appears to be a scanned PDF (almost no text despite pages)
  const isScannedPdf = pages.length > 0 && rawText.trim().length < 50;

  // Layout Analysis: convert line-by-line raw text into structured HTML
  const lines = rawText
    .split(/\r?\n/)
    .map((l: string) => l.trim())
    .filter((l: string) => !/^--\s*\d+\s*of\s*\d+\s*--$/.test(l)); // Remove page markers like "-- 1 of 2 --"

  const headings: ParsedHeading[] = [];
  const paragraphs: string[] = [];
  const tables: ParsedTable[] = [];

  let htmlParts: string[] = [];
  let inList: "ul" | "ol" | null = null;
  let currentTableRows: string[][] = [];

  const flushList = () => {
    if (inList) {
      htmlParts.push(`</${inList}>`);
      inList = null;
    }
  };

  const flushTable = () => {
    if (currentTableRows.length > 0) {
      const headers = currentTableRows[0];
      const bodyRows = currentTableRows.slice(1);
      tables.push({ headers, rows: bodyRows });

      let tHtml = `<table border="1" cellpadding="6" cellspacing="0" style="width:100%; border-collapse:collapse; margin: 1rem 0;"><thead><tr>`;
      for (const h of headers) {
        tHtml += `<th style="background:#f8fafc; padding:8px; border:1px solid #cbd5e1; font-weight:bold;">${h}</th>`;
      }
      tHtml += `</tr></thead><tbody>`;
      for (const r of bodyRows) {
        tHtml += `<tr>`;
        for (const cell of r) {
          tHtml += `<td style="padding:8px; border:1px solid #cbd5e1;">${cell}</td>`;
        }
        tHtml += `</tr>`;
      }
      tHtml += `</tbody></table>`;
      htmlParts.push(tHtml);
      currentTableRows = [];
    }
  };

  let isFirstHeading = true;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line) {
      flushList();
      flushTable();
      continue;
    }

    // Check for tabular line: 2 or more columns separated by \t or 3+ spaces
    const columns = line.split(/\t+|\s{3,}/).map((c: string) => c.trim()).filter(Boolean);
    if (columns.length >= 2 && line.length > 10) {
      flushList();
      currentTableRows.push(columns);
      continue;
    } else {
      flushTable();
    }

    // Check for unordered bullet item
    if (/^[•\-\*▪▫]\s+(.*)$/.test(line)) {
      const content = line.replace(/^[•\-\*▪▫]\s+/, "");
      if (inList !== "ul") {
        flushList();
        inList = "ul";
        htmlParts.push(`<ul style="margin: 0.5rem 0; padding-left: 1.5rem; list-style-type: disc;">`);
      }
      htmlParts.push(`<li>${content}</li>`);
      continue;
    }

    // Check for ordered list item (1. or 1) )
    if (/^\d+[\.\)]\s+(.*)$/.test(line)) {
      const content = line.replace(/^\d+[\.\)]\s+/, "");
      if (inList !== "ol") {
        flushList();
        inList = "ol";
        htmlParts.push(`<ol style="margin: 0.5rem 0; padding-left: 1.5rem; list-style-type: decimal;">`);
      }
      htmlParts.push(`<li>${content}</li>`);
      continue;
    }

    // List has ended
    flushList();

    // Check for Heading candidate:
    // 1. Short line (< 90 chars)
    // 2. Doesn't end with a period/comma/semicolon
    // 3. Either ALL CAPS, or Title Cased, or line 0
    const isHeadingCandidate =
      line.length < 90 &&
      !/[.,;:]$/.test(line) &&
      (isFirstHeading ||
        line === line.toUpperCase() ||
        /^(Introduction|Overview|Eligibility|Admission Process|Curriculum|Fee Structure|Syllabus|Career Opportunities|How to Apply|Key Features|FAQ|Frequently Asked Questions)/i.test(line));

    if (isHeadingCandidate) {
      if (isFirstHeading) {
        headings.push({ level: 1, text: line });
        htmlParts.push(`<h1>${line}</h1>`);
        isFirstHeading = false;
      } else if (line === line.toUpperCase() || line.length < 50) {
        headings.push({ level: 2, text: line });
        htmlParts.push(`<h2>${line}</h2>`);
      } else {
        headings.push({ level: 3, text: line });
        htmlParts.push(`<h3>${line}</h3>`);
      }
      continue;
    }

    // Standard paragraph
    paragraphs.push(line);
    htmlParts.push(`<p>${line}</p>`);
  }

  flushList();
  flushTable();

  // If no HTML was constructed (or very minimal), wrap text in paragraph
  let constructedHtml = htmlParts.join("\n");
  if (!constructedHtml.trim() && rawText.trim()) {
    constructedHtml = `<p>${rawText.replace(/\n\n+/g, "</p><p>")}</p>`;
  }

  const sanitizedHtml = sanitizeDocumentHtml(constructedHtml);
  const wordCount = rawText.trim() ? rawText.trim().split(/\s+/).length : 0;
  const charCount = rawText.length;

  return {
    fileName,
    fileType: "pdf",
    fileSize,
    htmlContent: sanitizedHtml,
    rawText,
    headings,
    paragraphs,
    tables,
    images: [],
    links: [],
    wordCount,
    charCount,
    isScannedPdf,
  };
}
