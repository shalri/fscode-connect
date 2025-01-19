import DbConnectCard from "@/components/DbConnectCard";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-12 sm:items-start">
        <h1 className="text-xl">
          つなぐ &middot; <span className="tracking-wider">connect</span>
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
