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

// Cleans messy clipboard HTML from Microsoft Word, Google Docs, or web pastes
function cleanPastedHtml(html: string): string {
  if (!html) return "";
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Remove scripts, styles, meta, comments, xml tags
    const removeElements = doc.querySelectorAll("script, style, meta, link, xml");
    removeElements.forEach((el) => el.remove());

    const cleanNode = (node: Node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const el = node as HTMLElement;
        const tagName = el.tagName.toLowerCase();

        // Strip non-standard Word & Google Docs attributes
        const attrsToRemove: string[] = [];
        for (let i = 0; i < el.attributes.length; i++) {
          const attr = el.attributes[i];
          const name = attr.name.toLowerCase();
          if (
            name.startsWith("data-") ||
            name.startsWith("xml:") ||
            name === "paraid" ||
            name === "paraeid" ||
            (name === "class" &&
              (attr.value.includes("SCXW") ||
                attr.value.includes("OutlineElement") ||
                attr.value.includes("Paragraph") ||
                attr.value.includes("TextRun") ||
                attr.value.includes("NormalTextRun") ||
                attr.value.includes("EOP")))
          ) {
            attrsToRemove.push(attr.name);
          }
        }
        attrsToRemove.forEach((a) => el.removeAttribute(a));

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
    return doc.body.innerHTML;
  } catch (err) {
    return html;
  }
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

  // Sync initial and external changes to Visual Editor
  useEffect(() => {
    if (editorRef.current && !isInternalUpdate.current) {
      if (editorRef.current.innerHTML !== (value || "")) {
        editorRef.current.innerHTML = value || "";
      }
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
      <table class="w-full my-4 border-collapse border border-slate-300">
        <thead>
          <tr class="bg-slate-100">
            <th class="border border-slate-300 p-2 text-left font-bold">Header 1</th>
            <th class="border border-slate-300 p-2 text-left font-bold">Header 2</th>
            <th class="border border-slate-300 p-2 text-left font-bold">Header 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-slate-300 p-2">Item 1</td>
            <td class="border border-slate-300 p-2">Details</td>
            <td class="border border-slate-300 p-2">Details</td>
          </tr>
          <tr>
            <td class="border border-slate-300 p-2">Item 2</td>
            <td class="border border-slate-300 p-2">Details</td>
            <td class="border border-slate-300 p-2">Details</td>
          </tr>
        </tbody>
      </table><p><br></p>
    `;
    execCmd("insertHTML", tableHtml);
  };

  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-xs focus-within:border-[#652a7c] focus-within:ring-2 focus-within:ring-[#652a7c]/10 transition-all">
      {/* Editor Main Toolbar */}
      <div className="bg-slate-50/95 px-3 py-2 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 select-none sticky top-0 z-20">
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
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              handleInsertTable();
            }}
            className="p-1.5 rounded-lg text-slate-700 hover:text-[#652a7c] hover:bg-slate-200/70 transition-colors"
            title="Insert Table"
          >
            <TableIcon className="w-4 h-4" />
          </button>
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
          className={`editor-content p-6 sm:p-8 min-h-[420px] outline-none text-slate-800 leading-relaxed text-sm sm:text-base focus:outline-none bg-white ${
            activeTab === "visual" ? "block" : "hidden"
          }`}
          data-placeholder={placeholder}
          style={{
            wordBreak: "break-word",
          }}
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
          <div className="prose-content p-6 sm:p-8 min-h-[420px] text-sm sm:text-base leading-relaxed bg-white">
            {value ? (
              <div dangerouslySetInnerHTML={{ __html: value }} />
            ) : (
              <p className="text-slate-400 italic">No content to preview.</p>
            )}
          </div>
        )}
      </div>

      {/* Visual Mode Tip Helper */}
      <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
        <span>
          {activeTab === "visual" &&
            "✏️ Visual Editor: Select any text and click H1, H2, H3, Bold, Lists, or Tables. Changes appear instantly."}
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
