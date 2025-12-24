"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../../i18n/LanguageProvider";

type TechGroupConfig = {
  id: string;
  labelKey:
    | "frontend"
    | "backend"
    | "databases"
    | "cms"
    | "cloudTesting"
    | "devops";
  logos: { src: string; name: string }[];
};

const techGroupConfigs: TechGroupConfig[] = [
  {
    id: "frontend",
    labelKey: "frontend",
    logos: [
      { src: "/technologies/javascript.png", name: "JavaScript" },
      { src: "/technologies/react.png", name: "React" },
      { src: "/technologies/next.png", name: "Next.js" },
      { src: "/technologies/vue.png", name: "Vue" },
      { src: "/technologies/angular.png", name: "Angular" },
      { src: "/technologies/css.png", name: "CSS" },
      { src: "/technologies/tailwind.png", name: "Tailwind CSS" },
      { src: "/technologies/html.png", name: "HTML" },
      { src: "/technologies/rn.png", name: "React Native" },
      { src: "/technologies/flutter.png", name: "Flutter" },
      { src: "/technologies/android.png", name: "Android" },
      { src: "/technologies/dart.png", name: "Dart" },
    ],
  },
  {
    id: "backend",
    labelKey: "backend",
    logos: [
      { src: "/technologies/java.png", name: "Java" },
      { src: "/technologies/python.png", name: "Python" },
      { src: "/technologies/node.png", name: "Node.js" },
      { src: "/technologies/django.png", name: "Django" },
      { src: "/technologies/fast.png", name: "FastAPI" },
      { src: "/technologies/spring.png", name: "Spring" },
      { src: "/technologies/trpc.png", name: "tRPC" },
      { src: "/technologies/jwt.png", name: "JWT" },
      { src: "/technologies/stripe.png", name: "Stripe" },
      { src: "/technologies/langChain.png", name: "LangChain" },
      { src: "/technologies/openAI.png", name: "OpenAI" },
    ],
  },
  {
    id: "databases",
    labelKey: "databases",
    logos: [
      { src: "/technologies/mysql.png", name: "MySQL" },
      { src: "/technologies/pg.png", name: "PostgreSQL" },
      { src: "/technologies/sql.png", name: "SQL" },
      { src: "/technologies/prisma.png", name: "Prisma" },
      { src: "/technologies/redis.png", name: "Redis" },
      { src: "/technologies/vector_db.svg", name: "Vector DB" },
    ],
  },
  {
    id: "cms",
    labelKey: "cms",
    logos: [
      { src: "/technologies/wp.png", name: "WordPress" },
      { src: "/technologies/joomla.png", name: "Joomla" },
    ],
  },
  {
    id: "cloud-testing",
    labelKey: "cloudTesting",
    logos: [
      { src: "/technologies/cy.png", name: "Cypress" },
      { src: "/technologies/se.png", name: "Selenium" },
    ],
  },
  {
    id: "devops",
    labelKey: "devops",
    logos: [
      { src: "/technologies/aws.png", name: "AWS" },
      { src: "/technologies/Docker.png", name: "Docker" },
      { src: "/technologies/firebase.png", name: "Firebase" },
      { src: "/technologies/vercel.png", name: "Vercel" },
      { src: "/technologies/hn.png", name: "Honeycomb" },
      { src: "/technologies/google_analytics.png", name: "Google Analytics" },
    ],
  },
];

const TechStackSection = () => {
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
    <section className="relative mx-auto w-full max-w-[1200px] px-6 pb-14 md:px-10">
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="mx-auto inline-flex w-fit uppercase tracking-[0.2em] text-[12px] text-[#0ea5e9]">
          {t.techStack.label}
        </span>
        <h2 className="relative inline-block bg-[linear-gradient(120deg,#7a2fb5_0%,#370054_60%,#5b21b6_100%)] bg-clip-text text-[28px] font-semibold text-transparent drop-shadow-[0_10px_22px_#3700542e] after:absolute after:left-1/2 after:bottom-[-10px] after:h-[4px] after:w-[52%] after:-translate-x-1/2 after:rounded-full after:bg-[linear-gradient(90deg,#0ea5e9,#22c55e)] after:opacity-75 after:content-[''] md:text-[36px] font-spaceGrotesk">
          {t.techStack.headline}
        </h2>
      </div>
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
