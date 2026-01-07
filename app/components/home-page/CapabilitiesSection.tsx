"use client";

import Lottie from "lottie-react";
import aiAnimation from "@/public/gifs/ai.json";
import Button from "../button/Button";
import { useLanguage } from "../../i18n/LanguageProvider";
import TitleText from "../typography/TitleText";

const CapabilitiesSection = () => {
  const { t } = useLanguage();
  return (
    <section className="relative mx-auto w-full max-w-[1200px] px-6 md:px-10">
      <TitleText
        label={t.capabilities.label}
        headline={t.capabilities.headline}
        description={t.capabilities.description}
      />

      <div className="mt-10 grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col gap-5">
          <div className="grid gap-4">
            {t.capabilities.products.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-2 rounded-[20px] border border-[#0f172a14] bg-[#ffffffd9] p-5 shadow-[0_20px_55px_#0f172a1f] backdrop-blur-[14px] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_20px_#370054] hover:bg-white"
              >
                <span className="text-[16px] font-semibold text-[#0b1220] font-spaceGrotesk">
                  {item.title}
                </span>
                <p className="text-[14px] text-[#334155]">{item.description}</p>
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
