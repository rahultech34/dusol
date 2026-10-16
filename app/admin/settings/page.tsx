"use client";

import React, { useState } from "react";
import { Settings, Save, CheckCircle2, Shield, Globe } from "lucide-react";
import { AdminLayoutWrapper } from "@/components/admin/AdminLayoutWrapper";

export default function AdminSettingsPage() {
  const [siteName, setSiteName] = useState("DU SOL Portal · School of Open Learning");
  const [helplineNumber, setHelplineNumber] = useState("+91 11 2700 8300");
  const [admissionsOpen, setAdmissionsOpen] = useState(true);
  const [academicSession, setAcademicSession] = useState("2026-2027");
  const [supportEmail, setSupportEmail] = useState("admissions@dusol.ac.in");
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <AdminLayoutWrapper
      title="Global Portal Settings"
      subtitle="Configure site-wide admissions metadata, contact info, and branding."
    >
      <div className="max-w-4xl space-y-6">
        {saved && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>Settings saved successfully!</span>
          </div>
        )}

        <form onSubmit={handleSave} className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <Settings className="w-5 h-5 text-[#652a7c]" />
            <h3 className="text-base font-bold text-slate-900">General Information</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Portal Brand Name
              </label>
              <input
                type="text"
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 outline-none text-xs sm:text-sm text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Current Academic Session
              </label>
              <input
                type="text"
                value={academicSession}
                onChange={(e) => setAcademicSession(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 outline-none text-xs sm:text-sm text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Support Helpline Phone
              </label>
              <input
                type="text"
                value={helplineNumber}
                onChange={(e) => setHelplineNumber(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 outline-none text-xs sm:text-sm text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Official Support Email
              </label>
              <input
                type="email"
                value={supportEmail}
                onChange={(e) => setSupportEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 outline-none text-xs sm:text-sm text-slate-900"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={admissionsOpen}
                onChange={(e) => setAdmissionsOpen(e.target.checked)}
                className="w-4 h-4 rounded text-[#652a7c] focus:ring-[#652a7c]"
              />
              <span className="text-xs sm:text-sm font-bold text-slate-900">
                Admissions 2026-27 Open (Displays active registration banners across website)
              </span>
            </label>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#652a7c] hover:bg-purple-900 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Save Settings</span>
            </button>
          </div>
        </form>
      </div>
    </AdminLayoutWrapper>
  );
}
