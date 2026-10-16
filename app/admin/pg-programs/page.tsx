import React from "react";
import { ProgramListPage } from "@/components/admin/ProgramListPage";
import { getCurrentAdmin } from "@/lib/auth";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function AdminPGProgramsPage() {
  const admin = await getCurrentAdmin();
  if (!admin) redirect("/admin/login");

  return <ProgramListPage type="pg" />;
}
