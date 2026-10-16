"use client";

import React, { useState, useRef } from "react";
import {
  X,
  UploadCloud,
  FileText,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  FileCheck,
  FileCode,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import { ImportSection, FieldMappingResult } from "@/lib/doc-import/types";
import { ImportReviewModal } from "./ImportReviewModal";

interface ImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  section: ImportSection;
  sectionTitle: string;
  onSuccess: () => void;
}

export function ImportModal({
  isOpen,
  onClose,
  section,
  sectionTitle,
  onSuccess,
}: ImportModalProps) {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);
  const [progressPhase, setProgressPhase] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  // Once parsed, we store the result and show the Review Modal
  const [mappingResult, setMappingResult] = useState<FieldMappingResult | null>(null);
  const [showReview, setShowReview] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelected(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelected(e.target.files[0]);
    }
  };

  const handleFileSelected = (file: File) => {
    setError(null);
    const ext = file.name.split(".").pop()?.toLowerCase();
    if (ext !== "pdf" && ext !== "docx") {
      setError("Unsupported file format. Please upload a Word (.docx) or PDF (.pdf) file.");
      setSelectedFile(null);
      return;
    }
    if (file.size > 25 * 1024 * 1024) {
      setError("File exceeds 25MB limit. Please upload a smaller document.");
      setSelectedFile(null);
      return;
    }
    setSelectedFile(file);
  };

  const handleProcessFile = async () => {
    if (!selectedFile) return;

    setProcessing(true);
    setError(null);
    setProgressPhase("Uploading document to secure processing server...");

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("section", section);

      setTimeout(() => {
        setProgressPhase("Extracting headings, paragraphs, lists, and tables...");
      }, 700);

      setTimeout(() => {
        setProgressPhase("Analyzing layout & mapping content to admin fields...");
      }, 1500);

      const res = await fetch("/api/admin/import/parse", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to extract content from the document.");
      }

      setMappingResult(data.mapped);
      setShowReview(true);
    } catch (e: any) {
      setError(e.message || "An error occurred during file extraction.");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
        <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-7 shadow-2xl border border-slate-200/80 animate-in zoom-in-95 duration-200 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-[#652a7c] flex items-center justify-center">
                <UploadCloud className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-900">Import to {sectionTitle}</h2>
                <p className="text-xs text-slate-500">
                  Upload PDF or Word document to auto-extract and map fields.
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              disabled={processing}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {error && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Drag & Drop Upload Zone */}
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-3xl p-8 text-center transition-all cursor-pointer ${
              dragActive
                ? "border-[#652a7c] bg-purple-50/60 scale-[1.01]"
                : selectedFile
                ? "border-emerald-500 bg-emerald-50/30"
                : "border-slate-200 hover:border-slate-300 hover:bg-slate-50/50 bg-slate-50/20"
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={handleFileChange}
              className="hidden"
            />

            {selectedFile ? (
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center shadow-xs">
                  <FileCheck className="w-6 h-6" />
                </div>
                <div className="text-sm font-bold text-slate-900 truncate max-w-sm mx-auto">
                  {selectedFile.name}
                </div>
                <div className="text-xs text-slate-500">
                  {Math.round(selectedFile.size / 1024)} KB · Click to choose a different file
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-[#652a7c] mx-auto flex items-center justify-center">
                  <UploadCloud className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-800">
                    Drag and drop your document here, or{" "}
                    <span className="text-[#652a7c] underline">browse files</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Supports Microsoft Word (.docx) & PDF (.pdf) up to 25MB
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Progress Indicator */}
          {processing && (
            <div className="space-y-2.5 p-4 rounded-2xl bg-purple-50/70 border border-purple-100 animate-in fade-in">
              <div className="flex items-center justify-between text-xs font-bold text-[#652a7c]">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full border-2 border-[#652a7c] border-t-transparent animate-spin" />
                  <span>{progressPhase}</span>
                </div>
              </div>
              <div className="w-full bg-purple-200/60 rounded-full h-1.5 overflow-hidden">
                <div className="bg-[#652a7c] h-1.5 rounded-full animate-pulse w-3/4" />
              </div>
            </div>
          )}

          {/* Features Notice */}
          <div className="grid grid-cols-2 gap-3 text-[11px] text-slate-500 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Preserves H1-H6 headings</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Extracts fee & syllabus tables</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Two-panel preview & review</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Saved safely as Draft</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              disabled={processing}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleProcessFile}
              disabled={!selectedFile || processing}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#652a7c] hover:bg-[#522265] text-white text-xs font-bold shadow-md shadow-[#652a7c]/20 transition-all cursor-pointer disabled:opacity-50"
            >
              <Sparkles className="w-4 h-4" />
              <span>{processing ? "Extracting..." : "Process & Map Document"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Two-Panel Review Modal */}
      {showReview && mappingResult && (
        <ImportReviewModal
          isOpen={showReview}
          onClose={() => {
            setShowReview(false);
            onClose();
          }}
          mappingResult={mappingResult}
          onSuccess={(id) => {
            setShowReview(false);
            onClose();
            onSuccess();
          }}
        />
      )}
    </>
  );
}
