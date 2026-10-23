import { getDb } from "./firebase-admin";
import type { Query, QueryDocumentSnapshot } from "firebase-admin/firestore";
import { Blog, Program, Category, MediaItem, StudentZoneItem, DashboardStats, Lead } from "./types";
import { HomePageContent } from "./home-page-types";
import {
  getDefaultPrograms,
  getDefaultProgramBySlug,
  getDefaultProgramById,
  ACRONYM_MAP,
} from "./default-programs";
import slugify from "slugify";
async function ensureDynamic() {
  // standard dynamic lifecycle
}

// Helper to ensure clean, URL-safe unique slugs
export function generateSlug(text: string): string {
  return slugify(text, {
    lower: true,
    strict: true,
    trim: true,
  });
}

let lastQuotaWarningTime = 0;
const QUOTA_WARNING_COOLDOWN_MS = 60 * 1000;

export function handleFirestoreError(context: string, error: any) {
  const isQuotaExceeded =
    error?.code === 8 ||
    error?.message?.includes("RESOURCE_EXHAUSTED") ||
    error?.details?.includes("Quota exceeded");

  if (isQuotaExceeded) {
    const now = Date.now();
    if (now - lastQuotaWarningTime > QUOTA_WARNING_COOLDOWN_MS) {
      lastQuotaWarningTime = now;
      console.warn(
        `[Firestore Notice] Quota exceeded on Firebase Spark plan (${context}). Serving cached/fallback data. (Switch to Blaze plan to lift limit)`
      );
    }
  } else {
    console.error(`[${context}] Error:`, error);
  }
}

// ---------------- BLOGS ----------------

export async function getAllBlogs(onlyPublished = false): Promise<Blog[]> {
  await ensureDynamic();
  const db = getDb();
  if (!db) return [];
  try {
    let query: Query = db.collection("blogs");
    if (onlyPublished) {
      query = query.where("status", "==", "published");
    }
    const snapshot = await query.get();
    const blogs: Blog[] = [];

    snapshot.forEach((doc: QueryDocumentSnapshot) => {
      const data = doc.data();
      blogs.push({
        id: doc.id,
        title: data.title || "",
        slug: data.slug || doc.id,
        excerpt: data.excerpt || "",
        content: data.content || "",
        featuredImage: data.featuredImage || "",
        author: data.author || "DU SOL Editorial Team",
        category: data.category || "General",
        tags: Array.isArray(data.tags) ? data.tags : [],
        status: data.status || (data.isPublished === false ? "draft" : "published"),
        scheduledDate: data.scheduledDate,
        publishedAt: data.publishedAt || data.createdAt,
        createdAt: data.createdAt || new Date().toISOString(),
        updatedAt: data.updatedAt || new Date().toISOString(),
        seoTitle: data.seoTitle,
        seoDescription: data.seoDescription,
        seoKeywords: data.seoKeywords,
        ogImage: data.ogImage,
      });
    });

    // Sort by createdAt descending
    blogs.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return blogs;
  } catch (error) {
    handleFirestoreError("getAllBlogs", error);
    return [];
  }
}

export async function getBlogById(id: string): Promise<Blog | null> {
  await ensureDynamic();
  const db = getDb();
  if (!db) return null;
  try {
    const doc = await db.collection("blogs").doc(id).get();
    if (!doc.exists) return null;
    const data = doc.data()!;
    return {
      id: doc.id,
      title: data.title || "",
      slug: data.slug || doc.id,
      excerpt: data.excerpt || "",
      content: data.content || "",
      featuredImage: data.featuredImage || "",
      author: data.author || "DU SOL Editorial Team",
      category: data.category || "General",
      tags: Array.isArray(data.tags) ? data.tags : [],
      status: data.status || "draft",
      scheduledDate: data.scheduledDate,
      publishedAt: data.publishedAt,
      createdAt: data.createdAt || new Date().toISOString(),
      updatedAt: data.updatedAt || new Date().toISOString(),
      seoTitle: data.seoTitle,
      seoDescription: data.seoDescription,
      seoKeywords: data.seoKeywords,
      ogImage: data.ogImage,
    };
  } catch (error) {
    console.error("[getBlogById] Error:", error);
    return null;
  }
}

