import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    // DATABASE_URL: z.string().url(),
    GOOGLE_CLIENT_ID: z.string().min(1),
    GOOGLE_CLIENT_SECRET: z.string().min(1),
  },
  client: {

  },

  // runtimeEnv: {
  //   // DATABASE_URL: process.env.DATABASE_URL,
  //   GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  //   GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  // },
  // For Next.js >= 13.4.4, you only need to destructure client variables:
  experimental__runtimeEnv: {    
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  }
});
