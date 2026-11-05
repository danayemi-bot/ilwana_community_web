import { useEffect } from 'react';

/**
 * Robust scroll lock hook that prevents background scrolling when modals/drawers are open.
 * Works seamlessly on mobile touchscreens (iOS Safari, Android Chrome) and desktop browsers.
 */
export const useBodyScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    if (!isLocked || typeof window === 'undefined') return;

    const originalOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    // Lock both html and body to eliminate background scrolling
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // Touch event listener to prevent touch scroll bubbling to background on mobile
    const handleTouchMove = (e: TouchEvent) => {
      const target = e.target as HTMLElement | null;
      // Allow scrolling inside scrollable containers inside the modal/drawer
      if (target && target.closest('.overflow-y-auto, .overflow-auto, [data-scrollable="true"]')) {
        return;
      }
      if (e.cancelable) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      document.body.style.overflow = originalOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isLocked]);
};
