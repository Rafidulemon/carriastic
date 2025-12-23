import Image from "next/image";

const clientLogos = [
  "/clients/client1-logo.jpg",
  "/clients/client2-logo.jpg",
  "/clients/client3-logo.jpg",
  "/clients/client4-logo.jpg",
  "/clients/client5-logo.jpg",
];

const marqueeLogos = [...clientLogos, ...clientLogos];

const TrustedPartnershipsSection = () => {
  return (
    <section className="relative mx-auto w-full max-w-[1200px] px-6 py-12 md:px-10">
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="home-eyebrow mx-auto">Trusted partnerships</span>
        <h2 className="home-title home-title-center text-[28px] font-semibold md:text-[36px] font-spaceGrotesk">
          Trusted by forward-looking teams
        </h2>
      </div>

      <div className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,#000_8%,#000_92%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,#000_8%,#000_92%,transparent_100%)]">
        <div
          className="flex w-max items-center gap-6 py-2 will-change-transform motion-reduce:animate-none motion-reduce:transform-none hover:[animation-play-state:paused] [animation:home-logo-scroll_32s_linear_infinite]"
          role="list"
          aria-label="Client logos"
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
                  alt={isClone ? "" : `Client logo ${index + 1}`}
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
