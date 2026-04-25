import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export const FormGroup = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={clsx('form-group', className)} {...props}>
    {children}
  </div>
));
FormGroup.displayName = 'FormGroup';
FormGroup.propTypes = { className: PropTypes.string, children: PropTypes.node };

export const FormLabel = React.forwardRef(({ className, children, ...props }, ref) => (
  <label ref={ref} className={clsx('form-label', className)} {...props}>
    {children}
  </label>
));
FormLabel.displayName = 'FormLabel';
FormLabel.propTypes = { className: PropTypes.string, children: PropTypes.node };

export const FormText = React.forwardRef(({ className, children, ...props }, ref) => (
  <span ref={ref} className={clsx('form-text', className)} {...props}>
    {children}
  </span>
));
FormText.displayName = 'FormText';
FormText.propTypes = { className: PropTypes.string, children: PropTypes.node };

export const Input = React.forwardRef(({ className, ...props }, ref) => (
  <input ref={ref} className={clsx('form-control', className)} {...props} />
));
Input.displayName = 'Input';
Input.propTypes = { className: PropTypes.string };

export const Select = React.forwardRef(({ className, children, ...props }, ref) => (
  <select ref={ref} className={clsx('form-control', className)} {...props}>
    {children}
  </select>
));
Select.displayName = 'Select';
Select.propTypes = { className: PropTypes.string, children: PropTypes.node };

export const Textarea = React.forwardRef(({ className, ...props }, ref) => (
  <textarea ref={ref} className={clsx('form-control', className)} {...props} />
));
Textarea.displayName = 'Textarea';
Textarea.propTypes = { className: PropTypes.string };

export const FormCheck = React.forwardRef(({ className, children, ...props }, ref) => (
  <label ref={ref} className={clsx('form-check', className)} {...props}>
    {children}
  </label>
));
FormCheck.displayName = 'FormCheck';
FormCheck.propTypes = { className: PropTypes.string, children: PropTypes.node };

export const FormCheckInput = React.forwardRef(({ className, ...props }, ref) => (
  <input ref={ref} className={clsx('form-check-input', className)} {...props} />
));
FormCheckInput.displayName = 'FormCheckInput';
FormCheckInput.propTypes = { className: PropTypes.string };

export const FormSwitch = React.forwardRef(({ className, children, ...props }, ref) => (
  <label ref={ref} className={clsx('form-switch', className)} {...props}>
    {children}
  </label>
));
FormSwitch.displayName = 'FormSwitch';
FormSwitch.propTypes = { className: PropTypes.string, children: PropTypes.node };

export const FormSwitchInput = React.forwardRef(({ className, ...props }, ref) => (
  <input ref={ref} className={clsx('form-switch-input', className)} {...props} />
));
FormSwitchInput.displayName = 'FormSwitchInput';
FormSwitchInput.propTypes = { className: PropTypes.string };

export const InputGroup = React.forwardRef(({ className, end = false, children, ...props }, ref) => (
  <div ref={ref} className={clsx('input-group', { 'input-group-end': end }, className)} {...props}>
    {children}
  </div>
));
InputGroup.displayName = 'InputGroup';
InputGroup.propTypes = { className: PropTypes.string, end: PropTypes.bool, children: PropTypes.node };

export const InputIcon = React.forwardRef(({ className, ...props }, ref) => (
  <svg ref={ref} className={clsx('input-icon', className)} {...props} />
));
InputIcon.displayName = 'InputIcon';
InputIcon.propTypes = { className: PropTypes.string };

export const FormImagePlaceholder = React.forwardRef(({ className, size = 'md', src, alt = "Image Upload Box", children, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx('form-image-placeholder', `form-image-placeholder-${size}`, className)}
    {...props}
  >
    {src ? (
      <img src={src} alt={alt} className="form-image-placeholder-img" />
    ) : (
      <div className="form-image-placeholder-content">
        {children || (
          <svg className="form-image-placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
        )}
      </div>
    )}
  </div>
));
FormImagePlaceholder.displayName = 'FormImagePlaceholder';
FormImagePlaceholder.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  src: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.node,
};

export const Range = React.forwardRef(({ className, min = 0, max = 100, step = 1, ...props }, ref) => (
  <input
    type="range"
    ref={ref}
    min={min}
    max={max}
    step={step}
    className={clsx('form-range', className)}
    {...props}
  />
));
Range.displayName = 'Range';
Range.propTypes = {
  className: PropTypes.string,
  min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
