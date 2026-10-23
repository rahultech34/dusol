import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import fs from "fs";
import path from "path";

if (getApps().length === 0) {
  const saPath = path.resolve("./firebase-key.json");
  const serviceAccount = JSON.parse(fs.readFileSync(saPath, "utf-8"));
  initializeApp({ credential: cert(serviceAccount) });
}

const db = getFirestore();

function sanitizeString(str: string): string {
  if (!str || typeof str !== "string") return str;

  let cleaned = str;

  // 1. Remove <a> tags pointing to sol.du.ac.in
  // E.g. <a href="https://sol.du.ac.in" ...>sol.du.ac.in</a> -> "official university portal"
  cleaned = cleaned.replace(
    /<a\s+[^>]*href=["']https?:\/\/(?:web\.)?sol\.du\.ac\.in(?:\/[^"']*)?["'][^>]*>\s*(?:https?:\/\/(?:web\.)?)?sol\.du\.ac\.in\/?\s*<\/a>/gi,
    "official university portal"
  );

  // E.g. <a href="https://sol.du.ac.in" ...>Something Else</a> -> "Something Else"
  cleaned = cleaned.replace(
    /<a\s+[^>]*href=["']https?:\/\/(?:web\.)?sol\.du\.ac\.in(?:\/[^"']*)?["'][^>]*>(.*?)<\/a>/gi,
    "$1"
  );

  // 2. Remove code tags or wrapped terms
  cleaned = cleaned.replace(/<code>\s*sol\.du\.ac\.in\s*<\/code>/gi, "the official university portal");

  // 3. Clean raw URL patterns
  cleaned = cleaned.replace(/https?:\/\/(?:web\.)?sol\.du\.ac\.in\/?/gi, "the official university portal");

  // 4. Clean phrases with sol.du.ac.in
  cleaned = cleaned.replace(/\bat sol\.du\.ac\.in\b/gi, "on the official university portal");
  cleaned = cleaned.replace(/\bvia sol\.du\.ac\.in\b/gi, "via the official university portal");
  cleaned = cleaned.replace(/\bon sol\.du\.ac\.in\b/gi, "on the official university portal");
  cleaned = cleaned.replace(/\(sol\.du\.ac\.in\)/gi, "(official portal)");
  cleaned = cleaned.replace(/\bsol\.du\.ac\.in\b/gi, "official university portal");

  // Clean redundant double phrasing if any
  cleaned = cleaned.replace(/official university portal website/gi, "official university website");
  cleaned = cleaned.replace(/the the official/gi, "the official");
  cleaned = cleaned.replace(/on on the/gi, "on the");

  return cleaned;
}

function sanitizeObject(obj: any): any {
  if (!obj) return obj;
  if (typeof obj === "string") {
    return sanitizeString(obj);
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => sanitizeObject(item));
  }
  if (typeof obj === "object") {
    const newObj: any = {};
    for (const [key, val] of Object.entries(obj)) {
      if (key === "externalLink" && typeof val === "string" && val.includes("sol.du.ac.in")) {
        newObj[key] = "";
      } else if (key === "link" && typeof val === "string" && val.includes("sol.du.ac.in")) {
        newObj[key] = "/student-zone";
      } else {
        newObj[key] = sanitizeObject(val);
      }
    }
    return newObj;
  }
  return obj;
}

async function sanitizeAllCollections() {
  const collections = [
    "studentZone",
    "blogs",
    "ugPrograms",
    "pgPrograms",
    "mbaSpecializations",
    "siteContent",
  ];

  console.log("🧹 Starting full Firestore cleanup of sol.du.ac.in URLs...");

  for (const col of collections) {
    const snap = await db.collection(col).get();
    let updatedCount = 0;

    for (const doc of snap.docs) {
      const original = doc.data();
      const stringified = JSON.stringify(original);

      if (stringified.includes("sol.du.ac.in")) {
        const sanitized = sanitizeObject(original);
        await db.collection(col).doc(doc.id).set(sanitized);
        updatedCount++;
        console.log(`  ✓ Cleaned ${col}/${doc.id}`);
      }
    }

    console.log(`✅ Collection '${col}': cleaned ${updatedCount} documents.`);
  }

  // Also sanitize lib/default-programs.ts
  const defaultProgramsPath = path.resolve("./lib/default-programs.ts");
  if (fs.existsSync(defaultProgramsPath)) {
    let content = fs.readFileSync(defaultProgramsPath, "utf-8");
    if (content.includes("sol.du.ac.in")) {
      content = sanitizeString(content);
      fs.writeFileSync(defaultProgramsPath, content, "utf-8");
      console.log("✅ Cleaned lib/default-programs.ts");
    }
  }

  console.log("🎉 Complete! sol.du.ac.in has been removed across entire database & default content.");
}

sanitizeAllCollections().catch(console.error);
