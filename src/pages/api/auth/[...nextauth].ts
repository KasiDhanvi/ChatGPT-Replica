import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Load environment variables from .env.local
const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

if (!googleClientId || !googleClientSecret) {
  throw new Error("Google client ID or client secret not provided.");
}

export const authOptions = {
    secret: process.env.AUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: googleClientId,
            clientSecret: googleClientSecret,
        }),
    ],
};

export default NextAuth(authOptions);
