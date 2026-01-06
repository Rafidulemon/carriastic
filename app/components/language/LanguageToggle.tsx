"use client";

import { useLanguage } from "../../i18n/LanguageProvider";

type LanguageToggleProps = {
  theme?: "light" | "dark";
};

const LanguageToggle = ({ theme = "light" }: LanguageToggleProps) => {
  const { locale, toggleLocale } = useLanguage();
  const isBengali = locale === "bn";
  const isDark = theme === "dark";
  const inactiveTextClass = isDark ? "text-white/60" : "text-[#64748b]";
  const activeTextClass = "bg-primary text-white";

  return (
    <button
      type="button"
      onClick={toggleLocale}
      role="switch"
      aria-checked={isBengali}
      aria-label="Toggle language"
      className={`inline-flex items-center gap-1 rounded-[8px] md:rounded-full md:border px-1 py-1 text-[11px] font-semibold uppercase shadow transition hover:-translate-y-[1px] ${
        isDark
          ? "border-white/15 bg-slate-900/70 text-white shadow-[0_10px_24px_rgba(15,23,42,0.45)]"
          : "border-[#0f172a1f] bg-white/90 text-primary shadow-[0_10px_24px_#0f172a1a]"
      }`}
    >
      <span
        className={`rounded-[8px] md:rounded-full px-2 md:px-2.5 py-1 transition-colors ${
          isBengali ? inactiveTextClass : activeTextClass
        }`}
      >
        EN
      </span>
      <span
        className={`rounded-[8px] md:rounded-full px-2 md:px-2.5 py-1 transition-colors ${
          isBengali ? activeTextClass : inactiveTextClass
        }`}
      >
        বাং
      </span>
    </button>
  );
};

export default LanguageToggle;
