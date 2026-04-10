import React from 'react';
import clsx from 'clsx';
import './button.css';

const Button = React.forwardRef(({
  children,
  variant = 'primary',
  size = 'default',
  disabled = false,
  loading = false,
  className,
  as: Component = 'button',
  ...props
}, ref) => {
  const isOutline = variant.startsWith('outline-');
  
  return (
    <Component
      ref={ref}
      disabled={disabled || loading}
      className={clsx(
        'btn',
        `btn-${variant}`,
        {
          'btn-sm': size === 'sm',
          'btn-lg': size === 'lg',
          'btn-loading': loading,
          'disabled': disabled
        },
        className
      )}
      {...props}
    >
      {loading && (
        <div className={clsx(
          'spinner-border',
          'spinner-sm',
          isOutline || variant === 'light' || variant === 'ghost' ? `spinner-${variant.replace('outline-', '')}` : 'spinner-white'
        )} />
      )}
      {children}
    </Component>
  );
});

Button.displayName = 'Button';

export default Button;
