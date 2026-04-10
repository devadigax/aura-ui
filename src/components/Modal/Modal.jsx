import React, { useEffect } from 'react';
import clsx from 'clsx';
import './modal.css';

const Modal = ({ isOpen, onClose, size, centered = true, scrollable = false, className, children }) => {
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

  // Handle body scroll locking
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div 
        className={clsx('modal-backdrop', { show: isOpen })} 
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={clsx('modal', {
          show: isOpen,
          'modal-centered': centered,
          'modal-scrollable': scrollable,
          [`modal-${size}`]: size,
        }, className)}
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

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
