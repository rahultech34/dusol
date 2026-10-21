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
        href="/"
        aria-label="Edukyu - DU SOL Home"
        title="Edukyu - DU SOL Home"
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
        className="group flex flex-col justify-center transition-transform duration-200 active:scale-95"
      >

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
