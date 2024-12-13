"use client";
import React from "react";
import ClientCard from "../../components/cards/ClientCard";
import ReviewCard from "../../components/cards/ClientReviewCard";
import Image from "next/image";

const clients = [
  {
    logoUrl: "/clients/client1-logo.jpg",
    name: "TechCorp",
    description: "Leading in software development.",
  },
  {
    logoUrl: "/clients/client2-logo.jpg",
    name: "InnoSolutions",
    description: "Innovating AI-based solutions.",
  },
  {
    logoUrl: "/clients/client3-logo.jpg",
    name: "GreenTech",
    description: "Sustainability and environmental tech.",
  },
  {
    logoUrl: "/clients/client4-logo.jpg",
    name: "WebWorld",
    description: "Transforming businesses with digital solutions.",
  },
  {
    logoUrl: "/clients/client5-logo.jpg",
    name: "HealthPlus",
    description: "Revolutionizing healthcare technology.",
  },
];

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

const ClientsPage = () => {
  return (
    <div className="w-full mb-10">
      <div className="relative w-full h-[220px] md:h-[600px] mb-10">
        <Image
          src="/banners/client.jpg"
          alt="Our Services"
          layout="fill"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="text-white text-[48px] font-bold">Our Clients</h1>
        </div>
      </div> 

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
        {clients.map((client, index) => (
          <ClientCard key={index} {...client} />
        ))}
      </div>

      <div className="mt-16 px-10">
        <h2 className="text-2xl font-bold text-center mb-8">What Our Clients Say</h2>
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

export default ClientsPage;
