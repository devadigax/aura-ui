import React from 'react';
import clsx from 'clsx';

const Spinner = React.forwardRef(({
  className,
  type = 'border',
  variant = 'primary',
  size,
  ...props
}, ref) => (
  <div
    ref={ref}
    className={clsx(
      `spinner-${type}`,
      `spinner-${variant}`,
      { [`spinner-${size}`]: size },
      className
    )}
    {...props}
  />
));

Spinner.displayName = 'Spinner';

export default Spinner;
