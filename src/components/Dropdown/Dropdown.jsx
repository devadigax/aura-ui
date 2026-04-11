import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';

const DropdownContext = createContext(null);

function useDropdownContext() {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('Dropdown components must be used within Dropdown');
  }
  return context;
}

const Dropdown = React.forwardRef(({ className, children, defaultOpen = false, ...props }, ref) => {
  const [open, setOpen] = useState(defaultOpen);
  const innerRef = useRef(null);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (innerRef.current && !innerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, []);

  const value = useMemo(() => ({ open, setOpen }), [open]);

  return (
    <DropdownContext.Provider value={value}>
      <div
        ref={(node) => {
          innerRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        className={clsx('dropdown', { open }, className)}
        {...props}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
});

Dropdown.displayName = 'Dropdown';

const DropdownTrigger = React.forwardRef(({ className, children, ...props }, ref) => {
  const { open, setOpen } = useDropdownContext();

  return (
    <button
      ref={ref}
      type="button"
      className={className}
      aria-expanded={open}
      onClick={() => setOpen((value) => !value)}
      {...props}
    >
      {children}
    </button>
  );
});

DropdownTrigger.displayName = 'Dropdown.Trigger';

const DropdownMenu = React.forwardRef(({ className, children, ...props }, ref) => (
  <ul ref={ref} className={clsx('dropdown-menu', className)} {...props}>
    {children}
  </ul>
));

DropdownMenu.displayName = 'Dropdown.Menu';

const DropdownHeader = React.forwardRef(({ className, children, ...props }, ref) => (
  <li ref={ref} className={clsx('dropdown-header', className)} {...props}>
    {children}
  </li>
));

DropdownHeader.displayName = 'Dropdown.Header';

const DropdownItem = React.forwardRef(({
  className,
  danger = false,
  href = '#',
  icon,
  children,
  ...props
}, ref) => (
  <li>
    <a
      ref={ref}
      href={href}
      className={clsx('dropdown-item', { 'dropdown-item-danger': danger }, className)}
      {...props}
    >
      {icon}
      {children}
    </a>
  </li>
));

DropdownItem.displayName = 'Dropdown.Item';

const DropdownDivider = React.forwardRef(({ className, ...props }, ref) => (
  <li ref={ref} className={clsx('dropdown-divider', className)} {...props} />
));

DropdownDivider.displayName = 'Dropdown.Divider';

Dropdown.Trigger = DropdownTrigger;
Dropdown.Menu = DropdownMenu;
Dropdown.Header = DropdownHeader;
Dropdown.Item = DropdownItem;
Dropdown.Divider = DropdownDivider;

export default Dropdown;
