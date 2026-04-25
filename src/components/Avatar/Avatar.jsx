import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './avatar.css';

const Avatar = React.forwardRef(({
  className,
  src,
  alt = "Avatar",
  size = "md",
  status,
  fallback,
  children,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={clsx('avatar', `avatar-${size}`, className)}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt} className="avatar-img" />
      ) : (
        <div className="avatar-fallback">
          {fallback || children || alt.charAt(0).toUpperCase()}
        </div>
      )}
      
      {status && (
        <span className={clsx('avatar-status', `avatar-status-${status}`)} />
      )}
    </div>
  );
});

Avatar.displayName = 'Avatar';
Avatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  status: PropTypes.oneOf(['online', 'offline', 'away', 'busy']),
  fallback: PropTypes.node,
  children: PropTypes.node,
};

export default Avatar;
