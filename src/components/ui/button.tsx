import * as React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-25 disabled:pointer-events-none active:scale-95 transition-all duration-200 focus:ring-offset-2 outline-none',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary/50 focus:ring-2 focus-visible:ring-primary/50',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 focus:ring-destructive/50 focus:ring-2 focus-visible:ring-destructive/50',
        outline:
          'border border-input hover:bg-accent hover:text-accent-foreground focus:ring-input focus:ring-2 focus-visible:ring-input',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/90 focus:ring-secondary focus:ring-2 focus-visible:ring-secondary',
        ghost:
          'hover:bg-accent hover:text-accent-foreground focus-visible:ring-accent focus:ring-accent focus:ring-2',
        link: 'underline-offset-4 hover:underline text-primary focus:ring-slate-400',
        logo: 'hover:bg-accent border-none focus-visible:ring-accent',
      },
      size: {
        default: 'h-12 py-2 px-4',
        sm: 'h-10 px-3 rounded-lg',
        iconSm: 'px-8 rounded-lg',
        iconLg: 'h-11 px-8 rounded-lg',
        iconDefault: 'p-2 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
