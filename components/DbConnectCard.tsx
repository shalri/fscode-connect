"use client";

import { disconnectNeonDb } from "@/database/neon";
import { useDbConnect } from "@/hooks/useDbConnect";

interface DbConnectionProps {
  dbName: string;
  connectDbApi: string;
  disconnectDbApi: string;
}

export default function DbConnectCard({
  dbName,
  connectDbApi,
  disconnectDbApi,
}: DbConnectionProps) {
  const { status, error, toggleConnection } = useDbConnect(
    connectDbApi,
    disconnectDbApi,
  );

  return (
    <section className="flex flex-col items-center gap-y-2">
      <div className="flex w-full min-w-[300px] flex-col rounded-md border border-cyan-900 px-6 py-4">
        <code className="font-mono">{dbName}</code>
        <code className="font-mono">
          db status:{" "}
          {status === "connecting" ? (
            <span>connecting...</span>
          ) : status === "error" ? (
            <span>{error}</span>
          ) : (
            status
          )}
        </code>
      </div>
      <div className="">
        <button
          onClick={toggleConnection}
          className="rounded border border-cyan-900 px-4 py-2 font-mono"
          disabled={status === "connecting"}
        >
          {status === "Ok" ? "Disconnect" : "Connect"}
        </button>
      </div>
    </section>
  );
}
