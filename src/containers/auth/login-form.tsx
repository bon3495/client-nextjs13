'use client';

import { FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { userAuthSchema, UserAuthSchema } from '@/lib/validations/login';
import { Button } from '@/components/ui/button';
import { InputField } from '@/components/form';

interface ILoginFormProps {}

const LoginForm: FC<ILoginFormProps> = ({}) => {
  const { handleSubmit, control } = useForm<UserAuthSchema>({
    resolver: zodResolver(userAuthSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: UserAuthSchema) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
      id="authLoginForm"
    >
      <InputField
        name="email"
        control={control}
        placeholder="email@example.com"
        id="authLoginEmail"
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

      <Button>Sign In with Email</Button>
    </form>
  );
};

export default LoginForm;
