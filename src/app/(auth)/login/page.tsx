import { Metadata } from 'next';
import Link from 'next/link';

import LoginForm from '@/containers/auth/login-form';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account',
};

export default function LoginPage() {
  return (
    <section className="container flex flex-col items-center justify-center w-screen h-screen">
      <div className="relative z-10 w-full max-w-[420px] rounded-lg bg-white p-4 shadow-form backdrop-blur-2xl sm:p-8 md:max-w-[550px] shadow-2xl">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[380px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="mx-auto text-3xl font-bold w-fit font-dancing text-primary sm:text-5xl">
              Welcome back
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email to sign in to your account
            </p>
          </div>
          <LoginForm />

          <p className="relative my-3 text-center before:absolute before:left-0 before:top-1/2 before:block before:h-[1px] before:w-[40%] before:-translate-y-1/2 before:bg-border before:content-[''] after:absolute after:right-0 after:top-1/2 after:block after:h-[1px] after:w-[40%] after:-translate-y-1/2 after:bg-border after:content-[''] sm:my-5 before:sm:w-[32%] after:sm:w-[32%]">
            <span className="relative z-10 px-3 text-sm text-ring">
              Or continue with
            </span>
          </p>
          <p className="px-8 text-sm text-center text-muted-foreground">
            <Link
              href="/register"
              className="underline hover:text-brand underline-offset-4"
            >
              Don&apos;t have an account? Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
