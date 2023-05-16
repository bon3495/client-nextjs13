'use client';

import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { InputField } from '@/components/form';

const Form = () => {
  const { handleSubmit, control } = useForm<{
    firstName: string;
    password: string;
  }>({
    defaultValues: {
      firstName: '',
      password: '',
    },
  });

  const onSubmit = (data: { firstName: string }) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col mt-[200px] w-[420px] gap-4"
    >
      <InputField
        name="firstName"
        control={control}
        placeholder="First Name"
        label="First Name"
        id="formFirstName"
      />
      <InputField
        name="password"
        control={control}
        placeholder="Password"
        label="Password"
        type="password"
        id="formPassword"
      />

      <div className="w-1/2 mx-auto">
        <Button className="w-full">Submit</Button>
      </div>
    </form>
  );
};

export default Form;
