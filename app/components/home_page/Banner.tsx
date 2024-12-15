"use client";
import { useState, useEffect } from "react";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";

const slides = [
  {
    image: "/banners/welcome.jpg",
    title: "Welcome to Carriastic",
    description: "Discover innovative solutions for your business growth.",
    button: { text: "Learn More", link: "/about" },
  },
  {
    image: "/banners/service.jpg",
    title: "Empowering Innovation",
    description: "Leverage cutting-edge technology to stay ahead.",
    button: { text: "Get Started", link: "/services" },
  },
  {
    image: "/banners/home_partner.jpg",
    title: "Your Trusted Partner",
    description: "Building meaningful relationships through trust.",
    button: { text: "Contact Us", link: "/contact" },
  },
];

const Banner = () => {
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

  const handlePrev = () => {
    setDirection("prev");
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[250px] md:h-[70vh] overflow-hidden">
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
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
            <h1 className="text-[20px] md:text-4xl font-bold mb-4">{slide.title}</h1>
            <p className="text-[16px] md:text-lg mb-6">{slide.description}</p>
            <a
              href={slide.button.link}
              className="px-4 py-2 md:px-6 md:py-3 bg-primary hover:bg-white hover:text-primary transition rounded-md text-white font-semibold"
            >
              {slide.button.text}
            </a>
          </div>
        </div>
      ))}

      <button
        onClick={handlePrev}
        className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 transition z-20 text-gray-300"
      >
        <FaCircleArrowLeft size={25} />
      </button>
      <button
        onClick={handleNext}
        className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 transition z-20 text-gray-300"
      >
        <FaCircleArrowRight size={25} />
      </button>
      <div className="absolute bottom-4 flex justify-center w-full space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-primary" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
