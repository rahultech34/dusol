"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Clock,
  BookOpen,
  DollarSign,
  Briefcase,
  CheckCircle2,
  ShieldCheck,
  ChevronDown,
  HelpCircle,
  Phone,
  MessageSquare,
} from "lucide-react";
import { Program } from "@/lib/types";
import { useAdmissionModal } from "@/components/admission/AdmissionModalContext";
import { AdmissionForm } from "@/components/admission/AdmissionForm";

interface ProgramDetailPageProps {
  program: Program;
}

export function ProgramDetailPage({ program }: ProgramDetailPageProps) {
  const { openModal } = useAdmissionModal();
  const [activeSection, setActiveSection] = useState<string>("overview");
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const typeLabel =
    program.type === "ug"
      ? "Undergraduate (UG)"
      : program.type === "pg"
      ? "Postgraduate (PG)"
      : "MBA Specialization";
  const directoryUrl =
    program.type === "ug"
      ? "/ug-programs"
      : program.type === "pg"
      ? "/pg-programs"
      : "/courses/mba";

  const navItems = [
    { id: "overview", label: "Program Overview" },
    ...(program.content ? [{ id: "guide", label: "Complete Course Guide" }] : []),
    { id: "eligibility", label: "Eligibility & Admission" },
    { id: "curriculum", label: "Curriculum Syllabus" },
    { id: "fees", label: "Fee Structure" },
    { id: "careers", label: "Career Scope" },
    ...(program.faqs && program.faqs.length > 0 ? [{ id: "faqs", label: "FAQs" }] : []),
  ];

  // Active section tracking via scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(item.id);
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
      const yOffset = -145; // main navbar (80px) + subnav (~52px) + breathing space
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      {/* Draft banner if draft */}
      {program.status === "draft" && (
        <div className="bg-amber-400 text-slate-950 px-4 py-2 text-center text-xs font-bold tracking-wide">
          ⚠️ Admin Preview Mode — This course is in Draft status and hidden from public visitors.
        </div>
      )}

      {/* Hero Header with Admission Form */}
      <section className="bg-linear-to-b from-[#652a7c] via-purple-950 to-slate-900 text-white pt-8 pb-14 lg:pt-12 lg:pb-18 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-purple-200 mb-6 font-medium">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href={directoryUrl} className="hover:text-white">{typeLabel} Courses</Link>
            <span>/</span>
            <span className="text-white truncate max-w-xs">{program.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Program Details & Badges */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {program.name}
              </h1>

              <p className="text-sm sm:text-base text-purple-100 leading-relaxed max-w-2xl">
                {program.overview || program.description?.slice(0, 240)}
              </p>

              {/* Key Badges Bar */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs">
                <div className="px-3.5 py-2 rounded-xl bg-white/10 border border-white/15 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-amber-300" />
                  <span>{program.degree}</span>
                </div>
                <div className="px-3.5 py-2 rounded-xl bg-white/10 border border-white/15 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-300" />
                  <span>{program.duration}</span>
                </div>
                <div className="px-3.5 py-2 rounded-xl bg-white/10 border border-white/15 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>UGC-DEB Entitled</span>
                </div>
                <div className="px-3.5 py-2 rounded-xl bg-white/10 border border-white/15 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>NAAC Accredited Degree</span>
                </div>
              </div>

              {/* Key Highlights Checklist */}
              <div className="pt-4 border-t border-white/10 space-y-2.5 text-xs sm:text-sm text-purple-100">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>Direct online merit admission — <strong>No CUET (UG) required</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>Subsidized government fee structure with scholarship assistance</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>Recognized for UPSC, SSC, Banking, MBA, and government exams</span>
                </div>
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

            {/* Right Column: Hero Admission Form */}
            <div className="lg:col-span-5 relative w-full">
              <AdmissionForm
                formTitle={`Apply for ${program.name}`}
                formSubtitle="Session 2026-27 · Free Expert Counselling"
                source={`program_hero_${program.slug}`}
                defaultCourse={program.name}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sticky In-Page Quick Navigation (Properly offset below navbar height 72px / 80px) */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-200/90 sticky top-18 sm:top-20 z-30 shadow-xs">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 sm:gap-3 overflow-x-auto py-3 sm:py-3.5 no-scrollbar text-xs sm:text-sm font-semibold">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                  activeSection === item.id
                    ? "bg-[#652a7c] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-950 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Full Width Linear Content Sections */}
      <section className="py-10 lg:py-14 flex-1">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 lg:space-y-12">
          
          {/* Section 1: Program Overview */}
          <div
            id="overview"
            className="w-full bg-white p-6 sm:p-10 lg:p-12 rounded-3xl border border-slate-200/80 shadow-xs space-y-6 scroll-mt-36"
          >
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-[#652a7c] uppercase tracking-wider bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                Course Summary
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
                About {program.name}
              </h2>
            </div>

            <div className="text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line space-y-4">
              {program.description || program.overview || "Program description is being updated for session 2026-27."}
            </div>

            {/* Key Highlights Grid */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100">
                <div className="text-xs text-purple-700 font-bold uppercase tracking-wider">Exam Pattern</div>
                <div className="text-sm font-bold text-slate-900 mt-1">Semester Offline Mode</div>
                <div className="text-xs text-slate-500 mt-0.5">Pen &amp; Paper at DU centres</div>
              </div>
              <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100">
                <div className="text-xs text-sky-700 font-bold uppercase tracking-wider">CUET Required?</div>
                <div className="text-sm font-bold text-slate-900 mt-1">No CUET Required</div>
                <div className="text-xs text-slate-500 mt-0.5">Direct 10+2 Merit Admission</div>
              </div>
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100">
                <div className="text-xs text-amber-700 font-bold uppercase tracking-wider">Degree Authority</div>
                <div className="text-sm font-bold text-slate-900 mt-1">University of Delhi</div>
                <div className="text-xs text-slate-500 mt-0.5">Equivalent to regular college</div>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100">
                <div className="text-xs text-emerald-700 font-bold uppercase tracking-wider">Learning Mode</div>
                <div className="text-sm font-bold text-slate-900 mt-1">Distance &amp; Flexible</div>
                <div className="text-xs text-slate-500 mt-0.5">Study while working or preparing</div>
              </div>
            </div>
          </div>

          {/* Section 2: Complete Course Guide (if content exists) */}
          {program.content && (
            <div
              id="guide"
              className="w-full bg-white p-6 sm:p-10 lg:p-12 rounded-3xl border border-slate-200/80 shadow-xs space-y-6 scroll-mt-36"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold text-[#652a7c] uppercase tracking-wider bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                  Comprehensive Guide 2026-27
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
                  {program.name}: Complete Course Guide &amp; In-Depth Details
                </h2>
              </div>

              {/* Rich Content Article */}
              <div
                className="prose-content text-slate-800 text-sm sm:text-base leading-relaxed w-full"
                dangerouslySetInnerHTML={{ __html: program.content }}
              />

              {/* Free Counseling Banner inside guide */}
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#652a7c] via-purple-900 to-indigo-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md mt-8">
                <div className="space-y-1 text-center md:text-left">
                  <h4 className="font-extrabold text-lg sm:text-xl">
                    Need 1-on-1 Guidance for {program.name}?
                  </h4>
                  <p className="text-xs sm:text-sm text-purple-200">
                    Connect with expert academic counsellors for eligibility, subject selection, and hassle-free admission.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={openModal}
                    className="px-5 py-3 rounded-xl bg-white text-[#652a7c] font-bold text-xs sm:text-sm hover:bg-purple-50 transition-colors shadow-md cursor-pointer"
                  >
                    Request Free Counselling
                  </button>
                  <a
                    href="tel:+918336889553"
                    className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-300" />
                    <span>+91 83368 89553</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Section 3: Eligibility & Admission */}
          <div
            id="eligibility"
            className="w-full bg-white p-6 sm:p-10 lg:p-12 rounded-3xl border border-slate-200/80 shadow-xs space-y-6 scroll-mt-36"
          >
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-[#652a7c] uppercase tracking-wider bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                Admission Rules
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
                Eligibility &amp; Admission Guidelines
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-2.5 text-[#652a7c] font-bold text-base">
                  <GraduationCap className="w-5 h-5" />
                  <span>Academic Qualification Criteria</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                  {program.eligibility || "Candidates must meet standard University of Delhi qualification requirements."}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-2.5 text-[#652a7c] font-bold text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Admission Procedure</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                  {program.admissionProcess || "Direct online registration via DU SOL admissions portal without CUET."}
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-purple-50/70 border border-purple-100">
              <div className="text-xs sm:text-sm text-slate-700">
                <span className="font-bold text-slate-900">Not sure if you meet the minimum marks?</span> Our counsellors verify your Class 12 board certificate and subject combinations at zero charge.
              </div>
              <button
                type="button"
                onClick={openModal}
                className="px-5 py-2.5 rounded-xl bg-[#652a7c] text-white font-bold text-xs hover:bg-[#521f66] transition-colors shrink-0 cursor-pointer shadow-xs"
              >
                Verify My Eligibility
              </button>
            </div>
          </div>

          {/* Section 4: Curriculum Syllabus */}
          <div
            id="curriculum"
            className="w-full bg-white p-6 sm:p-10 lg:p-12 rounded-3xl border border-slate-200/80 shadow-xs space-y-6 scroll-mt-36"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold text-[#652a7c] uppercase tracking-wider bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                  Semester Breakdown
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
                  Course Syllabus &amp; Curriculum
                </h2>
              </div>
              <span className="text-xs font-bold text-[#652a7c] px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 self-start sm:self-auto">
                NEP 2020 Framework
              </span>
            </div>

            {program.curriculum && program.curriculum.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {program.curriculum.map((sem, idx) => (
                  <div key={idx} className="p-6 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 transition-colors">
                    <h3 className="text-base font-bold text-[#652a7c] mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[#652a7c]" />
                      <span>{sem.semesterOrYear}</span>
                    </h3>
                    <ul className="space-y-2.5">
                      {sem.subjects.map((sub, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500">Syllabus breakdown is being compiled for the upcoming semester.</p>
            )}
          </div>

          {/* Section 5: Fee Structure */}
          <div
            id="fees"
            className="w-full bg-white p-6 sm:p-10 lg:p-12 rounded-3xl border border-slate-200/80 shadow-xs space-y-6 scroll-mt-36"
          >
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-[#652a7c] uppercase tracking-wider bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                Affordable Government Education
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
                Tuition &amp; Fee Structure
              </h2>
            </div>
            
            {program.fees && program.fees.length > 0 ? (
              <div className="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden">
                {program.fees.map((fee, idx) => (
                  <div key={idx} className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white hover:bg-slate-50 transition-colors">
                    <div>
                      <div className="text-base font-bold text-slate-900">{fee.title}</div>
                      {fee.note && <div className="text-xs text-slate-500 mt-0.5">{fee.note}</div>}
                    </div>
                    <div className="text-lg sm:text-xl font-extrabold text-[#652a7c]">
                      {fee.amount}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500">Affordable government-subsidized fees applicable as per Delhi University norms.</p>
            )}

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed flex items-start gap-2.5">
              <DollarSign className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>
                <strong>Fee Transparency Notice:</strong> DU SOL fees are approximate and subject to annual University of Delhi revisions. Concessions, installment arrangements, and scholarships are available for eligible candidates as per university policy.
              </span>
            </div>
          </div>

          {/* Section 6: Career Scope */}
          <div
            id="careers"
            className="w-full bg-white p-6 sm:p-10 lg:p-12 rounded-3xl border border-slate-200/80 shadow-xs space-y-6 scroll-mt-36"
          >
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-[#652a7c] uppercase tracking-wider bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                Future Opportunities
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
                Career Opportunities &amp; Placements
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {program.careerOpportunities && program.careerOpportunities.length > 0 ? (
                program.careerOpportunities.map((career, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 transition-colors flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-purple-100 text-[#652a7c] flex items-center justify-center shrink-0 mt-0.5">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 block leading-snug">{career}</span>
                      <span className="text-xs text-slate-500 mt-1 block">Valid for govt, private &amp; higher education</span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-xs text-slate-500">Graduates are qualified for corporate, banking, and government sectors.</p>
              )}
            </div>
          </div>

          {/* Section 7: FAQs Accordion */}
          {program.faqs && program.faqs.length > 0 && (
            <div
              id="faqs"
              className="w-full bg-white p-6 sm:p-10 lg:p-12 rounded-3xl border border-slate-200/80 shadow-xs space-y-6 scroll-mt-36"
            >
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#652a7c] flex items-center justify-center shrink-0">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Common queries and official answers regarding {program.name} at DU SOL
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {program.faqs.map((faq, idx) => {
                  const isOpen = openFaqIdx === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all shadow-xs"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                        className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left font-bold text-slate-900 text-sm sm:text-base hover:text-[#652a7c] transition-colors cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-[#652a7c]" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-2 bg-slate-50/50">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Section 8: Final Call to Action */}
          <div className="w-full rounded-3xl bg-linear-to-r from-[#652a7c] via-purple-900 to-slate-900 text-white p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-amber-300 font-bold">
                Direct DU SOL Admission 2026-27
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Ready to Enroll in {program.name}?
              </h3>
              <p className="text-xs sm:text-sm text-purple-200 leading-relaxed">
                Take the next step towards your University of Delhi degree. Get step-by-step guidance on registration, document verification, and fee payment.
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
