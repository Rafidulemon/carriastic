import Link from "next/link";
import Button from "../button/Button";

const CtaSection = () => {
  return (
    <section className="relative mx-auto w-full max-w-[1200px] px-6 pb-16 md:px-10">
      <div className="home-cta flex flex-col items-center gap-4 rounded-[28px] border border-white/70 px-6 py-10 text-center md:px-12">
        <span className="home-eyebrow">Ready to build</span>
        <h2 className="home-title home-title-center text-[28px] font-semibold md:text-[36px] font-spaceGrotesk">
          Partner with Carriastic for AI-powered growth
        </h2>
        <p className="max-w-[640px] text-[16px] text-[color:var(--home-ink-soft)] md:text-[18px]">
          We design intelligent platforms that evolve with your business and
          deliver measurable value over the long term.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <Button theme="gradient" href="/contact">
            Contact us
          </Button>
          <Link href="/about" className="home-button-secondary">
            Learn about our team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
