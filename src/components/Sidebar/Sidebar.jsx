import React from 'react';
import clsx from 'clsx';

const Sidebar = React.forwardRef(({ className, active = false, children, ...props }, ref) => (
  <aside
    ref={ref}
    className={clsx('sidebar', 'glass', { active }, className)}
    {...props}
  >
    {children}
  </aside>
));

Sidebar.displayName = 'Sidebar';

const SidebarTop = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={clsx('sidebar-top', className)} {...props}>
    {children}
  </div>
));

SidebarTop.displayName = 'Sidebar.Top';

const SidebarBrand = React.forwardRef(({ as: Component = 'a', className, children, ...props }, ref) => (
  <Component ref={ref} className={clsx('logo', className)} {...props}>
    {children}
  </Component>
));

SidebarBrand.displayName = 'Sidebar.Brand';

const SidebarNav = React.forwardRef(({ className, children, ...props }, ref) => (
  <nav ref={ref} className={clsx('sidebar-links', className)} {...props}>
    {children}
  </nav>
));

SidebarNav.displayName = 'Sidebar.Nav';

const SidebarSection = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={clsx('nav-section-label', className)} {...props}>
    {children}
  </div>
));

SidebarSection.displayName = 'Sidebar.Section';

const SidebarFooter = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={clsx('sidebar-footer', className)} {...props}>
    {children}
  </div>
));

SidebarFooter.displayName = 'Sidebar.Footer';

Sidebar.Top = SidebarTop;
Sidebar.Brand = SidebarBrand;
Sidebar.Nav = SidebarNav;
Sidebar.Section = SidebarSection;
Sidebar.Footer = SidebarFooter;

export default Sidebar;
