import { useEffect, useRef } from 'react';

// Counter to handle multiple overlays trying to lock the body simultaneously
let lockCount = 0;
let originalOverflow = '';

export function useScrollLock(isLocked) {
  const isCurrentlyLocked = useRef(false);

  useEffect(() => {
    if (isLocked && !isCurrentlyLocked.current) {
      // First one locks
      if (lockCount === 0) {
        originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
      }
      lockCount++;
      isCurrentlyLocked.current = true;
    }

    return () => {
      // Unlock when component unmounts or isLocked becomes false
      if (isCurrentlyLocked.current) {
        lockCount = Math.max(0, lockCount - 1);
        if (lockCount === 0) {
          document.body.style.overflow = originalOverflow;
          originalOverflow = '';
        }
        isCurrentlyLocked.current = false;
      }
    };
  }, [isLocked]);
}
