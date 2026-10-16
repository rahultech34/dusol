"use client";

import { useState, useEffect } from "react";
import {
  BACHELOR_PROGRAMS,
  MASTER_PROGRAMS,
  MBA_SPECIALIZATIONS,
  STUDENT_ZONE_ITEMS,
  CourseItem,
} from "./nav-data";

export interface NavDataState {
  bachelor: CourseItem[];
  master: CourseItem[];
  mba: CourseItem[];
  student: CourseItem[];
  loading: boolean;
}

const defaultState: NavDataState = {
  bachelor: BACHELOR_PROGRAMS,
  master: MASTER_PROGRAMS,
  mba: MBA_SPECIALIZATIONS,
  student: STUDENT_ZONE_ITEMS,
  loading: false,
};

let cachedNavData: NavDataState = defaultState;
let listeners: Array<(data: NavDataState) => void> = [];
let activeFetchPromise: Promise<void> | null = null;
let lastFetchTime = 0;
let hasInitialFetched = false;
const FETCH_COOLDOWN_MS = 60 * 1000; // 60 seconds minimum between non-forced fetches

async function fetchNavItems(force = false) {
  const now = Date.now();
  // If not forced and already fetched recently, skip to prevent repetitive requests
  if (!force && hasInitialFetched && now - lastFetchTime < FETCH_COOLDOWN_MS) {
    return;
  }

  // If a fetch is already in flight, reuse the promise so concurrent calls don't fire duplicate requests
  if (activeFetchPromise) {
    return activeFetchPromise;
  }

  activeFetchPromise = (async () => {
    try {
      const res = await fetch("/api/public/nav-items");
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) {
          cachedNavData = {
            bachelor: json.data.bachelor?.length ? json.data.bachelor : BACHELOR_PROGRAMS,
            master: json.data.master?.length ? json.data.master : MASTER_PROGRAMS,
            mba: json.data.mba?.length ? json.data.mba : MBA_SPECIALIZATIONS,
            student: json.data.student?.length ? json.data.student : STUDENT_ZONE_ITEMS,
            loading: false,
          };
          hasInitialFetched = true;
          lastFetchTime = Date.now();
          listeners.forEach((listener) => listener(cachedNavData));
        }
      }
    } catch {
      // Graceful fallback to default programs without spamming errors
    } finally {
      activeFetchPromise = null;
    }
  })();

  return activeFetchPromise;
}

export function useNavData() {
  const [data, setData] = useState<NavDataState>(cachedNavData);

  useEffect(() => {
    listeners.push(setData);

    // Only fetch once initially across all component instances
    if (!hasInitialFetched) {
      fetchNavItems(false);
    }

    // Re-fetch only if user returns to tab AND cooldown has expired
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        fetchNavItems(false);
      }
    };

    // Immediate forced refresh when an admin adds or updates a program
    const onLocalRefresh = () => {
      fetchNavItems(true);
    };

    window.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("dusol:nav-refresh", onLocalRefresh);

    return () => {
      listeners = listeners.filter((l) => l !== setData);
      window.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("dusol:nav-refresh", onLocalRefresh);
    };
  }, []);

  return data;
}

export function notifyNavUpdated() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("dusol:nav-refresh"));
  }
}
