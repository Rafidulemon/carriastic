"use client";
import React from "react";
import BlogCard from "../../components/cards/BlogCard";
import Image from "next/image";

const blogs = [
  {
    title: "Understanding the Basics of AI and Machine Learning",
    date: "January 15, 2024",
    description: "Explore the foundational concepts behind AI and machine learning and how they’re shaping the future of technology.",
    imageUrl: "/blog/ai-ml-basics.jpg",
    link: "/blog/ai-machine-learning-basics"
  },
  {
    title: "Top 10 Data Science Tools in 2024",
    date: "February 20, 2024",
    description: "A comprehensive guide to the most popular tools used by data scientists today, from data wrangling to visualization.",
    imageUrl: "/blog/data-science-tools.jpg",
    link: "/blog/data-science-tools-2024"
  },
  {
    title: "The Impact of AI on Digital Marketing",
    date: "March 5, 2024",
    description: "How AI is revolutionizing digital marketing strategies, from customer targeting to content personalization.",
    imageUrl: "/blog/ai-marketing.png",
    link: "/blog/impact-of-ai-on-marketing"
  },
  {
    title: "How Machine Learning is Transforming E-commerce",
    date: "March 25, 2024",
    description: "Learn how machine learning is being used to improve the customer experience, from personalized recommendations to predictive analytics.",
    imageUrl: "/blog/machine-learning-ecommerce.png",
    link: "/blog/machine-learning-ecommerce"
  },
  {
    title: "Data Science: The Future of Business Analytics",
    date: "April 10, 2024",
    description: "Discover how data science is driving business decisions and providing deep insights into consumer behavior and operations.",
    imageUrl: "/blog/data-science-future.png",
    link: "/blog/data-science-business-analytics"
  },
  {
    title: "Introduction to Neural Networks for Beginners",
    date: "April 30, 2024",
    description: "A beginner’s guide to understanding neural networks, how they work, and their applications in real-world problems.",
    imageUrl: "/blog/neural-networks.jpg",
    link: "/blog/intro-to-neural-networks"
  },
  {
    title: "The Role of AI in Healthcare: Current and Future Trends",
    date: "May 15, 2024",
    description: "Exploring how AI is transforming healthcare, from diagnosis to patient care and administrative processes.",
    imageUrl: "/blog/ai-healthcare.jpg",
    link: "/blog/ai-in-healthcare"
  },
  {
    title: "Understanding the Importance of Data Privacy in AI",
    date: "June 1, 2024",
    description: "An exploration of the importance of data privacy, ethics, and security in the development of AI technologies.",
    imageUrl: "/blog/data-privacy-ai.png",
    link: "/blog/data-privacy-ai"
  },
  {
    title: "Digital Marketing Trends for 2024",
    date: "June 20, 2024",
    description: "Stay ahead of the curve with the latest trends in digital marketing, including AI tools, social media strategies, and more.",
    imageUrl: "/blog/digital-marketing-trends.jpg",
    link: "/blog/digital-marketing-trends-2024"
  },
  {
    title: "The Role of Data Science in Predictive Analytics",
    date: "July 5, 2024",
    description: "How data science is being used in predictive analytics to forecast trends and make data-driven decisions.",
    imageUrl: "/blog/predictive-analytics.jpg",
    link: "/blog/data-science-predictive-analytics"
  }
];

const BlogsPage = () => {
  return (
    <div className="w-full">
        <div className="relative w-full h-[600px]">
        <Image
          src="/banners/blog.jpg"
          alt="Our Services"
          layout="fill"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="text-white text-[48px] font-bold">Blogs</h1>
        </div>
      </div>
      <h1 className="text-2xl font-bold text-center my-8">Our Latest Blogs</h1>
      <div className="mx-10 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
