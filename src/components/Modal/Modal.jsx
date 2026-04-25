import React, { useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useScrollLock } from '../../hooks/useScrollLock';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import './modal.css';

const Modal = React.forwardRef(({ isOpen, onClose, size, centered = true, scrollable = false, titleId, className, children }, ref) => {
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

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen && onClose) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div 
        className={clsx('modal-backdrop', { show: isOpen })} 
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={setRefs}
        className={clsx('modal', {
          show: isOpen,
          'modal-centered': centered,
          'modal-scrollable': scrollable,
          [`modal-${size}`]: size,
        }, className)}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content">
            {children}
          </div>
        </div>
      </div>
    </>,
    document.body
  );
});

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'lg', 'xl']),
  centered: PropTypes.bool,
  scrollable: PropTypes.bool,
  titleId: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

Modal.displayName = 'Modal';

const ModalHeader = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={clsx('modal-header', className)} {...props}>
    {children}
  </div>
));
ModalHeader.displayName = 'Modal.Header';

const ModalTitle = React.forwardRef(({ className, children, as: Component = 'h5', ...props }, ref) => (
  <Component ref={ref} className={clsx('modal-title', className)} {...props}>
    {children}
  </Component>
));
ModalTitle.displayName = 'Modal.Title';

const ModalBody = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={clsx('modal-body', className)} {...props}>
    {children}
  </div>
));
ModalBody.displayName = 'Modal.Body';

const ModalFooter = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={clsx('modal-footer', className)} {...props}>
    {children}
  </div>
));
ModalFooter.displayName = 'Modal.Footer';

Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
