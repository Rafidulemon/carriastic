"use client";
import Banner from "../components/home_page/Banner";
import WhyUs from "../components/home_page/WhyUs";
import Trainees from "../components/home_page/Trainees";
import Reviews from "../components/home_page/Reviews";
import Partnership from "../components/home_page/Partnership";
import Services from "../components/home_page/Services";
import About from "../components/home_page/About";
import Technology from "../components/home_page/Technology";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col">
      <Banner />
      <About />
      {/* Why US */}
      <div className="w-full text-center mt-6">
        <div className="w-full flex flex-row gap-2 justify-center text-[24px] md:text-[30px]">
          <div className="w-fit bg-primary px-4 -skew-x-[20deg]">
            <span className="w-full h-full flex items-center justify-center text-white font-[700] skew-x-[20deg]">
              Why
            </span>
          </div>
          <span className="text-primary font-[700]">Us</span>
        </div>
        <WhyUs />
      </div>
      {/* Services */}
      <div className="w-full text-center bg-neutral-100 mt-6">
        <Services />
      </div>

      <Technology/>
      {/* Trainees */}
      <div className="w-full text-center mt-10">
        <div className="w-full flex flex-row gap-2 justify-center text-[24px] md:text-[30px]">
          <span className="text-primary font-[700]">Our</span>
          <span className="text-primary font-[700]">Successful</span>
          <div className="w-fit bg-primary px-4 -skew-x-[20deg]">
            <span className="w-full h-full flex items-center justify-center text-white font-[700] skew-x-[20deg]">
              Tarinees
            </span>
          </div>
        </div>
        <h2 className="text-[20px] font-[500] text-center text-black my-6">
          Hear from our Successful Trainees
        </h2>
        <Trainees />
      </div>

      {/* Partnership */}
      <div className="w-full text-center mt-10 bg-neutral-100 pt-6">
        <div className="w-full flex flex-row gap-2 justify-center text-[24px] md:text-[30px]">
          <span className="text-primary font-[700]">Meet</span>
          <span className="text-primary font-[700]">Our</span>
          <div className="w-fit bg-primary px-4 -skew-x-[20deg]">
            <span className="w-full h-full flex items-center justify-center text-white font-[700] skew-x-[20deg]">
              Partners
            </span>
          </div>
        </div>
        <h2 className="text-[20px] font-[500] text-center text-black my-6">
          Our Valuable CLients
        </h2>
        <Partnership />
      </div>

      {/* Client */}
      <div className="w-full text-center mt-10">
        <div className="w-full flex flex-row gap-2 justify-center text-[24px] md:text-[30px]">
          <span className="text-primary font-[700]">What</span>
          <span className="text-primary font-[700]">Our</span>
          <div className="w-fit bg-primary px-4 -skew-x-[20deg]">
            <span className="w-full h-full flex items-center justify-center text-white font-[700] skew-x-[20deg]">
              Clients
            </span>
          </div>
          <span className="text-primary font-[700]">Say</span>
        </div>
        <Reviews />
      </div>
    </div>
  );
};

export default HomePage;
