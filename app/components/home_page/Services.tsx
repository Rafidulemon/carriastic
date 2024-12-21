import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MdOutlineModelTraining } from "react-icons/md";
import {
  FaBriefcase,
  FaUserTie,
  FaLaptopCode,
  FaBullhorn,
  FaPaintBrush,
  FaPenNib,
} from "react-icons/fa";
import ServiceCard from "../cards/ServiceCard";
import Button from "../button/Button";
import Image from "next/image";
import { IoIosCloseCircle } from "react-icons/io";
import ServiceBanner from "./ServiceBanner";

type Service = {
  id: string;
  name: string;
  details: string;
  image: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  background: string;
};

const Services = () => {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const [isModalOpen, setModalOpen] = useState(false);

  const services: Service[] = [
    {
      id: "1",
      name: "Skill Training",
      details: "Enhance your skills with our expert-led training programs.",
      image: "/services/skill-training.jpg",
      description:
        "Our Skill Training program is designed for professionals who are looking to upskill or reskill. We provide hands-on experience and real-world case studies to ensure you are prepared to excel in your career. Whether you're a fresher or an experienced professional, our training programs will help you become a highly competent and job-ready individual.",
      icon: <MdOutlineModelTraining />,
      color: "text-purple-900",
      background: "hover:bg-gradient-to-tr from-purple-400 to-purple-900",
    },
    {
      id: "2",
      name: "Job Placement",
      details:
        "Get assistance to land your dream job with our placement services.",
      image: "/services/job-placement.jpg",
      description:
        "Our Job Placement service connects you with top companies and employers who are actively seeking talented professionals. With our extensive network, we ensure that your resume stands out, and we guide you through the interview process to help you land your ideal job.",
      icon: <FaBriefcase />,
      color: "text-green-800",
      background: "hover:bg-gradient-to-tr from-green-400 to-green-800",
    },
    {
      id: "3",
      name: "Career Consulting",
      details:
        "Receive personalized career advice from our experienced consultants.",
      image: "/services/career.jpg",
      description:
        "Our Career Consulting service is perfect for professionals looking to switch careers or take their career to the next level. We offer one-on-one sessions to assess your strengths, interests, and goals, and then craft a tailored plan to help you succeed in your chosen field.",
      icon: <FaUserTie />,
      color: "text-blue-800",
      background: "hover:bg-gradient-to-tr from-blue-400 to-blue-800",
    },
    {
      id: "4",
      name: "Software Development",
      details:
        "Build modern, scalable, and efficient software solutions with our expert team.",
      image: "/services/se-development.jpg",
      description:
        "Our Software Development service provides you with cutting-edge solutions that are both innovative and user-friendly. Whether you need a mobile app, web application, or enterprise-level software, our team works closely with you to ensure that the final product exceeds your expectations.",
      icon: <FaLaptopCode />,
      color: "text-red-800",
      background: "hover:bg-gradient-to-tr from-red-400 to-red-800",
    },
    {
      id: "5",
      name: "Digital Marketing",
      details:
        "Boost your online presence and grow your business with our digital marketing services.",
      image: "/services/digital-marketing.jpg",
      description:
        "Our Digital Marketing service helps you reach your target audience and increase your brand visibility. We specialize in search engine optimization (SEO), paid search ads, social media marketing, and email marketing, ensuring that your business gains the exposure it deserves.",
      icon: <FaBullhorn />,
      color: "text-orange-800",
      background: "hover:bg-gradient-to-tr from-orange-400 to-orange-800",
    },
    {
      id: "6",
      name: "Graphics Designing",
      details:
        "Create visually stunning graphics that captivate and engage your audience.",
      image: "/services/graphics.jpg",
      description:
        "Our Graphics Designing service helps you communicate your message through captivating visual content. Whether you're looking for a new logo, website design, or promotional materials, our team delivers creative and professional design solutions that represent your brand effectively.",
      icon: <FaPaintBrush />,
      color: "text-pink-800",
      background: "hover:bg-gradient-to-tr from-pink-400 to-pink-800",
    },
    {
      id: "7",
      name: "UI/UX Design",
      details:
        "Design seamless and user-friendly interfaces for your digital products.",
      image: "/services/ui-ux.png",
      description:
        "Our UI/UX Design service ensures that your digital products not only look great but also provide an intuitive and enjoyable user experience. Our design team works closely with you to understand your users and develop interfaces that meet their needs while aligning with your business goals.",
      icon: <FaPenNib />,
      color: "text-teal-800",
      background: "hover:bg-gradient-to-tr from-teal-400 to-teal-800",
    },
  ];

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedService(null);
    setModalOpen(false);
  };

  return (
    <div className="relative">
      <div className="hidden md:flex absolute inset-0 z-0">
        <ServiceBanner />
      </div>

      <div className="relative z-10">
        <div className="w-full flex flex-row gap-2 justify-center text-[24px] md:text-[30px] pt-6">
          <span className="text-primary font-[700]">Our</span>
          <div className="w-fit bg-primary px-4 -skew-x-[20deg]">
            <span className="w-full h-full flex items-center justify-center text-white font-[700] skew-x-[20deg]">
              Services
            </span>
          </div>
        </div>
        <div className="w-full px-6 md:px-10 flex flex-col items-center my-6 gap-6">
          <div className="relative w-full overflow-hidden">
            <div className="flex flex-row flex-wrap gap-4 md:gap-6 justify-center">
              {services.slice(0, 3).map((service, index) => (
                <div
                  key={index}
                  onClick={() => handleServiceClick(service)}
                  className="cursor-pointer"
                >
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
            <div className="my-6 pb-2 w-full flex flex-col gap-1 justify-center items-center">
              <span className="text-[18px] font-[600] text-primary">
                Become our trainee
              </span>
              <Button onClick={() => router.push("/career")} className="px-8">
                Apply Now
              </Button>
            </div>
            <div className="flex flex-row flex-wrap gap-4 md:gap-6 justify-center mt-4 md:mt-6">
              {services.slice(3).map((service, index) => (
                <div
                  key={index}
                  onClick={() => handleServiceClick(service)}
                  className="cursor-pointer"
                >
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col gap-1 justify-center items-center">
            <span className="text-[18px] font-[600] text-primary">
              Schedule a meeting
            </span>
            <Button onClick={() => router.push("/contact")} className="px-8">
              Book Now
            </Button>
          </div>
          <div
            onClick={() => router.push("/services")}
            className="text-primary hover:font-[600] hover:underline text-[18px] cursor-pointer"
          >
            See All
          </div>

          {isModalOpen && selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
              <div className="relative bg-white w-[90%] max-w-3xl p-6 rounded-lg shadow-lg overflow-auto">
                <IoIosCloseCircle
                  className="absolute top-1 right-0 md:top-4 md:right-4 text-primary cursor-pointer z-50"
                  size={30}
                  onClick={closeModal}
                />
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/2">
                    <Image
                      src={selectedService.image}
                      alt={selectedService.name}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <h2 className="text-[24px] font-bold text-primary mb-4">
                      {selectedService.name}
                    </h2>
                    <p className="text-justify text-gray-600 text-[16px] mb-4">
                      {selectedService.description}
                    </p>

                    <div className="mt-6">
                      <Button
                        onClick={() => router.push("/contact")}
                        className="w-full md:w-[80%]"
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
