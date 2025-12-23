"use client";

import { useLanguage } from "../../i18n/LanguageProvider";

const LanguageToggle = () => {
  const { locale, toggleLocale } = useLanguage();
  const isBengali = locale === "bn";

  return (
    <button
      type="button"
      onClick={toggleLocale}
      role="switch"
      aria-checked={isBengali}
      aria-label="Toggle language"
      className="inline-flex items-center gap-1 rounded-full border border-[#0f172a1f] bg-white/90 px-1 py-1 text-[11px] font-semibold uppercase text-primary shadow-[0_10px_24px_#0f172a1a] transition hover:-translate-y-[1px]"
    >
      <span
        className={`rounded-full px-2.5 py-1 transition-colors ${
          isBengali ? "text-[#64748b]" : "bg-primary text-white"
        }`}
      >
        EN
      </span>
      <span
        className={`rounded-full px-2.5 py-1 transition-colors ${
          isBengali ? "bg-primary text-white" : "text-[#64748b]"
        }`}
      >
        বাং
      </span>
    </button>
  );
};

export default LanguageToggle;
