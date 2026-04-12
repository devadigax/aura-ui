import React, { useState } from 'react';
import clsx from 'clsx';

const Accordion = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={clsx('accordion', className)} {...props}>
    {children}
  </div>
));

Accordion.displayName = 'Accordion';

const AccordionItem = React.forwardRef(({
  className,
  title,
  defaultOpen = false,
  children,
  ...props
}, ref) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div ref={ref} className={clsx('accordion-item', className)} {...props}>
      <h3 className="accordion-header">
        <button
          type="button"
          className={clsx('accordion-btn', { collapsed: !open })}
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
        >
          {title}
          <svg className="accordion-icon" viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </h3>
      <div className={clsx('accordion-collapse', { show: open })}>
        <div className="accordion-body">{children}</div>
      </div>
    </div>
  );
});

AccordionItem.displayName = 'Accordion.Item';

export const Collapse = React.forwardRef(({ className, open = false, children, ...props }, ref) => (
  <div ref={ref} className={clsx('collapse', { show: open }, className)} {...props}>
    {children}
  </div>
));

Collapse.displayName = 'Collapse';

Accordion.Item = AccordionItem;

export default Accordion;
