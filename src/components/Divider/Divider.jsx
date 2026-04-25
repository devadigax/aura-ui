import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './divider.css';

const Divider = React.forwardRef(({
  className,
  align = 'center',
  dashed = false,
  children,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      role="separator"
      className={clsx(
        'divider',
        `divider-${align}`,
        { 'divider-dashed': dashed, 'divider-with-content': !!children },
        className
      )}
      {...props}
    >
      {children && <span className="divider-content">{children}</span>}
    </div>
  );
});

Divider.displayName = 'Divider';
Divider.propTypes = {
  className: PropTypes.string,
  align: PropTypes.oneOf(['start', 'center', 'end']),
  dashed: PropTypes.bool,
  children: PropTypes.node,
};

export default Divider;
