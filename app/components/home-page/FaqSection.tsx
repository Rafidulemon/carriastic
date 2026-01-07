"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../../i18n/LanguageProvider";

const FaqSection = () => {
  const { t } = useLanguage();
  const faqs = t.faq.items.slice(0, 5);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleOpenChatbot = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("carriastic:open-chatbot"));
    }
  };

  return (
    <section className="relative mx-auto w-full max-w-[1200px] px-6 md:px-10">
      <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center gap-4 text-center md:hidden">
            <span className="mx-auto inline-flex w-fit uppercase tracking-[0.2em] text-[12px] text-[#0ea5e9]">
              {t.faq.label}
            </span>
            <h2 className="relative inline-block bg-[linear-gradient(120deg,#7a2fb5_0%,#370054_60%,#5b21b6_100%)] bg-clip-text text-[28px] font-semibold text-transparent drop-shadow-[0_10px_22px_#3700542e] after:absolute after:left-1/2 after:bottom-[-10px] after:h-[4px] after:w-[52%] after:-translate-x-1/2 after:rounded-full after:bg-[linear-gradient(90deg,#0ea5e9,#22c55e)] after:opacity-75 after:content-[''] md:text-[36px] font-spaceGrotesk">
              {t.faq.headline}
            </h2>
            <p className="mx-auto max-w-[760px] text-[16px] text-[#334155] md:text-[18px]">
              {t.faq.description}
            </p>
          </div>

          <span className="inline-flex w-fit uppercase tracking-[0.24em] text-[12px] text-[#0ea5e9] hidden md:block">
            {t.faq.label}
          </span>
          <h2 className="text-[28px] font-semibold leading-tight text-[#0f172a] md:text-[36px] font-spaceGrotesk hidden md:block">
            {t.faq.headline}
          </h2>
          <p className="max-w-[420px] text-[16px] text-[#475569] hidden md:block">
            {t.faq.description}
          </p>
          <div className="mt-4 flex w-full flex-col gap-3 md:w-auto md:items-start">
            <div className="flex w-full gap-3 md:w-auto md:flex-col">
              <Link
                href="/faq"
                className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.2em] text-slate-900 shadow-[0_14px_30px_rgba(15,23,42,0.12)] transition duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary md:w-fit md:flex-none"
              >
                {t.faq.viewAllCta}
              </Link>
              <button
                type="button"
                onClick={handleOpenChatbot}
                className="inline-flex flex-1 items-center justify-center rounded-full bg-primary px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-white shadow-[0_12px_26px_rgba(55,0,84,0.28)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-primary/90 md:w-fit md:flex-none"
              >
                {t.faq.aiCta}
              </button>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-primary/20 bg-white px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-primary shadow-[0_10px_24px_rgba(15,23,42,0.1)] transition duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/5 md:w-fit"
            >
              {t.faq.strategyCallCta}
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((item, index) => (
            <details
              key={item.question}
              open={openIndex === index}
              onToggle={(event) => {
                const isOpen = event.currentTarget.open;
                setOpenIndex((prev) => {
                  if (isOpen) {
                    return index;
                  }
                  return prev === index ? null : prev;
                });
              }}
              className="group rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_16px_32px_rgba(15,23,42,0.08)] transition-colors duration-200 hover:border-primary/60 hover:bg-primary group-open:border-primary/60 group-open:bg-primary open:border-primary/60 open:bg-primary"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left [&::-webkit-details-marker]:hidden">
                <span className="text-[16px] font-semibold text-slate-900 transition-colors duration-200 group-hover:text-white group-open:text-white font-spaceGrotesk">
                  {item.question}
                </span>
                <span className="relative flex px-3 h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-primary text-white transition-colors duration-200">
                  <span className="absolute h-0.5 w-3.5 bg-current" />
                  <span className="absolute h-3.5 w-0.5 bg-current transition-opacity duration-200 group-open:opacity-0" />
                </span>
              </summary>
              <p className="mt-3 text-[14px] text-slate-600 transition-colors duration-200 group-hover:text-white/90 group-open:text-white/90">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
