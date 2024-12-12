import React from "react";
import Image from "next/image";
import TextInput from "../components/inputs/TextInput";
import EmailInput from "../components/inputs/EmailInput";
import TextArea from "../components/inputs/TextArea";
import Button from "../components/button/Button";

const ContactPage = () => {
  return (
    <div className="px-10 w-full h-full my-6 grid grid-cols-2 gap-10 justify-between">
      <div className="w-full flex flex-row justify-center items-center h-full">
        <Image
          src="/gifs/contact_gif.gif"
          alt="contact"
          width={582}
          height={462}
        />
      </div>
      <div className="flex flex-col w-full items-center gap-6">
        <span className="font-[600] text-[24px] text-primary animate-bounce drop-shadow-xl">
          Drop Your Message here
        </span>
        <EmailInput
          label="Your Email"
          placeholder="Enter your email here"
          className="w-full mt-6"
        />
        <TextInput
          label="Subject"
          placeholder="Enter the subject here"
          className="w-full"
        />
        <TextArea
          label="Message"
          height="200px"
          placeholder="Enter your message here"
          className="w-full"
        />
        <Button className="px-20">
          <span className="w-full">Send Message</span>
        </Button>
      </div>
    </div>
  );
};

export default ContactPage;
