"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  X,
  ChevronDown,
  GraduationCap,
  Briefcase,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { NavLogo } from "./NavLogo";
import { useNavData } from "./useNavData";

import { useAdmissionModal } from "../admission/AdmissionModalContext";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const { openModal } = useAdmissionModal();
  const navData = useNavData();

  // Prevent background scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setExpandedSection(null);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleSection = (section: string) => {
    setExpandedSection((prev) => (prev === section ? null : section));
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 lg:hidden flex justify-end bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm sm:max-w-md h-full bg-white flex flex-col shadow-2xl animate-in slide-in-from-right duration-300 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50/70">
          <NavLogo isCompact={false} />
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-200/60 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation List */}
        <div className="flex-1 overflow-y-auto px-4 py-2 divide-y divide-slate-100">
          {/* Bachelor Programs Accordion */}
          <div className="py-2.5">
            <button
              onClick={() => toggleSection("bachelor")}
              className="w-full flex items-center justify-between py-1 text-sm font-bold text-slate-800 hover:text-[#652a7c] transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="p-1 rounded bg-sky-100 text-sky-800">
                  <GraduationCap className="w-4 h-4" />
                </span>
                <span>Bachelor Programs</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                  expandedSection === "bachelor" ? "rotate-180 text-[#652a7c]" : ""
                }`}
              />
            </button>

            {expandedSection === "bachelor" && (
              <div className="mt-2.5 pl-3 space-y-1 border-l-2 border-sky-200 animate-in fade-in duration-150">
                {navData.bachelor.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={onClose}
                    className="block py-2 px-2.5 rounded-lg hover:bg-sky-50 text-xs font-semibold text-slate-700 hover:text-[#652a7c]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Master Programs Accordion */}
          <div className="py-2.5">
            <button
              onClick={() => toggleSection("master")}
              className="w-full flex items-center justify-between py-1 text-sm font-bold text-slate-800 hover:text-[#652a7c] transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="p-1 rounded bg-indigo-100 text-indigo-800">
                  <GraduationCap className="w-4 h-4" />
                </span>
                <span>Master Programs</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                  expandedSection === "master" ? "rotate-180 text-[#652a7c]" : ""
                }`}
              />
            </button>

            {expandedSection === "master" && (
              <div className="mt-2.5 pl-3 space-y-1 border-l-2 border-indigo-200 animate-in fade-in duration-150">
                {navData.master.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={onClose}
                    className="block py-2 px-2.5 rounded-lg hover:bg-indigo-50 text-xs font-semibold text-slate-700 hover:text-[#652a7c]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* MBA Specialization Accordion */}
          <div className="py-2.5">
            <button
              onClick={() => toggleSection("mba")}
              className="w-full flex items-center justify-between py-1 text-sm font-bold text-slate-800 hover:text-[#652a7c] transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="p-1 rounded bg-amber-100 text-amber-800">
                  <Briefcase className="w-4 h-4" />
                </span>
                <span>MBA Specialization</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                  expandedSection === "mba" ? "rotate-180 text-[#652a7c]" : ""
                }`}
              />
            </button>

            {expandedSection === "mba" && (
              <div className="mt-2.5 pl-3 space-y-1 border-l-2 border-amber-200 animate-in fade-in duration-150">
                {navData.mba.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={onClose}
                    className="block py-2 px-2.5 rounded-lg hover:bg-amber-50 text-xs font-semibold text-slate-700 hover:text-[#652a7c]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Student Zone Accordion */}
          <div className="py-2.5">
            <button
              onClick={() => toggleSection("student")}
              className="w-full flex items-center justify-between py-1 text-sm font-bold text-slate-800 hover:text-[#652a7c] transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="p-1 rounded bg-emerald-100 text-emerald-800">
                  <Calendar className="w-4 h-4" />
                </span>
                <span>Student Zone</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                  expandedSection === "student" ? "rotate-180 text-[#652a7c]" : ""
                }`}
              />
            </button>

            {expandedSection === "student" && (
              <div className="mt-2.5 pl-3 space-y-1 border-l-2 border-emerald-200 animate-in fade-in duration-150">
                {navData.student.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={onClose}
                    className="block py-2 px-2.5 rounded-lg hover:bg-emerald-50 text-xs font-semibold text-slate-700 hover:text-[#652a7c]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Blogs Link */}
          <div className="py-2.5">
            <Link
              href="/blogs"
              onClick={onClose}
              className="flex items-center justify-between py-1 text-sm font-bold text-slate-800 hover:text-[#652a7c] transition-colors"
            >
              <span>Blogs</span>
            </Link>
          </div>
        </div>

        {/* Drawer Bottom Action */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 shrink-0">
          <button
            type="button"
            onClick={() => {
              onClose();
              openModal();
            }}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#652a7c] hover:bg-[#521f66] active:bg-[#431754] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
          >
            <span>Apply For Admission 2026</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
