import { useEffect, useState } from "react";

type DbConnectionStatus = "connecting" | "Ok" | "Disconnected" | "error";

export function useDbConnect(connectDbApi: string, disconnectDbApi: string) {
  const [status, setStatus] = useState<DbConnectionStatus>("connecting");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const dbConnect = async () => {
      try {
        const response = await fetch(connectDbApi);
        const data = await response.json();

        if (!response.ok || data.error) {
          setStatus("error");
          setError(data.error || "Failed to connect");
        } else if (data.message) {
          setStatus("Ok");
          setError(null);
        }
      } catch (error) {
        console.log("Failed to connect to database:", error);
        setStatus("error");
        setError("Failed to connect");
      }
    };
    dbConnect();
  }, [connectDbApi]);

  const toggleConnection = async () => {
    setStatus("connecting");
    try {
      const response = await fetch(
        status === "Ok" ? disconnectDbApi : connectDbApi,
        { method: status === "Ok" ? "POST" : "GET" },
      );
      const data = await response.json();
      if (!response.ok || data.error) {
        setStatus("error");
        setError(
          data.error ||
            `Failed to ${status === "Ok" ? "disconnect" : "connect"}`,
        );
      } else if (data.message) {
        setStatus(status === "Ok" ? "Disconnected" : "Ok");
        setError(null);
      }
    } catch (error) {
      console.log("Failed to toggle database connection:", error);
      setStatus("error");
      setError(`Failed to ${status === "Ok" ? "disconnect" : "connect"}`);
    }
  };
  return { status, error, toggleConnection };
}
