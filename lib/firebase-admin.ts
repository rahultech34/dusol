import { initializeApp, cert, getApps, getApp, App } from "firebase-admin/app";
import { getFirestore, Firestore } from "firebase-admin/firestore";
import fs from "fs";
import path from "path";

let adminApp: App | null = null;
let firestoreDb: Firestore | null = null;

export function getAdminApp(): App | null {
  if (adminApp) return adminApp;
  if (getApps().length > 0) {
    adminApp = getApp();
    return adminApp;
  }

  try {
    const keyPath = path.join(process.cwd(), "firebase-key.json");
    if (fs.existsSync(keyPath)) {
      const content = fs.readFileSync(keyPath, "utf8").trim();
      if (content && content.startsWith("{")) {
        const serviceAccount = JSON.parse(content);
        if (serviceAccount.project_id && !serviceAccount.project_id.includes("PLACEHOLDER")) {
          adminApp = initializeApp({
            credential: cert(serviceAccount),
          });
          return adminApp;
        }
      }
    } else if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
      const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
      adminApp = initializeApp({
        credential: cert(serviceAccount),
      });
      return adminApp;
    }
    console.warn("[Firebase Admin] No active service account key configured.");
    return null;
  } catch (error) {
    console.error("[Firebase Admin] Initialization error:", error);
    return null;
  }
}

export function getFirebaseProjectId(): string {
  try {
    const keyPath = path.join(process.cwd(), "firebase-key.json");
    if (fs.existsSync(keyPath)) {
      const content = fs.readFileSync(keyPath, "utf8").trim();
      if (content && content.startsWith("{")) {
        const sa = JSON.parse(content);
        if (sa.project_id && !sa.project_id.includes("PLACEHOLDER")) {
          return sa.project_id;
        }
      }
    }
  } catch {}
  return process.env.FIREBASE_PROJECT_ID || "Not Configured";
}

export function getDb(): Firestore | null {
  if (firestoreDb) return firestoreDb;
  const app = getAdminApp();
  if (!app) return null;
  try {
    firestoreDb = getFirestore(app);
    return firestoreDb;
  } catch (error) {
    console.error("[Firebase Admin] getDb error:", error);
    return null;
  }
}

export const db = getDb();
