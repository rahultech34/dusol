"use client";

import React, { useState } from "react";
import {
  User,
  Mail,
  GraduationCap,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { useNavData } from "../navbar/useNavData";

interface AdmissionFormProps {
  formTitle?: string;
  formSubtitle?: string;
  source?: string;
  onSuccess?: () => void;
  isCompact?: boolean;
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
  formTitle = "Apply for DU SOL Admission 2026",
  formSubtitle = "Direct Admission Without CUET · Free Expert Counseling",
  source = "hero_section",
  onSuccess,
  isCompact = false,
}: AdmissionFormProps) {
  const { bachelor, master, mba } = useNavData();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    course: "",
    state: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
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
    if (!formData.mobile.trim() || formData.mobile.length < 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!formData.course) {
      setError("Please select the course you are interested in.");
      return;
    }

    setIsSubmitting(true);

    // Simulate submission (ready for admin backend API / DB hook)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) {
        setTimeout(onSuccess, 2200);
      }
    }, 800);
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
        <div className="mt-3.5 p-2 bg-slate-50 rounded-lg border border-slate-200/60 text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Ref ID: SOL-2026-{Math.floor(100000 + Math.random() * 900000)}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xl ring-1 ring-slate-900/10 border border-slate-200/80">
      {/* Balanced Middle-Size Header */}
      <div className="mb-3">
        <div className="flex items-center mb-1">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-sky-50 text-sky-800 border border-sky-200/70">
            Admissions 2026-27
          </span>
        </div>
        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight leading-snug">
          {formTitle}
        </h3>
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
              <optgroup label="Bachelor Programs (UG)">
                {bachelor.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Master Programs (PG)">
                {master.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </optgroup>
              <optgroup label="MBA Specializations">
                {mba.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
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
            Current State / Region
          </label>
          <div className="relative">
            <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <select
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
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-sky-700 via-sky-800 to-sky-950 hover:from-sky-800 hover:to-black text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-70 cursor-pointer active:scale-98 mt-1"
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
            <a className="text-amber-600 font-semibold underline hover:text-amber-700" href="/privacy-policy">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a className="text-amber-600 font-semibold underline hover:text-amber-700" href="/terms-conditions">
              Terms and Conditions
            </a>.
          </span>
        </div>
      </form>
    </div>
  );
}
