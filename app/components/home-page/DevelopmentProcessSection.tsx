import { FiAward } from "react-icons/fi";

type ProcessStep = {
  step: string;
  title: string;
  description: string;
  position: "top" | "bottom";
  rowClass: string;
  colClass: string;
};

const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & outcome alignment",
    description:
      "We define the business goals, user journeys, and success metrics that guide every decision.",
    position: "top",
    rowClass: "md:row-start-1",
    colClass: "md:col-start-1",
  },
  {
    step: "02",
    title: "AI-first team setup",
    description:
      "A cross-functional squad is assembled with product, design, and AI engineering leads.",
    position: "bottom",
    rowClass: "md:row-start-2",
    colClass: "md:col-start-1",
  },
  {
    step: "03",
    title: "Architecture & data readiness",
    description:
      "We design secure, scalable systems and prepare the data foundation for AI workflows.",
    position: "top",
    rowClass: "md:row-start-1",
    colClass: "md:col-start-2",
  },
  {
    step: "04",
    title: "Sprint planning & demos",
    description:
      "Weekly planning and demos keep priorities clear, feedback tight, and delivery predictable.",
    position: "bottom",
    rowClass: "md:row-start-2",
    colClass: "md:col-start-2",
  },
  {
    step: "05",
    title: "Code review & QA gates",
    description:
      "Peer reviews, automated checks, and QA gates keep quality high before release.",
    position: "top",
    rowClass: "md:row-start-1",
    colClass: "md:col-start-3",
  },
  {
    step: "06",
    title: "Iterative delivery & optimization",
    description:
      "We ship in milestones, monitor results, and continuously improve performance and UX.",
    position: "bottom",
    rowClass: "md:row-start-2",
    colClass: "md:col-start-3",
  },
];

const DevelopmentProcessSection = () => {
  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-14 md:px-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="home-eyebrow mx-auto">Our Development Approach</span>
          <h2 className="home-title home-title-center text-[28px] font-semibold md:text-[36px] font-spaceGrotesk">
            How development through Carriastic works
          </h2>
          <p className="mx-auto max-w-[760px] text-[16px] text-[color:var(--home-ink-soft)] md:text-[18px]">
            A structured, AI-ready delivery flow that keeps teams aligned and
            ships in predictable iterations.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute left-0 right-10 top-1/2 hidden h-[2px] -translate-y-1/2 bg-gradient-to-r from-[#ec4899] via-[#f97316] to-[#0ea5e9] md:block" />
          <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 md:flex">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f8f7fb] shadow-[0_10px_20px_rgba(15,23,42,0.12)]">
              <FiAward className="text-[20px] text-[color:var(--home-accent-2)]" />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 md:grid-rows-2 md:gap-y-16">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className={`relative ${step.rowClass} ${step.colClass} ${
                  step.position === "top" ? "md:pb-10" : "md:pt-10"
                }`}
              >
                <div className="rounded-[18px] border border-slate-200/80 bg-white p-6 text-left shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
                  <span className="text-[13px] font-semibold text-[color:var(--home-accent-2)]">
                    #{step.step}
                  </span>
                  <h3 className="mt-3 text-[16px] font-semibold text-[color:var(--home-ink)] font-spaceGrotesk md:text-[18px]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14px] text-[color:var(--home-ink-soft)] md:text-[15px]">
                    {step.description}
                  </p>
                </div>
                <div
                  className={`pointer-events-none absolute left-8 hidden w-px bg-[color:var(--home-accent-2)] md:block ${
                    step.position === "top" ? "bottom-0 h-10" : "top-0 h-10"
                  }`}
                />
                <div
                  className={`pointer-events-none absolute left-[26px] hidden h-3 w-3 rounded-full border-2 border-white bg-[color:var(--home-accent-2)] md:block ${
                    step.position === "top" ? "bottom-[-6px]" : "top-[-6px]"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcessSection;
