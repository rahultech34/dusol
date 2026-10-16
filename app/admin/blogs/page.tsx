"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  PlusCircle,
  Search,
  Filter,
  Eye,
  Edit2,
  Trash2,
  AlertCircle,
  ExternalLink,
  CheckCircle2,
  Clock,
  FileText,
} from "lucide-react";
import { AdminLayoutWrapper } from "@/components/admin/AdminLayoutWrapper";
import { Blog } from "@/lib/types";
import { ImportExportButtons } from "@/components/admin/import-export/ImportExportButtons";

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/blogs");
      const data = await res.json();
      if (res.ok) {
        setBlogs(data.blogs || []);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id: string) => {
    setDeleting(true);
    try {
      const res = await fetch(`/api/admin/blogs/${id}`, { method: "DELETE" });
      if (res.ok) {
        setBlogs(blogs.filter((b) => b.id !== id));
        setFeedback({ type: "success", text: "Blog deleted successfully." });
      } else {
        setFeedback({ type: "error", text: "Failed to delete blog." });
      }
    } catch (e) {
      setFeedback({ type: "error", text: "Network error while deleting." });
    } finally {
      setDeleting(false);
      setDeleteId(null);
      setTimeout(() => setFeedback(null), 3500);
    }
  };

  const handleTogglePublish = async (blog: Blog) => {
    const nextStatus = blog.status === "published" ? "draft" : "published";
    try {
      const res = await fetch(`/api/admin/blogs/${blog.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...blog, status: nextStatus }),
      });
      if (res.ok) {
        setBlogs(blogs.map((b) => (b.id === blog.id ? { ...b, status: nextStatus } : b)));
        setFeedback({
          type: "success",
          text: `Blog ${nextStatus === "published" ? "published" : "moved to drafts"}.`,
        });
        setTimeout(() => setFeedback(null), 3000);
      }
    } catch (e) {
      setFeedback({ type: "error", text: "Failed to update publication status." });
    }
  };

  // Derive categories
  const categories = Array.from(new Set(blogs.map((b) => b.category || "General")));

  // Filter blogs
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.slug.toLowerCase().includes(search.toLowerCase()) ||
      blog.author.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "all" ? true : blog.status === statusFilter;

    const matchesCategory =
      categoryFilter === "all" ? true : blog.category === categoryFilter;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <AdminLayoutWrapper
      title="Blog Articles Management"
      subtitle="Create, edit, publish, and manage public DU SOL articles and admission guides."
    >
      <div className="space-y-6">
        {/* Top Action Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-extrabold text-slate-900">
              All Articles ({blogs.length})
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <ImportExportButtons
              section="blogs"
              sectionTitle="Blogs"
              totalCount={blogs.length}
              selectedIds={selectedIds}
              onImportSuccess={fetchBlogs}
            />

            <Link
              href="/admin/blogs/new"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#652a7c] hover:bg-purple-900 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Write New Blog</span>
            </Link>
          </div>
        </div>

        {feedback && (
          <div
            className={`p-3.5 rounded-xl text-xs sm:text-sm flex items-center gap-2.5 ${
              feedback.type === "success"
                ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                : "bg-rose-50 text-rose-800 border border-rose-200"
            }`}
          >
            {feedback.type === "success" ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            ) : (
              <AlertCircle className="w-4 h-4 text-rose-600" />
            )}
            <span>{feedback.text}</span>
          </div>
        )}

        {/* Search & Filter Toolbar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by title, slug, or author..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:border-[#652a7c] focus:ring-2 focus:ring-[#652a7c]/10 outline-none text-xs sm:text-sm text-slate-900"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2 text-xs">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 text-xs font-semibold outline-none focus:border-[#652a7c]"
              >
                <option value="all">All Statuses</option>
                <option value="published">Published</option>
                <option value="draft">Drafts</option>
                <option value="scheduled">Scheduled</option>
              </select>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-3 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 text-xs font-semibold outline-none focus:border-[#652a7c]"
              >
                <option value="all">All Categories</option>
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Table of Blogs */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
          {loading ? (
            <div className="p-12 text-center flex flex-col items-center justify-center gap-3">
              <span className="w-8 h-8 border-3 border-[#652a7c]/20 border-t-[#652a7c] rounded-full animate-spin" />
              <p className="text-xs text-slate-500 font-medium">Loading blogs from Firestore...</p>
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="p-12 text-center flex flex-col items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#652a7c] flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900">No blog articles found</h4>
              <p className="text-xs text-slate-500 max-w-sm">
                {search || statusFilter !== "all"
                  ? "Try adjusting your search terms or filters."
                  : "Start by creating your very first article for DU SOL."}
              </p>
              <Link
                href="/admin/blogs/new"
                className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#652a7c] text-white text-xs font-bold shadow-sm"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Create Blog</span>
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 border-b border-slate-100 text-slate-500 uppercase tracking-wider text-[11px] font-bold">
                  <tr>
                    <th className="pl-5 pr-2 py-3.5 w-10">
                      <input
                        type="checkbox"
                        checked={filteredBlogs.length > 0 && selectedIds.length === filteredBlogs.length}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedIds(filteredBlogs.map((b) => b.id));
                          } else {
                            setSelectedIds([]);
                          }
                        }}
                        className="rounded border-slate-300 text-[#652a7c] focus:ring-[#652a7c] cursor-pointer"
                        title="Select All"
                      />
                    </th>
                    <th className="px-4 py-3.5">Title & Slug</th>
                    <th className="px-5 py-3.5">Category</th>
                    <th className="px-5 py-3.5">Author</th>
                    <th className="px-5 py-3.5">Status</th>
                    <th className="px-5 py-3.5">Date</th>
                    <th className="px-5 py-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredBlogs.map((blog) => (
                    <tr
                      key={blog.id}
                      className={`hover:bg-slate-50/60 transition-colors ${
                        selectedIds.includes(blog.id) ? "bg-purple-50/30" : ""
                      }`}
                    >
                      <td className="pl-5 pr-2 py-4">
                        <input
                          type="checkbox"
                          checked={selectedIds.includes(blog.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedIds([...selectedIds, blog.id]);
                            } else {
                              setSelectedIds(selectedIds.filter((id) => id !== blog.id));
                            }
                          }}
                          className="rounded border-slate-300 text-[#652a7c] focus:ring-[#652a7c] cursor-pointer"
                        />
                      </td>
                      <td className="px-4 py-4 max-w-xs sm:max-w-md">
                        <Link
                          href={`/admin/blogs/${blog.id}/edit`}
                          className="font-bold text-slate-900 hover:text-[#652a7c] block truncate"
                        >
                          {blog.title}
                        </Link>
                        <span className="text-[11px] text-slate-400 font-mono truncate block mt-0.5">
                          /blogs/{blog.slug}
                        </span>
                      </td>

                      <td className="px-5 py-4 whitespace-nowrap">
                        <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-semibold text-[11px]">
                          {blog.category || "General"}
                        </span>
                      </td>

                      <td className="px-5 py-4 whitespace-nowrap text-slate-600">
                        {blog.author}
                      </td>

                      <td className="px-5 py-4 whitespace-nowrap">
                        <button
                          type="button"
                          onClick={() => handleTogglePublish(blog)}
                          title="Click to toggle publish status"
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold cursor-pointer transition-colors ${
                            blog.status === "published"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100"
                              : blog.status === "scheduled"
                              ? "bg-sky-50 text-sky-700 border border-sky-200 hover:bg-sky-100"
                              : "bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              blog.status === "published"
                                ? "bg-emerald-500"
                                : blog.status === "scheduled"
                                ? "bg-sky-500"
                                : "bg-amber-500"
                            }`}
                          />
                          <span className="capitalize">{blog.status}</span>
                        </button>
                      </td>

                      <td className="px-5 py-4 whitespace-nowrap text-slate-500 text-[11px]">
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </td>

                      <td className="px-5 py-4 whitespace-nowrap text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <Link
                            href={`/blogs/${blog.slug}`}
                            target="_blank"
                            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                            title="Preview Public Page"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Link>

                          <Link
                            href={`/admin/blogs/${blog.id}/edit`}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                            title="Edit Blog"
                          >
                            <Edit2 className="w-4 h-4" />
                          </Link>

                          <button
                            type="button"
                            onClick={() => setDeleteId(blog.id)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                            title="Delete Blog"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-sm w-full shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-150">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
              <Trash2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Delete this blog post?</h3>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              This action cannot be undone. The article and its public route will be permanently removed from Firestore.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setDeleteId(null)}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={deleting}
                onClick={() => handleDelete(deleteId)}
                className="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md shadow-rose-600/20 transition-colors cursor-pointer disabled:opacity-50"
              >
                {deleting ? "Deleting..." : "Confirm Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayoutWrapper>
  );
}
