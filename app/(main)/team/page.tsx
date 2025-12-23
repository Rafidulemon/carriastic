"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../../components/button/Button";
import { useLanguage } from "../../i18n/LanguageProvider";

const OurTeamPage = () => {
  const { t } = useLanguage();
  const team = t.teamPage;

  const valueAccents = [
    "from-[#ede9fe]/70 via-white to-[#dbeafe]/70",
    "from-[#dcfce7]/70 via-white to-[#ccfbf1]/70",
    "from-[#fef3c7]/70 via-white to-[#ffe4e6]/70",
  ];

  return (
    <div className="w-full bg-white">
      <section className="relative isolate w-full overflow-hidden">
        <Image
          src="/banners/team.jpg"
          alt={team.hero.imageAlt}
          layout="fill"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-slate-900/70" />
        <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-primaryLight/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-60px] right-[-40px] h-72 w-72 rounded-full bg-sky-400/30 blur-3xl" />
        <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center gap-6 px-6 py-16 text-center text-white md:px-10 md:py-24">
          <span className="inline-flex w-fit rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.3em]">
            {team.hero.label}
          </span>
          <h1 className="text-[32px] font-semibold leading-[1.05] md:text-[56px] font-spaceGrotesk">
            {team.hero.headline}
          </h1>
          <p className="max-w-[720px] text-[16px] text-white/85 md:text-[18px]">
            {team.hero.description}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {team.hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur"
              >
                <p className="text-[22px] font-semibold">{stat.value}</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-white/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1200px] px-6 py-14 md:px-10">
        <div className="mx-auto flex max-w-[860px] flex-col items-center gap-4 text-center">
          <span className="text-[11px] uppercase tracking-[0.35em] text-primary">
            {team.intro.label}
          </span>
          <h2 className="text-[30px] font-semibold text-slate-900 md:text-[40px] font-spaceGrotesk">
            {team.intro.headline}
          </h2>
          <p className="text-[16px] text-slate-600 md:text-[18px]">
            {team.intro.description}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {team.values.map((value, index) => (
            <div
              key={value.title}
              className={`rounded-2xl bg-gradient-to-br ${
                valueAccents[index] ?? valueAccents[0]
              } p-[1px]`}
            >
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.1)]">
                <h3 className="text-[18px] font-semibold text-slate-900 font-spaceGrotesk">
                  {value.title}
                </h3>
                <p className="text-[14px] text-slate-600">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1200px] px-6 pb-16 md:px-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-[11px] uppercase tracking-[0.35em] text-primary">
            {team.membersSection.label}
          </span>
          <h2 className="text-[28px] font-semibold text-slate-900 md:text-[36px] font-spaceGrotesk">
            {team.membersSection.headline}
          </h2>
          <p className="max-w-[720px] text-[15px] text-slate-600 md:text-[17px]">
            {team.membersSection.description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {team.members.map((member) => (
            <div
              key={member.name}
              className="group w-full max-w-[380px] justify-self-center rounded-3xl bg-gradient-to-br from-primary/10 via-white to-sky-100/70 p-[1px] transition duration-300 ease-out hover:-translate-y-1 sm:max-w-none"
            >
              <div className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200/80 bg-white p-5 text-center shadow-[0_18px_36px_rgba(15,23,42,0.1)] md:p-6">
                <div className="relative mx-auto w-full overflow-hidden rounded-2xl bg-slate-50 pt-[100%]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold text-slate-900 md:text-[18px] font-spaceGrotesk">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-[13px] uppercase tracking-[0.2em] text-primary">
                    {member.role}
                  </p>
                </div>
                <p className="text-[14px] text-slate-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1200px] px-6 pb-16 md:px-10">
        <div className="rounded-[32px] bg-gradient-to-r from-primary/80 via-primaryLight/70 to-sky-500/70 p-[1px]">
          <div className="rounded-[32px] bg-[#0b1220] px-8 py-10 text-center text-white shadow-[0_24px_60px_rgba(15,23,42,0.4)] md:px-12 md:py-12">
            <span className="text-[11px] uppercase tracking-[0.35em] text-white/70">
              {team.cta.label}
            </span>
            <h2 className="mt-3 text-[28px] font-semibold md:text-[36px] font-spaceGrotesk">
              {team.cta.headline}
            </h2>
            <p className="mt-3 text-[15px] text-white/75 md:text-[17px]">
              {team.cta.description}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button href="/contact" theme="gradient">
                {team.cta.primaryCta}
              </Button>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-[15px] font-semibold text-white backdrop-blur transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/20"
              >
                {team.cta.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeamPage;
