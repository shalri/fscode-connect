import LoginForm from "@/components/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | FScode Connect",
};

export default function LoginPage() {
  return (
    <main className="fade-in container mx-auto flex flex-grow items-center justify-center">
      <LoginForm />
    </main>
  );
}
