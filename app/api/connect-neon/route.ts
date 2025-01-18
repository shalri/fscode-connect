import { connectNeonDb } from "@/database/neon";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectNeonDb();
    return NextResponse.json({ message: "Neon connected successfully" });
  } catch {
    return NextResponse.json(
      { error: "Failed to connect to Neon database" },
      { status: 500 },
    );
  }
}
