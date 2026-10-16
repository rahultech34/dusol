import React from "react";
import Link from "next/link";
import {
  FileText,
  GraduationCap,
  BookOpen,
  PlusCircle,
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Database,
  ExternalLink,
  Layers,
  Award,
  LifeBuoy,
} from "lucide-react";
import { AdminLayoutWrapper } from "@/components/admin/AdminLayoutWrapper";
import { getCurrentAdmin } from "@/lib/auth";
import { getDashboardStats } from "@/lib/firestore-cms";
import { getFirebaseProjectId } from "@/lib/firebase-admin";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const admin = await getCurrentAdmin();
  if (!admin) {
    redirect("/admin/login");
  }

  const stats = await getDashboardStats();

  const statCards = [
    {
      title: "Total Blogs",
      value: stats.totalBlogs,
      subtitle: `${stats.publishedBlogs} Published · ${stats.draftBlogs} Drafts`,
      icon: FileText,
      color: "from-blue-600 to-indigo-600",
      textColor: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
      href: "/admin/blogs",
    },
    {
      title: "UG Programs",
      value: stats.totalUGPrograms,
      subtitle: `${stats.publishedUGPrograms} Published Degrees`,
      icon: GraduationCap,
      color: "from-[#652a7c] to-purple-800",
      textColor: "text-[#652a7c]",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-100",
      href: "/admin/ug-programs",
    },
    {
      title: "PG Programs",
      value: stats.totalPGPrograms,
      subtitle: `${stats.publishedPGPrograms} Published Degrees`,
      icon: BookOpen,
      color: "from-emerald-600 to-teal-700",
      textColor: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-100",
      href: "/admin/pg-programs",
    },
    {
      title: "MBA Specializations",
      value: stats.totalMBASpecializations,
      subtitle: `${stats.publishedMBASpecializations} Published Specializations`,
      icon: Award,
      color: "from-amber-600 to-orange-700",
      textColor: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-100",
      href: "/admin/mba-specializations",
    },
    {
      title: "Student Zone",
      value: stats.totalStudentZoneItems,
      subtitle: `${stats.publishedStudentZoneItems} Active Resources & Portals`,
      icon: LifeBuoy,
      color: "from-teal-600 to-cyan-700",
      textColor: "text-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-100",
      href: "/admin/student-zone",
    },
  ];

  return (
    <AdminLayoutWrapper
      title="Dashboard Overview"
      subtitle="Welcome back! Here is a summary of your website content and admissions data."
      adminEmail={admin.email}
      adminName={admin.name}
    >
      <div className="space-y-8">
        {/* Quick Welcome & Action Bar */}
        <div className="bg-linear-to-r from-slate-900 via-sky-950 to-[#652a7c] rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30 mb-3">
              DU SOL CMS Connected
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Hello, {admin.name} 👋
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Manage your academic offerings, publish new blog articles, and customize course curricula. Changes update live across the public DU SOL portal.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <Link
                href="/admin/blogs/new"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors shadow-md"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Create Blog</span>
              </Link>
              <Link
                href="/admin/ug-programs/new"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Add UG Program</span>
              </Link>
              <Link
                href="/admin/pg-programs/new"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Add PG Program</span>
              </Link>
              <Link
                href="/admin/mba-specializations/new"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Add MBA Specialization</span>
              </Link>
              <Link
                href="/admin/student-zone/new"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Add Student Resource</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Primary Metric Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {statCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Link
                key={idx}
                href={card.href}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`p-3 rounded-xl ${card.bgColor} ${card.textColor}`}>
                      <Icon className="w-6 h-6" />
                    </span>
                    <span className="text-xs font-semibold text-slate-400 group-hover:text-slate-700 flex items-center gap-1 transition-colors">
                      <span>View</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <div className="mt-4">
                    <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
                      {card.value}
                    </div>
                    <div className="text-xs font-bold text-slate-700 mt-1 uppercase tracking-wider">
                      {card.title}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-medium text-slate-500">
                  {card.subtitle}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Two-Column Grid: Recent Content Activity & System Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Recent Content Activity (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-base font-bold text-slate-900">Recently Updated Content</h3>
                <p className="text-xs text-slate-500">Latest modifications across blogs and programs</p>
              </div>
              <Link
                href="/admin/blogs"
                className="text-xs font-bold text-[#652a7c] hover:underline"
              >
                View all blogs →
              </Link>
            </div>

            {stats.recentActivity.length === 0 ? (
              <div className="text-center py-10 text-slate-400 text-xs">
                No recent activity recorded yet.
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {stats.recentActivity.map((item) => (
                  <div
                    key={item.id}
                    className="py-3.5 flex items-center justify-between gap-4 hover:bg-slate-50/80 px-2 rounded-xl transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className={`shrink-0 text-[10px] font-bold uppercase px-2 py-0.5 rounded-md ${
                          item.type === "blog"
                            ? "bg-blue-100 text-blue-800"
                            : item.type === "ug"
                            ? "bg-purple-100 text-purple-800"
                            : item.type === "pg"
                            ? "bg-emerald-100 text-emerald-800"
                            : item.type === "mba"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-teal-100 text-teal-800"
                        }`}
                      >
                        {item.type}
                      </span>
                      <div className="truncate">
                        <Link
                          href={item.href}
                          className="text-xs sm:text-sm font-semibold text-slate-900 hover:text-[#652a7c] truncate block"
                        >
                          {item.title}
                        </Link>
                        <div className="text-[11px] text-slate-400 flex items-center gap-2 mt-0.5">
                          <Clock className="w-3 h-3" />
                          <span>{new Date(item.updatedAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full capitalize ${
                          item.status === "published"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-amber-50 text-amber-700 border border-amber-200"
                        }`}
                      >
                        {item.status}
                      </span>

                      <Link
                        href={item.href}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                        title="Edit Item"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* System & Database Status Box (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Database className="w-4 h-4 text-[#652a7c]" />
                <span>Backend Status</span>
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                  <span className="text-slate-500">Database Engine</span>
                  <span className="font-semibold text-slate-900">Google Cloud Firestore</span>
                </div>
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                  <span className="text-slate-500">Project ID</span>
                  <span className="font-mono text-slate-900 font-semibold">{getFirebaseProjectId()}</span>
                </div>
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                  <span className="text-slate-500">Sync Status</span>
                  <span className="inline-flex items-center gap-1 font-bold text-emerald-600">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Real-Time Online</span>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Storage Directory</span>
                  <span className="font-mono text-slate-900">/public/uploads/</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50/60 rounded-2xl p-6 border border-purple-100 text-xs">
              <h4 className="font-bold text-[#652a7c] text-sm mb-2">Public Dynamic Routes</h4>
              <p className="text-slate-600 leading-relaxed">
                When you publish articles or programs, they automatically generate high-speed public pages with dynamic SEO metadata:
              </p>
              <ul className="mt-3 space-y-1.5 font-mono text-[11px] text-purple-900">
                <li>• /blogs/[slug]</li>
                <li>• /ug-programs/[slug]</li>
                <li>• /pg-programs/[slug]</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AdminLayoutWrapper>
  );
}
