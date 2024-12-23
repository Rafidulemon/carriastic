import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const quotes = [
    {
      id: 1,
      name: "Md. Rafidul Islam",
      title: "CEO, Carriastic",
      quote:
        "At Carriastic, our vision is not just to fill jobs but to create lasting impacts in the career paths of every individual we work with. Together, we build a better future for our society.",
      image: "/team/rafid.png",
    },
    {
      id: 2,
      name: "Syed Hasan Ahmed Anik",
      title: "COO, Carriastic",
      quote:
        "Our mission is to empower job seekers with the right skills and opportunities, creating a workforce that drives innovation and excellence in the job market.",
      image: "/team/hasan.png",
    },
    {
      id: 3,
      name: "Ahsan Habib Ethic",
      title: "CMO, Carriastic",
      quote:
        "We focus on building strong relationships with businesses and candidates, ensuring both parties achieve success and sustainable growth.",
      image: "/team/ethic.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  const currentQuote = quotes[currentQuoteIndex];
  return (
    <div className="w-full flex flex-col items-center pt-6 bg-gray-100">
      <div className="w-full flex flex-row gap-2 justify-center text-[24px] md:text-[30px]">
        <div className="w-fit bg-primary px-4 skew-x-[20deg]">
          <span className="w-full h-full flex items-center justify-center text-white font-[700] -skew-x-[20deg]">
            About
          </span>
        </div>
        <span className="text-primary font-[700]">Us</span>
      </div>
      <div className="md:w-[80%] px-6 md:px-10 md:grid grid-cols-2 my-10">
        <div className="bg-gray-800 md:bg-gray-100 rounded-xl md:shadow-none shadow-lg p-6 flex flex-col items-center justify-center max-w-lg mx-auto">
          <p className="text-lg md:text-xl italic text-center mb-4 text-white md:text-gray-600" style={{ textShadow: "1px 1px 10px 10px rgba(0, 0, 0, 0.5)" }}>
            &quot;{currentQuote.quote}&quot;
          </p>
          <Image
            src={currentQuote.image}
            alt={currentQuote.name}
            width={150}
            height={150}
            className="rounded-full mb-4 border-2 border-gray-400"
          />
          <div className="text-center">
            <h3 className="text-xl font-bold text-white md:text-primary">
              {currentQuote.name}
            </h3>
            <p className="text-md text-gray-300 md:text-gray-800">
              {currentQuote.title}
            </p>
          </div>
        </div>

        <div className="mt-4 md:mt-0 w-full bg-white h-full shadow-xl rounded-xl py-6">
          <div className="w-full bg-primary py-1 md:py-2 px-4 md:px-6">
            <span className="text-white font-[600] text-[18px]">
              Who we are
            </span>
          </div>
          <p className="hidden md:flex px-4 md:px-6 text-black py-6 text-justify">
            Carriastic is trying to solve the Unemployment problem initially in
            Bangladesh and later on globally. We are basically a job placement
            platform for graduates and understudies, especially, focusing on
            their careers for ensuring job placement in the competitive job
            market. Carriastic is the bridge between job seekers and employee
            seekers. Job seekers will get their desired job and Concerns will
            receive qualified candidates without having any challenge. Our main
            motto is creating quality full Human resources for the companies. We
            are ensuring the quality of our candidates’ through various training
            and skill development programs. Throughout the months, we run these
            training programs with our trainers. As a result, we enhance the
            quality and skills of the Human resources for getting jobs along
            with it will increase the productivity of concerns and reduce the
            unemployment problem in Bangladesh.{" "}
          </p>
          <p className="md:hidden px-4 md:px-6 text-black py-6 text-justify">
            Carriastic is trying to solve the Unemployment problem initially in
            Bangladesh and later on globally. We are basically a job placement
            platform for graduates and understudies, especially, focusing on
            their careers for ensuring job placement in the competitive job
            market. Carriastic is the bridge between job seekers and employee
            seekers. Job seekers will get their desired job and Concerns will
            receive qualified candidates without having any challenge.
          </p>
          <button
            className="md:mx-6 md:px-4 py-2 md:py-2 md:rounded-lg bg-primary text-white w-full md:w-fit"
            onClick={() => router.push("/about")}
          >
            More About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
