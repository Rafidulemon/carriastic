import Services from "@/app/components/service-page/Service";
import TechStackSection from "@/app/components/home-page/TechStackSection";
import ServiceHeroSection from "@/app/components/service-page/HeroSection";
import CtaSection from "@/app/components/home-page/CtaSection";
import WhyItWorksSection from "@/app/components/service-page/WhyItWorksSection";
import ClientReview from "@/app/components/service-page/ClientReview";

const ServicesPage = () => {

  return (
    <div className="w-full bg-white flex flex-col gap-6 md:gap-10">
      <ServiceHeroSection />
      <Services />
      <WhyItWorksSection />
      <TechStackSection/>
      <ClientReview/>
      <CtaSection />
    </div>
  );
};

export default ServicesPage;
