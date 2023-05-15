'use client';

import { useState } from 'react';
import {
  Control,
  FieldPath,
  FieldValues,
  useController,
} from 'react-hook-form';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Input from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ErrorMessage } from '@/components/form';
import { Icons } from '@/components/icons';

interface IInputFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends React.InputHTMLAttributes<HTMLInputElement> {
  control: Control<TFieldValues>;
  name: TFieldName;
  extendOnchange?: <TValue>(value: TValue) => void;
  label?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
}

const InputField = <
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  extendOnchange,
  label,
  id,
  wrapperClassName,
  labelClassName,
  errorClassName,
  type,
  className,
  ...props
}: IInputFieldProps<TFieldValues, TFieldName>) => {
  const {
    field: { onChange, ...restField },
    fieldState: { error },
  } = useController({
    name,
    control,
  });
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <div className={cn('flex flex-col', wrapperClassName)}>
      {label && (
        <Label
          htmlFor={id}
          className={cn('mb-1 text-base leading-5', labelClassName)}
        >
          {label}
        </Label>
      )}
      <div className="relative">
        {type === 'password' && (
          <Button
            variant="logo"
            size="iconDefault"
            onClick={() => setIsShowPassword(prev => !prev)}
            className="absolute -translate-y-1/2 right-3 top-1/2 peer"
            tabIndex={2}
          >
            {isShowPassword ? (
              <Icons.eyeShow className="w-5 h-5" />
            ) : (
              <Icons.eyeOff className="w-5 h-5" />
            )}
          </Button>
        )}
        <Input
          {...props}
          {...restField}
          type={
            type === 'password' ? (isShowPassword ? 'text' : 'password') : type
          }
          id={id}
          onChange={e => {
            onChange(e.target.value);
            extendOnchange?.(e.target);
          }}
          error={error?.message}
          className={cn('peer-hover:border-ring pr-[60px]', className)}
          tabIndex={1}
        />
      </div>
      {error?.message && (
        <ErrorMessage className={errorClassName}>{error?.message}</ErrorMessage>
      )}
    </div>
  );
};

export default InputField;
