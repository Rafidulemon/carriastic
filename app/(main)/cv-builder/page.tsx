"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../../components/button/Button";
import { FaTrophy } from "react-icons/fa";
import { FiUsers, FiPackage, FiSmile, FiHeart } from "react-icons/fi";
import PersonalInformation from "@/app/components/cv_build/PersonalInformation";

type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Card = ({ icon, title, description }: CardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
    <div className="text-primary mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const CVBuilderPage = () => {
  const [startBuilding, setStartBuilding] = useState(false);

  return (
    <div className="w-full p-8">
      {!startBuilding ? (
        <>
          <section className="text-primaryx">
            <div className="mx-auto flex flex-col md:flex-row items-center justify-center">
              <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl font-bold mb-4">Build Your CV</h1>
                <p className="text-lg mb-6">
                  Create a professional CV that stands out to employers.
                </p>
              </div>
              <div className="mt-8 md:mt-0">
                <Image
                  src="/gifs/cv_builder.gif"
                  alt="CV Builder"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </section>

          {/* WHY USE SECTION */}
          <section className="py-16 bg-gray-100">
            <div className="mx-auto flex flex-col items-center">
              <h2 className="text-3xl font-bold text-center mb-8">
                Why Use Our CV Builder?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card
                  icon={<FiUsers className="text-primary w-16 h-16 mb-4" />}
                  title="User-Friendly"
                  description="Easy to use interface for quick CV creation."
                />
                <Card
                  icon={<FiPackage className="text-primary w-16 h-16 mb-4" />}
                  title="Customizable Templates"
                  description="Choose from a variety of professional templates."
                />
                <Card
                  icon={<FiSmile className="text-primary w-16 h-16 mb-4" />}
                  title="Satisfaction Guaranteed"
                  description="Create a CV that you will be proud to share."
                />
                <Card
                  icon={<FiHeart className="text-primary w-16 h-16 mb-4" />}
                  title="Free to Use"
                  description="Build your CV without any cost."
                />
                <Card
                  icon={<FaTrophy className="text-primary w-16 h-16 mb-4" />}
                  title="Stand Out"
                  description="Make your CV stand out to potential employers."
                />
              </div>
              <div className="mt-6">
                <Button onClick={() => setStartBuilding(true)}>
                  <span className="px-6">Start Building</span>
                </Button>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div className="max-w-3xl mx-auto">
          <PersonalInformation />
        </div>
      )}
    </div>
  );
};

export default CVBuilderPage;
