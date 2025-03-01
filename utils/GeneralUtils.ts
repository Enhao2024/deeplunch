import { Profile } from "@/types/common";
import { CURRENT_ENV, DEV, DEV_API_URL, PREVIEW, PROD, PROD_API_URL } from "./VercelEnv";

export function safeParseInt(str: string | undefined | null, defaultNumber: number = 0): number {
  if (!str) return defaultNumber;
  const num = parseInt(str, 10)
  return isNaN(num) ? defaultNumber : num;
}

export function getBaseAPIUrl() {
  switch (CURRENT_ENV) {
    case PROD:
      return PROD_API_URL;
    case DEV:
      return DEV_API_URL;
    case PREVIEW:
      return '';
    default:
      return '';
  }
}

export function getBaseSiteUrl() {
  switch (CURRENT_ENV) {
    case PROD:
      return 'https://www.goodafterlunch.com';
    case DEV:
      return 'http://localhost:3000';
    case PREVIEW:
      return '';
    default:
      return '';
  }
}


export function inProduction() {
  return CURRENT_ENV === PROD;
}

export function inDevelopment() {
  return CURRENT_ENV === DEV;
}

export function inPreview() {
  return CURRENT_ENV === PREVIEW;
}

export function isTokenExpired(token: string): boolean {
  try {
      const payload = JSON.parse(atob(token.split('.')[1])) // get JWT payload
      const exp = payload.exp // get expire time (in seconds)
      return Date.now() >= exp * 1000 // Date.now() is in ms
  } catch (error) {
      return true // regard failed parsing as expired
  }
}


export function decodeIdToken(token: string) {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
      .join('')
  )
  return JSON.parse(jsonPayload)
}

export function getProfile(idToken: string | undefined) {
  if (idToken && !isTokenExpired(idToken)) {
    const decodedToken = decodeIdToken(idToken);
    const profile: Profile = {
      name: decodedToken['name'],
      picture: decodedToken['picture'],
      email: decodedToken['email']
    }
    return profile;
  }
  return null;
}
