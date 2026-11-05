"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  User,
  Mail,
  GraduationCap,
  MapPin,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface AdmissionFormProps {
  formTitle?: string;
  formSubtitle?: string;
  source?: string;
  sourceName?: string;
  sourceId?: string;
  onSuccess?: () => void;
  isCompact?: boolean;
  defaultCourse?: string;
}

// Official CRM Programs
export const CRM_PROGRAMS = {
  ug: [
    "Bachelor of Arts (BA)",
    "Bachelor of Commerce (B.Com)",
    "Bachelor of Business Administration (BBA)",
    "Bachelor of Management Studies (BMS)",
    "Bachelor of Computer Application (BCA)",
    "Bachelor of Library and Information Science (BLIS)",
  ],
  pg: [
    "Master of Business Administration (MBA)",
    "Master of Commerce (M.Com)",
    "Master of Arts (MA)",
    "Master of Library and Information Science (MLIS)",
    "Master of Journalism and Mass Communication (MJMC)",
  ],
  mba: [
    "MBA in Business Analytics",
    "MBA in Information Technology",
    "MBA in Human Resource Management",
    "MBA in Finance Management",
    "MBA in Marketing Management",
    "MBA in Operations Management",
    "MBA in Project Management",
    "MBA in International Business Management",
    "MBA in Supply Chain Management",
    "MBA in Hospital Administration",
    "MBA in International Trade",
    "MBA in Retail Management",
    "MBA in Rural Management",
    "MBA in Business Management",
  ],
};

export function normalizeToCrmCourse(name: string): string {
  if (!name) return "";
  const n = name.trim();
  const lower = n.toLowerCase();

  // UG
  if (lower.includes("bms") || lower.includes("management studies")) return "Bachelor of Management Studies (BMS)";
  if (lower.includes("bba") || (lower.includes("business administration") && !lower.includes("master") && !lower.includes("mba"))) return "Bachelor of Business Administration (BBA)";
  if (lower.includes("bcom") || lower.includes("b.com") || (lower.includes("commerce") && !lower.includes("mcom") && !lower.includes("master"))) return "Bachelor of Commerce (B.Com)";
  if (lower.includes("blis") || (lower.includes("library") && !lower.includes("mlis") && !lower.includes("master"))) return "Bachelor of Library and Information Science (BLIS)";
  if (lower.includes("bca") || (lower.includes("computer application") && !lower.includes("mca"))) return "Bachelor of Computer Application (BCA)";
  if (lower === "ba" || lower.startsWith("ba ") || lower.includes("bachelor of arts") || lower.includes("distance ba")) return "Bachelor of Arts (BA)";

  // MBA Specializations & PG
  if (lower.includes("analytics")) return "MBA in Business Analytics";
  if (lower.includes("information technology") || lower.includes("mba-it") || lower.includes("mba (itm)")) return "MBA in Information Technology";
  if (lower.includes("human resource") || lower.includes("hrm")) return "MBA in Human Resource Management";
  if (lower.includes("finance") || lower.includes("fm")) return "MBA in Finance Management";
  if (lower.includes("marketing") || lower.includes("mm")) return "MBA in Marketing Management";
  if (lower.includes("operations") || lower.includes("om")) return "MBA in Operations Management";
  if (lower.includes("project management") || lower.includes("pm")) return "MBA in Project Management";
  if (lower.includes("hospital") || lower.includes("healthcare") || lower.includes("ham")) return "MBA in Hospital Administration";
  if (lower.includes("international trade")) return "MBA in International Trade";
  if (lower.includes("international business") || lower.includes("ibm")) return "MBA in International Business Management";
  if (lower.includes("supply chain") || lower.includes("scm")) return "MBA in Supply Chain Management";
  if (lower.includes("rural")) return "MBA in Rural Management";
  if (lower.includes("retail")) return "MBA in Retail Management";
  if (lower.includes("business management") || lower.includes("bm")) return "MBA in Business Management";
  if (lower.includes("mjmc") || lower.includes("journalism")) return "Master of Journalism and Mass Communication (MJMC)";
  if (lower.includes("mcom") || lower.includes("m.com") || lower.includes("master of commerce")) return "Master of Commerce (M.Com)";
  if (lower.includes("mlis") || lower.includes("master of library")) return "Master of Library and Information Science (MLIS)";
  if (lower === "mba" || lower.includes("master of business administration") || lower.includes("distance mba")) return "Master of Business Administration (MBA)";
  if (lower === "ma" || lower.includes("master of arts") || lower.includes("distance ma")) return "Master of Arts (MA)";

  return n;
}

const INDIAN_STATES = [
  "Delhi NCR",
  "Uttar Pradesh",
  "Haryana",
  "Bihar",
  "Rajasthan",
  "Punjab",
  "Madhya Pradesh",
  "Maharashtra",
  "West Bengal",
  "Uttarakhand",
  "Jharkhand",
  "Other State",
];

