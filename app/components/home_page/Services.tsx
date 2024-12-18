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

type ServiceProps = {
  isServicePage?: boolean;
};

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

const Services: React.FC<ServiceProps> = ({ isServicePage = false }) => {
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
      image: "/images/job-placement.jpg",
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
      image: "/images/career-consulting.jpg",
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
      image: "/images/software-development.jpg",
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
      image: "/images/digital-marketing.jpg",
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
      image: "/images/graphics-designing.jpg",
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
      image: "/images/ui-ux-design.jpg",
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
    <div className="w-full px-10 flex flex-col items-center my-6 gap-6">
      <div className="relative w-full overflow-hidden pb-6">
        <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleServiceClick(service)}
              className={`cursor-pointer`}
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
      {!isServicePage && (
        <div
          onClick={() => router.push("/services")}
          className="text-primary hover:font-[600] hover:underline text-[18px] cursor-pointer"
        >
          See All
        </div>
      )}

      {/* Modal */}
      {isModalOpen && selectedService && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div className="relative bg-white w-[90%] max-w-3xl p-6 rounded-lg shadow-lg overflow-auto">
      {/* Close Icon */}
      <IoIosCloseCircle
        className="absolute top-4 right-4 text-primary cursor-pointer z-50"
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
  );
};

export default Services;
