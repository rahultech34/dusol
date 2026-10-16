import React from "react";
import { AdminLayoutWrapper } from "@/components/admin/AdminLayoutWrapper";
import { BlogForm } from "@/components/admin/BlogForm";
import { getCurrentAdmin } from "@/lib/auth";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function NewBlogPage() {
  const admin = await getCurrentAdmin();
  if (!admin) redirect("/admin/login");

  return (
    <AdminLayoutWrapper
      title="Create New Blog Article"
      subtitle="Publish a fresh educational guide, announcement, or admissions post."
      adminEmail={admin.email}
      adminName={admin.name}
    >
      <BlogForm />
    </AdminLayoutWrapper>
  );
}
