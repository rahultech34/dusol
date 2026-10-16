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
  CheckCircle2,
  ExternalLink,
  BookOpen,
  LifeBuoy,
  FileCheck,
  Globe,
  Layers,
} from "lucide-react";
import { AdminLayoutWrapper } from "@/components/admin/AdminLayoutWrapper";
import { StudentZoneItem } from "@/lib/types";
import { ImportExportButtons } from "./import-export/ImportExportButtons";
import { notifyNavUpdated } from "@/components/navbar/useNavData";

export function StudentZoneListPage() {
  const [items, setItems] = useState<StudentZoneItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/student-zone");
      const data = await res.json();
      if (res.ok) {
        setItems(data.items || []);
      }
    } catch (e) {
      console.error("Error fetching student zone items:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleDelete = async (id: string) => {
    setDeleting(true);
    try {
      const res = await fetch(`/api/admin/student-zone/${id}`, { method: "DELETE" });
      if (res.ok) {
        setItems(items.filter((item) => item.id !== id));
        notifyNavUpdated();
        setFeedback({ type: "success", text: "Student Zone resource deleted successfully." });
      } else {
        setFeedback({ type: "error", text: "Failed to delete item." });
      }
    } catch (e) {
      setFeedback({ type: "error", text: "Network error while deleting item." });
    } finally {
      setDeleting(false);
      setDeleteId(null);
      setTimeout(() => setFeedback(null), 3000);
    }
  };

  const handleTogglePublish = async (item: StudentZoneItem) => {
    const nextStatus = item.status === "published" ? "draft" : "published";
    try {
      const res = await fetch(`/api/admin/student-zone/${item.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...item, status: nextStatus }),
      });
      if (res.ok) {
        setItems(
          items.map((i) => (i.id === item.id ? { ...i, status: nextStatus } : i))
        );
        notifyNavUpdated();
        setFeedback({
          type: "success",
          text: `Resource marked as ${nextStatus}.`,
        });
      } else {
        setFeedback({ type: "error", text: "Failed to update status." });
      }
    } catch (e) {
      setFeedback({ type: "error", text: "Network error updating status." });
    } finally {
      setTimeout(() => setFeedback(null), 3000);
    }
  };

  const categories = Array.from(new Set(items.map((i) => i.category || "General"))).filter(Boolean);

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.slug.toLowerCase().includes(search.toLowerCase()) ||
      item.summary.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || (item.category || "General") === categoryFilter;
    const matchesStatus =
      statusFilter === "all" || item.status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const publishedCount = items.filter((i) => i.status === "published").length;
  const draftCount = items.filter((i) => i.status === "draft").length;

  return (
    <AdminLayoutWrapper
      title="Student Zone Resources"
      subtitle="Manage admission notices, syllabus links, hall ticket portals, fee charts, and student guides."
    >
      <div className="space-y-6">
        {/* Feedback Message */}
        {feedback && (
          <div
            className={`p-4 rounded-xl flex items-center gap-3 text-sm font-medium animate-in fade-in ${
              feedback.type === "success"
                ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                : "bg-rose-50 text-rose-800 border border-rose-200"
            }`}
          >
            {feedback.type === "success" ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
            )}
            <span>{feedback.text}</span>
          </div>
        )}

        {/* Top Metric Bar & Action */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-[#652a7c] flex items-center justify-center shrink-0">
              <LifeBuoy className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">
                {items.length} Student Zone Resources
              </h2>
              <div className="flex items-center gap-3 text-xs text-slate-500 mt-0.5">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  {publishedCount} Published
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  {draftCount} Drafts
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
            <ImportExportButtons
              section="student-zone"
              sectionTitle="Student Zone"
              totalCount={items.length}
              selectedIds={selectedIds}
              onImportSuccess={fetchItems}
            />

            <Link
              href="/student-zone"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition-colors"
            >
              <Eye className="w-4 h-4 text-slate-400" />
              <span>View Public</span>
            </Link>
            <Link
              href="/admin/student-zone/new"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#652a7c] hover:bg-[#522265] text-white text-xs font-bold transition-colors shadow-md shadow-[#652a7c]/20 w-full sm:w-auto"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Add Resource</span>
            </Link>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search resource title or slug..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-[#652a7c] focus:bg-white transition-all text-slate-800"
            />
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            {categories.length > 0 && (
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-3 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-[#652a7c] text-slate-700 font-medium"
              >
                <option value="all">All Categories</option>
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            )}

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-[#652a7c] text-slate-700 font-medium"
            >
              <option value="all">All Statuses</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>
        </div>

        {/* Resources Table */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
          {loading ? (
            <div className="py-20 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-slate-200 border-t-[#652a7c] mb-3" />
              <p className="text-xs text-slate-500 font-medium">Loading Student Zone resources...</p>
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="py-16 text-center">
              <LifeBuoy className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-sm font-bold text-slate-900">No resources found</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                {search || categoryFilter !== "all" || statusFilter !== "all"
                  ? "Try adjusting your search query or filters."
                  : "Get started by adding your first Student Zone guide, portal link, or notification."}
              </p>
              <Link
                href="/admin/student-zone/new"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl bg-[#652a7c] text-white text-xs font-semibold shadow-xs hover:bg-[#522265]"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Add Resource</span>
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/70 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="pl-4 pr-2 py-3 w-10">
                      <input
                        type="checkbox"
                        checked={filteredItems.length > 0 && selectedIds.length === filteredItems.length}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedIds(filteredItems.map((i) => i.id));
                          } else {
                            setSelectedIds([]);
                          }
                        }}
                        className="rounded border-slate-300 text-[#652a7c] focus:ring-[#652a7c] cursor-pointer"
                        title="Select All"
                      />
                    </th>
                    <th className="py-3 px-3">Resource / Title</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Direct Portal Link</th>
                    <th className="py-3 px-4 text-center">Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {filteredItems.map((item) => (
                    <tr
                      key={item.id}
                      className={`hover:bg-slate-50/80 transition-colors group ${
                        selectedIds.includes(item.id) ? "bg-purple-50/30" : ""
                      }`}
                    >
                      <td className="pl-4 pr-2 py-3.5">
                        <input
                          type="checkbox"
                          checked={selectedIds.includes(item.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedIds([...selectedIds, item.id]);
                            } else {
                              setSelectedIds(selectedIds.filter((id) => id !== item.id));
                            }
                          }}
                          className="rounded border-slate-300 text-[#652a7c] focus:ring-[#652a7c] cursor-pointer"
                        />
                      </td>
                      <td className="py-3.5 px-3 max-w-xs">
                        <div className="font-bold text-slate-900 group-hover:text-[#652a7c] transition-colors">
                          {item.title}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1 font-mono">
                          <span>/student-zone/{item.slug}</span>
                        </div>
                        {item.summary && (
                          <div className="text-[11px] text-slate-500 line-clamp-1 mt-1">
                            {item.summary}
                          </div>
                        )}
                      </td>

                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold bg-purple-50 text-[#652a7c] border border-purple-200/50">
                          {item.category || "General"}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 text-slate-600">
                        {item.externalLink ? (
                          <a
                            href={item.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[#652a7c] hover:underline font-medium text-[11px]"
                          >
                            <Globe className="w-3.5 h-3.5" />
                            <span className="truncate max-w-[180px]">{item.externalLink.replace(/^https?:\/\//, "")}</span>
                            <ExternalLink className="w-3 h-3 shrink-0" />
                          </a>
                        ) : (
                          <span className="text-slate-400 italic text-[11px]">Internal Guide</span>
                        )}
                      </td>

                      <td className="py-3.5 px-4 text-center">
                        <button
                          type="button"
                          onClick={() => handleTogglePublish(item)}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide capitalize transition-colors cursor-pointer ${
                            item.status === "published"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100"
                              : "bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              item.status === "published" ? "bg-emerald-500" : "bg-amber-500"
                            }`}
                          />
                          <span>{item.status}</span>
                        </button>
                      </td>

                      <td className="py-3.5 px-4 text-right">
                        <div className="inline-flex items-center gap-1 justify-end">
                          <Link
                            href={`/student-zone/${item.slug}`}
                            target="_blank"
                            title="Preview Public Page"
                            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                          >
                            <Eye className="w-4 h-4" />
                          </Link>

                          <Link
                            href={`/admin/student-zone/${item.id}/edit`}
                            title="Edit Resource"
                            className="p-1.5 rounded-lg text-slate-400 hover:text-[#652a7c] hover:bg-purple-50 transition-colors"
                          >
                            <Edit2 className="w-4 h-4" />
                          </Link>

                          <button
                            type="button"
                            onClick={() => setDeleteId(item.id)}
                            title="Delete Resource"
                            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
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
        <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 animate-in zoom-in-95">
            <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Delete Student Zone Resource?</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Are you sure you want to delete this resource? Students will no longer be able to access the guide or portal links from the website.
            </p>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setDeleteId(null)}
                disabled={deleting}
                className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => handleDelete(deleteId)}
                disabled={deleting}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold flex items-center gap-2"
              >
                {deleting ? "Deleting..." : "Delete Resource"}
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayoutWrapper>
  );
}
