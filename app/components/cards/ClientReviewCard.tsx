"use client";
import React from "react";
import Image from "next/image";

const StarRating = ({ rating }: { rating: number }) => {
  const stars = Array(5)
    .fill(0)
    .map((_, index) => (
      <span
        key={index}
        className={index < rating ? "text-yellow-500" : "text-gray-300"}
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
    <div className="min-w-[250px] my-8 p-4 shadow-xl rounded-lg shadow-sm bg-white flex flex-col items-center gap-4">
      <div className="w-20 h-20 rounded-full overflow-hidden">
        <Image
          src={avatar}
          alt={name}
          width={80}
          height={80}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{date}</p>
      <StarRating rating={Math.round(rating)} />
      <p className="text-center text-gray-700">{review}</p>
    </div>
  );
};

export default ReviewCard;
