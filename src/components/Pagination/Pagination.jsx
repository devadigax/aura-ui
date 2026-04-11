import React, { useState } from 'react';
import clsx from 'clsx';

const Pagination = React.forwardRef(({
  className,
  pages = 1,
  defaultPage = 1,
  pill = false,
  size,
  ...props
}, ref) => {
  const [activePage, setActivePage] = useState(defaultPage);

  return (
    <ul
      ref={ref}
      className={clsx('pagination', { 'pagination-pill': pill, [`pagination-${size}`]: size }, className)}
      {...props}
    >
      <li className={clsx('page-item', { disabled: activePage === 1 })}>
        <button type="button" className="page-link" onClick={() => activePage > 1 && setActivePage((value) => value - 1)}>
          <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
      </li>
      {Array.from({ length: pages }, (_, index) => index + 1).map((page) => (
        <li key={page} className={clsx('page-item', { active: page === activePage })}>
          <button type="button" className="page-link" onClick={() => setActivePage(page)}>
            {page}
          </button>
        </li>
      ))}
      <li className={clsx('page-item', { disabled: activePage === pages })}>
        <button type="button" className="page-link" onClick={() => activePage < pages && setActivePage((value) => value + 1)}>
          <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </li>
    </ul>
  );
});

Pagination.displayName = 'Pagination';

export default Pagination;
