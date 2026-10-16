"use client";

import React from "react";
import { CheckCircle2, ArrowRightCircle, Sparkles, HelpCircle, PhoneCall, ListOrdered, AlertTriangle } from "lucide-react";
import { useAdmissionModal } from "@/components/admission/AdmissionModalContext";
import { HomePageContent } from "@/lib/home-page-types";

interface AdmissionProcedureSectionProps {
  data?: HomePageContent["admissionProcedure"];
}

export function AdmissionProcedureSection({ data }: AdmissionProcedureSectionProps) {
  const { openModal } = useAdmissionModal();

  const heading = data?.heading || "DU SOL Admission Procedure 2026";
  const intro =
    data?.intro ||
    "The School of Open Learning at Delhi University is welcoming applications for UG and PG admissions from both Indian and foreign nationals, available through both offline and online methods, but the online option is widely preferred due to its convenience. The department provides various degree programs, and you can enrol in Delhi Open University 2026 using any mode that suits you. Before taking any steps, it’s advisable to check the eligibility criteria and the documentation process. Edukyu’s team can assist you at every stage.";

  const importantConsiderations = data?.importantConsiderations && data.importantConsiderations.length > 0
    ? data.importantConsiderations
    : [
        "Make sure you really want to study the course you’re choosing.",
        "If you’re applying for special courses like B.Ed, MBA, or PhD, be ready for an entrance test.",
        "Check how much the fees are and what options you have for paying.",
        "Look at your course plan, which includes what you’ll study, your assignments, and the whole syllabus.",
        "To secure your spot, make sure you know the deadlines for applying and paying fees.",
        "Don’t forget to find out the name and address of your study center.",
      ];

  const onlineProcessSteps = data?.onlineProcessSteps && data.onlineProcessSteps.length > 0
    ? data.onlineProcessSteps
    : [
        "Go to the official DU SOL website.",
        "Click on “New Applicant Sign Up” to create a new account by selecting “New Registration.”",
        "Fill in all the required details in the new account form that pops up as “Create New Account.”",
        "Click the “Create Password” button.",
        "Double-check all the information in the application form to make sure there are no mistakes.",
        "Click “Register Now.”",
        "Once registered, you’ll get a secure password and username.",
        "A confirmation will be sent to your registered email/phone number.",
        "If you’ve completed all the registration steps, click “Continue on Homepage” to start your application form.",
      ];

  return (
    <section className="py-14 sm:py-18 lg:py-20 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-50 text-[#652a7c] border border-purple-200/60 mb-3">
            <ListOrdered className="w-3.5 h-3.5 text-[#652a7c]" />
            <span>Admission Guide 2026</span>
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {heading}
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed text-justify sm:text-center max-w-4xl mx-auto">
            {intro}
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Important Things to Consider */}
          <div className="lg:col-span-5 bg-gradient-to-br from-amber-50/60 to-orange-50/30 p-6 sm:p-7 rounded-3xl border border-amber-200/70 shadow-xs space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-950">Important things to consider</h3>
                <p className="text-[11px] text-slate-600">Essential checklist prior to enrolling</p>
              </div>
            </div>

            <div className="space-y-3">
              {importantConsiderations.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 leading-relaxed">
                  <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-900 font-black text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: DU SOL Online Process */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/80 shadow-xs space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#652a7c] text-white flex items-center justify-center font-bold">
                  <ListOrdered className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-950">DU SOL Online Process</h3>
                  <p className="text-[11px] text-slate-500">Step-by-step registration roadmap</p>
                </div>
              </div>

              <span className="text-[11px] font-bold text-[#652a7c] bg-purple-50 px-2.5 py-1 rounded-full">
                9 Simple Steps
              </span>
            </div>

            <div className="space-y-3.5">
              {onlineProcessSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-3 rounded-2xl bg-slate-50/70 hover:bg-purple-50/40 border border-slate-200/60 transition-colors"
                >
                  <span className="w-6 h-6 rounded-lg bg-[#652a7c]/10 text-[#652a7c] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 leading-snug">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Card: Still have a doubt? Connect with Edukyu */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30 mb-2">
              Free Guidance
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Still have a doubt? Connect with Edukyu
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Edukyu counsellors can guide you through every step of eligibility, documentation, registration, and fee payments.
            </p>
          </div>

          <button
            type="button"
            onClick={openModal}
            className="shrink-0 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 flex items-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Connect with Edukyu</span>
          </button>
        </div>
      </div>
    </section>
  );
}
