"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  UploadCloud,
  Copy,
  Check,
  Trash2,
  Image as ImageIcon,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { AdminLayoutWrapper } from "@/components/admin/AdminLayoutWrapper";

export default function AdminMediaPage() {
  const [media, setMedia] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const fetchMedia = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/media");
      const data = await res.json();
      if (res.ok) {
        setMedia(data.media || []);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setFeedback(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setFeedback({ type: "success", text: "Image uploaded successfully!" });
        fetchMedia();
      } else {
        setFeedback({ type: "error", text: data.error || "Failed to upload image." });
      }
    } catch (err: any) {
      setFeedback({ type: "error", text: err.message || "Upload failed." });
    } finally {
      setUploading(false);
      setTimeout(() => setFeedback(null), 3000);
    }
  };

  const copyToClipboard = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this media asset?")) return;

    try {
      const res = await fetch(`/api/admin/media?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setMedia(media.filter((m) => m.id !== id));
        setFeedback({ type: "success", text: "Media asset deleted." });
      }
    } catch (e) {
      setFeedback({ type: "error", text: "Failed to delete asset." });
    } finally {
      setTimeout(() => setFeedback(null), 3000);
    }
  };

  return (
    <AdminLayoutWrapper
      title="Media Assets Library"
      subtitle="Upload banners, campus photos, and illustrations for blogs and courses."
    >
      <div className="space-y-6">
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

        {/* Upload Dropzone */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs">
          <label className="border-2 border-dashed border-slate-300 hover:border-[#652a7c] rounded-2xl p-8 flex flex-col items-center justify-center gap-3 cursor-pointer bg-slate-50/50 hover:bg-purple-50/20 transition-all text-center">
            <input
              type="file"
              accept="image/*"
              onChange={handleUpload}
              disabled={uploading}
              className="hidden"
            />
            {uploading ? (
              <div className="flex flex-col items-center gap-2">
                <span className="w-8 h-8 border-3 border-[#652a7c]/20 border-t-[#652a7c] rounded-full animate-spin" />
                <span className="text-xs font-bold text-slate-700">Uploading media to server...</span>
              </div>
            ) : (
              <>
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-[#652a7c] flex items-center justify-center">
                  <UploadCloud className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-sm font-bold text-slate-800 block">
                    Upload New Image Asset
                  </span>
                  <span className="text-xs text-slate-400 mt-0.5 block">
                    Supports JPG, PNG, WebP, SVG up to 5MB. Files are served via `/uploads/`
                  </span>
                </div>
              </>
            )}
          </label>
        </div>

        {/* Media Grid */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-base font-bold text-slate-900">
              Uploaded Files ({media.length})
            </h3>
          </div>

          {loading ? (
            <div className="py-12 text-center text-xs text-slate-400">Loading media library...</div>
          ) : media.length === 0 ? (
            <div className="py-12 text-center text-xs text-slate-400">
              No media files uploaded yet. Upload your first image above.
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {media.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 group flex flex-col justify-between"
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.url}
                      alt={item.name || "Media file"}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>

                  <div className="p-2.5 bg-white border-t border-slate-100 flex items-center justify-between gap-1">
                    <div className="truncate text-[11px] font-semibold text-slate-700">
                      {item.name || item.id}
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() => copyToClipboard(item.url, item.id)}
                        className="p-1 rounded-md text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                        title="Copy Image URL"
                      >
                        {copiedId === item.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDelete(item.id)}
                        className="p-1 rounded-md text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                        title="Delete Image"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AdminLayoutWrapper>
  );
}
