"use client";

import type { ElementType } from "react";
import {
  FiBox,
  FiCompass,
  FiCpu,
  FiLayers,
  FiLink,
  FiPenTool,
  FiRefreshCw,
  FiUserCheck,
} from "react-icons/fi";
import Button from "../button/Button";
import { useLanguage } from "../../i18n/LanguageProvider";

type ServiceCard = {
  title: string;
  description: string;
  icon: ElementType;
  accentClass: string;
  hoverGradient: string;
  badge?: string;
};

type ServiceStyle = Omit<ServiceCard, "title" | "description">;

const serviceStyles: ServiceStyle[] = [
  {
    icon: FiCompass,
    accentClass: "text-[#8b1c2a]",
    hoverGradient: "from-[#b12a3f] via-[#5f4fb2] to-[#1c7f9a]",
  },
  {
    icon: FiCpu,
    accentClass: "text-[#a2431c]",
    hoverGradient: "from-[#7a2e14] via-[#a13f17] to-[#c9722c]",
  },
  {
    icon: FiLayers,
    accentClass: "text-[#a21f4f]",
    hoverGradient: "from-[#155e75] via-[#4338ca] to-[#7c3aed]",
  },
  {
    icon: FiLink,
    accentClass: "text-[#0f5c52]",
    hoverGradient: "from-[#0f766e] via-[#2563eb] to-[#c2410c]",
  },
  {
    icon: FiRefreshCw,
    accentClass: "text-[#b5482a]",
    hoverGradient: "from-[#b45309] via-[#be185d] to-[#1d4ed8]",
  },
  {
    icon: FiUserCheck,
    accentClass: "text-[#2f6b3c]",
    hoverGradient: "from-[#15803d] via-[#0ea5e9] to-[#6d28d9]",
  },
  {
    icon: FiBox,
    accentClass: "text-[#b45309]",
    hoverGradient: "from-[#92400e] via-[#be185d] to-[#1e3a8a]",
  },
  {
    icon: FiPenTool,
    accentClass: "text-[#9f1239]",
    hoverGradient: "from-[#1e40af] via-[#9d174d] to-[#047857]",
  },
];

const OfferingsSection = () => {
  const { t } = useLanguage();
  const services: ServiceCard[] = t.offerings.services.map((service, index) => {
    const style = serviceStyles[index]!;
    return {
      title: service.title,
      description: service.description,
      icon: style.icon,
      accentClass: style.accentClass,
      hoverGradient: style.hoverGradient,
    };
  });
  const marqueeServices = [...services, ...services];

  return (
    <section className="relative w-full bg-[#f8f7fb]">
      <div className="relative mx-auto w-full max-w-[1200px] px-6 py-6 md:px-10">
        <div className="flex flex-col items-center gap-4 text-center">
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
        <div className="mt-12 overflow-hidden [mask-image:linear-gradient(to_right,#00000000_0%,#000000_8%,#000000_92%,#00000000_100%)] [-webkit-mask-image:linear-gradient(to_right,#00000000_0%,#000000_8%,#000000_92%,#00000000_100%)]">
          <div className="flex w-max gap-6 will-change-transform motion-safe:animate-home-services-scroll motion-reduce:animate-none hover:[animation-play-state:paused]">
            {marqueeServices.map((service, index) => {
              const Icon = service.icon;
              const isDuplicate = index >= services.length;
              return (
                <div
                  key={`${service.title}-${index}`}
                  aria-hidden={isDuplicate}
                  className={`group w-[260px] shrink-0 rounded-3xl border border-[#e2e8f0cc] bg-[#ffffff] p-7 text-left text-[#0f172a] transition duration-300 ease-out hover:-translate-y-1 hover:border-[#ffffff26] hover:bg-gradient-to-br hover:text-[#ffffff] md:w-[320px] ${service.hoverGradient}`}
                >
                  <div className="flex items-center justify-center">
                    <Icon
                      className={`text-[30px] transition-colors duration-300 group-hover:text-[#ffffff] ${service.accentClass}`}
                    />
                  </div>
                  <h3 className="mt-5 text-[18px] font-semibold font-spaceGrotesk transition-colors duration-300 group-hover:text-[#ffffff] md:text-[20px]">
                    {service.title}
                  </h3>
                  <p
                    className="mt-3 text-[14px] leading-relaxed text-[#475569] transition-colors duration-300 group-hover:text-[#ffffffd9] md:text-[15px]"
                  >
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/services" theme="gradient">
            {t.offerings.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
