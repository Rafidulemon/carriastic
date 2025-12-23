"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../button/Button";

const heroHighlights = [
  {
    title: "AI-first delivery",
    description: "AI is integrated across design, engineering, and QA.",
  },
  {
    title: "Enterprise quality",
    description: "Reliable platforms built for governance and scale.",
  },
  {
    title: "Lifecycle ownership",
    description: "From strategy to optimization, we stay accountable.",
  },
];

const heroGifs = [
  {
    src: "/gifs/ai_first.gif",
    alt: "AI-first delivery workflow",
  },
  {
    src: "/gifs/enterprise.gif",
    alt: "Enterprise-ready platforms",
  },
  {
    src: "/gifs/lifecycle.gif",
    alt: "Lifecycle ownership visuals",
  },
];

const HeroSection = () => {
  const [activeGif, setActiveGif] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveGif((prev) => (prev + 1) % heroGifs.length);
    }, 4200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative">
      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-6 py-6 md:py-12 md:px-10">
        <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col gap-6 md:mb-10">
            <span className="home-eyebrow">AI-first technology company</span>
            <h1 className="home-title home-title-hero text-[36px] font-semibold leading-[1.06] md:text-[60px] font-spaceGrotesk md:mb-4">
              Build intelligent digital platforms that scale with your business.
            </h1>
            <p className="home-reveal home-delay-1 text-[16px] text-[color:var(--home-ink-soft)] md:text-[18px]">
              Carriastic delivers scalable, business-ready software products and
              customized platforms for organizations operating in a rapidly
              evolving AI landscape.
            </p>
            <p className="home-reveal home-delay-2 text-[16px] text-[color:var(--home-ink-soft)] md:text-[18px]">
              We embed AI across the entire delivery lifecycle to move faster,
              improve accuracy, and maintain enterprise-grade quality.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" theme="gradient">
                Schedule a strategy call
              </Button>
              <Link href="/services" className="home-button-secondary">
                Explore solutions
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full overflow-hidden rounded-[24px] aspect-[15/11]">
              {heroGifs.map((gif, index) => (
                <Image
                  key={gif.src}
                  src={gif.src}
                  alt={gif.alt}
                  fill
                  unoptimized
                  sizes="(min-width: 768px) 45vw, 100vw"
                  priority={index === 0}
                  className={`object-cover transition-opacity duration-1000 ease-in-out ${
                    index === activeGif ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {heroHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[20px] border border-[rgba(15,23,42,0.08)] p-4 shadow-[0_20px_55px_rgba(15,23,42,0.12)] backdrop-blur-[14px]"
                >
                  <span className="text-[15px] font-semibold text-[color:var(--home-ink)] font-spaceGrotesk">
                    {item.title}
                  </span>
                  <p className="mt-2 text-[13px] text-[color:var(--home-ink-soft)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
