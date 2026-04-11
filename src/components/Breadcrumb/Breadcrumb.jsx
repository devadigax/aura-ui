import React from 'react';
import clsx from 'clsx';

const Breadcrumb = React.forwardRef(({
  className,
  glass = false,
  divider,
  children,
  ...props
}, ref) => (
  <ol
    ref={ref}
    className={clsx('breadcrumb', { 'breadcrumb-glass': glass }, className)}
    data-divider={divider}
    {...props}
  >
    {children}
  </ol>
));

Breadcrumb.displayName = 'Breadcrumb';

const BreadcrumbItem = React.forwardRef(({
  className,
  active = false,
  href,
  children,
  ...props
}, ref) => (
  <li ref={ref} className={clsx('breadcrumb-item', { active }, className)} {...props}>
    {active || !href ? children : <a href={href}>{children}</a>}
  </li>
));

BreadcrumbItem.displayName = 'Breadcrumb.Item';

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
