import React from "react";
import { AdminLayoutWrapper } from "@/components/admin/AdminLayoutWrapper";
import { ProgramForm } from "@/components/admin/ProgramForm";
import { getCurrentAdmin } from "@/lib/auth";
import { getProgramById } from "@/lib/firestore-cms";
import { notFound, redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function EditPGProgramPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const admin = await getCurrentAdmin();
  if (!admin) redirect("/admin/login");

  const { id } = await params;
  const program = await getProgramById("pg", id);

  if (!program) {
    notFound();
  }

  return (
    <AdminLayoutWrapper
      title={`Edit: ${program.name}`}
      subtitle={`Last updated on ${new Date(program.updatedAt).toLocaleString()}`}
      adminEmail={admin.email}
      adminName={admin.name}
    >
      <ProgramForm type="pg" initialData={program} isEdit={true} />
    </AdminLayoutWrapper>
  );
}
