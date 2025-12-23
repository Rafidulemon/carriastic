"use client";

import { useState } from "react";
import Image from "next/image";

const techGroups = [
  {
    id: "frontend",
    label: "Frontend",
    logos: [
      { src: "/technologies/javascript.png", name: "JavaScript" },
      { src: "/technologies/react.png", name: "React" },
      { src: "/technologies/next.png", name: "Next.js" },
      { src: "/technologies/vue.png", name: "Vue" },
      { src: "/technologies/angular.png", name: "Angular" },
      { src: "/technologies/css.png", name: "CSS" },
      { src: "/technologies/html.png", name: "HTML" },
      { src: "/technologies/rn.png", name: "React Native" },
      { src: "/technologies/flutter.png", name: "Flutter" },
      { src: "/technologies/android.png", name: "Android" },
      { src: "/technologies/dart.png", name: "Dart" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    logos: [
      { src: "/technologies/java.png", name: "Java" },
      { src: "/technologies/python.png", name: "Python" },
      { src: "/technologies/node.png", name: "Node.js" },
      { src: "/technologies/django.png", name: "Django" },
      { src: "/technologies/fast.png", name: "FastAPI" },
      { src: "/technologies/spring.png", name: "Spring" },
      { src: "/technologies/trpc.png", name: "tRPC" },
      { src: "/technologies/jwt.png", name: "JWT" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    logos: [
      { src: "/technologies/mysql.png", name: "MySQL" },
      { src: "/technologies/pg.png", name: "PostgreSQL" },
      { src: "/technologies/sql.png", name: "SQL" },
      { src: "/technologies/prisma.png", name: "Prisma" },
    ],
  },
  {
    id: "cms",
    label: "CMS",
    logos: [
      { src: "/technologies/wp.png", name: "WordPress" },
      { src: "/technologies/joomla.png", name: "Joomla" },
    ],
  },
  {
    id: "cloud-testing",
    label: "CloudTesting",
    logos: [
      { src: "/technologies/cy.png", name: "Cypress" },
      { src: "/technologies/se.png", name: "Selenium" },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    logos: [
      { src: "/technologies/aws.png", name: "AWS" },
      { src: "/technologies/firebase.png", name: "Firebase" },
      { src: "/technologies/hn.png", name: "Honeycomb" },
    ],
  },
];

const TechStackSection = () => {
  const [activeGroup, setActiveGroup] = useState(techGroups[0]);

  return (
    <section className="relative mx-auto w-full max-w-[1200px] px-6 pb-14 md:px-10">
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="mx-auto inline-flex w-fit uppercase tracking-[0.2em] text-[12px] text-[#0ea5e9]">
          Technology stack
        </span>
        <h2 className="relative inline-block bg-[linear-gradient(120deg,#7a2fb5_0%,#370054_60%,#5b21b6_100%)] bg-clip-text text-[28px] font-semibold text-transparent drop-shadow-[0_10px_22px_#3700542e] after:absolute after:left-1/2 after:bottom-[-10px] after:h-[4px] after:w-[52%] after:-translate-x-1/2 after:rounded-full after:bg-[linear-gradient(90deg,#0ea5e9,#22c55e)] after:opacity-75 after:content-[''] md:text-[36px] font-spaceGrotesk">
          Modern tools, reliable infrastructure
        </h2>
      </div>
      <div className="mt-8">
        <div
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[15px] font-semibold text-[#334155]"
          role="tablist"
          aria-label="Technology stack categories"
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
                onClick={() => setActiveGroup(group)}
              >
                {group.label}
              </button>
            );
          })}
        </div>
        <div
          id={`tech-panel-${activeGroup.id}`}
          role="tabpanel"
          aria-label={`${activeGroup.label} technologies`}
          className="mt-8 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6"
        >
          {activeGroup.logos.map((logo) => (
            <div
              key={logo.src}
              className="group relative flex items-center justify-center p-4"
            >
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
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
