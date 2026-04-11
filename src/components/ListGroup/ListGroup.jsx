import React from 'react';
import clsx from 'clsx';

const ListGroup = React.forwardRef(({
  as: Component = 'ul',
  className,
  numbered = false,
  children,
  ...props
}, ref) => (
  <Component
    ref={ref}
    className={clsx('list-group', { 'list-group-numbered': numbered }, className)}
    {...props}
  >
    {children}
  </Component>
));

ListGroup.displayName = 'ListGroup';

const ListGroupItem = React.forwardRef(({
  as: Component = 'li',
  className,
  active = false,
  action = false,
  children,
  ...props
}, ref) => (
  <Component
    ref={ref}
    className={clsx(
      'list-group-item',
      {
        active,
        'list-group-item-action': action,
      },
      className
    )}
    {...props}
  >
    {children}
  </Component>
));

ListGroupItem.displayName = 'ListGroup.Item';

ListGroup.Item = ListGroupItem;

export default ListGroup;
