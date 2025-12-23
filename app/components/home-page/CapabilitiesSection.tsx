"use client";

import Lottie from "lottie-react";
import aiAnimation from "@/public/gifs/ai.json";
import Button from "../button/Button";

const aiProducts = [
  {
    title: "Generative AI applications",
    description:
      "A productized suite of assistants for content creation, automation, and experience design.",
  },
  {
    title: "RAG and knowledge systems",
    description:
      "A secure knowledge product that grounds models in your enterprise data.",
  },
  {
    title: "Agentic AI workflows",
    description:
      "An orchestration product for autonomous tasks with human-in-the-loop control.",
  },
];

const CapabilitiesSection = () => {
  return (
    <section className="relative mx-auto w-full max-w-[1200px] px-6 pb-12 md:px-10">
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="home-eyebrow mx-auto">AI products</span>
        <h2 className="home-title home-title-center text-[28px] font-semibold md:text-[36px] font-spaceGrotesk">
          Advanced AI systems designed for impact
        </h2>
        <p className="mx-auto max-w-[760px] text-[16px] text-[color:var(--home-ink-soft)] md:text-[18px]">
          We build three core AI products that combine automation, contextual
          knowledge, and governance to support critical decisions.
        </p>
      </div>

      <div className="mt-10 grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col gap-5">
          <div className="grid gap-4">
            {aiProducts.map((item) => (
              <div
                key={item.title}
                className="home-card flex flex-col gap-2 p-5"
              >
                <span className="text-[17px] font-semibold text-[color:var(--home-ink)] font-spaceGrotesk">
                  {item.title}
                </span>
                <p className="text-[15px] text-[color:var(--home-ink-soft)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-[320px] overflow-hidden rounded-[28px] md:h-[420px]">
          <Lottie
            animationData={aiAnimation}
            loop
            autoplay
            className="h-full w-full"
            aria-label="Advanced AI systems animation"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0b1220]/50 via-transparent to-[#0ea5e9]/25" />
          <div className="absolute bottom-6 left-6 rounded-2xl border border-white/60 bg-white/80 px-5 py-4 shadow-[0_18px_40px_rgba(15,23,42,0.16)]">
            <span className="text-[16px] font-semibold text-[color:var(--home-ink)] font-spaceGrotesk">
              AI-first delivery engine
            </span>
            <p className="mt-2 text-[13px] text-[color:var(--home-ink-soft)]">
              Intelligence embedded across product, engineering, and operations.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
            <Button href="/ai" theme="gradient">
              View Our AI Products
            </Button>
          </div>
    </section>
  );
};

export default CapabilitiesSection;
