'use client';

import { useState, useEffect } from 'react';

const MOBILE_BREAKPOINT = 768;

interface ResponsiveState {
  isMobile: boolean;
  isDesktop: boolean;
}

export function useResponsive(): ResponsiveState {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches);
    };

    // Set initial value
    handleChange(mql);

    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, []);

  return { isMobile, isDesktop: !isMobile };
}
