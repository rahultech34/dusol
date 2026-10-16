"use client";

import React, { useState } from "react";
import { GraduationCap, BookOpen, Clock, ArrowRightCircle, Sparkles } from "lucide-react";
import { useAdmissionModal } from "@/components/admission/AdmissionModalContext";
import { HomePageContent } from "@/lib/home-page-types";

interface ProgrammesTableSectionProps {
  data?: HomePageContent["programmes"];
}

export function ProgrammesTableSection({ data }: ProgrammesTableSectionProps) {
  const { openModal } = useAdmissionModal();
  const [activeTab, setActiveTab] = useState<"bachelor" | "master">("bachelor");

  const intro =
    data?.intro ||
    "DU SOL offers a wide range of undergraduate (UG) and postgraduate (PG) programs through open and distance learning modes...";
  const bachelorCourses = data?.bachelorCourses || [];
  const masterCourses = data?.masterCourses || [];

  return (
    <section className="py-14 sm:py-18 lg:py-20 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-50 text-[#652a7c] border border-purple-200/60 mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[#652a7c]" />
            <span>Academic Offerings</span>
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            DU SOL Programmes Offered
          </h2>
        </div>

        {/* Intro description */}
        <div className="max-w-4xl mx-auto mb-10 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify sm:text-left space-y-3">
          {intro.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Tab switch */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <button
              type="button"
              onClick={() => setActiveTab("bachelor")}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "bachelor"
                  ? "bg-[#652a7c] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Bachelor Courses ({bachelorCourses.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("master")}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "master"
                  ? "bg-[#652a7c] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Master Courses ({masterCourses.length})</span>
            </button>
          </div>
        </div>

        {/* Tables */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
          {activeTab === "bachelor" && (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-slate-900 to-purple-950 text-white text-xs sm:text-sm font-bold">
                    <th className="py-4 px-5 w-28">Course</th>
                    <th className="py-4 px-5 w-64">Full Name</th>
                    <th className="py-4 px-5">Description</th>
                    <th className="py-4 px-5 w-32 text-center">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {bachelorCourses.map((c, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-purple-50/30 transition-colors"
                    >
                      <td className="py-4 px-5">
                        <span className="inline-block px-2.5 py-1 rounded-lg bg-purple-100 text-[#652a7c] font-black text-xs">
                          {c.code}
                        </span>
                      </td>
                      <td className="py-4 px-5 font-bold text-slate-900">
                        {c.name}
                      </td>
                      <td className="py-4 px-5 text-slate-600 leading-relaxed">
                        {c.description}
                      </td>
                      <td className="py-4 px-5 text-center">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold text-xs">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>{c.duration}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "master" && (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-slate-900 to-purple-950 text-white text-xs sm:text-sm font-bold">
                    <th className="py-4 px-5 w-28">Course</th>
                    <th className="py-4 px-5 w-64">Full Name</th>
                    <th className="py-4 px-5">Description</th>
                    <th className="py-4 px-5 w-32 text-center">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {masterCourses.map((c, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-purple-50/30 transition-colors"
                    >
                      <td className="py-4 px-5">
                        <span className="inline-block px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 font-black text-xs">
                          {c.code}
                        </span>
                      </td>
                      <td className="py-4 px-5 font-bold text-slate-900">
                        {c.name}
                      </td>
                      <td className="py-4 px-5 text-slate-600 leading-relaxed">
                        {c.description}
                      </td>
                      <td className="py-4 px-5 text-center">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold text-xs">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>{c.duration}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={openModal}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-[#ffd442] hover:bg-[#e6be35] text-slate-950 shadow-md transition-all cursor-pointer"
          >
            <span>Need Help Choosing a Programme? Consult Edukyu</span>
            <ArrowRightCircle className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
