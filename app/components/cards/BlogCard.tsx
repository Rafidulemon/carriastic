import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

type BlogCardProps = {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  link: string;
  ctaLabel: string;
  accent?: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  date,
  description,
  imageUrl,
  link,
  ctaLabel,
  accent = "from-[#ede9fe]/70 via-white to-[#dbeafe]/70",
}) => {
  return (
    <div className={`rounded-[28px] bg-gradient-to-br ${accent} p-[1px]`}>
      <div className="flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(min-width: 1024px) 360px, 90vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent" />
          <span className="absolute bottom-4 left-4 rounded-full border border-white/60 bg-white/90 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-slate-700">
            {date}
          </span>
        </div>
        <div className="flex h-full flex-col gap-3 p-6">
          <h3 className="text-[18px] font-semibold text-slate-900 font-spaceGrotesk">
            {title}
          </h3>
          <p className="text-[14px] text-slate-600">{description}</p>
          <Link
            href={link}
            className="mt-auto inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.3em] text-primary"
            aria-label={`${ctaLabel}: ${title}`}
          >
            {ctaLabel}
            <FiArrowUpRight className="text-[14px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
