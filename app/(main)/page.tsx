import HeroSection from "../components/home-page/HeroSection";
import OfferingsSection from "../components/home-page/OfferingsSection";
import CapabilitiesSection from "../components/home-page/CapabilitiesSection";
import DevelopmentProcessSection from "../components/home-page/DevelopmentProcessSection";
import TrustedPartnershipsSection from "../components/home-page/TrustedPartnershipsSection";
import LeadershipSection from "../components/home-page/LeadershipSection";
import TechStackSection from "../components/home-page/TechStackSection";
import CtaSection from "../components/home-page/CtaSection";
import FaqSection from "../components/home-page/FaqSection";

const HomePage = () => {
  return (
    <div className="home-page w-full flex flex-col">
      <HeroSection />
      <OfferingsSection />
      <DevelopmentProcessSection />
      <CapabilitiesSection />
      {/* <DesignApproachSection /> */}
      <TechStackSection />
      <TrustedPartnershipsSection />
      <LeadershipSection />
      <CtaSection />
      <FaqSection />
    </div>
  );
};

export default HomePage;
