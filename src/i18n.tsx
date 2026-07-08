import React, { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import ko from './locales/ko.json';
import en from './locales/en.json';

type Language = 'ko' | 'en';

type LanguageContextValue = {
  language: Language;
  toggleLanguage: () => void;
  strings: typeof ko;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(
    () => (sessionStorage.getItem('lang') as Language | null) ?? 'ko'
  );

  const strings = useMemo(() => {
    return language === 'ko' ? ko : en;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      strings,
      toggleLanguage: () => setLanguage((prev) => {
        const next = prev === 'ko' ? 'en' : 'ko';
        sessionStorage.setItem('lang', next);
        return next;
      }),
    }),
    [language, strings]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
