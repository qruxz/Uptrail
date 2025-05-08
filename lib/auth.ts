import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

declare module "next-auth" {
  interface User {
    isAdmin?: boolean;
  }
  interface Session {
    user?: User & {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async session({ session, token }) {
      if (session?.user) {
        session.user.isAdmin = token.isAdmin as boolean;
        session.user.id = token.sub;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
        session.user.image = token.picture as string;
      }
      return session;
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.isAdmin = true; // For now, make everyone admin
      }
      return token;
    },
  },
};

// Basic auth middleware
export async function isAuthenticated(request: Request) {
  // For now, return true as we haven't implemented authentication yet
  return true;
}

export async function isAdmin(request: Request) {
  // For now, return true as we haven't implemented admin authentication yet
  return true;
}
