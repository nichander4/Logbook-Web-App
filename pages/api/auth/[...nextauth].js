import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "helpers/Login";

const option = {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const loginData = {
          username: credentials.username,
          password: credentials.password,
        };

        try {
          return login(loginData).then((data) => {
            console.log(data);
          });
        } catch (error) {
          throw new Error("There was an error on user authentication");
        }
      },
    }),
  ],
  session: {
    jwt: true,
    maxAge: 1 * 24 * 60 * 60, // Expiration: 1 month
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
  pages: {
    signIn: "/auth",
    signOut: "/",
  },
};

export default (req, res) => NextAuth(req, res, options);