export async function getBlogBySlug(slug: string, allowDraft = false): Promise<Blog | null> {
  await ensureDynamic();
  const db = getDb();
  if (!db) return null;
  try {
    const snapshot = await db.collection("blogs").where("slug", "==", slug).limit(1).get();
    if (snapshot.empty) {
      // Also attempt looking up by doc ID
      const byId = await db.collection("blogs").doc(slug).get();
      if (!byId.exists) return null;
      const data = byId.data()!;
      if (!allowDraft && data.status !== "published" && data.isPublished === false) return null;
      return {
        id: byId.id,
        title: data.title || "",
        slug: data.slug || byId.id,
        excerpt: data.excerpt || "",
        content: data.content || "",
        featuredImage: data.featuredImage || "",
        author: data.author || "DU SOL Editorial Team",
        category: data.category || "General",
        tags: Array.isArray(data.tags) ? data.tags : [],
        status: data.status || "published",
        scheduledDate: data.scheduledDate,
        publishedAt: data.publishedAt || data.createdAt,
        createdAt: data.createdAt || new Date().toISOString(),
        updatedAt: data.updatedAt || new Date().toISOString(),
        seoTitle: data.seoTitle,
        seoDescription: data.seoDescription,
        seoKeywords: data.seoKeywords,
        ogImage: data.ogImage,
      };
    }

    const doc = snapshot.docs[0];
    const data = doc.data();
    if (!allowDraft && data.status !== "published" && data.isPublished === false) {
      return null;
    }

    return {
      id: doc.id,
      title: data.title || "",
      slug: data.slug || doc.id,
      excerpt: data.excerpt || "",
      content: data.content || "",
      featuredImage: data.featuredImage || "",
      author: data.author || "DU SOL Editorial Team",
      category: data.category || "General",
      tags: Array.isArray(data.tags) ? data.tags : [],
      status: data.status || "published",
      scheduledDate: data.scheduledDate,
      publishedAt: data.publishedAt || data.createdAt,
      createdAt: data.createdAt || new Date().toISOString(),
      updatedAt: data.updatedAt || new Date().toISOString(),
      seoTitle: data.seoTitle,
      seoDescription: data.seoDescription,
      seoKeywords: data.seoKeywords,
      ogImage: data.ogImage,
    };
  } catch (error) {
    console.error("[getBlogBySlug] Error:", error);
    return null;
  }
}

export async function saveBlog(
  blogData: Partial<Blog> & { title: string },
  id?: string
): Promise<{ success: boolean; id?: string; error?: string }> {
  const db = getDb();
  if (!db) return { success: false, error: "Database not connected" };

  try {
    const slug = blogData.slug ? generateSlug(blogData.slug) : generateSlug(blogData.title);

    // Validate slug uniqueness
    const slugQuery = await db.collection("blogs").where("slug", "==", slug).get();
    const existingWithSlug = slugQuery.docs.find((d: any) => (id ? d.id !== id : true));
    if (existingWithSlug) {
      return { success: false, error: `A blog with slug '${slug}' already exists. Please choose a different title or slug.` };
    }

    const now = new Date().toISOString();
    const docId = id || slug || db.collection("blogs").doc().id;

    const dataToSave = {
      ...blogData,
      slug,
      updatedAt: now,
      createdAt: blogData.createdAt || now,
      publishedAt: blogData.status === "published" ? blogData.publishedAt || now : blogData.publishedAt || null,
      isPublished: blogData.status === "published",
    };

    await db.collection("blogs").doc(docId).set(dataToSave, { merge: true });
    return { success: true, id: docId };
  } catch (error: any) {
    console.error("[saveBlog] Error:", error);
    return { success: false, error: error.message || "Failed to save blog" };
  }
}

