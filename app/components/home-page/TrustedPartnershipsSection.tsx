import Image from "next/image";

const clientLogos = [
  "/clients/client1-logo.jpg",
  "/clients/client2-logo.jpg",
  "/clients/client3-logo.jpg",
  "/clients/client4-logo.jpg",
  "/clients/client5-logo.jpg",
];

const TrustedPartnershipsSection = () => {
  return (
    <section className="relative mx-auto w-full max-w-[1200px] px-6 py-12 md:px-10">
      <div className="flex flex-col gap-3 text-center">
        <span className="home-eyebrow mx-auto">Trusted partnerships</span>
        <h2 className="home-title home-title-center text-[26px] font-semibold md:text-[34px] font-spaceGrotesk">
          Trusted by forward-looking teams
        </h2>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-5">
        {clientLogos.map((logo, index) => (
          <div key={logo} className="home-logo-card flex items-center justify-center p-4">
            <Image
              src={logo}
              alt={`Client logo ${index + 1}`}
              width={140}
              height={80}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedPartnershipsSection;
