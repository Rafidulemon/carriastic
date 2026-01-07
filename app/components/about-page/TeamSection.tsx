"use client";

import Image from "next/image";
import { useLanguage } from "../../i18n/LanguageProvider";

const TeamSection = () => {
  const { t } = useLanguage();
  const team = t.teamPage;

  return (
    <section className="relative py-14 md:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-[11px] uppercase tracking-[0.35em] text-sky-600">
            {team.membersSection.label}
          </span>
          <h2 className="text-[30px] font-semibold text-slate-900 md:text-[40px] font-spaceGrotesk">
            {team.membersSection.headline}
          </h2>
          <p className="max-w-[720px] text-[16px] text-slate-600 md:text-[18px]">
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
      </div>
    </section>
  );
};

export default TeamSection;
