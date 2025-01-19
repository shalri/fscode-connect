"use server";

import { signIn } from "@/auth";
import { redirect } from "next/navigation";

export async function authenticate(formData: FormData) {
  try {
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    // Redirect on success
    redirect("/");
  } catch (error) {
    console.error("Authentication failed:", error);
    throw error; // re-throw error for the client component to handle
  }
}
