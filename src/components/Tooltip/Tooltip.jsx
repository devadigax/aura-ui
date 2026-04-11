import React from 'react';

const Tooltip = React.forwardRef(({ text, position = 'top', children, ...props }, ref) => (
  <span ref={ref} data-tooltip={text} data-tooltip-pos={position} {...props}>
    {children}
  </span>
));

Tooltip.displayName = 'Tooltip';

export default Tooltip;
