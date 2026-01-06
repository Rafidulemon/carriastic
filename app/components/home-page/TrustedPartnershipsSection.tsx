"use client";

import Image from "next/image";
import { useLanguage } from "../../i18n/LanguageProvider";

const clientLogos = [
  "/clients/client1-logo.jpg",
  "/clients/client2-logo.jpg",
  "/clients/client3-logo.jpg",
  "/clients/client4-logo.jpg",
  "/clients/client5-logo.jpg",
];

const marqueeLogos = [...clientLogos, ...clientLogos];

const TrustedPartnershipsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative mx-auto w-full max-w-[1200px] px-6 py-6 md:px-10">
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="mx-auto inline-flex w-fit uppercase tracking-[0.2em] text-[12px] text-[#0ea5e9]">
          {t.trustedPartnerships.label}
        </span>
        <h2 className="relative inline-block bg-[linear-gradient(120deg,#7a2fb5_0%,#370054_60%,#5b21b6_100%)] bg-clip-text text-[28px] font-semibold text-transparent drop-shadow-[0_10px_22px_#3700542e] after:absolute after:left-1/2 after:bottom-[-10px] after:h-[4px] after:w-[52%] after:-translate-x-1/2 after:rounded-full after:bg-[linear-gradient(90deg,#0ea5e9,#22c55e)] after:opacity-75 after:content-[''] md:text-[36px] font-spaceGrotesk">
          {t.trustedPartnerships.headline}
        </h2>
      </div>

      <div className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,#00000000_0%,#000000_8%,#000000_92%,#00000000_100%)] [-webkit-mask-image:linear-gradient(to_right,#00000000_0%,#000000_8%,#000000_92%,#00000000_100%)]">
        <div
          className="flex w-max items-center gap-6 py-2 will-change-transform motion-safe:animate-home-logo-scroll motion-reduce:animate-none motion-reduce:transform-none hover:[animation-play-state:paused]"
          role="list"
          aria-label={t.trustedPartnerships.listAria}
        >
          {marqueeLogos.map((logo, index) => {
            const isClone = index >= clientLogos.length;

            return (
              <div
                key={`${logo}-${index}`}
                className="flex items-center justify-center px-6 py-4"
                role="listitem"
                aria-hidden={isClone}
              >
                <Image
                  src={logo}
                  alt={
                    isClone ? "" : `${t.trustedPartnerships.logoAlt} ${index + 1}`
                  }
                  width={140}
                  height={80}
                  className="object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartnershipsSection;
