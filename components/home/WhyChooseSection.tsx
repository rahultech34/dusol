"use client";

import React from "react";
import Image from "next/image";
import { useAdmissionModal } from "@/components/admission/AdmissionModalContext";
import { HomePageContent } from "@/lib/home-page-types";

interface WhyChooseSectionProps {
  data?: HomePageContent["whyChoose"];
}

export function WhyChooseSection({ data }: WhyChooseSectionProps) {
  const { openModal } = useAdmissionModal();

  const heading =
    data?.heading || "Who Should Consider a Distance Program from DU SOL 2026?";

  const paragraphs = data?.paragraphs && data.paragraphs.length > 0
    ? data.paragraphs
    : [
        "DU SOL has over 5 lakh students enrolled. It is recognized by the University Grants Commission (UGC) and approved by the Distance Education Bureau (DEB). DU SOL, along with Delhi University, has a prestigious NAAC accreditation, indicating its high quality education standards. Distance education is a popular way of learning, and Delhi University’s open learning program is an authorized university for this type of education. It’s a great option for those who want to study at Delhi University but prefer doing it from a distance. Edukyu helps learners across India and around the world choose the right DU SOL programme and complete admission smoothly.",
        "DU SOL is providing education to millions of students in the country based on several principles. It aims to provide access to higher education for all sections of society. The institution offers innovative, high-quality programs at different levels to meet the needs of students. It is driven by the goal of providing affordable education while ensuring the regulation and coordination of educational quality and standards.",
      ];

  const features = data?.features || [];

  const defaultIcons = [
    { icon: "/images/why-choose/icon-enrollment.png", width: 42, height: 48 },
    { icon: "/images/why-choose/icon-recognition.png", width: 48, height: 41 },
    { icon: "/images/why-choose/icon-flexibility.png", width: 42, height: 41 },
    { icon: "/images/why-choose/icon-quality.png", width: 47, height: 47 },
  ];

  const leftFeatures = features.slice(0, 2).map((f, i) => ({
    ...f,
    ...defaultIcons[i % defaultIcons.length],
  }));

  const rightFeatures = features.slice(2).map((f, i) => ({
    ...f,
    ...defaultIcons[(i + 2) % defaultIcons.length],
  }));

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#652a7c] tracking-tight leading-tight">
            {heading}
          </h2>
        </div>

        {/* Content Paragraphs */}
        <div className="max-w-5xl mx-auto space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify sm:text-left">
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Features 2-Column Grid with Center Divider */}
        <div className="mt-12 sm:mt-14 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
            {/* Center Cyan Vertical Divider (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-2 bottom-2 w-[2.5px] bg-[#30aee4] -translate-x-1/2 rounded-full" />

            {/* Left Column */}
            <div className="space-y-8 md:pr-6">
              {leftFeatures.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={item.width}
                      height={item.height}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-950 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-8 md:pl-6">
              {rightFeatures.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={item.width}
                      height={item.height}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-950 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Claim FREE Counseling Button */}
        <div className="mt-12 sm:mt-14 flex justify-center">
          <button
            type="button"
            onClick={openModal}
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-bold text-sm sm:text-base bg-[#652a7c] hover:bg-[#521f66] active:bg-[#431754] text-white shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span className="inline-flex items-center justify-center w-4.5 h-4.5 rounded-full bg-white text-[#652a7c] font-black text-xs leading-none">
              !
            </span>
            <span>Claim FREE Counseling</span>
          </button>
        </div>
      </div>
    </section>
  );
}
