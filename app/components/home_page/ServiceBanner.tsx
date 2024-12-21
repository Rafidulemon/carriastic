"use client";
import { useState, useEffect } from "react";

const slides = [
  {
    image: "/images/job.jpg",
  },
  {
    image: "/images/se.jpg",
  },
  {
    image: "/images/dm.jpg",
  },
  {
    image: "/images/ui.jpg",
  },
];

const ServiceBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("next");

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNext = () => {
    setDirection("next");
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };


  return (
    <div className="relative z-0 w-full h-[250px] md:h-[100vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide
              ? "translate-x-0 opacity-100 z-10"
              : direction === "next"
              ? "translate-x-full opacity-0 z-0"
              : "translate-x-[-100%] opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gray-100 bg-opacity-80"></div>
        </div>
      ))}
    </div>
  );
};

export default ServiceBanner;
