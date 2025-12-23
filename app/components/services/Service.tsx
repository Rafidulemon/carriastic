"use client";

import {
  FiActivity,
  FiBox,
  FiCompass,
  FiCpu,
  FiLayers,
  FiLink,
  FiPenTool,
  FiSettings,
  FiUserCheck,
} from "react-icons/fi";
import { useLanguage } from "../../i18n/LanguageProvider";

type ServiceCopy = {
  id: string;
  title: string;
  badge?: string;
  description?: string;
  points: string[];
  highlight?: {
    label: string;
    text: string;
  };
  sections?: {
    title: string;
    points: string[];
  }[];
};

type TierCopy = {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  items: ServiceCopy[];
};

type Service = ServiceCopy & {
  icon: React.ReactNode;
  iconAccent: string;
  iconTone: string;
  iconShadow: string;
};

type DecoratedTier = Omit<TierCopy, "items"> & {
  accent: string;
  cardAccent: string;
  iconAccent: string;
  items: Service[];
};

const serviceIcons: Record<string, React.ReactNode> = {
  "long-term-partnership": <FiCompass />,
  "ai-business-solutions": <FiCpu />,
  "custom-software-platforms": <FiLayers />,
  "ai-enablement-integration": <FiLink />,
  "business-process-automation": <FiSettings />,
  "internal-ai-adoption": <FiUserCheck />,
  "ready-to-deploy-products": <FiBox />,
  "product-design-growth": <FiPenTool />,
};

type IconStyle = {
  accent: string;
  tone: string;
  shadow: string;
};

const defaultIconStyle: IconStyle = {
  accent: "from-primary/15 via-white to-primary/10",
  tone: "text-primary",
  shadow: "shadow-[0_12px_30px_rgba(55,0,84,0.18)]",
};

const serviceIconStyles: Record<string, IconStyle> = {
  "long-term-partnership": {
    accent: "from-primary/20 via-[#a78bfa]/20 to-[#38bdf8]/45",
    tone: "text-primary",
    shadow: "shadow-[0_14px_32px_rgba(56,189,248,0.28)]",
  },
  "ai-business-solutions": {
    accent: "from-primary/20 via-[#7c3aed]/25 to-[#22d3ee]/40",
    tone: "text-primary",
    shadow: "shadow-[0_14px_32px_rgba(124,58,237,0.25)]",
  },
  "custom-software-platforms": {
    accent: "from-primary/15 via-[#38bdf8]/25 to-[#34d399]/45",
    tone: "text-primary",
    shadow: "shadow-[0_14px_32px_rgba(52,211,153,0.25)]",
  },
  "ai-enablement-integration": {
    accent: "from-primary/20 via-[#22d3ee]/25 to-[#0ea5e9]/40",
    tone: "text-primary",
    shadow: "shadow-[0_14px_32px_rgba(34,211,238,0.28)]",
  },
  "business-process-automation": {
    accent: "from-primary/10 via-[#34d399]/30 to-[#22c55e]/40",
    tone: "text-primary",
    shadow: "shadow-[0_14px_32px_rgba(34,197,94,0.25)]",
  },
  "internal-ai-adoption": {
    accent: "from-primary/15 via-[#facc15]/35 to-[#f97316]/40",
    tone: "text-primary",
    shadow: "shadow-[0_14px_32px_rgba(250,204,21,0.24)]",
  },
  "ready-to-deploy-products": {
    accent: "from-primary/20 via-[#f472b6]/35 to-[#fb7185]/40",
    tone: "text-primary",
    shadow: "shadow-[0_14px_32px_rgba(244,114,182,0.25)]",
  },
  "product-design-growth": {
    accent: "from-primary/15 via-[#f59e0b]/35 to-[#fb7185]/35",
    tone: "text-primary",
    shadow: "shadow-[0_14px_32px_rgba(245,158,11,0.24)]",
  },
};

const tierAccents: Record<string, string> = {
  "tier-1": "from-[#ede9fe] via-[#f8fafc] to-[#e0f2fe]",
  "tier-2": "from-[#dcfce7] via-[#f8fafc] to-[#ccfbf1]",
  "tier-3": "from-[#fef3c7] via-[#f8fafc] to-[#ffe4e6]",
};

const tierCardAccents: Record<string, string> = {
  "tier-1": "from-primary/12 via-white to-[#c7d2fe]/40",
  "tier-2": "from-[#22c55e]/12 via-white to-[#99f6e4]/35",
  "tier-3": "from-[#f59e0b]/12 via-white to-[#fecdd3]/40",
};

const tierIconAccents: Record<string, string> = {
  "tier-1": "from-primary/15 via-white to-[#dbeafe]",
  "tier-2": "from-[#22c55e]/20 via-white to-[#a7f3d0]",
  "tier-3": "from-[#f59e0b]/20 via-white to-[#fecaca]",
};

