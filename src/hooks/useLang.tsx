"use client";

import { createContext, useContext } from 'react';

const LangContext = createContext<string>('en');

export function LangProvider({ lang, children }: { lang: string; children: React.ReactNode }) {
  return <LangContext value={lang}>{children}</LangContext>;
}

export function useLang(): string {
  return useContext(LangContext);
}
