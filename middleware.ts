// middleware.ts
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  // protect everything except public assets/api
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
