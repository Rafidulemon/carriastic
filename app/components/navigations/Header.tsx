"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import LanguageToggle from "../language/LanguageToggle";
import { useLanguage } from "../../i18n/LanguageProvider";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    if (!isMenuOpen) return;
    const { style } = document.body;
    const previousOverflow = style.overflow;
    style.overflow = "hidden";
    return () => {
      style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  const navItems = [
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/ai", label: t.nav.ai },
    { href: "/products", label: t.nav.products },
    { href: "/team", label: t.nav.team },
    { href: "/blogs", label: t.nav.blog },
    { href: "/career", label: t.nav.career },
  ];

  return (
    <>
      <header className="fixed top-0 z-[100] w-full bg-white/95 backdrop-blur-xl shadow-[0_14px_30px_rgba(15,23,42,0.08)]">
        <div className="relative mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-4 md:h-20 md:px-8">
          <div className="flex items-center gap-3">
            <button
              className="text-primary md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={20} />}
            </button>
            <Link href="/" className="hidden items-center md:flex">
              <Image
                src="/images/logo_main_slogan.png"
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
              src="/images/logo_main_slogan.png"
              alt="Carriastic logo"
              width={110}
              height={36}
              className="h-auto w-[110px]"
              priority
            />
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-6 text-[15px] font-medium text-slate-600 md:flex md:gap-6">
            {navItems.map((navItem) => (
              <Link
                key={navItem.href}
                href={navItem.href}
                className={`relative inline-flex items-center transition-colors ${
                  pathname === navItem.href
                    ? "text-primary after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-gradient-to-r after:from-primary after:via-[#6d36dc] after:to-[#4b50e6]"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {navItem.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageToggle />
            <Link
              href="/contact"
              className="cursor-pointer rounded-[10px] bg-gradient-to-r from-primary via-[#6d36dc] to-[#4b50e6] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(76,49,201,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(76,49,201,0.32)]"
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[110] transition md:hidden ${
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-slate-900/20"
          onClick={toggleMenu}
          aria-hidden="true"
        />
        <div
          className={`absolute left-0 top-0 flex h-full w-[80%] max-w-[360px] flex-col overflow-y-auto bg-white shadow-2xl transition-transform duration-300 sm:w-[70%] ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/images/logo_main.png"
                alt="Carriastic logo"
                width={90}
                height={34}
                className="h-auto w-[90px]"
              />
            </Link>
            <button
              className="text-primary"
              onClick={toggleMenu}
              aria-label="Close Menu"
            >
              <FaTimes size={20} />
            </button>
          </div>

          <nav className="flex flex-col gap-6 px-6 py-6 text-[15px] font-medium text-slate-700">
            {navItems.map((navItem) => (
              <Link
                key={navItem.href}
                href={navItem.href}
                onClick={() => setIsMenuOpen(false)}
                className={`relative inline-flex items-center transition-colors ${
                  pathname === navItem.href
                    ? "text-primary after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-gradient-to-r after:from-primary after:via-[#6d36dc] after:to-[#4b50e6]"
                    : "text-slate-700 hover:text-slate-900"
                }`}
              >
                {navItem.label}
              </Link>
            ))}
          </nav>

          <div className="px-6 pb-4">
            <LanguageToggle />
          </div>

          <div className="px-6 pb-8">
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="flex w-full items-center justify-center rounded-[10px] bg-gradient-to-r from-[#5b2ae6] via-[#6d36dc] to-[#4b50e6] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(76,49,201,0.28)]"
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
