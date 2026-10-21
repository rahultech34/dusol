import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "School of Open Learning (DU SOL) | University of Delhi",
  description:
    "Official portal for DU SOL undergraduate, postgraduate, and MBA programs, admission notifications, study material, admit cards, and student services.",
  icons: {
    icon: "/favicon.ico",
  },
};

import { AdmissionModalProvider } from "@/components/admission/AdmissionModalContext";
import { AdmissionModal } from "@/components/admission/AdmissionModal";
import { Footer } from "@/components/footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-sky-100 selection:text-sky-900">
        <AdmissionModalProvider>
          <Navbar />
          <div className="flex-1 flex flex-col">{children}</div>
          <Footer />
          <AdmissionModal />
        </AdmissionModalProvider>
      </body>
    </html>
  );
}

