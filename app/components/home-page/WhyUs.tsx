"use client";
import CountUp from "react-countup";
import {
  FiCheckCircle,
  FiClock,
  FiCpu,
  FiLayers,
  FiRefreshCw,
  FiShield,
  FiUsers,
  FiZap,
} from "react-icons/fi";

const pillars = [
  {
    title: "AI-first execution",
    description:
      "Automation across design, engineering, and QA keeps delivery fast and accurate.",
    icon: FiCpu,
    accent: "from-primaryLight to-primary",
  },
  {
    title: "Scalable foundations",
    description:
      "Architected for governance, security, and performance as you grow.",
    icon: FiLayers,
    accent: "from-[#7c3aed] to-[#4c1d95]",
  },
  {
    title: "Quality governance",
    description:
      "Release hygiene, monitoring, and QA guardrails protect reliability.",
    icon: FiCheckCircle,
    accent: "from-[#a855f7] to-[#6b21a8]",
  },
  {
    title: "Continuous optimization",
    description:
      "We refine models, workflows, and UX to keep impact compounding.",
    icon: FiRefreshCw,
    accent: "from-[#8b5cf6] to-[#5b21b6]",
  },
];

const metrics = [
  {
    stat: 98,
    label: "On-time delivery",
    suffix: "%",
    icon: FiShield,
    accent: "from-primaryLight to-primary",
  },
  {
    stat: 24,
    label: "Response SLA",
    suffix: "h",
    icon: FiClock,
    accent: "from-[#7c3aed] to-[#5b21b6]",
  },
  {
    stat: 12,
    label: "Time to pilot",
    suffix: " weeks",
    icon: FiZap,
    accent: "from-[#a855f7] to-[#6b21a8]",
  },
  {
    stat: 6,
    label: "Delivery pods",
    suffix: "+",
    icon: FiUsers,
    accent: "from-[#8b5cf6] to-[#6d28d9]",
  },
];

const WhyUs = () => {
  return (
    <div className="mt-10 flex w-full flex-col gap-10">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {pillars.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="whyus-card whyus-reveal group flex h-full flex-col gap-4 rounded-2xl p-6"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div
                className={`whyus-icon bg-gradient-to-br ${item.accent} transition group-hover:-translate-y-1 group-hover:scale-110`}
              >
                <Icon className="text-2xl text-white" />
              </div>
              <h3 className="text-[18px] font-semibold text-[color:var(--home-ink)] font-spaceGrotesk">
                {item.title}
              </h3>
              <p className="text-[15px] text-slate-600">{item.description}</p>
            </div>
          );
        })}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="whyus-card whyus-reveal flex items-center gap-4 rounded-2xl p-5"
              style={{ animationDelay: `${0.2 + index * 0.08}s` }}
            >
              <div className={`whyus-icon bg-gradient-to-br ${item.accent}`}>
                <Icon className="text-xl text-white" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[22px] font-semibold text-[color:var(--home-ink)]">
                  <CountUp
                    end={item.stat}
                    duration={6}
                    suffix={item.suffix}
                  />
                </span>
                <span className="text-[12px] uppercase tracking-[0.18em] text-slate-500">
                  {item.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyUs;
