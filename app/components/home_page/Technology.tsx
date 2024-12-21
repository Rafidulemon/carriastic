import React from "react";
import Image from "next/image";
import Button from "../button/Button";

const tech_logos = [
  "/technologies/java.png",
  "/technologies/javascript.png",
  "/technologies/python.png",
  "/technologies/node.png",
  "/technologies/trpc.png",
  "/technologies/django.png",
  "/technologies/fast.png",
  "/technologies/mysql.png",
  "/technologies/pg.png",
  "/technologies/react.png",
  "/technologies/next.png",
  "/technologies/vue.png",
  "/technologies/angular.png",
  "/technologies/android.png",
  "/technologies/prisma.png",
  "/technologies/hn.png",
  "/technologies/aws.png",
  "/technologies/css.png",
  "/technologies/html.png",
  "/technologies/firebase.png",
  "/technologies/flutter.png",
  "/technologies/jwt.png",
  "/technologies/wp.png",
  "/technologies/sql.png",
  "/technologies/spring.png",
  "/technologies/rn.png",
  "/technologies/dart.png",
  "/technologies/cy.png",
  "/technologies/se.png",
  "/technologies/joomla.png",
];
const Technology = () => {
  return (
    <div className="w-full flex flex-col items-center py-6 bg-gray-100">
      <div className="w-full flex flex-row gap-2 justify-center text-[24px] md:text-[30px]">
        <div className="w-fit bg-primary px-4 skew-x-[20deg]">
          <span className="w-full h-full flex items-center justify-center text-white font-[700] -skew-x-[20deg]">
            Technologies
          </span>
        </div>
        <span className="text-primary font-[700]">We</span>
        <span className="text-primary font-[700]">Use</span>
      </div>
      <div className="w-[80%] md:w-[50%] grid grid-cols-4 md:grid-cols-10 gap-4 justify-center py-10">
        {tech_logos.map((logo, index) => (
          <div key={index} className="max-w-[50px] max-h-[50px] md:max-w-[80px] md:max-h-[80px]">
            <Image
              src={logo}
              alt=""
              width={200}
              height={200}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
      <Button><span className="px-4">Contact Us</span></Button>
    </div>
  );
};

export default Technology;
