import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogBySlug, getAllBlogs } from "@/lib/firestore-cms";
import {
  Calendar,
  Clock,
  Tag,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { AdmissionForm } from "@/components/admission/AdmissionForm";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ preview?: string }>;
}

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug, true);

  if (!blog) {
    return {
      title: "Article Not Found | DU SOL",
    };
  }

  return {
    title: blog.seoTitle || `${blog.title} | DU SOL Admission Portal`,
    description: blog.seoDescription || blog.excerpt || "Read official DU SOL admission guides and academic updates.",
    keywords: blog.seoKeywords ? blog.seoKeywords.split(",").map((k) => k.trim()) : undefined,
    openGraph: {
      title: blog.seoTitle || blog.title,
      description: blog.seoDescription || blog.excerpt,
      images: blog.featuredImage ? [{ url: blog.featuredImage }] : undefined,
      type: "article",
      publishedTime: blog.publishedAt || blog.createdAt,
      authors: [blog.author],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.seoTitle || blog.title,
      description: blog.seoDescription || blog.excerpt,
      images: blog.featuredImage ? [blog.featuredImage] : undefined,
    },
  };
}

function calculateReadingTime(content: string): string {
  if (!content) return "3 min read";
  const clean = content.replace(/<[^>]*>/g, " ").trim();
  const words = clean.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(2, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export default async function BlogPostPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { preview } = await searchParams;
  const isPreview = preview === "true";

  const blog = await getBlogBySlug(slug, isPreview);

  if (!blog) {
    notFound();
  }

  // Fetch related blogs for recommendation
  const allBlogs = await getAllBlogs(true);
  const relatedBlogs = allBlogs.filter((b) => b.id !== blog.id).slice(0, 3);
  const readingTime = calculateReadingTime(blog.content);

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      {/* Draft/Preview Mode Banner */}
      {blog.status === "draft" && (
        <div className="bg-amber-400 text-slate-950 px-4 py-2 text-center text-xs font-bold tracking-wide">
          ⚠️ Admin Preview Mode — This article is currently a Draft and hidden from the public.
        </div>
      )}

      {/* Breadcrumb Header Bar */}
      <section className="bg-white border-b border-slate-200/80 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#652a7c] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <Link href="/blogs" className="hover:text-[#652a7c] transition-colors">
              Blogs
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <span className="text-slate-800 truncate max-w-[200px] sm:max-w-md font-semibold">
              {blog.title}
            </span>
          </nav>
        </div>
      </section>

      {/* 2-Column Main Section: Content on Left (8 cols), Sticky Form on Right (4 cols) */}
      <section className="py-8 sm:py-12 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* LEFT COLUMN: Main Blog Content (8 cols) */}
            <article className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-xs space-y-7">
              {/* Category & Read Time */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-50 text-[#652a7c] border border-purple-200/80">
                  <Sparkles className="w-3 h-3 text-[#652a7c]" />
                  <span>{blog.category || "Admission Guide"}</span>
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{readingTime}</span>
                </span>
              </div>

              {/* Main Title (H1) */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {blog.title}
              </h1>

              {/* Author & Published Date Meta Bar */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 py-3 border-y border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#652a7c] to-purple-800 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    {blog.author ? blog.author.charAt(0).toUpperCase() : "D"}
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">{blog.author || "Academic Desk"}</span>
                    <span className="text-[11px] text-slate-400">DU SOL Editorial Team</span>
                  </div>
                </div>

                <span className="text-slate-200 hidden sm:inline">•</span>

                <div className="flex items-center gap-1.5 text-slate-600">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span>
                    {new Date(blog.publishedAt || blog.createdAt).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>

              {/* Featured Image */}
              {blog.featuredImage && (
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 relative aspect-video w-full">
                  <Image
                    src={blog.featuredImage}
                    alt={blog.title}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              )}

              {/* Excerpt Callout Box */}
              {blog.excerpt && (
                <div className="p-5 rounded-2xl bg-purple-50/70 border-l-4 border-[#652a7c] text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
                  {blog.excerpt}
                </div>
              )}

              {/* Rich Content HTML Body */}
              <div
                className="prose-content text-slate-800 text-sm sm:text-base leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {/* Tags Section */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5 text-[#652a7c]" />
                    <span>Tags:</span>
                  </span>
                  {blog.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-slate-100 hover:bg-purple-50 hover:text-[#652a7c] text-slate-700 font-medium transition-colors cursor-default"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* In-Article Counseling Banner */}
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#652a7c] via-purple-900 to-indigo-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md mt-10">
                <div className="space-y-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/10 text-amber-300 border border-white/20 mb-1">
                    Free Admissions Help
                  </div>
                  <h3 className="font-extrabold text-lg sm:text-xl">
                    Need Guidance for Delhi University SOL?
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-200 max-w-md">
                    Our academic advisors provide free step-by-step assistance for eligibility, subject selection, and document verification.
                  </p>
                </div>
                <a
                  href="#sidebar-form"
                  className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 text-xs sm:text-sm font-bold shadow-lg transition-transform hover:scale-105 shrink-0"
                >
                  Apply Online Now
                </a>
              </div>
            </article>

            {/* RIGHT COLUMN: Sticky Form & Support Help (4 cols) */}
            <aside className="lg:col-span-4 w-full self-stretch">
              <div
                id="sidebar-form"
                className="lg:sticky lg:top-20 z-30 space-y-4 max-h-[calc(100vh-5.5rem)] overflow-y-auto pr-0.5 scrollbar-thin"
              >
                
                {/* Primary Sticky Form */}
                <AdmissionForm
                  formTitle="Apply for DU SOL Admission 2026-27"
                  formSubtitle="Free 1-on-1 Academic Counseling · Session 2026-27"
                  source="blog_sidebar"
                  sourceName={`Blog: ${blog.title}`}
                />

                {/* Trust Badges Card */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-3">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Why Choose DU SOL Counseling?</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>100% Free Guidance:</strong> Transparent course guidance with zero charges.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>UGC-DEB &amp; NAAC Accredited:</strong> Government-recognized Delhi University degree.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>No CUET Required:</strong> Direct online merit admission for UG programs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Syllabus &amp; Exam Updates:</strong> Instant alerts on deadlines, hall tickets &amp; results.</span>
                    </li>
                  </ul>
                </div>

                {/* Official Support Helpline Card */}
                <div className="bg-gradient-to-br from-purple-50 via-white to-indigo-50/40 rounded-2xl p-5 border border-purple-100 shadow-xs space-y-2.5">
                  <h4 className="text-xs font-bold text-[#652a7c] uppercase tracking-wider flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-[#652a7c]" />
                    <span>Official University Helplines</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Student Service Centre assistance for registrations, fees, and study material:
                  </p>
                  <div className="pt-1.5 space-y-2 text-xs">
                    <div className="flex items-center gap-2 font-bold text-slate-800">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                      <span>011-29572513 / 011-29572514</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Mail className="w-3.5 h-3.5 text-[#652a7c] shrink-0" />
                      <span className="font-semibold text-slate-700">ssc@du.ac.in</span>
                    </div>
                  </div>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* Related Admissions Guides Section */}
      {relatedBlogs.length > 0 && (
        <section className="py-12 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold text-[#652a7c] uppercase tracking-wider">Keep Reading</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">Related Admissions Guides</h3>
              </div>
              <Link
                href="/blogs"
                className="text-xs font-bold text-[#652a7c] hover:text-purple-900 inline-flex items-center gap-1 transition-colors"
              >
                <span>View All Articles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((item) => (
                <Link
                  key={item.id}
                  href={`/blogs/${item.slug}`}
                  className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-purple-300 hover:shadow-lg transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#652a7c] mb-2 block">
                      {item.category || "Guide"}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-[#652a7c] transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h4>
                    {item.excerpt && (
                      <p className="mt-2 text-xs text-slate-500 line-clamp-3 leading-relaxed">
                        {item.excerpt}
                      </p>
                    )}
                  </div>
                  <div className="mt-5 pt-3.5 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#652a7c]">
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
