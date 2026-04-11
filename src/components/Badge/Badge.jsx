import React from 'react';
import clsx from 'clsx';

const Badge = React.forwardRef(({
  as: Component = 'span',
  className,
  variant = 'primary',
  pill = false,
  solid = false,
  dot = false,
  children,
  ...props
}, ref) => (
  <Component
    ref={ref}
    className={clsx(
      'badge',
      solid ? `badge-solid-${variant}` : `badge-${variant}`,
      {
        'badge-pill': pill,
        'badge-dot': dot,
      },
      className
    )}
    {...props}
  >
    {children}
  </Component>
));

Badge.displayName = 'Badge';

export default Badge;
