"use client";
import Image from "next/image";

const teamMembers = [
  {
    name: "Md. Rafidul Islam",
    role: "CEO",
    bio: "A visionary leader with a passion for creating career opportunities and empowering the workforce.",
    image: "/team/rafid.png",
  },
  {
    name: "Syed Hasan Ahmed",
    role: "COO",
    bio: "Operational excellence is her focus, ensuring our business runs smoothly and efficiently.",
    image: "/team/hasan.png",
  },
  {
    name: "Ahsan Habib Ethic",
    role: "CMO",
    bio: "Operational excellence is her focus, ensuring our business runs smoothly and efficiently.",
    image: "/team/ethic.png",
  },
  {
    name: "SK Imran Sabuj",
    role: "CTO",
    bio: "Tech enthusiast and problem-solver, leading the technological innovation of our platform.",
    image: "/team/sabuj.png",
  },
  {
    name: "Shahriar Emon",
    role: "Lead Developer",
    bio: "Driving the development of our platform, Mark brings years of experience in coding and product management.",
    image: "/team/emon.png",
  },
];

const OurTeamPage = () => {
  return (
    <div className="w-full flex flex-col items-center mb-12">
      <div className="relative w-full h-[220px] md:h-[600px] mb-10">
        <Image
          src="/banners/team.jpg"
          alt="Our Services"
          layout="fill"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="text-white text-[48px] font-bold">Our Team</h1>
        </div>
      </div>
      <span className="text-primary font-[700] text-[24px]">Meet Our Team</span>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-[20px] font-[500] text-center text-black mb-6">
          Our team of passionate individuals who are committed to making a
          difference.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="cursor-pointer flex flex-col items-center text-center bg-white p-2 md:p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mb-6"
              />
              <h3 className="text-xl font-bold text-primary mb-2">
                {member.name}
              </h3>
              <p className="text-lg font-semibold text-gray-600 mb-4">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeamPage;
