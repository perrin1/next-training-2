import { getCurrentUser } from "@/lib/session";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const session = await getCurrentUser();
  return NextResponse.json({ auhenticated: !!session });
};
