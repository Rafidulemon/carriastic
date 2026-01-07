"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import LanguageToggle from "../language/LanguageToggle";
import { useLanguage } from "../../i18n/LanguageProvider";
import MobileSideBar from "./MobileSideBar";
import { getNavItems } from "@/app/constants/navItems";

type HeaderProps = {
  isDark?: boolean;
};

const Header = ({ isDark = false }: HeaderProps) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isServiceRoute =
    pathname === "/services" || pathname.startsWith("/services/");
  const isContactRoute = pathname === "/contact";
  const isAboutRoute = pathname === "/about" || pathname.startsWith("/about/");
  const [isHeroActive, setIsHeroActive] = useState(
    pathname === "/" || isServiceRoute || isContactRoute || isAboutRoute
  );
  const { t } = useLanguage();
  const isDarkHeader = isDark || isHeroActive;

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (!isMenuOpen) return;
    const { style } = document.body;
    const previousOverflow = style.overflow;
    style.overflow = "hidden";
    return () => {
      style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isDark) return;
    const heroId =
      pathname === "/"
        ? "home-hero"
        : isServiceRoute
          ? "service-hero"
          : isContactRoute
            ? "contact-hero"
            : isAboutRoute
              ? "about-hero"
              : null;
    if (!heroId) {
      setIsHeroActive(false);
      return;
    }

    const heroSection = document.getElementById(heroId);
    if (!heroSection) {
      setIsHeroActive(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroActive(entry.isIntersecting);
      },
      { threshold: 0.2, rootMargin: "-80px 0px 0px 0px" }
    );

    observer.observe(heroSection);
    return () => observer.disconnect();
  }, [isAboutRoute, isContactRoute, isDark, isServiceRoute, pathname]);

  const navItems = getNavItems(t);

  const heroLogoSrc = isDarkHeader
    ? "/images/white_logo_slogan.png"
    : "/images/logo_main_slogan.png";

  const headerPositionClass = isDark ? "relative" : "fixed top-0";
  const headerThemeClass = isDark
    ? ""
    : isHeroActive
      ? "home-hero-header"
      : "bg-white/95 backdrop-blur-xl shadow-[0_14px_30px_rgba(15,23,42,0.08)]";
  const navActiveClass = isDarkHeader
    ? "text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-white/80"
    : "text-primary after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-gradient-to-r after:from-primary after:via-[#6d36dc] after:to-[#4b50e6]";
  const navInactiveClass = isDarkHeader
    ? "text-white/70 hover:text-white"
    : "text-slate-600 hover:text-slate-900";

  if (
    !isDark &&
    (pathname === "/" || isServiceRoute || isContactRoute || isAboutRoute) &&
    isHeroActive
  ) {
    return null;
  }

  return (
    <>
      <header
        className={`header-reveal ${headerPositionClass} z-[100] w-full transition-colors duration-300 ${headerThemeClass}`}
      >
        <div className="relative mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-4 md:h-20 md:px-8">
          <div className="flex items-center gap-3">
            <button
              className={`md:hidden ${isDarkHeader ? "text-white" : "text-primary"}`}
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={20} />}
            </button>
            <Link href="/" className="hidden items-center md:flex">
              <Image
                src={heroLogoSrc}
                alt="Carriastic logo"
                width={120}
                height={40}
                className="h-auto w-[110px] md:w-[130px]"
                priority
              />
            </Link>
          </div>
          <Link
            href="/"
            className="absolute left-1/2 flex -translate-x-1/2 items-center md:hidden"
          >
            <Image
              src={heroLogoSrc}
              alt="Carriastic logo"
              width={110}
              height={36}
              className="h-auto w-[110px]"
              priority
            />
          </Link>
          <div className="md:hidden">
            <LanguageToggle theme={isDarkHeader ? "dark" : "light"} />
          </div>
          <nav
            className={`hidden flex-1 items-center justify-center gap-6 text-[15px] font-medium md:flex md:gap-6 ${
              isDarkHeader ? "text-white/80" : "text-slate-600"
            }`}
          >
            {navItems.map((navItem) => {
              const isActive =
                pathname === navItem.href ||
                (navItem.href === "/services" &&
                  pathname.startsWith("/services/"));
              return (
                <Link
                  key={navItem.href}
                  href={navItem.href}
                  className={`relative inline-flex items-center transition-colors ${
                    isActive ? navActiveClass : navInactiveClass
                  }`}
                >
                  {navItem.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageToggle theme={isDarkHeader ? "dark" : "light"} />
            <Link
              href="/contact"
              className="cursor-pointer rounded-[10px] bg-gradient-to-r from-primary via-[#6d36dc] to-[#4b50e6] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(76,49,201,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(76,49,201,0.32)]"
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>
      </header>

      <MobileSideBar
        isMenuOpen={isMenuOpen}
        navItems={navItems}
        closeMenu={closeMenu}
        contactLabel={t.nav.contact}
      />
    </>
  );
};

export default Header;
