"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  List,
  ListOrdered,
  Quote,
  Link as LinkIcon,
  Image as ImageIcon,
  Code,
  Eye,
  FileText,
  Minus,
  RemoveFormatting,
  Undo2,
  Redo2,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Table as TableIcon,
} from "lucide-react";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

// Cleans messy clipboard HTML from Microsoft Word, Google Docs, Excel, or web pastes
function cleanPastedHtml(html: string): string {
  if (!html) return "";
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Remove scripts, styles, meta, comments, xml tags
    const removeElements = doc.querySelectorAll("script, style, meta, link, xml");
    removeElements.forEach((el) => el.remove());

    // Remove colgroups and cols that have hardcoded pixel/pt widths that squish columns
    const colgroups = doc.querySelectorAll("colgroup, col");
    colgroups.forEach((el) => el.remove());

    const cleanNode = (node: Node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const el = node as HTMLElement;
        const tagName = el.tagName.toLowerCase();

        // Strip non-standard Word & Google Docs attributes and fixed dimensions
        const attrsToRemove: string[] = [];
        for (let i = 0; i < el.attributes.length; i++) {
          const attr = el.attributes[i];
          const name = attr.name.toLowerCase();
          if (
            name.startsWith("data-") ||
            name.startsWith("xml:") ||
            name === "paraid" ||
            name === "paraeid" ||
            name === "width" ||
            name === "height" ||
            name === "cellspacing" ||
            name === "cellpadding" ||
            name === "border" ||
            name === "valign" ||
            name === "bgcolor" ||
            (name === "class" &&
              (attr.value.includes("SCXW") ||
                attr.value.includes("OutlineElement") ||
                attr.value.includes("Paragraph") ||
                attr.value.includes("TextRun") ||
                attr.value.includes("NormalTextRun") ||
                attr.value.includes("Mso") ||
                attr.value.includes("EOP")))
          ) {
            attrsToRemove.push(attr.name);
          }
        }
        attrsToRemove.forEach((a) => el.removeAttribute(a));

        // For tables, rows, cells: strip hardcoded width/height inline styles
        if (["table", "thead", "tbody", "tfoot", "tr", "th", "td"].includes(tagName)) {
          if (el.style.width) el.style.removeProperty("width");
          if (el.style.minWidth) el.style.removeProperty("min-width");
          if (el.style.maxWidth) el.style.removeProperty("max-width");
          if (el.style.height) el.style.removeProperty("height");
          if (el.style.fontFamily) el.style.removeProperty("font-family");
          if (el.style.lineHeight) el.style.removeProperty("line-height");
          if (el.style.whiteSpace) el.style.removeProperty("white-space");
          if (el.style.wordBreak) el.style.removeProperty("word-break");
          if (!el.getAttribute("style")) el.removeAttribute("style");
        }

        // Clean children first
        Array.from(el.childNodes).forEach(cleanNode);

        // Unwrap redundant empty spans
        if (tagName === "span" && el.attributes.length === 0) {
          const parent = el.parentNode;
          if (parent) {
            while (el.firstChild) {
              parent.insertBefore(el.firstChild, el);
            }
            parent.removeChild(el);
          }
        }
      }
    };

    Array.from(doc.body.childNodes).forEach(cleanNode);

    // If pasted table has no <thead> but has rows, convert first row cells to <th>
    const tables = doc.querySelectorAll("table");
    tables.forEach((tbl) => {
      const firstRow = tbl.querySelector("tr");
      if (firstRow && !tbl.querySelector("thead")) {
        const thead = doc.createElement("thead");
        const tds = firstRow.querySelectorAll("td");
        if (tds.length > 0) {
          tds.forEach((td) => {
            const th = doc.createElement("th");
            th.innerHTML = td.innerHTML;
            td.replaceWith(th);
          });
        }
        thead.appendChild(firstRow);
        tbl.insertBefore(thead, tbl.firstChild);
      }
    });

    return doc.body.innerHTML;
  } catch (err) {
    return html;
  }
}

