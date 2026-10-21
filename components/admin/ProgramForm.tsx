"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Save,
  ArrowLeft,
  Plus,
  Trash2,
  CheckCircle2,
  AlertCircle,
  BookOpen,
  DollarSign,
  GraduationCap,
  Briefcase,
  Globe,
  Layers,
  FileText,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";
import { ImageUploader } from "./ImageUploader";
import { RichTextEditor } from "./RichTextEditor";
import { Program, ProgramCurriculumSemester, ProgramFeeItem, ProgramFAQ } from "@/lib/types";
import { notifyNavUpdated } from "@/components/navbar/useNavData";

interface ProgramFormProps {
  type: "ug" | "pg" | "mba";
  initialData?: Program | null;
  isEdit?: boolean;
}

export function ProgramForm({ type, initialData, isEdit = false }: ProgramFormProps) {
  const router = useRouter();

  const [name, setName] = useState(initialData?.name || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [degree, setDegree] = useState(
    initialData?.degree ||
      (type === "ug"
        ? "Bachelor Degree"
        : type === "pg"
        ? "Master Degree"
        : "Master of Business Administration (MBA)")
  );
  const [duration, setDuration] = useState(
    initialData?.duration || (type === "ug" ? "3 Years (6 Semesters)" : "2 Years (4 Semesters)")
  );
  const [overview, setOverview] = useState(initialData?.overview || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [eligibility, setEligibility] = useState(initialData?.eligibility || "");
  const [admissionProcess, setAdmissionProcess] = useState(initialData?.admissionProcess || "Direct merit-based admission through DU SOL online portal without CUET.");
  const [featuredImage, setFeaturedImage] = useState(initialData?.featuredImage || "");
  const [status, setStatus] = useState<"draft" | "published">(initialData?.status || "published");

  // Curriculum (list of semesters with subjects)
  const [curriculum, setCurriculum] = useState<ProgramCurriculumSemester[]>(
    initialData?.curriculum && initialData.curriculum.length > 0
      ? initialData.curriculum
      : [
          { semesterOrYear: "Semester 1", subjects: ["Core Subject 1", "Core Subject 2", "Language Elective"] },
          { semesterOrYear: "Semester 2", subjects: ["Core Subject 3", "Core Subject 4", "Environmental Studies"] },
        ]
  );

  // Fees
  const [fees, setFees] = useState<ProgramFeeItem[]>(
    initialData?.fees && initialData.fees.length > 0
      ? initialData.fees
      : [
          { title: "First Year Tuition Fee", amount: "₹7,820", note: "Includes study material & exam fees" },
          { title: "Second Year Tuition Fee", amount: "₹6,800", note: "Standard academic fees" },
        ]
  );

  // Career Opportunities
  const [careersInput, setCareersInput] = useState(
    initialData?.careerOpportunities?.join(", ") || "Government Civil Services, Corporate Management, Banking & Finance, Academic Research"
  );

  // Full Article / Course Guide Content (HTML / Rich text)
  const [content, setContent] = useState(initialData?.content || "");

  // FAQs
  const [faqs, setFaqs] = useState<ProgramFAQ[]>(
    initialData?.faqs && initialData.faqs.length > 0 ? initialData.faqs : []
  );

  // SEO fields
  const [seoTitle, setSeoTitle] = useState(initialData?.seoTitle || "");
  const [seoDescription, setSeoDescription] = useState(initialData?.seoDescription || "");

  const [activeTab, setActiveTab] = useState<"basic" | "guide" | "eligibility" | "curriculum" | "fees" | "seo">("basic");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const slugifyHelper = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const handleNameChange = (newName: string) => {
    setName(newName);
    if (!isEdit && (!slug || slug === slugifyHelper(name))) {
      setSlug(slugifyHelper(newName));
    }
  };

  // Curriculum Handlers
  const addSemester = () => {
    setCurriculum([
      ...curriculum,
      { semesterOrYear: `Semester ${curriculum.length + 1}`, subjects: ["Subject 1", "Subject 2"] },
    ]);
  };

  const updateSemesterTitle = (index: number, title: string) => {
    const updated = [...curriculum];
    updated[index].semesterOrYear = title;
    setCurriculum(updated);
  };

  const updateSubjects = (index: number, text: string) => {
    const updated = [...curriculum];
    updated[index].subjects = text.split("\n").filter((s) => s.trim().length > 0);
    setCurriculum(updated);
  };

  const removeSemester = (index: number) => {
    setCurriculum(curriculum.filter((_, idx) => idx !== index));
  };

  // Fee Handlers
  const addFeeItem = () => {
    setFees([...fees, { title: "New Fee Head", amount: "₹0", note: "" }]);
  };

  const updateFeeItem = (index: number, field: keyof ProgramFeeItem, val: string) => {
    const updated = [...fees];
    updated[index] = { ...updated[index], [field]: val };
    setFees(updated);
  };

  const removeFeeItem = (index: number) => {
    setFees(fees.filter((_, idx) => idx !== index));
  };

  // FAQ Handlers
  const addFaq = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const updateFaq = (index: number, field: "question" | "answer", val: string) => {
    const updated = [...faqs];
    updated[index] = { ...updated[index], [field]: val };
    setFaqs(updated);
  };

  const removeFaq = (index: number) => {
    setFaqs(faqs.filter((_, idx) => idx !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setSaving(true);

    if (!name.trim()) {
      setError("Program name is required.");
      setSaving(false);
      return;
    }

    const payload = {
      name,
      slug: slug || slugifyHelper(name),
      type,
      degree,
      duration,
      overview,
      description,
      content,
      faqs,
      eligibility,
      admissionProcess,
      curriculum,
      fees,
      careerOpportunities: careersInput.split(",").map((c) => c.trim()).filter(Boolean),
      featuredImage,
      status,
      seoTitle: seoTitle || `${name} - DU SOL Admissions 2026`,
      seoDescription: seoDescription || overview,
    };

    try {
      const url = isEdit
        ? `/api/admin/programs/${initialData?.id}?type=${type}`
        : `/api/admin/programs?type=${type}`;
      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to save program.");
        setSaving(false);
        return;
      }

      setSuccess("Program saved successfully!");
      notifyNavUpdated();
      setTimeout(() => {
        router.push(listUrl);
        router.refresh();
      }, 1000);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
      setSaving(false);
    }
  };

  const programTypeLabel =
    type === "ug"
      ? "Undergraduate (UG)"
      : type === "pg"
      ? "Postgraduate (PG)"
      : "MBA Specialization";
  const listUrl =
    type === "ug"
      ? "/admin/ug-programs"
      : type === "pg"
      ? "/admin/pg-programs"
      : "/admin/mba-specializations";
  const publicBaseUrl =
    type === "ug" ? "/ug-programs" : type === "pg" ? "/pg-programs" : "/courses";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <Link
            href={listUrl}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
              {isEdit ? `Edit ${name}` : `Create New ${programTypeLabel} Program`}
            </h2>
            <p className="text-xs text-slate-500">
              Manage curriculum, eligibility, fees, and public portal details.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={listUrl}
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
            <span>{saving ? "Saving..." : isEdit ? "Update Program" : "Save Program"}</span>
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

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
        {[
          { id: "basic", label: "Basic Info", icon: GraduationCap },
          { id: "guide", label: "Course Guide & FAQs", icon: FileText },
          { id: "eligibility", label: "Eligibility & Admission", icon: Layers },
          { id: "curriculum", label: "Curriculum & Semesters", icon: BookOpen },
          { id: "fees", label: "Fees & Careers", icon: DollarSign },
          { id: "seo", label: "SEO & Media", icon: Globe },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#652a7c] text-white shadow-xs"
                  : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab 1: Basic Info */}
      {activeTab === "basic" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/80 shadow-xs space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Program Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => handleNameChange(e.target.value)}
                placeholder="e.g. Bachelor of Commerce (B.Com) Honours"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#652a7c] outline-none text-sm sm:text-base font-bold text-slate-900"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  URL Slug (Permalink)
                </label>
                <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs font-mono text-slate-500">
                  <span className="shrink-0 text-slate-400">{publicBaseUrl}/</span>
                  <input
                    type="text"
                    required
                    value={slug}
                    onChange={(e) => setSlug(slugifyHelper(e.target.value))}
                    className="w-full bg-transparent outline-none text-slate-900 font-semibold pl-1"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Degree Conferred
                </label>
                <input
                  type="text"
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                  placeholder="e.g. Bachelor of Commerce"
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 outline-none text-xs sm:text-sm text-slate-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Program Duration
              </label>
              <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="e.g. 3 Years (6 Semesters)"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 outline-none text-xs sm:text-sm text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Program Overview (Short Summary)
              </label>
              <textarea
                rows={3}
                value={overview}
                onChange={(e) => setOverview(e.target.value)}
                placeholder="High-level introductory summary for course preview cards..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 outline-none text-xs sm:text-sm text-slate-700 leading-relaxed"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Detailed Academic Description
              </label>
              <textarea
                rows={6}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="In-depth explanation of the academic program, learning pedagogy, and Delhi University curriculum..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 outline-none text-xs sm:text-sm text-slate-700 leading-relaxed"
              />
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100">
                Publication Status
              </h3>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as any)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white font-semibold text-xs sm:text-sm text-slate-900 outline-none focus:border-[#652a7c]"
              >
                <option value="published">Published (Live on Website)</option>
                <option value="draft">Draft (Admin Only)</option>
              </select>
              <p className="text-[11px] text-slate-400">
                Published programs appear on the public {publicBaseUrl} directory and navigation.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab: Course Guide & Content (Rich Article & FAQs) */}
      {activeTab === "guide" && (
        <div className="space-y-8 max-w-5xl">
          {/* Section 1: Comprehensive Course Guide Article */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#652a7c]" />
                  <span>Comprehensive Course Guide &amp; Article Content</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Write or paste detailed course guides, specialisations, learning methodologies, tables, and admission insights.
                </p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-purple-50 text-[#652a7c] border border-purple-100 self-start sm:self-auto">
                HTML &amp; Rich Text
              </span>
            </div>

            <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              <RichTextEditor
                value={content}
                onChange={setContent}
                placeholder="Write comprehensive course guide, insert tables, headings, and detailed syllabus details..."
              />
            </div>
            <p className="text-[11px] text-slate-400">
              Tip: You can use the Table button in the toolbar to insert comparison tables, specialisation matrices, and fee breakdowns.
            </p>
          </div>

          {/* Section 2: Frequently Asked Questions (FAQs) */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#652a7c]" />
                  <span>Frequently Asked Questions (FAQs)</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Add student questions and answers that appear in the interactive accordion on the course page.
                </p>
              </div>
              <button
                type="button"
                onClick={addFaq}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-purple-50 text-[#652a7c] hover:bg-purple-100 text-xs font-bold transition-colors cursor-pointer border border-purple-200/60"
              >
                <Plus className="w-4 h-4" />
                <span>Add FAQ</span>
              </button>
            </div>

            {faqs.length === 0 ? (
              <div className="text-center py-8 px-4 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50">
                <HelpCircle className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                <p className="text-xs sm:text-sm font-semibold text-slate-600">No FAQs added yet</p>
                <p className="text-xs text-slate-400 mt-1">Click &quot;Add FAQ&quot; above to create question and answer pairs.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-bold text-[#652a7c] uppercase tracking-wider">
                        Question #{idx + 1}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeFaq(idx)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                        title="Remove FAQ"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div>
                      <input
                        type="text"
                        value={faq.question}
                        onChange={(e) => updateFaq(idx, "question", e.target.value)}
                        placeholder="e.g. Is a distance BA from DU SOL valid?"
                        className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900 outline-none focus:border-[#652a7c]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                        Answer
                      </label>
                      <textarea
                        rows={3}
                        value={faq.answer}
                        onChange={(e) => updateFaq(idx, "answer", e.target.value)}
                        placeholder="e.g. Yes. It is UGC-DEB approved and valid for government jobs and higher studies."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 outline-none focus:border-[#652a7c] leading-relaxed"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 2: Eligibility & Admission */}
      {activeTab === "eligibility" && (
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs max-w-4xl space-y-6">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Eligibility Criteria
            </label>
            <textarea
              rows={4}
              value={eligibility}
              onChange={(e) => setEligibility(e.target.value)}
              placeholder="e.g. Candidates must have passed the Senior Secondary School Certificate Examination (Class 12) from CBSE or any recognized State/National Board with a minimum of 50% aggregate marks."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none text-xs sm:text-sm text-slate-900 leading-relaxed"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Admission Process & CUET Guidelines
            </label>
            <textarea
              rows={4}
              value={admissionProcess}
              onChange={(e) => setAdmissionProcess(e.target.value)}
              placeholder="e.g. Direct merit admission without CUET. Fill online registration form, submit scanned documents, and pay the annual tuition fees online."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none text-xs sm:text-sm text-slate-900 leading-relaxed"
            />
          </div>
        </div>
      )}

      {/* Tab 3: Curriculum */}
      {activeTab === "curriculum" && (
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs max-w-4xl space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-base font-bold text-slate-900">Curriculum & Semester Syllabus</h3>
              <p className="text-xs text-slate-500">Define course subjects semester by semester</p>
            </div>
            <button
              type="button"
              onClick={addSemester}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-50 text-[#652a7c] hover:bg-purple-100 text-xs font-bold transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Semester</span>
            </button>
          </div>

          <div className="space-y-4">
            {curriculum.map((sem, idx) => (
              <div key={idx} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <input
                    type="text"
                    value={sem.semesterOrYear}
                    onChange={(e) => updateSemesterTitle(idx, e.target.value)}
                    placeholder="e.g. Semester 1"
                    className="font-bold text-sm bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-slate-900 outline-none w-48"
                  />
                  <button
                    type="button"
                    onClick={() => removeSemester(idx)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                    title="Remove semester"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Subjects (one per line)
                  </label>
                  <textarea
                    rows={3}
                    value={sem.subjects.join("\n")}
                    onChange={(e) => updateSubjects(idx, e.target.value)}
                    placeholder="Financial Accounting&#10;Business Laws&#10;Environmental Science"
                    className="w-full bg-white px-3 py-2 rounded-xl border border-slate-200 outline-none text-xs sm:text-sm font-mono text-slate-800"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Fees & Careers */}
      {activeTab === "fees" && (
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs max-w-4xl space-y-6">
          {/* Fee Structure */}
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">Fee Structure</h3>
                <p className="text-xs text-slate-500">Breakdown of course tuition and other academic charges</p>
              </div>
              <button
                type="button"
                onClick={addFeeItem}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-50 text-[#652a7c] hover:bg-purple-100 text-xs font-bold transition-colors cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Fee Head</span>
              </button>
            </div>

            <div className="space-y-3">
              {fees.map((f, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-slate-200 flex items-center gap-3 bg-slate-50/50">
                  <input
                    type="text"
                    value={f.title}
                    onChange={(e) => updateFeeItem(idx, "title", e.target.value)}
                    placeholder="Fee Head (e.g. 1st Year)"
                    className="flex-1 bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-900"
                  />
                  <input
                    type="text"
                    value={f.amount}
                    onChange={(e) => updateFeeItem(idx, "amount", e.target.value)}
                    placeholder="₹7,820"
                    className="w-32 bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-[#652a7c]"
                  />
                  <input
                    type="text"
                    value={f.note || ""}
                    onChange={(e) => updateFeeItem(idx, "note", e.target.value)}
                    placeholder="Optional note"
                    className="w-48 bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-500"
                  />
                  <button
                    type="button"
                    onClick={() => removeFeeItem(idx)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Career Opportunities */}
          <div className="pt-6 border-t border-slate-100">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-[#652a7c]" />
              <span>Career Opportunities (comma-separated)</span>
            </label>
            <input
              type="text"
              value={careersInput}
              onChange={(e) => setCareersInput(e.target.value)}
              placeholder="Investment Banker, Financial Analyst, UPSC Aspirant, Corporate Consultant"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none text-xs sm:text-sm text-slate-900"
            />
          </div>
        </div>
      )}

      {/* Tab 5: SEO & Media */}
      {activeTab === "seo" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-5">
            <h3 className="text-base font-bold text-slate-900 pb-2 border-b border-slate-100 flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#652a7c]" />
              <span>Program SEO Metadata</span>
            </h3>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                SEO Meta Title
              </label>
              <input
                type="text"
                value={seoTitle}
                onChange={(e) => setSeoTitle(e.target.value)}
                placeholder={`${name} | DU SOL Distance Admissions 2026`}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 outline-none text-xs sm:text-sm text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                SEO Meta Description
              </label>
              <textarea
                rows={3}
                value={seoDescription}
                onChange={(e) => setSeoDescription(e.target.value)}
                placeholder="Comprehensive details about courses, syllabus, eligibility, and fees for Delhi University School of Open Learning..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 outline-none text-xs sm:text-sm text-slate-700"
              />
            </div>
          </div>

          <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs">
            <ImageUploader
              value={featuredImage}
              onChange={setFeaturedImage}
              label="Course Banner Image"
            />
          </div>
        </div>
      )}
    </form>
  );
}
