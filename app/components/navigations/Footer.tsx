"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  return (
    <div className="w-screen flex flex-col gap-6 mb-6">
      <div className="bg-primary shadow-xl w-full flex flex-col items-center py-10 gap-6">
        <Image
          src="/images/white_logo.png"
          alt="Logo"
          width={140}
          height={50}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <div className="flex flex-row gap-4 justify-center px-2">
          <div className="relative w-full ml-2">
            <input
              type="email"
              placeholder="Input your email"
              className="h-[40px] p-3 pl-10 rounded-md border border-gray-300 mb-3 w-full focus:outline-none"
            />
            <FaEnvelope className="absolute left-3 top-[22px] transform -translate-y-1/2 text-gray-500" />
          </div>
          <button
            className="h-[40px] px-2 md:px-6 bg-orange-500 text-white rounded-md hover:bg-orange-600"
            onClick={() => router.push("/contact")}
          >
            Contact
          </button>
        </div>

        <div className="hidden mt-4 px-10 w-full md1:w-2/3 md:grid grid-cols-3 gap-10 items-start text-white">
          <div className="flex flex-col gap-4 h-full justify-between">
            <span className="font-[700] text-[24px]">Office</span>
            <div className="flex flex-col gap-0">
              <span>House 19/1,</span>
              <span>GP Cha,</span>
              <span>Mohakhali, Dhaka-1212,</span>
              <span>Bangladesh</span>
            </div>

            <div className="flex flex-col gap-1">
              <span>info@carriastic.com</span>
              <span>+8801884517187</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center">
            <span className="font-[700] text-[24px] mb-2">Links</span>
            <div className="flex flex-row gap-6 lg:gap-12">
              <nav className="flex flex-col gap-4">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/services", label: "Services" },
                  { href: "/clients", label: "Clients" },
                ].map((navItem) => (
                  <Link
                    key={navItem.href}
                    href={navItem.href}
                    className="hover:font-[700] hover:underline"
                  >
                    {navItem.label}
                  </Link>
                ))}
              </nav>
              <nav className="flex flex-col gap-4">
                {[
                  { href: "/blogs", label: "Blogs" },
                  { href: "/career", label: "Career" },
                  { href: "/contact", label: "Contact" },
                ].map((navItem) => (
                  <Link
                    key={navItem.href}
                    href={navItem.href}
                    className="hover:font-[700] hover:underline"
                  >
                    {navItem.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <div className="flex flex-col gap-4 h-full items-center">
            <div className="w-full flex flex-col items-center justify-center ">
              <span className="font-[700] text-[24px]">Get In Touch</span>
              <div className="flex gap-6 mt-6">
                <a href="#" className="text-[#1877F2]">
                  <FaFacebookF size={30} />
                </a>
                <a href="#" className="text-[#1DA1F2] hover:text-white">
                  <FaTwitter size={30} />
                </a>
                <a href="#" className="text-[#0077B5] hover:text-white">
                  <FaLinkedinIn size={30} />
                </a>
                <a href="#" className="text-[#FF0000] hover:text-white">
                  <FaYoutube size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden w-full px-4 text-white">
          <div className="flex flex-col gap-2 items-center">
            <span className="font-[700] text-[20px]">Links</span>
            <div className="flex flex-col gap-1 justify-center items-center">
              <nav className="flex flex-row gap-4">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/services", label: "Services" },
                  { href: "/clients", label: "Clients" },
                ].map((navItem) => (
                  <Link
                    key={navItem.href}
                    href={navItem.href}
                    className="hover:font-[700] hover:underline"
                  >
                    {navItem.label}
                  </Link>
                ))}
              </nav>
              <nav className="flex flex-row gap-4">
                {[
                  { href: "/blogs", label: "Blogs" },
                  { href: "/career", label: "Career" },
                  { href: "/contact", label: "Contact" },
                ].map((navItem) => (
                  <Link
                    key={navItem.href}
                    href={navItem.href}
                    className="hover:font-[700] hover:underline"
                  >
                    {navItem.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <div className="flex flex-col mt-6 gap-2 h-full justify-center items-center">
            <span className="font-[700] text-[20px]">Office</span>
              <span className="text-center">House 19/1, GP Cha, Mohakhali, Dhaka-1212, Bangladesh</span>
              <span>info@carriastic.com | +8801884517187</span>
          </div>

          <div className="flex flex-col gap-4 h-full items-center mt-8">
            <div className="w-full flex flex-col items-center justify-center ">
              <span className="font-[700] text-[20px]">Get In Touch</span>
              <div className="flex gap-6 mt-4">
                <a href="#" className="text-[#1877F2]">
                  <FaFacebookF size={22} />
                </a>
                <a href="#" className="text-[#1DA1F2] hover:text-white">
                  <FaTwitter size={22} />
                </a>
                <a href="#" className="text-[#0077B5] hover:text-white">
                  <FaLinkedinIn size={22} />
                </a>
                <a href="#" className="text-[#FF0000] hover:text-white">
                  <FaYoutube size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row justify-center">
        <hr className="w-[80%] md:w-[50%] border border-black border-[1px]" />
      </div>

      <div className="text-center text-black px-4 md:px-0">
        <p>© Copyright - Carriastic - 2025. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
