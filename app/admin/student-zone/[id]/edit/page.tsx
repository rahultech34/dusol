import React from "react";
import { AdminLayoutWrapper } from "@/components/admin/AdminLayoutWrapper";
import { StudentZoneForm } from "@/components/admin/StudentZoneForm";
import { getCurrentAdmin } from "@/lib/auth";
import { getStudentZoneItemById } from "@/lib/firestore-cms";
import { notFound, redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function EditStudentZonePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const admin = await getCurrentAdmin();
  if (!admin) redirect("/admin/login");

  const { id } = await params;
  const item = await getStudentZoneItemById(id);

  if (!item) {
    notFound();
  }

  return (
    <AdminLayoutWrapper
      title={`Edit: ${item.title}`}
      subtitle={`Manage links, step-by-step instructions, and guides. Last updated ${new Date(item.updatedAt).toLocaleString()}`}
      adminEmail={admin.email}
      adminName={admin.name}
    >
      <StudentZoneForm initialData={item} isEdit={true} />
    </AdminLayoutWrapper>
  );
}
