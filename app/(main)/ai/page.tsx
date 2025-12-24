"use client";

import Lottie from "lottie-react";
import Link from "next/link";
import {
  FiCheckCircle,
  FiCpu,
  FiDatabase,
  FiEye,
  FiKey,
  FiLayers,
  FiMessageSquare,
  FiSettings,
  FiShield,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import aiAnimation from "@/public/gifs/ai.json";
import Button from "../../components/button/Button";
import { useLanguage } from "../../i18n/LanguageProvider";

const AiPage = () => {
  const { t } = useLanguage();
  const ai = t.aiPage;

  const solutionAccents = [
    "from-[#ede9fe]/70 via-white to-[#dbeafe]/70",
    "from-[#dcfce7]/70 via-white to-[#ccfbf1]/70",
    "from-[#fef3c7]/70 via-white to-[#ffe4e6]/70",
  ];
  const solutionIcons = [
    FiCpu,
    FiMessageSquare,
    FiDatabase,
    FiLayers,
    FiZap,
    FiShield,
  ];
  const solutions = ai.solutions.cards.map((card, index) => ({
    ...card,
    icon: solutionIcons[index] ?? FiCpu,
    accent: solutionAccents[index % solutionAccents.length],
  }));

  const useCaseIcons = [FiTrendingUp, FiSettings, FiUsers, FiCheckCircle];
  const useCases = ai.useCases.cases.map((item, index) => ({
    ...item,
    icon: useCaseIcons[index] ?? FiTrendingUp,
  }));

  const trustIcons = [FiShield, FiKey, FiEye, FiCheckCircle];
  const trustAccents = [
    "from-[#0ea5e9]/25 to-[#22c55e]/25",
    "from-[#a855f7]/25 to-[#6366f1]/25",
    "from-[#f97316]/25 to-[#f59e0b]/25",
    "from-[#22c55e]/25 to-[#14b8a6]/25",
  ];
  const trustItems = ai.trust.items.map((item, index) => ({
    ...item,
    icon: trustIcons[index] ?? FiShield,
    accent: trustAccents[index % trustAccents.length],
  }));

  return (
    <div className="w-full">
      <section className="relative overflow-hidden bg-[#0b1220] text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#180b2a] via-[#0b1220] to-[#05060d]" />
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primaryLight/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-160px] right-[-120px] h-[360px] w-[360px] rounded-full bg-sky-400/30 blur-3xl" />
        <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-6 py-6 md:py-12 md:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col gap-6">
              <span className="inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-white/80">
                {ai.hero.label}
              </span>
              <h1 className="text-[34px] font-semibold leading-[1.05] md:text-[58px] font-spaceGrotesk">
                {ai.hero.headline}
              </h1>
              <p className="max-w-[620px] text-[16px] text-white/80 md:text-[18px] motion-safe:animate-home-fade-up">
                {ai.hero.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {ai.hero.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/70"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" theme="gradient">
                  {ai.hero.primaryCta}
                </Button>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-[15px] font-semibold text-white backdrop-blur transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/20"
                >
                  {ai.hero.secondaryCta}
                </Link>
              </div>
            </div>
            <div className="relative pb-6 md:pb-0">
              <div className="rounded-[28px] bg-gradient-to-br from-white/20 via-white/5 to-transparent p-[1px] shadow-[0_24px_60px_rgba(15,23,42,0.35)]">
                <div className="rounded-[28px] bg-[#0f172a] p-4 md:p-6">
                  <div className="relative h-[280px] md:h-[360px]">
                    <Lottie
                      animationData={aiAnimation}
                      loop
                      autoplay
                      className="h-full w-full"
                      aria-label={ai.hero.label}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-2xl border border-white/15 bg-white/10 p-4 text-white shadow-[0_18px_40px_rgba(15,23,42,0.35)] backdrop-blur md:absolute md:-bottom-8 md:left-6 md:right-6">
                <span className="text-[11px] uppercase tracking-[0.3em] text-white/70">
                  {ai.hero.highlight.label}
                </span>
                <h3 className="mt-2 text-[16px] font-semibold font-spaceGrotesk">
                  {ai.hero.highlight.title}
                </h3>
                <p className="mt-1 text-[13px] text-white/70">
                  {ai.hero.highlight.description}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {ai.hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/15 bg-white/5 p-4 text-center backdrop-blur"
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
            {ai.solutions.label}
          </span>
          <h2 className="text-[30px] font-semibold text-slate-900 md:text-[40px] font-spaceGrotesk">
            {ai.solutions.headline}
          </h2>
          <p className="max-w-[760px] text-[16px] text-slate-600 md:text-[18px]">
            {ai.solutions.description}
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`rounded-2xl bg-gradient-to-br ${card.accent} p-[1px]`}
              >
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_18px_36px_rgba(15,23,42,0.12)]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="text-[20px]" />
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                      {card.tag}
                    </span>
                  </div>
                  <h3 className="text-[18px] font-semibold text-slate-900 font-spaceGrotesk">
                    {card.title}
                  </h3>
                  <p className="text-[14px] text-slate-600">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0b1220] text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1220] via-[#111827] to-[#020617]" />
        <div className="pointer-events-none absolute -left-16 top-24 h-64 w-64 rounded-full bg-primary/25 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-[-80px] h-72 w-72 rounded-full bg-sky-500/30 blur-3xl" />
        <div className="relative mx-auto w-full max-w-[1200px] px-6 py-16 md:px-10">
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="text-[11px] uppercase tracking-[0.35em] text-white/70">
              {ai.useCases.label}
            </span>
            <h2 className="text-[30px] font-semibold text-white md:text-[40px] font-spaceGrotesk">
              {ai.useCases.headline}
            </h2>
            <p className="max-w-[720px] text-[16px] text-white/70 md:text-[18px]">
              {ai.useCases.description}
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {useCases.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_45px_rgba(0,0,0,0.25)] transition duration-300 ease-out hover:-translate-y-1 hover:border-white/20"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                      <Icon className="text-[20px]" />
                    </span>
                    <h3 className="text-[18px] font-semibold text-white font-spaceGrotesk">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-[14px] text-white/70">
                    {item.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/75"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1200px] px-6 py-14 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col gap-5">
            <span className="text-[11px] uppercase tracking-[0.35em] text-primary">
              {ai.workflow.label}
            </span>
            <h2 className="text-[30px] font-semibold text-slate-900 md:text-[40px] font-spaceGrotesk">
              {ai.workflow.headline}
            </h2>
            <p className="text-[16px] text-slate-600 md:text-[18px]">
              {ai.workflow.description}
            </p>
            <div className="rounded-[26px] bg-gradient-to-br from-primary/10 via-white to-sky-100/70 p-[1px]">
              <div className="rounded-[26px] border border-slate-200/80 bg-white p-6 shadow-[0_18px_36px_rgba(15,23,42,0.12)]">
                <span className="text-[11px] uppercase tracking-[0.35em] text-primary">
                  {ai.workflow.highlight.label}
                </span>
                <h3 className="mt-3 text-[20px] font-semibold text-slate-900 font-spaceGrotesk">
                  {ai.workflow.highlight.title}
                </h3>
                <p className="mt-2 text-[14px] text-slate-600">
                  {ai.workflow.highlight.description}
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            {ai.workflow.steps.map((step, index) => (
              <div
                key={step.title}
                className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_18px_36px_rgba(15,23,42,0.08)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-[13px] font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[17px] font-semibold text-slate-900 font-spaceGrotesk">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1200px] px-6 pb-16 md:px-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-[11px] uppercase tracking-[0.35em] text-primary">
            {ai.trust.label}
          </span>
          <h2 className="text-[28px] font-semibold text-slate-900 md:text-[36px] font-spaceGrotesk">
            {ai.trust.headline}
          </h2>
          <p className="max-w-[720px] text-[15px] text-slate-600 md:text-[17px]">
            {ai.trust.description}
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_18px_36px_rgba(15,23,42,0.1)]"
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${item.accent} text-slate-900`}
                >
                  <Icon className="text-[20px]" />
                </span>
                <h3 className="text-[17px] font-semibold text-slate-900 font-spaceGrotesk">
                  {item.title}
                </h3>
                <p className="text-[14px] text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1200px] px-6 pb-16 md:px-10">
        <div className="rounded-[32px] bg-gradient-to-r from-primary/80 via-primaryLight/70 to-sky-500/70 p-[1px]">
          <div className="rounded-[32px] bg-[#0b1220] px-8 py-10 text-center text-white shadow-[0_24px_60px_rgba(15,23,42,0.4)] md:px-12 md:py-12">
            <span className="text-[11px] uppercase tracking-[0.35em] text-white/70">
              {ai.cta.label}
            </span>
            <h2 className="mt-3 text-[28px] font-semibold md:text-[36px] font-spaceGrotesk">
              {ai.cta.headline}
            </h2>
            <p className="mt-3 text-[15px] text-white/75 md:text-[17px]">
              {ai.cta.description}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button href="/contact" theme="gradient">
                {ai.cta.primaryCta}
              </Button>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-[15px] font-semibold text-white backdrop-blur transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/20"
              >
                {ai.cta.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiPage;
