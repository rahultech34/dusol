import mammoth from "mammoth";
import { ParsedDocument, ParsedHeading, ParsedTable, ParsedLink, ParsedImage } from "./types";
import { sanitizeDocumentHtml } from "./doc-sanitizer";

export async function parseDocxBuffer(
  buffer: Buffer,
  fileName: string,
  fileSize: number
): Promise<ParsedDocument> {
  const options = {
    styleMap: [
      "p[style-name='Heading 1'] => h1:fresh",
      "p[style-name='Heading 2'] => h2:fresh",
      "p[style-name='Heading 3'] => h3:fresh",
      "p[style-name='Heading 4'] => h4:fresh",
      "p[style-name='Heading 5'] => h5:fresh",
      "p[style-name='Heading 6'] => h6:fresh",
      "p[style-name='Title'] => h1:fresh",
      "p[style-name='Subtitle'] => h2:fresh",
      "p[style-name='Quote'] => blockquote:fresh",
      "r[style-name='Strong'] => strong",
      "r[style-name='Emphasis'] => em",
    ],
    convertImage: mammoth.images.imgElement((image) => {
      return image.read("base64").then((imageBuffer) => {
        return {
          src: `data:${image.contentType};base64,${imageBuffer}`,
        };
      });
    }),
  };

  const result = await mammoth.convertToHtml({ buffer }, options);
  const rawTextResult = await mammoth.extractRawText({ buffer });

  const rawHtml = result.value || "";
  const rawText = rawTextResult.value || "";
  const sanitizedHtml = sanitizeDocumentHtml(rawHtml);

  // Extract headings
  const headings: ParsedHeading[] = [];
  const headingRegex = /<h([1-6])[^>]*>(.*?)<\/h\1>/gi;
  let match: RegExpExecArray | null;
  while ((match = headingRegex.exec(sanitizedHtml)) !== null) {
    const level = parseInt(match[1], 10);
    const text = match[2].replace(/<[^>]+>/g, "").trim();
    if (text) {
      headings.push({ level, text });
    }
  }

  // Extract paragraphs
  const paragraphs: string[] = [];
  const pRegex = /<p[^>]*>(.*?)<\/p>/gi;
  while ((match = pRegex.exec(sanitizedHtml)) !== null) {
    const text = match[1].replace(/<[^>]+>/g, "").trim();
    if (text) {
      paragraphs.push(text);
    }
  }

  // Extract tables
  const tables: ParsedTable[] = [];
  const tableRegex = /<table[^>]*>([\s\S]*?)<\/table>/gi;
  while ((match = tableRegex.exec(sanitizedHtml)) !== null) {
    const tableHtml = match[1];
    const rows: string[][] = [];
    const headers: string[] = [];

    const rowRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
    let rowMatch: RegExpExecArray | null;
    let isFirstRow = true;

    while ((rowMatch = rowRegex.exec(tableHtml)) !== null) {
      const rowHtml = rowMatch[1];
      const cellRegex = /<(?:td|th)[^>]*>([\s\S]*?)<\/(?:td|th)>/gi;
      const rowCells: string[] = [];
      let cellMatch: RegExpExecArray | null;

      while ((cellMatch = cellRegex.exec(rowHtml)) !== null) {
        rowCells.push(cellMatch[1].replace(/<[^>]+>/g, "").trim());
      }

      if (rowCells.length > 0) {
        if (isFirstRow && rowHtml.includes("<th")) {
          headers.push(...rowCells);
        } else {
          rows.push(rowCells);
        }
        isFirstRow = false;
      }
    }

    if (rows.length > 0 || headers.length > 0) {
      tables.push({ headers, rows });
    }
  }

  // Extract links
  const links: ParsedLink[] = [];
  const linkRegex = /<a[^>]+href="([^"]+)"[^>]*>(.*?)<\/a>/gi;
  while ((match = linkRegex.exec(sanitizedHtml)) !== null) {
    const url = match[1];
    const text = match[2].replace(/<[^>]+>/g, "").trim();
    if (url && text) {
      links.push({ url, text });
    }
  }

  // Extract images
  const images: ParsedImage[] = [];
  const imgRegex = /<img[^>]+src="([^"]+)"(?:\s+alt="([^"]*)")?[^>]*>/gi;
  while ((match = imgRegex.exec(sanitizedHtml)) !== null) {
    const dataUrl = match[1];
    const alt = match[2] || undefined;
    images.push({ dataUrl, alt });
  }

  const wordCount = rawText.trim() ? rawText.trim().split(/\s+/).length : 0;
  const charCount = rawText.length;

  return {
    fileName,
    fileType: "docx",
    fileSize,
    htmlContent: sanitizedHtml,
    rawText,
    headings,
    paragraphs,
    tables,
    images,
    links,
    wordCount,
    charCount,
  };
}
