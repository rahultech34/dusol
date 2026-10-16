import { ImportSection, ExportFormat } from "./types";
import { Document, Paragraph, TextRun, Packer, HeadingLevel, Table, TableRow, TableCell, WidthType, BorderStyle } from "docx";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

// Strip HTML tags to get clean plain text
export function stripHtml(html: string): string {
  if (!html) return "";
  return html
    .replace(/<br\s*[\/]?>/gi, "\n")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<\/h[1-6]>/gi, "\n\n")
    .replace(/<li[^>]*>/gi, "• ")
    .replace(/<\/li>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

// ---------------- 1. JSON EXPORT ----------------
export function generateJsonExport(items: any[], section: ImportSection): string {
  return JSON.stringify(
    {
      exportedAt: new Date().toISOString(),
      section,
      totalCount: items.length,
      records: items,
    },
    null,
    2
  );
}

// ---------------- 2. CSV EXPORT ----------------
export function generateCsvExport(items: any[], section: ImportSection): string {
  if (items.length === 0) return "";

  let headers: string[] = [];
  let rowMapper: (item: any) => string[] = () => [];

  if (section === "blogs") {
    headers = ["Title", "Slug", "Category", "Author", "Status", "Tags", "Excerpt", "Created At", "Updated At"];
    rowMapper = (b) => [
      b.title || "",
      b.slug || "",
      b.category || "",
      b.author || "",
      b.status || "",
      Array.isArray(b.tags) ? b.tags.join("; ") : "",
      stripHtml(b.excerpt || "").slice(0, 150),
      b.createdAt || "",
      b.updatedAt || "",
    ];
  } else if (section === "ug" || section === "pg" || section === "mba") {
    headers = ["Name", "Slug", "Type", "Degree", "Duration", "Eligibility", "Admission Process", "Status", "Created At"];
    rowMapper = (p) => [
      p.name || "",
      p.slug || "",
      p.type || section,
      p.degree || "",
      p.duration || "",
      stripHtml(p.eligibility || "").slice(0, 150),
      stripHtml(p.admissionProcess || "").slice(0, 150),
      p.status || "",
      p.createdAt || "",
    ];
  } else if (section === "student-zone") {
    headers = ["Title", "Slug", "Category", "External Link", "Download URL", "Quick Steps Count", "Status", "Created At"];
    rowMapper = (s) => [
      s.title || "",
      s.slug || "",
      s.category || "",
      s.externalLink || "",
      s.downloadUrl || "",
      String(s.quickSteps?.length || 0),
      s.status || "",
      s.createdAt || "",
    ];
  } else {
    // Categories
    headers = ["Name", "Slug", "Description"];
    rowMapper = (c) => [c.name || "", c.slug || "", c.description || ""];
  }

  const escapeCsv = (val: string) => {
    const clean = String(val ?? "").replace(/"/g, '""');
    return `"${clean}"`;
  };

  const csvRows = [
    headers.map(escapeCsv).join(","),
    ...items.map((item) => rowMapper(item).map(escapeCsv).join(",")),
  ];

  return csvRows.join("\n");
}

// ---------------- 3. DOCX EXPORT ----------------
export async function generateDocxExport(items: any[], section: ImportSection): Promise<Buffer> {
  const sectionChildren: any[] = [];

  // Header Title
  const sectionTitle =
    section === "blogs"
      ? "DU SOL Blogs & Articles Export"
      : section === "ug"
      ? "DU SOL Undergraduate (UG) Programs"
      : section === "pg"
      ? "DU SOL Postgraduate (PG) Programs"
      : section === "mba"
      ? "DU SOL MBA Specializations Export"
      : section === "student-zone"
      ? "DU SOL Student Zone Resources Export"
      : "DU SOL Content Categories Export";

  sectionChildren.push(
    new Paragraph({
      text: sectionTitle,
      heading: HeadingLevel.TITLE,
      spacing: { after: 120 },
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: `Exported on: ${new Date().toLocaleString()} · Total Records: ${items.length}`,
          italics: true,
          color: "666666",
        }),
      ],
      spacing: { after: 300 },
    })
  );

  for (let idx = 0; idx < items.length; idx++) {
    const item = items[idx];
    const title = item.name || item.title || item.name || `Record #${idx + 1}`;

    sectionChildren.push(
      new Paragraph({
        text: `${idx + 1}. ${title}`,
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 240, after: 100 },
      })
    );

    // Metadata Table for this record
    const metaRows: TableRow[] = [];
    const addMetaRow = (label: string, value: string) => {
      if (!value) return;
      metaRows.push(
        new TableRow({
          children: [
            new TableCell({
              width: { size: 25, type: WidthType.PERCENTAGE },
              children: [new Paragraph({ children: [new TextRun({ text: label, bold: true })] })],
            }),
            new TableCell({
              width: { size: 75, type: WidthType.PERCENTAGE },
              children: [new Paragraph({ text: value })],
            }),
          ],
        })
      );
    };

    if (item.slug) addMetaRow("Slug", item.slug);
    if (item.status) addMetaRow("Status", item.status.toUpperCase());
    if (item.category) addMetaRow("Category", item.category);
    if (item.author) addMetaRow("Author", item.author);
    if (item.degree) addMetaRow("Degree", item.degree);
    if (item.duration) addMetaRow("Duration", item.duration);
    if (item.externalLink) addMetaRow("External Link", item.externalLink);

    if (metaRows.length > 0) {
      sectionChildren.push(
        new Table({
          rows: metaRows,
          width: { size: 100, type: WidthType.PERCENTAGE },
        }),
        new Paragraph({ spacing: { after: 120 } })
      );
    }

    // Body content or overview
    const bodyText =
      stripHtml(item.content || item.description || item.overview || item.summary || "");

    if (bodyText) {
      const paragraphs = bodyText.split(/\n\n+/);
      for (const p of paragraphs.slice(0, 15)) {
        sectionChildren.push(
          new Paragraph({
            text: p,
            spacing: { after: 100 },
          })
        );
      }
    }

    // Fees Table if present
    if (Array.isArray(item.fees) && item.fees.length > 0) {
      sectionChildren.push(
        new Paragraph({
          text: "Annual Fee Structure",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 150, after: 80 },
        })
      );

      const feeRows: TableRow[] = [
        new TableRow({
          children: [
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Fee Component", bold: true })] })] }),
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Amount", bold: true })] })] }),
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Note", bold: true })] })] }),
          ],
        }),
        ...item.fees.map(
          (f: any) =>
            new TableRow({
              children: [
                new TableCell({ children: [new Paragraph({ text: f.title || "" })] }),
                new TableCell({ children: [new Paragraph({ text: f.amount || "" })] }),
                new TableCell({ children: [new Paragraph({ text: f.note || "-" })] }),
              ],
            })
        ),
      ];

      sectionChildren.push(new Table({ rows: feeRows, width: { size: 100, type: WidthType.PERCENTAGE } }));
    }

    // Curriculum if present
    if (Array.isArray(item.curriculum) && item.curriculum.length > 0) {
      sectionChildren.push(
        new Paragraph({
          text: "Curriculum & Syllabus",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 150, after: 80 },
        })
      );

      for (const sem of item.curriculum) {
        sectionChildren.push(
          new Paragraph({
            children: [new TextRun({ text: sem.semesterOrYear || "Semester", bold: true })],
            spacing: { before: 80, after: 40 },
          })
        );
        if (Array.isArray(sem.subjects)) {
          for (const sub of sem.subjects) {
            sectionChildren.push(
              new Paragraph({
                text: `• ${sub}`,
                spacing: { after: 20 },
              })
            );
          }
        }
      }
    }

    // Divider between items
    sectionChildren.push(
      new Paragraph({
        text: "________________________________________________________",
        spacing: { before: 200, after: 200 },
      })
    );
  }

  const doc = new Document({
    sections: [
      {
        properties: {},
        children: sectionChildren,
      },
    ],
  });

  return await Packer.toBuffer(doc);
}

