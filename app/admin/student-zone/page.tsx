import React from "react";
import { StudentZoneListPage } from "@/components/admin/StudentZoneListPage";
import { getCurrentAdmin } from "@/lib/auth";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function AdminStudentZonePage() {
  const admin = await getCurrentAdmin();
  if (!admin) redirect("/admin/login");

  return <StudentZoneListPage />;
}
