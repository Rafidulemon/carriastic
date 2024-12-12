import React from "react";
import Image from "next/image";

type BlogCardProps = {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  link: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ title, date, description, imageUrl, link }) => {
  return (
    <div className="w-full p-4 border rounded-lg shadow-sm bg-white flex flex-col gap-4">
      <div className="w-full h-60 relative">
        <Image 
          src={imageUrl} 
          alt={title} 
          layout="fill" 
          objectFit="cover" 
          className="rounded-md" 
        />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{date}</p>
      <p className="text-gray-700">{description}</p>
      <a href={link} className="text-blue-500 font-semibold hover:underline">Read More</a>
    </div>
  );
};

export default BlogCard;
