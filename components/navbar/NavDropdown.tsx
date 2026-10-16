"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CourseItem } from "./nav-data";
import { useNavData } from "./useNavData";

interface NavDropdownProps {
  type: "bachelor" | "master" | "mba" | "student";
  onClose: () => void;
  customItems?: CourseItem[];
}

export function NavDropdown({ type, onClose, customItems }: NavDropdownProps) {
  const navData = useNavData();

  let items: CourseItem[] = customItems || [];
  let cardWidth = "w-[310px]";
  let viewAllHref = "";
  let viewAllLabel = "";

  if (!customItems) {
    if (type === "bachelor") {
      items = navData.bachelor;
      cardWidth = "w-[320px]";
      viewAllHref = "/ug-programs";
      viewAllLabel = "View All Bachelor Programs";
    } else if (type === "master") {
      items = navData.master;
      cardWidth = "w-[320px]";
      viewAllHref = "/pg-programs";
      viewAllLabel = "View All Master Programs";
    } else if (type === "mba") {
      items = navData.mba;
      cardWidth = "w-[360px]";
      viewAllHref = "/courses/mba";
      viewAllLabel = "View All MBA Specializations";
    } else if (type === "student") {
      items = navData.student;
      cardWidth = "w-[330px]";
      viewAllHref = "/student-zone";
      viewAllLabel = "Visit Student Zone Portal";
    }
  }

  return (
    <div
      className={`${cardWidth} max-w-[90vw] bg-[#f8f9fa] rounded-2xl shadow-2xl ring-1 ring-black/5 border border-slate-200/60 py-2.5 px-2 flex flex-col animate-in fade-in zoom-in-95 duration-150`}
    >
      <div className="flex flex-col max-h-[70vh] overflow-y-auto pr-0.5 space-y-0.5 custom-scrollbar">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            onClick={onClose}
            className="px-3.5 py-2.5 rounded-xl text-[14.5px] font-bold text-slate-800 hover:text-sky-600 hover:bg-white/80 transition-all duration-150 text-left leading-snug flex items-center justify-between group"
          >
            <span>{item.name}</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-sky-500 text-xs shrink-0 ml-2">
              →
            </span>
          </Link>
        ))}
      </div>

      {viewAllHref && (
        <div className="pt-2 mt-1.5 border-t border-slate-200/60 px-1">
          <Link
            href={viewAllHref}
            onClick={onClose}
            className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold text-sky-600 hover:text-sky-700 hover:bg-sky-50 transition-colors"
          >
            <span>{viewAllLabel}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </div>
  );
}
