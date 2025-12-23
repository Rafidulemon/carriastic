"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="py-6 md:py-3 px-10 w-screen flex items-center justify-between relative">
      <div className="hidden md:block">
        <Image
          src="/images/white_logo_slogan.png"
          alt="logo"
          width={120}
          height={47}
          className="cursor-pointer"
        />
      </div>
      <div className="md:hidden absolute left-1/2 transform -translate-x-1/2">
        <Image
          src="/images/white_logo_slogan.png"
          alt="logo"
          width={80}
          height={30}
          className="cursor-pointer"
        />
      </div>

      <div className="hidden md:flex flex-row gap-16">
        <nav className="flex flex-row md:gap-6 lg:gap-10 text-black">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/services", label: "Services" },
            { href: "/ai", label: "AI" },
            { href: "/clients", label: "Clients" },
            { href: "/blogs", label: "Blogs" },
            { href: "/career", label: "Career" },
            { href: "/contact", label: "Contact" },
          ].map((navItem) => (
            <Link
              key={navItem.href}
              href={navItem.href}
              className={`hover:text-primary hover:font-semibold hover:underline ${
                pathname === navItem.href ? "text-primary font-bold" : ""
              }`}
            >
              {navItem.label}
            </Link>
          ))}
        </nav>
      </div>

      <button
        className="md:hidden text-white absolute left-6"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={20} />}
      </button>

      <div
        className={`z-50 md:hidden fixed top-0 left-0 h-full bg-gradient-to-tr from-purple-400 to-purple-900 transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } w-[70%]`}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={toggleMenu}
          aria-label="Close Menu"
        >
          <FaBars size={20} />
        </button>

        <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 top-4">
          <Image
            src="/images/white_logo_slogan.png"
            alt="logo"
            width={80}
            height={30}
            className="cursor-pointer"
          />
        </div>

        <div className="md:hidden w-full h-full flex flex-col justify-between">
          <nav className="flex flex-col items-center justify-center space-y-6 py-16">
            {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/services", label: "Services" },
            { href: "/ai", label: "AI" },
            { href: "/clients", label: "Clients" },
            { href: "/blogs", label: "Blogs" },
            { href: "/career", label: "Career" },
            { href: "/contact", label: "Contact" },
            ].map((navItem) => (
              <Link
                key={navItem.href}
                href={navItem.href}
                onClick={() => setIsMenuOpen(false)}
                className={`hover:text-primary hover:font-semibold text-white mt-10`}
              >
                {navItem.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
