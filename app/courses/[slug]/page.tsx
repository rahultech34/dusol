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

async function findCourse(slug: string, isPreview = false) {
  // 1. Try MBA Specialization
  let program = await getProgramBySlug("mba", slug, isPreview);
  if (program) return program;

  // 2. Try PG
  program = await getProgramBySlug("pg", slug, isPreview);
  if (program) return program;

  // 3. Try UG
  program = await getProgramBySlug("ug", slug, isPreview);
  if (program) return program;

  // 4. Try stripping prefixes
  const altSlug = slug.replace(/^(distance-|mba-)/, "");
  if (altSlug !== slug) {
    program =
      (await getProgramBySlug("mba", altSlug, isPreview)) ||
      (await getProgramBySlug("pg", altSlug, isPreview)) ||
      (await getProgramBySlug("ug", altSlug, isPreview));
    if (program) return program;
  }

  // 5. Try adding mba- or distance-
  program =
    (await getProgramBySlug("mba", `mba-${slug}`, isPreview)) ||
    (await getProgramBySlug("pg", `distance-${slug}`, isPreview)) ||
    (await getProgramBySlug("ug", `distance-${slug}`, isPreview));

  if (program) return program;

  // 6. Try known aliases/acronyms
  const acronymMap: Record<string, string> = {
    ba: "bachelor-of-arts",
    "distance-ba": "bachelor-of-arts",
    bcom: "bachelor-of-commerce",
    "distance-bcom": "bachelor-of-commerce",
    bba: "bachelor-of-business-administration",
    "distance-bba": "bachelor-of-business-administration",
    bms: "bachelor-of-management-studies",
    "distance-bms": "bachelor-of-management-studies",
    bca: "bachelor-of-computer-application",
    "distance-bca": "bachelor-of-computer-application",
    mba: "master-of-business-administration",
    "distance-mba": "master-of-business-administration",
    mcom: "master-of-commerce",
    "distance-mcom": "master-of-commerce",
    ma: "master-of-arts",
    "distance-ma": "master-of-arts",
    blis: "bachelor-of-library-and-information-science",
    "distance-blis": "bachelor-of-library-and-information-science",
    btech: "bachelor-of-technology",
    "distance-btech": "bachelor-of-technology",
    "online-btech": "bachelor-of-technology",
    "b-tech": "bachelor-of-technology",
    "bachelor-of-technology": "bachelor-of-technology",
    mlis: "master-of-library-and-information-science",
    "distance-mlis": "master-of-library-and-information-science",
    mjmc: "master-of-journalism-and-mass-communication",
    "distance-mjmc": "master-of-journalism-and-mass-communication",
    "online-mjmc": "master-of-journalism-and-mass-communication",
    "master-of-journalism": "master-of-journalism-and-mass-communication",
    "mba-it": "mba-information-technology",
    "distance-mba-it": "mba-information-technology",
    "online-mba-it": "mba-information-technology",
    "mba-in-information-technology": "mba-information-technology",
    "mba-analytics": "mba-business-analytics",
    "distance-mba-analytics": "mba-business-analytics",
    "online-mba-analytics": "mba-business-analytics",
    "mba-ba": "mba-business-analytics",
    "mba-in-business-analytics": "mba-business-analytics",
  };
  const mappedSlug = acronymMap[slug.toLowerCase()];
  if (mappedSlug) {
    program =
      (await getProgramBySlug("ug", mappedSlug, isPreview)) ||
      (await getProgramBySlug("pg", mappedSlug, isPreview)) ||
      (await getProgramBySlug("mba", mappedSlug, isPreview));
  }

  return program;
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
