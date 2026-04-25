import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Table = React.forwardRef(({
  className,
  responsive = false,
  glass = false,
  hover = false,
  striped = false,
  bordered = false,
  borderless = false,
  size,
  variant,
  children,
  ...props
}, ref) => {
  const table = (
    <table
      ref={ref}
      className={clsx(
        'table',
        {
          'table-glass': glass,
          'table-hover': hover,
          'table-striped': striped,
          'table-bordered': bordered,
          'table-borderless': borderless,
          [`table-${size}`]: size,
          [`table-${variant}`]: variant,
        },
        className
      )}
      {...props}
    >
      {children}
    </table>
  );

  return responsive ? <div className="table-responsive">{table}</div> : table;
});

Table.displayName = 'Table';
Table.propTypes = {
  className: PropTypes.string,
  responsive: PropTypes.bool,
  glass: PropTypes.bool,
  hover: PropTypes.bool,
  striped: PropTypes.bool,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'lg']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  children: PropTypes.node,
};

export default Table;
