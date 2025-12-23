"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Locale, Translation, translations } from "./translations";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const storageKey = "carriastic-locale";

const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored === "en" || stored === "bn") {
      setLocaleState(stored);
      return;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(storageKey, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
  };

  const toggleLocale = () => {
    setLocaleState((prev) => (prev === "en" ? "bn" : "en"));
  };

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      t: translations[locale],
    }),
    [locale]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};

export default LanguageProvider;
