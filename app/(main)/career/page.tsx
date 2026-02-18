"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiCoffee,
  FiMapPin,
  FiUsers,
} from "react-icons/fi";
import Button from "../../components/button/Button";
import { useLanguage } from "../../i18n/LanguageProvider";
import Header from "../../components/navigations/Header";
import HeroBreadcrumb from "../../components/navigations/HeroBreadcrumb";

const blurDataUrl =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMB/6XKZQAAAABJRU5ErkJggg==";

const CareersPage = () => {
  const { t } = useLanguage();
  const career = t.careerPage;
  const homeLabel = t.nav.home;

  const benefitAccents = [
    "from-cyan-400 via-blue-500 to-fuchsia-500",
    "from-emerald-400 via-teal-500 to-sky-500",
    "from-rose-400 via-fuchsia-500 to-indigo-500",
  ];
  const benefitFills = [
    "from-[#0ea5e9]/25 via-[#0b1220]/85 to-[#f472b6]/25",
    "from-[#22c55e]/25 via-[#0b1220]/85 to-[#38bdf8]/25",
    "from-[#a855f7]/25 via-[#0b1220]/85 to-[#facc15]/25",
  ];
  const iconFills = [
    "from-cyan-400/30 to-fuchsia-500/30",
    "from-emerald-400/30 to-sky-500/30",
    "from-violet-400/30 to-rose-500/30",
  ];
  const iconColors = ["text-cyan-100", "text-emerald-100", "text-violet-100"];

  const benefitStyles = {
    office: {
      icon: <FiBriefcase />,
      accent: "from-[#fef3c7]/80 via-white to-[#fda4af]/40",
    },
    team: {
      icon: <FiUsers />,
      accent: "from-[#dcfce7]/80 via-white to-[#93c5fd]/50",
    },
    location: {
      icon: <FiMapPin />,
      accent: "from-[#ffe4e6]/80 via-white to-[#fcd34d]/50",
    },
    learning: {
      icon: <FiBookOpen />,
      accent: "from-[#e0f2fe]/80 via-white to-[#a5b4fc]/50",
    },
    meals: {
      icon: <FiCoffee />,
      accent: "from-[#ffedd5]/80 via-white to-[#fca5a5]/40",
    },
    recognition: {
      icon: <FiAward />,
      accent: "from-[#fef9c3]/80 via-white to-[#bbf7d0]/50",
    },
  } as const;

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">
      {/* Hero */}
      <section
        id="career-hero"
        className="home-hero relative flex min-h-[100svh] flex-col overflow-hidden text-white md:min-h-screen"
      >
        <div className="pointer-events-none absolute inset-0 home-grid" />
        <div className="home-orb home-orb-two" />
        <div className="home-orb home-orb-three" />
        <Header isDark />

        <div className="hero-smooth-reveal relative mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center gap-10 px-6 pt-8 sm:gap-12 sm:pt-10 md:gap-14 md:px-10 lg:flex-row lg:items-center">
          <div className="flex flex-1 flex-col gap-6 text-center lg:items-start lg:text-left">
            <HeroBreadcrumb
              items={[
                { label: homeLabel, href: "/" },
                { label: career.hero.label },
              ]}
            />

            <h1 className="text-[34px] font-semibold leading-[1.05] md:text-[58px] font-spaceGrotesk drop-shadow-[0_14px_30px_rgba(9,0,16,0.35)]">
              {career.hero.headline}
            </h1>
            <p className="max-w-[640px] text-[16px] text-white/80 md:text-[18px] lg:text-justify">
              {career.hero.description}
            </p>
            <ul className="flex flex-col gap-3 text-[14px] text-white/80">
              {career.hero.badges.map((badge, index) => {
                const icons = [FiBriefcase, FiUsers, FiMapPin, FiBookOpen];
                const Icon = icons[index % icons.length];
                return (
                  <li
                    key={badge}
                    className="flex items-center justify-center gap-3 lg:justify-start"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-primaryLight">
                      <Icon className="text-[18px]" />
                    </span>
                    <span>{badge}</span>
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <Button href="#openings" theme="gradient" className="w-full sm:w-auto">
                {career.hero.primaryCta}
              </Button>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-[15px] font-semibold text-white backdrop-blur transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/20"
              >
                {career.hero.secondaryCta}
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] uppercase tracking-[0.3em] text-white/60 lg:justify-start">
              {career.hero.stats.map((stat, index) => (
                <span key={stat.label} className="inline-flex items-center gap-2">
                  <span className="text-[18px] font-semibold text-white">
                    {stat.value}
                  </span>
                  <span className="text-white/70">{stat.label}</span>
                  {index < career.hero.stats.length - 1 && (
                    <span className="text-white/30">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          <div className="relative flex-1 pb-6 md:pb-0">
            <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-white/25 via-white/10 to-transparent p-[1px] shadow-[0_24px_60px_rgba(15,23,42,0.4)]">
              <div className="rounded-[28px] bg-[#0f172a]/90 p-4 md:p-6">
                <div className="relative h-[280px] md:h-[360px]">
                  <Image
                    src="/banners/career.jpg"
                    alt={career.hero.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 520px, 90vw"
                    placeholder="blur"
                    blurDataURL={blurDataUrl}
                    className="rounded-[18px] object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-white/15 bg-white/10 p-4 text-white shadow-[0_18px_40px_rgba(15,23,42,0.35)] backdrop-blur md:absolute md:-bottom-8 md:left-6 md:right-6">
              <span className="text-[11px] uppercase tracking-[0.3em] text-white/70">
                {career.hero.label}
              </span>
              <h3 className="mt-2 text-[16px] font-semibold font-spaceGrotesk">
                {career.hero.stats[0]?.value} • {career.hero.stats[0]?.label}
              </h3>
              <p className="mt-1 text-[13px] text-white/70">
                {career.hero.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="relative mx-auto w-full max-w-6xl px-6 py-14 md:px-10">
        <div className="absolute inset-x-6 top-0 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent md:block" />
        <div className="flex flex-col gap-3 text-center">
          <span className="text-[11px] uppercase tracking-[0.32em] text-primary">
            {career.culture.label}
          </span>
          <h2 className="text-[30px] font-semibold md:text-[40px] font-spaceGrotesk">
            {career.culture.headline}
          </h2>
          <p className="mx-auto max-w-[760px] text-[16px] text-white/70 md:text-[18px]">
            {career.culture.description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {career.culture.items.map((item, index) => {
            const styles = benefitStyles[item.id as keyof typeof benefitStyles];
            return (
              <div
                key={item.title}
                className="relative overflow-hidden rounded-3xl border border-white/8 bg-white/5 p-[1px] shadow-[0_24px_70px_rgba(0,0,0,0.25)]"
              >
                <div
                  className={`flex h-full flex-col gap-3 rounded-[28px] bg-gradient-to-br ${
                    styles?.accent ?? benefitAccents[index % benefitAccents.length]
                  } p-6`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br ${
                      iconFills[index % iconFills.length]
                    } text-[20px] ${iconColors[index % iconColors.length]} shadow-[0_10px_22px_rgba(0,0,0,0.35)]`}
                  >
                    {styles?.icon}
                  </div>
                  <h3 className="text-[18px] font-semibold text-slate-950 font-spaceGrotesk">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-slate-700">
                    {item.description}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-[12px] uppercase tracking-[0.26em] text-slate-900/50">
                    <span className="h-px w-6 bg-slate-900/20" />
                    {career.hero.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Openings */}
      <section
        id="openings"
        className="relative mx-auto w-full max-w-6xl px-6 pb-16 md:px-10"
      >
        <div className="flex flex-col gap-3 text-center">
          <span className="text-[11px] uppercase tracking-[0.32em] text-primary">
            {career.openings.label}
          </span>
          <h2 className="text-[30px] font-semibold md:text-[40px] font-spaceGrotesk">
            {career.openings.headline}
          </h2>
          <p className="mx-auto max-w-[760px] text-[16px] text-white/70 md:text-[18px]">
            {career.openings.description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {career.openings.roles.map((role, index) => (
            <div
              key={`${role.title}-${index}`}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-[1px] transition duration-300 ease-out hover:-translate-y-1 hover:border-white/20"
            >
              <div
                className={`flex h-full flex-col gap-5 rounded-[28px] bg-gradient-to-br ${
                  benefitFills[index % benefitFills.length]
                } p-6 backdrop-blur`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-[20px] font-semibold text-white font-spaceGrotesk">
                      {role.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-white/80">
                        {role.type}
                      </span>
                      <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-white/60">
                        {role.location}
                      </span>
                    </div>
                  </div>
                  <span className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-emerald-200">
                    {career.hero.label}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 text-sm text-white/70">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    {career.culture.headline}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    <span className="h-2 w-2 rounded-full bg-sky-400" />
                    {career.culture.label}
                  </span>
                </div>

                <Link
                  href={role.link}
                  className="inline-flex items-center justify-center gap-2 self-start rounded-full border border-white/20 bg-white/10 px-5 py-3 text-[14px] font-semibold text-white shadow-[0_12px_24px_rgba(15,23,42,0.4)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/15"
                >
                  {career.openings.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto w-full max-w-6xl px-6 pb-16 md:px-10">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-r from-primary/70 via-primaryLight/60 to-sky-500/60 p-[1px] shadow-[0_26px_60px_rgba(0,0,0,0.35)]">
          <div className="relative rounded-[32px] bg-[#0b1220] px-8 py-10 text-center text-white md:px-12 md:py-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_85%_10%,rgba(16,185,129,0.2),transparent_40%)]" />
            <div className="relative space-y-3">
              <span className="text-[11px] uppercase tracking-[0.35em] text-white/70">
                {career.cta.label}
              </span>
              <h2 className="text-[28px] font-semibold md:text-[36px] font-spaceGrotesk">
                {career.cta.headline}
              </h2>
              <p className="text-[15px] text-white/75 md:text-[17px]">
                {career.cta.description}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Button href="/contact" theme="gradient">
                  {career.cta.primaryCta}
                </Button>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-[15px] font-semibold text-white backdrop-blur transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/20"
                >
                  {career.cta.secondaryCta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
