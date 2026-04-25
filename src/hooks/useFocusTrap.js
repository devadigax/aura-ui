import { useEffect, useRef } from 'react';

const FOCUSABLE_ELEMENTS = [
  'a[href]',
  'area[href]',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'button:not([disabled])',
  'iframe',
  'object',
  'embed',
  '[contenteditable]',
  '[tabindex]:not([tabindex="-1"])',
];

export function useFocusTrap(containerRef, isActive) {
  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (e) => {
      if (e.key !== 'Tab') return;

      if (!containerRef.current) return;

      const focusableEls = containerRef.current.querySelectorAll(FOCUSABLE_ELEMENTS.join(','));
      if (focusableEls.length === 0) {
        e.preventDefault();
        return;
      }

      const firstElement = focusableEls[0];
      const lastElement = focusableEls[focusableEls.length - 1];

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Initial focus on the container or its first element
    // Slight timeout ensures DOM is fully painted
    const timer = setTimeout(() => {
      if (containerRef.current && !containerRef.current.contains(document.activeElement)) {
        const focusableEls = containerRef.current.querySelectorAll(FOCUSABLE_ELEMENTS.join(','));
        if (focusableEls.length > 0) {
           focusableEls[0].focus();
        } else {
           containerRef.current.focus();
        }
      }
    }, 10);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [isActive, containerRef]);
}
