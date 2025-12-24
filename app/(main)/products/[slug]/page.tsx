"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FiArrowLeft, FiCheckCircle, FiX } from "react-icons/fi";
import productsEn from "@/public/locales/en/products.json";
import productsBn from "@/public/locales/bn/products.json";
import Button from "../../../components/button/Button";
import EmailInput from "../../../components/inputs/EmailInput";
import TextArea from "../../../components/inputs/TextArea";
import TextInput from "../../../components/inputs/TextInput";
import { useLanguage } from "../../../i18n/LanguageProvider";

type ProductItem = {
  slug: string;
  title: string;
  tag: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  features: string[];
  benefits: string[];
  technologyStack: string[];
};

const techStackLogos: Record<string, string> = {
  "Next.js": "/technologies/next.png",
  React: "/technologies/react.png",
  "Tailwind CSS": "/technologies/tailwind.png",
  Vercel: "/technologies/vercel.png",
  "Google Analytics": "/technologies/google_analytics.png",
  "Node.js": "/technologies/node.png",
  PostgreSQL: "/technologies/pg.png",
  JWT: "/technologies/jwt.png",
  AWS: "/technologies/aws.png",
  Redis: "/technologies/redis.png",
  Docker: "/technologies/Docker.png",
  Python: "/technologies/python.png",
  FastAPI: "/technologies/fast.png",
  "Vector DB": "/technologies/vector_db.svg",
  OpenAI: "/technologies/openAI.png",
  LangChain: "/technologies/langChain.png",
  Stripe: "/technologies/stripe.png",
  Firebase: "/technologies/firebase.png",
};