// ---------------- 4. PDF EXPORT ----------------
export async function generatePdfExport(items: any[], section: ImportSection): Promise<Buffer> {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const sectionTitle =
    section === "blogs"
      ? "DU SOL Blogs & Articles Export"
      : section === "ug"
      ? "DU SOL Undergraduate (UG) Programs"
      : section === "pg"
      ? "DU SOL Postgraduate (PG) Programs"
      : section === "mba"
      ? "DU SOL MBA Specializations Export"
      : section === "student-zone"
      ? "DU SOL Student Zone Resources Export"
      : "DU SOL Content Categories Export";

  // Brand Header
  doc.setFillColor(101, 42, 124); // #652a7c
  doc.rect(0, 0, 210, 22, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("UNIVERSITY OF DELHI · SCHOOL OF OPEN LEARNING", 14, 11);

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text("ADMINISTRATIVE CONTENT MANAGEMENT SYSTEM EXPORT", 14, 17);

  // Document Info
  doc.setTextColor(30, 41, 59);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text(sectionTitle, 14, 34);

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(100, 116, 139);
  doc.text(`Generated: ${new Date().toLocaleString()} | Total Records: ${items.length}`, 14, 40);

  // Summary Table of all items
  let tableHeaders: string[] = [];
  let tableRows: string[][] = [];

  if (section === "blogs") {
    tableHeaders = ["#", "Title", "Category", "Author", "Status", "Date"];
    tableRows = items.map((b, i) => [
      String(i + 1),
      (b.title || "").slice(0, 40),
      b.category || "General",
      b.author || "Editorial",
      (b.status || "").toUpperCase(),
      b.updatedAt ? new Date(b.updatedAt).toLocaleDateString() : "-",
    ]);
  } else if (section === "ug" || section === "pg" || section === "mba") {
    tableHeaders = ["#", "Program Name", "Degree", "Duration", "Status"];
    tableRows = items.map((p, i) => [
      String(i + 1),
      (p.name || "").slice(0, 40),
      p.degree || "-",
      p.duration || "-",
      (p.status || "").toUpperCase(),
    ]);
  } else if (section === "student-zone") {
    tableHeaders = ["#", "Title", "Category", "Portal Link", "Status"];
    tableRows = items.map((s, i) => [
      String(i + 1),
      (s.title || "").slice(0, 40),
      s.category || "-",
      (s.externalLink || "").slice(0, 30),
      (s.status || "").toUpperCase(),
    ]);
  } else {
    tableHeaders = ["#", "Category Name", "Slug", "Description"];
    tableRows = items.map((c, i) => [
      String(i + 1),
      c.name || "-",
      c.slug || "-",
      (c.description || "").slice(0, 50),
    ]);
  }

  const autoTableFn = (autoTable as any).default || autoTable;
  autoTableFn(doc, {
    startY: 46,
    head: [tableHeaders],
    body: tableRows,
    theme: "striped",
    headStyles: {
      fillColor: [101, 42, 124],
      textColor: [255, 255, 255],
      fontStyle: "bold",
      fontSize: 8,
    },
    styles: {
      fontSize: 8,
      cellPadding: 2.5,
      overflow: "linebreak",
    },
  });

  const arrayBuffer = doc.output("arraybuffer");
  return Buffer.from(arrayBuffer);
}
