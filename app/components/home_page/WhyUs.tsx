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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
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
                We provide a career-related training program. From this training
                program, a fresher will understand the professionalism which has
                to be maintained as an employee.
              </p>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
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
                We always keep a good relation with our clients by our services.
              </p>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <FaExclamationTriangle className="mx-auto text-4xl text-purple-900 mb-4" />
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
      <section className="w-full bg-white text-white py-6 px-8 mb-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center text-primary gap-8">
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

export default WhyUs;
