"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  GraduationCap,
  BookOpen,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { useAdmissionModal } from "@/components/admission/AdmissionModalContext";

export function Footer() {
  const pathname = usePathname();
  const { openModal } = useAdmissionModal();

  // Do not render public footer on admin pages
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="w-full bg-slate-950 text-slate-400 border-t border-slate-800/80 relative overflow-hidden">
      {/* Decorative ambient gradient backdrop */}
      <div className="absolute top-0 left-1/3 w-[500px] h-72 bg-[#652a7c]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      {/* Pre-Footer Action Banner */}
      <div className="border-b border-slate-800/80 bg-gradient-to-r from-slate-950 via-[#652a7c]/15 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-slate-900/60 border border-slate-800 p-6 sm:p-8 rounded-2xl backdrop-blur-md shadow-xl">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-xl bg-[#652a7c]/20 border border-[#652a7c]/30 text-purple-300 flex items-center justify-center shrink-0 hidden sm:flex">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Planning Admission for DU SOL Session 2026-27?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Connect with certified counselors for 100% free eligibility verification, fee structure insights, and step-by-step guidance.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <button
                type="button"
                onClick={openModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-[#652a7c] hover:bg-[#521f66] active:bg-[#431754] text-white shadow-lg shadow-[#652a7c]/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Request Free Counseling</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:+918336889553"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-white/5 hover:bg-white/10 text-slate-200 border border-slate-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-purple-300" />
                <span>Call +91 83368 89553</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Directory Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & Legacy (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-5">
            <div>
              {/* Dual Brand Identity */}
              <div className="flex items-center gap-3 mb-4">
                <Link
                  href="/"
                  className="bg-white/95 px-2.5 py-1.5 rounded-lg shrink-0 hover:opacity-90 transition-opacity"
                  title="Edukyu - DU SOL Home"
                >
                  <div className="relative w-24 h-6">
                    <Image
                      src="https://edukyu.com/Resources/Images/Edukyu_Logo.jpeg"
                      alt="Edukyu Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </Link>

                <div className="h-6 w-[1.5px] bg-slate-700 shrink-0" />

                <Link href="/" className="flex flex-col leading-none">
                  <span className="text-xl font-black tracking-tight text-white">
                    DU<span className="text-[#652a7c] text-purple-400">·</span>SOL
                  </span>
                  <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase mt-0.5">
                    School of Open Learning
                  </span>
                </Link>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
                Established in 1962 under the University of Delhi, offering pioneer distance education programs recognized by UGC-DEB and AICTE with NAAC A++ university grade equivalence.
              </p>

              {/* Accreditations Trust Badges */}
              <div className="mt-5 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>UGC-DEB & AICTE Recognized Degrees</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Award className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>NAAC A++ Accredited University of Delhi</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Direct Admissions without CUET Requirement</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Bachelor Programs (UG) (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-[#652a7c] text-purple-400" />
              <span>UG Programs</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/courses/distance-ba" className="hover:text-white transition-colors">
                  B.A. Programme
                </Link>
              </li>
              <li>
                <Link href="/courses/distance-bcom" className="hover:text-white transition-colors">
                  B.Com (Prog & Hons)
                </Link>
              </li>
              <li>
                <Link href="/courses/distance-bms" className="hover:text-white transition-colors">
                  BMS (Management Studies)
                </Link>
              </li>
              <li>
                <Link href="/courses/distance-bba" className="hover:text-white transition-colors">
                  BBA in Financial Analysis
                </Link>
              </li>
              <li>
                <Link href="/courses/distance-blis" className="hover:text-white transition-colors">
                  BLIS (Library Science)
                </Link>
              </li>
              <li>
                <Link href="/ug-programs" className="text-purple-400 hover:text-purple-300 font-semibold inline-flex items-center gap-1 mt-1">
                  <span>All UG Courses</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Master & MBA Programs (PG) (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#652a7c] text-purple-400" />
              <span>PG & MBA</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/courses/distance-mba" className="hover:text-white transition-colors">
                  Distance MBA
                </Link>
              </li>
              <li>
                <Link href="/courses/distance-mcom" className="hover:text-white transition-colors">
                  M.Com (Commerce)
                </Link>
              </li>
              <li>
                <Link href="/courses/distance-ma" className="hover:text-white transition-colors">
                  M.A. History / Pol. Science
                </Link>
              </li>
              <li>
                <Link href="/courses/distance-ma" className="hover:text-white transition-colors">
                  M.A. Hindi / Sanskrit
                </Link>
              </li>
              <li>
                <Link href="/courses/distance-mlis" className="hover:text-white transition-colors">
                  MLIS (Master in Library)
                </Link>
              </li>
              <li>
                <Link href="/courses/mba" className="hover:text-white transition-colors">
                  MBA Specializations
                </Link>
              </li>
              <li>
                <Link href="/pg-programs" className="text-purple-400 hover:text-purple-300 font-semibold inline-flex items-center gap-1 mt-1">
                  <span>All PG Courses</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Student Zone & Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              <span>Student Zone</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/student-zone/admission" className="hover:text-white transition-colors">
                  Admission Details
                </Link>
              </li>
              <li>
                <Link href="/student-zone/courses-fees" className="hover:text-white transition-colors">
                  Fee Structure
                </Link>
              </li>
              <li>
                <Link href="/student-zone/hall-ticket" className="hover:text-white transition-colors">
                  Admit Card / Hall Ticket
                </Link>
              </li>
              <li>
                <Link href="/student-zone/study-material" className="hover:text-white transition-colors">
                  Study Materials
                </Link>
              </li>
              <li>
                <Link href="/student-zone/result" className="hover:text-white transition-colors">
                  Examination Results
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-white transition-colors">
                  Admissions Blog
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white transition-colors">
                  Disclaimer Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:text-white transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/student-zone" className="text-purple-400 hover:text-purple-300 font-semibold inline-flex items-center gap-1 mt-1">
                  <span>Student Portal</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Us (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-[#652a7c] text-purple-400" />
              <span>Contact Us</span>
            </h4>
            <div className="space-y-4 text-xs">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block mb-1">
                  Phone Number
                </span>
                <a
                  href="tel:+918336889553"
                  className="text-sm font-semibold text-white hover:text-purple-300 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>+91 83368 89553</span>
                </a>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block mb-1">
                  Email Address
                </span>
                <a
                  href="mailto:hi@edukyu.com"
                  className="text-sm font-semibold text-white hover:text-purple-300 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>hi@edukyu.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Disclaimer Bar */}
      <div className="border-t border-slate-900 bg-black/50 py-5 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] leading-relaxed text-slate-400 text-justify sm:text-left">
            <strong className="text-slate-300 font-semibold">Important Disclaimer: </strong>
            This web portal is an independent academic counseling and information service operated in partnership with Edukyu to assist prospective students with admissions, curriculum details, and academic guidance. &quot;University of Delhi&quot; and &quot;DU SOL&quot; are registered university entities. All formal enrollments, registration IDs, examinations, and official fee receipts are directly administered through the official Delhi University SOL website at sol.du.ac.in.{" "}
            <Link
              href="/disclaimer"
              className="text-purple-400 hover:text-purple-300 font-semibold underline inline-flex items-center gap-0.5 ml-1 transition-colors"
            >
              <span>Read Full Disclaimer &amp; Guidance Policy</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </p>
          <div className="mt-4 pt-4 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
            <p>© {new Date().getFullYear()} Edukyu.com (Edukyu Pvt. Ltd.). All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Link href="/disclaimer" className="text-slate-400 hover:text-purple-300 underline transition-colors">
                Disclaimer Policy
              </Link>
              <span>•</span>
              <Link href="/privacy-policy" className="text-slate-400 hover:text-purple-300 underline transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms-conditions" className="text-slate-400 hover:text-purple-300 underline transition-colors">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
