import { NextRequest } from "next/server";
import { POST as handleLeadPost } from "../leads/route";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function POST(req: NextRequest) {
  return handleLeadPost(req);
}
