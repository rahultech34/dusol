"use client";

import React, { useState } from "react";
import {
  X,
  FileText,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Save,
  ArrowRight,
  Eye,
  List,
  Layers,
  Table as TableIcon,
  HelpCircle,
  Globe,
  Plus,
  Trash2,
} from "lucide-react";
import { FieldMappingResult, ImportSection } from "@/lib/doc-import/types";
import { RichTextEditor } from "../RichTextEditor";
import { notifyNavUpdated } from "@/components/navbar/useNavData";

interface ImportReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  mappingResult: FieldMappingResult | null;
  onSuccess: (savedId?: string) => void;
}

export function ImportReviewModal({
  isOpen,
  onClose,
  mappingResult,
  onSuccess,
}: ImportReviewModalProps) {
  if (!isOpen || !mappingResult) return null;

  const { section, rawParsed } = mappingResult;

  // Initialize editable fields from mapped fields
  const [title, setTitle] = useState(
    mappingResult.fields.title?.value || mappingResult.fields.name?.value || ""
  );
  const [slug, setSlug] = useState(mappingResult.fields.slug?.value || "");
  const [category, setCategory] = useState(mappingResult.fields.category?.value || "General");
  const [excerpt, setExcerpt] = useState(
    mappingResult.fields.excerpt?.value || mappingResult.fields.overview?.value || mappingResult.fields.summary?.value || ""
  );
  const [content, setContent] = useState(
    mappingResult.fields.content?.value || mappingResult.fields.description?.value || ""
  );

  // Section specific fields
  const [author, setAuthor] = useState(mappingResult.fields.author?.value || "DU SOL Editorial");
  const [degree, setDegree] = useState(mappingResult.fields.degree?.value || "Bachelor Degree");
  const [duration, setDuration] = useState(mappingResult.fields.duration?.value || "3 Years");
  const [eligibility, setEligibility] = useState(mappingResult.fields.eligibility?.value || "");
  const [admissionProcess, setAdmissionProcess] = useState(
    mappingResult.fields.admissionProcess?.value || ""
  );
  const [curriculum, setCurriculum] = useState(mappingResult.fields.curriculum?.value || []);
  const [fees, setFees] = useState(mappingResult.fields.fees?.value || []);
  const [quickSteps, setQuickSteps] = useState<string[]>(
    mappingResult.fields.quickSteps?.value || []
  );
  const [externalLink, setExternalLink] = useState(mappingResult.fields.externalLink?.value || "");
  const [downloadUrl, setDownloadUrl] = useState(mappingResult.fields.downloadUrl?.value || "");
  const [seoTitle, setSeoTitle] = useState(mappingResult.fields.seoTitle?.value || "");
  const [seoDescription, setSeoDescription] = useState(
    mappingResult.fields.seoDescription?.value || ""
  );

  // Status (Default to draft for safety as required by spec)
  const [status, setStatus] = useState<"draft" | "published">("draft");

  // Left panel view tab
  const [leftTab, setLeftTab] = useState<"preview" | "raw" | "outline">("preview");

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSave = async (targetStatus: "draft" | "published") => {
    if (!title.trim()) {
      setError("Title / Name is required before saving.");
      return;
    }

    setSaving(true);
    setError(null);

    try {
      let payloadData: any = {
        slug,
        status: targetStatus,
        seoTitle: seoTitle || title,
        seoDescription: seoDescription || excerpt,
      };

      if (section === "blogs") {
        payloadData = {
          ...payloadData,
          title,
          excerpt,
          content,
          category,
          author,
          tags: mappingResult.fields.tags?.value || ["DU SOL"],
          featuredImage: rawParsed.images[0]?.dataUrl || "",
        };
      } else if (section === "ug" || section === "pg" || section === "mba") {
        payloadData = {
          ...payloadData,
          name: title,
          type: section,
          degree,
          duration,
          overview: excerpt,
          description: content,
          eligibility,
          admissionProcess,
          curriculum,
          fees,
          careerOpportunities: mappingResult.fields.careerOpportunities?.value || [],
          featuredImage: rawParsed.images[0]?.dataUrl || "",
        };
      } else if (section === "student-zone") {
        payloadData = {
          ...payloadData,
          title,
          category,
          summary: excerpt,
          content,
          quickSteps,
          externalLink,
          downloadUrl,
          featuredImage: rawParsed.images[0]?.dataUrl || "",
        };
      } else if (section === "categories") {
        payloadData = {
          ...payloadData,
          name: title,
          description: excerpt,
        };
      }

      const res = await fetch("/api/admin/import/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          section,
          data: payloadData,
          status: targetStatus,
          fileMeta: {
            fileName: rawParsed.fileName,
            fileSize: rawParsed.fileSize,
            fileType: rawParsed.fileType,
          },
        }),
      });

      const resData = await res.json();
      if (!res.ok) {
        throw new Error(resData.error || "Failed to save imported content.");
      }

      notifyNavUpdated();
      onSuccess(resData.id || resData.slug);
      onClose();
    } catch (e: any) {
      setError(e.message || "An unexpected error occurred while saving.");
    } finally {
      setSaving(false);
    }
  };

  const getConfidenceBadge = (fieldName: string) => {
    const field = mappingResult.fields[fieldName];
    if (!field) return null;
    const conf = field.confidence;
    return (
      <span
        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
          conf === "high"
            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
            : conf === "medium"
            ? "bg-amber-50 text-amber-700 border border-amber-200"
            : "bg-slate-100 text-slate-600 border border-slate-200"
        }`}
        title={`Source: ${field.sourceLabel || "Detected"}`}
      >
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            conf === "high" ? "bg-emerald-500" : conf === "medium" ? "bg-amber-500" : "bg-slate-400"
          }`}
        />
        <span>{conf === "high" ? "Auto-Mapped" : conf === "medium" ? "Review Needed" : "Unmapped"}</span>
      </span>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-7xl w-full h-[92vh] shadow-2xl border border-slate-200/80 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between shrink-0 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#652a7c] to-purple-600 text-white flex items-center justify-center shadow-md shadow-[#652a7c]/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold text-slate-900">Document Extraction & Field Review</h2>
                <span className="uppercase text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-purple-50 text-[#652a7c] border border-purple-200/60">
                  Target: {section.toUpperCase()}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Review extracted content, correct mappings, and save as a draft.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {error && (
          <div className="px-6 py-2.5 bg-rose-50 border-b border-rose-200 text-rose-800 text-xs font-semibold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Two-Panel Body Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 min-h-0 overflow-hidden">
          {/* LEFT PANEL: Extracted Document Preview (5 cols) */}
          <div className="lg:col-span-5 border-r border-slate-200 bg-slate-50/70 flex flex-col min-h-0 overflow-hidden">
            {/* Document Info Bar */}
            <div className="p-4 border-b border-slate-200/80 bg-white flex items-center justify-between gap-3">
              <div className="truncate min-w-0">
                <div className="text-xs font-bold text-slate-900 truncate" title={rawParsed.fileName}>
                  {rawParsed.fileName}
                </div>
                <div className="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5">
                  <span className="uppercase font-bold text-purple-700">{rawParsed.fileType}</span>
                  <span>•</span>
                  <span>{Math.round(rawParsed.fileSize / 1024)} KB</span>
                  <span>•</span>
                  <span>{rawParsed.wordCount} words</span>
                  {rawParsed.tables.length > 0 && (
                    <>
                      <span>•</span>
                      <span>{rawParsed.tables.length} tables</span>
                    </>
                  )}
                </div>
              </div>

              {/* View Tabs */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold shrink-0">
                <button
                  type="button"
                  onClick={() => setLeftTab("preview")}
                  className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                    leftTab === "preview" ? "bg-white text-slate-900 shadow-xs font-bold" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Formatted
                </button>
                <button
                  type="button"
                  onClick={() => setLeftTab("raw")}
                  className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                    leftTab === "raw" ? "bg-white text-slate-900 shadow-xs font-bold" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Raw Text
                </button>
                <button
                  type="button"
                  onClick={() => setLeftTab("outline")}
                  className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                    leftTab === "outline" ? "bg-white text-slate-900 shadow-xs font-bold" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Outline
                </button>
              </div>
            </div>

            {/* Document Content View */}
            <div className="flex-1 overflow-y-auto p-5">
              {leftTab === "preview" ? (
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
                  <div
                    className="prose-content text-slate-800 text-xs sm:text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: rawParsed.htmlContent }}
                  />
                </div>
              ) : leftTab === "raw" ? (
                <div className="bg-slate-900 text-slate-100 p-4 rounded-2xl font-mono text-xs whitespace-pre-wrap leading-relaxed overflow-x-auto selection:bg-purple-600">
                  {rawParsed.rawText || "No raw text available."}
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-2xl border border-slate-200">
                    <h4 className="text-xs font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                      <List className="w-3.5 h-3.5 text-[#652a7c]" />
                      <span>Headings Structure ({rawParsed.headings.length})</span>
                    </h4>
                    {rawParsed.headings.length === 0 ? (
                      <p className="text-xs text-slate-400">No explicit headings detected.</p>
                    ) : (
                      <div className="space-y-1.5 text-xs">
                        {rawParsed.headings.map((h, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-slate-700"
                            style={{ paddingLeft: `${(h.level - 1) * 12}px` }}
                          >
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                              H{h.level}
                            </span>
                            <span className="truncate">{h.text}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {rawParsed.tables.length > 0 && (
                    <div className="bg-white p-4 rounded-2xl border border-slate-200">
                      <h4 className="text-xs font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                        <TableIcon className="w-3.5 h-3.5 text-[#652a7c]" />
                        <span>Extracted Tables ({rawParsed.tables.length})</span>
                      </h4>
                      <div className="space-y-2 text-xs text-slate-600">
                        {rawParsed.tables.map((t, idx) => (
                          <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                            <span className="font-bold text-slate-800">Table #{idx + 1}:</span>{" "}
                            {t.headers.join(", ") || `${t.rows.length} rows`}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT PANEL: Populated Admin Form (7 cols) */}
          <div className="lg:col-span-7 flex flex-col min-h-0 bg-white overflow-hidden">
            <div className="p-4 border-b border-slate-100 bg-white flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 flex items-center gap-2">
                <span>Field Mapping Form</span>
                <span className="text-[11px] font-normal text-slate-400">
                  (Changes made here will be saved to the database)
                </span>
              </span>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-medium">Status:</span>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as any)}
                  className="px-2.5 py-1 rounded-lg text-xs bg-slate-50 border border-slate-200 font-bold text-slate-800 focus:outline-hidden"
                >
                  <option value="draft">Draft (Safe Default)</option>
                  <option value="published">Published</option>
                </select>
              </div>
            </div>

            {/* Form Fields Scroll Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-5">
              {/* Title / Name */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-slate-800">
                    {section === "blogs"
                      ? "Blog Title"
                      : section === "categories"
                      ? "Category Name"
                      : "Program / Resource Name"}{" "}
                    <span className="text-rose-500">*</span>
                  </label>
                  {getConfidenceBadge("title") || getConfidenceBadge("name")}
                </div>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                    if (!slug) setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, "-"));
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-[#652a7c] focus:bg-white text-slate-900 font-semibold transition-all"
                  placeholder="Enter title..."
                />
              </div>

              {/* Slug & Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-slate-700">URL Slug</label>
                    {getConfidenceBadge("slug")}
                  </div>
                  <input
                    type="text"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-[#652a7c] font-mono text-slate-800"
                  />
                </div>

                {section !== "categories" && (
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-bold text-slate-700">Category</label>
                      {getConfidenceBadge("category")}
                    </div>
                    <input
                      type="text"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-[#652a7c] text-slate-800 font-medium"
                    />
                  </div>
                )}
              </div>

              {/* Programs specific fields */}
              {(section === "ug" || section === "pg" || section === "mba") && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-bold text-slate-700">Degree</label>
                      {getConfidenceBadge("degree")}
                    </div>
                    <input
                      type="text"
                      value={degree}
                      onChange={(e) => setDegree(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-[#652a7c] text-slate-800"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-bold text-slate-700">Duration</label>
                      {getConfidenceBadge("duration")}
                    </div>
                    <input
                      type="text"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-[#652a7c] text-slate-800"
                    />
                  </div>
                </div>
              )}

              {/* Excerpt / Overview / Summary */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    {section === "blogs"
                      ? "Excerpt / Short Summary"
                      : section === "categories"
                      ? "Category Description"
                      : "Overview Summary"}
                  </label>
                  {getConfidenceBadge("excerpt") || getConfidenceBadge("overview") || getConfidenceBadge("summary")}
                </div>
                <textarea
                  rows={3}
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-[#652a7c] text-slate-800 leading-relaxed"
                  placeholder="Introductory summary..."
                />
              </div>

              {/* Eligibility & Admission Process for Programs */}
              {(section === "ug" || section === "pg" || section === "mba") && (
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-bold text-slate-700">Eligibility Criteria</label>
                      {getConfidenceBadge("eligibility")}
                    </div>
                    <textarea
                      rows={2}
                      value={eligibility}
                      onChange={(e) => setEligibility(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-[#652a7c] text-slate-800"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-bold text-slate-700">Admission Process</label>
                      {getConfidenceBadge("admissionProcess")}
                    </div>
                    <textarea
                      rows={2}
                      value={admissionProcess}
                      onChange={(e) => setAdmissionProcess(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-[#652a7c] text-slate-800"
                    />
                  </div>
                </div>
              )}

              {/* Student Zone specific: Portals & Quick Steps */}
              {section === "student-zone" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs font-bold text-slate-700">Official Portal Link</label>
                        {getConfidenceBadge("externalLink")}
                      </div>
                      <input
                        type="url"
                        value={externalLink}
                        onChange={(e) => setExternalLink(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-[#652a7c] text-slate-800"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs font-bold text-slate-700">Download URL</label>
                        {getConfidenceBadge("downloadUrl")}
                      </div>
                      <input
                        type="url"
                        value={downloadUrl}
                        onChange={(e) => setDownloadUrl(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-[#652a7c] text-slate-800"
                      />
                    </div>
                  </div>

                  {quickSteps.length > 0 && (
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">
                        Quick Steps ({quickSteps.length})
                      </label>
                      <div className="space-y-2">
                        {quickSteps.map((step, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-bold flex items-center justify-center shrink-0">
                              {idx + 1}
                            </span>
                            <input
                              type="text"
                              value={step}
                              onChange={(e) => {
                                const next = [...quickSteps];
                                next[idx] = e.target.value;
                                setQuickSteps(next);
                              }}
                              className="flex-1 px-3 py-1.5 rounded-lg text-xs bg-slate-50 border border-slate-200 text-slate-800"
                            />
                            <button
                              type="button"
                              onClick={() => setQuickSteps(quickSteps.filter((_, i) => i !== idx))}
                              className="text-slate-400 hover:text-rose-600 p-1"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Main Rich Content Editor */}
              {section !== "categories" && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold text-slate-800">
                      Main Document Body (WYSIWYG Editor)
                    </label>
                    {getConfidenceBadge("content")}
                  </div>
                  <p className="text-[11px] text-slate-500 mb-2">
                    Headings, tables, lists, bold text, and images extracted from your document are preserved below. You can refine or add text directly.
                  </p>
                  <RichTextEditor
                    value={content}
                    onChange={setContent}
                    placeholder="Document content..."
                  />
                </div>
              )}

              {/* SEO Fields */}
              <div className="pt-2 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-800 mb-2">SEO Metadata</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      Meta Title
                    </label>
                    <input
                      type="text"
                      value={seoTitle}
                      onChange={(e) => setSeoTitle(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg text-xs bg-slate-50 border border-slate-200 text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      Meta Description
                    </label>
                    <textarea
                      rows={2}
                      value={seoDescription}
                      onChange={(e) => setSeoDescription(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg text-xs bg-slate-50 border border-slate-200 text-slate-800"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Fixed Action Bar */}
            <div className="p-4 border-t border-slate-200/80 bg-slate-50/80 flex items-center justify-between">
              <button
                type="button"
                onClick={onClose}
                disabled={saving}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-200/70 transition-colors"
              >
                Discard & Close
              </button>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => handleSave("draft")}
                  disabled={saving}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-xs disabled:opacity-50 cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>{saving ? "Saving..." : "Save as Draft"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSave("published")}
                  disabled={saving}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#652a7c] hover:bg-[#522265] text-white text-xs font-bold transition-all shadow-md shadow-[#652a7c]/20 disabled:opacity-50 cursor-pointer"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{saving ? "Saving..." : "Save & Publish"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
