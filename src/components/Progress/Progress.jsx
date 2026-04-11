import React from 'react';
import clsx from 'clsx';

const Progress = React.forwardRef(({ className, stacked = false, children, ...props }, ref) => (
  <div ref={ref} className={clsx('progress', { 'progress-stacked': stacked }, className)} {...props}>
    {children}
  </div>
));

Progress.displayName = 'Progress';

const ProgressBar = React.forwardRef(({
  className,
  value = 0,
  variant = 'primary',
  gradient = false,
  animated = false,
  striped = false,
  ...props
}, ref) => (
  <div
    ref={ref}
    className={clsx(
      'progress-bar',
      gradient ? 'progress-bar-gradient' : `progress-bar-${variant}`,
      {
        'progress-bar-animated': animated,
        'progress-bar-striped': striped,
      },
      className
    )}
    style={{ width: `${value}%` }}
    {...props}
  />
));

ProgressBar.displayName = 'Progress.Bar';

Progress.Bar = ProgressBar;

export default Progress;
