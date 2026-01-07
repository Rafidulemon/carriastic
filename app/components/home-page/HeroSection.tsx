"use client";

import { FiCloud, FiCpu, FiGlobe, FiSmartphone } from "react-icons/fi";
import { useEffect, useState } from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import Button from "../button/Button";
import { useLanguage } from "../../i18n/LanguageProvider";
import codingAnimation from "@/public/gifs/jsons/coding.json";
import Header from "../navigations/Header";

const HeroSection = () => {
  const { t } = useLanguage();
  const hero = t.hero;
  const [activeSub, setActiveSub] = useState(0);

  const headlineSubs = [
    { icon: FiGlobe, label: hero.headline_sub1 },
    { icon: FiSmartphone, label: hero.headline_sub2 },
    { icon: FiCpu, label: hero.headline_sub3 },
    { icon: FiCloud, label: hero.headline_sub4 },
  ];

  useEffect(() => {
    setActiveSub(0);
  }, [
    hero.headline_sub1,
    hero.headline_sub2,
    hero.headline_sub3,
    hero.headline_sub4,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSub((prev) => (prev + 1) % headlineSubs.length);
    }, 2400);

    return () => clearInterval(interval);
  }, [headlineSubs.length]);

  const activeItem = headlineSubs[activeSub];
  const ActiveIcon = activeItem?.icon;

  return (
    <section
      id="home-hero"
      className="home-hero relative flex min-h-[100svh] flex-col overflow-hidden -mt-16 md:-mt-20 md:min-h-screen"
    >
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <Lottie
          animationData={codingAnimation}
          loop
          autoplay
          className="h-full w-full scale-[1.15]"
          aria-hidden="true"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 home-grid" />
      <div className="home-orb home-orb-two" />
      <div className="home-orb home-orb-three" />
      <Header isDark />
      <div className="hero-smooth-reveal mx-auto flex w-full flex-1 flex-col justify-center gap-8 px-5 pt-6 sm:gap-10 sm:px-6 sm:pt-8 md:gap-12 md:pt-10 md:px-10">
        <div className="flex h-full flex-col items-center justify-center gap-5 text-center">
          <span className="inline-flex w-fit uppercase tracking-[0.2em] text-white text-[12px]">
            {hero.label}
          </span>
          <h1 className="relative inline-block whitespace-pre-line break-words font-semibold leading-[1.08] text-white drop-shadow-[0_14px_30px_rgba(9,0,16,0.45)] text-[30px] md:text-[60px] font-spaceGrotesk">
            {hero.headline}
          </h1>
          {activeItem && ActiveIcon && (
            <div className="flex items-center justify-center">
              <div
                key={`${activeSub}-${activeItem.label}`}
                className="hero-sub-rotator relative inline-flex flex-col items-center gap-2 whitespace-pre-line break-words text-center font-semibold leading-[1.1] text-white drop-shadow-[0_14px_30px_rgba(9,0,16,0.45)] sm:flex-row sm:gap-3 text-[24px] md:mb-4 md:text-[60px] font-spaceGrotesk"
              >
                <div className="rounded-[8px] md:rounded-[12px] bg-white/70 p-1 md:p-3">
                  <ActiveIcon
                    className="text-primary text-[24px] md:text-[60px]"
                    aria-hidden="true"
                  />{" "}
                </div>
                <span>{activeItem.label}</span>
              </div>
            </div>
          )}
          <p className="max-w-[560px] text-justify md:text-center text-[16px] leading-[1.7] text-white/70">
            {hero.subtext}
          </p>
          <div className="flex w-full flex-col items-stretch justify-center gap-3 md:flex-row md:w-auto">
            <Button
              href="/contact"
              theme="gradient"
              isWidthFull
              className="w-full md:w-auto"
            >
              {hero.primaryCta}
            </Button>
            <Link
              href="/services"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-[22px] py-[12px] text-[14px] font-semibold text-white transition duration-200 ease-out hover:-translate-y-[2px] hover:bg-white/20 hover:shadow-[0_18px_36px_rgba(5,0,12,0.4)] sm:w-auto"
            >
              {hero.secondaryCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
