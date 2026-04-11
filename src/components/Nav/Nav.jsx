import React from 'react';
import clsx from 'clsx';

export const Navbar = React.forwardRef(({ className, children, ...props }, ref) => (
  <nav ref={ref} className={clsx('navbar', 'navbar-glass', className)} {...props}>
    {children}
  </nav>
));

Navbar.displayName = 'Navbar';

const Nav = React.forwardRef(({
  as: Component = 'ul',
  className,
  variant = 'pills',
  children,
  ...props
}, ref) => (
  <Component
    ref={ref}
    className={clsx(
      variant.startsWith('navbar') ? 'navbar-nav' : 'nav',
      {
        'nav-pills': variant === 'pills',
        'nav-tabs': variant === 'tabs',
        'nav-underline': variant === 'underline',
        'navbar-underline': variant === 'navbar-underline',
      },
      className
    )}
    {...props}
  >
    {children}
  </Component>
));

Nav.displayName = 'Nav';

const NavItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <li ref={ref} className={clsx('nav-item', className)} {...props}>
    {children}
  </li>
));

NavItem.displayName = 'Nav.Item';

const NavLink = React.forwardRef(({
  as: Component = 'button',
  className,
  active = false,
  children,
  ...props
}, ref) => (
  <Component
    ref={ref}
    className={clsx(Component === 'a' ? 'navbar-link' : 'nav-link', { active }, className)}
    {...props}
  >
    {children}
  </Component>
));

NavLink.displayName = 'Nav.Link';

Nav.Item = NavItem;
Nav.Link = NavLink;

export default Nav;
