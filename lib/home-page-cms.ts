import { getDb } from "./firebase-admin";
import { HomePageContent } from "./home-page-types";
import { DEFAULT_HOME_PAGE_CONTENT } from "./home-page-defaults";

export { DEFAULT_HOME_PAGE_CONTENT };

async function ensureDynamic() {
  // standard dynamic lifecycle
}

// In-memory cache for homepage content to prevent exhausting Firestore quotas
let homePageCache: {
  content: HomePageContent;
  timestamp: number;
} | null = null;

const HOME_CACHE_TTL_MS = 60 * 1000; // 60s cache

export async function getHomePageContent(): Promise<HomePageContent> {
  const now = Date.now();
  if (homePageCache && now - homePageCache.timestamp < HOME_CACHE_TTL_MS) {
    return homePageCache.content;
  }

  await ensureDynamic();
  const db = getDb();
  if (!db) return homePageCache?.content || DEFAULT_HOME_PAGE_CONTENT;

  try {
    const doc = await db.collection("siteContent").doc("home").get();
    if (!doc.exists) {
      homePageCache = {
        content: DEFAULT_HOME_PAGE_CONTENT,
        timestamp: now,
      };
      return DEFAULT_HOME_PAGE_CONTENT;
    }
    const data = doc.data();
    const content: HomePageContent = {
      seo: { ...DEFAULT_HOME_PAGE_CONTENT.seo, ...(data?.seo || {}) },
      about: { ...DEFAULT_HOME_PAGE_CONTENT.about, ...(data?.about || {}) },
      notices: Array.isArray(data?.notices) ? data.notices : DEFAULT_HOME_PAGE_CONTENT.notices,
      programmes: {
        intro: data?.programmes?.intro || DEFAULT_HOME_PAGE_CONTENT.programmes.intro,
        bachelorCourses: Array.isArray(data?.programmes?.bachelorCourses)
          ? data.programmes.bachelorCourses
          : DEFAULT_HOME_PAGE_CONTENT.programmes.bachelorCourses,
        masterCourses: Array.isArray(data?.programmes?.masterCourses)
          ? data.programmes.masterCourses
          : DEFAULT_HOME_PAGE_CONTENT.programmes.masterCourses,
      },
      eligibility: { ...DEFAULT_HOME_PAGE_CONTENT.eligibility, ...(data?.eligibility || {}) },
      whyChoose: { ...DEFAULT_HOME_PAGE_CONTENT.whyChoose, ...(data?.whyChoose || {}) },
      admissionProcedure: { ...DEFAULT_HOME_PAGE_CONTENT.admissionProcedure, ...(data?.admissionProcedure || {}) },
      faqs: Array.isArray(data?.faqs) ? data.faqs : DEFAULT_HOME_PAGE_CONTENT.faqs,
      updatedAt: data?.updatedAt,
    };

    homePageCache = {
      content,
      timestamp: now,
    };
    return content;
  } catch (error: any) {
    const isQuota =
      error?.code === 8 ||
      error?.message?.includes("RESOURCE_EXHAUSTED") ||
      error?.details?.includes("Quota exceeded");
    if (!isQuota) {
      console.error("[getHomePageContent] Error:", error);
    }
    return homePageCache?.content || DEFAULT_HOME_PAGE_CONTENT;
  }
}

export async function saveHomePageContent(
  content: HomePageContent
): Promise<{ success: boolean; error?: string }> {
  await ensureDynamic();
  const db = getDb();
  if (!db) return { success: false, error: "Database not connected" };

  try {
    const payload = {
      ...content,
      updatedAt: new Date().toISOString(),
    };
    await db.collection("siteContent").doc("home").set(payload, { merge: true });
    // Invalidate in-memory cache so updates are immediately visible
    homePageCache = {
      content: payload,
      timestamp: Date.now(),
    };
    return { success: true };
  } catch (error: any) {
    console.error("[saveHomePageContent] Error:", error);
    return { success: false, error: error.message || "Failed to save homepage content" };
  }
}
