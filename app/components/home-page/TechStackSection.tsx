"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../../i18n/LanguageProvider";
import TitleText from "../typography/TitleText";
import { techGroupConfigs } from "@/app/constants/techGroup";

const TechStackSection = ({ className = "" }: { className?: string }) => {
  const { t } = useLanguage();
  const techGroups = techGroupConfigs.map((group) => ({
    id: group.id,
    label: t.techStack.groups[group.labelKey],
    logos: group.logos,
  }));
  const [activeGroupId, setActiveGroupId] = useState(
    () => techGroups[0]?.id ?? "frontend"
  );
  const activeGroup =
    techGroups.find((group) => group.id === activeGroupId) ?? techGroups[0];

  return (
    <section
      className={`relative mx-auto w-full max-w-[1200px] px-6 md:px-10 ${className}`}
    >
      <TitleText label={t.techStack.label} headline={t.techStack.headline} />
      <div className="mt-8">
        <div
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[15px] font-semibold text-[#334155]"
          role="tablist"
          aria-label={t.techStack.categoriesAriaLabel}
        >
          {techGroups.map((group) => {
            const isActive = activeGroup.id === group.id;

            return (
              <button
                key={group.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`tech-panel-${group.id}`}
                className={`relative px-2 pb-2 font-spaceGrotesk transition-colors after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:rounded-full after:transition-opacity after:content-[''] ${
                  isActive
                    ? "text-[#0ea5e9] after:bg-[#0ea5e9] after:opacity-100"
                    : "text-[#334155] hover:text-[#0b1220] after:bg-[#0ea5e9] after:opacity-0 hover:after:opacity-40"
                }`}
                onClick={() => setActiveGroupId(group.id)}
              >
                {group.label}
              </button>
            );
          })}
        </div>
        <div
          id={`tech-panel-${activeGroup.id}`}
          role="tabpanel"
          aria-label={`${activeGroup.label} ${t.techStack.panelLabel}`}
          className="mt-8 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6"
        >
          {activeGroup.logos.map((logo) => (
            <div
              key={logo.src}
              className="group relative flex items-center justify-center p-4"
            >
              <Image
                src={logo.src}
                alt={`${logo.name} ${t.techStack.logoAlt}`}
                width={80}
                height={60}
              />
              <span className="pointer-events-none absolute -bottom-4 left-1/2 w-max -translate-x-1/2 text-[11px] font-semibold text-[#0b1220] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
