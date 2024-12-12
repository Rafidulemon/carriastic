"use client";
import React from "react";
import Image from "next/image";
import Button from "../components/button/Button";
import { MdPeople, MdLocationOn } from "react-icons/md";
import { FaGraduationCap, FaUtensils, FaTrophy } from "react-icons/fa";
import { ImOffice } from "react-icons/im";
import CountUp from "react-countup";
import { FiUsers, FiPackage, FiSmile, FiHeart } from "react-icons/fi";

const CareersPage = () => {
  return (
    <div className="w-full">
      <section className="text-primary py-16 px-8">
        <div className="mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">Join Us</h1>
            <p className="text-lg mb-6">
              Work at the most dynamic agency and unlock your true potential.
            </p>
            <a href="#openings">
              <Button>
                <span className="px-6">View Openings</span>
              </Button>
            </a>
          </div>
          <div className="mt-8 md:mt-0">
            <Image src="/gifs/gif1.gif" alt="gif" width={200} height={200} />
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Your Life At [Company Name]
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ImOffice className="text-primary w-16 h-16 mb-4" />,
                title: "Large Beautiful Office",
                description: "Experience a comfortable work environment.",
              },
              {
                icon: <MdPeople className="text-primary w-16 h-16 mb-4" />,
                title: "Great Co-Workers",
                description: "Work with the best team in the industry.",
              },
              {
                icon: <MdLocationOn className="text-primary w-16 h-16 mb-4" />,
                title: "Easy Location",
                description: "Conveniently located for easy commuting.",
              },
              {
                icon: (
                  <FaGraduationCap className="text-primary w-16 h-16 mb-4" />
                ),
                title: "Education Opportunities",
                description: "Access resources to grow professionally.",
              },
              {
                icon: <FaUtensils className="text-primary w-16 h-16 mb-4" />,
                title: "Free Lunch & Snacks",
                description: "Enjoy daily meals and refreshments.",
              },
              {
                icon: <FaTrophy className="text-primary w-16 h-16 mb-4" />,
                title: "Performance Award",
                description: "Get rewarded for your exceptional work.",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                {item.icon}
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="openings" className="py-16 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Are You Ready To Join Our Team?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Data Scientist", type: "Full-Time", link: "#" },
              { title: "Product Designer", type: "Full-Time", link: "#" },
              { title: "WordPress Developer", type: "Intern", link: "#" },
              {
                title: "Technical Support Engineer",
                type: "Contract",
                link: "#",
              },
              {
                title: "Junior Graphic Designer",
                type: "Full-Time",
                link: "#",
              },
              { title: "Digital Marketer", type: "SEO Expert", link: "#" },
            ].map((job, index) => (
              <div
                key={index}
                className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col"
              >
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <p className="text-gray-600 mb-4">{job.type}</p>
                <a href={job.link}>
                  <Button isWidthFull>Apply Now</Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 text-white py-16 px-8 mb-12 shadow-lg">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 text-center text-primary gap-8">
          {[
            { stat: 45, label: "Team Members", suffix: "+", icon: <FiUsers /> },
            {
              stat: 25,
              label: "Total Products",
              suffix: "+",
              icon: <FiPackage />,
            },
            {
              stat: 800000,
              label: "Happy Users",
              suffix: "+",
              icon: <FiSmile />,
            },
            { stat: 24000, label: "Happy Moments", icon: <FiHeart /> },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-4xl text-primary mb-4">{item.icon}</div>
              <h3 className="text-3xl font-bold text-primary">
                <CountUp
                  end={item.stat}
                  suffix={item.suffix || ""}
                  duration={10}
                />
              </h3>
              <p className="text-lg">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
