import React from "react";

type ServiceCardProps = {
  name: string;
  details: string;
  icon: React.ReactNode;
  color: string;
  background: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  details,
  icon,
  color,
  background,
}) => {
  return (
    <div
      className={`group w-full h-[300px] md:w-[300px] xl:w-[350px] flex flex-col items-center justify-center p-6 rounded-md shadow-md ${background} 
      hover:shadow-lg hover:scale-105 transform transition-all duration-300 cursor-pointer`}
    >
      <div
        className={`text-5xl mb-4 ${color} group-hover:text-white transition-colors duration-300`}
      >
        {icon}
      </div>
      <h3
        className="text-lg font-semibold text-gray-800 group-hover:text-white transition-colors duration-300"
      >
        {name}
      </h3>
      <p
        className="text-justify text-gray-600 text-center mt-2 group-hover:text-white transition-colors duration-300"
      >
        {details}
      </p>
    </div>
  );
};

export default ServiceCard;
