"use client";

import React, { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ShieldCheck, Lock, Mail, ArrowRight, Eye, EyeOff, AlertCircle } from "lucide-react";
import Link from "next/link";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("from") || "/admin/dashboard";

  const [email, setEmail] = useState("admin@distanceeducation.com");
  const [password, setPassword] = useState("admin123");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed. Please check your credentials.");
        setLoading(false);
        return;
      }

      // Successful login
      router.push(redirectTo);
      router.refresh();
    } catch (err: any) {
      setError("Network or server error. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20">
      {error && (
        <div className="mb-6 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Administrator Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Mail className="w-4 h-4" />
            </div>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-[#652a7c] focus:ring-2 focus:ring-[#652a7c]/20 outline-none text-sm text-slate-900 transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Lock className="w-4 h-4" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-200 focus:border-[#652a7c] focus:ring-2 focus:ring-[#652a7c]/20 outline-none text-sm text-slate-900 transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-2 py-3.5 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-[#652a7c] to-purple-800 hover:from-purple-900 hover:to-[#652a7c] text-white shadow-lg shadow-purple-900/30 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Verifying Credentials...</span>
            </>
          ) : (
            <>
              <span>Sign In to Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* Quick Credential Helper Note */}
      <div className="mt-6 pt-5 border-t border-slate-100 text-center">
        <p className="text-xs text-slate-500">
          Default administrator: <span className="font-semibold text-slate-700">admin@distanceeducation.com</span>
        </p>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-sky-950 to-[#652a7c] flex flex-col justify-center items-center p-4 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        {/* Brand Card Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 border border-white/20 text-white shadow-xl backdrop-blur-md mb-4">
            <ShieldCheck className="w-8 h-8 text-amber-400" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            DU SOL Admin Portal
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            Sign in to manage blogs, UG programs, and PG programs
          </p>
        </div>

        {/* Login Box in Suspense */}
        <Suspense
          fallback={
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-white/20 flex justify-center items-center min-h-[300px]">
              <div className="w-8 h-8 border-3 border-[#652a7c] border-t-transparent rounded-full animate-spin" />
            </div>
          }
        >
          <LoginForm />
        </Suspense>

        {/* Back to Site link */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-xs text-slate-400 hover:text-white transition-colors"
          >
            ← Return to public website
          </Link>
        </div>
      </div>
    </div>
  );
}
