import React from 'react';

import { cn } from '@/lib/utils';

interface IErrorMessageProps extends React.HTMLAttributes<HTMLSpanElement> {}

const ErrorMessage = React.forwardRef<HTMLSpanElement, IErrorMessageProps>(
  ({ className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn('text-sm text-destructive mt-1', className)}
        {...props}
      />
    );
  }
);

ErrorMessage.displayName = 'ErrorMessage';

export default ErrorMessage;
