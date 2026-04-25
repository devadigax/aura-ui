import React, { useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useScrollLock } from '../../hooks/useScrollLock';
import { useFocusTrap } from '../../hooks/useFocusTrap';

const Offcanvas = React.forwardRef(({
  className,
  isOpen = false,
  placement = 'start',
  onClose,
  children,
  ...props
}, ref) => {
  const internalRef = useRef(null);

  const setRefs = useCallback(
    (node) => {
      internalRef.current = node;
      if (typeof ref === 'function') ref(node);
      else if (ref) ref.current = node;
    },
    [ref]
  );

  useScrollLock(isOpen);
  useFocusTrap(internalRef, isOpen);

  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && onClose) onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div
        className={clsx('offcanvas-backdrop', { show: isOpen })}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={setRefs}
        className={clsx('offcanvas', `offcanvas-${placement}`, { show: isOpen }, className)}
        {...props}
      >
        {children}
      </div>
    </>,
    document.body
  );
});

Offcanvas.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  placement: PropTypes.oneOf(['start', 'end', 'top', 'bottom']),
  onClose: PropTypes.func,
  children: PropTypes.node,
};

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
