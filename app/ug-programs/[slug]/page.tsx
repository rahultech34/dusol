import React from "react";
import { notFound } from "next/navigation";
import { getProgramBySlug } from "@/lib/firestore-cms";
import { ProgramDetailPage } from "@/components/public/ProgramDetailPage";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ preview?: string }>;
}

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = await getProgramBySlug("ug", slug, true);

  if (!program) {
    return {
      title: "Program Not Found | DU SOL",
    };
  }

  return {
    title: program.seoTitle || `${program.name} | DU SOL Admission 2026`,
    description: program.seoDescription || program.overview || `Detailed syllabus, eligibility, and fees for ${program.name} from DU SOL.`,
    openGraph: {
      title: program.seoTitle || program.name,
      description: program.seoDescription || program.overview,
      images: program.featuredImage ? [{ url: program.featuredImage }] : undefined,
    },
  };
}

export default async function UGProgramDetailPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { preview } = await searchParams;
  const isPreview = preview === "true";

  const program = await getProgramBySlug("ug", slug, isPreview);

  if (!program) {
    notFound();
  }

  return <ProgramDetailPage program={program} />;
}
