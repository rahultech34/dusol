import React from "react";
import { AdminLayoutWrapper } from "@/components/admin/AdminLayoutWrapper";
import { StudentZoneForm } from "@/components/admin/StudentZoneForm";
import { getCurrentAdmin } from "@/lib/auth";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function NewStudentZonePage() {
  const admin = await getCurrentAdmin();
  if (!admin) redirect("/admin/login");

  return (
    <AdminLayoutWrapper
      title="Create Student Zone Resource"
      subtitle="Add an official portal guide, hall ticket link, fee structure, or exam notice."
      adminEmail={admin.email}
      adminName={admin.name}
    >
      <StudentZoneForm />
    </AdminLayoutWrapper>
  );
}
