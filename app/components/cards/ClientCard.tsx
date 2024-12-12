import React from "react";
import Image from "next/image";

type ClientCardProps = {
  logoUrl: string;
  name: string;
  description: string;
};

const ClientCard: React.FC<ClientCardProps> = ({ logoUrl, name, description }) => {
  return (
    <div className="w-full p-6 border rounded-lg shadow-lg bg-white text-center">
      <div className="w-full h-40 relative mb-4">
        <Image src={logoUrl} alt={name} layout="fill" objectFit="contain" />
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default ClientCard;
