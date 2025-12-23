"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../button/Button";
import { useLanguage } from "../../i18n/LanguageProvider";

const heroGifs = [
  "/gifs/ai_first.gif",
  "/gifs/enterprise.gif",
  "/gifs/lifecycle.gif",
];

const HeroSection = () => {
  const [activeGif, setActiveGif] = useState(0);
  const { t } = useLanguage();
  const hero = t.hero;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveGif((prev) => (prev + 1) % heroGifs.length);
    }, 4200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative">
      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-6 py-6 md:py-12 md:px-10">
        <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col gap-6 md:mb-10">
            <span className="inline-flex w-fit uppercase tracking-[0.2em] text-[12px] text-[#0ea5e9]">
              {hero.label}
            </span>
            <h1 className="relative inline-block bg-[linear-gradient(120deg,#7a2fb5_0%,#370054_60%,#5b21b6_100%)] bg-clip-text text-[36px] font-semibold leading-[1.06] text-transparent drop-shadow-[0_10px_22px_#3700542e] md:mb-4 md:text-[60px] font-spaceGrotesk">
              {hero.headline}
            </h1>
            <p className="text-[16px] text-[#334155] md:text-[18px] motion-safe:animate-home-fade-up motion-safe:[animation-delay:0.1s]">
              {hero.descriptionOne}
            </p>
            <p className="text-[16px] text-[#334155] md:text-[18px] motion-safe:animate-home-fade-up motion-safe:[animation-delay:0.2s]">
              {hero.descriptionTwo}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" theme="gradient">
                {hero.primaryCta}
              </Button>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-[#0f172a2e] bg-[#ffffffd9] px-[22px] py-[12px] text-[14px] font-semibold text-[#0b1220] transition duration-200 ease-out hover:-translate-y-[2px] hover:shadow-[0_18px_36px_#0f172a26]"
              >
                {hero.secondaryCta}
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full overflow-hidden rounded-[24px] aspect-[15/11]">
              {heroGifs.map((gif, index) => (
                <Image
                  key={gif}
                  src={gif}
                  alt={hero.gifAlts[index]}
                  fill
                  unoptimized
                  sizes="(min-width: 768px) 45vw, 100vw"
                  priority={index === 0}
                  className={`object-cover transition-opacity duration-1000 ease-in-out ${
                    index === activeGif ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {hero.highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[20px] border border-[#0f172a14] p-4 shadow-[0_20px_55px_#0f172a1f] backdrop-blur-[14px]"
                >
                  <span className="text-[15px] font-semibold text-[#0b1220] font-spaceGrotesk">
                    {item.title}
                  </span>
                  <p className="mt-2 text-[13px] text-[#334155]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
