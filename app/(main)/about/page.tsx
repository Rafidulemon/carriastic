"use client";
import Image from "next/image";
import Button from "../../components/button/Button";
import { useRouter } from "next/navigation";

function AboutPage() {
  const router = useRouter();
  const offerings = [
    {
      title: "Ready-to-deploy products",
      description:
        "Productized software that accelerates time to value while staying flexible for growth.",
    },
    {
      title: "Custom platforms",
      description:
        "Tailored systems designed around unique workflows, data needs, and governance.",
    },
    {
      title: "Operational intelligence",
      description:
        "Internal management platforms that improve efficiency, compliance, and decision support.",
    },
  ];

  const capabilities = [
    {
      title: "Generative AI applications",
      description:
        "Content creation, automation, and intelligent user interactions that feel natural.",
    },
    {
      title: "RAG systems",
      description:
        "Grounded AI that blends large language models with proprietary or enterprise data.",
    },
    {
      title: "Agentic AI solutions",
      description:
        "Autonomous task execution, workflow orchestration, and assisted decision making.",
    },
  ];

  const engagement = [
    {
      title: "Deep discovery",
      description:
        "We learn your processes, operational workflows, and long-term objectives.",
    },
    {
      title: "Strategic co-design",
      description:
        "Requirements, architecture, and data strategy are shaped together from day one.",
    },
    {
      title: "Build and deploy",
      description:
        "We deliver production-ready platforms with testing, QA, and rollout planning.",
    },
    {
      title: "Evolve and optimize",
      description:
        "Ongoing performance tuning, scalability planning, and AI enablement.",
    },
  ];

  const principles = [
    {
      title: "Reliability",
      description: "Enterprise-grade delivery with strong governance and QA.",
    },
    {
      title: "Adaptability",
      description: "Systems that evolve with shifting markets and technology.",
    },
    {
      title: "Sustained impact",
      description: "Measurable outcomes that compound over time.",
    },
  ];

  return (
    <div className="about-page w-full">
      <section className="relative w-full">
        <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-6 py-16 md:px-10 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col gap-6">
              <span className="about-eyebrow">AI-first digital partner</span>
              <h1 className="text-[36px] font-semibold leading-[1.05] text-[color:var(--about-ink)] md:text-[60px] font-spaceGrotesk">
                About Carriastic
              </h1>
              <p className="about-reveal about-delay-1 text-[16px] text-[color:var(--about-ink-soft)] md:text-[18px]">
                Carriastic is a modern software and technology company dedicated
                to building scalable, intelligent, business-ready digital
                solutions for organizations operating in a digital and AI-driven
                world. We deliver ready-to-deploy products and fully customized
                platforms so teams can streamline operations, improve decision
                making, and accelerate sustainable growth.
              </p>
              <p className="about-reveal about-delay-2 text-[16px] text-[color:var(--about-ink-soft)] md:text-[18px]">
                AI is foundational to how we operate. We run an AI-first
                development culture across product design, engineering, quality
                assurance, documentation, and operations, allowing us to move
                faster with higher accuracy and enterprise-grade quality.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button className="px-8" onClick={() => router.push("/contact")}>
                  Start a conversation
                </Button>
                <div className="about-chip">Enterprise-ready delivery</div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 right-6 h-full w-full rounded-[28px] border border-white/70 bg-white/60 shadow-[0_30px_70px_rgba(15,23,42,0.18)]" />
              <div className="absolute top-6 -left-6 h-full w-full rounded-[28px] border border-white/70 bg-white/60 shadow-[0_30px_70px_rgba(15,23,42,0.12)]" />
              <div className="about-glass relative z-10 flex flex-col gap-5 rounded-[28px] p-8">
                <span className="text-[20px] font-semibold text-[color:var(--about-ink)] font-spaceGrotesk">
                  Built for real business outcomes
                </span>
                <div className="flex flex-col gap-4 text-[15px] text-[color:var(--about-ink-soft)]">
                  <div className="flex gap-3">
                    <span className="about-dot" />
                    <span>Productized platforms that deploy fast and scale cleanly.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="about-dot" />
                    <span>Custom systems aligned to your workflows and data.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="about-dot" />
                    <span>Long-term partnership with optimization and AI enablement.</span>
                  </div>
                </div>
                <div className="about-gradient-text text-[14px] uppercase tracking-[0.2em]">
                  AI is not a feature, it is the foundation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1200px] px-6 pt-12 md:px-10 md:pt-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-[28px] font-semibold text-[color:var(--about-ink)] md:text-[36px] font-spaceGrotesk">
            What we build
          </h2>
          <p className="max-w-[760px] text-[16px] text-[color:var(--about-ink-soft)] md:text-[18px]">
            We create solutions that are ready for production on day one and
            engineered to evolve with your organization.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {offerings.map((item) => (
            <div
              key={item.title}
              className="about-glass flex h-full flex-col gap-3 rounded-2xl p-6"
            >
              <span className="text-[18px] font-semibold text-[color:var(--about-ink)] font-spaceGrotesk">
                {item.title}
              </span>
              <p className="text-[15px] text-[color:var(--about-ink-soft)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1200px] px-6 pt-12 md:px-10 md:pt-16">
        <div className="grid items-center gap-10 md:grid-cols-[0.95fr_1.05fr]">
          <div className="relative h-[260px] overflow-hidden rounded-[28px] border border-white/70 shadow-[0_24px_60px_rgba(15,23,42,0.18)] md:h-[360px]">
            <Image
              src="/images/about.jpg"
              alt="Carriastic team collaborating"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 45vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0b1220]/70 via-transparent to-[#f97316]/35" />
            <div className="absolute bottom-6 left-6 flex flex-col gap-1 text-white">
              <span className="text-[20px] font-semibold font-spaceGrotesk">
                AI-first by design
              </span>
              <span className="text-[13px] text-white/80">
                Design, engineering, QA, documentation, operations
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-[28px] font-semibold text-[color:var(--about-ink)] md:text-[36px] font-spaceGrotesk">
              Advanced AI systems we deliver
            </h2>
            <p className="text-[16px] text-[color:var(--about-ink-soft)] md:text-[18px]">
              We specialize in AI solutions that improve clarity, automation, and
              decision support without sacrificing reliability.
            </p>
            <div className="grid gap-4">
              {capabilities.map((capability) => (
                <div
                  key={capability.title}
                  className="about-glass flex flex-col gap-2 rounded-2xl p-5"
                >
                  <span className="text-[17px] font-semibold text-[color:var(--about-ink)] font-spaceGrotesk">
                    {capability.title}
                  </span>
                  <p className="text-[15px] text-[color:var(--about-ink-soft)]">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1200px] px-6 pt-12 md:px-10 md:pt-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-[28px] font-semibold text-[color:var(--about-ink)] md:text-[36px] font-spaceGrotesk">
            How we partner
          </h2>
          <p className="max-w-[760px] text-[16px] text-[color:var(--about-ink-soft)] md:text-[18px]">
            We stay close to your teams through continuous engagement,
            requirement analysis, and strategic consultation.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {engagement.map((step, index) => (
            <div
              key={step.title}
              className="about-glass flex items-start gap-4 rounded-2xl p-6"
            >
              <div className="about-step">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[18px] font-semibold text-[color:var(--about-ink)] font-spaceGrotesk">
                  {step.title}
                </span>
                <p className="text-[15px] text-[color:var(--about-ink-soft)]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1200px] px-6 pt-12 md:px-10 md:pt-16">
        <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col gap-4">
            <h2 className="text-[28px] font-semibold text-[color:var(--about-ink)] md:text-[36px] font-spaceGrotesk">
              Ownership across the full lifecycle
            </h2>
            <p className="text-[16px] text-[color:var(--about-ink-soft)] md:text-[18px]">
              From internal management systems to customer-facing platforms, we
              take responsibility beyond deployment. We operate as a long-term
              technology partner focused on scale, resilience, and continuous
              improvement.
            </p>
            <div className="grid gap-4 pt-2">
              <div className="flex gap-3 text-[15px] text-[color:var(--about-ink-soft)]">
                <span className="about-dot" />
                <span>Architecture, governance, and scalability planning.</span>
              </div>
              <div className="flex gap-3 text-[15px] text-[color:var(--about-ink-soft)]">
                <span className="about-dot" />
                <span>Deployment, monitoring, and performance optimization.</span>
              </div>
              <div className="flex gap-3 text-[15px] text-[color:var(--about-ink-soft)]">
                <span className="about-dot" />
                <span>AI enablement, data refinement, and model evolution.</span>
              </div>
              <div className="flex gap-3 text-[15px] text-[color:var(--about-ink-soft)]">
                <span className="about-dot" />
                <span>Security, reliability, and operational continuity.</span>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            {principles.map((item) => (
              <div
                key={item.title}
                className="about-glass flex flex-col gap-2 rounded-2xl p-6"
              >
                <span className="text-[18px] font-semibold text-[color:var(--about-ink)] font-spaceGrotesk">
                  {item.title}
                </span>
                <p className="text-[15px] text-[color:var(--about-ink-soft)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto mt-14 flex w-full max-w-[1200px] flex-col items-center gap-6 px-6 pb-16 text-center md:px-10">
        <div className="about-cta w-full rounded-[28px] border border-white/70 px-6 py-10 md:px-12">
          <span className="about-eyebrow">Ready to build?</span>
          <h2 className="mt-3 text-[28px] font-semibold text-[color:var(--about-ink)] md:text-[36px] font-spaceGrotesk">
            Partner with Carriastic for AI-powered growth
          </h2>
          <p className="mx-auto mt-3 max-w-[620px] text-[16px] text-[color:var(--about-ink-soft)] md:text-[18px]">
            We prioritize reliability, adaptability, and sustained impact so
            your platform keeps creating value as your business scales.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button className="px-10" onClick={() => router.push("/contact")}>
              Contact us
            </Button>
            <div className="about-chip">Long-term technology partner</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