export async function deleteBlog(id: string): Promise<{ success: boolean; error?: string }> {
  const db = getDb();
  if (!db) return { success: false, error: "Database not connected" };
  try {
    await db.collection("blogs").doc(id).delete();
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to delete blog" };
  }
}

// ---------------- PROGRAMS (UG, PG & MBA SPECIALIZATIONS) ----------------

function getProgramCollectionName(type: "ug" | "pg" | "mba"): string {
  if (type === "ug") return "ugPrograms";
  if (type === "pg") return "pgPrograms";
  return "mbaSpecializations";
}

function docToProgram(docId: string, data: any, type: "ug" | "pg" | "mba"): Program {
  return {
    id: docId,
    name: data.name || "",
    slug: data.slug || docId,
    type,
    degree: data.degree || "",
    duration: data.duration || "",
    overview: data.overview || "",
    description: data.description || "",
    eligibility: data.eligibility || "",
    admissionProcess: data.admissionProcess || "",
    curriculum: Array.isArray(data.curriculum) ? data.curriculum : [],
    fees: Array.isArray(data.fees) ? data.fees : [],
    careerOpportunities: Array.isArray(data.careerOpportunities) ? data.careerOpportunities : [],
    featuredImage: data.featuredImage || "",
    content: data.content || "",
    faqs: Array.isArray(data.faqs) ? data.faqs : [],
    status: data.status || "published",
    seoTitle: data.seoTitle,
    seoDescription: data.seoDescription,
    createdAt: data.createdAt || new Date().toISOString(),
    updatedAt: data.updatedAt || new Date().toISOString(),
  };
}

export function getCandidateSlugs(slug: string): string[] {
  if (!slug) return [];
  const clean = slug.toLowerCase().trim();
  const set = new Set<string>();

  set.add(clean);

  // 1. Acronym map match
  const mapped = ACRONYM_MAP[clean];
  if (mapped) set.add(mapped);

  // 2. Stripped prefixes (distance-, online-, mba-)
  const stripped = clean.replace(/^(distance-|online-|mba-)/, "");
  if (stripped && stripped !== clean) {
    set.add(stripped);
    const strippedMapped = ACRONYM_MAP[stripped];
    if (strippedMapped) set.add(strippedMapped);
  }

  // 3. Prefixes
  set.add(`distance-${clean}`);
  set.add(`mba-${clean}`);
  if (stripped) {
    set.add(`distance-${stripped}`);
    set.add(`mba-${stripped}`);
  }

  // 4. Reverse lookup from ACRONYM_MAP
  for (const [key, target] of Object.entries(ACRONYM_MAP)) {
    if (target === clean || target === stripped) {
      set.add(key);
      set.add(target);
    }
  }

  return Array.from(set).filter(Boolean);
}

// Low-level DB query helper: ALWAYS 1ST PRIORITY TO DB
export async function getProgramFromDb(
  type: "ug" | "pg" | "mba",
  slugOrId: string,
  allowDraft = false
): Promise<Program | null> {
  const db = getDb();
  if (!db || !slugOrId) return null;
  const collName = getProgramCollectionName(type);
  const candidates = getCandidateSlugs(slugOrId);

  try {
    // 1. Check direct doc IDs in DB for all candidates
    for (const candidate of candidates) {
      const doc = await db.collection(collName).doc(candidate).get();
      if (doc.exists) {
        const data = doc.data()!;
        if (allowDraft || data.status === "published") {
          return docToProgram(doc.id, data, type);
        }
      }
    }

    // 2. Query where slug in candidates (batch of up to 30)
    const chunk = candidates.slice(0, 30);
    const snapshot = await db.collection(collName).where("slug", "in", chunk).limit(5).get();
    if (!snapshot.empty) {
      for (const doc of snapshot.docs) {
        const data = doc.data();
        if (allowDraft || data.status === "published") {
          return docToProgram(doc.id, data, type);
        }
      }
    }

    return null;
  } catch (error) {
    console.error(`[getProgramFromDb] Error querying ${type} for "${slugOrId}":`, error);
    return null;
  }
}

