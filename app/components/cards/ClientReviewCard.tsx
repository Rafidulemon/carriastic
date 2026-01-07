import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const StarRating = ({ rating }: { rating: number }) => {
  const stars = Array(5)
    .fill(0)
    .map((_, index) => (
      <span
        key={index}
        className={index < rating ? "text-yellow-500 select-none" : "text-gray-300 select-none"}
      >
        ★
      </span>
    ));
  return <div className="flex items-center gap-1 text-[14px]">{stars}</div>;
};

type ReviewCardProps = {
  name: string;
  date: string;
  review: string;
  rating: number;
  avatar: string;
};

const ReviewCard = ({ name, date, review, rating, avatar }: ReviewCardProps) => {
  return (
    <article
      className="group relative mx-auto my-6 flex w-full max-w-[520px] flex-none md:mx-0 md:my-8 md:w-[420px]"
      style={
        {
          "--card-accent": "#7a2fb5",
          "--card-accent-soft": "rgba(122, 47, 181, 0.28)",
        } as React.CSSProperties
      }
    >
      <div className="absolute -inset-1 rounded-[28px] bg-[radial-gradient(circle_at_top,var(--card-accent-soft),transparent_70%)] opacity-70 blur transition duration-300 group-hover:opacity-100" />
      <div className="relative flex w-full flex-col gap-4 rounded-[24px] border border-slate-200/80 bg-[linear-gradient(135deg,#ffffff_0%,#f8fafc_45%,#f5f0ff_100%)] p-6 transition duration-300 group-hover:-translate-y-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-14 w-14 overflow-hidden rounded-full ring-4 ring-white shadow-[0_12px_24px_rgba(15,23,42,0.15)]">
              <Image
                src={avatar}
                alt={name}
                width={72}
                height={72}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[18px] font-semibold text-slate-900 font-spaceGrotesk">
                {name}
              </h3>
              <span className="text-[12px] uppercase tracking-[0.24em] text-slate-400">
                {date}
              </span>
            </div>
          </div>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
            <FaQuoteLeft className="text-[18px]" aria-hidden="true" />
          </span>
        </div>
        <StarRating rating={Math.round(rating)} />
        <p className="text-[16px] leading-relaxed text-slate-600">{review}</p>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[var(--card-accent)]" />
          <span className="h-px w-full bg-gradient-to-r from-[#7a2fb5]/60 via-[#5b21b6]/40 to-transparent" />
        </div>
      </div>
    </article>
  );
};

export default ReviewCard;
