import React from 'react';
import clsx from 'clsx';
import './card.css';

const Card = React.forwardRef(({ className, children, hover = false, horizontal = false, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx('card', {
        'card-hover': hover,
        'card-horizontal': horizontal,
      }, className)}
      {...props}
    >
      {children}
    </div>
  );
});
Card.displayName = 'Card';

const CardHeader = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={clsx('card-header', className)} {...props}>
    {children}
  </div>
));
CardHeader.displayName = 'Card.Header';

const CardBody = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={clsx('card-body', className)} {...props}>
    {children}
  </div>
));
CardBody.displayName = 'Card.Body';

const CardFooter = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={clsx('card-footer', className)} {...props}>
    {children}
  </div>
));
CardFooter.displayName = 'Card.Footer';

const CardTitle = React.forwardRef(({ className, children, as: Component = 'h5', ...props }, ref) => (
  <Component ref={ref} className={clsx('card-title', className)} {...props}>
    {children}
  </Component>
));
CardTitle.displayName = 'Card.Title';

const CardSubtitle = React.forwardRef(({ className, children, as: Component = 'h6', ...props }, ref) => (
  <Component ref={ref} className={clsx('card-subtitle', className)} {...props}>
    {children}
  </Component>
));
CardSubtitle.displayName = 'Card.Subtitle';

const CardText = React.forwardRef(({ className, children, as: Component = 'p', ...props }, ref) => (
  <Component ref={ref} className={clsx('card-text', className)} {...props}>
    {children}
  </Component>
));
CardText.displayName = 'Card.Text';

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Text = CardText;

export default Card;
