"use client";
import React from "react";
import Image from "next/image";
import Button from "../../components/button/Button";
import { useRouter } from "next/navigation";

function AboutPage() {
  const router = useRouter();
  return (
    <div className="w-full h-full mb-10 flex flex-col items-center">
      <div className="relative w-full h-[600px]">
        <Image
          src="/banners/about_us.jpg"
          alt="About Us"
          layout="fill"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="text-white text-[48px] font-bold">About Us</h1>
        </div>
      </div>

      <div className="w-full px-10 mt-6 flex flex-col items-center gap-6">
        <div className="w-full grid grid-cols-2 gap-10 mt-6">
          <div className="w-full flex flex-row justify-center h-full">
            <Image
              src="/gifs/about.gif"
              alt="Mission"
              width={350}
              height={250}
            />
          </div>
          <div className="w-full flex flex-col gap-6 items-center">
            <span className="text-[28px] text-primary font-[500] w-full text-center">
              Who we are
            </span>
            <p className="w-full text-black text-justify text-[18px]">
              Carriastic is trying to solve the Unemployment problem initially
              in Bangladesh and later on globally. We are basically a job
              placement platform for graduates and understudies, especially,
              focusing on their careers for ensuring job placement in the
              competitive job market. Carriastic is the bridge between job
              seekers and employee seekers. Job seekers will get their desired
              job and vendors will ensure qualified employees without hassle.
              Our main motto is creating quality full Human resources for the
              companies. We are ensuring the quality of our candidates’ through
              various training and skill development programs. Throughout the
              months, we run these training programs with our trainers. As a
              result, we enhance the quality and skills of the Human resources
              for getting jobs along with it will increase the productivity of
              concerns and reduce the unemployment problem in Bangladesh.{" "}
            </p>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 gap-10 mt-6">
          <div className="w-full flex flex-col gap-6">
            <span className="text-[28px] text-primary font-[500] w-full">
              Our Mission
            </span>
            <p className="w-full text-black text-justify text-[18px]">
              Our mission is to ensure qualified candidates for our stakeholders
              and make the candidates eligible to start their very first career
              through various skill development programs. Our main focus is to
              create a platform that can create a bridge among the concerns and
              applicants.{" "}
            </p>
          </div>
          <div className="w-full flex flex-row justify-center h-full">
            <Image
              src="/gifs/mission.gif"
              alt="Mission"
              width={350}
              height={250}
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-2 gap-10 mt-6">
          <div className="w-full flex flex-row justify-center h-full">
            <Image
              src="/gifs/vision.gif"
              alt="Vision"
              width={350}
              height={250}
            />
          </div>
          <div className="w-full flex flex-col gap-6">
            <span className="text-[28px] text-primary font-[500] w-full">
              Our Vision
            </span>
            <p className="w-full text-black text-justify text-[18px]">
              Our vision is to create a sustainable qualified human resource to
              reduce the unemployment problem nationally and globally. Though
              initially we are trying to reduce the unemployment problem in
              Bangladesh, we will expand our network to an international level.
              We will ensure local employment, global employment, and remote
              jobs as well. Moreover, our organization will create a positive
              effect on the global or local environment, community, society, or
              economy.
            </p>
          </div>
        </div>

        <div className="w-full mt-6 flex flex-col gap-6">
          <span className="text-[28px] text-primary font-[500] w-full text-center">
            Why choose us?
          </span>
          <li>
            Carriastic is trying to solve the Unemployment problem initial in
            Bangladesh and later on globally.{" "}
          </li>
          <li>
            Carriastic will become the bridge between job seekers and employee
            seekers(vendors). Job seekers will get their desired job and vendors
            will be ensured qualified employees without hassle.
          </li>
          <li>
            As a result, productivity of vendors will be increased and
            unemployment problem will be slightly reduced.
          </li>
          <li>
            Initially we will collect jobs seekers by CV collection. We are
            collecting CV/resumes by various way like collecting from our own CV
            dropping platform, social media ads, in person communication etc.
          </li>
          <li>
            Later on, we will conduct career development program in universities
            and collect proper candidates by running a 4-month training program.
          </li>
          <li>
            These trained qualified candidates will be referred to the vendors.
          </li>
        </div>

        <div className="w-full mt-6 flex flex-col items-center gap-6">
          <span className="text-[28px] text-primary font-[500]">
            Interested on us?
          </span>
          <Button className="px-10" onClick={() => router.push("/contact")}>
            Contact Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
