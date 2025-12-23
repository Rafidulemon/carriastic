import HeroSection from "../components/home-page/HeroSection";
import OfferingsSection from "../components/home-page/OfferingsSection";
import CapabilitiesSection from "../components/home-page/CapabilitiesSection";
import DesignApproachSection from "../components/home-page/DesignApproachSection";
import DevelopmentProcessSection from "../components/home-page/DevelopmentProcessSection";
import TrustedPartnershipsSection from "../components/home-page/TrustedPartnershipsSection";
import LeadershipSection from "../components/home-page/LeadershipSection";
import TechStackSection from "../components/home-page/TechStackSection";
import CtaSection from "../components/home-page/CtaSection";

const HomePage = () => {
  return (
    <div className="home-page w-full flex flex-col gap-2 md:gap-4">
      <HeroSection />
      <OfferingsSection />
      <CapabilitiesSection />
      <DesignApproachSection />
      <DevelopmentProcessSection />
      <TechStackSection />
      <TrustedPartnershipsSection />
      <LeadershipSection />
      <CtaSection />
    </div>
  );
};

export default HomePage;
