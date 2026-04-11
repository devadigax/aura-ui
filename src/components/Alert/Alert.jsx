import React from 'react';
import clsx from 'clsx';

const Alert = React.forwardRef(({
  className,
  variant = 'primary',
  dismissible = false,
  heading,
  icon,
  actions,
  children,
  ...props
}, ref) => (
  <div
    ref={ref}
    className={clsx('alert', `alert-${variant}`, { 'alert-dismissible': dismissible }, className)}
    {...props}
  >
    {icon}
    <div>
      {heading ? <strong className="alert-heading">{heading}</strong> : null}
      {heading && children ? ' ' : null}
      {children}
    </div>
    {actions}
  </div>
));

Alert.displayName = 'Alert';

export default Alert;
