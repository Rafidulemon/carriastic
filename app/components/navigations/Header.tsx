"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="fixed top-0 z-50 py-6 md:py-3 px-10 w-screen flex items-center justify-between bg-white shadow-md">
      <div className="hidden md:block" onClick={()=> router.push("/")}>
        <Image
          src="/images/logo_main_slogan.png"
          alt="logo"
          width={100}
          height={37}
          className="cursor-pointer"
        />
      </div>
      <div className="md:hidden absolute left-1/2 transform -translate-x-1/2" onClick={()=> router.push("/")}>
        <Image
          src="/images/logo_main_slogan.png"
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
            { href: "/team", label: "Team" },
            { href: "/blogs", label: "Blogs" },
            { href: "/career", label: "Career" },
            { href: "/contact", label: "Contact" },
            { href: "/cv-builder", label: "CV Builder" },            
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
        className="md:hidden text-primary absolute left-6"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={20} />}
      </button>

      <div
        className={`md:hidden fixed top-0 left-0 h-full bg-neutral-200 z-50 transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } w-[70%]`}
      >
        <button
          className="absolute top-4 right-4 text-primary"
          onClick={toggleMenu}
          aria-label="Close Menu"
        >
          <FaBars size={20} />
        </button>

        <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 top-4">
          <Image
            src="/images/logo_main.png"
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
              { href: "/team", label: "Team" },
              { href: "/blogs", label: "Blogs" },
              { href: "/career", label: "Career" },
              { href: "/contact", label: "Contact" },
              { href: "/cv-builder", label: "CV Builder" }, 
            ].map((navItem) => (
              <Link
                key={navItem.href}
                href={navItem.href}
                onClick={() => setIsMenuOpen(false)}
                className={`hover:text-primary hover:font-semibold ${
                  pathname === navItem.href ? "text-primary font-bold" : ""
                }`}
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
