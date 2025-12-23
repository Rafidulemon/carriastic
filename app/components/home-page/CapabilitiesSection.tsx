"use client";

import Lottie from "lottie-react";
import aiAnimation from "@/public/gifs/ai.json";
import Button from "../button/Button";
import { useLanguage } from "../../i18n/LanguageProvider";

const CapabilitiesSection = () => {
  const { t } = useLanguage();
  return (
    <section className="relative mx-auto w-full max-w-[1200px] px-6 pb-12 md:px-10">
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="mx-auto inline-flex w-fit uppercase tracking-[0.2em] text-[12px] text-[#0ea5e9]">
          {t.capabilities.label}
        </span>
        <h2 className="relative inline-block bg-[linear-gradient(120deg,#7a2fb5_0%,#370054_60%,#5b21b6_100%)] bg-clip-text text-[28px] font-semibold text-transparent drop-shadow-[0_10px_22px_#3700542e] after:absolute after:left-1/2 after:bottom-[-10px] after:h-[4px] after:w-[52%] after:-translate-x-1/2 after:rounded-full after:bg-[linear-gradient(90deg,#0ea5e9,#22c55e)] after:opacity-75 after:content-[''] md:text-[36px] font-spaceGrotesk">
          {t.capabilities.headline}
        </h2>
        <p className="mx-auto max-w-[760px] text-[16px] text-[#334155] md:text-[18px]">
          {t.capabilities.description}
        </p>
      </div>

      <div className="mt-10 grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col gap-5">
          <div className="grid gap-4">
            {t.capabilities.products.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-2 rounded-[20px] border border-[#0f172a14] bg-[#ffffffd9] p-5 shadow-[0_20px_55px_#0f172a1f] backdrop-blur-[14px]"
              >
                <span className="text-[17px] font-semibold text-[#0b1220] font-spaceGrotesk">
                  {item.title}
                </span>
                <p className="text-[15px] text-[#334155]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-[320px] overflow-hidden rounded-[28px] md:h-[420px]">
          <Lottie
            animationData={aiAnimation}
            loop
            autoplay
            className="h-full w-full"
            aria-label={t.capabilities.animationAlt}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0b122080] via-[#00000000] to-[#0ea5e940]" />
          <div className="absolute bottom-6 left-6 rounded-2xl border border-[#ffffff99] bg-[#ffffffcc] px-5 py-4 shadow-[0_18px_40px_#0f172a29]">
            <span className="text-[16px] font-semibold text-[#0b1220] font-spaceGrotesk">
              {t.capabilities.highlightTitle}
            </span>
            <p className="mt-2 text-[13px] text-[#334155]">
              {t.capabilities.highlightDescription}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <Button href="/ai" theme="gradient">
          {t.capabilities.cta}
        </Button>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
