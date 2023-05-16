import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, type = 'text', disabled, ...props }, ref) => {
    return (
      <input
        type={type}
        disabled={disabled}
        className={cn(
          'flex h-12 w-full rounded-sm border bg-transparent px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-4 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 outline-none',
          {
            'border-input focus-visible:ring-ring/25 focus:ring-ring/25 hover:border-ring focus:border-ring':
              !error && !disabled,
            'border-destructive focus-visible:ring-destructive/25 focus:ring-destructive/25 hover:border-destructive focus:border-destructive':
              error,
            'hover:border-input': disabled,
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export default Input;
