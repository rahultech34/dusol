"use client";

import React, { useState } from "react";
import Image from "next/image";
import { UploadCloud, X, CheckCircle2, Image as ImageIcon, Link as LinkIcon } from "lucide-react";

interface ImageUploaderProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
}

export function ImageUploader({
  value,
  onChange,
  label = "Featured Image",
}: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [manualInput, setManualInput] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Upload failed");
        setUploading(false);
        return;
      }

      onChange(data.url);
      setUploading(false);
    } catch (err: any) {
      setError(err.message || "Failed to upload image");
      setUploading(false);
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
          {label}
        </label>
        <button
          type="button"
          onClick={() => setManualInput(!manualInput)}
          className="text-[11px] font-semibold text-[#652a7c] hover:underline"
        >
          {manualInput ? "Upload File" : "Paste Image URL"}
        </button>
      </div>

      {error && (
        <p className="text-xs text-rose-600 font-medium">{error}</p>
      )}

      {value ? (
        <div className="relative rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 group">
          <div className="relative aspect-video max-h-60 w-full overflow-hidden">
            <Image
              src={value}
              alt="Uploaded image preview"
              fill
              className="object-cover"
            />
          </div>
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute top-3 right-3 p-1.5 rounded-full bg-slate-900/80 text-white hover:bg-rose-600 transition-colors shadow-md"
            title="Remove image"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="p-3 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 truncate">
            <span className="truncate font-mono">{value}</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 ml-2" />
          </div>
        </div>
      ) : manualInput ? (
        <div className="flex items-center gap-2">
          <input
            type="url"
            placeholder="https://example.com/image.jpg"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#652a7c] focus:ring-2 focus:ring-[#652a7c]/10 outline-none text-xs sm:text-sm text-slate-900"
          />
        </div>
      ) : (
        <label className="border-2 border-dashed border-slate-300 hover:border-[#652a7c] rounded-2xl p-6 flex flex-col items-center justify-center gap-2 cursor-pointer bg-slate-50/50 hover:bg-purple-50/20 transition-all text-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            disabled={uploading}
            className="hidden"
          />
          {uploading ? (
            <div className="flex flex-col items-center gap-2">
              <span className="w-6 h-6 border-2 border-[#652a7c]/30 border-t-[#652a7c] rounded-full animate-spin" />
              <span className="text-xs font-semibold text-slate-600">Uploading image to server...</span>
            </div>
          ) : (
            <>
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#652a7c] flex items-center justify-center">
                <UploadCloud className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-700">
                Click to upload image
              </span>
              <span className="text-[11px] text-slate-400">
                PNG, JPG, WebP, SVG up to 5MB
              </span>
            </>
          )}
        </label>
      )}
    </div>
  );
}