export async function getAllPrograms(type: "ug" | "pg" | "mba", onlyPublished = false): Promise<Program[]> {
  await ensureDynamic();
  const db = getDb();
  if (!db) {
    return getDefaultPrograms(type);
  }
  const collName = getProgramCollectionName(type);

  try {
    let query: Query = db.collection(collName);
    if (onlyPublished) {
      query = query.where("status", "==", "published");
    }
    const snapshot = await query.get();

    const dbPrograms: Program[] = [];
    const dbSlugs = new Set<string>();

    snapshot.forEach((doc: QueryDocumentSnapshot) => {
      const data = doc.data();
      const p = docToProgram(doc.id, data, type);
      dbPrograms.push(p);
      dbSlugs.add(p.slug.toLowerCase());
      dbSlugs.add(p.id.toLowerCase());
    });

    // Fallback: If any default program is not yet in the DB, append it so nothing is missing
    const defaults = getDefaultPrograms(type);
    const missingDefaults = defaults.filter(
      (d) => !dbSlugs.has(d.slug.toLowerCase()) && !dbSlugs.has(d.id.toLowerCase())
    );

    const merged = [...dbPrograms, ...missingDefaults];
    merged.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return merged;
  } catch (error) {
    handleFirestoreError(`getAllPrograms (${type})`, error);
    return getDefaultPrograms(type);
  }
}

export async function getProgramById(type: "ug" | "pg" | "mba", id: string): Promise<Program | null> {
  await ensureDynamic();
  const db = getDb();
  if (!db) return getDefaultProgramById(id) || getDefaultProgramBySlug(type, id);
  const collName = getProgramCollectionName(type);

  try {
    const doc = await db.collection(collName).doc(id).get();
    if (doc.exists) {
      return docToProgram(doc.id, doc.data()!, type);
    }
    // Also try candidate slugs/aliases in DB before falling back to default
    const dbProgram = await getProgramFromDb(type, id, true);
    if (dbProgram) return dbProgram;

    return getDefaultProgramById(id) || getDefaultProgramBySlug(type, id);
  } catch (error) {
    console.error(`[getProgramById] Error for ${type}:`, error);
    return getDefaultProgramById(id) || getDefaultProgramBySlug(type, id);
  }
}

// FIRST PRIORITY: Always query Firestore Database first. Fallback to default files only if not found in DB.
export async function getProgramBySlug(type: "ug" | "pg" | "mba", slug: string, allowDraft = false): Promise<Program | null> {
  await ensureDynamic();

  // 1. FIRST PRIORITY: Query DB
  const dbProgram = await getProgramFromDb(type, slug, allowDraft);
  if (dbProgram) {
    return dbProgram;
  }

  // 2. SECOND PRIORITY (Fallback): Default files if not found in DB
  return getDefaultProgramBySlug(type, slug);
}

// Unified multi-collection lookup across MBA, PG, and UG with DB AS 1ST PRIORITY
export async function findProgramAnyType(slug: string, allowDraft = false): Promise<Program | null> {
  await ensureDynamic();

  // 1. FIRST PRIORITY: Check Firestore DB across all 3 collections
  let program = await getProgramFromDb("mba", slug, allowDraft);
  if (program) return program;

  program = await getProgramFromDb("pg", slug, allowDraft);
  if (program) return program;

  program = await getProgramFromDb("ug", slug, allowDraft);
  if (program) return program;

  // 2. SECOND PRIORITY (Fallback): Check default files across types
  program =
    getDefaultProgramBySlug("mba", slug) ||
    getDefaultProgramBySlug("pg", slug) ||
    getDefaultProgramBySlug("ug", slug) ||
    getDefaultProgramBySlug(undefined, slug);

  return program || null;
}

