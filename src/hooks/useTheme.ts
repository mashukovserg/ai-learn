"use client";

import { useCallback, useEffect, useState } from 'react';

export type UiTheme = 'terminal' | 'saas';

const STORAGE_KEY = 'ui-theme';

function applyTheme(theme: UiTheme) {
  if (theme === 'saas') {
    document.documentElement.setAttribute('data-theme', 'saas');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
}

export function useTheme() {
  const [theme, setThemeState] = useState<UiTheme>('terminal');

  // Sync with the persisted theme and re-apply it: React hydration can
  // strip the data-theme attribute the pre-hydration script set on <html>
  /* eslint-disable react-hooks/set-state-in-effect -- intentional: read persisted theme once on mount */
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'saas' || saved === 'terminal') {
        setThemeState(saved);
        applyTheme(saved);
      }
    } catch {
      // localStorage unavailable (private mode etc.) — keep default
    }
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  const setTheme = useCallback((next: UiTheme) => {
    setThemeState(next);
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // non-persistent is fine
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState(prev => {
      const next: UiTheme = prev === 'saas' ? 'terminal' : 'saas';
      applyTheme(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // non-persistent is fine
      }
      return next;
    });
  }, []);

  return { theme, setTheme, toggleTheme };
}
