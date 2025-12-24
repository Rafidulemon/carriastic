"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ReviewCard from "../../components/cards/ClientReviewCard";
import Services from "@/app/components/services/Service";
import TechStackSection from "@/app/components/home-page/TechStackSection";
import Button from "../../components/button/Button";
import { useLanguage } from "../../i18n/LanguageProvider";

const ServicesPage = () => {
  const { t } = useLanguage();
  const servicesPage = t.servicesPage;
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const reviewCount = servicesPage.reviews.length;

  useEffect(() => {
    if (reviewCount <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveReviewIndex((prev) => (prev + 1) % reviewCount);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [reviewCount]);

  useEffect(() => {
    setActiveReviewIndex(0);
  }, [reviewCount]);

  const highlightAccents = [
    "from-[#ede9fe]/70 via-white to-[#dbeafe]/70",
    "from-[#dcfce7]/70 via-white to-[#ccfbf1]/70",
    "from-[#fef3c7]/70 via-white to-[#ffe4e6]/70",
  ];

  return (
    <div className="w-full">
      <section className="relative isolate w-full overflow-hidden">
        <Image
          src="/banners/service.jpg"
          alt={servicesPage.hero.label}
          layout="fill"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-slate-900/70" />
        <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-primaryLight/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-60px] right-[-40px] h-72 w-72 rounded-full bg-sky-400/30 blur-3xl" />
        <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center gap-6 px-6 py-6 md:py-12 md:px-10 text-center text-white md:items-start md:text-left">
          <span className="inline-flex w-fit self-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.3em] md:self-start">
            {servicesPage.hero.label}
          </span>
          <h1 className="text-[32px] font-semibold leading-[1.05] md:text-[56px] font-spaceGrotesk">
            {servicesPage.hero.headline}
          </h1>
          <p className="max-w-[680px] text-[16px] text-white/85 md:text-[18px]">
            {servicesPage.hero.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <Button href="/products" theme="gradient">
              {servicesPage.hero.primaryCta}
            </Button>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3 text-[15px] font-semibold text-white backdrop-blur transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/20"
            >
              {servicesPage.hero.secondaryCta}
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {servicesPage.hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur md:text-left"
              >
                <p className="text-[22px] font-semibold">{stat.value}</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-white/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1200px] px-6 py-14 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col gap-4 text-center lg:items-start lg:text-left">
            <span className="text-[11px] uppercase tracking-[0.35em] text-primary">
              {servicesPage.highlights.label}
            </span>
            <h2 className="text-[30px] font-semibold text-slate-900 md:text-[40px] font-spaceGrotesk">
              {servicesPage.highlights.headline}
            </h2>
            <p className="text-[16px] text-slate-600 md:text-[18px]">
              {servicesPage.highlights.description}
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2 lg:justify-start">
              {servicesPage.highlights.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-[12px] uppercase tracking-[0.2em] text-primary"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            {servicesPage.highlights.cards.map((card, index) => (
              <div
                key={card.title}
                className={`rounded-2xl bg-gradient-to-br ${
                  highlightAccents[index] ?? highlightAccents[0]
                } p-[1px]`}
              >
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.12)]">
                  <span className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                    {card.tag}
                  </span>
                  <h3 className="text-[18px] font-semibold text-slate-900 font-spaceGrotesk">
                    {card.title}
                  </h3>
                  <p className="text-[14px] text-slate-600">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full text-center mb-6 md:mb-10">
        <Services />
      </div>

      <TechStackSection />

      <section className="relative mx-auto w-full max-w-[1200px] px-6 pb-14 md:px-10">
        <div className="rounded-[32px] bg-gradient-to-r from-primary/80 via-primaryLight/70 to-sky-500/70 p-[1px]">
          <div className="rounded-[32px] bg-[#0b1220] px-8 py-10 text-center text-white shadow-[0_24px_60px_rgba(15,23,42,0.4)] md:px-12 md:py-12 md:text-left">
            <span className="text-[11px] uppercase tracking-[0.35em] text-white/70">
              {servicesPage.cta.label}
            </span>
            <h2 className="mt-3 text-[28px] font-semibold md:text-[36px] font-spaceGrotesk">
              {servicesPage.cta.headline}
            </h2>
            <p className="mt-3 max-w-[720px] text-[15px] text-white/75 md:text-[17px]">
              {servicesPage.cta.description}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 md:justify-start">
              <Button href="/contact" theme="gradient">
                {servicesPage.cta.primaryCta}
              </Button>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-[15px] font-semibold text-white backdrop-blur transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/20"
              >
                {servicesPage.cta.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-6 pb-14 md:px-10">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-6">
          <div className="text-center">
            <span className="text-[11px] uppercase tracking-[0.35em] text-primary">
              {servicesPage.testimonials.label}
            </span>
            <h2 className="mt-3 text-[24px] font-semibold text-slate-900 md:text-[32px] font-spaceGrotesk">
              {servicesPage.testimonials.headline}
            </h2>
            <p className="mt-2 text-[15px] text-slate-600">
              {servicesPage.testimonials.description}
            </p>
          </div>
          <div className="w-full overflow-hidden md:hidden">
            <div
              className="flex w-full transition-transform duration-700 ease-in-out will-change-transform"
              style={{ transform: `translateX(-${activeReviewIndex * 100}%)` }}
            >
              {servicesPage.reviews.map((review, index) => (
                <div key={`mobile-${index}`} className="w-full shrink-0 px-2">
                  <ReviewCard {...review} />
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden w-full overflow-hidden md:block">
            <div className="flex flex-row animate-marquee-logo gap-6">
              {servicesPage.reviews.map((review, index) => (
                <ReviewCard key={`desktop-${index}`} {...review} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