export async function saveProgram(
  type: "ug" | "pg" | "mba",
  programData: Partial<Program> & { name: string },
  id?: string
): Promise<{ success: boolean; id?: string; error?: string }> {
  const db = getDb();
  if (!db) return { success: false, error: "Database not connected" };
  const collName = getProgramCollectionName(type);

  try {
    const slug = programData.slug ? generateSlug(programData.slug) : generateSlug(programData.name);

    // Validate slug uniqueness
    const slugQuery = await db.collection(collName).where("slug", "==", slug).get();
    const existing = slugQuery.docs.find((d: any) => (id ? d.id !== id : true));
    if (existing) {
      return { success: false, error: `A ${type.toUpperCase()} program with slug '${slug}' already exists.` };
    }

    const now = new Date().toISOString();
    const docId = id || slug || db.collection(collName).doc().id;

    const dataToSave = {
      ...programData,
      type,
      slug,
      updatedAt: now,
      createdAt: programData.createdAt || now,
    };

    await db.collection(collName).doc(docId).set(dataToSave, { merge: true });
    return { success: true, id: docId };
  } catch (error: any) {
    console.error(`[saveProgram] Error for ${type}:`, error);
    return { success: false, error: error.message || "Failed to save program" };
  }
}

export async function deleteProgram(type: "ug" | "pg" | "mba", id: string): Promise<{ success: boolean; error?: string }> {
  const db = getDb();
  if (!db) return { success: false, error: "Database not connected" };
  const collName = getProgramCollectionName(type);
  try {
    await db.collection(collName).doc(id).delete();
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to delete program" };
  }
}

// ---------------- STUDENT ZONE ----------------

export async function getAllStudentZoneItems(onlyPublished = false): Promise<StudentZoneItem[]> {
  await ensureDynamic();
  const db = getDb();
  if (!db) return [];

  try {
    let query: Query = db.collection("studentZone");
    if (onlyPublished) {
      query = query.where("status", "==", "published");
    }
    const snapshot = await query.get();
    const items: StudentZoneItem[] = [];

    snapshot.forEach((doc: QueryDocumentSnapshot) => {
      const data = doc.data();
      items.push({
        id: doc.id,
        title: data.title || "",
        slug: data.slug || doc.id,
        category: data.category || "General",
        summary: data.summary || "",
        content: data.content || "",
        featuredImage: data.featuredImage || "",
        externalLink: data.externalLink || "",
        downloadUrl: data.downloadUrl || "",
        quickSteps: Array.isArray(data.quickSteps) ? data.quickSteps : [],
        status: data.status || "published",
        seoTitle: data.seoTitle,
        seoDescription: data.seoDescription,
        createdAt: data.createdAt || new Date().toISOString(),
        updatedAt: data.updatedAt || new Date().toISOString(),
      });
    });

    items.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return items;
  } catch (error) {
    handleFirestoreError("getAllStudentZoneItems", error);
    return [];
  }
}

export async function getStudentZoneItemById(id: string): Promise<StudentZoneItem | null> {
  await ensureDynamic();
  const db = getDb();
  if (!db) return null;

  try {
    const doc = await db.collection("studentZone").doc(id).get();
    if (!doc.exists) return null;
    const data = doc.data()!;
    return {
      id: doc.id,
      title: data.title || "",
      slug: data.slug || doc.id,
      category: data.category || "General",
      summary: data.summary || "",
      content: data.content || "",
      featuredImage: data.featuredImage || "",
      externalLink: data.externalLink || "",
      downloadUrl: data.downloadUrl || "",
      quickSteps: Array.isArray(data.quickSteps) ? data.quickSteps : [],
      status: data.status || "published",
      seoTitle: data.seoTitle,
      seoDescription: data.seoDescription,
      createdAt: data.createdAt || new Date().toISOString(),
      updatedAt: data.updatedAt || new Date().toISOString(),
    };
  } catch (error) {
    console.error("[getStudentZoneItemById] Error:", error);
    return null;
  }
}

