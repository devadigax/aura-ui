import React from 'react';
import clsx from 'clsx';

export const FormGroup = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={clsx('form-group', className)} {...props}>
    {children}
  </div>
));

FormGroup.displayName = 'FormGroup';

export const FormLabel = React.forwardRef(({ className, children, ...props }, ref) => (
  <label ref={ref} className={clsx('form-label', className)} {...props}>
    {children}
  </label>
));

FormLabel.displayName = 'FormLabel';

export const FormText = React.forwardRef(({ className, children, ...props }, ref) => (
  <span ref={ref} className={clsx('form-text', className)} {...props}>
    {children}
  </span>
));

FormText.displayName = 'FormText';

export const Input = React.forwardRef(({ className, ...props }, ref) => (
  <input ref={ref} className={clsx('form-control', className)} {...props} />
));

Input.displayName = 'Input';

export const Select = React.forwardRef(({ className, children, ...props }, ref) => (
  <select ref={ref} className={clsx('form-control', className)} {...props}>
    {children}
  </select>
));

Select.displayName = 'Select';

export const Textarea = React.forwardRef(({ className, ...props }, ref) => (
  <textarea ref={ref} className={clsx('form-control', className)} {...props} />
));

Textarea.displayName = 'Textarea';

export const FormCheck = React.forwardRef(({ className, children, ...props }, ref) => (
  <label ref={ref} className={clsx('form-check', className)} {...props}>
    {children}
  </label>
));

FormCheck.displayName = 'FormCheck';

export const FormCheckInput = React.forwardRef(({ className, ...props }, ref) => (
  <input ref={ref} className={clsx('form-check-input', className)} {...props} />
));

FormCheckInput.displayName = 'FormCheckInput';

export const FormSwitch = React.forwardRef(({ className, children, ...props }, ref) => (
  <label ref={ref} className={clsx('form-switch', className)} {...props}>
    {children}
  </label>
));

FormSwitch.displayName = 'FormSwitch';

export const FormSwitchInput = React.forwardRef(({ className, ...props }, ref) => (
  <input ref={ref} className={clsx('form-switch-input', className)} {...props} />
));

FormSwitchInput.displayName = 'FormSwitchInput';

export const InputGroup = React.forwardRef(({
  className,
  end = false,
  children,
  ...props
}, ref) => (
  <div ref={ref} className={clsx('input-group', { 'input-group-end': end }, className)} {...props}>
    {children}
  </div>
));

InputGroup.displayName = 'InputGroup';

export const InputIcon = React.forwardRef(({ className, ...props }, ref) => (
  <svg ref={ref} className={clsx('input-icon', className)} {...props} />
));

InputIcon.displayName = 'InputIcon';
