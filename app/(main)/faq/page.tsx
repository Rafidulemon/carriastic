"use client";

import { useLanguage } from "../../i18n/LanguageProvider";

const FaqPage = () => {
  const { t } = useLanguage();
  const faq = t.faq;

  return (
    <div className="w-full">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.24),_transparent_60%),radial-gradient(circle_at_top_right,_rgba(167,139,250,0.2),_transparent_55%)]" />
        <div className="relative mx-auto w-full max-w-[1200px] px-6 py-12 md:px-10">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <span className="inline-flex w-fit rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-primary">
              {faq.pageLabel}
            </span>
            <h1 className="text-[34px] font-semibold text-slate-900 md:text-[52px] font-spaceGrotesk">
              {faq.pageHeadline}
            </h1>
            <p className="text-[16px] text-slate-600 md:text-[18px]">
              {faq.pageDescription}
            </p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1200px] px-6 pb-16 md:px-10">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-3">
            {faq.items.map((item, index) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_16px_32px_rgba(15,23,42,0.08)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left [&::-webkit-details-marker]:hidden">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-[11px] font-semibold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[16px] font-semibold text-slate-900 font-spaceGrotesk">
                      {item.question}
                    </span>
                  </div>
                  <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-colors duration-200 group-open:border-primary/30 group-open:text-primary">
                    <span className="absolute h-0.5 w-3.5 bg-current" />
                    <span className="absolute h-3.5 w-0.5 bg-current transition-opacity duration-200 group-open:opacity-0" />
                  </span>
                </summary>
                <p className="mt-3 text-[14px] text-slate-600 md:text-[15px]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqPage;
