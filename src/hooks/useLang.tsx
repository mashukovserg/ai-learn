"use client";

import { createContext, useContext } from 'react';
import { DEFAULT_LANG, toLang, type Lang } from '@/types/lang';

const LangContext = createContext<Lang>(DEFAULT_LANG);

/**
 * Narrows the raw `[lang]` route segment once, here, so every consumer of
 * `useLang()` gets a `Lang` and can index `LocalizedString` without a cast.
 */
export function LangProvider({ lang, children }: { lang: string; children: React.ReactNode }) {
  return <LangContext value={toLang(lang)}>{children}</LangContext>;
}

export function useLang(): Lang {
  return useContext(LangContext);
}
