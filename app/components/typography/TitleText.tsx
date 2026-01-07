type TitleProps = {
  label: string;
  headline: string;
  description?: string;
};

const TitleText: React.FC<TitleProps> = ({
  label,
  headline,
  description,
}) => {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <span className="mx-auto inline-flex w-fit uppercase tracking-[0.2em] text-[12px] text-[#0ea5e9]">
        {label}
      </span>
      <h2 className="relative -mt-4 inline-block bg-[linear-gradient(120deg,#7a2fb5_0%,#370054_60%,#5b21b6_100%)] bg-clip-text text-[28px] font-semibold text-transparent drop-shadow-[0_10px_22px_#3700542e] after:absolute after:left-1/2 after:bottom-[-10px] after:h-[4px] after:w-[52%] after:-translate-x-1/2 after:rounded-full after:bg-[linear-gradient(90deg,#0ea5e9,#22c55e)] after:opacity-75 after:content-[''] md:text-[36px] font-spaceGrotesk">
        {headline}
      </h2>
      {description && (
        <p className="mx-auto max-w-[760px] text-[16px] text-[#334155] md:text-[18px]">
          {description}
        </p>
      )}
    </div>
  );
};

export default TitleText;
