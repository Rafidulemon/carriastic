"use client";

import type { ElementType } from "react";
import Lottie from "lottie-react";
import {
  FiBriefcase,
  FiBox,
  FiCompass,
  FiCpu,
  FiHeart,
  FiLayers,
  FiTool,
  FiTrendingUp,
} from "react-icons/fi";
import servicesAnimation from "@/public/gifs/jsons/services.json";
import Button from "../button/Button";
import ServiceCard from "./ServiceCard";
import { useLanguage } from "../../i18n/LanguageProvider";

type ServiceCardData = {
  title: string;
  description: string;
  icon: ElementType;
  cardClass: string;
  glowClass: string;
  isDark?: boolean;
};

type ServiceStyle = Omit<ServiceCardData, "title" | "description">;

const serviceStyles: ServiceStyle[] = [
  {
    icon: FiLayers,
    cardClass:
      "bg-gradient-to-br from-[#1b0a2a] via-[#4c1d95] to-[#2e1065] shadow-[0_18px_40px_rgba(88,28,135,0.4)]",
    glowClass: "bg-[#a855f7]",
  },
  {
    icon: FiCpu,
    cardClass:
      "bg-gradient-to-br from-[#071a2f] via-[#1d4ed8] to-[#1e3a8a] shadow-[0_18px_40px_rgba(29,78,216,0.36)]",
    glowClass: "bg-[#38bdf8]",
  },
  {
    icon: FiHeart,

    cardClass:
      "bg-gradient-to-br from-[#052e2b] via-[#0f766e] to-[#134e4a] shadow-[0_18px_40px_rgba(20,184,166,0.36)]",
    glowClass: "bg-[#2dd4bf]",
  },
  {
    icon: FiBriefcase,
    cardClass:
      "bg-gradient-to-br from-[#2a0a12] via-[#9f1239] to-[#4c0519] shadow-[0_18px_40px_rgba(190,24,93,0.36)]",
    glowClass: "bg-[#fb7185]",
  },
  {
    icon: FiCompass,
    cardClass:
      "bg-gradient-to-br from-[#2a1607] via-[#b45309] to-[#7c2d12] shadow-[0_18px_40px_rgba(234,88,12,0.36)]",
    glowClass: "bg-[#fbbf24]",
  },
  {
    icon: FiBox,
    cardClass:
      "bg-gradient-to-br from-[#0b2e1a] via-[#15803d] to-[#14532d] shadow-[0_18px_40px_rgba(34,197,94,0.36)]",
    glowClass: "bg-[#4ade80]",
  },
  {
    icon: FiTrendingUp,
    cardClass:
      "bg-gradient-to-br from-[#062533] via-[#0e7490] to-[#083344] shadow-[0_18px_40px_rgba(14,116,144,0.36)]",
    glowClass: "bg-[#22d3ee]",
  },
  {
    icon: FiTool,
    cardClass:
      "bg-gradient-to-br from-[#0b0f1f] via-[#1f2937] to-[#111827] shadow-[0_18px_40px_rgba(148,163,184,0.32)]",
    glowClass: "bg-[#a3e635]",
  },
];

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
        isDark: style.isDark,
      };
    });
  const mobileCycleMs = 4000;
  const mobileTotalMs = mobileCycleMs * services.length;

  return (
    <section className="relative w-full overflow-hidden pb-6">
      <div className="relative mx-auto w-full max-w-[1200px] px-6 pt-12 md:px-10">
        <div className="flex flex-col md:gap-10 md:flex-row md:items-start">
          <div className="offerings-reveal flex flex-col gap-4 md:w-[30%] md:pt-6">
            <span className="inline-flex w-fit uppercase tracking-[0.24em] text-[12px] text-[#0ea5e9]">
              {t.offerings.label}
            </span>
            <h2 className="text-[28px] font-semibold leading-tight text-[#0f172a] md:text-[36px] font-spaceGrotesk">
              {t.offerings.headline}
            </h2>
            <p className="max-w-[420px] text-[16px] text-[#475569]">
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
