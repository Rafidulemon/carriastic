"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiClock,
  FiLayers,
  FiMapPin,
  FiServer,
} from "react-icons/fi";
import Header from "../navigations/Header";
import HeroBreadcrumb from "../navigations/HeroBreadcrumb";
import { useLanguage } from "@/app/i18n/LanguageProvider";
import type {
  AccentKey,
  ProductDetailsProps,
} from "@/app/(main)/products/_components/types";
const accentMap: Record<
  AccentKey,
  {
    pill: string;
    gradient: string;
    border: string;
    shadow: string;
    glow: string;
  }
> = {
  plum: {
    pill: "bg-primary/15 text-white border-primary/30",
    gradient: "from-[#0c0516] via-[#110926] to-[#1a0d33]",
    border: "border-primary/40",
    shadow: "shadow-[0_22px_48px_rgba(55,0,84,0.35)]",
    glow: "bg-primary/25",
  },
  teal: {
    pill: "bg-teal-700/40 text-teal-100 border-teal-500/40",
    gradient: "from-[#051a1a] via-[#0b2628] to-[#0f2f31]",
    border: "border-teal-500/40",
    shadow: "shadow-[0_22px_48px_rgba(13,148,136,0.35)]",
    glow: "bg-teal-400/25",
  },
  amber: {
    pill: "bg-amber-700/40 text-amber-100 border-amber-500/40",
    gradient: "from-[#1a1205] via-[#261708] to-[#33200b]",
    border: "border-amber-500/40",
    shadow: "shadow-[0_22px_48px_rgba(245,158,11,0.35)]",
    glow: "bg-amber-400/20",
  },
  indigo: {
    pill: "bg-indigo-800/40 text-indigo-100 border-indigo-500/40",
    gradient: "from-[#0b0f2b] via-[#0f1538] to-[#141c45]",
    border: "border-indigo-500/40",
    shadow: "shadow-[0_22px_48px_rgba(79,70,229,0.35)]",
    glow: "bg-indigo-400/25",
  },
  rose: {
    pill: "bg-rose-800/40 text-rose-100 border-rose-500/40",
    gradient: "from-[#1a0a10] via-[#240d16] to-[#2f111c]",
    border: "border-rose-500/40",
    shadow: "shadow-[0_22px_48px_rgba(244,63,94,0.35)]",
    glow: "bg-rose-400/25",
  },
  emerald: {
    pill: "bg-emerald-800/40 text-emerald-100 border-emerald-500/40",
    gradient: "from-[#0a1b12] via-[#0f2518] to-[#12301f]",
    border: "border-emerald-500/40",
    shadow: "shadow-[0_22px_48px_rgba(16,185,129,0.35)]",
    glow: "bg-emerald-400/20",
  },
  cyan: {
    pill: "bg-cyan-800/40 text-cyan-100 border-cyan-500/40",
    gradient: "from-[#041824] via-[#062031] to-[#0a2a3d]",
    border: "border-cyan-500/40",
    shadow: "shadow-[0_22px_48px_rgba(6,182,212,0.35)]",
    glow: "bg-cyan-400/25",
  },
  slate: {
    pill: "bg-slate-800/40 text-slate-100 border-slate-600/40",
    gradient: "from-[#0b0d14] via-[#101420] to-[#141a2b]",
    border: "border-slate-600/40",
    shadow: "shadow-[0_22px_48px_rgba(15,23,42,0.35)]",
    glow: "bg-slate-500/25",
  },
  violet: {
    pill: "bg-violet-800/40 text-violet-100 border-violet-500/40",
    gradient: "from-[#120b1f] via-[#190f2b] to-[#22133b]",
    border: "border-violet-500/40",
    shadow: "shadow-[0_22px_48px_rgba(139,92,246,0.35)]",
    glow: "bg-violet-400/25",
  },
};

const mockupMap: Record<string, string> = {
  "portfolio-website": "/products/portfolio/mockup.png",
  "hr-management-software": "/products/hrm/mockup.png",
  "hospital-management-software": "/products/hospital/mockup.png",
  "cv-sorting-ai": "/products/cvSort/mockup.png",
  "ai-chatbot-implementation": "/products/chatBot/mockup.png",
  "e-commerce-website": "/products/eCom/mockup.png",
  "restaurant-management-software": "/products/restaurent/mockup.png",
  "cloud-kitchen-app": "/products/cloudKitchen/mockup.png",
  "custom-software-development": "/products/custom/mockup.png",
};

