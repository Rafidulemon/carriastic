"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import { usePathname } from "next/navigation";
import EmailInput from "../inputs/EmailInput";
import TextInput from "../inputs/TextInput";
import TextArea from "../inputs/TextArea";
import Button from "../button/Button";
import { useLanguage } from "../../i18n/LanguageProvider";

const Footer = () => {
  const pathname = usePathname();
  const { t } = useLanguage();
  const footer = t.footer;
  const contactEmail = "info@carriastic.com";
  const contactPhone = "+8801884517187";
  const contactAddress = footer.contactInfo.address;
  const preferEmailText = footer.contactForm.preferEmail.replace(
    "{email}",
    contactEmail
  );
  return (
    <div className="w-full flex flex-col gap-0">
      {pathname !== "/contact" && (
        <div className="w-full flex flex-col items-center justify-center relative">
          <div className="w-full h-full grid grid-cols-1 gap-6 bg-white md:grid-cols-2">
            <div className="w-full flex flex-col items-center justify-start gap-6 p-4 sm:p-6">
              <div className="w-full md:w-[70%] h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <iframe
                  title={footer.mapTitle}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.8278657298845!2d90.40204921543524!3d23.79564059295706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70bdff8f8f5%3A0xe3d29b979b1e9dcf!2sYour%20Company%20Location!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>

              <div className="w-full md:w-[70%] flex flex-col gap-4">
                <div className="w-full flex flex-col items-start gap-2 sm:flex-row sm:items-start sm:gap-3">
                  <div className="flex gap-1">
                    <span className="font-bold text-primary">📍</span>
                    <span className="font-bold text-primary">
                      {footer.contactInfo.addressLabel}:
                    </span>
                  </div>

                  <p className="text-gray-600 break-words">{contactAddress}</p>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                  <span className="font-bold text-primary">
                    📧 {footer.contactInfo.emailLabel}:
                  </span>
                  <p className="text-gray-600 break-words">{contactEmail}</p>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                  <span className="font-bold text-primary">
                    📞 {footer.contactInfo.phoneLabel}:
                  </span>
                  <p className="text-gray-600 break-words">{contactPhone}</p>
                </div>
              </div>
            </div>

            {/* Right Section: Input Form */}
            <div className="w-full flex flex-col items-center justify-center p-4 md:p-6 relative">
              <div className="relative w-full md:w-[85%] lg:w-[80%] overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.25)] backdrop-blur-xl md:p-10">
                <div className="absolute -right-16 -top-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
                <div className="absolute -bottom-20 -left-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />

                <div className="relative flex flex-col gap-3">
                  <span className="text-xs uppercase tracking-[0.4em] text-primary/80">
                    {footer.contactForm.kicker}
                  </span>
                  <div className="flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                        {footer.contactForm.headline}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">
                        {footer.contactForm.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 whitespace-nowrap rounded-full border border-primary/20 bg-white/70 px-3 py-1 text-xs font-semibold text-primary shadow-sm">
                      <span className="h-2 w-2 rounded-full bg-green-700 shadow-[0_0_8px_rgba(76,49,201,0.6)]" />
                      {footer.contactForm.responseTime}
                    </div>
                  </div>
                </div>

                <form
                  className="relative mt-6 grid gap-4 md:gap-5"
                  aria-label={footer.contactForm.formAriaLabel}
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    <EmailInput
                      label={footer.contactForm.emailLabel}
                      placeholder={footer.contactForm.emailPlaceholder}
                      className="w-full"
                    />
                    <TextInput
                      label={footer.contactForm.subjectLabel}
                      placeholder={footer.contactForm.subjectPlaceholder}
                      className="w-full"
                    />
                  </div>
                  <TextArea
                    label={footer.contactForm.messageLabel}
                    height="160px"
                    placeholder={footer.contactForm.messagePlaceholder}
                    className="w-full"
                  />
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <p className="text-xs text-slate-500">
                      {preferEmailText}
                    </p>
                    <Button
                      className="w-full"
                      isWidthFull
                      theme="gradient"
                      type="submit"
                    >
                      <span>{footer.contactForm.submit}</span>
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="relative w-full overflow-hidden bg-[#130c21] text-white">
        <div className="absolute inset-0">
          <div className="absolute -right-24 -top-32 h-72 w-72 rounded-full bg-primary blur-3xl motion-safe:animate-pulse" />
          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-primary blur-3xl motion-safe:animate-pulse" />
          <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,_transparent_1px),linear-gradient(90deg,_rgba(255,255,255,0.06)_1px,_transparent_1px)] bg-[size:28px_28px]" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-6 py-16 md:py-20 font-spaceGrotesk">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <Link href="/" aria-label="Carriastic home">
                  <Image
                    src="/images/white_logo.png"
                    alt="Carriastic"
                    width={180}
                    height={65}
                    className="h-auto w-[130px] cursor-pointer"
                  />
                </Link>
              </div>

              <div className="w-full md:w-[360px] rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-sm text-slate-300">
                  {footer.newsletter.description}
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="relative flex-1">
                    <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="email"
                      aria-label={footer.newsletter.inputAriaLabel}
                      placeholder={footer.newsletter.placeholder}
                      className="w-full rounded-xl border border-white/10 bg-[#0b1220] py-2.5 pl-10 pr-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/30"
                    />
                  </div>
                  <Link
                    href="/contact"
                    className="w-full cursor-pointer rounded-[10px] bg-gradient-to-r from-primary via-[#6d36dc] to-[#4b50e6] px-5 py-2.5 text-center text-sm font-semibold text-white shadow-[0_12px_24px_rgba(76,49,201,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(76,49,201,0.32)] sm:w-auto"
                  >
                    {footer.newsletter.cta}
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
              <div className="flex flex-col gap-4 text-slate-300">
                <span className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">
                  {footer.sections.office}
                </span>
                <p className="text-base text-white">
                  {contactAddress}
                </p>
                <div className="flex flex-col gap-1 text-sm">
                  <span>{contactEmail}</span>
                  <span>{contactPhone}</span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">
                  {footer.sections.explore}
                </span>
                <nav className="flex flex-col gap-3 text-sm text-slate-300">
                  {[
                    { href: "/", label: footer.links.home },
                    { href: "/about", label: footer.links.about },
                    { href: "/services", label: footer.links.services },
                    { href: "/team", label: footer.links.team },
                  ].map((navItem) => (
                    <Link
                      key={navItem.href}
                      href={navItem.href}
                      className="transition hover:text-white"
                    >
                      {navItem.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">
                  {footer.sections.company}
                </span>
                <nav className="flex flex-col gap-3 text-sm text-slate-300">
                  {[
                    { href: "/blogs", label: footer.links.blogs },
                    { href: "/career", label: footer.links.career },
                    { href: "/contact", label: footer.links.contact },
                  ].map((navItem) => (
                    <Link
                      key={navItem.href}
                      href={navItem.href}
                      className="transition hover:text-white"
                    >
                      {navItem.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">
                  {footer.sections.connect}
                </span>
                <p className="text-sm text-slate-300">
                  {footer.connect.description}
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=100088397602087"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-200 transition hover:border-cyan-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/50"
                    aria-label="Facebook"
                  >
                    <FaFacebookF size={18} />
                  </a>
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sky-200 transition hover:border-sky-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/50"
                    aria-label="Twitter"
                  >
                    <FaTwitter size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/90535817"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-blue-200 transition hover:border-blue-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/50"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn size={18} />
                  </a>
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-rose-200 transition hover:border-rose-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/50"
                    aria-label="YouTube"
                  >
                    <FaYoutube size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-center text-xs text-slate-400 md:flex-row md:items-center md:justify-between md:text-left">
            <span>{footer.bottom.copyright}</span>
            <span>{footer.bottom.tagline}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
