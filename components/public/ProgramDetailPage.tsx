"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Clock,
  BookOpen,
  DollarSign,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  ChevronDown,
} from "lucide-react";
import { Program } from "@/lib/types";
import { useAdmissionModal } from "@/components/admission/AdmissionModalContext";

interface ProgramDetailPageProps {
  program: Program;
}

export function ProgramDetailPage({ program }: ProgramDetailPageProps) {
  const { openModal } = useAdmissionModal();
  const [activeTab, setActiveTab] = useState<"overview" | "eligibility" | "curriculum" | "fees" | "careers">("overview");

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

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      {/* Draft banner if draft */}
      {program.status === "draft" && (
        <div className="bg-amber-400 text-slate-950 px-4 py-2 text-center text-xs font-bold tracking-wide">
          ⚠️ Admin Preview Mode — This course is in Draft status and hidden from public visitors.
        </div>
      )}

      {/* Hero Header */}
      <section className="bg-linear-to-b from-[#652a7c] via-purple-950 to-slate-900 text-white pt-10 pb-16 lg:pt-14 lg:pb-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-purple-200 mb-6 font-medium">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href={directoryUrl} className="hover:text-white">{typeLabel} Courses</Link>
            <span>/</span>
            <span className="text-white truncate max-w-xs">{program.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-amber-300 border border-white/20 mb-4 backdrop-blur-md">
                University of Delhi · School of Open Learning
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {program.name}
              </h1>

              <p className="mt-4 text-sm sm:text-base text-purple-100 leading-relaxed max-w-2xl">
                {program.overview || program.description?.slice(0, 200)}
              </p>

              {/* Key Badges Bar */}
              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
                <div className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-amber-300" />
                  <span>{program.degree}</span>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-300" />
                  <span>{program.duration}</span>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>UGC-DEB Approved</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={openModal}
                  className="px-6 py-3.5 rounded-xl font-bold text-sm bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-lg shadow-amber-400/20 transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <span>Apply For Admission 2026</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Featured Image */}
            {program.featuredImage && (
              <div className="lg:col-span-4 hidden lg:block">
                <div className="relative aspect-4/3 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-white/5">
                  <Image
                    src={program.featuredImage}
                    alt={program.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Sticky Tab Navigation */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-20 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 sm:gap-4 overflow-x-auto py-3 no-scrollbar text-xs sm:text-sm font-semibold">
            {[
              { id: "overview", label: "Program Overview" },
              { id: "eligibility", label: "Eligibility & Admission" },
              { id: "curriculum", label: "Curriculum Syllabus" },
              { id: "fees", label: "Fee Structure" },
              { id: "careers", label: "Career Scope" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-[#652a7c] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-950 hover:bg-slate-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Contents */}
      <section className="py-12 flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">About {program.name}</h2>
              <div className="prose text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {program.description || program.overview || "Program description is being updated for session 2026-27."}
              </div>

              {/* Key Highlights Box */}
              <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100">
                  <div className="text-xs text-purple-700 font-bold uppercase tracking-wider">Exam Pattern</div>
                  <div className="text-sm font-bold text-slate-900 mt-1">Semester Offline Mode</div>
                </div>
                <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100">
                  <div className="text-xs text-sky-700 font-bold uppercase tracking-wider">CUET Required?</div>
                  <div className="text-sm font-bold text-slate-900 mt-1">No CUET Required</div>
                </div>
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100">
                  <div className="text-xs text-amber-700 font-bold uppercase tracking-wider">Degree Authority</div>
                  <div className="text-sm font-bold text-slate-900 mt-1">University of Delhi</div>
                </div>
              </div>
            </div>
          )}

          {/* Eligibility Tab */}
          {activeTab === "eligibility" && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Eligibility & Admission Guidelines</h2>
              
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900 mb-2">Academic Qualification:</h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                    {program.eligibility || "Candidates must meet standard University of Delhi qualification requirements."}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900 mb-2">Admission Process:</h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                    {program.admissionProcess || "Direct online registration via DU SOL admissions portal without CUET."}
                  </p>
                </div>
              </div>

              <div className="pt-4 flex justify-center">
                <button
                  type="button"
                  onClick={openModal}
                  className="px-6 py-3 rounded-xl bg-[#652a7c] text-white font-bold text-xs sm:text-sm shadow-md hover:bg-purple-900 transition-colors cursor-pointer"
                >
                  Verify My Eligibility (Free Counseling)
                </button>
              </div>
            </div>
          )}

          {/* Curriculum Tab */}
          {activeTab === "curriculum" && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Course Syllabus & Curriculum</h2>
                <span className="text-xs font-semibold text-[#652a7c] px-3 py-1 rounded-full bg-purple-50">
                  NEP 2020 Framework
                </span>
              </div>

              {program.curriculum && program.curriculum.length > 0 ? (
                <div className="space-y-4">
                  {program.curriculum.map((sem, idx) => (
                    <div key={idx} className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50">
                      <h3 className="text-sm sm:text-base font-bold text-[#652a7c] mb-3">
                        {sem.semesterOrYear}
                      </h3>
                      <ul className="space-y-2">
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
          )}

          {/* Fees Tab */}
          {activeTab === "fees" && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Tuition & Fee Structure</h2>
              
              {program.fees && program.fees.length > 0 ? (
                <div className="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden">
                  {program.fees.map((fee, idx) => (
                    <div key={idx} className="p-4 sm:p-5 flex items-center justify-between gap-4 bg-white hover:bg-slate-50">
                      <div>
                        <div className="text-sm font-bold text-slate-900">{fee.title}</div>
                        {fee.note && <div className="text-xs text-slate-500 mt-0.5">{fee.note}</div>}
                      </div>
                      <div className="text-base sm:text-lg font-extrabold text-[#652a7c]">
                        {fee.amount}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-500">Affordable government-subsidized fees applicable as per Delhi University norms.</p>
              )}

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                * Note: Fee concessions, scholarships, and installment waivers are available for eligible categories as per Delhi University guidelines.
              </div>
            </div>
          )}

          {/* Career Scope Tab */}
          {activeTab === "careers" && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Career Opportunities & Placements</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {program.careerOpportunities && program.careerOpportunities.length > 0 ? (
                  program.careerOpportunities.map((career, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex items-center gap-3">
                      <Briefcase className="w-4 h-4 text-[#652a7c] shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">{career}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-slate-500">Graduates are qualified for corporate, banking, and government sectors.</p>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
