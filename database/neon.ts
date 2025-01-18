import { neon } from "@neondatabase/serverless";

let sqlClient: ReturnType<typeof neon> | null = null;

export async function connectNeonDb() {
  if (!process.env.NEON_DATABASE_URL) {
    throw new Error("NEON_DATABASE_URL environment variable is not set");
  }
  try {
    if (!sqlClient) {
      sqlClient = neon(process.env.NEON_DATABASE_URL!);
    }
    const response = await sqlClient`SELECT version()`;
    const version = (response as unknown as { version: string }[])[0].version;
    return version;
  } catch (error) {
    console.error("Failed to connect to Neon database:", error);
    throw new Error("Failed to connect to Neon database");
  }
}
// You don't have to do this with serverless database
export async function disconnectNeonDb() {
  if (sqlClient) {
    return (sqlClient = null);
  }
}
