import type { CSSProperties, ElementType } from "react";
import {
  FiBox,
  FiCompass,
  FiCpu,
  FiLayers,
  FiLink,
  FiPenTool,
  FiRefreshCw,
  FiUserCheck,
} from "react-icons/fi";
import Button from "../button/Button";

type ServiceCard = {
  title: string;
  description: string;
  icon: ElementType;
  accent: string;
  hoverGradient: string;
  badge?: string;
};

const services: ServiceCard[] = [
  {
    title: "Long-Term Technology Partnership",
    description:
      "Continuous evolution, AI scaling, and leadership across performance, security, and reliability.",
    icon: FiCompass,
    accent: "#8b1c2a",
    hoverGradient: "from-[#b12a3f] via-[#5f4fb2] to-[#1c7f9a]",
  },
  {
    title: "AI-Powered Business Solutions",
    description:
      "Generative AI, RAG with enterprise data, agentic workflows, and AI copilots.",
    icon: FiCpu,
    accent: "#a2431c",
    hoverGradient: "from-[#7a2e14] via-[#a13f17] to-[#c9722c]",
  },
  {
    title: "Custom Software & Platform Development",
    description:
      "Internal systems, enterprise platforms, customer apps, and API-driven architectures.",
    icon: FiLayers,
    accent: "#a21f4f",
    hoverGradient: "from-[#155e75] via-[#4338ca] to-[#7c3aed]",
  },
  {
    title: "AI Enablement & System Integration",
    description:
      "AI strategy, integration into existing systems, data pipelines, and compliance.",
    icon: FiLink,
    accent: "#0f5c52",
    hoverGradient: "from-[#0f766e] via-[#2563eb] to-[#c2410c]",
  },
  {
    title: "Business Process Automation & Optimization",
    description:
      "Workflow analysis, intelligent automation, AI routing, and monitoring systems.",
    icon: FiRefreshCw,
    accent: "#b5482a",
    hoverGradient: "from-[#b45309] via-[#be185d] to-[#1d4ed8]",
  },
  {
    title: "Internal AI Adoption & AI-First Transformation",
    description:
      "Internal AI tools, AI-assisted development, QA workflows, and enablement.",
    icon: FiUserCheck,
    accent: "#2f6b3c",
    hoverGradient: "from-[#15803d] via-[#0ea5e9] to-[#6d28d9]",
  },
  {
    title: "Ready-to-Deploy Products",
    description:
      "Pre-built AI tools, configurable platforms, and industry-specific solutions.",
    icon: FiBox,
    accent: "#b45309",
    hoverGradient: "from-[#92400e] via-[#be185d] to-[#1e3a8a]",
  },
  {
    title: "Product Design, Quality & Growth Services",
    description:
      "UI/UX design, QA & testing, plus Digital Growth & Product Marketing.",
    icon: FiPenTool,
    accent: "#9f1239",
    hoverGradient: "from-[#1e40af] via-[#9d174d] to-[#047857]",
  },
];

const marqueeServices = [...services, ...services];

const OfferingsSection = () => {
  return (
    <section className="relative w-full bg-[#f8f7fb]">
      <div className="relative mx-auto w-full max-w-[1200px] px-6 py-6 md:px-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="home-eyebrow mx-auto">What we deliver</span>
          <h2 className="home-title home-title-center text-[28px] font-semibold md:text-[36px] font-spaceGrotesk">
            Services we offer
          </h2>
          <p className="mx-auto max-w-[760px] text-[16px] text-[color:var(--home-ink-soft)] md:text-[18px]">
            Strategy-first services delivered through long-term partnership,
            AI-driven solutions, and scalable platform execution.
          </p>
        </div>
        <div className="home-services-mask mt-12 overflow-hidden">
          <div className="home-services-marquee flex w-max gap-6">
            {marqueeServices.map((service, index) => {
              const Icon = service.icon;
              const isDuplicate = index >= services.length;
              return (
                <div
                  key={`${service.title}-${index}`}
                  aria-hidden={isDuplicate}
                  style={{ "--service-accent": service.accent } as CSSProperties}
                  className={`group w-[260px] shrink-0 rounded-3xl border border-slate-200/80 bg-white p-7 text-left text-slate-900 transition duration-300 ease-out hover:-translate-y-1 hover:border-white/15 hover:bg-gradient-to-br hover:text-white md:w-[320px] ${service.hoverGradient}`}
                >
                  <div className="flex items-center justify-center align-center">
                    <Icon
                      className="text-[30px] text-[color:var(--service-accent)] transition-colors duration-300 group-hover:text-white"
                    />
                  </div>
                  <h3 className="mt-5 text-[18px] font-semibold font-spaceGrotesk transition-colors duration-300 group-hover:text-white md:text-[20px]">
                    {service.title}
                  </h3>
                  <p
                    className="mt-3 text-[14px] leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-white/85 md:text-[15px]"
                  >
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/services" theme="gradient">
            Explore all services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
