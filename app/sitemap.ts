import type { MetadataRoute } from "next";
import {
  getAllBlogs,
  getAllPrograms,
  getAllStudentZoneItems,
} from "@/lib/firestore-cms";

export const dynamic = "force-dynamic";
export const revalidate = 3600; // Revalidate sitemap cache hourly

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://dusol.edukyu.com")
  ).replace(/\/+$/, "");

  const currentDate = new Date();

  // 1. Static Core Landing Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/ug-programs`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pg-programs`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/courses/mba`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/student-zone`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-conditions`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];

  // 2. Fetch all published dynamic content from CMS
  const [blogs, ugPrograms, pgPrograms, mbaPrograms, studentZoneItems] =
    await Promise.all([
      getAllBlogs(true).catch(() => []),
      getAllPrograms("ug", true).catch(() => []),
      getAllPrograms("pg", true).catch(() => []),
      getAllPrograms("mba", true).catch(() => []),
      getAllStudentZoneItems(true).catch(() => []),
    ]);

  // 3. Dynamic Blogs
  const blogRoutes: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: blog.updatedAt ? new Date(blog.updatedAt) : currentDate,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // 4. Dynamic Undergraduate Programs
  const ugRoutes: MetadataRoute.Sitemap = ugPrograms.map((prog) => ({
    url: `${baseUrl}/ug-programs/${prog.slug}`,
    lastModified: prog.updatedAt ? new Date(prog.updatedAt) : currentDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // 5. Dynamic Postgraduate Programs
  const pgRoutes: MetadataRoute.Sitemap = pgPrograms.map((prog) => ({
    url: `${baseUrl}/pg-programs/${prog.slug}`,
    lastModified: prog.updatedAt ? new Date(prog.updatedAt) : currentDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // 6. Dynamic MBA Specializations & Courses
  const mbaRoutes: MetadataRoute.Sitemap = mbaPrograms.map((prog) => ({
    url: `${baseUrl}/courses/${prog.slug}`,
    lastModified: prog.updatedAt ? new Date(prog.updatedAt) : currentDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // 7. Dynamic Student Zone Resources
  const studentZoneRoutes: MetadataRoute.Sitemap = studentZoneItems.map((item) => ({
    url: `${baseUrl}/student-zone/${item.slug}`,
    lastModified: item.updatedAt ? new Date(item.updatedAt) : currentDate,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...ugRoutes,
    ...pgRoutes,
    ...mbaRoutes,
    ...blogRoutes,
    ...studentZoneRoutes,
  ];
}

