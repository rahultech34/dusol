"use client";

import React from "react";
import Link from "next/link";
import { Bell, ArrowRight, FileText } from "lucide-react";
import { HomePageNotice } from "@/lib/home-page-types";

interface NoticesSectionProps {
  notices?: HomePageNotice[];
}

export function NoticesSection({ notices = [] }: NoticesSectionProps) {
  if (!notices || notices.length === 0) return null;

  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-200/60 mb-2">
            <Bell className="w-3.5 h-3.5 text-rose-600 animate-pulse" />
            <span>Official DU SOL Notices</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Latest News & Examination Notifications
          </h2>
        </div>

        {/* Notices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {notices.map((notice, idx) => (
            <Link
              key={notice.id || idx}
              href="/student-zone"
              className="group p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#652a7c]/40 hover:shadow-md transition-all flex items-start justify-between gap-3"
            >
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#652a7c] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#652a7c] group-hover:text-white transition-colors">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    {notice.isNew && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800">
                        NEW
                      </span>
                    )}
                    <span className="text-[11px] text-slate-400 font-medium">
                      Student Zone Updates
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-[#652a7c] transition-colors leading-snug line-clamp-2">
                    {notice.title}
                  </h3>
                </div>
              </div>

              <span className="shrink-0 text-slate-300 group-hover:text-[#652a7c] group-hover:translate-x-0.5 transition-all mt-2">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
