"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="py-6 px-10 w-screen flex flex-row justify-between">
      <Image
        src="/images/logo_main.png"
        alt="logo"
        width={100}
        height={37}
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />
      <nav className="flex flex-row md:gap-6 lg:gap-10 text-black mt-2">
        {[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
          { href: "/services", label: "Services" },
          { href: "/clients", label: "Clients" },
          { href: "/blogs", label: "Blogs" },
          { href: "/career", label: "Career" },
          { href: "/contact", label: "Contact" },
        ].map((navItem) => (
          <Link
            key={navItem.href}
            href={navItem.href}
            className={`hover:text-primary hover:font-[700] hover:underline ${
              pathname === navItem.href ? "text-primary font-bold" : ""
            }`}
          >
            {navItem.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Header;
