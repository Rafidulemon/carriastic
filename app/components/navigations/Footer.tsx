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
import { usePathname } from "next/navigation";
import EmailInput from "../inputs/EmailInput";
import TextInput from "../inputs/TextInput";
import TextArea from "../inputs/TextArea";
import Button from "../button/Button";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="w-screen flex flex-col mb-6">
      {pathname !== "/contact" && (
        <div className="w-full flex flex-col items-center justify-center relative">
          <div className="hidden md:flex w-full h-[500px] md:h-[650px] relative z-0">
            <Image
              src="/images/contact.jpg"
              alt=""
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-6 md:absolute z-10 bg-white bg-opacity-60">
            <div className="w-full flex flex-col items-center justify-start gap-6 p-6">
              <div className="w-full md:w-[70%] h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <iframe
                  title="Carriastic Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.8278657298845!2d90.40204921543524!3d23.79564059295706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70bdff8f8f5%3A0xe3d29b979b1e9dcf!2sYour%20Company%20Location!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>

              <div className="w-full md:w-[70%] flex flex-col gap-4">
                <div className="w-full flex items-start gap-2 justify-start">
                  <div className="flex gap-1">
                    <span className="font-bold text-primary">📍</span>
                    <span className="font-bold text-primary">Address:</span>
                  </div>

                  <p className="text-gray-600">
                    House 19/1, GP Cha, Mohakhali, Dhaka-1212, Bangladesh
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-primary">📧 Email:</span>
                  <p className="text-gray-600">info@carriastic.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-primary">📞 Phone:</span>
                  <p className="text-gray-600">+8801884517187</p>
                </div>
              </div>
            </div>

            {/* Right Section: Input Form */}
            <div className="w-full flex flex-col items-center justify-center p-4 md:p-6 relative">
              <span className="text-[20px] font-[600] text-primary md:text-[30px] mb-6">
                Get In Touch
              </span>
              <div className="w-full h-full flex flex-col gap-4 md:gap-6 justify-start items-center bg-opacity-60">
                <EmailInput
                  label="Your Email"
                  placeholder="Enter your email here"
                  className="w-[90%] md:w-[75%]"
                />
                <TextInput
                  label="Subject"
                  placeholder="Enter the subject here"
                  className="w-[90%] md:w-[75%]"
                />
                <TextArea
                  label="Message"
                  height="200px"
                  placeholder="Enter your message here"
                  className="w-[90%] md:w-[75%]"
                />
                <Button className="hidden md:flex px-20">
                  <span className="w-full">Send Message</span>
                </Button>
                <Button className="w-full md:hidden px-4" isWidthFull>
                  <span>Send Message</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="bg-primary shadow-xl w-full flex flex-col items-center py-10 gap-6 mb-6">
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
                  { href: "/team", label: "Team" },
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
                <a href="https://www.facebook.com/profile.php?id=100088397602087" className="text-[#1877F2] hover:text-white">
                  <FaFacebookF size={30} />
                </a>
                <a href="#" className="text-[#1DA1F2] hover:text-white">
                  <FaTwitter size={30} />
                </a>
                <a href="https://www.linkedin.com/company/90535817" className="text-[#0077B5] hover:text-white">
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
                  { href: "/team", label: "Team" },
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
            <span className="text-center">
              House 19/1, GP Cha, Mohakhali, Dhaka-1212, Bangladesh
            </span>
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

      <div className="text-center text-black px-4 md:px-0 mt-6">
        <p>© Copyright - Carriastic - 2025. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
