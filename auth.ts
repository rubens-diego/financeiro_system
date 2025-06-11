import { loginaction } from "@/actions/login";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      authorize: async (credentials) => {
        
        const user = await loginaction( 
          credentials.email as string,
          credentials.password as string
        );

        if (user) {
          return user
        }

        return null;
      },
    }),
  ],
});
