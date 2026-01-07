"use client";

import { useState } from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "../../components/inputs/TextInput";
import EmailInput from "../../components/inputs/EmailInput";
import TextArea from "../../components/inputs/TextArea";
import SelectInput from "../../components/inputs/SelectInput";
import FileInput from "../../components/inputs/FileInput";
import Button from "../../components/button/Button";
import Header from "../../components/navigations/Header";
import { useLanguage } from "../../i18n/LanguageProvider";
import contactAnimation from "@/public/gifs/jsons/contact.json";
import mapAnimation from "@/public/gifs/jsons/map.json";
import FaqSection from "@/app/components/home-page/FaqSection";
import HeroBreadcrumb from "../../components/navigations/HeroBreadcrumb";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/app/lib/contact-form-schema";

const ContactPage = () => {
  const { t } = useLanguage();
  const contact = t.contactPage;
  const preferEmailText = contact.form.preferEmail.replace(
    "{email}",
    contact.contactEmail
  );
  const officeMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    contact.contactAddress
  )}`;

  const socialIconMap = {
    facebook: {
      icon: <FaFacebookF />,
      className: "text-cyan-200",
    },
    twitter: {
      icon: <FaTwitter />,
      className: "text-sky-200",
    },
    linkedin: {
      icon: <FaLinkedinIn />,
      className: "text-blue-200",
    },
    youtube: {
      icon: <FaYoutube />,
      className: "text-rose-200",
    },
  } as const;

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

  const [submissionMessage, setSubmissionMessage] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmissionMessage(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        const message = data?.error ?? contact.form.errorMessage;
        throw new Error(message);
      }

      setSubmissionMessage({
        type: "success",
        message: contact.form.successMessage,
      });
      reset();
    } catch (error) {
      setSubmissionMessage({
        type: "error",
        message:
          error instanceof Error ? error.message : contact.form.errorMessage,
      });
    }
  };

  return (
    <div className="w-full bg-white flex flex-col gap-6 md:gap-10">
      <section
        id="contact-hero"
        className="home-hero relative flex min-h-[100svh] flex-col overflow-hidden pb-10 md:min-h-screen"
      >
        <div className="pointer-events-none absolute inset-0 home-grid" />
        <div className="home-orb home-orb-two" />
        <div className="home-orb home-orb-three" />
        <Header isDark />

        <div className="hero-smooth-reveal mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center gap-10 px-4 pt-6 sm:gap-12 sm:px-6 sm:pt-8 md:gap-14 md:px-8 lg:flex-row lg:items-center">
          <div className="flex flex-1 flex-col items-center gap-5 text-center lg:items-start lg:text-left">
            <HeroBreadcrumb
              items={[
                { label: contact.hero.home, href: "/" },
                { label: contact.hero.label },
              ]}
            />
            <h1 className="text-[30px] font-semibold leading-[1.1] text-white drop-shadow-[0_14px_30px_rgba(9,0,16,0.45)] md:text-[60px] font-spaceGrotesk">
              {contact.hero.headline}
            </h1>
            <p className="max-w-[560px] text-[16px] leading-[1.7] text-white/70">
              {contact.hero.description}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-white/70 lg:justify-start">
              {contact.socials.map((social) => {
                const socialIcon =
                  socialIconMap[social.id as keyof typeof socialIconMap];

                if (!socialIcon) {
                  return null;
                }

                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-[18px] transition duration-200 hover:-translate-y-[2px] hover:border-white/60 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60 ${socialIcon.className}`}
                  >
                    {socialIcon.icon}
                  </a>
                );
              })}
            </div>
            <div className="flex w-full flex-col items-stretch justify-center gap-3 pt-2 sm:flex-row sm:w-auto">
              <Button
                href="#contact-form"
                theme="gradient"
                isWidthFull
                className="w-full sm:w-auto"
              >
                {contact.hero.primaryCta}
              </Button>
              <Link
                href="/services"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-[22px] py-[12px] text-[14px] font-semibold text-white transition duration-200 ease-out hover:-translate-y-[2px] hover:bg-white/20 hover:shadow-[0_18px_36px_rgba(5,0,12,0.4)] sm:w-auto"
              >
                {contact.hero.secondaryCta}
              </Link>
            </div>
          </div>

          <div className="relative flex-1">
            <div className="relative mx-auto w-full max-w-[480px]">
              <div>
                <Lottie
                  animationData={contactAnimation}
                  loop
                  autoplay
                  className="h-[200px] md:h-[460px] w-full"
                  aria-label={contact.hero.imageAlt}
                />      
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1200px] px-6 py-14 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-[11px] uppercase tracking-[0.4em] text-primary/80">
                {contact.details.label}
              </span>
              <h2 className="text-[26px] font-semibold text-slate-900 md:text-[32px] font-spaceGrotesk">
                {contact.details.headline}
              </h2>
              <p className="text-[14px] text-slate-600 md:text-[15px]">
                {contact.details.description}
              </p>
            </div>

            <div className="grid gap-4">
              {contact.cards.map((card) => {
                const styles = cardStyles[card.id as keyof typeof cardStyles];
                const isOfficeCard = card.id === "office";

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
                      {isOfficeCard && (
                        <a
                          href={officeMapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={contact.addressLabel}
                          className="group relative mt-3 overflow-hidden rounded-2xl border border-primary/10 bg-slate-50"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/15 opacity-70 transition-opacity duration-200 group-hover:opacity-100" />
                          <Lottie
                            animationData={mapAnimation}
                            loop
                            autoplay
                            className="h-[220px] w-full"
                            aria-label={contact.addressLabel}
                          />
                          <div className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary shadow-md">
                            {contact.addressLabel}
                          </div>
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
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
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="grid gap-4 md:grid-cols-2">
                <TextInput
                  label={contact.form.nameLabel}
                  placeholder={contact.form.namePlaceholder}
                  className="w-full"
                  isRequired
                  name="name"
                  register={register}
                  error={errors.name}
                />
                <EmailInput
                  label={contact.form.emailLabel}
                  placeholder={contact.form.emailPlaceholder}
                  className="w-full"
                  isRequired
                  name="email"
                  register={register}
                  error={errors.email}
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <TextInput
                  label={contact.form.companyLabel}
                  placeholder={contact.form.companyPlaceholder}
                  className="w-full"
                  name="company"
                  register={register}
                  error={errors.company}
                />
                <TextInput
                  label={contact.form.phoneLabel}
                  placeholder={contact.form.phonePlaceholder}
                  className="w-full"
                  isRequired
                  name="phone"
                  register={register}
                  error={errors.phone}
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <SelectInput
                  label={contact.form.serviceLabel}
                  placeholder={contact.form.servicePlaceholder}
                  options={contact.form.serviceOptions}
                  className="w-full"
                  name="service"
                  register={register}
                  error={errors.service}
                />
                <SelectInput
                  label={contact.form.budgetLabel}
                  placeholder={contact.form.budgetPlaceholder}
                  options={contact.form.budgetOptions}
                  className="w-full"
                  name="budget"
                  register={register}
                  error={errors.budget}
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <SelectInput
                  label={contact.form.timelineLabel}
                  placeholder={contact.form.timelinePlaceholder}
                  options={contact.form.timelineOptions}
                  className="w-full"
                  name="timeline"
                  register={register}
                  error={errors.timeline}
                />
                <TextInput
                  label={contact.form.subjectLabel}
                  placeholder={contact.form.subjectPlaceholder}
                  className="w-full"
                  name="subject"
                  register={register}
                  error={errors.subject}
                />
              </div>
              <TextArea
                label={contact.form.messageLabel}
                height="180px"
                placeholder={contact.form.messagePlaceholder}
                className="w-full"
                isRequired
                name="message"
                register={register}
                error={errors.message}
              />
              <div className="grid gap-2">
                <FileInput label={contact.form.fileLabel} className="w-full" />
                <p className="text-[12px] text-slate-500">
                  {contact.form.fileHelper}
                </p>
              </div>
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <p className="text-[12px] text-slate-500">{preferEmailText}</p>
                <Button
                  className="w-full"
                  isWidthFull
                  theme="gradient"
                  type="submit"
                >
                  <span>
                    {isSubmitting ? contact.form.sending : contact.form.submit}
                  </span>
                </Button>
              </div>
              {submissionMessage && (
                <div
                  className={`rounded-2xl border px-4 py-3 text-[13px] ${
                    submissionMessage.type === "success"
                      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                      : "border-rose-200 bg-rose-50 text-rose-700"
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {submissionMessage.message}
                </div>
              )}
            </form>
          </div>
        </div>
        <div className="mt-6 md:mt-10">
          <FaqSection />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
