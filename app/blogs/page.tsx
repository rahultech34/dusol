import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllBlogs } from "@/lib/firestore-cms";
import { Calendar, User, ArrowRight, BookOpen, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DU SOL Blogs & Admission Guides 2026 | School of Open Learning",
  description: "Stay updated with the latest DU SOL admission dates, syllabus, exam guidelines, fee structures, and student career resources.",
};

export const dynamic = "force-dynamic";

export default async function PublicBlogsPage() {
  const blogs = await getAllBlogs(true); // only published

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      {/* Hero Header */}
      <section className="bg-linear-to-b from-[#652a7c] via-purple-900 to-slate-900 text-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-amber-300 border border-white/20 mb-4 backdrop-blur-md">
            Academic Insights & Guides
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            DU SOL Student Blog & News
          </h1>
          <p className="mt-3 text-sm sm:text-base text-purple-200 max-w-2xl mx-auto">
            Comprehensive updates on University of Delhi School of Open Learning admissions, syllabus revisions, exam dates, and career roadmaps.
          </p>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-12 sm:py-16 flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {blogs.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8 max-w-md mx-auto">
              <BookOpen className="w-12 h-12 text-[#652a7c] mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-900">Articles Coming Soon</h3>
              <p className="text-xs text-slate-500 mt-1">
                Our academic team is currently preparing new admissions guides for the 2026-27 session.
              </p>
              <Link
                href="/"
                className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#652a7c] text-white text-xs font-bold"
              >
                Return to Home
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {blogs.map((blog) => (
                <article
                  key={blog.id}
                  className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Featured Image */}
                    {blog.featuredImage ? (
                      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                        <Image
                          src={blog.featuredImage}
                          alt={blog.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div className="aspect-video w-full bg-linear-to-tr from-purple-100 via-indigo-50 to-amber-50 flex items-center justify-center text-[#652a7c]">
                        <BookOpen className="w-10 h-10 opacity-40" />
                      </div>
                    )}

                    <div className="p-6">
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-[#652a7c] font-bold text-[11px]">
                          {blog.category || "Admissions"}
                        </span>
                        <span className="flex items-center gap-1 text-[11px]">
                          <Clock className="w-3 h-3" />
                          <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                        </span>
                      </div>

                      <h2 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#652a7c] transition-colors leading-snug">
                        <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                      </h2>

                      {blog.excerpt && (
                        <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                          {blog.excerpt}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-500 truncate max-w-[150px]">
                      By {blog.author}
                    </span>
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="font-bold text-[#652a7c] hover:text-purple-900 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
