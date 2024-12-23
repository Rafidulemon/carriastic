"use client";
import React, { FC } from "react";
import TextInput from "../inputs/TextInput";
import FileInput from "../inputs/FileInput";
import EmailInput from "../inputs/EmailInput";
import { IoIosCloseCircle } from "react-icons/io";

interface CvDropModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

const CvDropModal: FC<CvDropModalProps> = ({ isOpen, onClose, className }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-6">
      <div
        className={`relative bg-gray-100 p-6 rounded-xl ${className}`}
        style={{
          backgroundImage: `url("/images/white_bg.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 md:top-4 md:right-4 text-primary text-3xl hover:text-gray-400 transition"
        >
          <IoIosCloseCircle />
        </button>

        <h2 className="text-2xl text-primary font-bold mb-4 w-full text-center">
          Drop Your CV
        </h2>
        <form className="my-6 flex flex-col gap-4">
          <TextInput label="Name" placeholder="Enter Your name" isRequired />
          <EmailInput label="Your Email" placeholder="Enter your email" isRequired />
          <TextInput label="Phone Number" placeholder="Enter Your phone number" />
          <FileInput label="Upload your CV" isRequired />
          <div className="flex flex-col md:flex-row justify-end gap-4 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="w-full md:w-fit px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full md:w-fit px-4 py-2 bg-primary text-white rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CvDropModal;
