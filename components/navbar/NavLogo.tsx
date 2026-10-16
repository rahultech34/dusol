import React from "react";
import Link from "next/link";
import Image from "next/image";

interface NavLogoProps {
  className?: string;
  isCompact?: boolean;
}

export function NavLogo({ className = "", isCompact = false }: NavLogoProps) {
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3.5 ${className}`}>
      {/* 1. Edukyu Brand Logo (First) */}
      <Link
        href="https://edukyu.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Edukyu - Education Simplified"
        title="Edukyu - Distance Education Portal"
        className="flex items-center transition-opacity hover:opacity-85 shrink-0"
      >
        <div className="relative w-[88px] sm:w-[104px] md:w-[112px] h-6 sm:h-7 md:h-8">
          <Image
            src="https://edukyu.com/Resources/Images/Edukyu_Logo.jpeg"
            alt="Edukyu Logo"
            fill
            sizes="(max-width: 640px) 88px, (max-width: 768px) 104px, 112px"
            className="object-contain object-left"
            priority
          />
        </div>
      </Link>

      {/* Subtle Vertical Divider */}
      <div className="h-7 sm:h-8 w-[1.5px] bg-slate-200 shrink-0" aria-hidden="true" />

      {/* 2. DU SOL Brand Link (Then DU SOL) */}
      <Link
        href="/"
        aria-label="DU SOL - School of Open Learning, University of Delhi"
        className="group flex items-center gap-2.5 sm:gap-3 transition-transform duration-200 active:scale-95"
      >
        {/* Embellished Official DU SOL / SODE Academic Icon */}
        <div className="relative flex items-center justify-center shrink-0">
          <div className="relative flex flex-col items-center">
            {/* Graduation Cap Vector with Upward Growth Arrow */}
            <div className="relative w-9 h-8 sm:w-11 sm:h-10 flex items-center justify-center">
              <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-sky-800 transition-transform duration-300 group-hover:-translate-y-0.5"
              >
                {/* Mortarboard Diamond Top */}
                <polygon
                  points="32,8 60,20 32,32 4,20"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinejoin="round"
                  fill="#f0f7ff"
                  className="transition-colors group-hover:fill-sky-50"
                />
                {/* Tassel on Left/Right */}
                <path
                  d="M52 23.5V36C52 38 50 40 48 40"
                  stroke="#d97706"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <circle cx="48" cy="41" r="2" fill="#d97706" />

                {/* Lower Cap / Skull Cap Outline */}
                <path
                  d="M14 24.5V38C14 43 22 47 32 47C42 47 50 43 50 38V24.5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />

                {/* Ascending Arrow Inside Cap representing progress & education */}
                <path
                  d="M27 41L35 31M35 31H28M35 31V38"
                  stroke="#0284c7"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* SODE Crest Badge at Base */}
            <div className="-mt-1 px-1.5 py-0.5 bg-gradient-to-r from-sky-900 to-indigo-950 rounded-[3px] shadow-xs border border-sky-700/40">
              <span className="block text-[7.5px] sm:text-[8px] font-black tracking-widest text-sky-200 uppercase font-mono leading-none">
                SODE
              </span>
            </div>
          </div>
        </div>

        {/* Brand Typography */}
        <div className="flex flex-col leading-tight">
          <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 group-hover:text-sky-900 transition-colors">
            DU<span className="text-sky-700">·</span>SOL
          </span>

          {!isCompact && (
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide text-slate-700 uppercase">
                School of Open Learning
              </span>
              <span className="text-[8.5px] sm:text-[9.5px] font-medium text-slate-500 tracking-tight hidden xs:inline sm:inline">
                University of Delhi · NAAC A+
              </span>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
