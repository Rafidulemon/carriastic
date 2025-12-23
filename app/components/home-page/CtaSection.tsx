import Link from "next/link";
import Button from "../button/Button";

const CtaSection = () => {
  return (
    <section className="relative mx-auto w-full max-w-[1200px] px-6 pb-16 md:px-10">
      <div className="flex flex-col items-center gap-4 rounded-[28px] border border-[#ffffffb3] bg-[linear-gradient(135deg,#fffffff5,#fff7e7eb)] px-6 py-10 text-center shadow-[0_28px_60px_#0f172a1f] md:px-12">
        <span className="inline-flex w-fit uppercase tracking-[0.2em] text-[12px] text-[#0ea5e9]">
          Ready to build
        </span>
        <h2 className="relative inline-block bg-[linear-gradient(120deg,#7a2fb5_0%,#370054_60%,#5b21b6_100%)] bg-clip-text text-[28px] font-semibold text-transparent drop-shadow-[0_10px_22px_#3700542e] after:absolute after:left-1/2 after:bottom-[-10px] after:h-[4px] after:w-[52%] after:-translate-x-1/2 after:rounded-full after:bg-[linear-gradient(90deg,#0ea5e9,#22c55e)] after:opacity-75 after:content-[''] md:text-[36px] font-spaceGrotesk">
          Partner with Carriastic for AI-powered growth
        </h2>
        <p className="max-w-[640px] text-[16px] text-[#334155] md:text-[18px]">
          We design intelligent platforms that evolve with your business and
          deliver measurable value over the long term.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <Button theme="gradient" href="/contact">
            Contact us
          </Button>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full border border-[#0f172a2e] bg-[#ffffffd9] px-[22px] py-[12px] text-[14px] font-semibold text-[#0b1220] transition duration-200 ease-out hover:-translate-y-[2px] hover:shadow-[0_18px_36px_#0f172a26]"
          >
            Learn about our team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
