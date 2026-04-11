import React from 'react';
import clsx from 'clsx';

const Table = React.forwardRef(({
  className,
  responsive = false,
  glass = false,
  hover = false,
  children,
  ...props
}, ref) => {
  const table = (
    <table
      ref={ref}
      className={clsx('table', { 'table-glass': glass, 'table-hover': hover }, className)}
      {...props}
    >
      {children}
    </table>
  );

  return responsive ? <div className="table-responsive">{table}</div> : table;
});

Table.displayName = 'Table';

export default Table;
