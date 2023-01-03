import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "helpers/Login";

const options = {
  providers: [
    CredentialsProvider({
      credentials: {
        userName: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize(credentials) {
        const loginData = {
          username: credentials.username,
          password: credentials.password,
        };

        // return loginData;

        return login(loginData).then((data) => {
          if (!data.message) {
            return data;
          }else{
            return null;
          }
        });

        try {
        } catch (error) {
          throw new Error("There was an error on user authentication");
        }
      },
    }),
  ],
  secret: "D134E60EE2551D7F4A359A10B441F73EC733DD3E80D14D489EB4347B615BC0E7",
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
    signOut: "/auth",
    error: "/auth",
  },
};

export default (req, res) => NextAuth(req, res, options);
