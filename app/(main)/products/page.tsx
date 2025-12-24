"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiActivity,
  FiArrowUpRight,
  FiCpu,
  FiDatabase,
  FiLayers,
  FiShield,
  FiSliders,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import productsEn from "@/public/locales/en/products.json";
import productsBn from "@/public/locales/bn/products.json";
import Button from "../../components/button/Button";
import { useLanguage } from "../../i18n/LanguageProvider";

type ProductItem = {
  slug: string;
  title: string;
  tag: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: string[];
};

const ProductsPage = () => {
  const { t, locale } = useLanguage();
  const productsPage = t.productsPage;
    const productsData = locale === "bn" ? productsBn : productsEn;

  const productAccents = [
    "from-[#ede9fe]/70 via-white to-[#dbeafe]/70",
    "from-[#dcfce7]/70 via-white to-[#ccfbf1]/70",
    "from-[#fef3c7]/70 via-white to-[#ffe4e6]/70",
  ];

   const productCards = (productsData.items as ProductItem[]).map(
    (item, index) => ({
      ...item,
      accent: productAccents[index % productAccents.length],
    })
  );

  const platformIcons = [
    FiLayers,
    FiDatabase,
    FiShield,
    FiSliders,
    FiCpu,
    FiZap,
  ];
  const platformAccents = [
    "from-primary/15 via-white to-[#c7d2fe]/45",
    "from-[#22c55e]/15 via-white to-[#99f6e4]/45",
    "from-[#38bdf8]/15 via-white to-[#bae6fd]/45",
    "from-[#f59e0b]/15 via-white to-[#fed7aa]/45",
    "from-[#a855f7]/15 via-white to-[#c4b5fd]/45",
    "from-[#f97316]/15 via-white to-[#fecdd3]/45",
  ];

  const platformCards = productsPage.platform.cards.map((card, index) => ({
    ...card,
    icon: platformIcons[index] ?? FiActivity,
    accent: platformAccents[index % platformAccents.length],
  }));

  const outcomeIcons = [FiTrendingUp, FiUsers, FiZap, FiShield];
  const outcomeCards = productsPage.outcomes.metrics.map((metric, index) => ({
    ...metric,
    icon: outcomeIcons[index] ?? FiTrendingUp,
  }));

  return (
    <div className="w-full">
      <section className="relative isolate overflow-hidden bg-[radial-gradient(70%_60%_at_50%_0%,#efe7ff_0%,#f8f7ff_45%,#ffffff_100%)]">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-12 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-120px] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-6 py-6 md:py-12 md:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col gap-6 text-center lg:text-left">
              <span className="inline-flex w-fit self-center rounded-full border border-primary/20 bg-white/80 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-primary lg:self-start">
                {productsPage.hero.label}
              </span>
              <h1 className="text-[34px] font-semibold leading-[1.05] text-slate-900 md:text-[58px] font-spaceGrotesk">
                {productsPage.hero.headline}
              </h1>
              <p className="max-w-[640px] text-[16px] text-slate-600 md:text-[18px]">
                {productsPage.hero.description}
              </p>
              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                {productsPage.hero.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-primary/20 bg-white px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-primary shadow-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                <Button href="#product-suite" theme="gradient">
                  {productsPage.hero.primaryCta}
                </Button>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-primary/25 bg-white px-6 py-3 text-[15px] font-semibold text-primary shadow-[0_12px_24px_rgba(55,0,84,0.12)] transition duration-200 ease-out hover:-translate-y-0.5"
                >
                  {productsPage.hero.secondaryCta}
                </Link>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {productsPage.hero.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-primary/10 bg-white/80 p-4 text-center shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
                  >
                    <p className="text-[20px] font-semibold text-slate-900">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-slate-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[32px] bg-gradient-to-br from-primary/15 via-white to-sky-200/40 p-[1px] shadow-[0_28px_70px_rgba(15,23,42,0.2)]">
                <div className="rounded-[32px] border border-white/70 bg-white/90 p-5 backdrop-blur">
                  <div className="relative aspect-[6/5] w-full overflow-hidden rounded-[26px]">
                    <Image
                      src={productsPage.hero.image}
                      alt={productsPage.hero.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 420px, 90vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="mt-5 rounded-2xl border border-primary/15 bg-white/90 p-4 text-left">
                    <span className="text-[11px] uppercase tracking-[0.3em] text-primary/80">
                      {productsPage.hero.highlight.label}
                    </span>
                    <h3 className="mt-2 text-[16px] font-semibold text-slate-900 font-spaceGrotesk">
                      {productsPage.hero.highlight.title}
                    </h3>
                    <p className="mt-2 text-[13px] text-slate-600">
                      {productsPage.hero.highlight.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-10 left-8 h-28 w-28 rounded-full bg-primary/10 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section
        id="product-suite"
        className="relative mx-auto w-full max-w-[1200px] px-6 py-14 md:px-10"
      >
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-[11px] uppercase tracking-[0.35em] text-primary">
            {productsPage.catalog.label}
          </span>
          <h2 className="text-[30px] font-semibold text-slate-900 md:text-[40px] font-spaceGrotesk">
            {productsPage.catalog.headline}
          </h2>
          <p className="max-w-[760px] text-[16px] text-slate-600 md:text-[18px]">
            {productsPage.catalog.description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {productCards.map((item) => (
            <Link
              key={item.title}
              href={`/products/${item.slug}`}
              className={`group rounded-[28px] bg-gradient-to-br ${item.accent} p-[1px] transition duration-300 ease-out hover:-translate-y-1`}
              aria-label={`${productsPage.catalog.cardCta}: ${item.title}`}
            >
              <div className="flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_18px_36px_rgba(15,23,42,0.12)]">
                <div className="relative h-44 w-full">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 350px, 90vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/0 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/20 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white backdrop-blur">
                    {item.tag}
                  </span>
                </div>
                <div className="flex h-full flex-col gap-3 p-6">
                  <h3 className="text-[18px] font-semibold text-slate-900 font-spaceGrotesk">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-slate-600">
                    {item.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {item.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-primary"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-4 text-[12px] font-semibold uppercase tracking-[0.24em] text-primary">
                    <span>{productsPage.catalog.cardCta}</span>
                    <FiArrowUpRight className="text-[16px] transition duration-300 ease-out group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[radial-gradient(75%_70%_at_50%_0%,#f1f5ff_0%,#f8fafc_45%,#ffffff_100%)] py-14 md:py-20">
        <div className="pointer-events-none absolute -left-20 top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-12 h-72 w-72 rounded-full bg-sky-400/15 blur-3xl" />
        <div className="relative mx-auto w-full max-w-[1200px] px-6 md:px-10">
          <div className="mx-auto max-w-[760px] text-center">
            <span className="text-[11px] uppercase tracking-[0.35em] text-primary">
              {productsPage.platform.label}
            </span>
            <h2 className="mt-3 text-[30px] font-semibold text-slate-900 md:text-[40px] font-spaceGrotesk">
              {productsPage.platform.headline}
            </h2>
            <p className="mt-3 text-[16px] text-slate-600 md:text-[18px]">
              {productsPage.platform.description}
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {platformCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className={`rounded-2xl bg-gradient-to-br ${card.accent} p-[1px]`}
                >
                  <div className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_18px_36px_rgba(15,23,42,0.1)]">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="text-[20px]" />
                    </span>
                    <h3 className="text-[17px] font-semibold text-slate-900 font-spaceGrotesk">
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
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1200px] px-6 py-14 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col gap-5">
            <span className="text-[11px] uppercase tracking-[0.35em] text-primary">
              {productsPage.delivery.label}
            </span>
            <h2 className="text-[30px] font-semibold text-slate-900 md:text-[40px] font-spaceGrotesk">
              {productsPage.delivery.headline}
            </h2>
            <p className="text-[16px] text-slate-600 md:text-[18px]">
              {productsPage.delivery.description}
            </p>
            <div className="rounded-[26px] bg-gradient-to-br from-primary/10 via-white to-sky-100/70 p-[1px]">
              <div className="rounded-[26px] border border-slate-200/80 bg-white p-6 shadow-[0_18px_36px_rgba(15,23,42,0.12)]">
                <span className="text-[11px] uppercase tracking-[0.35em] text-primary">
                  {productsPage.delivery.highlight.label}
                </span>
                <h3 className="mt-3 text-[20px] font-semibold text-slate-900 font-spaceGrotesk">
                  {productsPage.delivery.highlight.title}
                </h3>
                <p className="mt-2 text-[14px] text-slate-600">
                  {productsPage.delivery.highlight.description}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {productsPage.delivery.steps.map((step, index) => (
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

      <section className="relative overflow-hidden bg-[#0b1220] text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1220] via-[#111827] to-[#020617]" />
        <div className="pointer-events-none absolute -left-16 top-24 h-64 w-64 rounded-full bg-primary/25 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-[-80px] h-72 w-72 rounded-full bg-sky-500/30 blur-3xl" />
        <div className="relative mx-auto w-full max-w-[1200px] px-6 py-16 md:px-10">
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="text-[11px] uppercase tracking-[0.35em] text-white/70">
              {productsPage.outcomes.label}
            </span>
            <h2 className="text-[30px] font-semibold text-white md:text-[40px] font-spaceGrotesk">
              {productsPage.outcomes.headline}
            </h2>
            <p className="max-w-[720px] text-[16px] text-white/70 md:text-[18px]">
              {productsPage.outcomes.description}
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {outcomeCards.map((metric) => {
              const Icon = metric.icon;
              return (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center shadow-[0_20px_45px_rgba(0,0,0,0.25)]"
                >
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                    <Icon className="text-[20px]" />
                  </span>
                  <p className="mt-4 text-[22px] font-semibold text-white">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-[12px] uppercase tracking-[0.28em] text-white/70">
                    {metric.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1200px] px-6 pb-16 pt-12 md:px-10">
        <div className="rounded-[32px] bg-gradient-to-r from-primary/80 via-primaryLight/70 to-sky-500/70 p-[1px]">
          <div className="rounded-[32px] bg-[#0b1220] px-8 py-10 text-center text-white shadow-[0_24px_60px_rgba(15,23,42,0.4)] md:px-12 md:py-12">
            <span className="text-[11px] uppercase tracking-[0.35em] text-white/70">
              {productsPage.cta.label}
            </span>
            <h2 className="mt-3 text-[28px] font-semibold md:text-[36px] font-spaceGrotesk">
              {productsPage.cta.headline}
            </h2>
            <p className="mt-3 text-[15px] text-white/75 md:text-[17px]">
              {productsPage.cta.description}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button href="/contact" theme="gradient">
                {productsPage.cta.primaryCta}
              </Button>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-[15px] font-semibold text-white backdrop-blur transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/20"
              >
                {productsPage.cta.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
