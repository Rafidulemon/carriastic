"use client";

import Image from "next/image";
import { useLanguage } from "../../i18n/LanguageProvider";
import TitleText from "../typography/TitleText";

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
    <section className="relative mx-auto w-full max-w-[1200px] px-6 md:px-10">
      <TitleText
        label={t.trustedPartnerships.label}
        headline={t.trustedPartnerships.headline}
      />

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
                    isClone
                      ? ""
                      : `${t.trustedPartnerships.logoAlt} ${index + 1}`
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
