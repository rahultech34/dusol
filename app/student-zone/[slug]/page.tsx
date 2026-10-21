import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  LifeBuoy,
  Globe,
  ExternalLink,
  FileDown,
  ArrowLeft,
  CheckCircle2,
  ListOrdered,
  Clock,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";
import { getStudentZoneItemBySlug, getAllStudentZoneItems } from "@/lib/firestore-cms";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ preview?: string }>;
}

export const dynamic = "force-dynamic";

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { preview } = await searchParams;
  const isPreview = preview === "true";

  const item = await getStudentZoneItemBySlug(slug, isPreview);
  if (!item) {
    return {
      title: "Resource Not Found | DU SOL Student Zone",
    };
  }

  return {
    title: item.seoTitle || `${item.title} | DU SOL Student Zone 2026`,
    description:
      item.seoDescription ||
      item.summary ||
      `Direct portal, step-by-step instructions, and updates for ${item.title} from Delhi University SOL.`,
    openGraph: {
      title: item.seoTitle || item.title,
      description: item.seoDescription || item.summary,
      images: item.featuredImage ? [{ url: item.featuredImage }] : undefined,
    },
  };
}

export default async function StudentZoneDetailPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { preview } = await searchParams;
  const isPreview = preview === "true";

  const item = await getStudentZoneItemBySlug(slug, isPreview);

  if (!item) {
    notFound();
  }

  const allItems = await getAllStudentZoneItems(true);
  const relatedItems = allItems.filter((i) => i.id !== item.id).slice(0, 4);

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      {/* Draft notice banner if in draft */}
      {item.status === "draft" && (
        <div className="bg-amber-400 text-slate-950 px-4 py-2 text-center text-xs font-bold tracking-wide">
          ⚠️ Admin Preview Mode — This Student Zone resource is in Draft status and hidden from public visitors.
        </div>
      )}

      {/* Hero Header */}
      <section className="bg-linear-to-b from-[#652a7c] via-purple-950 to-slate-900 text-white pt-10 pb-16 lg:pt-14 lg:pb-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-purple-200 mb-6 font-medium">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/student-zone" className="hover:text-white">
              Student Zone
            </Link>
            <span>/</span>
            <span className="text-white truncate max-w-xs">{item.title}</span>
          </div>

          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-amber-300 border border-white/20 backdrop-blur-md">
                <LifeBuoy className="w-3.5 h-3.5" />
                <span>{item.category || "Student Support"}</span>
              </span>
              <span className="text-xs text-purple-200 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Updated {new Date(item.updatedAt).toLocaleDateString()}</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {item.title}
            </h1>

            {item.summary && (
              <p className="mt-4 text-sm sm:text-base text-purple-100 leading-relaxed font-normal">
                {item.summary}
              </p>
            )}

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              {item.externalLink && (
                <a
                  href={item.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#652a7c] hover:bg-[#521f66] active:bg-[#431754] text-white text-xs sm:text-sm font-bold transition-all shadow-lg shadow-[#652a7c]/20"
                >
                  <Globe className="w-4 h-4" />
                  <span>Go to Official DU SOL Portal</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              {item.downloadUrl && (
                <a
                  href={item.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/20 transition-all backdrop-blur-md"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Guidelines / PDF</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Quick Steps Card if available */}
            {item.quickSteps && item.quickSteps.length > 0 && (
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md">
                <h2 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <ListOrdered className="w-5 h-5 text-[#652a7c]" />
                  <span>Step-by-Step Procedure</span>
                </h2>

                <div className="space-y-3.5">
                  {item.quickSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <span className="w-7 h-7 rounded-full bg-[#652a7c] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Rich Content Article */}
            {item.content && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-md">
                <article
                  className="prose-content text-slate-800 text-xs sm:text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </div>
            )}

            {/* Official University Disclaimer */}
            <div className="bg-slate-100/80 rounded-2xl p-5 border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>University Advisory:</strong> Delhi University School of Open Learning (DU SOL) manages all student registrations, examination dates, and hall tickets via the official portal <a href="https://sol.du.ac.in" target="_blank" rel="noopener noreferrer" className="text-[#652a7c] underline font-bold">sol.du.ac.in</a>. Always verify information directly with the official university examination branch.
              </p>
            </div>
          </div>

          {/* Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Action Box */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#652a7c]" />
                <span>Portal Quick Access</span>
              </h3>

              <div className="space-y-2.5 text-xs">
                {item.externalLink && (
                  <a
                    href={item.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-purple-50 text-[#652a7c] font-bold hover:bg-purple-100 transition-colors"
                  >
                    <span>Direct Login Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <a
                  href="https://sol.du.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 text-slate-700 font-medium hover:bg-slate-100 transition-colors"
                >
                  <span>sol.du.ac.in Homepage</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <Link
                  href="/student-zone"
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 text-slate-700 font-medium hover:bg-slate-100 transition-colors"
                >
                  <span>View All Student Guides</span>
                  <ArrowLeft className="w-3.5 h-3.5 text-slate-400 rotate-180" />
                </Link>
              </div>
            </div>

            {/* Related Student Resources */}
            {relatedItems.length > 0 && (
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-4">
                <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                  <LifeBuoy className="w-4 h-4 text-[#652a7c]" />
                  <span>Other Student Resources</span>
                </h3>

                <div className="space-y-3">
                  {relatedItems.map((r) => (
                    <Link
                      key={r.id}
                      href={`/student-zone/${r.slug}`}
                      className="block p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="text-xs font-bold text-slate-900 group-hover:text-[#652a7c] transition-colors leading-snug">
                        {r.title}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                        {r.summary || r.category}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
