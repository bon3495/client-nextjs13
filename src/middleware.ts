import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  //Manage route protection
  const isAuth = '';

  const isLoginPage = pathname.startsWith('/login');

  // Nobody should be able to access the sensitive routes if they are not logged in.
  const sensitiveRoutes = ['/dashboard'];

  // Check if they are trying to access sensitive routes
  const isAccessingSensitiveRoutes = sensitiveRoutes.some(route =>
    pathname.startsWith(route)
  );

  if (isLoginPage) {
    if (isAuth) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    // If a user is not authenticated and trying to navigate to the login page, return NextResponse.next() to instruct the middleware to pass along the request.
    return NextResponse.next();
  }

  // If a user is not authenticated and trying to access sensitive routes, redirect user to login page.
  if (!isAuth && isAccessingSensitiveRoutes) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  if (pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/login', '/dashboard/:path*'],
};
