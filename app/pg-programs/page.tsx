import React from "react";
import { ProgramDirectoryPage } from "@/components/public/ProgramDirectoryPage";
import { getAllPrograms } from "@/lib/firestore-cms";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Postgraduate (PG) Programs 2026 | DU SOL School of Open Learning",
  description: "Direct admission to Master of Arts (MA), MCom, MBA, and MLIS distance programs from University of Delhi.",
};

export const dynamic = "force-dynamic";

export default async function PublicPGProgramsPage() {
  const programs = await getAllPrograms("pg", true);
  return <ProgramDirectoryPage type="pg" programs={programs} />;
}
