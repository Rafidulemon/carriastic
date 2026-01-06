import type { CSSProperties, ElementType } from "react";
import { FiArrowUpRight } from "react-icons/fi";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: ElementType;
  cardClass: string;
  glowClass: string;
  learnMoreLabel: string;
  animationDelayMs?: number;
  className?: string;
  style?: CSSProperties;
};

const ServiceCard = ({
  title,
  description,
  icon,
  cardClass,
  glowClass,
  learnMoreLabel,
  animationDelayMs,
  className,
  style,
}: ServiceCardProps) => {
  const Icon = icon;
  const combinedStyle = animationDelayMs
    ? { ...style, animationDelay: `${animationDelayMs}ms` }
    : style;

  return (
    <div
      className={`group relative h-full min-h-[190px] overflow-hidden rounded-[26px] p-4 text-left transition duration-300 ease-out text-white md:min-h-[220px] md:p-6 ${cardClass} ${className ?? ""}`}
      style={combinedStyle}
    >
      <span
        className={`pointer-events-none absolute -right-10 -top-12 h-28 w-28 rounded-full opacity-40 blur-3xl ${glowClass}`}
        aria-hidden="true"
      />
      <span
        className={`pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_60%)]`}
        aria-hidden="true"
      />
      <span
        className={`pointer-events-none absolute -right-6 -bottom-10 opacity-20 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105 text-white`}
        aria-hidden="true"
      >
        <Icon className="h-[130px] w-[130px] md:h-[170px] md:w-[170px]" />
      </span>
      <div className="relative z-10 flex h-full flex-col gap-3 pr-6">
        <h3 className="mt-2 text-[18px] font-semibold leading-snug md:text-[19px] font-spaceGrotesk">
          {title}
        </h3>
        <p
          className={`text-[13px] leading-relaxed md:text-[14px] text-white/75`}
        >
          {description}
        </p>
        <div className="mt-auto flex items-center gap-3 pt-4">
          <span
            className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-[10px] uppercase tracking-[0.28em] backdrop-blur bg-white/10 text-white/80`}
          >
            <FiArrowUpRight className="text-[12px]" />
          <span>{learnMoreLabel}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
