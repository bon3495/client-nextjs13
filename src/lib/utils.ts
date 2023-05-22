import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { setupConfig } from '@/config/setupConfig';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Write a function to gets values and log errors if we don't set them.
 * So we know what the errors is in PRODUCTION.
 */
export function getGoogleCredentials() {
  const clientId = setupConfig.GOOGLE_CLIENT_ID;
  const clientSecret = setupConfig.GOOGLE_CLIENT_SECRET;

  if (!clientId || clientId.length === 0) {
    throw new Error('Missing GOOGLE_CLIENT_ID');
  }

  if (!clientSecret || clientSecret.length === 0) {
    throw new Error('Missing GOOGLE_CLIENT_SECRET');
  }

  return {
    clientId,
    clientSecret,
  };
}
