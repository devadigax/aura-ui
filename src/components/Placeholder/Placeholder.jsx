import React from 'react';
import clsx from 'clsx';

const Placeholder = React.forwardRef(({
  as: Component = 'div',
  className,
  wave = false,
  card = false,
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
    {...props}
  >
    {children}
  </Component>
));

Placeholder.displayName = 'Placeholder';

export default Placeholder;
