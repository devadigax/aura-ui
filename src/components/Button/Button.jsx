import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './button.css';

const Button = React.forwardRef(({
  children,
  variant = 'primary',
  size = 'default',
  disabled = false,
  loading = false,
  className,
  onClick,
  as: Component = 'button',
  ...props
}, ref) => {
  const isOutline = variant.startsWith('outline-');
  
  const isNativeButton = Component === 'button' || Component === undefined;

  const handleClick = (e) => {
    if ((disabled || loading) && !isNativeButton) {
      e.preventDefault();
      return;
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Component
      ref={ref}
      {...(isNativeButton && { disabled: disabled || loading })}
      aria-disabled={disabled || loading || undefined}
      className={clsx(
        'btn',
        `btn-${variant}`,
        {
          'btn-sm': size === 'sm',
          'btn-lg': size === 'lg',
          'btn-loading': loading,
          'disabled': disabled,
        },
        className
      )}
      onClick={handleClick}
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

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'default', 'lg']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  as: PropTypes.elementType,
};

Button.displayName = 'Button';

export default Button;
