"use client";

import React from "react";
import Link from "next/link";
import { GraduationCap, Briefcase, ArrowRight } from "lucide-react";
import { useNavData } from "@/components/navbar/useNavData";
import { useAdmissionModal } from "@/components/admission/AdmissionModalContext";

export function ProgramCards() {
  const { openModal } = useAdmissionModal();
  const { bachelor, master, mba } = useNavData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Undergraduate (UG) Card */}
      <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-900/10 border border-slate-200/90 hover:shadow-2xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group">
        <div>
          <div className="flex items-center justify-between">
            <span className="p-3 rounded-xl bg-sky-100 text-sky-800">
              <GraduationCap className="w-6 h-6" />
            </span>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200/60">
              {bachelor.length} Courses
            </span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mt-4 group-hover:text-sky-800 transition-colors">
            Bachelor Programs (UG)
          </h3>
          <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
            Distance BA, BCom, BBA, BMS, BLIS, and BCA under the National Education Policy framework without CUET.
          </p>

          {/* Course Chips */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {bachelor.map((c) => (
              <Link
                key={c.id}
                href={c.href}
                className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/60 hover:bg-sky-50 hover:text-sky-600 transition-colors"
              >
                {c.name.replace(/^Distance\s+/i, "")}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
          <button
            type="button"
            onClick={openModal}
            className="font-bold text-[#652a7c] hover:text-[#521f66] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform cursor-pointer"
          >
            <span>Apply for UG Courses</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <Link
            href="/ug-programs"
            className="text-[11px] font-semibold text-slate-400 hover:text-[#652a7c] transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>

      {/* Postgraduate (PG) Card */}
      <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-900/10 border border-slate-200/90 hover:shadow-2xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between group">
        <div>
          <div className="flex items-center justify-between">
            <span className="p-3 rounded-xl bg-indigo-100 text-indigo-800">
              <GraduationCap className="w-6 h-6" />
            </span>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/60">
              {master.length} Courses
            </span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mt-4 group-hover:text-indigo-900 transition-colors">
            Master Programs (PG)
          </h3>
          <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
            Distance MA, Distance MBA, Distance MCOM, and Distance MLIS with regular-grade DU equivalence.
          </p>

          {/* Course Chips */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {master.map((c) => (
              <Link
                key={c.id}
                href={c.href}
                className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/60 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
              >
                {c.name.replace(/^Distance\s+/i, "")}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
          <button
            type="button"
            onClick={openModal}
            className="font-bold text-[#652a7c] hover:text-[#521f66] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform cursor-pointer"
          >
            <span>Apply for PG Courses</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <Link
            href="/pg-programs"
            className="text-[11px] font-semibold text-slate-400 hover:text-[#652a7c] transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>

      {/* MBA Specialization Card */}
      <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-900/10 border border-slate-200/90 hover:shadow-2xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between group">
        <div>
          <div className="flex items-center justify-between">
            <span className="p-3 rounded-xl bg-purple-100 text-[#652a7c]">
              <Briefcase className="w-6 h-6" />
            </span>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-purple-50 text-[#652a7c] border border-purple-200/60">
              {mba.length} Specializations
            </span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mt-4 group-hover:text-[#652a7c] transition-colors">
            MBA Specializations
          </h3>
          <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
            AICTE-approved Executive MBA in IT, Finance, Marketing, HR, Operations, and Business Analytics.
          </p>

          {/* Course Chips */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {mba.map((c) => (
              <Link
                key={c.id}
                href={c.href}
                className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/60 hover:bg-purple-50 hover:text-[#652a7c] transition-colors"
              >
                {c.name.replace(/^MBA in\s+/i, "")}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
          <button
            type="button"
            onClick={openModal}
            className="font-bold text-[#652a7c] hover:text-[#521f66] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform cursor-pointer"
          >
            <span>Apply for MBA</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <Link
            href="/courses/mba"
            className="text-[11px] font-semibold text-slate-400 hover:text-[#652a7c] transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