export async function getStudentZoneItemBySlug(slug: string, allowDraft = false): Promise<StudentZoneItem | null> {
  await ensureDynamic();
  const db = getDb();
  if (!db) return null;

  try {
    const snapshot = await db.collection("studentZone").where("slug", "==", slug).limit(1).get();
    if (snapshot.empty) {
      const byId = await db.collection("studentZone").doc(slug).get();
      if (!byId.exists) return null;
      const data = byId.data()!;
      if (!allowDraft && data.status !== "published") return null;
      return {
        id: byId.id,
        title: data.title || "",
        slug: data.slug || byId.id,
        category: data.category || "General",
        summary: data.summary || "",
        content: data.content || "",
        featuredImage: data.featuredImage || "",
        externalLink: data.externalLink || "",
        downloadUrl: data.downloadUrl || "",
        quickSteps: Array.isArray(data.quickSteps) ? data.quickSteps : [],
        status: data.status || "published",
        seoTitle: data.seoTitle,
        seoDescription: data.seoDescription,
        createdAt: data.createdAt || new Date().toISOString(),
        updatedAt: data.updatedAt || new Date().toISOString(),
      };
    }

    const doc = snapshot.docs[0];
    const data = doc.data();
    if (!allowDraft && data.status !== "published") return null;

    return {
      id: doc.id,
      title: data.title || "",
      slug: data.slug || doc.id,
      category: data.category || "General",
      summary: data.summary || "",
      content: data.content || "",
      featuredImage: data.featuredImage || "",
      externalLink: data.externalLink || "",
      downloadUrl: data.downloadUrl || "",
      quickSteps: Array.isArray(data.quickSteps) ? data.quickSteps : [],
      status: data.status || "published",
      seoTitle: data.seoTitle,
      seoDescription: data.seoDescription,
      createdAt: data.createdAt || new Date().toISOString(),
      updatedAt: data.updatedAt || new Date().toISOString(),
    };
  } catch (error) {
    console.error("[getStudentZoneItemBySlug] Error:", error);
    return null;
  }
}

export async function saveStudentZoneItem(
  data: Partial<StudentZoneItem> & { title: string },
  id?: string
): Promise<{ success: boolean; id?: string; slug?: string; error?: string }> {
  const db = getDb();
  if (!db) return { success: false, error: "Database not connected" };

  try {
    const slug = data.slug ? generateSlug(data.slug) : generateSlug(data.title);
    const docId = id || slug;
    const now = new Date().toISOString();

    const payload = {
      ...data,
      title: data.title,
      slug,
      category: data.category || "General",
      summary: data.summary || "",
      content: data.content || "",
      featuredImage: data.featuredImage || "",
      externalLink: data.externalLink || "",
      downloadUrl: data.downloadUrl || "",
      quickSteps: Array.isArray(data.quickSteps) ? data.quickSteps : [],
      status: data.status || "published",
      seoTitle: data.seoTitle || data.title,
      seoDescription: data.seoDescription || data.summary || "",
      updatedAt: now,
      ...(id ? {} : { createdAt: now }),
    };

    await db.collection("studentZone").doc(docId).set(payload, { merge: true });
    return { success: true, id: docId, slug };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to save student zone item" };
  }
}

export async function deleteStudentZoneItem(id: string): Promise<{ success: boolean; error?: string }> {
  const db = getDb();
  if (!db) return { success: false, error: "Database not connected" };
  try {
    await db.collection("studentZone").doc(id).delete();
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to delete student zone item" };
  }
}

// ---------------- DASHBOARD STATS ----------------

