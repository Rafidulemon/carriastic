"use client";

import Image from "next/image";
import { useLanguage } from "../../i18n/LanguageProvider";

const leaderImages = ["/team/rafid.png", "/team/hasan.png", "/team/ethic.png"];

const quoteIntervalSeconds = 10;

const LeadershipSection = () => {
  const { t } = useLanguage();
  const leadershipQuotes = t.leadership.quotes.map((leader, index) => ({
    ...leader,
    image: leaderImages[index] ?? leaderImages[0],
  }));
  const quoteCycleSeconds = leadershipQuotes.length * quoteIntervalSeconds;

  return (
    <section className="relative mx-auto w-full max-w-[1200px] px-6 pb-6 md:px-10">
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="mx-auto inline-flex w-fit uppercase tracking-[0.2em] text-[12px] text-[#0ea5e9]">
          {t.leadership.label}
        </span>
        <h2 className="relative inline-block bg-[linear-gradient(120deg,#7a2fb5_0%,#370054_60%,#5b21b6_100%)] bg-clip-text text-[28px] font-semibold text-transparent drop-shadow-[0_10px_22px_#3700542e] after:absolute after:left-1/2 after:bottom-[-10px] after:h-[4px] after:w-[52%] after:-translate-x-1/2 after:rounded-full after:bg-[linear-gradient(90deg,#0ea5e9,#22c55e)] after:opacity-75 after:content-[''] md:text-[36px] font-spaceGrotesk">
          {t.leadership.headline}
        </h2>
        <p className="mx-auto max-w-[720px] text-[16px] text-[#334155] md:text-[18px]">
          {t.leadership.description}
        </p>
      </div>
      <div className="mt-8 grid min-h-[280px] place-items-center">
        {leadershipQuotes.map((leader, index) => (
          <div
            key={leader.name}
            className="relative col-start-1 row-start-1 flex h-full w-full max-w-[520px] flex-col gap-5 overflow-hidden rounded-[20px] border border-[#0f172a14] bg-[#ffffffd9] p-5 opacity-0 shadow-[0_20px_55px_#0f172a1f] backdrop-blur-[14px] will-change-[opacity,transform] motion-safe:animate-home-quote-cycle motion-reduce:animate-none motion-reduce:opacity-0 first:motion-reduce:opacity-100"
            style={{
              animationDuration: `${quoteCycleSeconds}s`,
              animationDelay: `${index * quoteIntervalSeconds}s`,
              animationFillMode: "both",
            }}
          >
            <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#0ea5e9] via-[#22c55e] to-[#f97316]" />
            <p className="text-[17px] text-[#334155] md:text-[18px]">
              &quot;{leader.quote}&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 overflow-hidden rounded-full border border-[#ffffffb3]">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  width={120}
                  height={120}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[18px] font-semibold text-[#0b1220] md:text-[20px] font-spaceGrotesk">
                  {leader.name}
                </span>
                <span className="text-[14px] text-[#334155] md:text-[15px]">
                  {leader.title}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipSection;
