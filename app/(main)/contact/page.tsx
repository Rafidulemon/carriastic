import React from "react";
import Image from "next/image";
import TextInput from "../../components/inputs/TextInput";
import EmailInput from "../../components/inputs/EmailInput";
import TextArea from "../../components/inputs/TextArea";
import Button from "../../components/button/Button";

const ContactPage = () => {
  return (
    <div className="max-w-screen px-6 md:px-10 w-full h-full my-6 md:grid grid-cols-2 gap-10 justify-between">
      <div className="hidden w-full md:flex flex-row justify-center items-center h-full">
        <Image
          src="/gifs/contact_gif.gif"
          alt="contact"
          width={582}
          height={462}
        />
      </div>
      <div className="md:hidden w-full justify-center items-center h-full">
        <Image
          src="/gifs/contact_gif.gif"
          alt="contact"
          width={300}
          height={220}
        />
      </div>
      <div className="mt-6 flex flex-col w-full items-center gap-6">
        <span className="font-[600] text-[20px] md:text-[24px] text-primary animate-bounce drop-shadow-xl text-center">
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
        <Button className="hidden md:flex px-20">
          <span className="w-full">Send Message</span>
        </Button>
        <Button className="w-full md:hidden" isWidthFull>
          <span>Send Message</span>
        </Button>
      </div>
    </div>
  );
};

export default ContactPage;
