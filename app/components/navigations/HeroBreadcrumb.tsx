"use client";

import { Fragment, ReactNode } from "react";
import Link from "next/link";
import { FaGreaterThan } from "react-icons/fa";

type HeroBreadcrumbItem = {
  label: ReactNode;
  href?: string;
  onClick?: () => void;
};

type HeroBreadcrumbProps = {
  items: HeroBreadcrumbItem[];
  className?: string;
};

const HeroBreadcrumb = ({ items, className }: HeroBreadcrumbProps) => {
  const baseClassName =
    "flex flex-row gap-2 rounded-[8px] bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 px-2 py-1 text-[12px] uppercase tracking-[0.2em] text-white/90 shadow-[0_10px_22px_rgba(249,115,22,0.35)]";
  const clickableClassName =
    "inline-flex w-fit cursor-pointer hover:scale-105 hover:font-bold";
  const staticClassName = "inline-flex w-fit";

  return (
    <div className={`${baseClassName}${className ? ` ${className}` : ""}`}>
      {items.map((item, index) => (
        <Fragment key={`hero-breadcrumb-${index}`}>
          {item.href ? (
            <Link href={item.href} className={clickableClassName}>
              {item.label}
            </Link>
          ) : item.onClick ? (
            <button
              type="button"
              onClick={item.onClick}
              className={`${clickableClassName} border-0 bg-transparent p-0`}
            >
              {item.label}
            </button>
          ) : (
            <span className={staticClassName}>{item.label}</span>
          )}
          {index < items.length - 1 && <FaGreaterThan className="mt-1" />}
        </Fragment>
      ))}
    </div>
  );
};

export default HeroBreadcrumb;
