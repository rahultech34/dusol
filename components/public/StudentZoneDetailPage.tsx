"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  LifeBuoy,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Phone,
  MessageSquare,
  Globe,
  ExternalLink,
  FileDown,
  ListOrdered,
  BookOpen,
  GraduationCap,
  Mail,
  MapPin,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import { StudentZoneItem } from "@/lib/types";
import { useAdmissionModal } from "@/components/admission/AdmissionModalContext";
import { AdmissionForm } from "@/components/admission/AdmissionForm";

interface StudentZoneDetailPageProps {
  item: StudentZoneItem;
  relatedItems?: StudentZoneItem[];
}

export function StudentZoneDetailPage({
  item,
  relatedItems = [],
}: StudentZoneDetailPageProps) {
  const { openModal } = useAdmissionModal();
  const [activeSection, setActiveSection] = useState<string>("overview");

  const navItems = [
    { id: "overview", label: "Overview & Highlights" },
    ...(item.quickSteps && item.quickSteps.length > 0
      ? [{ id: "procedure", label: "Step-by-Step Procedure" }]
      : []),
    ...(item.content ? [{ id: "guide", label: "Complete Guide & Details" }] : []),
    { id: "portal-links", label: "Official Portal Access" },
    { id: "helpline", label: "Helpline & Support" },
    ...(relatedItems.length > 0
      ? [{ id: "related", label: "Other Student Resources" }]
      : []),
  ];

  // Active section tracking via scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const navItem = navItems[i];
        const el = document.getElementById(navItem.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(navItem.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -145; // main navbar (80px) + subnav (~52px) + breathing room
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      {/* Draft notice banner if in draft status */}
      {item.status === "draft" && (
        <div className="bg-amber-400 text-slate-950 px-4 py-2 text-center text-xs font-bold tracking-wide">
          ⚠️ Admin Preview Mode — This Student Zone resource is in Draft status and hidden from public visitors.
        </div>
      )}

      {/* Hero Header with 2-Column Layout & Hero Admission Form */}
      <section className="bg-linear-to-b from-[#652a7c] via-purple-950 to-slate-900 text-white pt-8 pb-14 lg:pt-12 lg:pb-18 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-purple-200 mb-6 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/student-zone" className="hover:text-white transition-colors">
              Student Zone
            </Link>
            <span>/</span>
            <span className="text-white truncate max-w-xs">{item.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Resource Details, Highlights & Badges (7 cols) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              {/* Category & Update Pill */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-amber-300 border border-white/20 backdrop-blur-md">
                  <LifeBuoy className="w-3.5 h-3.5" />
                  <span>{item.category || "Official Student Support"}</span>
                </span>
                <span className="text-xs text-purple-200 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-purple-300" />
                  <span>Updated {new Date(item.updatedAt || item.createdAt).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}</span>
                </span>
              </div>

              {/* Main Heading H1 */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {item.title}
              </h1>

              {/* Summary Lead */}
              {item.summary && (
                <p className="text-sm sm:text-base text-purple-100 leading-relaxed max-w-2xl font-normal">
                  {item.summary}
                </p>
              )}

              {/* Key Badges Bar */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs">
                <div className="px-3.5 py-2 rounded-xl bg-white/10 border border-white/15 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-amber-300" />
                  <span>University of Delhi</span>
                </div>
                <div className="px-3.5 py-2 rounded-xl bg-white/10 border border-white/15 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>UGC-DEB Entitled</span>
                </div>
                <div className="px-3.5 py-2 rounded-xl bg-white/10 border border-white/15 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>NAAC 'A++' Accredited</span>
                </div>
                <div className="px-3.5 py-2 rounded-xl bg-white/10 border border-white/15 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-300" />
                  <span>Session 2026-27</span>
                </div>
              </div>

              {/* Key Highlights Checklist */}
              <div className="pt-4 border-t border-white/10 space-y-2.5 text-xs sm:text-sm text-purple-100">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>Direct online portal access — <strong>Official University Portal</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>Verified guidelines for admission, syllabus, examination dates &amp; hall tickets</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>Dedicated student helpline with regional campus academic counseling</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => openModal(item.title)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#652a7c] hover:bg-[#521f66] active:bg-[#431754] text-white text-xs sm:text-sm font-bold transition-all shadow-lg shadow-[#652a7c]/20 cursor-pointer"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Apply for Admission 2026-27</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {item.downloadUrl && (
                  <a
                    href={item.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/20 transition-all backdrop-blur-md"
                  >
                    <FileDown className="w-4 h-4" />
                    <span>Download Guidelines / PDF</span>
                  </a>
                )}
              </div>

              {/* Helpline Callouts */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-purple-200">
                <a
                  href="tel:+918336889553"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-300" />
                  <span>Admission Helpline: +91 83368 89553</span>
                </a>
                <span className="hidden sm:inline">·</span>
                <a
                  href="https://wa.me/918336889553"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors text-emerald-300"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Support</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Admission Form (5 cols) */}
            <div className="lg:col-span-5 relative w-full">
              <AdmissionForm
                formTitle="Apply for DU SOL Admission 2026-27"
                formSubtitle="Free 1-on-1 Academic Counseling · Session 2026-27"
                source={`student_zone_${item.slug}`}
                sourceName={`Student Zone: ${item.title}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sticky In-Page Quick Navigation */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-200/90 sticky top-18 sm:top-20 z-30 shadow-xs">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 sm:gap-3 overflow-x-auto py-3 sm:py-3.5 no-scrollbar text-xs sm:text-sm font-semibold">
            {navItems.map((navItem) => (
              <button
                key={navItem.id}
                type="button"
                onClick={() => scrollToSection(navItem.id)}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                  activeSection === navItem.id
                    ? "bg-[#652a7c] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-950 hover:bg-slate-100"
                }`}
              >
                {navItem.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Full Width Linear Content Sections matching ProgramDetailPage */}
      <section className="py-10 lg:py-14 flex-1">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 lg:space-y-12">
          
          {/* Section 1: Overview & Highlights */}
          <div
            id="overview"
            className="w-full bg-white p-6 sm:p-10 lg:p-12 rounded-3xl border border-slate-200/80 shadow-xs space-y-6 scroll-mt-36"
          >
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-[#652a7c] uppercase tracking-wider bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                Resource Summary
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
                About {item.title}
              </h2>
            </div>

            <div className="text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line space-y-4">
              {item.summary ||
                "Official guidelines, examination circulars, direct portal access, and verified instructions from Delhi University School of Open Learning."}
            </div>

            {/* Key Highlights Grid */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100">
                <div className="text-xs text-purple-700 font-bold uppercase tracking-wider">Access Mode</div>
                <div className="text-sm font-bold text-slate-900 mt-1">100% Online Portal</div>
                <div className="text-xs text-slate-500 mt-0.5">Official student portal</div>
              </div>
              <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100">
                <div className="text-xs text-sky-700 font-bold uppercase tracking-wider">Academic Session</div>
                <div className="text-sm font-bold text-slate-900 mt-1">Session 2026-27</div>
                <div className="text-xs text-slate-500 mt-0.5">January &amp; July admissions</div>
              </div>
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100">
                <div className="text-xs text-amber-700 font-bold uppercase tracking-wider">Degree Authority</div>
                <div className="text-sm font-bold text-slate-900 mt-1">University of Delhi</div>
                <div className="text-xs text-slate-500 mt-0.5">UGC-DEB approved degrees</div>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100">
                <div className="text-xs text-emerald-700 font-bold uppercase tracking-wider">Student Support</div>
                <div className="text-sm font-bold text-slate-900 mt-1">SSC &amp; CSRC Helplines</div>
                <div className="text-xs text-slate-500 mt-0.5">Free counseling &amp; verification</div>
              </div>
            </div>
          </div>

          {/* Section 2: Step-by-Step Procedure (if quickSteps exist) */}
          {item.quickSteps && item.quickSteps.length > 0 && (
            <div
              id="procedure"
              className="w-full bg-white p-6 sm:p-10 lg:p-12 rounded-3xl border border-slate-200/80 shadow-xs space-y-6 scroll-mt-36"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold text-[#652a7c] uppercase tracking-wider bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                  Step-by-Step Instructions
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3 flex items-center gap-2.5">
                  <ListOrdered className="w-7 h-7 text-[#652a7c]" />
                  <span>Procedure &amp; Action Plan</span>
                </h2>
              </div>

              <div className="space-y-4 pt-2">
                {item.quickSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 transition-colors"
                  >
                    <span className="w-8 h-8 rounded-full bg-[#652a7c] text-white font-bold text-sm flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium pt-1">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 3: Complete Guide / Rich Article Content (if content exists) */}
          {item.content && (
            <div
              id="guide"
              className="w-full bg-white p-6 sm:p-10 lg:p-12 rounded-3xl border border-slate-200/80 shadow-xs space-y-6 scroll-mt-36"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold text-[#652a7c] uppercase tracking-wider bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                  Complete Information
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3 flex items-center gap-2.5">
                  <BookOpen className="w-7 h-7 text-[#652a7c]" />
                  <span>Detailed Guidelines &amp; Official Notice</span>
                </h2>
              </div>

              <article
                className="prose-content text-slate-800 text-xs sm:text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </div>
          )}

          {/* Section 4: Official Portal Direct Links & University Advisory */}
          <div
            id="portal-links"
            className="w-full bg-white p-6 sm:p-10 lg:p-12 rounded-3xl border border-slate-200/80 shadow-xs space-y-6 scroll-mt-36"
          >
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-[#652a7c] uppercase tracking-wider bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                Official Portals
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3 flex items-center gap-2.5">
                <Globe className="w-7 h-7 text-[#652a7c]" />
                <span>Direct Access Links</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <button
                type="button"
                onClick={() => openModal(item.title)}
                className="p-5 rounded-2xl bg-purple-50 hover:bg-purple-100/80 border border-purple-200/80 transition-all flex items-center justify-between group cursor-pointer text-left"
              >
                <div>
                  <div className="text-xs font-bold text-[#652a7c] uppercase tracking-wider">Admission Counseling</div>
                  <div className="text-sm font-bold text-slate-900 mt-1">Apply for 2026-27 Session</div>
                </div>
                <ArrowRight className="w-5 h-5 text-[#652a7c] group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href="/student-zone/admission"
                className="p-5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all flex items-center justify-between group"
              >
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Admission Guide</div>
                  <div className="text-sm font-bold text-slate-900 mt-1">DU SOL Admission 2026-27</div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/student-zone"
                className="p-5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all flex items-center justify-between group"
              >
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">All Guides</div>
                  <div className="text-sm font-bold text-slate-900 mt-1">Browse Student Zone</div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* University Advisory Disclaimer */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>University Advisory:</strong> Delhi University School of Open Learning (DU SOL) conducts all registrations, examinations, hall ticket issues, and degree awards through its designated official university portal. Never make payments to unauthorized third-party accounts.
              </p>
            </div>
          </div>

          {/* Section 5: Support Helplines & Study Centres */}
          <div
            id="helpline"
            className="w-full bg-white p-6 sm:p-10 lg:p-12 rounded-3xl border border-slate-200/80 shadow-xs space-y-6 scroll-mt-36"
          >
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-[#652a7c] uppercase tracking-wider bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                Official Helplines
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3 flex items-center gap-2.5">
                <Phone className="w-7 h-7 text-[#652a7c]" />
                <span>Support &amp; Student Helpdesks</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* SSC Desk */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-2.5 text-[#652a7c] font-bold text-base">
                  <LifeBuoy className="w-5 h-5" />
                  <span>Student Service Center (SSC)</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For general queries, admissions tracking, study materials, and examination hall ticket assistance:
                </p>
                <div className="pt-2 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-800 font-semibold">
                    <Phone className="w-4 h-4 text-[#652a7c] shrink-0" />
                    <span>011-29572513 / 011-29572514</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-800">
                    <Mail className="w-4 h-4 text-[#652a7c] shrink-0" />
                    <span className="font-semibold text-slate-700">ssc@du.ac.in</span>
                  </div>
                </div>
              </div>

              {/* CSRC Desk */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-2.5 text-[#652a7c] font-bold text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Student Registration Division (CSRC)</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For enrollment roll numbers, document verification, subject change, and registration status:
                </p>
                <div className="pt-2 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-800 font-semibold">
                    <Phone className="w-4 h-4 text-[#652a7c] shrink-0" />
                    <span>011-29571301 / 011-29571528</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-800">
                    <Mail className="w-4 h-4 text-[#652a7c] shrink-0" />
                    <span className="font-semibold text-slate-700">csrc@du.ac.in</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-purple-50/70 border border-purple-100">
              <div className="text-xs sm:text-sm text-slate-700">
                <span className="font-bold text-slate-900">Need personalized guidance?</span> Talk to our dedicated DU SOL academic counselors for free assistance.
              </div>
              <button
                type="button"
                onClick={openModal}
                className="px-5 py-2.5 rounded-xl bg-[#652a7c] text-white font-bold text-xs hover:bg-[#521f66] transition-colors shrink-0 cursor-pointer shadow-xs"
              >
                Get Free Counseling
              </button>
            </div>
          </div>

          {/* Section 6: Other Student Resources (if available) */}
          {relatedItems.length > 0 && (
            <div
              id="related"
              className="w-full bg-white p-6 sm:p-10 lg:p-12 rounded-3xl border border-slate-200/80 shadow-xs space-y-6 scroll-mt-36"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold text-[#652a7c] uppercase tracking-wider bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                  Student Services
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3 flex items-center gap-2.5">
                  <LifeBuoy className="w-7 h-7 text-[#652a7c]" />
                  <span>Other Student Resources</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedItems.map((r) => (
                  <Link
                    key={r.id}
                    href={`/student-zone/${r.slug}`}
                    className="p-6 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-purple-300 hover:shadow-lg transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#652a7c] bg-purple-50 px-2 py-0.5 rounded-md">
                          {r.category || "Student Guide"}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#652a7c] transition-colors leading-snug">
                        {r.title}
                      </h3>
                      {r.summary && (
                        <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {r.summary}
                        </p>
                      )}
                    </div>
                    <div className="mt-5 pt-3.5 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#652a7c]">
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Section 7: Final Call to Action Banner matching ProgramDetailPage */}
          <div className="w-full rounded-3xl bg-linear-to-r from-[#652a7c] via-purple-900 to-slate-900 text-white p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-amber-300 font-bold">
                DU SOL Admissions 2026-27 Support
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Need Help with {item.title}?
              </h3>
              <p className="text-xs sm:text-sm text-purple-200 leading-relaxed">
                Connect with our academic counselors for step-by-step guidance on DU SOL admissions, eligibility criteria, subject choices, and document verification.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={openModal}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-[#652a7c] hover:bg-purple-50 font-bold text-sm shadow-lg transition-all cursor-pointer"
              >
                Apply For Admission
              </button>
              <a
                href="https://wa.me/918336889553"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Counselor</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
