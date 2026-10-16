export type ImportSection =
  | "blogs"
  | "ug"
  | "pg"
  | "mba"
  | "student-zone"
  | "categories";

export type ExportFormat = "json" | "csv" | "docx" | "pdf";

export type ExportScope = "all" | "selected" | "filtered";

export interface ParsedTable {
  headers: string[];
  rows: string[][];
}

export interface ParsedImage {
  alt?: string;
  dataUrl?: string;
}

export interface ParsedLink {
  text: string;
  url: string;
}

export interface ParsedHeading {
  level: number;
  text: string;
}

export interface ParsedDocument {
  fileName: string;
  fileType: "pdf" | "docx";
  fileSize: number;
  htmlContent: string;
  rawText: string;
  headings: ParsedHeading[];
  paragraphs: string[];
  tables: ParsedTable[];
  images: ParsedImage[];
  links: ParsedLink[];
  wordCount: number;
  charCount: number;
  isScannedPdf?: boolean;
}

export type FieldConfidence = "high" | "medium" | "low" | "unmapped";

export interface MappedField<T = any> {
  value: T;
  confidence: FieldConfidence;
  sourceLabel: string;
  warning?: string;
}

export interface FieldMappingResult {
  section: ImportSection;
  fields: Record<string, MappedField>;
  rawParsed: ParsedDocument;
}

export interface ImportHistoryItem {
  id: string;
  fileName: string;
  fileSize: number;
  fileType: "pdf" | "docx";
  section: ImportSection;
  recordId: string;
  recordTitle: string;
  status: "draft" | "published";
  adminEmail: string;
  createdAt: string;
}
