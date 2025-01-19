import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      // NOTE: never ever do this in production
      authorize: async (credentials) => {
        if (
          credentials?.email === process.env.USER_EMAIL &&
          credentials?.password === process.env.USER_PASSWORD
        ) {
          return { id: "1", email: process.env.USER_EMAIL }; // user object
        }
        return null;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login", // override the `api/auth/signin` route
  },
});
