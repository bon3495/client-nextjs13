'use client';

import { FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { LogInSchema, TLogInSchema } from '@/lib/validations/login';
import { InputField } from '@/components/form';
import { Button } from '@/components/ui/button';

interface ILoginFormProps {}

const LoginForm: FC<ILoginFormProps> = ({}) => {
  const { handleSubmit, control } = useForm<TLogInSchema>({
    resolver: zodResolver(LogInSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = (data: TLogInSchema) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
      id="authLoginForm"
    >
      <InputField
        name="username"
        control={control}
        placeholder="Enter your user name"
        id="authLoginUserName"
        autoComplete="username"
      />
      <InputField
        name="password"
        control={control}
        placeholder="Enter your password"
        type="password"
        id="authLoginPassword"
        autoComplete="current-password"
      />

      <Button>
        {/* {isLoading ? (
          <Icons.spinner className="w-4 h-4 animate-spin" />
        ) : ( */}
        Sign In
        {/* )} */}
      </Button>
    </form>
  );
};

export default LoginForm;
