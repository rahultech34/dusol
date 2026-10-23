import React from "react";
import { notFound } from "next/navigation";
import { findProgramAnyType } from "@/lib/firestore-cms";
import { ProgramDetailPage } from "@/components/public/ProgramDetailPage";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ preview?: string }>;
}

export const dynamic = "force-dynamic";

async function findCourse(slug: string, isPreview = false) {
  return findProgramAnyType(slug, isPreview);
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { preview } = await searchParams;
  const isPreview = preview === "true";

  const program = await findCourse(slug, isPreview);

  if (!program) {
    return {
      title: "Course Not Found | DU SOL",
    };
  }

  return {
    title: program.seoTitle || `${program.name} | DU SOL Admission 2026`,
    description:
      program.seoDescription ||
      program.overview ||
      `Detailed syllabus, eligibility, and fees for ${program.name} from DU SOL.`,
    openGraph: {
      title: program.seoTitle || program.name,
      description: program.seoDescription || program.overview,
      images: program.featuredImage ? [{ url: program.featuredImage }] : undefined,
    },
  };
}

export default async function CourseDetailPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { preview } = await searchParams;
  const isPreview = preview === "true";

  const program = await findCourse(slug, isPreview);

  if (!program) {
    notFound();
  }

  return <ProgramDetailPage program={program} />;
}
