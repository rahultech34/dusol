import React from "react";
import { notFound } from "next/navigation";
import { getStudentZoneItemBySlug, getAllStudentZoneItems } from "@/lib/firestore-cms";
import { StudentZoneDetailPage } from "@/components/public/StudentZoneDetailPage";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ preview?: string }>;
}

export const dynamic = "force-dynamic";

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { preview } = await searchParams;
  const isPreview = preview === "true";

  const item = await getStudentZoneItemBySlug(slug, isPreview);
  if (!item) {
    return {
      title: "Resource Not Found | DU SOL Student Zone",
    };
  }

  return {
    title: item.seoTitle || `${item.title} | DU SOL Student Zone 2026-27`,
    description:
      item.seoDescription ||
      item.summary ||
      `Direct portal, step-by-step instructions, and updates for ${item.title} from Delhi University SOL.`,
    openGraph: {
      title: item.seoTitle || item.title,
      description: item.seoDescription || item.summary,
      images: item.featuredImage ? [{ url: item.featuredImage }] : undefined,
    },
  };
}

export default async function PublicStudentZoneItemPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { preview } = await searchParams;
  const isPreview = preview === "true";

  const item = await getStudentZoneItemBySlug(slug, isPreview);

  if (!item) {
    notFound();
  }

  const allItems = await getAllStudentZoneItems(true);
  const relatedItems = allItems.filter((i) => i.id !== item.id).slice(0, 3);

  return <StudentZoneDetailPage item={item} relatedItems={relatedItems} />;
}
