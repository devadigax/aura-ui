import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';

const PopoverContext = createContext(null);

function usePopoverContext() {
  const ctx = useContext(PopoverContext);
  if (!ctx) throw new Error('Popover sub-components must be used inside <Popover>');
  return ctx;
}

const Popover = React.forwardRef(({
  className,
  placement = 'top',
  defaultOpen = false,
  trigger = 'click', // 'click' | 'hover'
  children,
  ...props
}, ref) => {
  const [open, setOpen] = useState(defaultOpen);
  const innerRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    if (trigger !== 'click') return;
    const handlePointerDown = (e) => {
      if (innerRef.current && !innerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [trigger]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const value = useMemo(() => ({ open, setOpen, trigger, placement }), [open, trigger, placement]);

  return (
    <PopoverContext.Provider value={value}>
      <div
        ref={(node) => {
          innerRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        className={clsx('popover-wrapper', className)}
        {...props}
      >
        {children}
      </div>
    </PopoverContext.Provider>
  );
});

Popover.displayName = 'Popover';

/** The element that triggers the popover */
const PopoverTrigger = React.forwardRef(({ className, children, ...props }, ref) => {
  const { open, setOpen, trigger } = usePopoverContext();

  const triggerProps = trigger === 'hover'
    ? {
        onMouseEnter: () => setOpen(true),
        onMouseLeave: () => setOpen(false),
        onFocus: () => setOpen(true),
        onBlur: () => setOpen(false),
      }
    : { onClick: () => setOpen((v) => !v) };

  return (
    <span
      ref={ref}
      className={clsx('popover-trigger', className)}
      aria-expanded={open}
      aria-haspopup="dialog"
      {...triggerProps}
      {...props}
    >
      {children}
    </span>
  );
});

PopoverTrigger.displayName = 'Popover.Trigger';

/** The floating popover panel */
const PopoverContent = React.forwardRef(({ className, children, ...props }, ref) => {
  const { open, placement } = usePopoverContext();

  if (!open) return null;

  return (
    <div
      ref={ref}
      role="dialog"
      aria-modal="false"
      className={clsx('popover', `popover-${placement}`, { show: open }, className)}
      {...props}
    >
      {children}
    </div>
  );
});

PopoverContent.displayName = 'Popover.Content';

/** Optional arrow indicator */
const PopoverArrow = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={clsx('popover-arrow', className)} {...props} />
));

PopoverArrow.displayName = 'Popover.Arrow';

/** Popover header */
const PopoverHeader = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={clsx('popover-header', className)} {...props}>
    {children}
  </div>
));

PopoverHeader.displayName = 'Popover.Header';

/** Popover body */
const PopoverBody = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={clsx('popover-body', className)} {...props}>
    {children}
  </div>
));

PopoverBody.displayName = 'Popover.Body';

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;
Popover.Arrow = PopoverArrow;
Popover.Header = PopoverHeader;
Popover.Body = PopoverBody;

export default Popover;
