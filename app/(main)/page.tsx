"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Banner from "../components/home_page/Banner";
import WhyUs from "../components/home_page/WhyUs";
import Trainees from "../components/home_page/Trainees";
import Reviews from "../components/home_page/Reviews";
import Partnership from "../components/home_page/Partnership";
import Services from "../components/home_page/Services";

const HomePage = () => {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col">
      <Banner />
      {/* About us */}
      <div className="w-full px-6 md:px-10 md:grid grid-cols-2 my-10">
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
          <button
            className="md:mx-6 md:px-4 py-2 md:py-2 md:rounded-lg bg-white w-full md:w-fit"
            onClick={() => router.push("/about")}
          >
            More About Us
          </button>
        </div>
      </div>
      {/* Why US */}
      <div className="w-full text-center mt-6">
        <span className="text-primary font-[700] text-[24px]">Why Us</span>
        <WhyUs />
      </div>

      {/* Services */}
      <div className="w-full text-center bg-neutral-100 pt-6">
        <span className="text-primary font-[700] text-[24px]">Our Services</span>
        <Services />
      </div>

      {/* Trainees */}
      <div className="w-full text-center mt-10">
        <span className="text-primary font-[700] text-[24px]">
          Our Successful Trainees
        </span>
        <h2 className="text-[20px] font-[500] text-center text-black my-6">
          Hear from our Successful Trainees
        </h2>
        <Trainees />
      </div>

      {/* Partnership */}
      <div className="w-full text-center mt-10 bg-neutral-100 pt-6">
        <span className="text-primary font-[700] text-[24px]">Partnership</span>
        <h2 className="text-[20px] font-[500] text-center text-black my-6">
          Our Valuable CLients
        </h2>
        <Partnership />
      </div>

      {/* Client */}
      <div className="w-full text-center mt-10">
        <span className="text-primary font-[700] text-[24px]">
          What Our Clients say
        </span>
        <Reviews />
      </div>

      <div className="w-full flex flex-col items-center bg-neutral-100 pt-6">
        <span className="text-primary font-[700] text-[24px]">
          CEO&apos;s Quote
        </span>
        <div className="flex flex-col md:max-w-[40%] mx-auto px-6 justify-center items-center py-6">
          <p className="text-lg md:text-xl text-gray-800 italic mb-2 text-justify">
            &quot;At Carriastic, our vision is not just to fill jobs but to
            create lasting impacts in the career paths of every individual we
            work with. Together, we build a better future for our society.&quot;
          </p>

          <Image src="/images/rafid2.png" alt="" width={150} height={150} />
          <div className="flex flex-col justify-center items-center gap-1">
            <h3 className="text-xl font-bold text-primary">
              Md. Rafidul Islam
            </h3>
            <p className="text-md text-gray-600">CEO, Carriastic</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
