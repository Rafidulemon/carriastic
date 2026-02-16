"use client";

import Link from "next/link";
import { useLanguage } from "../../i18n/LanguageProvider";
import Image from "next/image";

const CtaSection = () => {
  const { t } = useLanguage();
  return (
    <section className="relative mx-auto w-full max-w-[1200px] px-6 pb-16 md:px-10">
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 text-center shadow-[0_28px_60px_rgba(15,23,42,0.45)]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-primary" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-black/90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)]" />
        </div>

        <div className="relative flex flex-col items-center gap-6 px-6 py-14 text-center md:px-12 md:py-20">
          <h2 className="text-[32px] flex flex-col items-center gap-2 font-semibold leading-tight text-white md:text-[48px] font-spaceGrotesk">
            <span className="text-slate-400">{t.cta.headlinePrefix}</span>
            <Image
              src="/images/white_logo.png"
              alt="Carriastic logo"
              width={120}
              height={40}
              className="h-auto w-[110px] md:w-[180px]"
              sizes="(min-width: 768px) 180px, 120px"
            />
          </h2>
          <p className="max-w-[520px] text-[15px] text-slate-200 md:text-[18px]">
            {t.cta.description}
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-4 rounded-full border-2 border-white/70 bg-white/10 px-6 py-3 text-[15px] font-semibold text-white shadow-[0_18px_36px_rgba(0,0,0,0.35)] backdrop-blur transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/20"
          >
            <span>{t.cta.primaryCta}</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/70 bg-white/10 text-white transition duration-200 group-hover:bg-white group-hover:text-slate-900">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h12" />
                <path d="m13 5 7 7-7 7" />
              </svg>
            </span>
          </Link>
          <div className="pt-4 text-center">
            <p className="text-[13px] text-slate-400">{t.cta.callLabel}</p>
            <div className="mt-2 flex flex-wrap justify-center gap-x-2 text-[16px] font-semibold text-rose-400">
              {t.cta.phoneNumbers.map((number, index) => (
                <span key={number}>
                  <a
                    href={`tel:${number}`}
                    className="transition duration-200 hover:text-rose-300"
                  >
                    {number}
                  </a>
                  {index < t.cta.phoneNumbers.length - 1 ? "," : ""}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
