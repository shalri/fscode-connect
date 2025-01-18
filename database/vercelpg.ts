import { db, VercelPoolClient } from "@vercel/postgres";

let client: VercelPoolClient | null = null;

export async function connectPosgresDb() {
  try {
    // Establish a connection with postgres db
    client = await db.connect();

    await client.sql`SELECT 1`;
    console.log("PG connection successful");
    return client;
  } catch (error) {
    console.error("Failed to connect to Vercel Postgres:", error);
    throw new Error("Failed to connect to Vercel Postgres");
  }
}

export async function disconnectPosgresDb() {
  if (client) {
    try {
      client.release();
      client = null;
    } catch (error) {
      console.error("Failed to disconnect from Vercel Postgres:", error);
      throw new Error("Failed to disconnect from Vercel Postgres");
    }
  } else {
    console.log("No active Vercel Postgres connection to disconnect.");
  }
}
