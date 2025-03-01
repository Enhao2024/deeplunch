import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { PROTECTED_PAGE } from './utils/MenuConfig';
import { decodeIdToken, isTokenExpired } from './utils/GeneralUtils';
import { Profile } from './types/common';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const isProtectedPage = PROTECTED_PAGE.reduce((acc, menu) => acc || menu?.href === pathname, false)

    if (isProtectedPage) {
        const token = request.cookies.get('id_token')?.value;
        if (token && !isTokenExpired(token)) {
          const decodedToken = decodeIdToken(token);
          const result: Profile = {
            name: decodedToken['name'],
            picture: decodedToken['picture'],
            email: decodedToken['email']
          }
          if (!result.email) return NextResponse.redirect(new URL('/', request.url));
        } else {
          return NextResponse.redirect(new URL('/', request.url));
        }
    }

    return NextResponse.next(); // if login, pass
}

// only intercept protected routes
export const config = {
    matcher: PROTECTED_PAGE.map((menu)=>menu.href)
};
