import { connectPosgresDb } from "@/database/vercelpg";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectPosgresDb();
    return NextResponse.json({ message: "Postgress connected" });
  } catch (error) {
    console.error("Failed to connect to Vercel database:", error);
    return NextResponse.json(
      { message: "Failed to connect to Vercel database" },
      { status: 500 },
    );
  }
}
