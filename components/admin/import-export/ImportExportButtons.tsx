"use client";

import React, { useState } from "react";
import { UploadCloud, Download, Clock } from "lucide-react";
import { ImportSection } from "@/lib/doc-import/types";
import { ImportModal } from "./ImportModal";
import { ExportModal } from "./ExportModal";
import { ImportHistoryModal } from "./ImportHistoryModal";

interface ImportExportButtonsProps {
  section: ImportSection;
  sectionTitle: string;
  totalCount: number;
  selectedIds?: string[];
  onImportSuccess?: () => void;
}

export function ImportExportButtons({
  section,
  sectionTitle,
  totalCount,
  selectedIds = [],
  onImportSuccess,
}: ImportExportButtonsProps) {
  const [importOpen, setImportOpen] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);

  return (
    <>
      <div className="flex items-center gap-2">
        {/* Import Document Button */}
        <button
          type="button"
          onClick={() => setImportOpen(true)}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-purple-200 bg-purple-50/70 hover:bg-purple-100/70 text-[#652a7c] text-xs font-bold transition-all shadow-xs cursor-pointer"
          title={`Upload PDF or Word document to auto-populate ${sectionTitle}`}
        >
          <UploadCloud className="w-3.5 h-3.5 shrink-0" />
          <span>Import Data</span>
        </button>

        {/* Export Data Button */}
        <button
          type="button"
          onClick={() => setExportOpen(true)}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all shadow-xs cursor-pointer"
          title={`Download ${sectionTitle} in CSV, Word, PDF, or JSON`}
        >
          <Download className="w-3.5 h-3.5 text-slate-500 shrink-0" />
          <span>Export Data</span>
          {selectedIds.length > 0 && (
            <span className="w-4 h-4 rounded-full bg-[#652a7c] text-white text-[10px] font-bold flex items-center justify-center ml-0.5">
              {selectedIds.length}
            </span>
          )}
        </button>

        {/* Import Audit History Button */}
        <button
          type="button"
          onClick={() => setHistoryOpen(true)}
          className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          title="View Document Import History"
        >
          <Clock className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Modals */}
      <ImportModal
        isOpen={importOpen}
        onClose={() => setImportOpen(false)}
        section={section}
        sectionTitle={sectionTitle}
        onSuccess={() => {
          if (onImportSuccess) onImportSuccess();
        }}
      />

      <ExportModal
        isOpen={exportOpen}
        onClose={() => setExportOpen(false)}
        section={section}
        sectionTitle={sectionTitle}
        totalCount={totalCount}
        selectedIds={selectedIds}
      />

      <ImportHistoryModal
        isOpen={historyOpen}
        onClose={() => setHistoryOpen(false)}
      />
    </>
  );
}
