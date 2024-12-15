import React from "react";
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

type ServiceProps = {
  isServicePage?: boolean;
};
const Services: React.FC<ServiceProps> = ({ isServicePage = false }) => {
  const router = useRouter();

  const services = [
    {
      name: "Skill Training",
      details: "Enhance your skills with our expert-led training programs.",
      icon: <MdOutlineModelTraining />,
      color: "text-purple-900",
      background: "hover:bg-gradient-to-tr from-purple-400 to-purple-900",
    },
    {
      name: "Job Placement",
      details:
        "Get assistance to land your dream job with our placement services.",
      icon: <FaBriefcase />,
      color: "text-green-800",
      background: "hover:bg-gradient-to-tr from-green-400 to-green-800",
    },
    {
      name: "Career Consulting",
      details:
        "Receive personalized career advice from our experienced consultants.",
      icon: <FaUserTie />,
      color: "text-blue-800",
      background: "hover:bg-gradient-to-tr from-blue-400 to-blue-800",
    },
    {
      name: "Software Development",
      details:
        "Build modern, scalable, and efficient software solutions with our expert team.",
      icon: <FaLaptopCode />,
      color: "text-red-800",
      background: "hover:bg-gradient-to-tr from-red-400 to-red-800",
    },
    {
      name: "Digital Marketing",
      details:
        "Boost your online presence and grow your business with our digital marketing services.",
      icon: <FaBullhorn />,
      color: "text-orange-800",
      background: "hover:bg-gradient-to-tr from-orange-400 to-orange-800",
    },
    {
      name: "Graphics Designing",
      details:
        "Create visually stunning graphics that captivate and engage your audience.",
      icon: <FaPaintBrush />,
      color: "text-pink-800",
      background: "hover:bg-gradient-to-tr from-pink-400 to-pink-800",
    },
    {
      name: "UI/UX Design",
      details:
        "Design seamless and user-friendly interfaces for your digital products.",
      icon: <FaPenNib />,
      color: "text-teal-800",
      background: "hover:bg-gradient-to-tr from-teal-400 to-teal-800",
    },
  ];

  return (
    <div className="w-full px-10 flex flex-col items-center my-6 gap-6">
      <div className="relative w-full overflow-hidden pb-6">
        <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-center">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
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
    </div>
  );
};

export default Services;
