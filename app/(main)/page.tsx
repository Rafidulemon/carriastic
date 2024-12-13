"use client";
import { useState, useEffect } from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";
import {
  FaUsers,
  FaRegCheckCircle,
  FaChartLine,
  FaHandshake,
  FaRegStar,
  FaExclamationTriangle,
} from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CountUp from "react-countup";
import { FiHeart, FiPackage, FiSmile, FiUsers } from "react-icons/fi";

const slides = [
  {
    image: "/banners/about_us.jpg",
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
    image: "/banners/client.jpg",
    title: "Your Trusted Partner",
    description: "Building meaningful relationships through trust.",
    button: { text: "Contact Us", link: "/contact" },
  },
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("next");
  const router = useRouter();

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
    <div className="w-full flex flex-col gap-6">
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

      <div className="w-full px-6 md:px-10 md:grid grid-cols-2 my-6">
        <div className="w-full flex flex-row justify-center">
          <Image src="/images/about.jpg" alt="" width={500} height={500} />
        </div>
        <div className="mt-4 md:mt-0 w-full h-full bg-primary rounded-xl py-6">
          <div className="w-full bg-white py-1 md:py-2 px-4 md:px-6">
            <span className="text-primary font-[600] text-[18px]">
              Who we are
            </span>
          </div>
          <p className="px-4 md:px-6 text-white py-6 text-justify">
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
            <button className="md:mx-6 md:px-4 py-2 md:py-2 md:rounded-lg bg-white w-full md:w-fit" onClick={()=> router.push("/about")}>More About Us</button>
        </div>
      </div>

      <div className="w-full flex flex-col gap-6 my-6 items-center">
        <span className="text-primary font-[700] text-[24px]">Why Us</span>
        <div>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-[20px] font-[500] text-center text-black mb-6">
              Grow Yourself with us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <FaUsers className="mx-auto text-4xl text-purple-900 mb-4" />
                <h3 className="text-[18px] font-[500] mb-2">
                  Proper resource allocation
                </h3>
                <p className="text-gray-600 text-justify">
                  As per the need of the companies, we refer the talented and
                  trained candidates. So, we have to make the candidates
                  well-trained to make them qualified for the job market.
                </p>
              </div>
              <div className="text-center">
                <FaRegCheckCircle className="mx-auto text-4xl text-purple-900 mb-4" />
                <h3 className="text-[18px] font-[500] mb-2">
                  Create Professionalism
                </h3>
                <p className="text-gray-600 text-justify">
                  We provide a career-related training program. From this
                  training program, a fresher will understand the
                  professionalism which has to be maintained as an employee.
                </p>
              </div>
              <div className="text-center">
                <FaRegStar className="mx-auto text-4xl text-purple-900 mb-4" />
                <h3 className="text-[18px] font-[500] mb-2">
                  Bring exclusive opportunities
                </h3>
                <p className="text-gray-600 text-justify">
                  After conducting proper training programs, we will refer to
                  various types of job opportunities based on their performance.
                </p>
              </div>
            </div>

            <h2 className="text-[20px] font-[500] text-center text-black mt-12 mb-6">
              Get your qualified candidate from us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <FaChartLine className="mx-auto text-4xl text-purple-900 mb-4" />
                <h3 className="text-[18px] font-[500] mb-2">Ensure quality</h3>
                <p className="text-gray-600 text-justify">
                  We ensure qualified candidates by our own training program and
                  skill development sessions. We also have interpersonal skill
                  development sessions with the candidates.
                </p>
              </div>
              <div className="text-center">
                <FaHandshake className="mx-auto text-4xl text-purple-900 mb-4" />
                <h3 className="text-[18px] font-[500] mb-2">
                  Maintain good relation
                </h3>
                <p className="text-gray-600 text-justify">
                  We always keep a good relation with our clients by our
                  services.
                </p>
              </div>
              <div className="text-center">
                <FaExclamationTriangle className="mx-auto text-4xl text-purple-900 mb-4" />{" "}
                <h3 className="text-[18px] font-[500] mb-2">Mitigate Risk</h3>
                <p className="text-gray-600 text-justify">
                  We practice reducing the impact of potential risks by
                  developing a plan to manage, eliminate, or limit setbacks as
                  much as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-6 my-6 items-center">
        <span className="text-primary font-[700] text-[24px]">Partnership</span>
        <h2 className="text-[20px] font-[500] text-center text-black mb-6">
          Our Valuable CLients
        </h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-8 animate-marquee-logo whitespace-nowrap">
            <Image
              src="/clients/client1-logo.jpg"
              alt="Client 1"
              width={200}
              height={80}
              className="object-contain"
            />
            <Image
              src="/clients/client5-logo.jpg"
              alt="Client 5"
              width={200}
              height={80}
              className="object-contain"
            />
            <Image
              src="/clients/client2-logo.jpg"
              alt="Client 2"
              width={200}
              height={80}
              className="object-contain"
            />
            <Image
              src="/clients/client3-logo.jpg"
              alt="Client 3"
              width={200}
              height={80}
              className="object-contain"
            />
            <Image
              src="/clients/client4-logo.jpg"
              alt="Client 4"
              width={200}
              height={80}
              className="object-contain"
            />
            <Image
              src="/clients/client5-logo.jpg"
              alt="Client 5"
              width={200}
              height={80}
              className="object-contain"
            />

            <Image
              src="/clients/client1-logo.jpg"
              alt="Client 1"
              width={200}
              height={80}
              className="object-contain"
            />
            <Image
              src="/clients/client5-logo.jpg"
              alt="Client 5"
              width={200}
              height={80}
              className="object-contain"
            />
            <Image
              src="/clients/client2-logo.jpg"
              alt="Client 2"
              width={200}
              height={80}
              className="object-contain"
            />
            <Image
              src="/clients/client3-logo.jpg"
              alt="Client 3"
              width={200}
              height={80}
              className="object-contain"
            />
            <Image
              src="/clients/client4-logo.jpg"
              alt="Client 4"
              width={200}
              height={80}
              className="object-contain"
            />
            <Image
              src="/clients/client5-logo.jpg"
              alt="Client 5"
              width={200}
              height={80}
              className="object-contain"
            />
          </div>
        </div>
        <div
          onClick={() => router.push("/clients")}
          className="text-primary hover:font-[600] hover:underline text-[18px] cursor-pointer"
        >
          See All
        </div>
      </div>

      <section className="bg-neutral-200 md:bg-white text-white py-16 px-8 mb-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 text-center text-primary gap-8">
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

export default HomePage;
