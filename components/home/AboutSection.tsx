"use client";

import React from "react";
import { GraduationCap, ShieldCheck, Award, BookOpen, Users, ArrowRight } from "lucide-react";
import { useAdmissionModal } from "@/components/admission/AdmissionModalContext";
import { HomePageContent } from "@/lib/home-page-types";

interface AboutSectionProps {
  data?: HomePageContent["about"];
}

export function AboutSection({ data }: AboutSectionProps) {
  const { openModal } = useAdmissionModal();

  const heading = data?.heading || "University of Delhi, School of Open Learning (DU SOL)";
  const subheading =
    data?.subheading ||
    "UGC-DEB Approved & NAAC A++ Accredited Distance Higher Education Since 1962";
  const paragraphs = data?.paragraphs || [];

  return (
    <section className="py-14 sm:py-18 lg:py-20 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Badge */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-50 text-[#652a7c] border border-purple-200/60 mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[#652a7c]" />
            <span>About DU SOL</span>
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {heading}
          </h2>

          {subheading && (
            <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-500 font-medium">
              {subheading}
            </p>
          )}
        </div>

        {/* Content & Stat Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Paragraphs */}
          <div className="lg:col-span-8 space-y-4 text-xs sm:text-sm md:text-[15px] text-slate-700 leading-relaxed text-justify sm:text-left">
            {paragraphs.map((para, idx) => (
              <p key={idx} className="relative pl-4 border-l-2 border-[#652a7c]/20 hover:border-[#652a7c] transition-colors">
                {para}
              </p>
            ))}

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={openModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-[#652a7c] hover:bg-[#522165] text-white shadow-md shadow-[#652a7c]/20 transition-all cursor-pointer"
              >
                <span>Talk with Edukyu Counsellor</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Info Box */}
          <div className="lg:col-span-4 bg-gradient-to-br from-slate-50 to-purple-50/40 p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-5">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#652a7c]" />
              <span>Key Highlights</span>
            </h3>

            <div className="space-y-3.5 text-xs text-slate-600">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 font-bold">
                  ✓
                </div>
                <div>
                  <div className="font-bold text-slate-900">UGC & DEB Recognized</div>
                  <div>Approved for Pan-India legal validity and government jobs.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 font-bold">
                  ★
                </div>
                <div>
                  <div className="font-bold text-slate-900">NAAC A++ Accreditation</div>
                  <div>Prestigious top-tier educational excellence standards.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center shrink-0 font-bold">
                  1962
                </div>
                <div>
                  <div className="font-bold text-slate-900">Established in 1962</div>
                  <div>Over 60 years of academic legacy under Delhi University.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-purple-100 text-[#652a7c] flex items-center justify-center shrink-0 font-bold">
                  5L+
                </div>
                <div>
                  <div className="font-bold text-slate-900">5,00,000+ Enrolled Students</div>
                  <div>One of India&apos;s largest and most trusted public open universities.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
