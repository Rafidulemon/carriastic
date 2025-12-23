import { FiShield, FiTrendingUp, FiUsers } from "react-icons/fi";
import WhyUs from "./WhyUs";

const proofPoints = [
  {
    title: "Reliable delivery",
    description: "Dedicated pods and QA ensure predictable, on-time launches.",
    icon: FiShield,
    accent: "from-primaryLight to-primary",
  },
  {
    title: "Sustained impact",
    description: "Post-launch optimization keeps outcomes improving over time.",
    icon: FiTrendingUp,
    accent: "from-[#7c3aed] to-[#5b21b6]",
  },
  {
    title: "Accountable partnership",
    description: "Clear governance, reporting, and shared ownership.",
    icon: FiUsers,
    accent: "from-[#a855f7] to-[#6b21a8]",
  },
];

const WhyCarriasticSection = () => {
  return (
    <section className="relative mx-auto w-full max-w-[1200px] px-6 py-12 md:px-10">
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="home-eyebrow mx-auto">Why Carriastic</span>
        <h2 className="home-title home-title-center text-[28px] font-semibold md:text-[36px] font-spaceGrotesk">
          Reliable delivery with sustained impact
        </h2>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {proofPoints.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="home-card whyus-reveal group flex flex-col gap-4 p-6"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div
                className={`whyus-icon bg-gradient-to-br ${item.accent} transition group-hover:-translate-y-1 group-hover:scale-110`}
              >
                <Icon className="text-2xl text-white" />
              </div>
              <span className="text-[18px] font-semibold text-[color:var(--home-ink)] font-spaceGrotesk">
                {item.title}
              </span>
              <p className="text-[15px] text-[color:var(--home-ink-soft)]">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
      <WhyUs />
    </section>
  );
};

export default WhyCarriasticSection;
