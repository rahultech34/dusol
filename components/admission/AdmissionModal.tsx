"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { useAdmissionModal } from "./AdmissionModalContext";
import { AdmissionForm } from "./AdmissionForm";

export function AdmissionModal() {
  const { isOpen, closeModal } = useAdmissionModal();

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeModal]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="admission-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
      onClick={closeModal}
    >
      <div
        className="relative w-full max-w-lg my-8 transform transition-all animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          onClick={closeModal}
          className="absolute -top-3.5 -right-3.5 sm:-top-4 sm:-right-4 z-20 w-9 h-9 rounded-full bg-white text-slate-700 hover:text-black shadow-lg hover:shadow-xl border border-slate-200 flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Form */}
        <AdmissionForm
          formTitle="Apply for DU SOL Admission 2026"
          formSubtitle="Official University Counseling · Free Guidance & Syllabus"
          source="modal_popup"
          onSuccess={closeModal}
        />
      </div>
    </div>
  );
}
