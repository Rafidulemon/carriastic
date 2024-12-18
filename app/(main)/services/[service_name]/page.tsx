import React from "react";
import Image from "next/image";

const ServiceDetails = () => {
  return (
    <div className="w-full h-full mb-10 flex flex-col gap-10 items-center">
      <div className="relative w-full h-[250px] md:h-[600px]">
        <Image
          src="/services/skill-training.jpg"
          alt="Our Services"
          layout="fill"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="text-white text-[48px] font-bold">Skill Training</h1>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
