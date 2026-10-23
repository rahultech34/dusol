"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Save,
  CheckCircle2,
  AlertCircle,
  Globe,
  FileText,
  Bell,
  GraduationCap,
  CheckSquare,
  HelpCircle,
  ExternalLink,
  Plus,
  Trash2,
  RotateCcw,
  Sparkles,
  Layers,
  ChevronRight,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";
import { AdminLayoutWrapper } from "@/components/admin/AdminLayoutWrapper";
import {
  HomePageContent,
  HomePageNotice,
  ProgrammeTableItem,
  WhyChooseFeature,
  HomePageFAQ,
} from "@/lib/home-page-types";
import { DEFAULT_HOME_PAGE_CONTENT } from "@/lib/home-page-defaults";

type TabId =
  | "seo"
  | "about"
  | "notices"
  | "programmes"
  | "eligibility"
  | "whyChoose"
  | "admission"
  | "faqs";

interface HomePageEditorProps {
  initialContent?: HomePageContent;
}

export function HomePageEditor({ initialContent }: HomePageEditorProps) {
  const [activeTab, setActiveTab] = useState<TabId>("seo");
  const [content, setContent] = useState<HomePageContent>(
    initialContent || DEFAULT_HOME_PAGE_CONTENT
  );
  const [loading, setLoading] = useState(initialContent ? false : true);
  const [saving, setSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Load from API
  useEffect(() => {
    if (initialContent) return;
    async function loadData() {
      try {
        setLoading(true);
        const res = await fetch("/api/admin/home-page");
        if (res.ok) {
          const json = await res.json();
          if (json.content) {
            setContent(json.content);
          }
        }
      } catch (e) {
        console.error("Failed to load home page content:", e);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [initialContent]);

  const handleSave = async () => {
    try {
      setSaving(true);
      setStatusMessage(null);
      const res = await fetch("/api/admin/home-page", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to save content");
      }
      setStatusMessage({ type: "success", text: "Home page content updated successfully!" });
      setTimeout(() => setStatusMessage(null), 4000);
    } catch (e: any) {
      setStatusMessage({ type: "error", text: e.message || "An unexpected error occurred" });
    } finally {
      setSaving(false);
    }
  };

  const handleResetToDefault = () => {
    if (confirm("Are you sure you want to restore the default DU SOL 2026 homepage template? Any unsaved edits will be lost.")) {
      setContent(DEFAULT_HOME_PAGE_CONTENT);
      setStatusMessage({ type: "success", text: "Default template loaded. Click 'Save Changes' to commit." });
    }
  };

  // Helper mutators
  const updateSEO = (key: keyof HomePageContent["seo"], val: string) => {
    setContent((prev) => ({
      ...prev,
      seo: { ...prev.seo, [key]: val },
    }));
  };

  const updateAbout = (key: "heading" | "subheading", val: string) => {
    setContent((prev) => ({
      ...prev,
      about: { ...prev.about, [key]: val },
    }));
  };

  const updateAboutParagraph = (index: number, val: string) => {
    setContent((prev) => {
      const p = [...prev.about.paragraphs];
      p[index] = val;
      return { ...prev, about: { ...prev.about, paragraphs: p } };
    });
  };

  const addAboutParagraph = () => {
    setContent((prev) => ({
      ...prev,
      about: {
        ...prev.about,
        paragraphs: [...prev.about.paragraphs, ""],
      },
    }));
  };

  const removeAboutParagraph = (index: number) => {
    setContent((prev) => ({
      ...prev,
      about: {
        ...prev.about,
        paragraphs: prev.about.paragraphs.filter((_, i) => i !== index),
      },
    }));
  };

  // Notices
  const updateNotice = (index: number, key: keyof HomePageNotice, val: any) => {
    setContent((prev) => {
      const n = [...prev.notices];
      n[index] = { ...n[index], [key]: val };
      return { ...prev, notices: n };
    });
  };

  const addNotice = () => {
    setContent((prev) => ({
      ...prev,
      notices: [
        {
          id: `notice-${Date.now()}`,
          title: "New Official Notification Title",
          link: "/student-zone",
          isNew: true,
        },
        ...prev.notices,
      ],
    }));
  };

  const removeNotice = (index: number) => {
    setContent((prev) => ({
      ...prev,
      notices: prev.notices.filter((_, i) => i !== index),
    }));
  };

  // Programmes
  const updateBachelorCourse = (index: number, key: keyof ProgrammeTableItem, val: string) => {
    setContent((prev) => {
      const c = [...prev.programmes.bachelorCourses];
      c[index] = { ...c[index], [key]: val };
      return { ...prev, programmes: { ...prev.programmes, bachelorCourses: c } };
    });
  };

  const addBachelorCourse = () => {
    setContent((prev) => ({
      ...prev,
      programmes: {
        ...prev.programmes,
        bachelorCourses: [
          ...prev.programmes.bachelorCourses,
          { code: "NEW", name: "New Bachelor Program", description: "Program description here.", duration: "3 Year" },
        ],
      },
    }));
  };

  const removeBachelorCourse = (index: number) => {
    setContent((prev) => ({
      ...prev,
      programmes: {
        ...prev.programmes,
        bachelorCourses: prev.programmes.bachelorCourses.filter((_, i) => i !== index),
      },
    }));
  };

  const updateMasterCourse = (index: number, key: keyof ProgrammeTableItem, val: string) => {
    setContent((prev) => {
      const c = [...prev.programmes.masterCourses];
      c[index] = { ...c[index], [key]: val };
      return { ...prev, programmes: { ...prev.programmes, masterCourses: c } };
    });
  };

  const addMasterCourse = () => {
    setContent((prev) => ({
      ...prev,
      programmes: {
        ...prev.programmes,
        masterCourses: [
          ...prev.programmes.masterCourses,
          { code: "NEW", name: "New Master Program", description: "Program description here.", duration: "2 Year" },
        ],
      },
    }));
  };

  const removeMasterCourse = (index: number) => {
    setContent((prev) => ({
      ...prev,
      programmes: {
        ...prev.programmes,
        masterCourses: prev.programmes.masterCourses.filter((_, i) => i !== index),
      },
    }));
  };

  // Eligibility
  const updateEligibilityField = (key: keyof Omit<HomePageContent["eligibility"], "generalRequirements">, val: string) => {
    setContent((prev) => ({
      ...prev,
      eligibility: { ...prev.eligibility, [key]: val },
    }));
  };

  const updateGeneralReq = (index: number, val: string) => {
    setContent((prev) => {
      const reqs = [...prev.eligibility.generalRequirements];
      reqs[index] = val;
      return { ...prev, eligibility: { ...prev.eligibility, generalRequirements: reqs } };
    });
  };

  const addGeneralReq = () => {
    setContent((prev) => ({
      ...prev,
      eligibility: {
        ...prev.eligibility,
        generalRequirements: [...prev.eligibility.generalRequirements, "New eligibility condition point..."],
      },
    }));
  };

  const removeGeneralReq = (index: number) => {
    setContent((prev) => ({
      ...prev,
      eligibility: {
        ...prev.eligibility,
        generalRequirements: prev.eligibility.generalRequirements.filter((_, i) => i !== index),
      },
    }));
  };

  // Why Choose Features
  const updateWhyFeature = (index: number, key: keyof WhyChooseFeature, val: string) => {
    setContent((prev) => {
      const f = [...prev.whyChoose.features];
      f[index] = { ...f[index], [key]: val };
      return { ...prev, whyChoose: { ...prev.whyChoose, features: f } };
    });
  };

  // Admission Process
  const updateAdmissionConsideration = (index: number, val: string) => {
    setContent((prev) => {
      const list = [...prev.admissionProcedure.importantConsiderations];
      list[index] = val;
      return {
        ...prev,
        admissionProcedure: { ...prev.admissionProcedure, importantConsiderations: list },
      };
    });
  };

  const addAdmissionConsideration = () => {
    setContent((prev) => ({
      ...prev,
      admissionProcedure: {
        ...prev.admissionProcedure,
        importantConsiderations: [...prev.admissionProcedure.importantConsiderations, ""],
      },
    }));
  };

  const removeAdmissionConsideration = (index: number) => {
    setContent((prev) => ({
      ...prev,
      admissionProcedure: {
        ...prev.admissionProcedure,
        importantConsiderations: prev.admissionProcedure.importantConsiderations.filter((_, i) => i !== index),
      },
    }));
  };

  const updateOnlineStep = (index: number, val: string) => {
    setContent((prev) => {
      const steps = [...prev.admissionProcedure.onlineProcessSteps];
      steps[index] = val;
      return {
        ...prev,
        admissionProcedure: { ...prev.admissionProcedure, onlineProcessSteps: steps },
      };
    });
  };

  const addOnlineStep = () => {
    setContent((prev) => ({
      ...prev,
      admissionProcedure: {
        ...prev.admissionProcedure,
        onlineProcessSteps: [...prev.admissionProcedure.onlineProcessSteps, ""],
      },
    }));
  };

  const removeOnlineStep = (index: number) => {
    setContent((prev) => ({
      ...prev,
      admissionProcedure: {
        ...prev.admissionProcedure,
        onlineProcessSteps: prev.admissionProcedure.onlineProcessSteps.filter((_, i) => i !== index),
      },
    }));
  };

  // FAQs
  const updateFAQ = (index: number, key: keyof HomePageFAQ, val: string) => {
    setContent((prev) => {
      const f = [...prev.faqs];
      f[index] = { ...f[index], [key]: val };
      return { ...prev, faqs: f };
    });
  };

  const addFAQ = () => {
    setContent((prev) => ({
      ...prev,
      faqs: [
        ...prev.faqs,
        {
          id: `faq-${Date.now()}`,
          question: "New Question Title?",
          answer: "Detailed answer explaining DU SOL guidelines and criteria.",
        },
      ],
    }));
  };

  const removeFAQ = (index: number) => {
    setContent((prev) => ({
      ...prev,
      faqs: prev.faqs.filter((_, i) => i !== index),
    }));
  };

  const tabs: { id: TabId; label: string; icon: any }[] = [
    { id: "seo", label: "1. SEO Meta", icon: Globe },
    { id: "about", label: "2. About DU SOL", icon: FileText },
    { id: "notices", label: "3. Latest Notices", icon: Bell },
    { id: "programmes", label: "4. Programmes Offered", icon: GraduationCap },
    { id: "eligibility", label: "5. Eligibility 2026", icon: CheckSquare },
    { id: "whyChoose", label: "6. Who Should Consider", icon: Sparkles },
    { id: "admission", label: "7. Admission Procedure", icon: Layers },
    { id: "faqs", label: "8. FAQs (9 Questions)", icon: HelpCircle },
  ];

  if (loading) {
    return (
      <AdminLayoutWrapper
        title="Home Page Management"
        subtitle="Manage all 8 sections of the official DU SOL home page."
      >
        <div className="flex items-center justify-center min-h-[300px]">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-3 border-[#652a7c] border-t-transparent rounded-full animate-spin" />
            <p className="text-xs text-slate-500 font-medium">Loading Home Page CMS content...</p>
          </div>
        </div>
      </AdminLayoutWrapper>
    );
  }

  return (
    <AdminLayoutWrapper
      title="Home Page Content Manager"
      subtitle="Complete management of SEO, About text, Notices, Courses tables, Eligibility, Admission Procedure, and FAQs."
    >
      <div className="space-y-6">
        {/* Floating Top Bar with Actions */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex flex-wrap items-center justify-between gap-4 sticky top-2 z-20">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#652a7c]/10 text-[#652a7c] flex items-center justify-center font-bold">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">
                Live Home Page Editor
              </div>
              <div className="text-[11px] text-slate-400">
                {content.updatedAt
                  ? `Last saved: ${new Date(content.updatedAt).toLocaleString()}`
                  : "Using initial configuration template"}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={handleResetToDefault}
              className="px-3.5 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Reset fields to original template"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset Default</span>
            </button>

            <Link
              href="/"
              target="_blank"
              className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Preview Live Site</span>
            </Link>

            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="px-5 py-2 rounded-xl bg-[#652a7c] hover:bg-[#522165] active:bg-[#431953] text-white text-xs font-bold shadow-md shadow-[#652a7c]/20 flex items-center gap-2 transition-all cursor-pointer disabled:opacity-50"
            >
              {saving ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Alert Feedback */}
        {statusMessage && (
          <div
            className={`p-4 rounded-2xl text-xs sm:text-sm flex items-center gap-3 transition-all ${
              statusMessage.type === "success"
                ? "bg-emerald-50 border border-emerald-200 text-emerald-800"
                : "bg-rose-50 border border-rose-200 text-rose-800"
            }`}
          >
            {statusMessage.type === "success" ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
            )}
            <span>{statusMessage.text}</span>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-slate-200/80 scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                  active
                    ? "bg-[#652a7c] text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: SEO Meta Data */}
        {activeTab === "seo" && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">1. SEO Meta Information</h3>
              <p className="text-xs text-slate-500">
                Configure primary title tag, search description, and preview how the home page appears in Google search results.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  SEO Page Title (60-70 characters recommended)
                </label>
                <input
                  type="text"
                  value={content.seo.title}
                  onChange={(e) => updateSEO("title", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#652a7c] focus:ring-1 focus:ring-[#652a7c]"
                  placeholder="DU SOL Distance Education Courses, Fees, Admissions 2026 | Edukyu"
                />
                <div className="mt-1 text-[11px] text-slate-400 text-right">
                  {content.seo.title.length} characters
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Meta Description (150-160 characters recommended)
                </label>
                <textarea
                  rows={3}
                  value={content.seo.description}
                  onChange={(e) => updateSEO("description", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#652a7c] focus:ring-1 focus:ring-[#652a7c]"
                  placeholder="DU SOL Distance Education Courses, Fees, Admissions 2026 with Edukyu..."
                />
                <div className="mt-1 text-[11px] text-slate-400 text-right">
                  {content.seo.description.length} characters
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Keywords (Optional)
                </label>
                <input
                  type="text"
                  value={content.seo.keywords || ""}
                  onChange={(e) => updateSEO("keywords", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#652a7c] focus:ring-1 focus:ring-[#652a7c]"
                  placeholder="DU SOL, Delhi University School of Open Learning, DU SOL admission 2026"
                />
              </div>

              {/* Live SERP Preview */}
              <div className="pt-4 border-t border-slate-100">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Google SERP Snippet Preview
                </label>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-2xl font-sans">
                  <div className="text-[12px] text-slate-600 flex items-center gap-1.5 mb-1">
                    <span className="font-medium text-slate-800">dusol.edukyu.com</span>
                    <span>›</span>
                    <span>admissions-2026</span>
                  </div>
                  <div className="text-base sm:text-lg font-medium text-blue-800 hover:underline cursor-pointer leading-snug">
                    {content.seo.title || "DU SOL Distance Education Courses, Fees, Admissions 2026"}
                  </div>
                  <div className="text-xs text-slate-600 mt-1 leading-relaxed line-clamp-2">
                    {content.seo.description || "DU SOL Distance Education Courses, Fees, Admissions 2026 with Edukyu..."}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: About DU SOL */}
        {activeTab === "about" && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">2. About DU SOL</h3>
                <p className="text-xs text-slate-500">
                  Manage the official introduction, university history, accreditation details, and counseling info.
                </p>
              </div>
              <button
                type="button"
                onClick={addAboutParagraph}
                className="px-3 py-1.5 rounded-xl bg-purple-50 text-[#652a7c] hover:bg-purple-100 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Paragraph</span>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Section Heading
                </label>
                <input
                  type="text"
                  value={content.about.heading}
                  onChange={(e) => updateAbout("heading", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#652a7c]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Subheading (Optional)
                </label>
                <input
                  type="text"
                  value={content.about.subheading || ""}
                  onChange={(e) => updateAbout("subheading", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#652a7c]"
                />
              </div>

              <div className="space-y-3 pt-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  About Content Paragraphs ({content.about.paragraphs.length})
                </label>
                {content.about.paragraphs.map((p, idx) => (
                  <div key={idx} className="flex gap-2 items-start">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 font-bold text-xs flex items-center justify-center shrink-0 mt-2">
                      {idx + 1}
                    </span>
                    <textarea
                      rows={3}
                      value={p}
                      onChange={(e) => updateAboutParagraph(idx, e.target.value)}
                      className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#652a7c]"
                    />
                    <button
                      type="button"
                      onClick={() => removeAboutParagraph(idx)}
                      disabled={content.about.paragraphs.length <= 1}
                      className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors shrink-0 disabled:opacity-30 cursor-pointer"
                      title="Delete paragraph"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Latest Notices */}
        {activeTab === "notices" && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">3. Latest News (DU SOL Notices)</h3>
                <p className="text-xs text-slate-500">
                  10 official student zone notifications and updates.
                </p>
              </div>
              <button
                type="button"
                onClick={addNotice}
                className="px-3.5 py-1.5 rounded-xl bg-purple-50 text-[#652a7c] hover:bg-purple-100 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Notice</span>
              </button>
            </div>

            <div className="space-y-3">
              {content.notices.map((notice, idx) => (
                <div
                  key={notice.id || idx}
                  className="p-4 rounded-2xl border border-slate-200 hover:border-slate-300 bg-slate-50/50 space-y-2.5 transition-all"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 flex-1">
                      <span className="w-6 h-6 rounded-full bg-[#652a7c]/10 text-[#652a7c] font-bold text-xs flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <input
                        type="text"
                        value={notice.title}
                        onChange={(e) => updateNotice(idx, "title", e.target.value)}
                        placeholder="Notice headline..."
                        className="flex-1 px-3 py-1.5 rounded-lg border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#652a7c] bg-white"
                      />
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <label className="flex items-center gap-1.5 text-xs text-slate-600 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={!!notice.isNew}
                          onChange={(e) => updateNotice(idx, "isNew", e.target.checked)}
                          className="w-3.5 h-3.5 text-[#652a7c] rounded"
                        />
                        <span className="font-semibold text-emerald-600">NEW Badge</span>
                      </label>

                      <button
                        type="button"
                        onClick={() => removeNotice(idx)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                        title="Delete notice"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pl-8">
                    <span className="text-[11px] text-slate-400 font-semibold uppercase">URL:</span>
                    <input
                      type="text"
                      value={notice.link}
                      onChange={(e) => updateNotice(idx, "link", e.target.value)}
                      placeholder="/student-zone"
                      className="flex-1 px-3 py-1 rounded-lg border border-slate-200 text-xs text-sky-700 bg-white focus:outline-none focus:border-[#652a7c]"
                    />
                    <a
                      href={notice.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-slate-400 hover:text-sky-600"
                      title="Test link"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: DU SOL Programmes Offered */}
        {activeTab === "programmes" && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-8">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">4. DU SOL Programmes Offered</h3>
              <p className="text-xs text-slate-500">
                Programmes intro overview and structured Bachelor and Master course tables.
              </p>
            </div>

            {/* Intro text */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Programmes Introduction Text
              </label>
              <textarea
                rows={4}
                value={content.programmes.intro}
                onChange={(e) =>
                  setContent((prev) => ({
                    ...prev,
                    programmes: { ...prev.programmes, intro: e.target.value },
                  }))
                }
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#652a7c]"
              />
            </div>

            {/* Bachelor Courses Table */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Bachelor Courses Table</h4>
                  <p className="text-xs text-slate-500">BA, BBA, BCOM, BMS, BLIS</p>
                </div>
                <button
                  type="button"
                  onClick={addBachelorCourse}
                  className="px-3 py-1.5 rounded-xl bg-purple-50 text-[#652a7c] hover:bg-purple-100 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Bachelor Row</span>
                </button>
              </div>

              <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-3 w-24">Course</th>
                      <th className="p-3 w-48">Full Name</th>
                      <th className="p-3">Description</th>
                      <th className="p-3 w-28">Duration</th>
                      <th className="p-3 w-12 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {content.programmes.bachelorCourses.map((c, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50">
                        <td className="p-2">
                          <input
                            type="text"
                            value={c.code}
                            onChange={(e) => updateBachelorCourse(idx, "code", e.target.value)}
                            className="w-full px-2 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-[#652a7c]"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={c.name}
                            onChange={(e) => updateBachelorCourse(idx, "name", e.target.value)}
                            className="w-full px-2 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-800"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={c.description}
                            onChange={(e) => updateBachelorCourse(idx, "description", e.target.value)}
                            className="w-full px-2 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-600"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={c.duration}
                            onChange={(e) => updateBachelorCourse(idx, "duration", e.target.value)}
                            className="w-full px-2 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-700"
                          />
                        </td>
                        <td className="p-2 text-center">
                          <button
                            type="button"
                            onClick={() => removeBachelorCourse(idx)}
                            className="p-1 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Master Courses Table */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Master Courses Table</h4>
                  <p className="text-xs text-slate-500">MA, MBA, MCOM, MLIS, MSC, MJMC, MTECH</p>
                </div>
                <button
                  type="button"
                  onClick={addMasterCourse}
                  className="px-3 py-1.5 rounded-xl bg-purple-50 text-[#652a7c] hover:bg-purple-100 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Master Row</span>
                </button>
              </div>

              <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-3 w-24">Course</th>
                      <th className="p-3 w-48">Full Name</th>
                      <th className="p-3">Description</th>
                      <th className="p-3 w-28">Duration</th>
                      <th className="p-3 w-12 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {content.programmes.masterCourses.map((c, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50">
                        <td className="p-2">
                          <input
                            type="text"
                            value={c.code}
                            onChange={(e) => updateMasterCourse(idx, "code", e.target.value)}
                            className="w-full px-2 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-[#652a7c]"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={c.name}
                            onChange={(e) => updateMasterCourse(idx, "name", e.target.value)}
                            className="w-full px-2 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-800"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={c.description}
                            onChange={(e) => updateMasterCourse(idx, "description", e.target.value)}
                            className="w-full px-2 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-600"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={c.duration}
                            onChange={(e) => updateMasterCourse(idx, "duration", e.target.value)}
                            className="w-full px-2 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-700"
                          />
                        </td>
                        <td className="p-2 text-center">
                          <button
                            type="button"
                            onClick={() => removeMasterCourse(idx)}
                            className="p-1 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Eligibility Criteria 2026 */}
        {activeTab === "eligibility" && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">5. Eligibility Criteria for DU SOL Admission in 2026</h3>
              <p className="text-xs text-slate-500">
                Educational qualifications, minimum qualifying marks, entrance examination criteria, and general requirements.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Section Title
                </label>
                <input
                  type="text"
                  value={content.eligibility.title}
                  onChange={(e) => updateEligibilityField("title", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Undergraduate (UG) Qualification
                  </label>
                  <textarea
                    rows={2}
                    value={content.eligibility.ugQualification}
                    onChange={(e) => updateEligibilityField("ugQualification", e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Postgraduate (PG) Qualification
                  </label>
                  <textarea
                    rows={2}
                    value={content.eligibility.pgQualification}
                    onChange={(e) => updateEligibilityField("pgQualification", e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    UG Minimum Marks
                  </label>
                  <textarea
                    rows={2}
                    value={content.eligibility.ugMarks}
                    onChange={(e) => updateEligibilityField("ugMarks", e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    PG Minimum Marks
                  </label>
                  <textarea
                    rows={2}
                    value={content.eligibility.pgMarks}
                    onChange={(e) => updateEligibilityField("pgMarks", e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Entrance Exams
                </label>
                <input
                  type="text"
                  value={content.eligibility.entranceExams}
                  onChange={(e) => updateEligibilityField("entranceExams", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm"
                />
              </div>

              {/* General Requirements */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    General Requirements Points
                  </label>
                  <button
                    type="button"
                    onClick={addGeneralReq}
                    className="px-3 py-1 rounded-lg bg-purple-50 text-[#652a7c] text-xs font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Point</span>
                  </button>
                </div>

                {content.eligibility.generalRequirements.map((req, idx) => (
                  <div key={idx} className="flex gap-2 items-center">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-600 font-bold text-[11px] flex items-center justify-center shrink-0">
                      •
                    </span>
                    <input
                      type="text"
                      value={req}
                      onChange={(e) => updateGeneralReq(idx, e.target.value)}
                      className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800"
                    />
                    <button
                      type="button"
                      onClick={() => removeGeneralReq(idx)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 6: Who Should Consider */}
        {activeTab === "whyChoose" && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">
                6. Who Should Consider a Distance Program from DU SOL 2026?
              </h3>
              <p className="text-xs text-slate-500">
                Overview paragraphs and 4 key pillar cards (High Enrollment, Recognized and Accredited, Flexible Learning, Commitment to Quality).
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Heading
                </label>
                <input
                  type="text"
                  value={content.whyChoose.heading}
                  onChange={(e) =>
                    setContent((prev) => ({
                      ...prev,
                      whyChoose: { ...prev.whyChoose, heading: e.target.value },
                    }))
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Description Paragraphs
                </label>
                {content.whyChoose.paragraphs.map((p, idx) => (
                  <textarea
                    key={idx}
                    rows={3}
                    value={p}
                    onChange={(e) => {
                      const newP = [...content.whyChoose.paragraphs];
                      newP[idx] = e.target.value;
                      setContent((prev) => ({
                        ...prev,
                        whyChoose: { ...prev.whyChoose, paragraphs: newP },
                      }));
                    }}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800"
                  />
                ))}
              </div>

              {/* 4 Feature Cards */}
              <div className="pt-4 border-t border-slate-100 space-y-4">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  4 Key Pillar Features
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {content.whyChoose.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-2"
                    >
                      <input
                        type="text"
                        value={feat.title}
                        onChange={(e) => updateWhyFeature(idx, "title", e.target.value)}
                        placeholder="Feature Title"
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs sm:text-sm font-bold text-[#652a7c] bg-white"
                      />
                      <textarea
                        rows={2}
                        value={feat.description}
                        onChange={(e) => updateWhyFeature(idx, "description", e.target.value)}
                        placeholder="Feature Description"
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-700 bg-white"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 7: Admission Procedure */}
        {activeTab === "admission" && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">7. DU SOL Admission Procedure 2026</h3>
              <p className="text-xs text-slate-500">
                General introduction, Important Things to Consider (6 points), and Step-by-Step Online Process (9 steps).
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Heading
                </label>
                <input
                  type="text"
                  value={content.admissionProcedure.heading}
                  onChange={(e) =>
                    setContent((prev) => ({
                      ...prev,
                      admissionProcedure: { ...prev.admissionProcedure, heading: e.target.value },
                    }))
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Introduction Description
                </label>
                <textarea
                  rows={3}
                  value={content.admissionProcedure.intro}
                  onChange={(e) =>
                    setContent((prev) => ({
                      ...prev,
                      admissionProcedure: { ...prev.admissionProcedure, intro: e.target.value },
                    }))
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800"
                />
              </div>

              {/* Important things to consider */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Important things to consider ({content.admissionProcedure.importantConsiderations.length} items)
                  </label>
                  <button
                    type="button"
                    onClick={addAdmissionConsideration}
                    className="px-3 py-1 rounded-lg bg-purple-50 text-[#652a7c] text-xs font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Item</span>
                  </button>
                </div>

                {content.admissionProcedure.importantConsiderations.map((item, idx) => (
                  <div key={idx} className="flex gap-2 items-center">
                    <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => updateAdmissionConsideration(idx, e.target.value)}
                      className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800"
                    />
                    <button
                      type="button"
                      onClick={() => removeAdmissionConsideration(idx)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              {/* DU SOL Online Process Steps */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    DU SOL Online Process Steps ({content.admissionProcedure.onlineProcessSteps.length} steps)
                  </label>
                  <button
                    type="button"
                    onClick={addOnlineStep}
                    className="px-3 py-1 rounded-lg bg-purple-50 text-[#652a7c] text-xs font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Step</span>
                  </button>
                </div>

                {content.admissionProcedure.onlineProcessSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-2 items-center">
                    <span className="w-6 h-6 rounded-full bg-[#652a7c]/10 text-[#652a7c] font-bold text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <input
                      type="text"
                      value={step}
                      onChange={(e) => updateOnlineStep(idx, e.target.value)}
                      className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800"
                    />
                    <button
                      type="button"
                      onClick={() => removeOnlineStep(idx)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 8: FAQs */}
        {activeTab === "faqs" && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">8. Frequently Asked Questions (FAQs)</h3>
                <p className="text-xs text-slate-500">
                  Manage the 9 core questions & answers displayed on the public home page.
                </p>
              </div>
              <button
                type="button"
                onClick={addFAQ}
                className="px-3.5 py-1.5 rounded-xl bg-purple-50 text-[#652a7c] hover:bg-purple-100 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add FAQ</span>
              </button>
            </div>

            <div className="space-y-4">
              {content.faqs.map((faq, idx) => (
                <div
                  key={faq.id || idx}
                  className="p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-slate-300 bg-slate-50/50 space-y-3 transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2 flex-1">
                      <span className="w-7 h-7 rounded-full bg-[#652a7c] text-white font-bold text-xs flex items-center justify-center shrink-0">
                        Q{idx + 1}
                      </span>
                      <input
                        type="text"
                        value={faq.question}
                        onChange={(e) => updateFAQ(idx, "question", e.target.value)}
                        placeholder="Question title..."
                        className="flex-1 px-3 py-1.5 rounded-lg border border-slate-200 text-xs sm:text-sm font-bold text-slate-900 bg-white focus:outline-none focus:border-[#652a7c]"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFAQ(idx)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer shrink-0"
                      title="Delete question"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="pl-9">
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Answer
                    </label>
                    <textarea
                      rows={3}
                      value={faq.answer}
                      onChange={(e) => updateFAQ(idx, "answer", e.target.value)}
                      placeholder="Comprehensive answer text..."
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 bg-white focus:outline-none focus:border-[#652a7c]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </AdminLayoutWrapper>
  );
}