// Sanitizes tables in DOM: cleans fixed width constraints, fixes split numbers like 1<br>0, and properly aligns number columns
function sanitizeEditorTables(container: HTMLElement | null) {
  if (!container) return;
  const tables = container.querySelectorAll("table");
  if (tables.length === 0) return;

  tables.forEach((tbl) => {
    // 1. Remove colgroup/col with fixed narrow widths
    tbl.querySelectorAll("colgroup, col").forEach((col) => col.remove());

    // 2. Remove fixed width attributes
    tbl.removeAttribute("width");
    tbl.removeAttribute("border");
    tbl.removeAttribute("cellspacing");
    tbl.removeAttribute("cellpadding");
    (tbl as HTMLElement).style.removeProperty("width");
    (tbl as HTMLElement).style.removeProperty("table-layout");

    // 3. Inspect rows
    const rows = Array.from(tbl.querySelectorAll("tr"));
    const firstRow = rows[0];
    const firstHeader = firstRow?.children[0];
    const headerText = (firstHeader?.textContent || "").trim().toLowerCase();

    const isIndexCol =
      headerText === "no." ||
      headerText === "no" ||
      headerText === "s.no." ||
      headerText === "s.no" ||
      headerText === "sr. no." ||
      headerText === "sr no" ||
      headerText === "#" ||
      headerText === "sl. no." ||
      headerText === "sl no";

    rows.forEach((row, rowIdx) => {
      const firstCell = row.children[0] as HTMLElement | undefined;
      if (firstCell) {
        // Fix any split numbers like "1<br>0", "1<br/>0", "1\n0"
        let inner = firstCell.innerHTML;
        if (/(\d+)\s*<br\s*\/?>\s*(\d+)/i.test(inner)) {
          inner = inner.replace(/(\d+)\s*<br\s*\/?>\s*(\d+)/gi, "$1$2");
          firstCell.innerHTML = inner;
        }

        const text = (firstCell.textContent || "").trim();
        const isNumCell = (rowIdx > 0 && /^\d{1,4}\.?$/.test(text)) || isIndexCol;

        if (isNumCell) {
          firstCell.classList.add("col-number");
          firstCell.style.width = "72px";
          firstCell.style.minWidth = "72px";
          firstCell.style.textAlign = "center";
          firstCell.style.whiteSpace = "nowrap";
          firstCell.style.paddingLeft = "8px";
          firstCell.style.paddingRight = "8px";
        }
      }

      // Clean all cells in row
      Array.from(row.children).forEach((cell) => {
        const htmlCell = cell as HTMLElement;
        htmlCell.removeAttribute("width");
        htmlCell.removeAttribute("height");
        htmlCell.removeAttribute("valign");
        htmlCell.removeAttribute("align");
        if (!htmlCell.classList.contains("col-number")) {
          if (htmlCell.style.width) htmlCell.style.removeProperty("width");
          if (htmlCell.style.minWidth) htmlCell.style.removeProperty("min-width");
        }
        if (htmlCell.style.maxWidth) htmlCell.style.removeProperty("max-width");
        if (htmlCell.style.height) htmlCell.style.removeProperty("height");
        if (htmlCell.style.wordBreak) htmlCell.style.removeProperty("word-break");

        // Clean paragraphs inside cell
        htmlCell.querySelectorAll("p, div, span").forEach((child) => {
          const htmlChild = child as HTMLElement;
          if (htmlChild.style.width) htmlChild.style.removeProperty("width");
          if (htmlChild.style.wordBreak) htmlChild.style.removeProperty("word-break");
          if (htmlChild.style.whiteSpace) htmlChild.style.removeProperty("white-space");
          htmlChild.style.margin = "0";
          htmlChild.style.padding = "0";
        });
      });
    });
  });
}

