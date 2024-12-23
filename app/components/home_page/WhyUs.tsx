"use client";
import Bar from "../animations/Bar";
import CountUp from "react-countup";
import {
  FaUsers,
  FaRegCheckCircle,
  FaRegStar,
  FaChartLine,
  FaHandshake,
  FaExclamationTriangle,
} from "react-icons/fa";
import { FiHeart, FiPackage, FiSmile, FiUsers } from "react-icons/fi";

const WhyUs = () => {
  return (
    <div className="w-full flex flex-col gap-6 mt-6 items-center">
      <div>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[20px] font-[500] text-center text-black mb-6">
            Grow Yourself with us
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
            <div className="text-center group">
              <FaUsers className="mx-auto text-4xl text-purple-900 mb-4 group-hover:text-green-800 group-hover:scale-150 transition-all duration-300 ease-in-out" />
              <h3 className="text-[18px] font-[500] mb-2">
                Proper resource allocation
              </h3>
              <p className="text-gray-600 text-justify">
                As per the need of the companies, we refer the talented and
                trained candidates. So, we have to make the candidates
                well-trained to make them qualified for the job market.
              </p>
            </div>
            <div className="text-center group">
              <FaRegCheckCircle className="mx-auto text-4xl text-purple-900 mb-4 group-hover:text-blue-800 group-hover:scale-150 transition-all duration-300 ease-in-out" />
              <h3 className="text-[18px] font-[500] mb-2">
                Create Professionalism
              </h3>
              <p className="text-gray-600 text-justify">
                We provide a career-related training program. From this training
                program, a fresher will understand the professionalism which has
                to be maintained as an employee.
              </p>
            </div>
            <div className="text-center col-span-2 md:col-span-1 group">
              <FaRegStar className="mx-auto text-4xl text-purple-900 mb-4 group-hover:text-purple-800 group-hover:scale-150 transition-all duration-300 ease-in-out" />
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
            <div className="text-center group">
              <FaChartLine className="mx-auto text-4xl text-purple-900 mb-4 group-hover:text-pink-800 group-hover:scale-150 transition-all duration-300 ease-in-out" />
              <h3 className="text-[18px] font-[500] mb-2">Ensure quality</h3>
              <p className="text-gray-600 text-justify">
                We ensure qualified candidates by our own training program and
                skill development sessions. We also have interpersonal skill
                development sessions with the candidates.
              </p>
            </div>
            <div className="text-center group">
              <FaHandshake className="mx-auto text-4xl text-purple-900 mb-4 group-hover:text-yellow-800 group-hover:scale-150 transition-all duration-300 ease-in-out" />
              <h3 className="text-[18px] font-[500] mb-2">
                Maintain good relation
              </h3>
              <p className="text-gray-600 text-justify">
                We always keep a good relation with our clients by our services.
              </p>
            </div>
            <div className="text-center col-span-2 md:col-span-1 group">
              <FaExclamationTriangle className="mx-auto text-4xl text-purple-900 mb-4 group-hover:text-teal-800 group-hover:scale-150 transition-all duration-300 ease-in-out" />
              <h3 className="text-[18px] font-[500] mb-2">Mitigate Risk</h3>
              <p className="text-gray-600 text-justify">
                We practice reducing the impact of potential risks by developing
                a plan to manage, eliminate, or limit setbacks as much as
                possible.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="md:w-[70%] bg-white text-white py-6 px-8">
        <div className="mx-auto grid grid-cols-2 md:grid-cols-4 text-center text-primary gap-8">
          {[
            {
              stat: 45,
              label: "Team Members",
              suffix: "+",
              icon: <FiUsers color="#1abc9c" />,
            },
            {
              stat: 25,
              label: "Total Products",
              suffix: "+",
              icon: <FiPackage color="#1f618d" />,
            },
            {
              stat: 800000,
              label: "Happy Users",
              suffix: "+",
              icon: <FiSmile color="#f39c12" />,
            },
            {
              stat: 24000,
              label: "Happy Moments",
              icon: <FiHeart color="#cb4335" />,
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-4xl mb-2">{item.icon}</div>
              <h3 className="text-xl md:text-3xl font-bold text-primary">
                <CountUp
                  end={item.stat}
                  suffix={item.suffix || ""}
                  duration={10}
                />
              </h3>
              <p className="text-lg text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-[80%] md:w-[40%] mb-6">
        <div>
          {[
            {
              label: "Resource Allocation",
              level: 90,
              color: "bg-gradient-to-tr to-green-400 from-green-800",
            },
            {
              label: "Professionalism Training",
              level: 85,
              color: "bg-gradient-to-tr to-blue-400 from-blue-800",
            },
            {
              label: "Exclusive Opportunities",
              level: 80,
              color: "bg-gradient-to-tr to-purple-400 from-purple-800",
            },
            {
              label: "Quality Assurance",
              level: 95,
              color: "bg-gradient-to-tr to-pink-400 from-pink-800",
            },
            {
              label: "Good Relations",
              level: 88,
              color: "bg-gradient-to-tr to-yellow-400 from-yellow-800",
            },
            {
              label: "Risk Mitigation",
              level: 75,
              color: "bg-gradient-to-tr to-teal-400 from-teal-800",
            },
          ].map((item, index) => (
            <Bar
              key={index}
              label={item.label}
              level={item.level}
              color={item.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
