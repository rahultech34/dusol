"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRightCircle } from "lucide-react";
import { useAdmissionModal } from "@/components/admission/AdmissionModalContext";
import { HomePageContent } from "@/lib/home-page-types";

interface EligibilitySectionProps {
  data?: HomePageContent["eligibility"];
}

export function EligibilitySection({ data }: EligibilitySectionProps) {
  const { openModal } = useAdmissionModal();

  const title = data?.title || "Eligibility Criteria for DU SOL Admission in 2026";

  const criteriaList = [
    {
      title: "Educational Qualification:",
      points: [
        data?.ugQualification ||
          "Undergraduate (UG): Candidates must have passed the Intermediate examination (10+2) from a recognized board.",
        data?.pgQualification ||
          "Postgraduate (PG): Candidates must hold a Bachelor’s degree from a recognized university.",
      ],
    },
    {
      title: "Minimum Marks:",
      points: [
        data?.ugMarks ||
          "UG: The minimum qualifying mark is generally 60% in the 10+2 examination.",
        data?.pgMarks ||
          "PG: The minimum qualifying mark is generally 50% in the Bachelor’s degree for students from recognized and reputable universities/colleges.",
      ],
    },
    {
      title: "Entrance Exams:",
      points: [
        data?.entranceExams ||
          "DU SOL admissions for some programs may also be based on entrance exams conducted by the university.",
      ],
    },
    {
      title: "General Requirements:",
      points: data?.generalRequirements && data.generalRequirements.length > 0
        ? data.generalRequirements
        : [
            "All applicants must meet the minimum age requirement as specified by DU SOL.",
            "Reserved category candidates may have relaxation in minimum percentage requirements as per university guidelines.",
            "International students must provide equivalent qualifications recognized by the Association of Indian Universities (AIU).",
          ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#652a7c] py-14 sm:py-16 lg:py-20 text-white">
      {/* Subtle atmospheric glow behind the section */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Eligibility Criteria */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-tight mb-8">
              {title}
            </h2>

            <div className="space-y-6 sm:space-y-7">
              {criteriaList.map((section, idx) => (
                <div key={idx} className="space-y-2.5">
                  <h3 className="text-base sm:text-lg font-bold text-[#ffd442] tracking-wide">
                    {section.title}
                  </h3>
                  <div className="space-y-2">
                    {section.points.map((point, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-start gap-2.5 sm:gap-3 text-white/95 text-xs sm:text-sm md:text-[15px] leading-relaxed font-normal"
                      >
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Sample Degree Certificate & CTA Button */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col items-center justify-center">
            <div className="w-full max-w-xs sm:max-w-sm flex flex-col items-center">
              {/* Sample Degree Card */}
              <div className="w-full bg-white p-2.5 sm:p-3 rounded-xl shadow-2xl border border-white/20 transition-transform duration-300 hover:scale-[1.02]">
                <div className="relative aspect-[261/354] w-full overflow-hidden rounded-sm bg-slate-50">
                  <Image
                    src="/images/du-sample-degree.png"
                    alt="University of Delhi Sample Degree Certificate"
                    fill
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 380px"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Get FREE Consultation Button */}
              <button
                type="button"
                onClick={openModal}
                className="mt-6 w-full bg-[#ffcc00] hover:bg-[#e6b800] active:bg-[#cca300] text-slate-950 font-bold py-3.5 px-6 rounded-lg text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Get FREE Consultation</span>
                <ArrowRightCircle className="w-5 h-5 shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
