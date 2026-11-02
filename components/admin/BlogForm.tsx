"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Save,
  ArrowLeft,
  Globe,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  Calendar,
  Tag,
  User,
  Folder,
  Code2,
  FileCode,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import { RichTextEditor } from "./RichTextEditor";
import { ImageUploader } from "./ImageUploader";
import { Blog } from "@/lib/types";

interface BlogFormProps {
  initialData?: Blog | null;
  isEdit?: boolean;
}

export function BlogForm({ initialData, isEdit = false }: BlogFormProps) {
  const router = useRouter();

  const [title, setTitle] = useState(initialData?.title || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || "");
  const [content, setContent] = useState(initialData?.content || "");
  const [featuredImage, setFeaturedImage] = useState(initialData?.featuredImage || "");
  const [author, setAuthor] = useState(initialData?.author || "DU SOL Admissions Team");
  const [category, setCategory] = useState(initialData?.category || "Admissions");
  const [tagsInput, setTagsInput] = useState(initialData?.tags?.join(", ") || "DU SOL, Distance Education, Admission 2026");
  const [status, setStatus] = useState<"draft" | "published" | "scheduled">(initialData?.status || "published");
  const [scheduledDate, setScheduledDate] = useState(initialData?.scheduledDate || "");
  
  // SEO fields
  const [seoTitle, setSeoTitle] = useState(initialData?.seoTitle || "");
  const [seoDescription, setSeoDescription] = useState(initialData?.seoDescription || "");
  const [seoKeywords, setSeoKeywords] = useState(initialData?.seoKeywords || "");
  const [schemaMarkup, setSchemaMarkup] = useState(
    initialData?.schemaMarkup || (initialData as any)?.schema || ""
  );

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const getSchemaValidation = () => {
    if (!schemaMarkup || !schemaMarkup.trim()) return { empty: true, valid: true, error: null };
    try {
      const cleanJson = schemaMarkup
        .replace(/<script[^>]*>/gi, "")
        .replace(/<\/script>/gi, "")
        .trim();
      JSON.parse(cleanJson);
      return { empty: false, valid: true, error: null };
    } catch (err: any) {
      return { empty: false, valid: false, error: err.message || "Invalid JSON syntax" };
    }
  };

  const handleGenerateArticleSchema = () => {
    const canonicalSlug = slug || slugifyHelper(title) || "article";
    const generated = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://dusol.edukyu.com/blogs/${canonicalSlug}`,
      },
      "headline": title || "Article Headline",
      "description": seoDescription || excerpt || "Comprehensive guide and update from DU SOL.",
      ...(featuredImage ? { image: [featuredImage] } : {}),
      "author": {
        "@type": "Person",
        "name": author || "DU SOL Admissions Team",
      },
      "publisher": {
        "@type": "Organization",
        "name": "School of Open Learning, University of Delhi",
        "logo": {
          "@type": "ImageObject",
          "url": "https://edukyu.com/Resources/Images/Edukyu_Logo.jpeg",
        },
      },
      "datePublished": initialData?.publishedAt || new Date().toISOString(),
      "dateModified": new Date().toISOString(),
      ...(category ? { articleSection: category } : {}),
      ...(seoKeywords ? { keywords: seoKeywords } : {}),
    };
    setSchemaMarkup(JSON.stringify(generated, null, 2));
  };

  const handleInsertFaqSchema = () => {
    const faqTemplate = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the admission procedure for DU SOL?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Admissions are conducted online through the official portal. Candidates register, select their course, upload necessary documents, and submit their semester fees.",
          },
        },
        {
          "@type": "Question",
          "name": "Are degrees from DU SOL recognized by UGC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, degrees awarded by DU SOL are approved by UGC-DEB and hold equivalent recognition to regular Delhi University programs.",
          },
        },
      ],
    };
    setSchemaMarkup(JSON.stringify(faqTemplate, null, 2));
  };

  const handleFormatSchema = () => {
    if (!schemaMarkup.trim()) return;
    try {
      const cleanJson = schemaMarkup
        .replace(/<script[^>]*>/gi, "")
        .replace(/<\/script>/gi, "")
        .trim();
      const parsed = JSON.parse(cleanJson);
      setSchemaMarkup(JSON.stringify(parsed, null, 2));
    } catch {
      // Keep as-is if invalid
    }
  };

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
    if (!isEdit && (!slug || slug === slugifyHelper(title))) {
      setSlug(slugifyHelper(newTitle));
    }
  };

  const slugifyHelper = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setSaving(true);

    if (!title.trim()) {
      setError("Article title is required.");
      setSaving(false);
      return;
    }

    const payload = {
      title,
      slug: slug || slugifyHelper(title),
      excerpt,
      content,
      featuredImage,
      author,
      category,
      tags: tagsInput.split(",").map((t) => t.trim()).filter(Boolean),
      status,
      scheduledDate: status === "scheduled" ? scheduledDate : undefined,
      seoTitle: seoTitle || title,
      seoDescription: seoDescription || excerpt,
      seoKeywords,
      schemaMarkup,
      publishedAt: status === "published" ? initialData?.publishedAt || new Date().toISOString() : undefined,
    };

    try {
      const url = isEdit ? `/api/admin/blogs/${initialData?.id}` : "/api/admin/blogs";
      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to save blog post.");
        setSaving(false);
        return;
      }

      setSuccess("Blog post saved successfully!");
      setTimeout(() => {
        router.push("/admin/blogs");
        router.refresh();
      }, 1000);
    } catch (err: any) {
      setError(err.message || "An unexpected network error occurred.");
      setSaving(false);
    }
  };

  const schemaValidation = getSchemaValidation();

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/blogs"
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
              {isEdit ? "Edit Blog Article" : "Create New Blog Article"}
            </h2>
            <p className="text-xs text-slate-500">
              Fill in the article content, media, and SEO metadata below.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/blogs"
            className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#652a7c] hover:bg-purple-900 text-white font-bold text-xs shadow-md transition-all cursor-pointer disabled:opacity-60"
          >
            <Save className="w-4 h-4" />
            <span>{saving ? "Saving Changes..." : isEdit ? "Update Article" : "Publish Article"}</span>
          </button>
        </div>
      </div>

      {error && (
        <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      {success && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <span>{success}</span>
        </div>
      )}

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Title, Excerpt, Content (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Title & Slug */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Article Title *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="e.g. Complete DU SOL Admission Guide 2026: Eligibility & Fees"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#652a7c] focus:ring-2 focus:ring-[#652a7c]/10 outline-none text-base font-bold text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                URL Slug (SEO Permalink)
              </label>
              <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs text-slate-500 font-mono">
                <span className="shrink-0 text-slate-400">/blogs/</span>
                <input
                  type="text"
                  required
                  value={slug}
                  onChange={(e) => setSlug(slugifyHelper(e.target.value))}
                  placeholder="complete-du-sol-admission-guide-2026"
                  className="w-full bg-transparent outline-none text-slate-900 font-semibold pl-1"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Short Excerpt
              </label>
              <textarea
                rows={3}
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="A concise summary of the article displayed on blog archive cards and search previews..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#652a7c] focus:ring-2 focus:ring-[#652a7c]/10 outline-none text-xs sm:text-sm text-slate-700"
              />
            </div>
          </div>

          {/* Rich Content Editor */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Article Content (Rich Text)
              </label>
              <span className="text-[11px] text-slate-400">Supports HTML formatting & headings</span>
            </div>

            <RichTextEditor
              value={content}
              onChange={setContent}
              placeholder="Write the full comprehensive guide or blog article here..."
            />
          </div>

          {/* SEO Metadata Box */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
              <Globe className="w-4 h-4 text-[#652a7c]" />
              <h3 className="text-sm font-bold text-slate-900">Search Engine Optimization (SEO)</h3>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Meta Title
              </label>
              <input
                type="text"
                value={seoTitle}
                onChange={(e) => setSeoTitle(e.target.value)}
                placeholder={title || "Custom browser tab title"}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#652a7c] focus:ring-2 focus:ring-[#652a7c]/10 outline-none text-xs sm:text-sm text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Meta Description
              </label>
              <textarea
                rows={3}
                value={seoDescription}
                onChange={(e) => setSeoDescription(e.target.value)}
                placeholder={excerpt || "Search engine description snippet (150-160 characters recommended)"}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#652a7c] focus:ring-2 focus:ring-[#652a7c]/10 outline-none text-xs sm:text-sm text-slate-700"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Focus Keywords
              </label>
              <input
                type="text"
                value={seoKeywords}
                onChange={(e) => setSeoKeywords(e.target.value)}
                placeholder="du sol admission, distance ba, distance bcom, eligibility 2026"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#652a7c] focus:ring-2 focus:ring-[#652a7c]/10 outline-none text-xs sm:text-sm text-slate-900"
              />
            </div>
          </div>

          {/* Schema & Structured Data Box */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#652a7c]" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Schema Markup & Structured Data</h3>
                  <p className="text-[11px] text-slate-500">JSON-LD schema for Google rich search results & Knowledge Graph</p>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-2">
                {schemaValidation.empty ? (
                  <span className="text-[11px] font-medium text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                    Auto-Default Active
                  </span>
                ) : schemaValidation.valid ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Valid JSON-LD
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-700 bg-rose-50 border border-rose-200 px-2.5 py-1 rounded-full">
                    <AlertCircle className="w-3 h-3 text-rose-600" />
                    Invalid JSON
                  </span>
                )}
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={handleGenerateArticleSchema}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-50 hover:bg-purple-100 text-[#652a7c] text-xs font-bold transition-colors cursor-pointer border border-purple-200/70"
                title="Generate standard BlogPosting/Article schema using current title, excerpt, and author"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Generate Article Schema</span>
              </button>

              <button
                type="button"
                onClick={handleInsertFaqSchema}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer border border-slate-200"
                title="Insert FAQPage schema template"
              >
                <FileCode className="w-3.5 h-3.5" />
                <span>Insert FAQ Schema</span>
              </button>

              {schemaMarkup.trim() && (
                <>
                  <button
                    type="button"
                    onClick={handleFormatSchema}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-medium transition-colors cursor-pointer border border-slate-200"
                    title="Format and prettify JSON indentation"
                  >
                    <span>Format JSON</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSchemaMarkup("")}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-rose-600 hover:bg-rose-50 text-xs font-medium transition-colors cursor-pointer"
                    title="Clear custom schema"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear</span>
                  </button>
                </>
              )}
            </div>

            {/* Textarea */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                  JSON-LD Code (<code className="lowercase">&lt;script type="application/ld+json"&gt;</code>)
                </label>
                <span className="text-[11px] text-slate-400">
                  {schemaMarkup.length > 0 ? `${schemaMarkup.length} characters` : "Leave empty to use automatic default"}
                </span>
              </div>
              <textarea
                rows={9}
                value={schemaMarkup}
                onChange={(e) => setSchemaMarkup(e.target.value)}
                placeholder={`{\n  "@context": "https://schema.org",\n  "@type": "BlogPosting",\n  "headline": "${title || "Article Headline"}",\n  "author": {\n    "@type": "Person",\n    "name": "${author || "DU SOL Admissions Team"}"\n  }\n}`}
                className={`w-full px-4 py-3 rounded-xl border font-mono text-xs leading-relaxed outline-none transition-all ${
                  schemaValidation.empty
                    ? "border-slate-200 focus:border-[#652a7c] focus:ring-2 focus:ring-[#652a7c]/10 text-slate-800 bg-slate-50/50"
                    : schemaValidation.valid
                    ? "border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 text-slate-900 bg-emerald-50/20"
                    : "border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10 text-slate-900 bg-rose-50/20"
                }`}
              />
              {!schemaValidation.valid && schemaValidation.error && (
                <p className="text-[11px] text-rose-600 mt-1 font-mono">
                  {schemaValidation.error}
                </p>
              )}
              <p className="text-[11px] text-slate-400 mt-1.5">
                Tip: Paste either raw JSON or a complete <code className="text-slate-600">&lt;script type="application/ld+json"&gt;</code> snippet. Google accepts Article, FAQPage, HowTo, BreadcrumbList, and more.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Publishing Controls, Image, Metadata (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Publish Settings Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#652a7c]" />
              <span>Publishing Options</span>
            </h3>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Publication Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as any)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white font-semibold text-xs sm:text-sm text-slate-900 outline-none focus:border-[#652a7c]"
              >
                <option value="published">Published (Visible Publicly)</option>
                <option value="draft">Draft (Private to Admin)</option>
                <option value="scheduled">Scheduled</option>
              </select>
            </div>

            {status === "scheduled" && (
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Scheduled Publish Date
                </label>
                <input
                  type="date"
                  value={scheduledDate}
                  onChange={(e) => setScheduledDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 outline-none focus:border-[#652a7c]"
                />
              </div>
            )}

            <button
              type="submit"
              disabled={saving}
              className="w-full py-3 rounded-xl bg-[#652a7c] hover:bg-purple-900 text-white font-bold text-xs shadow-md transition-colors cursor-pointer disabled:opacity-60 flex items-center justify-center gap-2"
            >
              <Save className="w-4 h-4" />
              <span>{saving ? "Saving..." : isEdit ? "Update Article" : "Save & Publish"}</span>
            </button>
          </div>

          {/* Featured Image Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs">
            <ImageUploader
              value={featuredImage}
              onChange={setFeaturedImage}
              label="Article Featured Image"
            />
          </div>

          {/* Taxonomy & Author Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100 flex items-center gap-2">
              <Folder className="w-4 h-4 text-[#652a7c]" />
              <span>Category & Author</span>
            </h3>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Category
              </label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Admissions, Exams, Courses, Results"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 outline-none focus:border-[#652a7c]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-slate-400" />
                <span>Author Name</span>
              </label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="DU SOL Editorial Team"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 outline-none focus:border-[#652a7c]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-slate-400" />
                <span>Tags (comma-separated)</span>
              </label>
              <input
                type="text"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                placeholder="DU SOL, Admission 2026, BA, Distance Learning"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 outline-none focus:border-[#652a7c]"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
