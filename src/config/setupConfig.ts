import dotenv from 'dotenv';

dotenv.config({});

class SetupConfig {
  public NEXT_PUBLIC_APP_URL: string | undefined;
  public NEXT_PUBLIC_APP_API: string | undefined;
  public NEXTAUTH_URL: string | undefined;
  public NEXTAUTH_SECRET: string | undefined;
  public GOOGLE_CLIENT_ID: string | undefined;
  public GOOGLE_CLIENT_SECRET: string | undefined;
  public NEXT_PUBLIC_APP_DEBUG_API: string | undefined;
  // public DATABASE_URL: string | undefined;

  constructor() {
    this.NEXT_PUBLIC_APP_URL = process.env.NEXT_PUBLIC_APP_URL || '';
    this.NEXT_PUBLIC_APP_API = process.env.NEXT_PUBLIC_APP_API || '';
    this.NEXTAUTH_URL = process.env.NEXTAUTH_URL || '';
    this.NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET || '';
    this.GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
    this.GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '';
    this.NEXT_PUBLIC_APP_DEBUG_API =
      process.env.NEXT_PUBLIC_APP_DEBUG_API || '';
    // this.DATABASE_URL = process.env.DATABASE_URL || '';
  }

  public validateConfig(): void {
    for (const [key, value] of Object.entries(this)) {
      if (value === undefined) {
        throw new Error(`Configuration ${key} is undefined.`);
      }
    }
  }
}

export const setupConfig: SetupConfig = new SetupConfig();
