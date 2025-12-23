import Image from "next/image";

const leadershipQuotes = [
  {
    name: "Md. Rafidul Islam",
    title: "CEO, Carriastic",
    quote:
      "At Carriastic, our vision is not just to deliver software but to build lasting, measurable impact for every organization we serve.",
    image: "/team/rafid.png",
  },
  {
    name: "Syed Hasan Ahmed Anik",
    title: "COO, Carriastic",
    quote:
      "We align technology, process, and people so every solution translates into real operational advantages.",
    image: "/team/hasan.png",
  },
  {
    name: "Ahsan Habib Ethic",
    title: "CMO, Carriastic",
    quote:
      "Trust is earned through delivery. We focus on partnerships that grow stronger with every release.",
    image: "/team/ethic.png",
  },
];

const quoteIntervalSeconds = 4;

const LeadershipSection = () => {
  const quoteCycleSeconds = leadershipQuotes.length * quoteIntervalSeconds;

  return (
    <section className="relative mx-auto w-full max-w-[1200px] px-6 pb-12 md:px-10">
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="home-eyebrow mx-auto">Leadership voices</span>
        <h2 className="home-title home-title-center text-[28px] font-semibold md:text-[36px] font-spaceGrotesk">
          Quotes from our leadership
        </h2>
        <p className="mx-auto max-w-[720px] text-[16px] text-[color:var(--home-ink-soft)] md:text-[18px]">
          Our leadership team stays close to delivery, ensuring every client
          engagement remains focused on measurable business outcomes.
        </p>
      </div>
      <div className="home-quote-stack mt-8">
        {leadershipQuotes.map((leader, index) => (
          <div
            key={leader.name}
            className="home-card home-quote-item relative flex h-full flex-col gap-5 overflow-hidden p-5"
            style={{
              animationDelay: `${index * quoteIntervalSeconds}s`,
              animationDuration: `${quoteCycleSeconds}s`,
            }}
          >
            <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#0ea5e9] via-[#22c55e] to-[#f97316]" />
            <p className="text-[17px] text-[color:var(--home-ink-soft)] md:text-[18px]">
              &quot;{leader.quote}&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 overflow-hidden rounded-full border border-white/70">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  width={120}
                  height={120}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[18px] font-semibold text-[color:var(--home-ink)] md:text-[20px] font-spaceGrotesk">
                  {leader.name}
                </span>
                <span className="text-[14px] text-[color:var(--home-ink-soft)] md:text-[15px]">
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
