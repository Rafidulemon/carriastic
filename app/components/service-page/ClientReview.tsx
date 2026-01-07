"use client";

import { useLanguage } from "@/app/i18n/LanguageProvider";
import ReviewCard from "../cards/ClientReviewCard";
import TitleText from "../typography/TitleText";

const ClientReview = () => {
  const { t } = useLanguage();
  const servicesPage = t.servicesPage;
  
  return (
    <section className="relative w-full px-4 md:px-8">
      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center gap-6">
        <TitleText
          label={servicesPage.testimonials.label}
          headline={servicesPage.testimonials.headline}
          description={servicesPage.testimonials.description}
        />
        <div className="w-full overflow-hidden md:hidden">
          <div
            className="flex w-full transition-transform duration-700 ease-in-out will-change-transform"
            
          >
            {servicesPage.reviews.map((review, index) => (
              <div key={`mobile-${index}`} className="w-full shrink-0 px-2">
                <ReviewCard {...review} />
              </div>
            ))}
          </div>
        </div>
        <div className="relative hidden w-full overflow-hidden md:block">
          <div className="flex flex-row animate-marquee-logo gap-6 hover:[animation-play-state:paused]">
            {servicesPage.reviews.map((review, index) => (
              <ReviewCard key={`desktop-${index}`} {...review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ClientReview;
