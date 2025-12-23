"use client";

import type { ElementType } from "react";
import {
  FiActivity,
  FiCheckCircle,
  FiCode,
  FiLock,
  FiShield,
} from "react-icons/fi";
import { IoIosRocket } from "react-icons/io";
import { useLanguage } from "../../i18n/LanguageProvider";

type ApproachCard = {
  title: string;
  description: string;
  icon: ElementType;
  iconBg: string;
};

type ApproachStyle = Omit<ApproachCard, "title" | "description">;

const approachStyles: ApproachStyle[] = [
  {
    icon: IoIosRocket,
    iconBg: "from-[#0f172a] to-[#1f2937]",
  },
  {
    icon: FiCode,
    iconBg: "from-[#38bdf8] to-[#2563eb]",
  },
  {
    icon: FiActivity,
    iconBg: "from-[#fb7185] to-[#ec4899]",
  },
  {
    icon: FiShield,
    iconBg: "from-[#34d399] to-[#10b981]",
  },
  {
    icon: FiCheckCircle,
    iconBg: "from-[#facc15] to-[#fb923c]",
  },
  {
    icon: FiLock,
    iconBg: "from-[#a855f7] to-[#7c3aed]",
  },
];

const DesignApproachSection = () => {
  const { t } = useLanguage();
  const approachCards: ApproachCard[] = t.designApproach.cards.map(
    (card, index) => {
      const style = approachStyles[index]!;
      return {
        title: card.title,
        description: card.description,
        icon: style.icon,
        iconBg: style.iconBg,
      };
    }
  );

  return (
    <section className="relative w-full bg-[#f8f7fb]">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-12 md:px-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="mx-auto inline-flex w-fit uppercase tracking-[0.2em] text-[12px] text-[#0ea5e9]">
            {t.designApproach.label}
          </span>
          <h2 className="relative inline-block bg-[linear-gradient(120deg,#7a2fb5_0%,#370054_60%,#5b21b6_100%)] bg-clip-text text-[28px] font-semibold text-transparent drop-shadow-[0_10px_22px_#3700542e] after:absolute after:left-1/2 after:bottom-[-10px] after:h-[4px] after:w-[52%] after:-translate-x-1/2 after:rounded-full after:bg-[linear-gradient(90deg,#0ea5e9,#22c55e)] after:opacity-75 after:content-[''] md:text-[36px] font-spaceGrotesk">
            {t.designApproach.headline}
          </h2>
        </div>

        <div className="flex flex-col items-center gap-4 text-center"></div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {approachCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="flex gap-4 rounded-[18px] border border-[#e2e8f0cc] bg-[#ffffff] p-6 shadow-[0_18px_45px_#0f172a14]"
              >
                <div
                  className={`flex h-12 px-3 w-12 items-center justify-center rounded-full bg-gradient-to-br ${card.iconBg} text-[#ffffff] shadow-[0_12px_25px_#0f172a2e]`}
                >
                  <Icon className="text-[22px]" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[16px] font-semibold text-[#0b1220] font-spaceGrotesk md:text-[18px]">
                    {card.title}
                  </span>
                  <p className="text-[14px] text-[#334155] md:text-[15px]">
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
