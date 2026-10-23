import {
  ImportSection,
  ParsedDocument,
  FieldMappingResult,
  MappedField,
} from "./types";
import slugify from "slugify";

function toSlug(str: string): string {
  return slugify(str || "", { lower: true, strict: true }) || "imported-item";
}

// Helper to find a section block following a heading
function findSectionByKeywords(
  doc: ParsedDocument,
  keywords: string[]
): string {
  const regex = new RegExp(`(?:<h[1-6][^>]*>|<strong>|<b>)(?:[\\s\\d\\.\\-]*)(?:${keywords.join("|")})[\\s\\S]*?(?:<\\/h[1-6]>|<\\/strong>|<\\/b>)([\\s\\S]*?)(?=<h[1-6]|<table|$)`, "i");
  const match = regex.exec(doc.htmlContent);
  if (match && match[1]) {
    const text = match[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    if (text.length > 10) return text;
  }

  // Fallback search in raw text paragraphs
  for (let i = 0; i < doc.paragraphs.length; i++) {
    const p = doc.paragraphs[i];
    if (keywords.some((kw) => new RegExp(`\\b${kw}\\b`, "i").test(p))) {
      // Return next paragraph if current is just a label
      if (p.length < 50 && doc.paragraphs[i + 1]) {
        return doc.paragraphs[i + 1];
      }
      return p;
    }
  }

  return "";
}

export function mapParsedDocumentToSection(
  doc: ParsedDocument,
  rawSection: ImportSection
): FieldMappingResult {
  let section: ImportSection = rawSection;
  if ((rawSection as string) === "ug-programs") section = "ug";
  if ((rawSection as string) === "pg-programs") section = "pg";
  if ((rawSection as string) === "mba-specializations") section = "mba";

  const fields: Record<string, MappedField> = {};

  // 1. Determine Title / Name
  const h1 = doc.headings.find((h) => h.level === 1)?.text;
  const anyHeading = doc.headings[0]?.text;
  const firstParagraph = doc.paragraphs[0];
  const fallbackTitle = doc.fileName.replace(/\.[^/.]+$/, "").replace(/[-_]+/g, " ");

  const detectedTitle =
    h1 ||
    anyHeading ||
    (firstParagraph && firstParagraph.length < 90 ? firstParagraph : fallbackTitle);

  const titleConfidence = h1 ? "high" : anyHeading ? "medium" : "low";

  if (section === "blogs") {
    // Title
    fields.title = {
      value: detectedTitle,
      confidence: titleConfidence,
      sourceLabel: h1 ? "Extracted from H1 Heading" : "Extracted from Document Header",
    };

    // Slug
    fields.slug = {
      value: toSlug(detectedTitle),
      confidence: "high",
      sourceLabel: "Generated from Title",
    };

    // Excerpt
    const excerptParagraph = doc.paragraphs.find((p) => p !== detectedTitle && p.length > 40) || "";
    fields.excerpt = {
      value: excerptParagraph.slice(0, 220),
      confidence: excerptParagraph ? "high" : "low",
      sourceLabel: "First Lead Paragraph",
      warning: !excerptParagraph ? "No clear introductory summary found." : undefined,
    };

    // Content
    fields.content = {
      value: doc.htmlContent,
      confidence: "high",
      sourceLabel: "Full Structured Document HTML",
    };

    // Category
    const textLower = doc.rawText.toLowerCase();
    let detectedCategory = "General";
    if (textLower.includes("admission") || textLower.includes("apply") || textLower.includes("registration")) {
      detectedCategory = "Admissions";
    } else if (textLower.includes("exam") || textLower.includes("hall ticket") || textLower.includes("date sheet")) {
      detectedCategory = "Examinations";
    } else if (textLower.includes("syllabus") || textLower.includes("curriculum") || textLower.includes("books")) {
      detectedCategory = "Syllabus & Material";
    } else if (textLower.includes("career") || textLower.includes("placement") || textLower.includes("salary")) {
      detectedCategory = "Career Guidance";
    }

    fields.category = {
      value: detectedCategory,
      confidence: detectedCategory !== "General" ? "medium" : "low",
      sourceLabel: "Detected from Document Keywords",
    };

    // Tags
    const tags: string[] = ["DU SOL"];
    if (textLower.includes("admission")) tags.push("Admission 2026");
    if (textLower.includes("exam")) tags.push("Exams");
    if (textLower.includes("syllabus")) tags.push("Syllabus");
    if (textLower.includes("mba")) tags.push("MBA");
    if (textLower.includes("fees")) tags.push("Fee Structure");

    fields.tags = {
      value: tags,
      confidence: "medium",
      sourceLabel: "Auto-extracted Topic Tags",
    };

    // Author
    const authorMatch = /(?:by|author|written by)[:\s]+([A-Z][a-zA-Z\s]{2,25})/i.exec(doc.rawText);
    fields.author = {
      value: authorMatch ? authorMatch[1].trim() : "DU SOL Editorial Team",
      confidence: authorMatch ? "high" : "low",
      sourceLabel: authorMatch ? "Extracted from Byline" : "Default Editorial Author",
    };

    // SEO Title & Description
    fields.seoTitle = {
      value: `${detectedTitle} | DU SOL 2026`,
      confidence: "high",
      sourceLabel: "Auto-generated Meta Title",
    };

    fields.seoDescription = {
      value: excerptParagraph.slice(0, 160) || `${detectedTitle} - Official guide and updates from DU SOL.`,
      confidence: "high",
      sourceLabel: "Auto-generated Meta Description",
    };
  } else if (section === "ug" || section === "pg" || section === "mba") {
    // Programs
    fields.name = {
      value: detectedTitle,
      confidence: titleConfidence,
      sourceLabel: h1 ? "Extracted from H1 Heading" : "Extracted from Title",
    };

    fields.slug = {
      value: toSlug(detectedTitle),
      confidence: "high",
      sourceLabel: "Generated from Name",
    };

    fields.type = {
      value: section,
      confidence: "high",
      sourceLabel: "Selected Admin Section",
    };

    // Degree Name
    let detectedDegree =
      section === "ug"
        ? "Bachelor Degree"
        : section === "pg"
        ? "Master Degree"
        : "Master of Business Administration (MBA)";

    if (/bachelor of arts|b\.a\./i.test(detectedTitle)) detectedDegree = "Bachelor of Arts";
    if (/bachelor of commerce|b\.com/i.test(detectedTitle)) detectedDegree = "Bachelor of Commerce";
    if (/bba|business administration/i.test(detectedTitle)) detectedDegree = "Bachelor of Business Administration";
    if (/master of arts|m\.a\./i.test(detectedTitle)) detectedDegree = "Master of Arts";
    if (/master of commerce|m\.com/i.test(detectedTitle)) detectedDegree = "Master of Commerce";

    fields.degree = {
      value: detectedDegree,
      confidence: "medium",
      sourceLabel: "Academic Degree Mapping",
    };

    // Duration
    const durationMatch = /(?:duration|course length)[:\s]*(\d+\s*(?:years?|semesters?)(?:\s*\(\d+\s*semesters?\))?)/i.exec(doc.rawText);
    fields.duration = {
      value: durationMatch ? durationMatch[1] : (section === "ug" ? "3 Years (6 Semesters)" : "2 Years (4 Semesters)"),
      confidence: durationMatch ? "high" : "medium",
      sourceLabel: durationMatch ? "Extracted from Document Text" : "Standard Degree Duration",
    };

    // Overview
    const overviewPara = doc.paragraphs.find((p) => p !== detectedTitle && p.length > 50) || "";
    fields.overview = {
      value: overviewPara,
      confidence: overviewPara ? "high" : "low",
      sourceLabel: "Introductory Program Summary",
    };

    // Description (Full HTML)
    fields.description = {
      value: doc.htmlContent,
      confidence: "high",
      sourceLabel: "Full Structured Course HTML",
    };

    // Eligibility
    const eligibilityText = findSectionByKeywords(doc, ["eligibility", "eligibility criteria", "qualifications", "minimum marks", "admission eligibility"]);
    fields.eligibility = {
      value: eligibilityText || (section === "ug" ? "Candidates must have passed 10+2 from a recognized board with minimum 45% marks." : "Bachelor degree in relevant stream from a recognized university."),
      confidence: eligibilityText ? "high" : "low",
      sourceLabel: eligibilityText ? "Extracted from Eligibility Section" : "Standard University Minimum",
      warning: !eligibilityText ? "Eligibility was not explicitly found; review carefully." : undefined,
    };

    // Admission Process
    const admissionText = findSectionByKeywords(doc, ["admission process", "how to apply", "application procedure", "selection criteria"]);
    fields.admissionProcess = {
      value: admissionText || "Direct online merit-based admission through DU SOL portal without CUET examination.",
      confidence: admissionText ? "high" : "medium",
      sourceLabel: admissionText ? "Extracted from Admission Process Section" : "Standard Merit Admission",
    };

    // Curriculum & Fees from Tables
    const curriculum: { semesterOrYear: string; subjects: string[] }[] = [];
    const fees: { title: string; amount: string; note?: string }[] = [];

    // Analyze extracted tables
    for (const table of doc.tables) {
      const headersStr = table.headers.join(" ").toLowerCase();
      // Check if curriculum table
      if (headersStr.includes("semester") || headersStr.includes("subject") || headersStr.includes("paper")) {
        for (const row of table.rows) {
          if (row.length >= 2) {
            curriculum.push({
              semesterOrYear: row[0],
              subjects: row[1].split(/[,;\n]+/).map((s) => s.trim()).filter(Boolean),
            });
          }
        }
      }
      // Check if fee table
      if (headersStr.includes("fee") || headersStr.includes("amount") || headersStr.includes("year")) {
        for (const row of table.rows) {
          if (row.length >= 2) {
            fees.push({
              title: row[0],
              amount: row[1],
              note: row[2] || undefined,
            });
          }
        }
      }
    }

    // Default fallback curriculum if none extracted
    if (curriculum.length === 0) {
      curriculum.push(
        { semesterOrYear: "Semester 1", subjects: ["Discipline Core 1", "Discipline Core 2", "Environmental Studies"] },
        { semesterOrYear: "Semester 2", subjects: ["Discipline Core 3", "Discipline Core 4", "Language Course"] }
      );
    }

    fields.curriculum = {
      value: curriculum,
      confidence: doc.tables.length > 0 ? "high" : "low",
      sourceLabel: doc.tables.length > 0 ? "Extracted from Syllabus Table" : "Initial Curriculum Scaffold",
    };

    // Default fallback fees
    if (fees.length === 0) {
      fees.push({
        title: "First Year Annual Tuition Fee",
        amount: section === "mba" ? "₹47,500" : "₹8,320",
        note: "Includes digital study material and examination charges",
      });
    }

    fields.fees = {
      value: fees,
      confidence: doc.tables.length > 0 ? "high" : "low",
      sourceLabel: doc.tables.length > 0 ? "Extracted from Fee Chart Table" : "Estimated Tuition Breakdown",
    };

    // Career Opportunities
    const careersText = findSectionByKeywords(doc, ["career", "careers", "career opportunities", "job roles", "scope"]);
    const careers = careersText
      ? careersText.split(/[,;\n•\-]+/).map((s) => s.trim()).filter((s) => s.length > 2 && s.length < 50)
      : ["Corporate Management", "Public Sector Employment", "Higher Education (Ph.D/M.Phil)", "Research & Analytics"];

    fields.careerOpportunities = {
      value: careers.slice(0, 6),
      confidence: careersText ? "high" : "medium",
      sourceLabel: careersText ? "Extracted from Career Opportunities" : "Standard Career Pathways",
    };

    fields.seoTitle = {
      value: `${detectedTitle} Admission 2026 | DU SOL`,
      confidence: "high",
      sourceLabel: "Auto-generated Meta Title",
    };

    fields.seoDescription = {
      value: overviewPara.slice(0, 160) || `Complete syllabus, fees, and eligibility details for ${detectedTitle} from DU SOL.`,
      confidence: "high",
      sourceLabel: "Auto-generated Meta Description",
    };
  } else if (section === "student-zone") {
    // Student Zone
    fields.title = {
      value: detectedTitle,
      confidence: titleConfidence,
      sourceLabel: h1 ? "Extracted from H1 Heading" : "Extracted from Title",
    };

    fields.slug = {
      value: toSlug(detectedTitle),
      confidence: "high",
      sourceLabel: "Generated from Title",
    };

    const textLower = doc.rawText.toLowerCase();
    let category = "General Guidance";
    if (textLower.includes("hall ticket") || textLower.includes("admit card")) category = "Exams & Hall Ticket";
    else if (textLower.includes("fee") || textLower.includes("payment")) category = "Course Fees";
    else if (textLower.includes("result") || textLower.includes("marksheet")) category = "Results & Marks";
    else if (textLower.includes("study material") || textLower.includes("book")) category = "Study Material";
    else if (textLower.includes("library")) category = "Student Portals";
    else if (textLower.includes("assignment")) category = "Assignments & Practical";
    else if (textLower.includes("admission")) category = "Admissions";

    fields.category = {
      value: category,
      confidence: category !== "General Guidance" ? "high" : "medium",
      sourceLabel: "Detected from Topic & Terminology",
    };

    const summaryPara = doc.paragraphs.find((p) => p !== detectedTitle && p.length > 40) || "";
    fields.summary = {
      value: summaryPara.slice(0, 240),
      confidence: summaryPara ? "high" : "low",
      sourceLabel: "Introductory Summary",
    };

    // Quick Steps extraction
    const quickSteps: string[] = [];
    const stepRegex = /(?:step\s*\d+|^\d+[\.\)])\s*[:\-]?\s*([^\n\r]+)/gi;
    let stepMatch: RegExpExecArray | null;
    while ((stepMatch = stepRegex.exec(doc.rawText)) !== null) {
      const step = stepMatch[1].trim();
      if (step.length > 8 && step.length < 200) {
        quickSteps.push(step);
      }
    }

    if (quickSteps.length === 0) {
      quickSteps.push(
        "Visit the official university student portal.",
        "Log in using your Roll Number and Barcode / Date of Birth.",
        "Navigate to the designated service section from your student dashboard."
      );
    }

    fields.quickSteps = {
      value: quickSteps.slice(0, 6),
      confidence: quickSteps.length > 0 ? "high" : "medium",
      sourceLabel: "Extracted Step-by-Step Instructions",
    };

    fields.content = {
      value: doc.htmlContent,
      confidence: "high",
      sourceLabel: "Full Structured Guide HTML",
    };

    // Official portal link
    fields.externalLink = {
      value: "",
      confidence: "low",
      sourceLabel: "Official University Link",
    };

    // Find any download link
    const dlLink = doc.links.find((l) => l.url.toLowerCase().endsWith(".pdf"))?.url || "";
    fields.downloadUrl = {
      value: dlLink,
      confidence: dlLink ? "high" : "unmapped",
      sourceLabel: dlLink ? "Detected PDF Download Link" : "None detected",
    };

    fields.seoTitle = {
      value: `${detectedTitle} | DU SOL 2026`,
      confidence: "high",
      sourceLabel: "Auto-generated Meta Title",
    };

    fields.seoDescription = {
      value: summaryPara.slice(0, 160) || `Official instructions and portal link for ${detectedTitle}.`,
      confidence: "high",
      sourceLabel: "Auto-generated Meta Description",
    };
  } else if (section === "categories") {
    // Categories
    fields.name = {
      value: detectedTitle,
      confidence: titleConfidence,
      sourceLabel: "Category Name",
    };

    fields.slug = {
      value: toSlug(detectedTitle),
      confidence: "high",
      sourceLabel: "Generated from Name",
    };

    const desc = doc.paragraphs.find((p) => p !== detectedTitle) || "";
    fields.description = {
      value: desc.slice(0, 200),
      confidence: desc ? "high" : "low",
      sourceLabel: "Category Description",
    };
  }

  return {
    section,
    fields,
    rawParsed: doc,
  };
}
