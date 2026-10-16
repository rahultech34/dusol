import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GraduationCap, BookOpen, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import { Program } from "@/lib/types";

interface ProgramDirectoryPageProps {
  type: "ug" | "pg";
  programs: Program[];
}

export function ProgramDirectoryPage({ type, programs }: ProgramDirectoryPageProps) {
  const isUG = type === "ug";
  const title = isUG ? "Undergraduate (UG) Programs" : "Postgraduate (PG) Programs";
  const subtitle = isUG
    ? "Explore UGC-DEB recognized Bachelor degrees (BA, BCom, BBA, BMS, BLIS) from Delhi University without CUET."
    : "Explore UGC-DEB recognized Master degrees (MA, MCom, MBA, MLIS) from Delhi University.";
  const detailBaseUrl = isUG ? "/ug-programs" : "/pg-programs";

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <section className="bg-linear-to-b from-[#652a7c] via-purple-900 to-slate-900 text-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-amber-300 border border-white/20 mb-4 backdrop-blur-md">
            Academic Offerings · Admissions 2026-27
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {title}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-purple-200 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Course Cards Grid */}
      <section className="py-12 sm:py-16 flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {programs.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8 max-w-md mx-auto">
              <GraduationCap className="w-12 h-12 text-[#652a7c] mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-900">Programs Being Updated</h3>
              <p className="text-xs text-slate-500 mt-1">
                Course listings for session 2026-27 will be published shortly by the administration.
              </p>
              <Link
                href="/"
                className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#652a7c] text-white text-xs font-bold"
              >
                Return to Home
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {programs.map((prog) => (
                <div
                  key={prog.id}
                  className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {prog.featuredImage ? (
                      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                        <Image
                          src={prog.featuredImage}
                          alt={prog.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div className="aspect-video w-full bg-gradient-to-tr from-purple-100 via-indigo-50 to-amber-50 flex items-center justify-center text-[#652a7c]">
                        {isUG ? <GraduationCap className="w-12 h-12 opacity-30" /> : <BookOpen className="w-12 h-12 opacity-30" />}
                      </div>
                    )}

                    <div className="p-6">
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-[#652a7c] font-bold text-[11px]">
                          {prog.degree}
                        </span>
                        <span className="flex items-center gap-1 text-[11px]">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>{prog.duration}</span>
                        </span>
                      </div>

                      <h2 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#652a7c] transition-colors leading-snug">
                        <Link href={`${detailBaseUrl}/${prog.slug}`}>{prog.name}</Link>
                      </h2>

                      {prog.overview && (
                        <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                          {prog.overview}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-emerald-600 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>UGC-DEB</span>
                    </span>
                    <Link
                      href={`${detailBaseUrl}/${prog.slug}`}
                      className="font-bold text-[#652a7c] hover:text-purple-900 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Course Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
