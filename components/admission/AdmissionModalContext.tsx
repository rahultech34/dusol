"use client";

import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  BACHELOR_PROGRAMS,
  MASTER_PROGRAMS,
  MBA_SPECIALIZATIONS,
} from "@/components/navbar/nav-data";

interface AdmissionModalContextType {
  isOpen: boolean;
  openModal: (courseOrEvent?: string | React.MouseEvent) => void;
  closeModal: () => void;
  defaultCourse: string;
}

const AdmissionModalContext = createContext<AdmissionModalContextType | undefined>(undefined);

// Helper to determine the course name from the current route/URL
function getCourseFromPathname(pathname: string): string {
  if (!pathname) return "";
  const allPrograms = [
    ...BACHELOR_PROGRAMS,
    ...MASTER_PROGRAMS,
    ...MBA_SPECIALIZATIONS,
  ];

  // 1. Direct href match
  const directMatch = allPrograms.find((p) => p.href === pathname);
  if (directMatch) return directMatch.name;

  // 2. Slug-based match (e.g., /courses/bcom, /ug-programs/bcom, etc.)
  const slug = pathname.split("/").filter(Boolean).pop() || "";
  if (!slug) return "";

  const cleanSlug = slug.replace(/^(distance-|mba-)/, "");
  const slugMatch = allPrograms.find((p) => {
    const pHrefSlug = p.href.split("/").filter(Boolean).pop() || "";
    const cleanPHrefSlug = pHrefSlug.replace(/^(distance-|mba-)/, "");
    return pHrefSlug === slug || cleanPHrefSlug === cleanSlug;
  });

  return slugMatch ? slugMatch.name : "";
}

export function AdmissionModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultCourse, setDefaultCourse] = useState("");
  const pathname = usePathname();

  // Keep track of pages where the popup has already been triggered or explicitly handled in this view
  const triggeredPagesRef = useRef<Set<string>>(new Set());

  const openModal = (courseOrEvent?: string | React.MouseEvent) => {
    if (typeof courseOrEvent === "string" && courseOrEvent.trim()) {
      setDefaultCourse(courseOrEvent.trim());
    } else {
      const pageCourse = getCourseFromPathname(pathname || "");
      if (pageCourse) {
        setDefaultCourse(pageCourse);
      }
    }
    setIsOpen(true);
    if (pathname) {
      triggeredPagesRef.current.add(pathname);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    if (pathname) {
      triggeredPagesRef.current.add(pathname);
    }
  };

  // Auto popup form on pages after 10 seconds (10,000 ms)
  useEffect(() => {
    // Exclude admin and internal API routes
    if (!pathname || pathname.startsWith("/admin") || pathname.startsWith("/api")) {
      return;
    }

    // If modal already triggered or handled on this page view, do not set another timer
    if (triggeredPagesRef.current.has(pathname)) {
      return;
    }

    const timer = setTimeout(() => {
      if (!triggeredPagesRef.current.has(pathname)) {
        triggeredPagesRef.current.add(pathname);
        const pageCourse = getCourseFromPathname(pathname);
        if (pageCourse) {
          setDefaultCourse(pageCourse);
        }
        setIsOpen(true);
      }
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AdmissionModalContext.Provider value={{ isOpen, openModal, closeModal, defaultCourse }}>
      {children}
    </AdmissionModalContext.Provider>
  );
}

export function useAdmissionModal() {
  const context = useContext(AdmissionModalContext);
  if (!context) {
    throw new Error("useAdmissionModal must be used within an AdmissionModalProvider");
  }
  return context;
}