export async function getDashboardStats(): Promise<DashboardStats> {
  const blogs = await getAllBlogs();
  const ug = await getAllPrograms("ug");
  const pg = await getAllPrograms("pg");
  const mba = await getAllPrograms("mba");
  const studentZone = await getAllStudentZoneItems();

  const publishedBlogs = blogs.filter((b) => b.status === "published").length;
  const draftBlogs = blogs.filter((b) => b.status === "draft").length;

  const publishedUG = ug.filter((p) => p.status === "published").length;
  const publishedPG = pg.filter((p) => p.status === "published").length;
  const publishedMBA = mba.filter((p) => p.status === "published").length;
  const publishedSZ = studentZone.filter((s) => s.status === "published").length;

  // Combine recent items
  const combinedRecent: DashboardStats["recentActivity"] = [
    ...blogs.map((b) => ({
      id: b.id,
      title: b.title,
      type: "blog" as const,
      status: b.status,
      updatedAt: b.updatedAt,
      href: `/admin/blogs/${b.id}/edit`,
    })),
    ...ug.map((p) => ({
      id: p.id,
      title: p.name,
      type: "ug" as const,
      status: p.status,
      updatedAt: p.updatedAt,
      href: `/admin/ug-programs/${p.id}/edit`,
    })),
    ...pg.map((p) => ({
      id: p.id,
      title: p.name,
      type: "pg" as const,
      status: p.status,
      updatedAt: p.updatedAt,
      href: `/admin/pg-programs/${p.id}/edit`,
    })),
    ...mba.map((p) => ({
      id: p.id,
      title: p.name,
      type: "mba" as const,
      status: p.status,
      updatedAt: p.updatedAt,
      href: `/admin/mba-specializations/${p.id}/edit`,
    })),
    ...studentZone.map((s) => ({
      id: s.id,
      title: s.title,
      type: "student-zone" as const,
      status: s.status,
      updatedAt: s.updatedAt,
      href: `/admin/student-zone/${s.id}/edit`,
    })),
  ];

  combinedRecent.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());

  return {
    totalBlogs: blogs.length,
    publishedBlogs,
    draftBlogs,
    totalUGPrograms: ug.length,
    publishedUGPrograms: publishedUG,
    totalPGPrograms: pg.length,
    publishedPGPrograms: publishedPG,
    totalMBASpecializations: mba.length,
    publishedMBASpecializations: publishedMBA,
    totalStudentZoneItems: studentZone.length,
    publishedStudentZoneItems: publishedSZ,
    recentActivity: combinedRecent.slice(0, 10),
  };
}

// ---------------- CATEGORIES ----------------

export async function getAllCategories(): Promise<Category[]> {
  await ensureDynamic();
  const db = getDb();
  if (!db) return [];
  try {
    const snap = await db.collection("categories").get();
    const categories: Category[] = [];
    snap.forEach((d: any) => {
      const data = d.data();
      categories.push({
        id: d.id,
        name: data.name || d.id,
        slug: data.slug || generateSlug(data.name || d.id),
        description: data.description || "",
      });
    });
    return categories;
  } catch (e) {
    return [];
  }
}

