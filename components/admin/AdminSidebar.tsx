"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  FolderTree,
  GraduationCap,
  BookOpen,
  Image as ImageIcon,
  Settings,
  User,
  LogOut,
  ChevronDown,
  ExternalLink,
  ShieldCheck,
  X,
  Award,
  LifeBuoy,
  Globe,
} from "lucide-react";

interface AdminSidebarProps {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  adminEmail?: string;
  adminName?: string;
}

export function AdminSidebar({
  mobileOpen,
  setMobileOpen,
  adminEmail = "admin@distanceeducation.com",
  adminName = "Administrator",
}: AdminSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [blogsExpanded, setBlogsExpanded] = useState(pathname.startsWith("/admin/blogs"));
  const [ugExpanded, setUgExpanded] = useState(pathname.startsWith("/admin/ug-programs"));
  const [pgExpanded, setPgExpanded] = useState(pathname.startsWith("/admin/pg-programs"));
  const [mbaExpanded, setMbaExpanded] = useState(pathname.startsWith("/admin/mba-specializations"));
  const [studentZoneExpanded, setStudentZoneExpanded] = useState(pathname.startsWith("/admin/student-zone"));
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await fetch("/api/admin/auth/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch (e) {
      console.error(e);
      setIsLoggingOut(false);
    }
  };

  const isActive = (path: string, exact = true) => {
    return exact ? pathname === path : pathname.startsWith(path);
  };

  const navLinkClass = (active: boolean) =>
    `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
      active
        ? "bg-[#652a7c] text-white shadow-md shadow-[#652a7c]/20"
        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
    }`;

  const subNavLinkClass = (active: boolean) =>
    `flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
      active
        ? "bg-[#652a7c]/10 text-[#652a7c] font-bold"
        : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
    }`;

  const sidebarContent = (
    <div className="flex flex-col h-full bg-white border-r border-slate-200">
      {/* Brand Header */}
      <div className="h-16 px-5 border-b border-slate-100 flex items-center justify-between">
        <Link href="/admin/dashboard" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#652a7c] to-purple-600 flex items-center justify-center text-white shadow-sm">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-black text-slate-900 tracking-tight leading-none">
              DU SOL <span className="text-[#652a7c]">CMS</span>
            </div>
            <div className="text-[10px] text-slate-400 font-medium">Administration Console</div>
          </div>
        </Link>
        {mobileOpen && (
          <button
            onClick={() => setMobileOpen(false)}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 md:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto px-3.5 py-4 space-y-1.5">
        {/* Dashboard */}
        <Link
          href="/admin/dashboard"
          onClick={() => setMobileOpen(false)}
          className={navLinkClass(isActive("/admin/dashboard"))}
        >
          <LayoutDashboard className="w-4 h-4 shrink-0" />
          <span>Dashboard</span>
        </Link>

        {/* Home Page Content Manager */}
        <Link
          href="/admin/home-page"
          onClick={() => setMobileOpen(false)}
          className={navLinkClass(isActive("/admin/home-page"))}
        >
          <Globe className="w-4 h-4 shrink-0" />
          <span>Home Page</span>
        </Link>

        {/* Blogs Dropdown */}
        <div className="space-y-1">
          <button
            type="button"
            onClick={() => setBlogsExpanded(!blogsExpanded)}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              isActive("/admin/blogs", false)
                ? "text-[#652a7c] bg-[#652a7c]/5"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <div className="flex items-center gap-3">
              <FileText className="w-4 h-4 shrink-0" />
              <span>Blogs</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                blogsExpanded ? "rotate-180" : ""
              }`}
            />
          </button>

          {blogsExpanded && (
            <div className="pl-6 space-y-1 pt-0.5">
              <Link
                href="/admin/blogs"
                onClick={() => setMobileOpen(false)}
                className={subNavLinkClass(pathname === "/admin/blogs")}
              >
                <span>All Blogs</span>
              </Link>
              <Link
                href="/admin/blogs/new"
                onClick={() => setMobileOpen(false)}
                className={subNavLinkClass(pathname === "/admin/blogs/new")}
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Add New Blog</span>
              </Link>
              <Link
                href="/admin/blogs/categories"
                onClick={() => setMobileOpen(false)}
                className={subNavLinkClass(pathname === "/admin/blogs/categories")}
              >
                <FolderTree className="w-3.5 h-3.5" />
                <span>Categories</span>
              </Link>
            </div>
          )}
        </div>

        {/* UG Programs Dropdown */}
        <div className="space-y-1">
          <button
            type="button"
            onClick={() => setUgExpanded(!ugExpanded)}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              isActive("/admin/ug-programs", false)
                ? "text-[#652a7c] bg-[#652a7c]/5"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <div className="flex items-center gap-3">
              <GraduationCap className="w-4 h-4 shrink-0" />
              <span>UG Programs</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                ugExpanded ? "rotate-180" : ""
              }`}
            />
          </button>

          {ugExpanded && (
            <div className="pl-6 space-y-1 pt-0.5">
              <Link
                href="/admin/ug-programs"
                onClick={() => setMobileOpen(false)}
                className={subNavLinkClass(pathname === "/admin/ug-programs")}
              >
                <span>All UG Programs</span>
              </Link>
              <Link
                href="/admin/ug-programs/new"
                onClick={() => setMobileOpen(false)}
                className={subNavLinkClass(pathname === "/admin/ug-programs/new")}
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Add New UG Program</span>
              </Link>
            </div>
          )}
        </div>

        {/* PG Programs Dropdown */}
        <div className="space-y-1">
          <button
            type="button"
            onClick={() => setPgExpanded(!pgExpanded)}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              isActive("/admin/pg-programs", false)
                ? "text-[#652a7c] bg-[#652a7c]/5"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <div className="flex items-center gap-3">
              <BookOpen className="w-4 h-4 shrink-0" />
              <span>PG Programs</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                pgExpanded ? "rotate-180" : ""
              }`}
            />
          </button>

          {pgExpanded && (
            <div className="pl-6 space-y-1 pt-0.5">
              <Link
                href="/admin/pg-programs"
                onClick={() => setMobileOpen(false)}
                className={subNavLinkClass(pathname === "/admin/pg-programs")}
              >
                <span>All PG Programs</span>
              </Link>
              <Link
                href="/admin/pg-programs/new"
                onClick={() => setMobileOpen(false)}
                className={subNavLinkClass(pathname === "/admin/pg-programs/new")}
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Add New PG Program</span>
              </Link>
            </div>
          )}
        </div>

        {/* MBA Specializations Dropdown */}
        <div className="space-y-1">
          <button
            type="button"
            onClick={() => setMbaExpanded(!mbaExpanded)}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              isActive("/admin/mba-specializations", false)
                ? "text-[#652a7c] bg-[#652a7c]/5"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <div className="flex items-center gap-3">
              <Award className="w-4 h-4 shrink-0 text-amber-600" />
              <span>MBA Specializations</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                mbaExpanded ? "rotate-180" : ""
              }`}
            />
          </button>

          {mbaExpanded && (
            <div className="pl-6 space-y-1 pt-0.5">
              <Link
                href="/admin/mba-specializations"
                onClick={() => setMobileOpen(false)}
                className={subNavLinkClass(pathname === "/admin/mba-specializations")}
              >
                <span>All Specializations</span>
              </Link>
              <Link
                href="/admin/mba-specializations/new"
                onClick={() => setMobileOpen(false)}
                className={subNavLinkClass(pathname === "/admin/mba-specializations/new")}
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Add Specialization</span>
              </Link>
            </div>
          )}
        </div>

        {/* Student Zone Dropdown */}
        <div className="space-y-1">
          <button
            type="button"
            onClick={() => setStudentZoneExpanded(!studentZoneExpanded)}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              isActive("/admin/student-zone", false)
                ? "text-[#652a7c] bg-[#652a7c]/5"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <div className="flex items-center gap-3">
              <LifeBuoy className="w-4 h-4 shrink-0 text-teal-600" />
              <span>Student Zone</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                studentZoneExpanded ? "rotate-180" : ""
              }`}
            />
          </button>

          {studentZoneExpanded && (
            <div className="pl-6 space-y-1 pt-0.5">
              <Link
                href="/admin/student-zone"
                onClick={() => setMobileOpen(false)}
                className={subNavLinkClass(pathname === "/admin/student-zone")}
              >
                <span>All Student Resources</span>
              </Link>
              <Link
                href="/admin/student-zone/new"
                onClick={() => setMobileOpen(false)}
                className={subNavLinkClass(pathname === "/admin/student-zone/new")}
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Add New Resource</span>
              </Link>
            </div>
          )}
        </div>

        {/* Media Library */}
        <Link
          href="/admin/media"
          onClick={() => setMobileOpen(false)}
          className={navLinkClass(isActive("/admin/media"))}
        >
          <ImageIcon className="w-4 h-4 shrink-0" />
          <span>Media Library</span>
        </Link>

        {/* Settings */}
        <Link
          href="/admin/settings"
          onClick={() => setMobileOpen(false)}
          className={navLinkClass(isActive("/admin/settings"))}
        >
          <Settings className="w-4 h-4 shrink-0" />
          <span>Settings</span>
        </Link>

        {/* Profile */}
        <Link
          href="/admin/profile"
          onClick={() => setMobileOpen(false)}
          className={navLinkClass(isActive("/admin/profile"))}
        >
          <User className="w-4 h-4 shrink-0" />
          <span>Admin Profile</span>
        </Link>

        <div className="pt-4 border-t border-slate-100">
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:text-[#652a7c] hover:bg-purple-50 transition-colors"
          >
            <span>View Public Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* User Footer / Logout */}
      <div className="p-3 border-t border-slate-100 bg-slate-50/70">
        <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200/80 shadow-xs">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-8 h-8 rounded-full bg-[#652a7c] text-white flex items-center justify-center font-bold text-xs shrink-0">
              {adminName.charAt(0).toUpperCase()}
            </div>
            <div className="truncate">
              <div className="text-xs font-bold text-slate-900 truncate">{adminName}</div>
              <div className="text-[10px] text-slate-500 truncate">{adminEmail}</div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            disabled={isLoggingOut}
            title="Log Out"
            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="hidden md:block w-64 h-screen sticky top-0 shrink-0 z-30">
        {sidebarContent}
      </aside>

      {/* Mobile Off-canvas Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-72 bg-white shadow-2xl z-50 animate-in slide-in-from-left duration-200">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