const Services = () => {
  const { t } = useLanguage();
  const { serviceOverview, tiers, focusAreasLabel } = t.servicesPage;

  const decoratedTiers: DecoratedTier[] = tiers.map((tier) => ({
    ...tier,
    accent: tierAccents[tier.id] ?? tierAccents["tier-1"],
    cardAccent: tierCardAccents[tier.id] ?? tierCardAccents["tier-1"],
    iconAccent: tierIconAccents[tier.id] ?? tierIconAccents["tier-1"],
    items: tier.items.map((service) => {
      const iconStyle = serviceIconStyles[service.id] ?? defaultIconStyle;

      return {
        ...service,
        icon: serviceIcons[service.id] ?? <FiActivity />,
        iconAccent: iconStyle.accent,
        iconTone: iconStyle.tone,
        iconShadow: iconStyle.shadow,
      };
    }),
  }));

  return (
    <section className="relative w-full bg-[radial-gradient(80%_60%_at_50%_0%,#f5e9ff_0%,#f8f7ff_45%,#ffffff_100%)] py-16 md:py-20">
      <div className="pointer-events-none absolute -left-10 top-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
      <div className="relative mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <div className="mx-auto max-w-[760px] text-center">
          <span className="text-[12px] uppercase tracking-[0.3em] text-primary">
            {serviceOverview.label}
          </span>
          <h2 className="mt-4 text-[28px] font-semibold text-slate-900 md:text-[40px] font-spaceGrotesk">
            {serviceOverview.headline}
          </h2>
          <p className="mt-4 text-[16px] text-slate-600 md:text-[18px]">
            {serviceOverview.description}
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-10">
          {decoratedTiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-[30px] bg-gradient-to-br ${tier.accent} p-[1px]`}
            >
              <div className="rounded-[30px] border border-white/70 bg-white/90 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur md:p-10">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <span className="text-[12px] uppercase tracking-[0.26em] text-primary">
                      {tier.label}
                    </span>
                    <h3 className="mt-2 text-[22px] font-semibold text-slate-900 md:text-[28px] font-spaceGrotesk">
                      {tier.title}
                    </h3>
                    <p className="mt-2 text-[14px] text-slate-500">
                      <span className="font-medium text-slate-700">
                        {tier.subtitle}
                      </span>{" "}
                      <span className="text-slate-400">•</span>{" "}
                      {tier.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-slate-500">
                    <FiActivity className="text-primary" />
                    {tier.items.length} {focusAreasLabel}
                  </div>
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {tier.items.map((service) => (
                    <div
                      key={service.id}
                      className={`group flex h-full flex-col rounded-2xl bg-gradient-to-br ${tier.cardAccent} p-[1px] transition duration-300 ease-out hover:-translate-y-1`}
                    >
                      <div className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white/95 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                        <div className="flex items-start gap-4">
                          <div
                            className={`flex h-12 w-12 px-3 items-center justify-center rounded-full border border-primary/20 bg-gradient-to-br ${service.iconAccent} ${service.iconTone} ring-1 ring-white/70 ${service.iconShadow} transition duration-300 group-hover:scale-105 group-hover:text-primaryLight`}
                          >
                            <span className="text-xl">{service.icon}</span>
                          </div>
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h4 className="text-[18px] font-semibold text-slate-900 font-spaceGrotesk">
                                {service.title}
                              </h4>
                              {service.badge && (
                                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-primary">
                                  {service.badge}
                                </span>
                              )}
                            </div>
                            {service.description && (
                              <p className="mt-2 text-[14px] text-slate-600">
                                {service.description}
                              </p>
                            )}
                          </div>
                        </div>

                        {service.points.length > 0 && (
                          <ul className="flex flex-col gap-2 text-[14px] text-slate-600">
                            {service.points.map((point) => (
                              <li key={point} className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {service.sections && (
                          <div className="flex flex-col gap-4">
                            {service.sections.map((section) => (
                              <div key={section.title}>
                                <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                                  {section.title}
                                </p>
                                <ul className="mt-2 flex flex-col gap-2 text-[14px] text-slate-600">
                                  {section.points.map((point) => (
                                    <li
                                      key={point}
                                      className="flex items-start gap-2"
                                    >
                                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                                      <span>{point}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}

                        {service.highlight && (
                          <div className="rounded-xl border border-primary/20 bg-gradient-to-r from-primary/10 via-white to-primary/5 p-4 text-[13px] text-primary">
                            <span className="font-semibold uppercase tracking-[0.16em]">
                              {service.highlight.label}:
                            </span>{" "}
                            {service.highlight.text}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
