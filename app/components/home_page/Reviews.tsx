import React from "react";
import ReviewCard from "../cards/ClientReviewCard";
import { useSwipeable } from "react-swipeable";
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

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prev) => Math.min(prev + 1, reviews.length - 1)),
    onSwipedRight: () => setCurrentIndex((prev) => Math.max(prev - 1, 0)),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className="w-full px-4 flex flex-col items-center my-6 gap-6">
      <div className="relative w-full overflow-hidden" {...swipeHandlers}>
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="min-w-full md:min-w-[33.333%] px-2 flex-shrink-0"
            >
              <ReviewCard {...review} />
            </div>
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
