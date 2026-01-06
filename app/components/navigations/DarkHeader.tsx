"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LanguageToggle from "../language/LanguageToggle";
import { useLanguage } from "../../i18n/LanguageProvider";
import MobileSideBar from "./MobileSideBar";

const DarkHeader = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

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

  const navItems = [
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/ai", label: t.nav.ai },
    { href: "/products", label: t.nav.products },
    { href: "/team", label: t.nav.team },
    { href: "/blogs", label: t.nav.blog },
    { href: "/career", label: t.nav.career },
  ];

  const navActiveClass =
    "text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-white/80";
  const navInactiveClass = "text-white/70 hover:text-white";

  return (
    <>
      <header className="header-reveal relative">
        <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-4 md:h-20 md:px-8">
          <div className="flex items-center gap-3">
            <button
              className="text-white md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={20} />}
            </button>
            <Link href="/" className="hidden items-center md:flex">
              <Image
                src="/images/white_logo_slogan.png"
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
              src="/images/white_logo_slogan.png"
              alt="Carriastic logo"
              width={110}
              height={36}
              className="h-auto w-[110px]"
              priority
            />
          </Link>
          <div className="md:hidden">
            <LanguageToggle theme="dark" />
          </div>
          <nav className="hidden flex-1 items-center justify-center gap-6 text-[15px] font-medium text-white/80 md:flex md:gap-6">
            {navItems.map((navItem) => (
              <Link
                key={navItem.href}
                href={navItem.href}
                className={`relative inline-flex items-center transition-colors ${
                  pathname === navItem.href ? navActiveClass : navInactiveClass
                }`}
              >
                {navItem.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageToggle theme="dark" />
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

export default DarkHeader;
