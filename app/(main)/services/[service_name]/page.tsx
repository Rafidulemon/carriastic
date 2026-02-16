"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Lottie from "lottie-react";
import { FiCheckCircle } from "react-icons/fi";
import Button from "@/app/components/button/Button";
import Header from "@/app/components/navigations/Header";
import { useLanguage } from "@/app/i18n/LanguageProvider";
import servicesEn from "@/public/locales/en/services.json";
import servicesBn from "@/public/locales/bn/services.json";
import { serviceSlugs, serviceStyles } from "@/app/constants/services";
import HeroBreadcrumb from "@/app/components/navigations/HeroBreadcrumb";

const blurDataUrl =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMB/6XKZQAAAABJRU5ErkJggg==";

type ServiceItem = {
  slug: string;
  title: string;
  tag: string;
  summary: string;
  description: string;
  highlights: string[];
  outcomes: string[];
  capabilities: string[];
  deliverables: string[];
  stack: string[];
};

type ServiceMedia = {
  imageSrc: string;
  animationSrc?: string;
};

const serviceMediaMap: Record<string, ServiceMedia> = {
  "custom-software-platform-development": {
    imageSrc: "/services/custom/custom_web_dev.jpg",
    animationSrc: "/services/custom/custom_web_dev.json",
  },
  "ai-powered-software-solutions": {
    imageSrc: "/services/aISoft/ai_first.jpg",
    animationSrc: "/services/aISoft/ai_first.json",
  },
  "healthcare-medical-management-solutions": {
    imageSrc: "/services/medical/medical.jpg",
    animationSrc: "/services/medical/medical.json",
  },
  "enterprise-institutional-solutions": {
    imageSrc: "/services/enterprise/enterprise.jpg",
    animationSrc: "/services/enterprise/enterprise.json",
  },
  "ready-to-deploy-software-products": {
    imageSrc: "/services/service.gif",
  },
  "ai-strategy-technology-consulting": {
    imageSrc: "/services/aiConsult/aiConsult.jpg",
    animationSrc: "/services/aiConsult/aiConsult.json",
  },
  "maintenance-support-technology-lifecycle": {
    imageSrc: "/services/Support/support.jpg",
    animationSrc: "/services/Support/support.json",
  },
};

