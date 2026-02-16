"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { FiAward } from "react-icons/fi";
import { useLanguage } from "../../i18n/LanguageProvider";
import TitleText from "../typography/TitleText";

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
  const [webDevProcessAnimation, setWebDevProcessAnimation] = useState<Record<
    string,
    unknown
  > | null>(null);
  const processSteps: ProcessStep[] = t.developmentProcess.steps.map(
    (step, index) => ({
      ...step,
      ...processLayouts[index],
    })
  );

  useEffect(() => {
    let isMounted = true;

    import("@/public/gifs/jsons/develop_step.json")
      .then((module) => {
        if (!isMounted) return;
        setWebDevProcessAnimation(module.default as Record<string, unknown>);
      })
      .catch(() => {
        if (!isMounted) return;
        setWebDevProcessAnimation(null);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <TitleText
          label={t.developmentProcess.label}
          headline={t.developmentProcess.headline}
          description={t.developmentProcess.description}
        />

        {webDevProcessAnimation && (
          <div className="relative h-[260px] overflow-hidden md:h-[420px]">
            <Lottie
              animationData={webDevProcessAnimation}
              loop
              autoplay
              className="h-full w-full"
              aria-label={t.developmentProcess.headline}
            />
          </div>
        )}

        <div className="relative">
          <div className="pointer-events-none absolute left-0 right-10 top-1/2 hidden h-[2px] -translate-y-1/2 bg-gradient-to-r from-[#ec4899] via-[#f97316] to-[#0ea5e9] md:block" />
          <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 md:flex">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f8f7fb] shadow-[0_10px_20px_#0f172a1f]">
              <FiAward className="text-[20px] text-[#0ea5e9]" />
            </div>
          </div>

          <div className="grid gap-2 md:gap-6 md:grid-cols-3 md:grid-rows-2 md:gap-y-16">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className={`relative ${step.rowClass} ${step.colClass} ${
                  step.position === "top" ? "md:pb-10" : "md:pt-10"
                }`}
              >
                <div className="rounded-[18px] border border-[#e2e8f0cc] bg-[#ffffff] p-4 md:p-6 text-left shadow-[0_18px_45px_#0f172a0f]">
                  <span className="text-[13px] font-semibold text-[#0ea5e9]">
                    #{step.step}
                  </span>
                  <h3 className="md:mt-3 text-[16px] font-semibold text-[#0b1220] font-spaceGrotesk md:text-[18px]">
                    {step.title}
                  </h3>
                  <p className="md:mt-2 text-[14px] text-[#334155] md:text-[15px]">
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
