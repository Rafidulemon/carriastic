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

const blurDataUrl =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMB/6XKZQAAAABJRU5ErkJggg==";

const CareersPage = () => {
  const { t } = useLanguage();
  const career = t.careerPage;

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
    <div className="w-full bg-white">
      <section className="relative isolate w-full overflow-hidden">
        <Image
          src="/banners/career.jpg"
          alt={career.hero.imageAlt}
          fill
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurDataUrl}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-primary/65 to-emerald-500/50" />
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-amber-300/30 blur-3xl" />
        <div className="pointer-events-none absolute right-10 top-[-60px] h-64 w-64 rounded-full bg-sky-400/35 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-90px] right-[-50px] h-72 w-72 rounded-full bg-rose-400/30 blur-3xl" />
        <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-6 py-10 text-white md:px-10 md:py-16">
          <span className="inline-flex w-fit self-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.35em] md:self-start">
            {career.hero.label}
          </span>
          <div className="flex flex-col gap-5 text-center md:text-left">
            <h1 className="text-[32px] font-semibold leading-[1.05] md:text-[56px] font-spaceGrotesk">
              {career.hero.headline}
            </h1>
            <p className="max-w-[680px] text-[16px] text-white/85 md:text-[18px]">
              {career.hero.description}
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              {career.hero.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/80"
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <Button href="#openings" theme="gradient">
                {career.hero.primaryCta}
              </Button>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3 text-[15px] font-semibold text-white backdrop-blur transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/20"
              >
                {career.hero.secondaryCta}
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {career.hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/20 bg-gradient-to-br from-white/20 via-white/10 to-white/5 p-4 text-center backdrop-blur"
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
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-[11px] uppercase tracking-[0.35em] text-primary">
            {career.culture.label}
          </span>
          <h2 className="text-[30px] font-semibold text-slate-900 md:text-[40px] font-spaceGrotesk">
            {career.culture.headline}
          </h2>
          <p className="max-w-[760px] text-[16px] text-slate-600 md:text-[18px]">
            {career.culture.description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {career.culture.items.map((item, index) => {
            const styles =
              benefitStyles[item.id as keyof typeof benefitStyles];
            return (
              <div
                key={item.title}
                className={`rounded-2xl bg-gradient-to-br ${
                  styles?.accent ?? benefitAccents[index % benefitAccents.length]
                } p-[1px] transition duration-300 ease-out hover:-translate-y-1`}
              >
                <div
                  className={`flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-gradient-to-br ${
                    benefitFills[index % benefitFills.length]
                  } p-6 shadow-[0_22px_50px_rgba(14,165,233,0.18)] backdrop-blur`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full border border-primary/15 bg-gradient-to-br ${
                      iconFills[index % iconFills.length]
                    } text-[20px] ${
                      iconColors[index % iconColors.length]
                    } shadow-[0_12px_24px_rgba(15,23,42,0.4)]`}
                  >
                    {styles?.icon}
                  </div>
                  <h3 className="text-[18px] font-semibold text-white font-spaceGrotesk">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-slate-300">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section
        id="openings"
        className="relative mx-auto w-full max-w-[1200px] px-6 pb-16 md:px-10"
      >
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-[11px] uppercase tracking-[0.35em] text-primary">
            {career.openings.label}
          </span>
          <h2 className="text-[30px] font-semibold text-slate-900 md:text-[40px] font-spaceGrotesk">
            {career.openings.headline}
          </h2>
          <p className="max-w-[760px] text-[16px] text-slate-600 md:text-[18px]">
            {career.openings.description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {career.openings.roles.map((role, index) => (
            <div
              key={`${role.title}-${index}`}
              className={`rounded-2xl bg-gradient-to-br ${
                benefitAccents[index % benefitAccents.length]
              } p-[1px] transition duration-300 ease-out hover:-translate-y-1`}
            >
              <div
                className={`flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-br ${
                  benefitFills[index % benefitFills.length]
                } p-6 shadow-[0_22px_50px_rgba(59,130,246,0.18)] backdrop-blur`}
              >
                <div>
                  <h3 className="text-[18px] font-semibold text-white font-spaceGrotesk">
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
                <Link
                  href={role.link}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-[14px] font-semibold text-white shadow-[0_12px_24px_rgba(15,23,42,0.4)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/15"
                >
                  {career.openings.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1200px] px-6 pb-16 md:px-10">
        <div className="rounded-[32px] bg-gradient-to-r from-primary/80 via-primaryLight/70 to-sky-500/70 p-[1px]">
          <div className="rounded-[32px] bg-[#0b1220] px-8 py-10 text-center text-white shadow-[0_24px_60px_rgba(15,23,42,0.4)] md:px-12 md:py-12">
            <span className="text-[11px] uppercase tracking-[0.35em] text-white/70">
              {career.cta.label}
            </span>
            <h2 className="mt-3 text-[28px] font-semibold md:text-[36px] font-spaceGrotesk">
              {career.cta.headline}
            </h2>
            <p className="mt-3 text-[15px] text-white/75 md:text-[17px]">
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
      </section>
    </div>
  );
};

export default CareersPage;
