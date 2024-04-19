import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./db";
import { v4 as uuidv4 } from "uuid";
// import { env } from "./env";

export const authOptions = {
  adapter: PrismaAdapter(prisma),

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      profile(profile) {
        return {
          id: uuidv4(),
          username: profile.family_name,
          email: profile.email,
          name: profile.given_name,
          image: profile.picture,
        }; 
      },
    }),
  ],

  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        return profile.email_verified && profile.email.endsWith("@gmail.com");
      }
      return true;
    },
    session({ session, user }) {
      if (!session?.user) {
        return session;
      } else {
        session.user.id = user.id;
        return session;
      }
    },
  },
};
