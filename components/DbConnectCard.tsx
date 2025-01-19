"use client";
import { useDbConnect } from "@/hooks/useDbConnect";
import { cn } from "@/lib/utils";

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
        <code className="font-mono text-cyan-200">{dbName}</code>
        <code
          className={cn(
            "font-mono text-sm text-gray-500 transition-all duration-[1200ms]",
            status === "Ok" && "text-cyan-500",
          )}
        >
          db status:{" "}
          {status === "connecting" ? (
            <span className="text-cyan-900">connecting...</span>
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
          className={cn(
            "transtion-all rounded border border-cyan-900 px-4 py-2 font-mono text-sm text-cyan-100/75 duration-300",
            status !== "connecting" &&
              "hover:border-cyan-200 hover:text-white/100",
          )}
          disabled={status === "connecting"}
        >
          {status === "Ok" ? "Disconnect" : "Connect"}
        </button>
      </div>
    </section>
  );
}
