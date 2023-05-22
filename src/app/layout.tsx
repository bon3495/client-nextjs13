import {
  Dancing_Script as FontDancing,
  Inter as FontSans,
} from 'next/font/google';
import localFont from 'next/font/local';

// import { ThemeProvider } from '@/components/ThemeProvider';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import SetupConfig from '@/components/setup-config';
import { TailwindIndicator } from '@/components/tailwind-indicator';

import '@/styles/globals.css';
import Providers from '@/app/providers';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontDancing = FontDancing({
  subsets: ['latin'],
  variable: '--font-dancing',
});

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
});

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'Server Components'],
  authors: [
    {
      name: 'Bon Tran',
      url: 'https://github.com/bon3495?tab=repositories',
    },
  ],
  creator: 'Bon',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontHeading.variable,
          fontDancing.variable
        )}
      >
        <Providers>
          <SetupConfig>
            {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
            {children}
            <TailwindIndicator />
            {/* </ThemeProvider> */}
          </SetupConfig>
        </Providers>
      </body>
    </html>
  );
}
