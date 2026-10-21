"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  PhoneCall,
} from "lucide-react";
import { AdmissionForm } from "@/components/admission/AdmissionForm";
import { useAdmissionModal } from "@/components/admission/AdmissionModalContext";
import { ProgramCards } from "@/components/home/ProgramCards";
import { AboutSection } from "@/components/home/AboutSection";
import { ProgrammesTableSection } from "@/components/home/ProgrammesTableSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { EligibilitySection } from "@/components/home/EligibilitySection";
import { AdmissionProcedureSection } from "@/components/home/AdmissionProcedureSection";
import { FAQSection } from "@/components/home/FAQSection";
import { HomePageContent } from "@/lib/home-page-types";

interface HomeClientProps {
  content: HomePageContent;
}

export function HomeClient({ content }: HomeClientProps) {
  const { openModal } = useAdmissionModal();

  return (
    <main className="flex-1 flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#652a7c] via-purple-900 to-indigo-950 text-white pt-10 pb-16 lg:pt-14 lg:pb-24">
        {/* Subtle decorative mesh gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#652a7c]/25 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-7 flex flex-col">
              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Empowering Millions with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-purple-100 to-white">
                  Prestigious DU Degrees
                </span>
              </h1>

              <p className="mt-4 text-base sm:text-lg text-purple-100/90 leading-relaxed font-normal">
                Direct admission to UGC-DEB recognized Bachelor, Master, and MBA programs without CUET. Flexible distance learning backed by Delhi University&apos;s 60+ years academic legacy.
              </p>

              {/* Key Features Checklist */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-purple-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No CUET Required for Admissions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>NAAC A++ Accredited DU Degree</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Weekend Offline & Online PCP Classes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Equal Value as Regular DU College</span>
                </div>
              </div>

              {/* Hero CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-white hover:bg-slate-100 active:bg-slate-200 text-black shadow-lg shadow-black/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <span>Apply For Admission 2027</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>

                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-sm bg-white hover:bg-slate-100 active:bg-slate-200 text-[#ffd442] shadow-lg shadow-black/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-[#ffd442]" />
                  <span>Request Callback</span>
                </button>
              </div>

              {/* Trust Badges Bar */}
              <div className="mt-10 pt-6 border-t border-purple-300/20 grid grid-cols-3 gap-4 text-xs text-purple-200/90">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>UGC-DEB & AICTE Approved</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>5,00,000+ Enrolled Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>60+ Years of Excellence</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Admission Form */}
            <div className="lg:col-span-5 relative">
              <AdmissionForm
                formTitle="Get Free Admission Counseling"
                formSubtitle="DU SOL Session 2026-27 · Direct Guidance"
                source="hero_section"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. About DU SOL Section */}
      <AboutSection data={content.about} />

      {/* 4. DU SOL Programmes Offered Table Section */}
      <ProgrammesTableSection data={content.programmes} />

      {/* Interactive Program Cards Grid */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-50 text-[#652a7c] border border-purple-200/70 mb-2.5">
              Course Explorer
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Distance Learning Degrees
            </h2>
            <p className="mt-2 text-xs sm:text-base text-slate-600 leading-relaxed">
              Choose from top industry-oriented Bachelor, Master, and MBA specializations.
            </p>
          </div>

          <ProgramCards />
        </div>
      </section>

      {/* 5. Eligibility Criteria for DU SOL Admission in 2026 */}
      <EligibilitySection data={content.eligibility} />

      {/* 6. Who Should Consider a Distance Program from DU SOL 2026? */}
      <WhyChooseSection data={content.whyChoose} />

      {/* 7. DU SOL Admission Procedure 2026 */}
      <AdmissionProcedureSection data={content.admissionProcedure} />

      {/* 8. Frequently Asked Questions (FAQs) */}
      <FAQSection data={content.faqs} />
    </main>
  );
}
