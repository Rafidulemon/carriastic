"use client";

import Lottie from "lottie-react";
import servicesAnimation from "@/public/gifs/jsons/services.json";
import Button from "../button/Button";
import ServiceCard from "./ServiceCard";
import { useLanguage } from "../../i18n/LanguageProvider";
import { ServiceCardData, serviceStyles } from "@/app/constants/services";

const OfferingsSection = () => {
  const { t } = useLanguage();
  const services: ServiceCardData[] = t.offerings.services
    .slice(0, 5)
    .map((service, index) => {
      const style = serviceStyles[index]!;
      return {
        title: service.title,
        description: service.description,
        icon: style.icon,
        cardClass: style.cardClass,
        glowClass: style.glowClass,
        path: style.path,
      };
    });
  const mobileCycleMs = 4000;
  const mobileTotalMs = mobileCycleMs * services.length;

  return (
    <section className="relative w-full overflow-hidden pb-6">
      <div className="relative mx-auto w-full max-w-[1200px] px-6 pt-12 md:px-10">
        <div className="flex flex-col md:gap-10 md:flex-row md:items-start">
          <div className="offerings-reveal flex flex-col gap-4 md:w-[30%] md:pt-6">
            <div className="flex flex-col items-center gap-4 text-center md:hidden">
              <span className="mx-auto inline-flex w-fit uppercase tracking-[0.2em] text-[12px] text-[#0ea5e9]">
                {t.offerings.label}
              </span>
              <h2 className="relative inline-block bg-[linear-gradient(120deg,#7a2fb5_0%,#370054_60%,#5b21b6_100%)] bg-clip-text text-[28px] font-semibold text-transparent drop-shadow-[0_10px_22px_#3700542e] after:absolute after:left-1/2 after:bottom-[-10px] after:h-[4px] after:w-[52%] after:-translate-x-1/2 after:rounded-full after:bg-[linear-gradient(90deg,#0ea5e9,#22c55e)] after:opacity-75 after:content-[''] md:text-[36px] font-spaceGrotesk">
                {t.offerings.headline}
              </h2>
              <p className="mx-auto max-w-[760px] text-[16px] text-[#334155] md:text-[18px]">
                {t.offerings.description}
              </p>
            </div>
            <span className="inline-flex w-fit uppercase tracking-[0.24em] text-[12px] text-[#0ea5e9] hidden md:block">
              {t.offerings.label}
            </span>
            <h2 className="text-[28px] font-semibold leading-tight text-[#0f172a] md:text-[36px] font-spaceGrotesk hidden md:block">
              {t.offerings.headline}
            </h2>
            <p className="max-w-[420px] text-[16px] text-[#475569] hidden md:block">
              {t.offerings.description}
            </p>
            <div className="-mt-10 md:mt-6 h-[200px] md:h-[300px] w-full md:max-w-[320px]">
              <Lottie
                animationData={servicesAnimation}
                loop
                autoplay
                className="h-full w-full"
                aria-label={t.offerings.headline}
              />
            </div>
          </div>
          <div
            className="offerings-reveal w-full md:w-[70%]"
            style={{ animationDelay: "120ms" }}
          >
            <div className="home-mobile-peel-stack relative min-h-[220px] -mt-6 w-full md:hidden">
              {services.map((service, index) => (
                <div
                  key={`${service.title}-mobile`}
                  className="home-mobile-peel-card absolute inset-0"
                  style={{
                    animationDuration: `${mobileTotalMs}ms`,
                    animationDelay: `${index * mobileCycleMs}ms`,
                    zIndex: services.length - index,
                  }}
                >
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    cardClass={service.cardClass}
                    glowClass={service.glowClass}
                    learnMoreLabel={t.offerings.learnMore}
                  />
                </div>
              ))}
            </div>
            <div className="hidden grid-cols-6 gap-6 md:grid">
              {services.map((service, index) => {
                const cardWidthClass = index < 2 ? "col-span-3" : "col-span-2";

                return (
                  <div
                    key={`${service.title}-desktop`}
                    className={`${cardWidthClass} h-full`}
                  >
                    <ServiceCard
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                      cardClass={service.cardClass}
                      glowClass={service.glowClass}
                      learnMoreLabel={t.offerings.learnMore}
                      animationDelayMs={index * 90}
                      className="motion-safe:animate-home-fade-up"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div
        className="offerings-reveal flex w-full items-center mt-6 justify-center"
        style={{ animationDelay: "220ms" }}
      >
        <Button href="/services" theme="gradient">
          {t.offerings.cta}
        </Button>
      </div>
    </section>
  );
};

export default OfferingsSection;