export async function saveCategory(name: string, description?: string): Promise<{ success: boolean; error?: string }> {
  const db = getDb();
  if (!db) return { success: false, error: "Database not connected" };
  try {
    const slug = generateSlug(name);
    await db.collection("categories").doc(slug).set(
      {
        name,
        slug,
        description: description || "",
        updatedAt: new Date().toISOString(),
      },
      { merge: true }
    );
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function deleteCategory(slug: string): Promise<{ success: boolean; error?: string }> {
  const db = getDb();
  if (!db) return { success: false, error: "Database not connected" };
  try {
    await db.collection("categories").doc(slug).delete();
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

// ---------------- IMPORT HISTORY ----------------

export async function logImportHistory(entry: {
  fileName: string;
  fileSize: number;
  fileType: "pdf" | "docx";
  section: string;
  recordId: string;
  recordTitle: string;
  status: "draft" | "published";
  adminEmail: string;
}): Promise<void> {
  const db = getDb();
  if (!db) return;
  try {
    const now = new Date().toISOString();
    await db.collection("importHistory").add({
      ...entry,
      createdAt: now,
    });
  } catch (e) {
    console.error("[logImportHistory] Error:", e);
  }
}

export async function getImportHistory(limit = 50): Promise<any[]> {
  const db = getDb();
  if (!db) return [];
  try {
    const snap = await db.collection("importHistory").orderBy("createdAt", "desc").limit(limit).get();
    const items: any[] = [];
    snap.forEach((doc: any) => {
      items.push({ id: doc.id, ...doc.data() });
    });
    return items;
  } catch (e) {
    console.error("[getImportHistory] Error:", e);
    return [];
  }
}

// ---------------- LEADS / ENQUIRIES ----------------

export async function insertLead(leadData: Partial<Lead>): Promise<{ id: string }> {
  const db = getDb();
  if (!db) throw new Error("Database not connected");

  const now = new Date().toISOString();
  const payload = {
    name: leadData.name || "",
    mobile: leadData.mobile || "",
    email: leadData.email || "",
    city: leadData.city || leadData.state || "Delhi",
    state: leadData.state || leadData.city || "Delhi",
    course: leadData.course || leadData.programme || "",
    programme: leadData.programme || leadData.course || "",
    prog_id: leadData.prog_id || "",
    university_name: leadData.university_name || "Delhi University (DU SOL)",
    university_code: leadData.university_code || "DU_SOL",
    source_name: leadData.source_name || "WS",
    source_id: leadData.source_id || "49",
    supplier_id: leadData.supplier_id || "",
    page_url: leadData.page_url || "",
    data_from: leadData.data_from || leadData.page_url || "",
    selected_challenges: leadData.selected_challenges || "",
    crm_status: leadData.crm_status || "pending",
    crm_lead_id: leadData.crm_lead_id || "",
    crm_response: leadData.crm_response || "",
    status: leadData.status || "new",
    created_at_iso: now,
    created_at: new Date(),
  };

  const docRef = await db.collection("crm_leads").add(payload);
  return { id: docRef.id };
}

export async function getLeads(options?: {
  limit?: number;
  search?: string;
  course?: string;
}): Promise<Lead[]> {
  const db = getDb();
  if (!db) return [];
  try {
    const limitNum = options?.limit || 100;
    const snap = await db
      .collection("crm_leads")
      .orderBy("created_at_iso", "desc")
      .limit(limitNum)
      .get();

    let leads: Lead[] = [];
    snap.forEach((doc: any) => {
      const data = doc.data();
      leads.push({
        id: doc.id,
        name: data.name || "",
        mobile: data.mobile || "",
        email: data.email || "",
        city: data.city || data.state || "",
        state: data.state || data.city || "",
        course: data.course || data.programme || "",
        programme: data.programme || data.course || "",
        prog_id: data.prog_id || "",
        university_name: data.university_name || "",
        university_code: data.university_code || "",
        source_name: data.source_name || "",
        source_id: data.source_id || "",
        supplier_id: data.supplier_id || "",
        page_url: data.page_url || "",
        data_from: data.data_from || "",
        selected_challenges: data.selected_challenges || "",
        crm_status: data.crm_status || "pending",
        crm_lead_id: data.crm_lead_id || "",
        crm_response: data.crm_response || "",
        status: data.status || "new",
        created_at_iso: data.created_at_iso || "",
      });
    });

    if (options?.search) {
      const q = options.search.toLowerCase().trim();
      leads = leads.filter(
        (l) =>
          l.name.toLowerCase().includes(q) ||
          l.mobile.includes(q) ||
          l.email.toLowerCase().includes(q) ||
          (l.course && l.course.toLowerCase().includes(q)) ||
          (l.city && l.city.toLowerCase().includes(q))
      );
    }

    if (options?.course) {
      const c = options.course.toLowerCase().trim();
      leads = leads.filter((l) => l.course && l.course.toLowerCase().includes(c));
    }

    return leads;
  } catch (error) {
    console.error("[getLeads] Error fetching leads:", error);
    return [];
  }
}

export async function deleteLead(leadId: string): Promise<{ success: boolean; error?: string }> {
  const db = getDb();
  if (!db) return { success: false, error: "Database not connected" };
  try {
    await db.collection("crm_leads").doc(leadId).delete();
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

// ---------------- HOME PAGE CONTENT ----------------

export {
  DEFAULT_HOME_PAGE_CONTENT,
  getHomePageContent,
  saveHomePageContent,
} from "./home-page-cms";