const ProductDetailsPage = () => {
  const { t, locale } = useLanguage();
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const { slug } = useParams();
  const details = t.productsPage.details;
  const productsData = locale === "bn" ? productsBn : productsEn;
  const slugValue = Array.isArray(slug) ? slug[0] : slug;
  const product = (productsData.items as ProductItem[]).find(
    (item) => item.slug === slugValue
  );

  useEffect(() => {
    if (product?.title) {
      setSelectedService(product.title);
    }
  }, [product?.title]);

  if (!product) {
    return (
      <section className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center gap-6 px-6 py-6 md:py-12 md:px-10 text-center">
        <span className="text-[11px] uppercase tracking-[0.35em] text-primary">
          {details.label}
        </span>
        <h1 className="text-[30px] font-semibold text-slate-900 md:text-[42px] font-spaceGrotesk">
          {details.notFound.title}
        </h1>
        <p className="max-w-[620px] text-[16px] text-slate-600 md:text-[18px]">
          {details.notFound.description}
        </p>
        <Link
          href="/products"
          className="inline-flex items-center justify-center rounded-full border border-primary/25 bg-white px-6 py-3 text-[15px] font-semibold text-primary shadow-[0_12px_24px_rgba(55,0,84,0.12)] transition duration-200 ease-out hover:-translate-y-0.5"
        >
          {details.notFound.cta}
        </Link>
      </section>
    );
  }

  return (
    <div className="w-full">
      <section className="relative overflow-hidden bg-[radial-gradient(70%_60%_at_50%_0%,#efe7ff_0%,#f8f7ff_45%,#ffffff_100%)]">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-12 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-6 py-6 md:py-12 md:px-10">
          <Link
            href="/products"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-2 text-[12px] font-semibold text-primary shadow-sm"
          >
            <FiArrowLeft />
            {details.backLabel}
          </Link>

          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col gap-5 text-center lg:text-left">
              <span className="inline-flex w-fit self-center rounded-full border border-primary/20 bg-white px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-primary lg:self-start">
                {details.label}
              </span>
              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                <span className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-primary">
                  {product.tag}
                </span>
              </div>
              <h1 className="text-[32px] font-semibold leading-[1.05] text-slate-900 md:text-[52px] font-spaceGrotesk">
                {product.title}
              </h1>
              <p className="text-[16px] text-slate-600 md:text-[18px]">
                {product.summary}
              </p>
              <p className="text-[15px] text-slate-600 md:text-[17px]">
                {product.description}
              </p>
              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                {product.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-primary/15 bg-white px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-primary shadow-sm"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                <Button theme="gradient" onClick={() => setIsDemoOpen(true)}>
                  {details.primaryCta}
                </Button>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-primary/25 bg-white px-6 py-3 text-[15px] font-semibold text-primary shadow-[0_12px_24px_rgba(55,0,84,0.12)] transition duration-200 ease-out hover:-translate-y-0.5"
                >
                  {details.secondaryCta}
                </Link>
              </div>
            </div>

            <div className="relative">
               <div className="rounded-[32px] bg-gradient-to-br from-primary/15 via-white to-sky-200/40 p-[1px] shadow-[0_28px_70px_rgba(15,23,42,0.2)]">
                <div className="rounded-[32px] border border-white/70 bg-white/90 p-5 backdrop-blur">
                  <div className="relative aspect-[6/5] w-full overflow-hidden rounded-[26px]">
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 420px, 90vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1200px] px-6 py-12 md:px-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-[11px] uppercase tracking-[0.35em] text-primary">
            {details.sections.highlightsLabel}
          </span>
          <div className="grid w-full gap-4 md:grid-cols-3">
            {product.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-5 text-center shadow-[0_18px_36px_rgba(15,23,42,0.08)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FiCheckCircle className="text-[18px]" />
                </span>
                <p className="text-[14px] font-semibold text-slate-900">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1200px] px-6 pb-14 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col gap-4">
            <span className="text-[11px] uppercase tracking-[0.35em] text-primary">
              {details.sections.featuresLabel}
            </span>
            <h2 className="text-[26px] font-semibold text-slate-900 md:text-[34px] font-spaceGrotesk">
              {product.title}
            </h2>
            <div className="grid gap-3">
              {product.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-[14px] text-slate-600 shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[11px] uppercase tracking-[0.35em] text-primary">
              {details.sections.benefitsLabel}
            </span>
            <div className="grid gap-3">
              {product.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-2xl border border-slate-200/80 bg-white p-5 text-[14px] text-slate-600 shadow-[0_18px_36px_rgba(15,23,42,0.08)]"
                >
                  <span className="font-semibold text-slate-900">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1200px] px-6 pb-14 md:px-10">
        <div className="flex flex-col gap-4">
          <span className="text-[11px] uppercase tracking-[0.35em] text-primary">
            {details.sections.stackLabel}
          </span>
          <div className="flex flex-wrap items-center gap-6">
            {product.technologyStack.map((stack) => {
              const logoSrc = techStackLogos[stack];

              return (
                <div key={stack} className="flex flex-col items-center gap-2">
                  {logoSrc ? (
                    <Image
                      src={logoSrc}
                      alt={`${stack} logo`}
                      width={84}
                      height={48}
                      className="h-10 w-auto object-contain"
                    />
                  ) : null}
                  <span className="text-[11px] font-semibold text-slate-500">
                    {stack}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1200px] px-6 pb-16 md:px-10">
        <div className="rounded-[32px] bg-gradient-to-r from-primary/80 via-primaryLight/70 to-sky-500/70 p-[1px]">
          <div className="rounded-[32px] bg-[#0b1220] px-8 py-10 text-center text-white shadow-[0_24px_60px_rgba(15,23,42,0.4)] md:px-12 md:py-12">
            <span className="text-[11px] uppercase tracking-[0.35em] text-white/70">
              {t.productsPage.cta.label}
            </span>
            <h2 className="mt-3 text-[28px] font-semibold md:text-[36px] font-spaceGrotesk">
              {t.productsPage.cta.headline}
            </h2>
            <p className="mt-3 text-[15px] text-white/75 md:text-[17px]">
              {t.productsPage.cta.description}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button href="/contact" theme="gradient">
                {t.productsPage.cta.primaryCta}
              </Button>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-[15px] font-semibold text-white backdrop-blur transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/20"
              >
                {t.productsPage.cta.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {isDemoOpen && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-900/50 px-4 py-8"
          onClick={() => setIsDemoOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-[760px] rounded-[28px] border border-white/70 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.24)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-primary">
                  {details.label}
                </p>
                <h3 className="mt-2 text-[24px] font-semibold text-slate-900 font-spaceGrotesk">
                  {details.demoForm.title}
                </h3>
                <p className="mt-1 text-[14px] text-slate-600">
                  {details.demoForm.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsDemoOpen(false)}
                className="rounded-full border border-slate-200 p-2 text-slate-500 transition hover:text-slate-900"
                aria-label={details.demoForm.closeLabel}
              >
                <FiX className="text-[18px]" />
              </button>
            </div>

            <form
              className="mt-6 grid gap-4"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <TextInput
                  label={details.demoForm.fullNameLabel}
                  placeholder={details.demoForm.fullNamePlaceholder}
                  isRequired
                />
                <EmailInput
                  label={details.demoForm.emailLabel}
                  placeholder={details.demoForm.emailPlaceholder}
                  isRequired
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <TextInput
                  label={details.demoForm.phoneLabel}
                  placeholder={details.demoForm.phonePlaceholder}
                  isRequired
                />
                <TextInput
                  label={details.demoForm.companyLabel}
                  placeholder={details.demoForm.companyPlaceholder}
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1 pb-2">
                    <label className="text-[16px] font-bold text-text_bold">
                      {details.demoForm.serviceLabel}
                    </label>
                    <span className="text-[16px] font-bold text-red-500">
                      *
                    </span>
                  </div>
                  <select
                    className="h-[44px] rounded-[5px] bg-white px-4 text-text_primary drop-shadow-lg focus:outline-none"
                    value={selectedService}
                    onChange={(event) => setSelectedService(event.target.value)}
                    required
                  >
                    {(productsData.items as ProductItem[]).map((item) => (
                      <option key={item.slug} value={item.title}>
                        {item.title}
                      </option>
                    ))}
                  </select>
                </div>
                <TextInput
                  label={details.demoForm.websiteLabel}
                  placeholder={details.demoForm.websitePlaceholder}
                />
              </div>
              <TextArea
                label={details.demoForm.messageLabel}
                placeholder={details.demoForm.messagePlaceholder}
                height="140px"
              />
              <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsDemoOpen(false)}
                  className="rounded-full border border-slate-200 px-6 py-2 text-[14px] font-semibold text-slate-600 transition hover:text-slate-900"
                >
                  {details.demoForm.cancelLabel}
                </button>
                <Button theme="gradient" type="submit">
                  {details.demoForm.submitLabel}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPage;
