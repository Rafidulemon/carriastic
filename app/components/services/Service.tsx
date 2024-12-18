import {
  FaBriefcase,
  FaUserTie,
  FaLaptopCode,
  FaBullhorn,
  FaPaintBrush,
  FaPenNib,
} from "react-icons/fa";
import { SiHyperskill } from "react-icons/si";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

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

const services: Service[] = [
  {
    id: "1",
    name: "Skill Training",
    details: "Enhance your skills with our expert-led training programs.",
    image: "/services/skill-training.jpg",
    description:
      "Our Skill Training program is designed for professionals who are looking to upskill or reskill. We provide hands-on experience and real-world case studies to ensure you are prepared to excel in your career. Whether you're a fresher or an experienced professional, our training programs will help you become a highly competent and job-ready individual.",
    icon: <SiHyperskill />,
    color: "text-purple-900",
    background: "bg-gradient-to-tr from-purple-400 to-purple-900",
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
    background: "bg-gradient-to-tr from-green-400 to-green-800",
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
    background: "bg-gradient-to-tr from-blue-400 to-blue-800",
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
    background: "bg-gradient-to-tr from-red-400 to-red-800",
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
    background: "bg-gradient-to-tr from-orange-400 to-orange-800",
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
    background: "bg-gradient-to-tr from-pink-400 to-pink-800",
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
    background: "bg-gradient-to-tr from-teal-400 to-teal-800",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const router = useRouter();

  return (
    <div className="w-[80%] lg:w-[70%] xl:w-[60%] grid md:grid-cols-2 lg:grid-cols-3 items-center bg-white lg:p-10 justify-center gap-6 lg:gap-10">
      <div className="lg:col-span-2 h-[600px] flex flex-col justify-between text-primary text-3xl font-bold shadow-xl">
        {selectedService ? (
          <div className="flex flex-col gap-4 h-full justify-between pb-4">
            <div className={`w-full ${selectedService.background} shadow-lg`}>
              <h2 className="text-[20px] font-[600] text-white lg:my-1">
                {selectedService.name}
              </h2>
            </div>
            <Image
              src={selectedService.image}
              alt={selectedService.name}
              width={300}
              height={200}
              className="w-full h-[200px] object-cover lg:mb-4 px-4 lg:px-6"
            />
            <p className="text-justify text-gray-600 text-[16px] px-4 lg:px-6">
              {selectedService.description}
            </p>
            <div className="w-full flex justify-center">
              <button
                onClick={() => router.push("/contact")}
                className={`text-[16px] ${selectedService.background} text-white py-1 rounded-xl hover:scale-x-125 group`}
              >
                <span className="group-hover:text-[18px] px-8">
                  More Details
                </span>
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-4 lg:gap-6">
            <span>Our Services</span>
            <Image
              src="/services/service.gif"
              width={350}
              height={224}
              alt=""
            />
          </div>
        )}
      </div>

      <div className="w-full flex flex-col gap-4">
        {services.map((service) => (
          <div
            key={service.id}
            className={`group h-[50px] px-6 flex items-center gap-2 cursor-pointer
        ${selectedService?.id === service.id ? service.background : ""}
        hover:${
          service.background
        } text-primary hover:text-white hover:-skew-x-[30deg]`}
            onClick={() => setSelectedService(service)}
          >
            <div
              className={`group-hover:skew-x-[30deg] ${
                selectedService?.id === service.id ? "text-white" : ""
              }`}
            >
              {service.icon}
            </div>
            <div
              className={`font-semibold text-lg group-hover:skew-x-[30deg] ${
                selectedService?.id === service.id ? "text-white" : ""
              }`}
            >
              {service.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