const ServiceDetails = () => {
  const { t, locale } = useLanguage();
  const details = t.servicesPage.details;
  const { service_name } = useParams();
  const slugValue = Array.isArray(service_name)
    ? service_name[0]
    : service_name;
  const servicesData = locale === "bn" ? servicesBn : servicesEn;
  const service = (servicesData.items as ServiceItem[]).find(
    (item) => item.slug === slugValue
  );
  const media = slugValue ? serviceMediaMap[slugValue] : undefined;
  const [serviceAnimation, setServiceAnimation] = useState<Record<
    string,
    unknown
  > | null>(null);
  const animationSrc = media?.animationSrc;

  useEffect(() => {
    let isMounted = true;
    setServiceAnimation(null);

    if (!animationSrc) {
      return () => {
        isMounted = false;
      };
    }

    fetch(animationSrc)
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setServiceAnimation(data);
        }
      })
      .catch(() => {
        if (isMounted) {
          setServiceAnimation(null);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [animationSrc]);

  if (!service) {
    return (
      <section className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center gap-6 px-6 py-10 text-center md:py-16 md:px-10">
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
          href="/services"
          className="inline-flex items-center justify-center rounded-full border border-primary/25 bg-white px-6 py-3 text-[15px] font-semibold text-primary shadow-[0_12px_24px_rgba(55,0,84,0.12)] transition duration-200 ease-out hover:-translate-y-0.5"
        >
          {details.notFound.cta}
        </Link>
      </section>
    );
  }

  const serviceIndex = serviceSlugs.indexOf(service.slug);
  const style = serviceStyles[serviceIndex] ?? serviceStyles[0];
  const AccentIcon = style.icon;

  return (
    <div className="w-full bg-white">
      <section
        id="service-hero"
        className="home-hero relative flex min-h-[100svh] flex-col overflow-hidden -mt-12 sm:-mt-16 md:-mt-20 md:min-h-screen"
      >
        <div className="absolute inset-0">
          <div className="absolute -right-24 -top-32 h-72 w-72 rounded-full bg-primary blur-3xl opacity-80" />
          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-primary blur-3xl opacity-70" />
          <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,_transparent_1px),linear-gradient(90deg,_rgba(255,255,255,0.06)_1px,_transparent_1px)] bg-[size:28px_28px]" />
        </div>
        {serviceAnimation && (
          <div className="pointer-events-none absolute flex flex-col items-center justify-center inset-0 opacity-15">
            <Lottie
              animationData={serviceAnimation}
              loop
              autoplay
              className="h-[50%] w-[50%]"
              aria-label={service.title}
            />
          </div>
        )}

        <Header isDark />

        <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-6 py-10 md:px-10 md:py-16">
          <HeroBreadcrumb
            className="w-fit"
            items={[
              { label: details.home, href: "/" },
              { label: details.services, href: "/services" },
              { label: service.tag },
            ]}
          />

          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col gap-5 text-center lg:text-left">
              <h1 className="text-[30px] font-semibold leading-[1.1] text-white md:text-[60px] font-spaceGrotesk">
                {service.title}
              </h1>
              <p className="text-[16px] text-slate-200">
                {service.summary}
              </p>
              <p className="text-[16px] text-slate-300">
                {service.description}
              </p>
              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                {service.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/75"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                <Button href="/contact" theme="gradient">
                  {details.primaryCta}
                </Button>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-[15px] font-semibold text-white backdrop-blur transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/20"
                >
                  {details.secondaryCta}
                </Link>
              </div>
            </div>

            <div
              className={`relative overflow-hidden rounded-[28px] p-6 text-white shadow-[0_28px_60px_rgba(5,0,12,0.45)] ${style.cardClass}`}
            >
              <span
                className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-40 blur-3xl ${style.glowClass}`}
                aria-hidden="true"
              />
              <span
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]"
                aria-hidden="true"
              />
              <div className="relative z-10 flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-white/80">
                    {details.sections.outcomesLabel}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white">
                    <AccentIcon className="text-[22px]" />
                  </span>
                </div>
                <div className="grid gap-3">
                  {service.outcomes.map((outcome) => (
                    <div
                      key={outcome}
                      className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-[14px] text-white/90"
                    >
                      <FiCheckCircle className="mt-0.5 text-white/70" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                  <span className="text-[10px] uppercase tracking-[0.35em] text-white/70">
                    {details.sections.stackLabel}
                  </span>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {service.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1200px] px-6 py-12 md:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <span className="text-[12px] uppercase tracking-[0.35em] text-primary">
              {details.sections.capabilitiesLabel}
            </span>
            <h2 className="text-[28px] font-semibold text-slate-900 md:text-[34px] font-spaceGrotesk">
              {service.title}
            </h2>
            <div className="grid gap-3">
              {service.capabilities.map((capability) => (
                <div
                  key={capability}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-[14px] text-slate-600 shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                  <span>{capability}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[12px] uppercase tracking-[0.35em] text-primary">
              {details.sections.deliverablesLabel}
            </span>
            <div className="grid gap-3">
              {service.deliverables.map((deliverable) => (
                <div
                  key={deliverable}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white px-4 py-4 text-[14px] text-slate-600 shadow-[0_18px_36px_rgba(15,23,42,0.08)]"
                >
                  <FiCheckCircle className="mt-0.5 text-primary" />
                  <span>{deliverable}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {media?.imageSrc && (
        <section className="relative mx-auto w-full max-w-[1200px] px-6 pt-6 md:px-10">
          <div className="relative overflow-hidden">
            
            <div className="relative z-10 mx-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-[22px] md:max-w-[400px]">
              <Image
                src={media.imageSrc}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 460px"
                placeholder="blur"
                blurDataURL={blurDataUrl}
              />
            </div>
          </div>
        </section>
      )}

      <section className="relative mx-auto w-full max-w-[1200px] px-6 pt-6 pb-16 md:px-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-[12px] uppercase tracking-[0.35em] text-primary">
            {details.sections.processLabel}
          </span>
          <h2 className="text-[28px] font-semibold text-slate-900 md:text-[34px] font-spaceGrotesk">
            {details.sections.processLabel}
          </h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {details.processSteps.map((step, index) => (
            <div
              key={step.title}
              className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_18px_36px_rgba(15,23,42,0.08)]"
            >
              <span className="text-[12px] font-semibold uppercase tracking-[0.3em] text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[18px] font-semibold text-slate-900 font-spaceGrotesk">
                {step.title}
              </h3>
              <p className="text-[14px] text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1200px] px-6 pb-16 md:px-10">
        <div className="rounded-[32px] bg-gradient-to-r from-primary/80 via-primaryLight/70 to-sky-500/70 p-[1px]">
          <div className="rounded-[32px] bg-[#0b1220] px-8 py-10 text-center text-white shadow-[0_24px_60px_rgba(15,23,42,0.4)] md:px-12 md:py-12">
            <span className="text-[11px] uppercase tracking-[0.35em] text-white/70">
              {details.cta.label}
            </span>
            <h2 className="mt-3 text-[28px] font-semibold md:text-[36px] font-spaceGrotesk">
              {details.cta.headline}
            </h2>
            <p className="mt-3 text-[15px] text-white/75 md:text-[17px]">
              {details.cta.description}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button href="/contact" theme="gradient">
                {details.cta.primary}
              </Button>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-[15px] font-semibold text-white backdrop-blur transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/20"
              >
                {details.cta.secondary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
