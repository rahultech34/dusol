import React from "react";
import Link from "next/link";
import {
  LifeBuoy,
  Search,
  ExternalLink,
  ArrowRight,
  FileText,
  Clock,
  Sparkles,
  BookOpen,
  HelpCircle,
  ShieldCheck,
  Globe,
} from "lucide-react";
import { getAllStudentZoneItems } from "@/lib/firestore-cms";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Student Zone | DU SOL Support, Hall Ticket, Results & Portals 2026",
  description:
    "Direct student portal links, hall tickets, fee structures, study materials, assignment updates, and results for Delhi University School of Open Learning (DU SOL).",
};

export default async function StudentZoneIndexPage() {
  const items = await getAllStudentZoneItems(true);

  const categories = Array.from(new Set(items.map((i) => i.category || "General Services")));

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      {/* Hero Section */}
      <section className="bg-linear-to-b from-[#652a7c] via-purple-950 to-slate-900 text-white pt-12 pb-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-amber-300 border border-white/20 mb-4 backdrop-blur-md">
            <LifeBuoy className="w-3.5 h-3.5" />
            <span>Official Student Support & Resource Hub</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            DU SOL <span className="text-amber-400">Student Zone</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-purple-100 max-w-2xl mx-auto leading-relaxed">
            Quick access to hall tickets, study material downloads, annual examination results, fee structures, and the official DU SOL student dashboard.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://sol.du.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#652a7c] hover:bg-[#521f66] active:bg-[#431754] text-white text-xs sm:text-sm font-bold transition-all shadow-lg shadow-[#652a7c]/20"
            >
              <Globe className="w-4 h-4" />
              <span>Official sol.du.ac.in Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 pb-20 w-full">
        {/* Categories Bar */}
        {categories.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-md">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2">
              Browse Topics:
            </span>
            {categories.map((category) => (
              <span
                key={category}
                className="px-3 py-1.5 rounded-xl text-xs font-bold bg-purple-50 text-[#652a7c] border border-purple-200/60"
              >
                {category}
              </span>
            ))}
          </div>
        )}

        {/* Resources Cards Grid */}
        {items.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm max-w-lg mx-auto">
            <LifeBuoy className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-900">Student Resources Updating</h3>
            <p className="text-xs text-slate-500 mt-1">
              New academic notices and direct student portals are currently being synced.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-purple-200 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold bg-purple-50 text-[#652a7c]">
                      {item.category || "General Guide"}
                    </span>
                    {item.externalLink && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>Live Portal</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#652a7c] transition-colors leading-snug">
                    <Link href={`/student-zone/${item.slug}`}>
                      {item.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
                    {item.summary || "Complete guidance and instructions for DU SOL distance students."}
                  </p>

                  {item.quickSteps && item.quickSteps.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Quick Instructions:
                      </div>
                      <ol className="text-xs text-slate-500 space-y-1.5 list-decimal list-inside">
                        {item.quickSteps.slice(0, 2).map((step, idx) => (
                          <li key={idx} className="line-clamp-1">
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <Link
                    href={`/student-zone/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#652a7c] hover:underline"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {item.externalLink && (
                    <a
                      href={item.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#652a7c] hover:bg-[#522265] text-white text-[11px] font-bold transition-colors shadow-xs"
                    >
                      <span>Direct Portal</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* DU SOL Student Advisory Box */}
        <div className="mt-16 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-purple-100 text-[#652a7c] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Need Admission or Academic Guidance?</h4>
              <p className="text-xs text-slate-500 mt-1 max-w-xl">
                Our education counselors assist students with DU SOL admission eligibility, online application filling, and fee submission guidance.
              </p>
            </div>
          </div>

          <a
            href="https://sol.du.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shrink-0 transition-colors"
          >
            <span>Visit University Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>
    </main>
  );
}
