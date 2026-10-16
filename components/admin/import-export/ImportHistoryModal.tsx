"use client";

import React, { useEffect, useState } from "react";
import { X, Clock, FileText, CheckCircle2, AlertCircle, FileCheck, Layers } from "lucide-react";
import { ImportHistoryItem } from "@/lib/doc-import/types";

interface ImportHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ImportHistoryModal({ isOpen, onClose }: ImportHistoryModalProps) {
  const [history, setHistory] = useState<ImportHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      fetch("/api/admin/import/history")
        .then((res) => res.json())
        .then((data) => {
          if (data.history) setHistory(data.history);
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-6 shadow-2xl border border-slate-200/80 max-h-[85vh] flex flex-col animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#652a7c] flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Document Import History</h2>
              <p className="text-xs text-slate-500">Audit trail of PDF and Word files processed through the CMS.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          {loading ? (
            <div className="py-16 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-slate-200 border-t-[#652a7c] mb-2" />
              <p className="text-xs text-slate-500">Loading audit history...</p>
            </div>
          ) : history.length === 0 ? (
            <div className="py-16 text-center">
              <FileText className="w-12 h-12 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-bold text-slate-800">No Document Imports Yet</p>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                Upload your first Word or PDF document using the &ldquo;Import Document&rdquo; button to automatically extract and populate content.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50/50">
                    <th className="py-2.5 px-3">File Name</th>
                    <th className="py-2.5 px-3">Section</th>
                    <th className="py-2.5 px-3">Saved Record Title</th>
                    <th className="py-2.5 px-3 text-center">Status</th>
                    <th className="py-2.5 px-3 text-right">Imported At</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {history.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-3 font-medium text-slate-900">
                        <div className="flex items-center gap-2">
                          <span className="uppercase text-[10px] font-extrabold px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-700">
                            {item.fileType || "doc"}
                          </span>
                          <span className="truncate max-w-[180px]" title={item.fileName}>
                            {item.fileName}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-purple-50 text-[#652a7c] uppercase">
                          {item.section}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-slate-700 truncate max-w-[200px]" title={item.recordTitle}>
                        {item.recordTitle || "Imported Record"}
                      </td>
                      <td className="py-3 px-3 text-center">
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold capitalize ${
                            item.status === "published"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : "bg-amber-50 text-amber-700 border border-amber-200"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              item.status === "published" ? "bg-emerald-500" : "bg-amber-500"
                            }`}
                          />
                          <span>{item.status}</span>
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right text-slate-400 font-mono text-[11px]">
                        {new Date(item.createdAt).toLocaleString(undefined, {
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
