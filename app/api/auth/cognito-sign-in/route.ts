import { getBaseSiteUrl } from '@/utils/GeneralUtils';
import crypto from 'crypto';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const {
  COGNITO_DOMAIN,
  COGNITO_APP_CLIENT_ID,
} = process.env;

export async function GET() {
  const authorizeParams = new URLSearchParams();

  const redirectUri = `${getBaseSiteUrl()}/api/auth/callback`;

  const state = crypto.randomBytes(16).toString('hex');

  authorizeParams.append('response_type', 'code');
  authorizeParams.append('client_id', COGNITO_APP_CLIENT_ID as string);
  authorizeParams.append('redirect_uri', redirectUri);
  authorizeParams.append('state', state);
  authorizeParams.append('identity_provider', 'Google,Cognito');
  authorizeParams.append('scope', 'profile email openid');

  return NextResponse.redirect(`${COGNITO_DOMAIN}/login/continue?${authorizeParams.toString()}`);
}
