import React from 'react';
import clsx from 'clsx';

const Placeholder = React.forwardRef(({
  as: Component = 'div',
  className,
  wave = false,
  card = false,
  'aria-label': ariaLabel,
  children,
  ...props
}, ref) => (
  <Component
    ref={ref}
    className={clsx(
      {
        placeholder: !card,
        'placeholder-card': card,
        'placeholder-wave': wave,
      },
      className
    )}
    aria-hidden={ariaLabel ? undefined : 'true'}
    aria-label={ariaLabel}
    aria-busy="true"
    {...props}
  >
    {children}
  </Component>
));

Placeholder.displayName = 'Placeholder';

export default Placeholder;
