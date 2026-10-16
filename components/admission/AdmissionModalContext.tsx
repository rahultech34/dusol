"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface AdmissionModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const AdmissionModalContext = createContext<AdmissionModalContextType | undefined>(undefined);

export function AdmissionModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Auto popup after 1 hour (3600000 ms) of opening the site
  useEffect(() => {
    // Check if the popup has already been shown in this session
    const hasShownPopup = sessionStorage.getItem("dusol_popup_shown");
    if (hasShownPopup) return;

    const ONE_HOUR_MS = 60 * 60 * 1000;

    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("dusol_popup_shown", "true");
    }, ONE_HOUR_MS);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AdmissionModalContext.Provider value={{ isOpen, openModal, closeModal }}>
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
