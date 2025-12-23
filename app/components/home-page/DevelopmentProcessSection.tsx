"use client";

import { FiAward } from "react-icons/fi";
import { useLanguage } from "../../i18n/LanguageProvider";

type ProcessStep = {
  step: string;
  title: string;
  description: string;
  position: "top" | "bottom";
  rowClass: string;
  colClass: string;
};

type ProcessLayout = Omit<ProcessStep, "step" | "title" | "description">;

const processLayouts: ProcessLayout[] = [
  {
    position: "top",
    rowClass: "md:row-start-1",
    colClass: "md:col-start-1",
  },
  {
    position: "bottom",
    rowClass: "md:row-start-2",
    colClass: "md:col-start-1",
  },
  {
    position: "top",
    rowClass: "md:row-start-1",
    colClass: "md:col-start-2",
  },
  {
    position: "bottom",
    rowClass: "md:row-start-2",
    colClass: "md:col-start-2",
  },
  {
    position: "top",
    rowClass: "md:row-start-1",
    colClass: "md:col-start-3",
  },
  {
    position: "bottom",
    rowClass: "md:row-start-2",
    colClass: "md:col-start-3",
  },
];

const DevelopmentProcessSection = () => {
  const { t } = useLanguage();
  const processSteps: ProcessStep[] = t.developmentProcess.steps.map(
    (step, index) => ({
      ...step,
      ...processLayouts[index],
    })
  );

  return (
    <section className="relative w-full bg-[#ffffff]">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-14 md:px-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="mx-auto inline-flex w-fit uppercase tracking-[0.2em] text-[12px] text-[#0ea5e9]">
            {t.developmentProcess.label}
          </span>
          <h2 className="relative inline-block bg-[linear-gradient(120deg,#7a2fb5_0%,#370054_60%,#5b21b6_100%)] bg-clip-text text-[28px] font-semibold text-transparent drop-shadow-[0_10px_22px_#3700542e] after:absolute after:left-1/2 after:bottom-[-10px] after:h-[4px] after:w-[52%] after:-translate-x-1/2 after:rounded-full after:bg-[linear-gradient(90deg,#0ea5e9,#22c55e)] after:opacity-75 after:content-[''] md:text-[36px] font-spaceGrotesk">
            {t.developmentProcess.headline}
          </h2>
          <p className="mx-auto max-w-[760px] text-[16px] text-[#334155] md:text-[18px]">
            {t.developmentProcess.description}
          </p>
        </div>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute left-0 right-10 top-1/2 hidden h-[2px] -translate-y-1/2 bg-gradient-to-r from-[#ec4899] via-[#f97316] to-[#0ea5e9] md:block" />
          <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 md:flex">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f8f7fb] shadow-[0_10px_20px_#0f172a1f]">
              <FiAward className="text-[20px] text-[#0ea5e9]" />
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
                <div className="rounded-[18px] border border-[#e2e8f0cc] bg-[#ffffff] p-6 text-left shadow-[0_18px_45px_#0f172a0f]">
                  <span className="text-[13px] font-semibold text-[#0ea5e9]">
                    #{step.step}
                  </span>
                  <h3 className="mt-3 text-[16px] font-semibold text-[#0b1220] font-spaceGrotesk md:text-[18px]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14px] text-[#334155] md:text-[15px]">
                    {step.description}
                  </p>
                </div>
                <div
                  className={`pointer-events-none absolute left-8 hidden w-px bg-[#0ea5e9] md:block ${
                    step.position === "top" ? "bottom-0 h-10" : "top-0 h-10"
                  }`}
                />
                <div
                  className={`pointer-events-none absolute left-[26px] hidden h-3 w-3 rounded-full border-2 border-[#ffffff] bg-[#0ea5e9] md:block ${
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
