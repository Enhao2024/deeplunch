import { NextResponse, type NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { getBaseSiteUrl } from '@/utils/GeneralUtils';

export const dynamic = 'force-dynamic';

const {
  COGNITO_DOMAIN,
  COGNITO_APP_CLIENT_ID,
  COGNITO_APP_CLIENT_SECRET,
} = process.env;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const code = searchParams.get('code') as string;

    if (!code) {
      const error = searchParams.get('error');
      return NextResponse.json({ error: error || 'Unknown error' });
    }

    const authorizationHeader = `Basic ${Buffer.from(`${COGNITO_APP_CLIENT_ID}:${COGNITO_APP_CLIENT_SECRET}`).toString('base64')}`;
    const redirectUri = `${getBaseSiteUrl()}/api/auth/callback`;

    const requestBody = new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: COGNITO_APP_CLIENT_ID as string,
      code,
      redirect_uri: redirectUri,
    });

    // Get tokens
    const res = await fetch(`${COGNITO_DOMAIN}/oauth2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: authorizationHeader,
      },
      body: requestBody,
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json({
        error: data.error,
        error_description: data.error_description,
      });
    }

    // Store tokens in cookies
    const cookieStore = cookies();

    // `id_token` in browser
    cookieStore.set('id_token', data.id_token, {
      path: '/',
      maxAge: 60 * 60, // 1 hour
      sameSite: 'lax',
    });

    // `access_token` as `httpOnly`，frontend can't visit
    cookieStore.set('access_token', data.access_token, {
      path: '/',
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60, // 1 hour
      sameSite: 'lax',
    });

    // `refresh_token` as `httpOnly + Secure`，prevent CSRF
    cookieStore.set('refresh_token', data.refresh_token, {
      path: '/',
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24 * 30, // 30 days
      sameSite: 'strict',
    });

    return NextResponse.redirect(new URL(`${getBaseSiteUrl()}/dashboard`));
  } catch (error) {
    return NextResponse.json({ error });
  }
}
