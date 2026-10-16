import React from "react";
import { AdminLayoutWrapper } from "@/components/admin/AdminLayoutWrapper";
import { ProgramForm } from "@/components/admin/ProgramForm";
import { getCurrentAdmin } from "@/lib/auth";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function NewMBASpecializationPage() {
  const admin = await getCurrentAdmin();
  if (!admin) redirect("/admin/login");

  return (
    <AdminLayoutWrapper
      title="Create MBA Specialization"
      subtitle="Add a new distance MBA branch / specialization to DU SOL academic offerings."
      adminEmail={admin.email}
      adminName={admin.name}
    >
      <ProgramForm type="mba" />
    </AdminLayoutWrapper>
  );
}
