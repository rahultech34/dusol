import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogBySlug, getAllBlogs } from "@/lib/firestore-cms";
import { Calendar, User, ArrowLeft, Clock, Tag, Share2, ArrowRight } from "lucide-react";
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

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      {/* Draft/Preview Mode Banner */}
      {blog.status === "draft" && (
        <div className="bg-amber-400 text-slate-950 px-4 py-2 text-center text-xs font-bold tracking-wide">
          ⚠️ Admin Preview Mode — This article is currently a Draft and hidden from the public.
        </div>
      )}

      {/* Article Header & Breadcrumbs */}
      <section className="bg-white border-b border-slate-200/80 pt-8 pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
            <Link href="/" className="hover:text-[#652a7c]">
              Home
            </Link>
            <span>/</span>
            <Link href="/blogs" className="hover:text-[#652a7c]">
              Blogs
            </Link>
            <span>/</span>
            <span className="text-slate-800 truncate max-w-[200px] sm:max-w-md font-semibold">
              {blog.title}
            </span>
          </div>

          {/* Category Tag */}
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-50 text-[#652a7c] border border-purple-200 mb-4">
            {blog.category || "General"}
          </span>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {blog.title}
          </h1>

          {/* Author & Timestamp Bar */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#652a7c] text-white flex items-center justify-center font-bold text-xs">
                {blog.author.charAt(0).toUpperCase()}
              </div>
              <span className="font-semibold text-slate-900">{blog.author}</span>
            </div>

            <span className="text-slate-300">•</span>

            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>{new Date(blog.publishedAt || blog.createdAt).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-10 sm:py-14 flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          {blog.featuredImage && (
            <div className="mb-10 rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 relative aspect-video w-full">
              <Image
                src={blog.featuredImage}
                alt={blog.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          )}

          {/* Article Excerpt Callout */}
          {blog.excerpt && (
            <div className="mb-8 p-5 rounded-2xl bg-purple-50/60 border-l-4 border-[#652a7c] text-slate-800 text-sm sm:text-base leading-relaxed italic">
              {blog.excerpt}
            </div>
          )}

          {/* Rich Content HTML Body */}
          <div
            className="prose-content text-slate-800 text-sm sm:text-base leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-12 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                <Tag className="w-3.5 h-3.5" />
                <span>Tags:</span>
              </span>
              {blog.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Related Articles Section */}
      {relatedBlogs.length > 0 && (
        <section className="py-12 bg-white border-t border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Related Admissions Guides</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((item) => (
                <Link
                  key={item.id}
                  href={`/blogs/${item.slug}`}
                  className="bg-slate-50 hover:bg-white p-5 rounded-2xl border border-slate-200/80 hover:border-purple-300 hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#652a7c] mb-2 block">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#652a7c] transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h4>
                    {item.excerpt && (
                      <p className="mt-2 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {item.excerpt}
                      </p>
                    )}
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-[#652a7c]">
                    <span>Read Guide</span>
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
