"use client";
import { authenticate } from "@/actions/user.actions";
import { useState } from "react";

export default function LoginForm() {
  const [error, setError] = useState("");

  const handleSubmit = async (formData: FormData) => {
    try {
      await authenticate(formData);
    } catch (error) {
      console.error("Failed to log in:", error);
      setError("Invalid email or password");
    }
  };
  return (
    <div>
      <form action={handleSubmit} className="space-y-4 font-mono">
        <div>
          <label htmlFor="email">
            <input
              type="email"
              className="appearance-none bg-background text-cyan-100 caret-cyan-300 outline-none"
              name="email"
              placeholder="email"
              autoFocus
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            <input
              type="password"
              placeholder="password"
              className="appearance-none bg-background text-cyan-100 caret-cyan-300 outline-none focus:text-cyan-100"
              name="password"
            />
          </label>
        </div>
        {error && <p className="text-sm text-red-400">{error}</p>}
        <button className="appearance-none opacity-70 outline-none transition-opacity duration-300 hover:opacity-100 focus:border-0">
          sign in
        </button>
      </form>
    </div>
  );
}
