import React from "react";
import ReviewCard from "../cards/ClientReviewCard";
import { useRouter } from "next/navigation";

const Reviews = () => {
  const router = useRouter();
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
  return (
    <div className="w-full px-10 flex flex-col items-center my-6 gap-6">
      <div className="relative w-full overflow-hidden">
        <div className="flex flex-col md:flex-row gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
      <div
        onClick={() => router.push("/clients")}
        className="text-primary hover:font-[600] hover:underline text-[18px] cursor-pointer"
      >
        See All
      </div>
    </div>
  );
};

export default Reviews;
