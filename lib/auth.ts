import { SignJWT, jwtVerify } from "jose";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { getDb } from "./firebase-admin";
import { AdminUser } from "./types";

const JWT_SECRET = new TextEncoder().encode(
  process.env.ADMIN_JWT_SECRET || "dusol_secure_admin_jwt_secret_key_2026_xyz987"
);

export const COOKIE_NAME = "dusol_admin_session";
const SESSION_DURATION = 60 * 60 * 24 * 7; // 7 days in seconds

export interface SessionPayload {
  userId: string;
  email: string;
  name: string;
  role: "admin" | "superadmin";
}

export async function createSessionToken(payload: SessionPayload): Promise<string> {
  return await new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(JWT_SECRET);
}

export async function verifySessionToken(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return {
      userId: payload.userId as string,
      email: payload.email as string,
      name: payload.name as string,
      role: (payload.role as "admin" | "superadmin") || "admin",
    };
  } catch (err) {
    return null;
  }
}

export async function getCurrentAdmin(): Promise<AdminUser | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;
    if (!token) return null;

    const payload = await verifySessionToken(token);
    if (!payload || !payload.email) return null;

    // Verify against trusted Firestore adminUsers collection
    const db = getDb();
    if (!db) {
      // Fallback to token payload if db is temporarily unreachable
      return {
        id: payload.userId,
        email: payload.email,
        name: payload.name,
        role: payload.role,
      };
    }

    const doc = await db.collection("adminUsers").doc(payload.email.toLowerCase()).get();
    if (!doc.exists) {
      return null;
    }

    const data = doc.data() as AdminUser;
    return {
      id: doc.id,
      email: data.email,
      name: data.name || "Administrator",
      role: data.role || "admin",
    };
  } catch (error) {
    console.error("[getCurrentAdmin] Error:", error);
    return null;
  }
}

export async function verifyAdminCredentials(
  email: string,
  plainPassword: string
): Promise<{ user: AdminUser | null; error?: string }> {
  const db = getDb();
  if (!db) {
    return { user: null, error: "Database service unavailable. Please check server configuration." };
  }

  const cleanEmail = email.trim().toLowerCase();
  const doc = await db.collection("adminUsers").doc(cleanEmail).get();

  if (!doc.exists) {
    return { user: null, error: "Invalid email or password." };
  }

  const userData = doc.data();
  if (!userData || !userData.password) {
    return { user: null, error: "Account misconfigured. Please contact system administrator." };
  }

  const isMatch = await bcrypt.compare(plainPassword, userData.password);
  if (!isMatch) {
    return { user: null, error: "Invalid email or password." };
  }

  return {
    user: {
      id: doc.id,
      email: userData.email,
      name: userData.name || "Administrator",
      role: userData.role || "admin",
    },
  };
}

export async function hashPassword(plainText: string): Promise<string> {
  return await bcrypt.hash(plainText, 10);
}
