import { connectMongoDb } from "@/database/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongoDb();
    return NextResponse.json({ message: "MongoDb connected successfully" });
  } catch (error) {
    console.log("MongoDb connection failed:", error);
    return NextResponse.json(
      { error: "Failed to connect to MongoDb" },
      { status: 500 },
    );
  }
}
