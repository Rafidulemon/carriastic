"use client";

import Lottie from "lottie-react";
import servicesAnimation from "@/public/gifs/jsons/services.json";
import Button from "../button/Button";
import ServiceCard from "../cards/ServiceCard";
import { useLanguage } from "../../i18n/LanguageProvider";
import { ServiceCardData, serviceStyles } from "@/app/constants/services";
import TitleText from "../typography/TitleText";

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
  const getCtaConfig = (path?: string) => {
    const isProducts = path?.endsWith("/ready-to-deploy-software-products");
    return {
      label: isProducts ? t.offerings.seeProducts : t.offerings.learnMore,
      path: isProducts ? "/products" : path,
    };
  };
  const mobileCycleMs = 4000;
  const mobileTotalMs = mobileCycleMs * services.length;

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <div className="flex flex-col md:gap-10 md:flex-row md:items-start">
          <div className="offerings-reveal flex flex-col gap-4 md:w-[30%] md:pt-6">
            <div className="md:hidden">
              <TitleText
                label={t.offerings.label}
                headline={t.offerings.headline}
                description={t.offerings.description}
              />
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
              {services.map((service, index) => {
                const ctaConfig = getCtaConfig(service.path);
                return (
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
                      learnMoreLabel={ctaConfig.label}
                      path={ctaConfig.path}
                    />
                  </div>
                );
              })}
            </div>
            <div className="hidden grid-cols-6 gap-6 md:grid">
              {services.map((service, index) => {
                const cardWidthClass = index < 2 ? "col-span-3" : "col-span-2";
                const ctaConfig = getCtaConfig(service.path);

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
                      learnMoreLabel={ctaConfig.label}
                      animationDelayMs={index * 90}
                      className="motion-safe:animate-home-fade-up"
                      path={ctaConfig.path}
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
