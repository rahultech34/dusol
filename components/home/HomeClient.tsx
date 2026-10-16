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
import { NoticesSection } from "@/components/home/NoticesSection";
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
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-900 via-sky-950 to-slate-900 text-white pt-10 pb-16 lg:pt-14 lg:pb-24">
        {/* Subtle decorative mesh gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-7 flex flex-col">
              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Empowering Millions with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-sky-200 to-white">
                  Prestigious DU Degrees
                </span>
              </h1>

              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Direct admission to UGC-DEB recognized Bachelor, Master, and MBA programs without CUET. Flexible distance learning backed by Delhi University&apos;s 60+ years academic legacy.
              </p>

              {/* Key Features Checklist */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-200">
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
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <span>Apply For Admission 2026</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  href="/courses/bachelor"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-md transition-colors"
                >
                  <span>Browse All Programs</span>
                </Link>

                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex items-center gap-2 px-4 py-3.5 text-xs font-semibold text-sky-200 hover:text-white transition-colors cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-amber-300" />
                  <span>Request Free Callback</span>
                </button>
              </div>

              {/* Trust Badges Bar */}
              <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-xs text-slate-300">
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

      {/* 2. Latest News (DU SOL Notices) */}
      <NoticesSection notices={content.notices} />

      {/* 3. About DU SOL Section */}
      <AboutSection data={content.about} />

      {/* 4. DU SOL Programmes Offered Table Section */}
      <ProgrammesTableSection data={content.programmes} />

      {/* Interactive Program Cards Grid */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-sky-800 border border-sky-200/70 mb-2.5">
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

      {/* Admin Panel Quick Link Banner */}
      <section className="py-10 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900 via-purple-950 to-indigo-950 rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30 mb-2">
                CMS Management
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Customize All 8 Home Page Sections from Admin Panel
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-300">
                Update SEO metadata, notices, about story, course tables, admission roadmap, and FAQs with live synchronization.
              </p>
            </div>

            <Link
              href="/admin/home-page"
              className="shrink-0 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm transition-colors shadow-md"
            >
              Open Home Page Admin Editor
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-200">DU SOL Portal</span>
            <span>·</span>
            <span>School of Open Learning, University of Delhi</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/ug-programs" className="hover:text-white transition-colors">
              UG Programs
            </Link>
            <Link href="/pg-programs" className="hover:text-white transition-colors">
              PG Programs
            </Link>
            <Link href="/blogs" className="hover:text-white transition-colors">
              Blogs
            </Link>
            <span className="text-slate-700">|</span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <span className="text-slate-700">|</span>
            <Link href="/admin/login" className="text-sky-400 hover:text-sky-300 font-medium transition-colors">
              Admin Portal
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
