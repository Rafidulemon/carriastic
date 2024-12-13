import React from "react";
import Button from "../../components/button/Button";
import Image from "next/image";
import ReviewCard from "../../components/cards/ClientReviewCard";

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
      <div className="relative w-full h-[600px]">
        <Image
          src="/banners/service.jpg"
          alt="Our Services"
          layout="fill"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="text-white text-[48px] font-bold">Our Services</h1>
        </div>
      </div>

      <div className="w-[90%] grid grid-cols-3 gap-10 justify-center items-center">
        <div className="w-full flex flex-col gap-1">
          <span className="text-[18px] text-black font-[600]">
            Skill Training
          </span>
          <span className="text-neutral-500 pr-4">
            Enhance your skills with our expert-led training programs.
          </span>
          <Button theme="secondary" className="mt-4">
            <span className="px-4">Learn More</span>
          </Button>
        </div>

        <div className="w-full flex flex-col gap-1">
          <span className="text-[18px] text-black font-[600]">
            Job Placement
          </span>
          <span className="text-neutral-500 pr-4">
            Get assistance to land your dream job with our placement services.
          </span>
          <Button theme="secondary" className="mt-4">
            <span className="px-8">Explore</span>
          </Button>
        </div>

        <div className="w-full flex flex-col gap-1">
          <span className="text-[18px] text-black font-[600]">
            Career Consulting
          </span>
          <span className="text-neutral-500 pr-4">
            Receive personalized career advice from our experienced consultants.
          </span>
          <Button theme="secondary" className="mt-4">
            <span className="px-4">Schedule</span>
          </Button>
        </div>

        <div className="w-full flex flex-col gap-1">
          <span className="text-[18px] text-black font-[600]">
            Software Development
          </span>
          <span className="text-neutral-500 pr-4">
            Build modern, scalable, and efficient software solutions with our
            expert team.
          </span>
          <Button theme="secondary" className="mt-4">
            <span className="px-4">Discover</span>
          </Button>
        </div>

        <div className="w-full flex flex-col gap-1">
          <span className="text-[18px] text-black font-[600]">
            Digital Marketing
          </span>
          <span className="text-neutral-500 pr-4">
            Boost your online presence and grow your business with our digital
            marketing services.
          </span>
          <Button theme="secondary" className="mt-4">
            <span className="px-4">Get Started</span>
          </Button>
        </div>

        <div className="w-full flex flex-col gap-1">
          <span className="text-[18px] text-black font-[600]">
            Graphics Designing
          </span>
          <span className="text-neutral-500 pr-4">
            Create visually stunning graphics that captivate and engage your
            audience.
          </span>
          <Button theme="secondary" className="mt-4">
            <span className="px-4">View More</span>
          </Button>
        </div>

        <div />
        <div className="w-full flex flex-col gap-1">
          <span className="text-[18px] text-black font-[600]">
            UI/UX Design
          </span>
          <span className="text-neutral-500 pr-4">
            Design seamless and user-friendly interfaces for your digital
            products.
          </span>
          <Button theme="secondary" className="mt-4">
            <span className="px-4">See Details</span>
          </Button>
        </div>
      </div>

      <div className="w-full px-10 flex flex-col items-center my-6 gap-6">
        <span className="text-[24px] font-[600] text-primary">
          User Testimonials
        </span>
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 animate-marquee">
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
