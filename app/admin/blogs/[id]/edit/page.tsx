import React from "react";
import { AdminLayoutWrapper } from "@/components/admin/AdminLayoutWrapper";
import { BlogForm } from "@/components/admin/BlogForm";
import { getCurrentAdmin } from "@/lib/auth";
import { getBlogById } from "@/lib/firestore-cms";
import { notFound, redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function EditBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const admin = await getCurrentAdmin();
  if (!admin) redirect("/admin/login");

  const { id } = await params;
  const blog = await getBlogById(id);

  if (!blog) {
    notFound();
  }

  return (
    <AdminLayoutWrapper
      title={`Edit: ${blog.title}`}
      subtitle={`Last updated on ${new Date(blog.updatedAt).toLocaleString()}`}
      adminEmail={admin.email}
      adminName={admin.name}
    >
      <BlogForm initialData={blog} isEdit={true} />
    </AdminLayoutWrapper>
  );
}
