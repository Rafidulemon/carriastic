"use client";

import AboutHeroSection from "@/app/components/about-page/HeroSection";
import TeamSection from "@/app/components/about-page/TeamSection";
import CtaSection from "@/app/components/home-page/CtaSection";
import { useLanguage } from "../../i18n/LanguageProvider";
import DesignApproachSection from "@/app/components/home-page/DesignApproachSection";

function AboutPage() {
  const { t } = useLanguage();
  const about = t.about;

  const missionVisionAccents = [
    "from-[#22d3ee]/40 to-[#0ea5e9]/10",
    "from-[#34d399]/40 to-[#f59e0b]/10",
  ];

  const missionVision = about.missionVision.items.map((item, index) => ({
    ...item,
    accent:
      missionVisionAccents[index] ??
      missionVisionAccents[missionVisionAccents.length - 1],
  }));

  const aiCulture = about.aiCulture.items;
  const aiSystems = about.aiCulture.systems;
  const differentiators = about.differentiators.items;
  const clientFocus = about.clients.items;
  const commitments = about.commitment.items;

  return (
    <div className="about-page relative overflow-x-hidden text-slate-900">
      <AboutHeroSection />

      <section className="relative py-14 md:py-20">
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
          <div className="flex flex-col gap-4">
            <span className="text-[11px] uppercase tracking-[0.35em] text-amber-600">
              {about.missionVision.label}
            </span>
            <h2 className="text-[30px] font-semibold text-slate-900 md:text-[40px] font-spaceGrotesk">
              {about.missionVision.headline}
            </h2>
            <p className="max-w-[760px] text-[16px] text-justify text-slate-600 md:text-[18px]">
              {about.missionVision.description}
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {missionVision.map((item) => (
              <div
                key={item.title}
                className={`rounded-[26px] bg-gradient-to-br ${item.accent} p-[1px]`}
              >
                <div className="flex h-full flex-col gap-3 rounded-[26px] border border-slate-200/80 bg-white p-7 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                  <span className="text-[18px] font-semibold text-slate-900 font-spaceGrotesk">
                    {item.title}
                  </span>
                  <p className="text-[15px] text-justify text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-14 md:py-20">
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="flex flex-col gap-5">
              <span className="text-[11px] uppercase tracking-[0.35em] text-sky-600">
                {about.aiCulture.label}
              </span>
              <h2 className="text-[30px] font-semibold text-slate-900 md:text-[40px] font-spaceGrotesk">
                {about.aiCulture.headline}
              </h2>
              <p className="text-[16px] text-justify text-slate-600 md:text-[18px]">
                {about.aiCulture.description}
              </p>
              <div className="grid gap-3 pt-2">
                {aiCulture.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-[14px] text-slate-600 shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#22d3ee] to-[#34d399]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
                <span className="text-[14px] uppercase tracking-[0.2em] text-amber-600">
                  {about.aiCulture.highlightLabel}
                </span>
                <p className="mt-3 text-[16px] text-justify text-slate-600">
                  {about.aiCulture.highlightDescription}
                </p>
              </div>
              <div className="grid gap-4">
                {aiSystems.map((capability) => (
                  <div
                    key={capability.title}
                    className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.1)]"
                  >
                    <span className="text-[17px] font-semibold text-slate-900 font-spaceGrotesk">
                      {capability.title}
                    </span>
                    <p className="mt-2 text-[14px] text-justify text-slate-600">
                      {capability.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <DesignApproachSection/>

      <section className="relative py-14 md:py-20">
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
          <div className="flex flex-col gap-4">
            <span className="text-[11px] uppercase tracking-[0.35em] text-orange-600">
              {about.differentiators.label}
            </span>
            <h2 className="text-[30px] font-semibold text-slate-900 md:text-[40px] font-spaceGrotesk">
              {about.differentiators.headline}
            </h2>
            <p className="max-w-[760px] text-[16px] text-justify text-slate-600 md:text-[18px]">
              {about.differentiators.description}
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.1)]"
              >
                <span className="text-[18px] font-semibold text-slate-900 font-spaceGrotesk">
                  {item.title}
                </span>
                <p className="mt-2 text-[14px] text-justify text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-14 md:py-20">
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
          <div className="flex flex-col gap-4">
            <span className="text-[11px] uppercase tracking-[0.35em] text-sky-600">
              {about.clients.label}
            </span>
            <h2 className="text-[30px] font-semibold text-slate-900 md:text-[40px] font-spaceGrotesk">
              {about.clients.headline}
            </h2>
            <p className="max-w-[760px] text-[16px] text-justify text-slate-600 md:text-[18px]">
              {about.clients.description}
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {clientFocus.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50 p-6 text-[15px] text-slate-600 shadow-[0_20px_40px_rgba(15,23,42,0.08)]"
              >
                <span className="font-semibold text-slate-900 font-spaceGrotesk">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />

      <section className="relative py-14 md:py-20">
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col gap-5">
              <span className="text-[11px] uppercase tracking-[0.35em] text-emerald-600">
                {about.commitment.label}
              </span>
              <h2 className="text-[30px] font-semibold text-slate-900 md:text-[40px] font-spaceGrotesk">
                {about.commitment.headline}
              </h2>
              <p className="text-[16px] text-justify text-slate-600 md:text-[18px]">
                {about.commitment.descriptionOne}
              </p>
              <p className="text-[16px] text-justify text-slate-600 md:text-[18px]">
                {about.commitment.descriptionTwo}
              </p>
            </div>
            <div className="grid gap-4">
              {commitments.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white px-5 py-4 text-[14px] text-slate-600 shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#22d3ee] to-[#facc15]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}

export default AboutPage;
