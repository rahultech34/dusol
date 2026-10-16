import React from "react";
import { HomePageEditor } from "@/components/admin/HomePageEditor";
import { getCurrentAdmin } from "@/lib/auth";
import { getHomePageContent } from "@/lib/home-page-cms";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function AdminHomePage() {
  const admin = await getCurrentAdmin();
  if (!admin) redirect("/admin/login");

  const content = await getHomePageContent();

  return <HomePageEditor initialContent={content} />;
}
