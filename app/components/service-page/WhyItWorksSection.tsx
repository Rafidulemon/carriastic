"use client";

import Link from "next/link";
import { useLanguage } from "../../i18n/LanguageProvider";

const WhyItWorksSection = () => {
  const { t } = useLanguage();
  const { highlights } = t.servicesPage;

  return (
    <section className="relative w-full overflow-hidden bg-[#130c21] text-white">
      <div className="absolute inset-0">
        <div className="absolute -right-24 -top-32 h-72 w-72 rounded-full bg-primary blur-3xl opacity-80" />
        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-primary blur-3xl opacity-70" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,_transparent_1px),linear-gradient(90deg,_rgba(255,255,255,0.06)_1px,_transparent_1px)] bg-[size:28px_28px] opacity-30" />
      </div>

      <div className="relative mx-auto w-full max-w-[1200px] px-4 md:px-8 py-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <span className="text-[12px] uppercase tracking-[0.45em] text-cyan-200/80">
              {highlights.label}
            </span>
            <h2 className="text-[28px] font-semibold leading-tight text-white drop-shadow-[0_18px_40px_rgba(0,0,0,0.4)] md:text-[40px] font-spaceGrotesk">
              {highlights.headline}
            </h2>
            <p className="mx-auto max-w-[560px] text-[16px] text-justify text-slate-200/90 lg:mx-0">
              {highlights.description}
            </p>
            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              {highlights.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-lg md:rounded-full border border-white/15 bg-white/5 px-2 md:px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-slate-100/90"
                >
                  {badge}
                </span>
              ))}
            </div>
            <p className="text-[12px] uppercase tracking-[0.32em] text-slate-300/80">
              {highlights.trustSignal}
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row lg:items-start">
              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-xl md:rounded-full bg-gradient-to-r from-primary via-[#6d36dc] to-[#4b50e6] px-2 py-1 md:px-6 md:py-3 text-[14px] font-semibold text-white shadow-[0_18px_36px_rgba(76,49,201,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_44px_rgba(76,49,201,0.4)]"
              >
                {highlights.cta.primary}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl md:rounded-full border border-white/20 bg-white/10 px-2 py-1 md:px-6 md:py-3 text-[14px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                {highlights.cta.secondary}
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            {highlights.cards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6 shadow-[0_24px_50px_rgba(8,2,20,0.35)] backdrop-blur transition duration-300 ease-out hover:-translate-y-1 hover:border-white/25 hover:bg-white/10 hover:shadow-[0_30px_60px_rgba(8,2,20,0.45)]"
              >
                <span className="text-[11px] uppercase tracking-[0.35em] text-cyan-200/80">
                  {card.tag}
                </span>
                <h3 className="md:mt-3 text-[18px] font-semibold text-white font-spaceGrotesk">
                  {card.title}
                </h3>
                <p className="md:mt-2 text-[14px] text-slate-200/85">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorksSection;
