"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Save,
  ArrowLeft,
  Plus,
  Trash2,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  LifeBuoy,
  Globe,
  FileDown,
  ListOrdered,
  Eye,
} from "lucide-react";
import { RichTextEditor } from "./RichTextEditor";
import { ImageUploader } from "./ImageUploader";
import { StudentZoneItem } from "@/lib/types";
import { notifyNavUpdated } from "@/components/navbar/useNavData";

interface StudentZoneFormProps {
  initialData?: StudentZoneItem | null;
  isEdit?: boolean;
}

const PRESET_CATEGORIES = [
  "Admissions",
  "Exams & Hall Ticket",
  "Course Fees",
  "Study Material",
  "Results & Marks",
  "Student Portals",
  "Assignments & Practical",
  "General Guidance",
];

export function StudentZoneForm({ initialData, isEdit = false }: StudentZoneFormProps) {
  const router = useRouter();

  const [title, setTitle] = useState(initialData?.title || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [category, setCategory] = useState(initialData?.category || "Admissions");
  const [summary, setSummary] = useState(initialData?.summary || "");
  const [content, setContent] = useState(initialData?.content || "");
  const [featuredImage, setFeaturedImage] = useState(initialData?.featuredImage || "");
  const [externalLink, setExternalLink] = useState(initialData?.externalLink || "");
  const [downloadUrl, setDownloadUrl] = useState(initialData?.downloadUrl || "");
  const [status, setStatus] = useState<"draft" | "published">(initialData?.status || "published");
  const [quickSteps, setQuickSteps] = useState<string[]>(
    initialData?.quickSteps && initialData.quickSteps.length > 0
      ? initialData.quickSteps
      : [
          "Visit the official university student portal.",
          "Log in using your DU SOL Roll Number and Barcode / Date of Birth.",
          "Navigate to the designated service section from your dashboard.",
        ]
  );

  const [seoTitle, setSeoTitle] = useState(initialData?.seoTitle || "");
  const [seoDescription, setSeoDescription] = useState(initialData?.seoDescription || "");

  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!isEdit && !slug) {
      const generated = val
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
      setSlug(generated);
    }
  };

  const handleAddStep = () => {
    setQuickSteps([...quickSteps, ""]);
  };

  const handleRemoveStep = (index: number) => {
    setQuickSteps(quickSteps.filter((_, i) => i !== index));
  };

  const handleStepChange = (index: number, val: string) => {
    const updated = [...quickSteps];
    updated[index] = val;
    setQuickSteps(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setFeedback({ type: "error", text: "Resource Title is required." });
      return;
    }

    setSaving(true);
    setFeedback(null);

    const payload = {
      title,
      slug: slug.trim() || undefined,
      category,
      summary,
      content,
      featuredImage,
      externalLink,
      downloadUrl,
      quickSteps: quickSteps.filter((s) => s.trim() !== ""),
      status,
      seoTitle: seoTitle.trim() || undefined,
      seoDescription: seoDescription.trim() || undefined,
    };

    try {
      const url = isEdit && initialData?.id
        ? `/api/admin/student-zone/${initialData.id}`
        : `/api/admin/student-zone`;
      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to save resource");
      }

      setFeedback({
        type: "success",
        text: `Student Zone resource ${isEdit ? "updated" : "created"} successfully!`,
      });
      notifyNavUpdated();

      setTimeout(() => {
        router.push("/admin/student-zone");
        router.refresh();
      }, 1000);
    } catch (err: any) {
      setFeedback({ type: "error", text: err.message });
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Top Action Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs sticky top-18 z-20">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/student-zone"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
              {isEdit ? `Edit: ${initialData?.title}` : "Add New Student Zone Resource"}
            </h1>
            <p className="text-xs text-slate-500">
              Manage portals, hall tickets, fee charts, and student guides.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          {isEdit && slug && (
            <Link
              href={`/student-zone/${slug}`}
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <Eye className="w-4 h-4 text-slate-400" />
              <span>Preview</span>
            </Link>
          )}

          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#652a7c] hover:bg-[#522265] text-white text-xs font-bold transition-all shadow-md shadow-[#652a7c]/20 w-full sm:w-auto cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span>{saving ? "Saving..." : isEdit ? "Update Resource" : "Publish Resource"}</span>
          </button>
        </div>
      </div>

      {feedback && (
        <div
          className={`p-4 rounded-xl flex items-center gap-3 text-sm font-medium animate-in fade-in ${
            feedback.type === "success"
              ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
              : "bg-rose-50 text-rose-800 border border-rose-200"
          }`}
        >
          {feedback.type === "success" ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
          )}
          <span>{feedback.text}</span>
        </div>
      )}

      {/* Main Grid: Left details (8 cols) & Right metadata (4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Basic Details Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-5">
            <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <LifeBuoy className="w-4 h-4 text-[#652a7c]" />
              <span>Resource Information</span>
            </h2>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Resource Title <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. DUSOL Hall Ticket 2026 Download Portal"
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-[#652a7c] focus:bg-white text-slate-900 font-medium transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  URL Slug <span className="text-slate-400 font-normal">(e.g. hall-ticket)</span>
                </label>
                <div className="flex items-center">
                  <span className="text-xs text-slate-400 bg-slate-100 border border-r-0 border-slate-200 px-3 py-2.5 rounded-l-xl select-none">
                    /student-zone/
                  </span>
                  <input
                    type="text"
                    placeholder="hall-ticket"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-r-xl text-xs bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-[#652a7c] focus:bg-white text-slate-900 font-mono transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Category
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    list="categories-list"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Select or enter category..."
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-[#652a7c] focus:bg-white text-slate-900 font-medium transition-all"
                  />
                  <datalist id="categories-list">
                    {PRESET_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat} />
                    ))}
                  </datalist>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Summary / Excerpt
              </label>
              <textarea
                rows={3}
                placeholder="Brief summary explaining what students can achieve through this page..."
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-[#652a7c] focus:bg-white text-slate-800 transition-all leading-relaxed"
              />
            </div>
          </div>

          {/* External Links & Downloads */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#652a7c]" />
              <span>External Portals & Download Links</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-blue-600" />
                  <span>Official Portal Link</span>
                </label>
                <input
                  type="url"
                  placeholder="https://..."
                  value={externalLink}
                  onChange={(e) => setExternalLink(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-[#652a7c] focus:bg-white text-slate-900 transition-all"
                />
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Students will see a direct &quot;Go to Official Portal&quot; button.
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <FileDown className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Download / PDF URL</span>
                </label>
                <input
                  type="url"
                  placeholder="https://.../notice.pdf"
                  value={downloadUrl}
                  onChange={(e) => setDownloadUrl(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-[#652a7c] focus:bg-white text-slate-900 transition-all"
                />
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Optional link for downloadable guidelines or fee sheets.
                </span>
              </div>
            </div>
          </div>

          {/* Quick Steps (How To) */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <ListOrdered className="w-4 h-4 text-[#652a7c]" />
                <span>Step-by-Step Quick Guide</span>
              </h2>
              <button
                type="button"
                onClick={handleAddStep}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-purple-50 text-[#652a7c] hover:bg-purple-100 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Step</span>
              </button>
            </div>

            <div className="space-y-3">
              {quickSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 mt-2">
                    {idx + 1}
                  </span>
                  <input
                    type="text"
                    value={step}
                    onChange={(e) => handleStepChange(idx, e.target.value)}
                    placeholder={`Step ${idx + 1} instructions...`}
                    className="flex-1 px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-[#652a7c] focus:bg-white text-slate-900 font-medium"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveStep(idx)}
                    className="p-2.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors shrink-0"
                    title="Remove step"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Full Guide Article / Content (Rich Text) */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <LifeBuoy className="w-4 h-4 text-[#652a7c]" />
              <span>Comprehensive Guide & FAQs</span>
            </h2>
            <p className="text-xs text-slate-500">
              Provide complete details, dates, fee tables, FAQ accordions, and troubleshooting guidelines for this Student Zone resource.
            </p>

            <RichTextEditor
              value={content}
              onChange={setContent}
              placeholder="Write detailed instructions, eligibility criteria, exam day guidelines, and FAQs..."
            />
          </div>
        </div>

        {/* Right Column: Settings & SEO (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Publish Status Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3">
              Publish Status
            </h3>

            <div className="space-y-2">
              <label
                className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                  status === "published"
                    ? "border-emerald-500 bg-emerald-50/40 text-emerald-900 font-bold"
                    : "border-slate-200 hover:bg-slate-50 text-slate-700"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-xs">Published Live</span>
                </div>
                <input
                  type="radio"
                  name="status"
                  value="published"
                  checked={status === "published"}
                  onChange={() => setStatus("published")}
                  className="accent-emerald-600"
                />
              </label>

              <label
                className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                  status === "draft"
                    ? "border-amber-500 bg-amber-50/40 text-amber-900 font-bold"
                    : "border-slate-200 hover:bg-slate-50 text-slate-700"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="text-xs">Draft (Hidden)</span>
                </div>
                <input
                  type="radio"
                  name="status"
                  value="draft"
                  checked={status === "draft"}
                  onChange={() => setStatus("draft")}
                  className="accent-amber-600"
                />
              </label>
            </div>
          </div>

          {/* Featured Image */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3">
              Featured Banner Image
            </h3>
            <ImageUploader
              value={featuredImage}
              onChange={setFeaturedImage}
              label="Upload Banner (1200x630 recommended)"
            />
          </div>

          {/* SEO Metadata */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3">
              Search Engine Optimization (SEO)
            </h3>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Meta Title
              </label>
              <input
                type="text"
                placeholder={title ? `${title} | DU SOL 2026` : "Page Title"}
                value={seoTitle}
                onChange={(e) => setSeoTitle(e.target.value)}
                className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-[#652a7c] focus:bg-white text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Meta Description
              </label>
              <textarea
                rows={3}
                placeholder="Brief summary for Google search snippet (150-160 characters)..."
                value={seoDescription}
                onChange={(e) => setSeoDescription(e.target.value)}
                className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-[#652a7c] focus:bg-white text-slate-800"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
