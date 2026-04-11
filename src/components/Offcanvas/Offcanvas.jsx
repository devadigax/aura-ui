import React, { useEffect } from 'react';
import clsx from 'clsx';

const Offcanvas = React.forwardRef(({
  className,
  isOpen = false,
  placement = 'start',
  onClose,
  children,
  ...props
}, ref) => {
  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && onClose) onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <div
        className={clsx('offcanvas-backdrop', { show: isOpen })}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={ref}
        className={clsx('offcanvas', `offcanvas-${placement}`, { show: isOpen }, className)}
        {...props}
      >
        {children}
      </div>
    </>
  );
});

Offcanvas.displayName = 'Offcanvas';

const OffcanvasHeader = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={clsx('offcanvas-header', className)} {...props}>
    {children}
  </div>
));

OffcanvasHeader.displayName = 'Offcanvas.Header';

const OffcanvasTitle = React.forwardRef(({ className, as: Component = 'h5', children, ...props }, ref) => (
  <Component ref={ref} className={clsx('offcanvas-title', className)} {...props}>
    {children}
  </Component>
));

OffcanvasTitle.displayName = 'Offcanvas.Title';

const OffcanvasBody = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={clsx('offcanvas-body', className)} {...props}>
    {children}
  </div>
));

OffcanvasBody.displayName = 'Offcanvas.Body';

Offcanvas.Header = OffcanvasHeader;
Offcanvas.Title = OffcanvasTitle;
Offcanvas.Body = OffcanvasBody;

export default Offcanvas;
