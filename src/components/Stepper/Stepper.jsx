import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './stepper.css';

const Stepper = React.forwardRef(({
  className,
  steps = [],
  activeStep = 0,
  orientation = 'horizontal',
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={clsx('stepper', `stepper-${orientation}`, className)}
      {...props}
    >
      {steps.map((label, index) => {
        const isCompleted = index < activeStep;
        const isActive = index === activeStep;

        return (
          <div
            key={index}
            className={clsx('stepper-item', {
              'stepper-item-completed': isCompleted,
              'stepper-item-active': isActive,
            })}
          >
            <div className="stepper-indicator">
              {isCompleted ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            {label && <div className="stepper-label">{label}</div>}
            
            {/* The line connector */}
            {index < steps.length - 1 && <div className="stepper-separator" />}
          </div>
        );
      })}
    </div>
  );
});

Stepper.displayName = 'Stepper';
Stepper.propTypes = {
  className: PropTypes.string,
  steps: PropTypes.arrayOf(PropTypes.node).isRequired,
  activeStep: PropTypes.number,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
};

export default Stepper;
