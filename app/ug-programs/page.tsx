import React from "react";
import { ProgramDirectoryPage } from "@/components/public/ProgramDirectoryPage";
import { getAllPrograms } from "@/lib/firestore-cms";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Undergraduate (UG) Programs 2026 | DU SOL School of Open Learning",
  description: "Direct admission to Bachelor of Arts (BA), BCom, BBA, BMS, and BLIS distance programs from Delhi University without CUET.",
};

export const dynamic = "force-dynamic";

export default async function PublicUGProgramsPage() {
  const programs = await getAllPrograms("ug", true);
  return <ProgramDirectoryPage type="ug" programs={programs} />;
}
