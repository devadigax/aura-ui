import React from 'react';
import clsx from 'clsx';

const Toast = React.forwardRef(({ className, variant = 'primary', show = false, children, ...props }, ref) => (
  <div ref={ref} className={clsx('toast', `toast-${variant}`, { show }, className)} {...props}>
    {children}
  </div>
));

Toast.displayName = 'Toast';

export const ToastContainer = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={clsx('toast-container', className)} {...props}>
    {children}
  </div>
));

ToastContainer.displayName = 'ToastContainer';

const ToastBody = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={clsx('toast-body', className)} {...props}>
    {children}
  </div>
));

ToastBody.displayName = 'Toast.Body';

Toast.Body = ToastBody;

export default Toast;
