import { auth } from "@/auth";
import DbConnectCard from "@/components/DbConnectCard";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (!session) redirect("/login");

  return (
    <main className="fade-in container mx-auto flex flex-grow items-center justify-center">
      <div className="space-y-10">
        <h1 className="text-center text-4xl">
          つなぐ &middot;{" "}
          <span className="tracking-wider opacity-75">connect</span>
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <DbConnectCard
            dbName="Vercel Postgres"
            connectDbApi="/api/connect-vercelpg"
            disconnectDbApi="/api/disconnect-vercelpg"
          />
          <DbConnectCard
            dbName="Neon"
            connectDbApi="/api/connect-neon"
            disconnectDbApi="/api/disconnect-neon"
          />
          <DbConnectCard
            dbName="MongoDb"
            connectDbApi="/api/connect-mongodb"
            disconnectDbApi="/api/disconnect-mongodb"
          />
        </div>
      </div>
    </main>
  );
}
