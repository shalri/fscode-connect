import { auth, signOut } from "@/auth";

export default async function Header() {
  const session = await auth();

  return (
    <header className="container mx-auto flex max-w-5xl items-center justify-between px-6 py-10">
      <h1 className="text-4xl font-bold opacity-30">つなぐ </h1>
      {session && (
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/login" });
          }}
        >
          <button
            className="font-mono text-sm opacity-75 transition-opacity duration-300 hover:opacity-100"
            type="submit"
          >
            sign out
          </button>
        </form>
      )}
    </header>
  );
}
