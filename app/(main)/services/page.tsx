"use client"
import React from "react";
import Image from "next/image";
import ReviewCard from "../../components/cards/ClientReviewCard";
import Services from "@/app/components/services/Service";

const reviews = [
  {
    name: "Alice Waters",
    date: "2 weeks ago",
    review: "Carriastic helped me find my dream job effortlessly!",
    rating: 5,
    avatar: "/avatars/alice.jpeg",
  },
  {
    name: "John Doe",
    date: "1 month ago",
    review: "The service transformed my career path remarkably.",
    rating: 5,
    avatar: "/avatars/john.jpeg",
  },
  {
    name: "Linda Brown",
    date: "3 days ago",
    review: "Unmatched support and guidance, highly recommend!",
    rating: 5,
    avatar: "/avatars/linda.jpeg",
  },
  {
    name: "Michael Scott",
    date: "2 months ago",
    review: "Fantastic service that exceeded all my expectations.",
    rating: 4.5,
    avatar: "/avatars/michael.jpg",
  },
  {
    name: "Jessica Taylor",
    date: "1 week ago",
    review: "Highly skilled and professional team, very satisfied!",
    rating: 5,
    avatar: "/avatars/jessica.jpg",
  },
  
];

const ServicesPage = () => {
  return (
    <div className="w-full h-full mb-10 flex flex-col gap-10 items-center">
      <div className="relative w-full h-[250px] md:h-[600px]">
        <Image
          src="/banners/service.jpg"
          alt="Our Services"
          layout="fill"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="text-white text-[24px] md:text-[48px] font-bold">Our Services</h1>
        </div>
      </div>

      <div className="w-full text-center flex justify-center">
        <Services/>
      </div>

      <div className="w-full px-10 flex flex-col items-center my-6 gap-6">
        <span className="text-[24px] font-[600] text-primary">
          User Testimonials
        </span>
        <div className="relative w-full overflow-hidden">
          <div className="flex flex-row animate-marquee-logo gap-6">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
