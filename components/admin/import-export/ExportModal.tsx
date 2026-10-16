"use client";

import React, { useState } from "react";
import {
  X,
  Download,
  FileCode,
  FileSpreadsheet,
  FileText,
  FileCheck,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { ImportSection, ExportFormat, ExportScope } from "@/lib/doc-import/types";

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  section: ImportSection;
  sectionTitle: string;
  totalCount: number;
  selectedIds?: string[];
}

export function ExportModal({
  isOpen,
  onClose,
  section,
  sectionTitle,
  totalCount,
  selectedIds = [],
}: ExportModalProps) {
  const [format, setFormat] = useState<ExportFormat>("csv");
  const [scope, setScope] = useState<ExportScope>(selectedIds.length > 0 ? "selected" : "all");
  const [exporting, setExporting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleExport = async () => {
    setExporting(true);
    setError(null);

    try {
      const payload: any = {
        section,
        format,
      };

      if (scope === "selected" && selectedIds.length > 0) {
        payload.ids = selectedIds;
      }

      const res = await fetch("/api/admin/export", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to generate export file.");
      }

      // Download the blob
      const blob = await res.blob();
      const contentDisposition = res.headers.get("Content-Disposition");
      let filename = `dusol-${section}-export.${format}`;
      if (contentDisposition) {
        const match = contentDisposition.match(/filename="?([^"]+)"?/);
        if (match && match[1]) filename = match[1];
      }

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

      onClose();
    } catch (e: any) {
      setError(e.message || "An error occurred during export.");
    } finally {
      setExporting(false);
    }
  };

  const formatOptions: { id: ExportFormat; title: string; desc: string; icon: any; ext: string }[] = [
    {
      id: "csv",
      title: "CSV Spreadsheet",
      desc: "Comma-separated values compatible with Excel, Google Sheets, and data tools.",
      icon: FileSpreadsheet,
      ext: ".csv",
    },
    {
      id: "docx",
      title: "Microsoft Word (DOCX)",
      desc: "Formatted Word document with headings, tables, formatted text, and metadata.",
      icon: FileText,
      ext: ".docx",
    },
    {
      id: "pdf",
      title: "Printable PDF",
      desc: "Branded PDF with university banner, clean summary tables, and print-ready layout.",
      icon: FileCheck,
      ext: ".pdf",
    },
    {
      id: "json",
      title: "Structured JSON",
      desc: "Complete raw JSON data format including all nested arrays and database fields.",
      icon: FileCode,
      ext: ".json",
    },
  ];

  const targetCount = scope === "selected" ? selectedIds.length : totalCount;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200/80 animate-in zoom-in-95 duration-200 space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-[#652a7c] flex items-center justify-center">
              <Download className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Export {sectionTitle}</h2>
              <p className="text-xs text-slate-500">Download formatted reports or complete data backups.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Scope Selector */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-2">Export Scope</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setScope("all")}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                scope === "all"
                  ? "border-[#652a7c] bg-purple-50/50 text-[#652a7c] shadow-xs"
                  : "border-slate-200 hover:bg-slate-50 text-slate-700"
              }`}
            >
              <div className="text-xs font-bold">All Records</div>
              <div className="text-[11px] text-slate-500 mt-0.5">{totalCount} total items in section</div>
            </button>

            <button
              type="button"
              disabled={selectedIds.length === 0}
              onClick={() => setScope("selected")}
              className={`p-3 rounded-xl border text-left transition-all ${
                selectedIds.length === 0
                  ? "opacity-50 cursor-not-allowed border-slate-200 bg-slate-50 text-slate-400"
                  : scope === "selected"
                  ? "border-[#652a7c] bg-purple-50/50 text-[#652a7c] shadow-xs cursor-pointer"
                  : "border-slate-200 hover:bg-slate-50 text-slate-700 cursor-pointer"
              }`}
            >
              <div className="text-xs font-bold">Selected Only</div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                {selectedIds.length > 0 ? `${selectedIds.length} items checked` : "No rows selected"}
              </div>
            </button>
          </div>
        </div>

        {/* Format Selector */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-2">Choose Export Format</label>
          <div className="space-y-2">
            {formatOptions.map((opt) => {
              const Icon = opt.icon;
              const isSelected = format === opt.id;
              return (
                <div
                  key={opt.id}
                  onClick={() => setFormat(opt.id)}
                  className={`flex items-start gap-3 p-3 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? "border-[#652a7c] bg-purple-50/40 ring-1 ring-[#652a7c]/30"
                      : "border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected ? "bg-[#652a7c] text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">{opt.title}</span>
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase bg-slate-100 px-1.5 py-0.5 rounded">
                        {opt.ext}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{opt.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <div className="text-xs text-slate-500 font-medium">
            Exporting <strong className="text-slate-900">{targetCount}</strong> records
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              disabled={exporting}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleExport}
              disabled={exporting || targetCount === 0}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#652a7c] hover:bg-[#522265] text-white text-xs font-bold shadow-md shadow-[#652a7c]/20 transition-all cursor-pointer disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              <span>{exporting ? "Generating File..." : `Download ${format.toUpperCase()}`}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
