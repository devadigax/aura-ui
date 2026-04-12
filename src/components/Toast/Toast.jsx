import React, { useEffect } from 'react';
import clsx from 'clsx';

const Toast = React.forwardRef(({ className, variant = 'primary', show = false, duration, onClose, children, ...props }, ref) => {
  useEffect(() => {
    if (show && duration && onClose) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  return (
    <div
      ref={ref}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      className={clsx('toast', `toast-${variant}`, { show }, className)}
      {...props}
    >
      {children}
    </div>
  );
});

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