export function AdmissionForm({
  formTitle = "Apply for DU SOL Admission 2026-27",
  formSubtitle = "Direct Admission Without CUET · Free Expert Counseling",
  source = "WS_DUSOL",
  sourceName = "WS_DUSOL",
  sourceId = "499",
  onSuccess,
  isCompact = false,
  defaultCourse = "",
}: AdmissionFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    course: normalizeToCrmCourse(defaultCourse) || "",
    state: "",
  });

  React.useEffect(() => {
    if (defaultCourse) {
      setFormData((prev) => ({ ...prev, course: normalizeToCrmCourse(defaultCourse) }));
    }
  }, [defaultCourse]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic Validation
    if (!formData.fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    const cleanMobile = formData.mobile.replace(/\D/g, "");
    if (!cleanMobile || cleanMobile.length < 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!formData.course) {
      setError("Please select the course you are interested in.");
      return;
    }
    if (!formData.state) {
      setError("Please select your current state / region.");
      return;
    }

    setIsSubmitting(true);

    try {
      const pageUrl = typeof window !== "undefined" ? window.location.href : "";
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          email: formData.email.trim().toLowerCase(),
          mobile: cleanMobile.slice(-10),
          course: formData.course,
          city: formData.state || "Delhi NCR",
          state: formData.state || "Delhi NCR",
          source: source || "WS_DUSOL",
          source_name: sourceName || "WS_DUSOL",
          source_id: sourceId || "499",
          supplier_id: "",
          page_url: pageUrl,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to submit enquiry. Please try again.");
      }

      setIsSubmitted(true);
      if (onSuccess) {
        setTimeout(onSuccess, 2200);
      }
    } catch (err: any) {
      console.error("[AdmissionForm] Error submitting lead:", err);
      setError(err?.message || "Something went wrong. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-slate-100 text-center animate-in fade-in duration-300">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-2.5">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-lg font-bold text-slate-900">Application Received!</h3>
        <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
          Thank you, <strong className="text-slate-800">{formData.fullName}</strong>. An official counselor will call you on{" "}
          <strong className="text-slate-800">+91 {formData.mobile}</strong> shortly with your syllabus and fee details.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xl ring-1 ring-slate-900/10 border border-slate-200/80">
      {/* Balanced Middle-Size Header */}
      <div className="mb-3">
        <div className="flex items-center mb-1">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-50 text-[#652a7c] border border-purple-200/70">
            Admissions 2026-27
          </span>
        </div>
        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight leading-snug">
          {formTitle}
        </h3>
        {formSubtitle && (
          <p className="text-xs text-slate-500 mt-0.5">{formSubtitle}</p>
        )}
      </div>

      {error && (
        <div className="mb-2 p-2 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
          {error}
        </div>
      )}

      {/* Form Fields: Balanced 4-Row Layout */}
      <form onSubmit={handleSubmit} className="space-y-2.5">
        {/* Row 1: Full Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="Enter student full name"
              className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:outline-hidden focus:border-sky-600 focus:ring-1 focus:ring-sky-100 transition-all bg-slate-50/50"
            />
          </div>
        </div>

        {/* Row 2: Mobile Number & Email Address (Side-by-Side) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {/* Mobile Number */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Mobile Number <span className="text-rose-500">*</span>
            </label>
            <div className="relative flex">
              <span className="inline-flex items-center px-2 rounded-l-lg border border-r-0 border-slate-200 bg-slate-100 text-slate-600 text-xs font-bold">
                +91
              </span>
              <input
                type="tel"
                required
                maxLength={10}
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, "") })}
                placeholder="10-digit number"
                className="w-full px-2.5 py-2 rounded-r-lg border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:outline-hidden focus:border-sky-600 focus:ring-1 focus:ring-sky-100 transition-all bg-slate-50/50"
              />
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@example.com"
                className="w-full pl-8 pr-3 py-2 rounded-lg border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:outline-hidden focus:border-sky-600 focus:ring-1 focus:ring-sky-100 transition-all bg-slate-50/50"
              />
            </div>
          </div>
        </div>

        {/* Row 3: Select Course (Full-Width for long course titles) */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Course Interested In <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <GraduationCap className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <select
              required
              value={formData.course}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              className="w-full pl-9 pr-7 py-2 rounded-lg border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-hidden focus:border-sky-600 focus:ring-1 focus:ring-sky-100 transition-all bg-slate-50/50 appearance-none font-medium truncate"
            >
              <option value="">Select Course</option>
              {formData.course &&
                !CRM_PROGRAMS.ug.includes(formData.course) &&
                !CRM_PROGRAMS.pg.includes(formData.course) &&
                !CRM_PROGRAMS.mba.includes(formData.course) && (
                  <option value={formData.course}>{formData.course}</option>
                )}
              <optgroup label="Bachelor Programs (UG)">
                {CRM_PROGRAMS.ug.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Master Programs (PG)">
                {CRM_PROGRAMS.pg.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </optgroup>
              <optgroup label="MBA Specializations">
                {CRM_PROGRAMS.mba.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </optgroup>
            </select>
            <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
              ▼
            </div>
          </div>
        </div>

        {/* Row 4: Select State / Region */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Current State / Region <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <select
              required
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              className="w-full pl-9 pr-7 py-2 rounded-lg border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-hidden focus:border-sky-600 focus:ring-1 focus:ring-sky-100 transition-all bg-slate-50/50 appearance-none font-medium truncate"
            >
              <option value="">Select your state</option>
              {INDIAN_STATES.map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
            </select>
            <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
              ▼
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#652a7c] hover:bg-[#521f66] active:bg-[#431754] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-70 cursor-pointer active:scale-98 mt-1"
        >
          {isSubmitting ? (
            <span>Submitting details...</span>
          ) : (
            <>
              <span>Apply & Get Free Counseling</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        {/* Authorization Consent Notice */}
        <div className="pt-2 border-t border-slate-100">
          <span className="text-[9px] leading-relaxed text-slate-500 block text-center">
            I authorize EduKyu to contact me with updates &amp; notifications via email, SMS, WhatsApp, and voice call. This consent will override any registration for DNC / NDNC. View our{" "}
            <Link className="text-[#652a7c] font-semibold underline hover:text-[#521f66]" href="/privacy-policy">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link className="text-[#652a7c] font-semibold underline hover:text-[#521f66]" href="/terms-conditions">
              Terms and Conditions
            </Link>.
          </span>
        </div>
      </form>
    </div>
  );
}
