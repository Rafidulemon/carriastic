"use client";

import ServiceCard from "../cards/ServiceCard";
import { useLanguage } from "../../i18n/LanguageProvider";
import { ServiceCardData, serviceStyles } from "@/app/constants/services";
import TitleText from "../typography/TitleText";

const Services = () => {
  const { t } = useLanguage();
  const services: ServiceCardData[] = t.offerings.services.map(
    (service, index) => {
      const style = serviceStyles[index]!;
      return {
        title: service.title,
        description: service.description,
        icon: style.icon,
        cardClass: style.cardClass,
        glowClass: style.glowClass,
        path: style.path,
      };
    }
  );
  const getCtaConfig = (path?: string) => {
    const isProducts = path?.endsWith("/ready-to-deploy-software-products");
    return {
      label: isProducts ? t.offerings.seeProducts : t.offerings.learnMore,
      path: isProducts ? "/products" : path,
    };
  };

  return (
    <section id="services" className="relative w-full overflow-hidden pb-6 md:pb-12">
      <div className="relative mx-auto w-full max-w-[1200px] px-4 md:px-8">
        <div className="flex flex-col md:gap-10 items-center">
          <TitleText
            label={t.offerings.label}
            headline={t.offerings.headline}
            description={t.offerings.description}
          />
          <div
            className="offerings-reveal w-full"
            style={{ animationDelay: "120ms" }}
          >
            <div className="flex flex-col mt-4 md:mt-0 gap-4 md:hidden">
              {services.map((service) => {
                const ctaConfig = getCtaConfig(service.path);
                return (
                  <div key={`${service.title}-mobile`} className="w-full">
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
                const cardWidthClass =
                  index < 2 || index > 4 ? "col-span-3" : "col-span-2";
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
    </section>
  );
};

export default Services;
