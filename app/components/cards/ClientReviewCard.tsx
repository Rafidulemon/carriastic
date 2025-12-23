"use client";
import React from "react";
import Image from "next/image";

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
  return <div className="flex">{stars}</div>;
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
    <div className="max-w-[90%] md:max-w-[700px] my-6 md:my-8 p-4 rounded-lg shadow-xl bg-white flex flex-col items-center gap-1 md:gap-4 cursor-pointer hover:scale-105">
      <div className="w-20 h-20 rounded-full overflow-hidden">
        <Image
          src={avatar}
          alt={name}
          width={80}
          height={80}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="text-lg font-semibold select-none">{name}</h3>
      <p className="text-sm text-gray-500 select-none">{date}</p>
      <StarRating rating={Math.round(rating)} />
      <p className="text-center text-gray-700 select-none">{review}</p>
    </div>
  );
};

export default ReviewCard;