const SectionCard = ({
  title,
  items,
  type = "list",
}: {
  title: string;
  items: string[];
  type?: "list" | "grid";
}) => (
  <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_26px_rgba(15,23,42,0.12)]">
    <h3 className="text-[16px] font-semibold text-slate-900 font-spaceGrotesk">
      {title}
    </h3>
    <div
      className={
        type === "grid" ? "grid gap-2 sm:grid-cols-2" : "flex flex-col gap-2"
      }
    >
      {items.map((item) => (
        <div
          key={item}
          className="flex items-start gap-2 text-[14px] text-slate-700"
        >
          <FiCheck className="mt-0.5 text-primary" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  </div>
);

const Pill = ({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) => (
  <span
    className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.24em] ${className}`}
  >
    {children}
  </span>
);

const techLogoMap: Record<string, string> = {
  "next.js": "/technologies/next.png",
  nextjs: "/technologies/next.png",
  react: "/technologies/react.png",
  "tailwind css": "/technologies/tailwind.png",
  tailwind: "/technologies/tailwind.png",
  vercel: "/technologies/vercel.png",
  stripe: "/technologies/stripe.png",
  postgresql: "/technologies/pg.png",
  postgres: "/technologies/pg.png",
  "node.js": "/technologies/node.png",
  nodejs: "/technologies/node.png",
  node: "/technologies/node.png",
  python: "/technologies/python.png",
  aws: "/technologies/aws.png",
  "amazon web services": "/technologies/aws.png",
  langchain: "/technologies/langChain.png",
  redis: "/technologies/redis.png",
  docker: "/technologies/Docker.png",
  firebase: "/technologies/firebase.png",
  fastapi: "/technologies/fast.png",
  openai: "/technologies/openAI.png",
  mongodb: "/technologies/mongodb.png",
  "mongo db": "/technologies/mongodb.png",
  "vector db": "/technologies/vector_db.svg",
  prisma: "/technologies/prisma.png",
  jwt: "/technologies/jwt.png",
  "google analytics": "/technologies/google_analytics.png",
  "lang chain": "/technologies/langChain.png",
  vector: "/technologies/vector.png",
};

const MetricCard = ({
  value,
  label,
  description,
}: {
  value: string;
  label: string;
  description?: string;
}) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_12px_28px_rgba(15,23,42,0.1)]">
    <p className="text-[20px] font-semibold text-slate-900">{value}</p>
    <p className="text-[12px] uppercase tracking-[0.24em] text-primary mt-1">
      {label}
    </p>
    {description && (
      <p className="mt-2 text-[13px] text-slate-600">{description}</p>
    )}
  </div>
);

const ImplementationStep = ({
  title,
  description,
  duration,
}: {
  title: string;
  description: string;
  duration?: string;
}) => (
  <div className="relative flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_12px_28px_rgba(15,23,42,0.1)]">
    <div className="flex items-center justify-between gap-3">
      <h4 className="text-[15px] font-semibold text-slate-900">{title}</h4>
      {duration && (
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-[12px] text-slate-600">
          <FiClock />
          {duration}
        </span>
      )}
    </div>
    <p className="text-[13px] text-slate-600">{description}</p>
  </div>
);

const ProductDetailsLayout = ({
  product,
  detailsCopy,
  extras,
  ctaCopy,
  productsList,
  accent = "plum",
}: ProductDetailsProps) => {
  const { t } = useLanguage();
  const homeLabel = t.nav.home;
  const accentClasses = accentMap[accent] ?? accentMap.plum;
  const otherProducts = productsList
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);
  const mockupSrc = mockupMap[product.slug] ?? product.gif;

  return (
    <div className="relative overflow-hidden bg-[#f7f8fc] text-slate-900">
      <section className="relative overflow-hidden bg-[#0b1220] text-white home-hero">
        <div className="pointer-events-none absolute inset-0 home-grid" />
        <div className="home-orb home-orb-two" />
        <div className="home-orb home-orb-three" />
        <div
          className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full blur-3xl"
          style={{ backgroundColor: accentClasses.glow }}
        />
        <div
          className="pointer-events-none absolute right-[-120px] top-24 h-[420px] w-[420px] rounded-full blur-3xl"
          style={{ backgroundColor: accentClasses.glow }}
        />
        <Header isDark />

        <div
          id="product-hero"
          className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-6 pb-16 pt-8 md:px-10 md:pb-20 md:pt-12 min-h-screen justify-center hero-smooth-reveal"
        >
          <div className="flex flex-row justify-between items-start">
            <HeroBreadcrumb
              items={[
                { label: homeLabel, href: "/" },
                { label: detailsCopy.label, href: "/products" },
                { label: product.title },
              ]}
            />
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[13px] font-semibold text-white/90 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              {detailsCopy.primaryCta}
              <FiArrowRight />
            </Link>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1.05fr]">
            <div className="flex flex-col gap-5">
              <Pill
                className={`${accentClasses.pill} w-fit border ${accentClasses.border}`}
              >
                {product.tag}
              </Pill>
              <h1 className="text-[34px] font-semibold leading-[1.05] text-white md:text-[52px] font-spaceGrotesk drop-shadow-[0_18px_36px_rgba(0,0,0,0.35)]">
                {product.title}
              </h1>
              <p className="text-[17px] text-white/80 md:text-[18px]">
                {product.summary}
              </p>
              <p className="text-[15px] leading-[1.7] text-white/70 md:text-[16px] text-justify">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.highlights.map((item) => (
                  <Pill
                    key={item}
                    className={`${accentClasses.pill} border ${accentClasses.border} border-opacity-60`}
                  >
                    {item}
                  </Pill>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primaryLight to-primary px-6 py-3 text-[14px] font-semibold text-white shadow-[0_14px_28px_rgba(55,0,84,0.35)] transition hover:-translate-y-0.5"
                >
                  {detailsCopy.primaryCta}
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-[14px] font-semibold text-white shadow-[0_12px_24px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5"
                >
                  {detailsCopy.secondaryCta}
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto aspect-[4/3] w-full max-w-[640px] overflow-hidden">
                {mockupSrc ? (
                  <Image
                    src={mockupSrc}
                    alt={product.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 560px, 92vw"
                    className="object-contain"
                    priority
                  />
                ) : product.gif ? (
                  <Image
                    src={product.gif}
                    alt={product.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 560px, 92vw"
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-white/60">
                    {product.imageAlt}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1200px] px-6 pb-14 pt-12 md:px-10 md:pt-14">
        <div className="grid gap-6 lg:grid-cols-2">
          <SectionCard
            title={detailsCopy.sections.featuresLabel}
            items={product.features}
          />
          <SectionCard
            title={detailsCopy.sections.benefitsLabel}
            items={product.benefits}
          />
        </div>

        {extras?.modules && extras.modules.length > 0 && (
          <div className="mt-10">
            <h2 className="text-[22px] font-semibold text-slate-900 font-spaceGrotesk">
              {detailsCopy.sections.modulesLabel}
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {extras.modules.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_12px_26px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex items-center gap-2 text-primary">
                    <FiLayers />
                    <h4 className="text-[15px] font-semibold text-slate-900">
                      {item.title}
                    </h4>
                  </div>
                  <p className="mt-2 text-[13px] text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {extras?.useCases && extras.useCases.length > 0 && (
          <div className="mt-10">
            <h2 className="text-[22px] font-semibold text-slate-900 font-spaceGrotesk">
              {detailsCopy.sections.useCasesLabel}
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {extras.useCases.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_12px_26px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex items-center gap-2 text-primary">
                    <FiMapPin />
                    <h4 className="text-[15px] font-semibold text-slate-900">
                      {item.title}
                    </h4>
                  </div>
                  <p className="mt-2 text-[13px] text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {extras?.integrations && extras.integrations.length > 0 && (
          <div className="mt-10">
            <h2 className="text-[22px] font-semibold text-slate-900 font-spaceGrotesk">
              {detailsCopy.sections.integrationsLabel}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {extras.integrations.map((item) => (
                <Pill
                  key={item}
                  className="border border-slate-200 bg-white text-slate-800 shadow-sm"
                >
                  {item}
                </Pill>
              ))}
            </div>
          </div>
        )}

        {extras?.metrics && extras.metrics.length > 0 && (
          <div className="mt-10">
            <h2 className="text-[22px] font-semibold text-slate-900 font-spaceGrotesk">
              {detailsCopy.sections.metricsLabel}
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {extras.metrics.map((metric) => (
                <MetricCard
                  key={metric.label + metric.value}
                  value={metric.value}
                  label={metric.label}
                  description={metric.description}
                />
              ))}
            </div>
          </div>
        )}

        {extras?.implementation && extras.implementation.length > 0 && (
          <div className="mt-10">
            <h2 className="text-[22px] font-semibold text-slate-900 font-spaceGrotesk">
              {detailsCopy.sections.deliveryLabel}
            </h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {extras.implementation.map((step) => (
                <ImplementationStep
                  key={step.title}
                  title={step.title}
                  description={step.description}
                  duration={step.duration}
                />
              ))}
            </div>
          </div>
        )}

        <div className="rounded-3xl border border-primary/20 bg-white mt-6 p-6 shadow-[0_16px_36px_rgba(55,0,84,0.12)]">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <h2 className="text-[20px] font-semibold text-primary font-spaceGrotesk uppercase tracking-[0.2em]">
              {detailsCopy.sections.stackLabel}
            </h2>
            <span className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-[12px] font-semibold uppercase tracking-[0.22em] text-primary">
              {detailsCopy.sections.stackBadgeLabel}
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {product.technologyStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white px-3 py-2 text-[12px] uppercase tracking-[0.18em] text-slate-800 shadow-[0_10px_22px_rgba(55,0,84,0.08)]"
              >
                {techLogoMap[tech.toLowerCase()] && (
                  <Image
                    src={techLogoMap[tech.toLowerCase()]}
                    alt={tech}
                    width={20}
                    height={20}
                    className="h-[20px] w-[20px] object-contain"
                  />
                )}
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>

        {extras?.support && extras.support.length > 0 && (
          <div className="mt-10">
            <h2 className="text-[22px] font-semibold text-slate-900 font-spaceGrotesk">
              {detailsCopy.sections.supportLabel}
            </h2>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {extras.support.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-[0_8px_18px_rgba(15,23,42,0.08)]"
                >
                  <FiServer className="mt-1 text-primary" />
                  <p className="text-[13px] text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 rounded-[28px] border border-primary/15 bg-gradient-to-r from-primary/10 via-white to-sky-100 p-[1px]">
          <div className="flex flex-col gap-5 rounded-[28px] border border-white/60 bg-white px-6 py-6 shadow-[0_18px_44px_rgba(15,23,42,0.12)] md:flex-row md:items-center md:justify-between">
            <div className="max-w-[640px] space-y-3">
              <span className="text-[11px] uppercase tracking-[0.32em] text-primary">
                {ctaCopy.label}
              </span>
              <h3 className="text-[22px] font-semibold text-slate-900 md:text-[26px] font-spaceGrotesk">
                {ctaCopy.headline}
              </h3>
              <p className="text-[14px] text-slate-600 md:text-[15px]">
                {ctaCopy.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primaryLight to-primary px-6 py-3 text-[14px] font-semibold text-white shadow-[0_10px_20px_rgba(55,0,84,0.24)] transition hover:-translate-y-0.5"
              >
                {ctaCopy.primaryCta}
                <FiArrowRight />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-6 py-3 text-[14px] font-semibold text-primary shadow-[0_10px_20px_rgba(55,0,84,0.12)] transition hover:-translate-y-0.5"
              >
                {ctaCopy.secondaryCta}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-[18px] font-semibold text-slate-900 font-spaceGrotesk">
            {detailsCopy.sections.moreProductsLabel}
          </h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {otherProducts.map((item) => (
              <Link
                key={item.slug}
                href={`/products/${item.slug}`}
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-[14px] text-slate-800 shadow-[0_10px_22px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:border-primary/30"
              >
                <div className="flex flex-col">
                  <span className="text-[12px] uppercase tracking-[0.24em] text-primary/70">
                    {item.tag}
                  </span>
                  <span className="font-semibold text-slate-900">
                    {item.title}
                  </span>
                </div>
                <FiArrowRight className="text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailsLayout;
