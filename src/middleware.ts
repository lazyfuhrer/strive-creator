import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
//import { Secret } from 'jsonwebtoken';

//const secret = process.env.JWT_SECRET as Secret;

export async function middleware(request: NextRequest) {
  const authToken = request.cookies.get('jwtToken')?.value;
  console.log(authToken);

  const loggedInUserNotAccessPaths = request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/signup';

  if (loggedInUserNotAccessPaths) {
    if (authToken) {
      return NextResponse.redirect(new URL('/profile', request.url));
    }
  } else {
    if (!authToken) {
      return NextResponse.redirect(new URL('/login', request.url));
    } else {
      // verify token
    }
  }
}

export const config = {
  matcher: ['/', '/login', '/signup', '/upload', '/profile', '/portfolio', '/explore', '/upload-project', '/user-view'],
};