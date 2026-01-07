"use client";

import Image from "next/image";
import Link from "next/link";
import { FiCpu, FiLayers, FiShield } from "react-icons/fi";
import Button from "../button/Button";
import Header from "../navigations/Header";
import { useLanguage } from "../../i18n/LanguageProvider";
import HeroBreadcrumb from "../navigations/HeroBreadcrumb";

const ServiceHeroSection = () => {
  const { t } = useLanguage();
  const { hero, highlights } = t.servicesPage;
  const featureIcons = [FiLayers, FiCpu, FiShield];
  const heroBullets = [hero.bullet1, hero.bullet2, hero.bullet3].filter(
    (bullet) => Boolean(bullet)
  );

  return (
    <section
      id="service-hero"
      className="home-hero relative flex min-h-[100svh] flex-col overflow-hidden -mt-16 pb-6 md:-mt-20 md:min-h-screen"
    >
      <div className="pointer-events-none absolute inset-0 home-grid" />
      <div className="home-orb home-orb-two" />
      <div className="home-orb home-orb-three" />
      <Header isDark />

      <div className="hero-smooth-reveal mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center gap-10 px-4 pt-6 sm:gap-12 sm:pt-8 md:gap-14 md:px-8 lg:flex-row lg:items-center">
        <div className="flex flex-1 flex-col items-center gap-5 text-center lg:items-start lg:text-left">
          <HeroBreadcrumb
            items={[
              { label: hero.home, href: "/" },
              { label: hero.label },
            ]}
          />

          <h1 className="text-[30px] font-semibold leading-[1.1] text-white drop-shadow-[0_14px_30px_rgba(9,0,16,0.45)] md:text-[60px] font-spaceGrotesk">
            {hero.headline}
          </h1>
          <p className="max-w-[560px] text-justify leading-[1.7] text-white/70 text-[16px]">
            {hero.description}
          </p>
          {heroBullets.length > 0 && (
            <ul className="mt-2 flex flex-col gap-2 text-[14px] text-white/80">
              {heroBullets.map((bullet, index) => {
                const Icon = featureIcons[index % featureIcons.length];
                return (
                  <li
                    key={`${bullet}-${index}`}
                    className="flex items-center justify-center gap-2 lg:justify-start"
                  >
                    <Icon className="text-orange-200" />
                    <span>{bullet}</span>
                  </li>
                );
              })}
            </ul>
          )}

          <div className="flex w-full flex-col items-stretch justify-center gap-3 pt-2 sm:flex-row sm:w-auto">
            <Button
              href="/products"
              theme="gradient"
              isWidthFull
              className="w-full sm:w-auto"
            >
              {hero.primaryCta}
            </Button>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-[22px] py-[12px] text-[14px] font-semibold text-white transition duration-200 ease-out hover:-translate-y-[2px] hover:bg-white/20 hover:shadow-[0_18px_36px_rgba(5,0,12,0.4)] sm:w-auto"
            >
              {hero.secondaryCta}
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] uppercase tracking-[0.3em] text-white/60 lg:justify-start">
            {highlights.badges.map((badge, index) => (
              <span key={badge} className="inline-flex items-center gap-2">
                {badge}
                {index < highlights.badges.length - 1 && (
                  <span className="text-white/30">•</span>
                )}
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex-1">
          <div>
            <div className="relative overflow-hidden">
              <Image
                src="/images/service_banner.png"
                alt={hero.headline}
                width={960}
                height={500}
                className="mx-auto h-auto w-[70%] max-w-[560px] object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroSection;
