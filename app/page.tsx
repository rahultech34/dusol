import { Metadata } from "next";
import { getHomePageContent } from "@/lib/home-page-cms";
import { HomeClient } from "@/components/home/HomeClient";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getHomePageContent();

  return {
    title: content.seo.title,
    description: content.seo.description,
    keywords: content.seo.keywords,
    openGraph: {
      title: content.seo.title,
      description: content.seo.description,
      type: "website",
      locale: "en_IN",
      siteName: "Edukyu DU SOL",
    },
    twitter: {
      card: "summary_large_image",
      title: content.seo.title,
      description: content.seo.description,
    },
  };
}

export default async function HomePage() {
  const content = await getHomePageContent();

  return <HomeClient content={content} />;
}
