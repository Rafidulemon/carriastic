"use client";

import Image from "next/image";
import Link from "next/link";
import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import TextInput from "../../components/inputs/TextInput";
import EmailInput from "../../components/inputs/EmailInput";
import TextArea from "../../components/inputs/TextArea";
import Button from "../../components/button/Button";
import { useLanguage } from "../../i18n/LanguageProvider";

const ContactPage = () => {
  const { t } = useLanguage();
  const contact = t.contactPage;
  const preferEmailText = contact.form.preferEmail.replace(
    "{email}",
    contact.contactEmail
  );

  const cardStyles = {
    email: {
      icon: <FiMail />,
      accent: "from-primary/20 via-[#a78bfa]/25 to-[#38bdf8]/40",
    },
    phone: {
      icon: <FiPhone />,
      accent: "from-primary/15 via-[#22c55e]/25 to-[#99f6e4]/45",
    },
    office: {
      icon: <FiMapPin />,
      accent: "from-primary/15 via-[#f59e0b]/30 to-[#fb7185]/35",
    },
  } as const;

  return (
    <div className="relative w-full overflow-hidden bg-white">
      <section className="relative overflow-hidden bg-[radial-gradient(80%_60%_at_50%_0%,#f3e8ff_0%,#f8f7ff_45%,#ffffff_100%)]">
        <div className="pointer-events-none absolute -left-20 top-8 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-6 py-14 md:px-10 md:py-20 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <span className="inline-flex w-fit self-center rounded-full border border-primary/20 bg-white/80 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-primary lg:self-start">
              {contact.hero.label}
            </span>
            <h1 className="text-[32px] font-semibold leading-[1.05] text-slate-900 md:text-[52px] font-spaceGrotesk">
              {contact.hero.headline}
            </h1>
            <p className="text-[16px] text-slate-600 md:text-[18px]">
              {contact.hero.description}
            </p>
            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              {contact.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-primary/20 bg-white px-4 py-2 text-[12px] uppercase tracking-[0.2em] text-primary shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <Button href="#contact-form" theme="gradient">
                {contact.hero.primaryCta}
              </Button>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-primary/25 bg-white px-6 py-3 text-[15px] font-semibold text-primary shadow-[0_12px_24px_rgba(55,0,84,0.12)] transition duration-200 ease-out hover:-translate-y-0.5"
              >
                {contact.hero.secondaryCta}
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] rounded-[32px] border border-white/80 bg-white/90 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.18)] backdrop-blur">
              <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-primary/15 blur-3xl" />
              <div className="absolute -bottom-16 -left-12 h-36 w-36 rounded-full bg-sky-400/20 blur-3xl" />
              <Image
                src="/gifs/contact_gif.gif"
                alt={contact.hero.imageAlt}
                width={520}
                height={420}
                className="h-auto w-full"
                priority
              />
              <div className="mt-5 rounded-2xl border border-primary/15 bg-white/80 p-4 text-left">
                <div className="flex items-center gap-3 text-primary">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <FiClock />
                  </span>
                  <div>
                    <p className="text-[12px] uppercase tracking-[0.28em] text-slate-500">
                      {contact.hoursLabel}
                    </p>
                    <p className="text-[14px] font-semibold text-slate-900">
                      {contact.hoursValue}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1200px] px-6 py-14 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="flex flex-col gap-6">
            <div className="grid gap-4">
              {contact.cards.map((card) => {
                const styles = cardStyles[card.id as keyof typeof cardStyles];

                return (
                  <div
                    key={card.id}
                    className={`rounded-2xl bg-gradient-to-br ${styles.accent} p-[1px]`}
                  >
                    <div className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.1)]">
                      <div className="flex items-center gap-3 text-primary">
                        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-white text-[18px] shadow-[0_12px_24px_rgba(55,0,84,0.16)]">
                          {styles.icon}
                        </span>
                        <div>
                          <p className="text-[12px] uppercase tracking-[0.3em] text-slate-500">
                            {card.title}
                          </p>
                          <p className="text-[16px] font-semibold text-slate-900">
                            {card.detail}
                          </p>
                        </div>
                      </div>
                      <p className="text-[14px] text-slate-600">
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="rounded-2xl border border-primary/10 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
              <p className="text-[12px] uppercase tracking-[0.3em] text-slate-500">
                {contact.addressLabel}
              </p>
              <p className="mt-2 text-[15px] font-semibold text-slate-900">
                {contact.contactAddress}
              </p>
            </div>
          </div>

          <div
            id="contact-form"
            className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/90 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.18)] backdrop-blur md:p-10"
          >
            <div className="absolute -right-16 -top-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />

            <div className="relative flex flex-col gap-3">
              <span className="text-[11px] uppercase tracking-[0.4em] text-primary/80">
                {contact.form.kicker}
              </span>
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-[26px] font-semibold text-slate-900 md:text-[32px] font-spaceGrotesk">
                    {contact.form.headline}
                  </h2>
                  <p className="mt-2 text-[14px] text-slate-600 md:text-[15px]">
                    {contact.form.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap rounded-full border border-primary/20 bg-white/80 px-3 py-1 text-[11px] font-semibold text-primary shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-green-600 shadow-[0_0_8px_rgba(76,49,201,0.5)]" />
                  {contact.form.responseTime}
                </div>
              </div>
            </div>

            <form
              className="relative mt-6 grid gap-4 md:gap-5"
              aria-label={contact.form.formAriaLabel}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <EmailInput
                  label={contact.form.emailLabel}
                  placeholder={contact.form.emailPlaceholder}
                  className="w-full"
                />
                <TextInput
                  label={contact.form.subjectLabel}
                  placeholder={contact.form.subjectPlaceholder}
                  className="w-full"
                />
              </div>
              <TextArea
                label={contact.form.messageLabel}
                height="180px"
                placeholder={contact.form.messagePlaceholder}
                className="w-full"
              />
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <p className="text-[12px] text-slate-500">{preferEmailText}</p>
                <Button
                  className="w-full"
                  isWidthFull
                  theme="gradient"
                  type="submit"
                >
                  <span>{contact.form.submit}</span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
