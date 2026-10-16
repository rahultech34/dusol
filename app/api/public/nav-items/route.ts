import { NextResponse } from "next/server";
import { getAllPrograms, getAllStudentZoneItems } from "@/lib/firestore-cms";
import {
  BACHELOR_PROGRAMS,
  MASTER_PROGRAMS,
  MBA_SPECIALIZATIONS,
  STUDENT_ZONE_ITEMS,
  CourseItem,
} from "@/components/navbar/nav-data";

export const dynamic = "force-dynamic";

// In-memory server cache to avoid repeated Firestore queries on every single request
let serverCache: {
  data: {
    bachelor: CourseItem[];
    master: CourseItem[];
    mba: CourseItem[];
    student: CourseItem[];
  };
  timestamp: number;
} | null = null;

const CACHE_TTL_MS = 60 * 1000; // 60 seconds

export async function GET(request: Request) {
  const url = new URL(request.url);
  const forceRefresh = url.searchParams.get("refresh") === "true";

  if (!forceRefresh && serverCache && Date.now() - serverCache.timestamp < CACHE_TTL_MS) {
    return NextResponse.json(
      { success: true, data: serverCache.data },
      {
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
        },
      }
    );
  }

  try {
    const [ugList, pgList, mbaList, szList] = await Promise.all([
      getAllPrograms("ug", true),
      getAllPrograms("pg", true),
      getAllPrograms("mba", true),
      getAllStudentZoneItems(true),
    ]);

    // Map UG Programs or fallback to defaults
    const bachelor: CourseItem[] =
      ugList.length > 0
        ? ugList.map((p) => ({
            id: p.id || p.slug,
            name: p.name,
            href: `/courses/${p.slug}`,
          }))
        : (serverCache?.data.bachelor || BACHELOR_PROGRAMS);

    // Map PG Programs or fallback to defaults
    const master: CourseItem[] =
      pgList.length > 0
        ? pgList.map((p) => ({
            id: p.id || p.slug,
            name: p.name,
            href: `/courses/${p.slug}`,
          }))
        : (serverCache?.data.master || MASTER_PROGRAMS);

    // Map MBA Specializations or fallback to defaults
    const mba: CourseItem[] =
      mbaList.length > 0
        ? mbaList.map((p) => ({
            id: p.id || p.slug,
            name: p.name,
            href: `/courses/${p.slug}`,
          }))
        : (serverCache?.data.mba || MBA_SPECIALIZATIONS);

    // Map Student Zone or fallback to defaults
    const student: CourseItem[] =
      szList.length > 0
        ? szList.map((item) => ({
            id: item.id || item.slug,
            name: item.title,
            href: `/student-zone/${item.slug}`,
          }))
        : (serverCache?.data.student || STUDENT_ZONE_ITEMS);

    const data = { bachelor, master, mba, student };
    serverCache = {
      data,
      timestamp: Date.now(),
    };

    return NextResponse.json(
      {
        success: true,
        data,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
        },
      }
    );
  } catch (error: any) {
    // Graceful fallback without crashing or throwing
    return NextResponse.json({
      success: true,
      data: serverCache?.data || {
        bachelor: BACHELOR_PROGRAMS,
        master: MASTER_PROGRAMS,
        mba: MBA_SPECIALIZATIONS,
        student: STUDENT_ZONE_ITEMS,
      },
    });
  }
}
