import type { ElementType } from "react";
import {
  FiActivity,
  FiCheckCircle,
  FiCode,
  FiLock,
  FiShield,
} from "react-icons/fi";
import { IoIosRocket } from "react-icons/io";

type ApproachCard = {
  title: string;
  description: string;
  icon: ElementType;
  iconBg: string;
};

const approachCards: ApproachCard[] = [
  {
    title: "UX Driven Engineering",
    description:
      "Design leads delivery, ensuring UX research and UI systems translate directly into build decisions.",
    icon: IoIosRocket,
    iconBg: "from-[#0f172a] to-[#1f2937]",
  },
  {
    title: "Developing Shared Understanding",
    description:
      "We align stakeholders early with clear scope, workflows, and success metrics for confident execution.",
    icon: FiCode,
    iconBg: "from-[#38bdf8] to-[#2563eb]",
  },
  {
    title: "Proven Experience and Expertise",
    description:
      "Seasoned product, design, and engineering leaders guide each phase with predictable quality.",
    icon: FiActivity,
    iconBg: "from-[#fb7185] to-[#ec4899]",
  },
  {
    title: "Security & Intellectual Property (IP)",
    description:
      "Secure-by-default architecture, NDA/IP protection, and compliance practices are embedded from day one.",
    icon: FiShield,
    iconBg: "from-[#34d399] to-[#10b981]",
  },
  {
    title: "Code Reviews",
    description:
      "Peer reviews, standards, and automated checks keep code consistent, safe, and maintainable.",
    icon: FiCheckCircle,
    iconBg: "from-[#facc15] to-[#fb923c]",
  },
  {
    title: "Quality Assurance & Testing",
    description:
      "Manual and automated testing cover regression, performance, and launch readiness.",
    icon: FiLock,
    iconBg: "from-[#a855f7] to-[#7c3aed]",
  },
];

const DesignApproachSection = () => {
  return (
    <section className="relative w-full bg-[#f8f7fb]">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-12 md:px-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="home-eyebrow mx-auto">How we work</span>
          <h2 className="home-title home-title-center text-[28px] font-semibold md:text-[36px] font-spaceGrotesk">
            Our design and development approach
          </h2>
        </div>

        <div className="flex flex-col items-center gap-4 text-center"></div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {approachCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="flex gap-4 rounded-[18px] border border-slate-200/80 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
              >
                <div
                  className={`flex h-12 px-3 w-12 items-center justify-center rounded-full bg-gradient-to-br ${card.iconBg} text-white shadow-[0_12px_25px_rgba(15,23,42,0.18)]`}
                >
                  <Icon className="text-[22px]" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[16px] font-semibold text-[color:var(--home-ink)] font-spaceGrotesk md:text-[18px]">
                    {card.title}
                  </span>
                  <p className="text-[14px] text-[color:var(--home-ink-soft)] md:text-[15px]">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DesignApproachSection;
