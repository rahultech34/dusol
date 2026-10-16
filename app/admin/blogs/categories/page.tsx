"use client";

import React, { useState, useEffect } from "react";
import { FolderTree, Plus, Trash2, CheckCircle2, AlertCircle } from "lucide-react";
import { AdminLayoutWrapper } from "@/components/admin/AdminLayoutWrapper";
import { Category } from "@/lib/types";
import { ImportExportButtons } from "@/components/admin/import-export/ImportExportButtons";

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/categories");
      const data = await res.json();
      if (res.ok) {
        setCategories(data.categories || []);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setSaving(true);
    try {
      const res = await fetch("/api/admin/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description }),
      });

      if (res.ok) {
        setName("");
        setDescription("");
        setFeedback({ type: "success", text: "Category added successfully!" });
        fetchCategories();
      } else {
        const data = await res.json();
        setFeedback({ type: "error", text: data.error || "Failed to add category." });
      }
    } catch (e: any) {
      setFeedback({ type: "error", text: e.message });
    } finally {
      setSaving(false);
      setTimeout(() => setFeedback(null), 3000);
    }
  };

  const handleDelete = async (slug: string) => {
    if (!confirm("Are you sure you want to delete this category?")) return;
    try {
      const res = await fetch(`/api/admin/categories?slug=${encodeURIComponent(slug)}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setCategories(categories.filter((c) => c.slug !== slug));
        setFeedback({ type: "success", text: "Category deleted." });
      }
    } catch (e) {
      setFeedback({ type: "error", text: "Failed to delete category." });
    } finally {
      setTimeout(() => setFeedback(null), 3000);
    }
  };

  return (
    <AdminLayoutWrapper
      title="Article & Course Categories"
      subtitle="Organize articles and programs into distinct topical categories."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left: Add Category Form (5 cols) */}
        <div className="md:col-span-5 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <FolderTree className="w-4 h-4 text-[#652a7c]" />
            <span>Add New Category</span>
          </h3>

          {feedback && (
            <div
              className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
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

          <form onSubmit={handleAdd} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Category Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Admission Updates"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#652a7c] outline-none text-xs sm:text-sm text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Description (Optional)
              </label>
              <textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Brief description of articles filed under this category..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#652a7c] outline-none text-xs sm:text-sm text-slate-900"
              />
            </div>

            <button
              type="submit"
              disabled={saving}
              className="w-full py-2.5 rounded-xl bg-[#652a7c] hover:bg-purple-900 text-white font-bold text-xs shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>{saving ? "Adding..." : "Add Category"}</span>
            </button>
          </form>
        </div>

        {/* Right: Existing Categories Table (7 cols) */}
        <div className="md:col-span-7 bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-base font-bold text-slate-900">
              Existing Categories ({categories.length})
            </h3>
            <ImportExportButtons
              section="categories"
              sectionTitle="Categories"
              totalCount={categories.length}
              onImportSuccess={fetchCategories}
            />
          </div>

          {loading ? (
            <div className="p-8 text-center text-xs text-slate-400">Loading categories...</div>
          ) : categories.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-400">
              No custom categories added yet. Default categories (Admissions, Courses, Exams, Results) will be used.
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {categories.map((c) => (
                <div
                  key={c.id}
                  className="p-4 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">{c.name}</h4>
                    <span className="text-[11px] text-slate-400 font-mono">slug: {c.slug}</span>
                    {c.description && (
                      <p className="text-xs text-slate-500 mt-1">{c.description}</p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDelete(c.slug)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                    title="Delete Category"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AdminLayoutWrapper>
  );
}
