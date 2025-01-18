import { disconnectMongoDb } from "@/database/mongodb";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    await disconnectMongoDb();
    return NextResponse.json({ message: "MongoDb disconnected" });
  } catch (error) {
    console.error("Failed to disconnect from MongoDb:", error);
    return NextResponse.json(
      { message: "Failed to disconnect from MongoDb" },
      { status: 500 },
    );
  }
}
