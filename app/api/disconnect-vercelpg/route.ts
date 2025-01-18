import { disconnectPosgresDb } from "@/database/vercelpg";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    await disconnectPosgresDb();
    return NextResponse.json({ message: "Vercel Postgres disconnected" });
  } catch (error) {
    console.error("Failed to disconnect from Vercel Postgres:", error);
    return NextResponse.json(
      { message: "Failed to disconnect from Vercel Postgres" },
      { status: 500 },
    );
  }
}
