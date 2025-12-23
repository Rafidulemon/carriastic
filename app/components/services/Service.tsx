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

type Service = {
  title: string;
  badge?: string;
  description?: string;
  icon: React.ReactNode;
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

type Tier = {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  items: Service[];
};

const tiers: Tier[] = [
  {
    id: "tier-1",
    label: "Tier 1",
    title: "Core Strategic Services",
    subtitle: "Front & Center",
    description: "These define who we are and how we lead engagements.",
    items: [
      {
        title: "Long-Term Technology Partnership",
        badge: "Primary Differentiator",
        description:
          "We operate as an extension of your technology team, not a one-time vendor.",
        icon: <FiCompass />,
        points: [
          "Continuous system evolution",
          "AI optimization & scaling",
          "Technical leadership & architecture",
          "Performance, security & reliability",
          "Strategic technology guidance",
        ],
      },
      {
        title: "AI-Powered Business Solutions",
        badge: "Flagship Offering",
        icon: <FiCpu />,
        points: [
          "Generative AI applications",
          "RAG systems with enterprise data",
          "Agentic AI & autonomous workflows",
          "AI copilots & assistants",
        ],
        highlight: {
          label: "Outcome",
          text: "Smarter operations, better decisions, faster execution.",
        },
      },
      {
        title: "Custom Software & Platform Development",
        icon: <FiLayers />,
        points: [
          "Internal management systems",
          "Enterprise platforms",
          "Customer-facing applications",
          "Scalable, API-driven architectures",
        ],
        highlight: {
          label: "Key message",
          text: "Built to scale, adapt, and evolve with your business.",
        },
      },
      {
        title: "AI Enablement & System Integration",
        icon: <FiLink />,
        points: [
          "AI strategy & architecture",
          "AI integration into existing systems",
          "Data pipelines & infrastructure",
          "Governance, security & compliance",
        ],
      },
    ],
  },
  {
    id: "tier-2",
    label: "Tier 2",
    title: "Operational & Optimization Services",
    subtitle: "Support the Core",
    description: "These strengthen delivery and keep momentum compounding.",
    items: [
      {
        title: "Business Process Automation & Optimization",
        icon: <FiSettings />,
        points: [
          "Workflow analysis",
          "Intelligent automation",
          "AI-driven approvals & routing",
          "Reporting & monitoring systems",
        ],
      },
      {
        title: "Internal AI Adoption & AI-First Transformation",
        icon: <FiUserCheck />,
        points: [
          "Internal AI tools & copilots",
          "AI-assisted development workflows",
          "AI in QA, documentation & ops",
          "Change enablement & training support",
        ],
      },
      {
        title: "Ready-to-Deploy Products",
        badge: "Products",
        icon: <FiBox />,
        points: [
          "Pre-built AI tools",
          "Configurable platforms",
          "Industry-specific solutions",
        ],
        highlight: {
          label: "Positioning",
          text: "Optional and secondary to our core service delivery.",
        },
      },
    ],
  },
  {
    id: "tier-3",
    label: "Tier 3",
    title: "Specialized Delivery Services",
    subtitle: "Grouped, Not Isolated",
    description: "One integrated category for product craft and growth.",
    items: [
      {
        title: "Product Design, Quality & Growth Services",
        icon: <FiPenTool />,
        points: [],
        sections: [
          {
            title: "UI/UX Design",
            points: [
              "User research & flows",
              "Interface design for web & mobile",
              "Design systems",
              "UX optimization for AI products",
            ],
          },
          {
            title: "Quality Assurance & Testing",
            points: [
              "Manual & automated testing",
              "AI-assisted QA",
              "Performance & security testing",
              "Reliability & regression testing",
            ],
          },
          {
            title: "Digital Growth & Product Marketing",
            points: [
              "Product positioning & messaging",
              "Landing pages for AI products",
              "Conversion optimization",
              "Analytics & performance tracking",
            ],
          },
        ],
      },
    ],
  },
];

const Services = () => {
  return (
    <section className="w-full bg-[#f7f6fb] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <div className="mx-auto max-w-[760px] text-center">
          <span className="text-[12px] uppercase tracking-[0.3em] text-primary">
            Service Structure for Carriastic
          </span>
          <h2 className="mt-4 text-[28px] font-semibold text-slate-900 md:text-[40px] font-spaceGrotesk">
            Strategy-first services organized by tier
          </h2>
          <p className="mt-4 text-[16px] text-slate-600 md:text-[18px]">
            We lead with long-term partnership, AI-driven solutions, and scalable
            platforms, then reinforce delivery with operational and specialized
            services.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-10">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className="rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] md:p-10"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <span className="text-[12px] uppercase tracking-[0.26em] text-primary">
                    {tier.label}
                  </span>
                  <h3 className="mt-2 text-[22px] font-semibold text-slate-900 md:text-[28px] font-spaceGrotesk">
                    {tier.title}
                  </h3>
                  <p className="mt-2 text-[14px] text-slate-500">
                    {tier.subtitle} - {tier.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-slate-500">
                  <FiActivity className="text-primary" />
                  {tier.items.length} focus areas
                </div>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {tier.items.map((service) => (
                  <div
                    key={service.title}
                    className={`flex h-full flex-col gap-4 rounded-2xl border p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] ${
                      service.badge
                        ? "border-primary/40 bg-white"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-white text-primary shadow-[0_10px_24px_rgba(55,0,84,0.12)]">
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
                                <li key={point} className="flex items-start gap-2">
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
                      <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-[13px] text-primary">
                        <span className="font-semibold uppercase tracking-[0.16em]">
                          {service.highlight.label}:
                        </span>{" "}
                        {service.highlight.text}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
