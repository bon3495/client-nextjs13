import { Inter as FontSans } from 'next/font/google';
import localFont from 'next/font/local';

import SetupConfig from '@/components/SetupConfig';
import { TailwindIndicator } from '@/components/TailwindIndicator';

// import { ThemeProvider } from '@/components/ThemeProvider';

import '@/styles/globals.css';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
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
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <SetupConfig>
          {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
          {children}
          <TailwindIndicator />
          {/* </ThemeProvider> */}
        </SetupConfig>
      </body>
    </html>
  );
}
