import React from "react";
import { User, Shield, Mail, Key } from "lucide-react";
import { AdminLayoutWrapper } from "@/components/admin/AdminLayoutWrapper";
import { getCurrentAdmin } from "@/lib/auth";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function AdminProfilePage() {
  const admin = await getCurrentAdmin();
  if (!admin) redirect("/admin/login");

  return (
    <AdminLayoutWrapper
      title="Admin Profile"
      subtitle="View credentials and security privileges for this account."
      adminEmail={admin.email}
      adminName={admin.name}
    >
      <div className="max-w-3xl space-y-6">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
          <div className="flex items-center gap-4 pb-6 border-b border-slate-100">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#652a7c] to-purple-800 text-white flex items-center justify-center font-extrabold text-2xl shadow-md">
              {admin.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">{admin.name}</h3>
              <p className="text-xs text-slate-500">{admin.email}</p>
              <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-50 text-[#652a7c] border border-purple-200 text-[11px] font-bold">
                <Shield className="w-3 h-3" />
                <span className="capitalize">{admin.role}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-slate-400 block mb-1">Email Address</span>
              <span className="font-bold text-slate-900">{admin.email}</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-slate-400 block mb-1">System Role</span>
              <span className="font-bold text-slate-900 capitalize">{admin.role} Role</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-slate-400 block mb-1">Database Permissions</span>
              <span className="font-bold text-emerald-600">Full Cloud Firestore R/W Access</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-slate-400 block mb-1">Session Security</span>
              <span className="font-bold text-slate-900">Signed HTTP-Only JWT Cookie</span>
            </div>
          </div>
        </div>
      </div>
    </AdminLayoutWrapper>
  );
}