export function RichTextEditor({
  value,
  onChange,
  placeholder = "Write your article content here...",
}: RichTextEditorProps) {
  // Tabs: "visual" (WYSIWYG content), "code" (raw HTML tags), "preview" (final styled preview)
  const [activeTab, setActiveTab] = useState<"visual" | "code" | "preview">("visual");
  const editorRef = useRef<HTMLDivElement | null>(null);
  const isInternalUpdate = useRef(false);

  // Sync initial and external changes to Visual Editor and sanitize tables
  useEffect(() => {
    if (editorRef.current && !isInternalUpdate.current) {
      if (editorRef.current.innerHTML !== (value || "")) {
        editorRef.current.innerHTML = value || "";
      }
      sanitizeEditorTables(editorRef.current);
    }
    isInternalUpdate.current = false;
  }, [value, activeTab]);

  // Handle typing inside Visual Editor
  const handleEditorInput = useCallback(() => {
    if (editorRef.current) {
      isInternalUpdate.current = true;
      const html = editorRef.current.innerHTML;
      onChange(html === "<p><br></p>" || html === "<br>" ? "" : html);
    }
  }, [onChange]);

  // Execute formatting command on selected text in visual editor
  // IMPORTANT: Toolbar buttons use onMouseDown={(e) => e.preventDefault()} so selection is never lost
  const execCmd = (command: string, arg: string | undefined = undefined) => {
    if (activeTab !== "visual") {
      setActiveTab("visual");
      setTimeout(() => {
        editorRef.current?.focus();
        document.execCommand(command, false, arg);
        handleEditorInput();
      }, 50);
      return;
    }

    editorRef.current?.focus();
    document.execCommand(command, false, arg);
    handleEditorInput();
  };

  // Robust Heading and Block formatting with cross-browser compatibility
  const formatHeading = (tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "blockquote") => {
    if (activeTab !== "visual") {
      setActiveTab("visual");
      setTimeout(() => formatHeading(tag), 50);
      return;
    }

    editorRef.current?.focus();
    const cleanTag = tag.toLowerCase();

    // Check current selection
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) {
      editorRef.current?.focus();
    }

    try {
      // 1. Try modern tag name (Chrome, Edge, Safari prefer "h1", "h2")
      let ok = document.execCommand("formatBlock", false, cleanTag);
      if (!ok) {
        // 2. Try bracketed tag name (Firefox prefers "<h1>", "<h2>")
        ok = document.execCommand("formatBlock", false, `<${cleanTag}>`);
      }
      if (!ok) {
        // 3. Try uppercase tag name
        document.execCommand("formatBlock", false, cleanTag.toUpperCase());
      }
    } catch (e) {
      document.execCommand("formatBlock", false, `<${cleanTag}>`);
    }

    handleEditorInput();
  };

  // Smart paste handler that strips Word/Docs junk and pastes real formatted content
  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const htmlData = e.clipboardData.getData("text/html");
    const plainText = e.clipboardData.getData("text/plain");

    let cleanContent = "";
    if (htmlData) {
      cleanContent = cleanPastedHtml(htmlData);
    } else if (plainText) {
      // If user pasted raw HTML code string as text, render it into elements!
      if (plainText.trim().startsWith("<") && plainText.includes(">")) {
        cleanContent = cleanPastedHtml(plainText);
      } else {
        // Convert plain paragraphs
        cleanContent = plainText
          .split(/\n\s*\n/)
          .map((para) => `<p>${para.trim().replace(/\n/g, "<br/>")}</p>`)
          .join("");
      }
    }

    document.execCommand("insertHTML", false, cleanContent);
    sanitizeEditorTables(editorRef.current);
    handleEditorInput();
  };

  const handleInsertLink = () => {
    const url = prompt("Enter URL link (e.g. https://example.com):", "https://");
    if (url && url !== "https://") {
      execCmd("createLink", url);
    }
  };

  const handleInsertImage = () => {
    const url = prompt("Enter Image URL:", "https://");
    if (url && url !== "https://") {
      execCmd("insertImage", url);
    }
  };

  const handleInsertTable = () => {
    const tableHtml = `
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Undergraduate Course</th>
            <th>Stream</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>BA Programme with Computer Applications</td>
            <td>Arts and Computer Applications</td>
          </tr>
          <tr>
            <td>2</td>
            <td>BA Programme with Economics</td>
            <td>Arts and Economics</td>
          </tr>
          <tr>
            <td>3</td>
            <td>BA Programme with Education</td>
            <td>Arts and Education</td>
          </tr>
        </tbody>
      </table><p><br></p>
    `;
    execCmd("insertHTML", tableHtml);
  };

  const handleAddTableRow = () => {
    if (activeTab !== "visual") return;
    const sel = window.getSelection();
    if (!sel || !sel.anchorNode) {
      handleInsertTable();
      return;
    }
    let node: Node | null = sel.anchorNode;
    let table: HTMLTableElement | null = null;
    let tr: HTMLTableRowElement | null = null;

    while (node && node !== editorRef.current) {
      if (node.nodeName === "TR") tr = node as HTMLTableRowElement;
      if (node.nodeName === "TABLE") {
        table = node as HTMLTableElement;
        break;
      }
      node = node.parentNode;
    }

    if (table) {
      const colCount = table.rows[0]?.cells.length || 3;
      const targetIndex = tr ? tr.rowIndex + 1 : -1;
      const newRow = table.insertRow(targetIndex);
      for (let i = 0; i < colCount; i++) {
        const cell = newRow.insertCell(i);
        cell.innerHTML = i === 0 ? `${table.rows.length - 1}` : "Details";
      }
      handleEditorInput();
    } else {
      handleInsertTable();
    }
  };

  return (
    <div className="relative border border-slate-200 rounded-2xl bg-white shadow-xs focus-within:border-[#652a7c] focus-within:ring-2 focus-within:ring-[#652a7c]/10 transition-all">
      {/* Editor Main Toolbar: Sticky at top-16 right below the AdminHeader (64px) */}
      <div className="bg-slate-50/95 backdrop-blur-md px-3 py-2 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 select-none sticky top-16 z-20 rounded-t-2xl shadow-xs">
        {/* Formatting Actions */}
        <div className="flex flex-wrap items-center gap-1">
          {/* History */}
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              execCmd("undo");
            }}
            className="p-1.5 rounded-lg text-slate-700 hover:text-[#652a7c] hover:bg-slate-200/70 transition-colors"
            title="Undo (Ctrl+Z)"
          >
            <Undo2 className="w-4 h-4" />
          </button>
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              execCmd("redo");
            }}
            className="p-1.5 rounded-lg text-slate-700 hover:text-[#652a7c] hover:bg-slate-200/70 transition-colors"
            title="Redo (Ctrl+Y)"
          >
            <Redo2 className="w-4 h-4" />
          </button>

          <span className="w-px h-4 bg-slate-300 mx-1" />

          {/* Heading Formats: H1, H2, H3, H4, Paragraph */}
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              formatHeading("h1");
            }}
            className="px-2 py-1 rounded-lg text-xs font-extrabold text-slate-800 hover:text-[#652a7c] hover:bg-purple-100/60 border border-slate-200 hover:border-[#652a7c]/40 transition-colors flex items-center gap-1"
            title="Heading 1 (Main Title)"
          >
            <Heading1 className="w-4 h-4 text-[#652a7c]" />
            <span>H1</span>
          </button>
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              formatHeading("h2");
            }}
            className="px-2 py-1 rounded-lg text-xs font-bold text-slate-800 hover:text-[#652a7c] hover:bg-purple-100/60 border border-slate-200 hover:border-[#652a7c]/40 transition-colors flex items-center gap-1"
            title="Heading 2 (Section Title)"
          >
            <Heading2 className="w-4 h-4 text-[#652a7c]" />
            <span>H2</span>
          </button>
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              formatHeading("h3");
            }}
            className="px-2 py-1 rounded-lg text-xs font-semibold text-slate-800 hover:text-[#652a7c] hover:bg-purple-100/60 border border-slate-200 hover:border-[#652a7c]/40 transition-colors flex items-center gap-1"
            title="Heading 3 (Sub-section)"
          >
            <Heading3 className="w-4 h-4 text-[#652a7c]" />
            <span>H3</span>
          </button>
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              formatHeading("h4");
            }}
            className="px-2 py-1 rounded-lg text-xs font-semibold text-slate-800 hover:text-[#652a7c] hover:bg-purple-100/60 border border-slate-200 hover:border-[#652a7c]/40 transition-colors flex items-center gap-1"
            title="Heading 4"
          >
            <Heading4 className="w-4 h-4 text-[#652a7c]" />
            <span>H4</span>
          </button>
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              formatHeading("h5");
            }}
            className="px-2 py-1 rounded-lg text-xs font-semibold text-slate-800 hover:text-[#652a7c] hover:bg-purple-100/60 border border-slate-200 hover:border-[#652a7c]/40 transition-colors"
            title="Heading 5"
          >
            <span>H5</span>
          </button>
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              formatHeading("h6");
            }}
            className="px-2 py-1 rounded-lg text-xs font-semibold text-slate-800 hover:text-[#652a7c] hover:bg-purple-100/60 border border-slate-200 hover:border-[#652a7c]/40 transition-colors"
            title="Heading 6"
          >
            <span>H6</span>
          </button>
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              formatHeading("p");
            }}
            className="px-2 py-1 rounded-lg text-xs font-medium text-slate-700 hover:text-[#652a7c] hover:bg-slate-200/70 transition-colors"
            title="Normal Paragraph"
          >
            Normal (P)
          </button>

          <span className="w-px h-4 bg-slate-300 mx-1" />

          {/* Inline Text Styles */}
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              execCmd("bold");
            }}
            className="p-1.5 rounded-lg text-slate-700 hover:text-[#652a7c] hover:bg-slate-200/70 transition-colors"
            title="Bold (Ctrl+B)"
          >
            <Bold className="w-4 h-4" />
          </button>
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              execCmd("italic");
            }}
            className="p-1.5 rounded-lg text-slate-700 hover:text-[#652a7c] hover:bg-slate-200/70 transition-colors"
            title="Italic (Ctrl+I)"
          >
            <Italic className="w-4 h-4" />
          </button>
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              execCmd("underline");
            }}
            className="p-1.5 rounded-lg text-slate-700 hover:text-[#652a7c] hover:bg-slate-200/70 transition-colors"
            title="Underline (Ctrl+U)"
          >
            <UnderlineIcon className="w-4 h-4" />
          </button>
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              execCmd("strikeThrough");
            }}
            className="p-1.5 rounded-lg text-slate-700 hover:text-[#652a7c] hover:bg-slate-200/70 transition-colors"
            title="Strikethrough"
          >
            <Strikethrough className="w-4 h-4" />
          </button>

          <span className="w-px h-4 bg-slate-300 mx-1" />

          {/* Alignment */}
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              execCmd("justifyLeft");
            }}
            className="p-1.5 rounded-lg text-slate-700 hover:text-[#652a7c] hover:bg-slate-200/70 transition-colors"
            title="Align Left"
          >
            <AlignLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              execCmd("justifyCenter");
            }}
            className="p-1.5 rounded-lg text-slate-700 hover:text-[#652a7c] hover:bg-slate-200/70 transition-colors"
            title="Align Center"
          >
            <AlignCenter className="w-4 h-4" />
          </button>
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              execCmd("justifyRight");
            }}
            className="p-1.5 rounded-lg text-slate-700 hover:text-[#652a7c] hover:bg-slate-200/70 transition-colors"
            title="Align Right"
          >
            <AlignRight className="w-4 h-4" />
          </button>

          <span className="w-px h-4 bg-slate-300 mx-1" />

          {/* Lists & Quotes */}
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              execCmd("insertUnorderedList");
            }}
            className="p-1.5 rounded-lg text-slate-700 hover:text-[#652a7c] hover:bg-slate-200/70 transition-colors"
            title="Bullet List"
          >
            <List className="w-4 h-4" />
          </button>
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              execCmd("insertOrderedList");
            }}
            className="p-1.5 rounded-lg text-slate-700 hover:text-[#652a7c] hover:bg-slate-200/70 transition-colors"
            title="Numbered List"
          >
            <ListOrdered className="w-4 h-4" />
          </button>
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              formatHeading("blockquote");
            }}
            className="p-1.5 rounded-lg text-slate-700 hover:text-[#652a7c] hover:bg-slate-200/70 transition-colors"
            title="Quote Block"
          >
            <Quote className="w-4 h-4" />
          </button>

          <span className="w-px h-4 bg-slate-300 mx-1" />

          {/* Media, Tables & Links */}
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              handleInsertLink();
            }}
            className="p-1.5 rounded-lg text-slate-700 hover:text-[#652a7c] hover:bg-slate-200/70 transition-colors"
            title="Insert Link"
          >
            <LinkIcon className="w-4 h-4" />
          </button>
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              handleInsertImage();
            }}
            className="p-1.5 rounded-lg text-slate-700 hover:text-[#652a7c] hover:bg-slate-200/70 transition-colors"
            title="Insert Image"
          >
            <ImageIcon className="w-4 h-4" />
          </button>
          {/* Table Insertion & Row Management */}
          <div className="inline-flex items-center rounded-lg border border-slate-200 bg-white overflow-hidden shadow-2xs">
            <button
              type="button"
              onMouseDown={(e) => {
                e.preventDefault();
                handleInsertTable();
              }}
              className="p-1.5 text-slate-700 hover:text-[#652a7c] hover:bg-slate-100 transition-colors flex items-center gap-1 cursor-pointer"
              title="Insert Table (3 Columns)"
            >
              <TableIcon className="w-4 h-4" />
            </button>
            <button
              type="button"
              onMouseDown={(e) => {
                e.preventDefault();
                handleAddTableRow();
              }}
              className="px-1.5 py-1 text-[11px] font-bold text-slate-600 hover:text-[#652a7c] hover:bg-slate-100 border-l border-slate-200 transition-colors cursor-pointer"
              title="Add New Row to Current Table"
            >
              +Row
            </button>
            <button
              type="button"
              onMouseDown={(e) => {
                e.preventDefault();
                sanitizeEditorTables(editorRef.current);
                handleEditorInput();
              }}
              className="px-2 py-1 text-[10px] font-bold text-purple-700 bg-purple-50 hover:bg-purple-100 border-l border-purple-200 transition-colors cursor-pointer"
              title="Fix and Auto-Format Table Column Widths & Numbers"
            >
              Fix Table
            </button>
          </div>
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              execCmd("insertHorizontalRule");
            }}
            className="p-1.5 rounded-lg text-slate-700 hover:text-[#652a7c] hover:bg-slate-200/70 transition-colors"
            title="Horizontal Divider"
          >
            <Minus className="w-4 h-4" />
          </button>
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              execCmd("removeFormat");
            }}
            className="p-1.5 rounded-lg text-slate-700 hover:text-[#652a7c] hover:bg-slate-200/70 transition-colors"
            title="Clear Formatting"
          >
            <RemoveFormatting className="w-4 h-4" />
          </button>
        </div>

        {/* View Mode Tabs: Visual (Default), HTML Code, Preview */}
        <div className="flex items-center gap-1 bg-slate-200/70 p-0.5 rounded-xl text-xs font-semibold">
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => setActiveTab("visual")}
            className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === "visual"
                ? "bg-white text-[#652a7c] shadow-xs font-bold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Visual</span>
          </button>
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => setActiveTab("code")}
            className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === "code"
                ? "bg-white text-[#652a7c] shadow-xs font-bold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>HTML Code</span>
          </button>
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => setActiveTab("preview")}
            className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === "preview"
                ? "bg-white text-[#652a7c] shadow-xs font-bold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Preview</span>
          </button>
        </div>
      </div>

      {/* Editor Body */}
      <div className="relative min-h-[420px]">
        {/* 1. VISUAL WYSIWYG MODE (Default) */}
        <div
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          onInput={handleEditorInput}
          onPaste={handlePaste}
          className={`editor-content p-6 sm:p-8 min-h-[420px] outline-none text-slate-800 leading-relaxed text-sm sm:text-base focus:outline-none bg-white overflow-x-auto ${
            activeTab === "visual" ? "block" : "hidden"
          }`}
          data-placeholder={placeholder}
        />

        {/* 2. HTML SOURCE CODE MODE */}
        {activeTab === "code" && (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Edit raw HTML code..."
            rows={16}
            className="w-full p-6 outline-none text-xs sm:text-sm text-slate-900 leading-relaxed font-mono resize-y bg-slate-50/50 min-h-[420px]"
          />
        )}

        {/* 3. FINAL USER PREVIEW MODE */}
        {activeTab === "preview" && (
          <div className="prose-content p-6 sm:p-8 min-h-[420px] text-sm sm:text-base leading-relaxed bg-white overflow-x-auto">
            {value ? (
              <div dangerouslySetInnerHTML={{ __html: value }} />
            ) : (
              <p className="text-slate-400 italic">No content to preview.</p>
            )}
          </div>
        )}
      </div>

      {/* Visual Mode Tip Helper */}
      <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 rounded-b-2xl">
        <span>
          {activeTab === "visual" &&
            "✏️ Visual Editor: Sticky toolbar stays fixed as you scroll. Select text or click +Row to expand tables."}
          {activeTab === "code" && "💻 HTML Code Mode: View or edit underlying HTML tags directly."}
          {activeTab === "preview" && "👁️ Preview Mode: Exact replica of how readers will see this post."}
        </span>
        <span className="font-mono text-slate-400">
          {value ? value.replace(/<[^>]*>/g, "").trim().split(/\s+/).filter(Boolean).length : 0} words
        </span>
      </div>
    </div>
  );
}
