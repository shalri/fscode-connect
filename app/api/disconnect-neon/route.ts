import { disconnectNeonDb } from "@/database/neon";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    await disconnectNeonDb();
    return NextResponse.json({ message: "Neon database disconnected" });
  } catch (error) {
    console.error("Failed to disconnect from Neon database:", error);
    return NextResponse.json(
      { message: "Failed to disconnect from Neon database" },
      { status: 500 },
    );
  }
}
