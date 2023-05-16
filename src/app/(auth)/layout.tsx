import Image from 'next/image';
import bgIcon1 from '@/assets/images/auth-bg-1.svg';
import bgIcon2 from '@/assets/images/auth-bg-2.svg';
import bgIcon3 from '@/assets/images/auth-bg-3.svg';
import bgIcon4 from '@/assets/images/auth-bg-4.svg';
import bgIcon5 from '@/assets/images/auth-bg-5.svg';
import bgIcon6 from '@/assets/images/auth-bg-6.svg';

import { cn } from '@/lib/utils';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main
      className={cn(
        'relative flex max-h-screen w-full items-center justify-center bg-background p-5 overflow-hidden bg-auth'
      )}
    >
      <Image
        src={bgIcon1}
        className={cn(
          'absolute top-[10%] left-[10%] hidden lg:block animation2'
        )}
        alt="banner icon 1"
      />
      <Image
        src={bgIcon2}
        className={cn(
          'absolute top-[10%] right-[10%] hidden lg:block animation2'
        )}
        alt="banner icon 2"
      />
      <Image
        src={bgIcon3}
        className={cn(
          'absolute bottom-10 right-5 hidden lg:block 2lg:bottom-16 2lg:right-[120px] xl:right-[200px] xl:bottom-[120px] animation1'
        )}
        alt="banner icon 3"
      />
      <Image
        src={bgIcon4}
        className={cn(
          'absolute bottom-10 left-5 hidden lg:block 2lg:bottom-16 2lg:left-[120px] xl:left-[200px] xl:bottom-[120px] animation1'
        )}
        alt="banner icon 4"
      />
      <Image
        src={bgIcon5}
        className="absolute top-[10%] left-[22%] hidden lg:block"
        alt="banner icon 5"
      />

      <Image
        src={bgIcon6}
        className={cn(
          'absolute left-0 -bottom-[50px] hidden lg:block animation3'
        )}
        alt="banner icon 6"
      />
      {children}
    </main>
  );
}
