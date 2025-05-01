'use client';
import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cn } from '@/lib/utils';
import PropTypes from 'prop-types';

const Progress = React.forwardRef(({ className, value, ...props }, ref) => {
  const [progress, setProgress] = React.useState(value || 0);

  React.useEffect(() => {
    setProgress(value || 0);
  }, [value]);

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 bg-primary transition-all"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </ProgressPrimitive.Root>
  );
});

Progress.displayName = ProgressPrimitive.Root.displayName;

Progress.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number
};

export { Progress };
