"use client";

import { FaRocketchat, FaTimes } from "react-icons/fa";
import Button from "../button/Button";

const ChatbotModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 right-0 md:bottom-10 md:right-10 h-fit bg-opacity-50 flex z-50 overflow-y-auto max-h-[90%] md:max-h-[80%]">
      <div className="bg-purple-900 w-full max-w-md rounded-lg p-6 relative shadow-lg h-full">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-gray-200"
        >
          <FaTimes size={24} />
        </button>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary">
              <FaRocketchat size={24} />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-xl text-white">
                Carriastic Bot
              </h3>
              <p className="text-sm text-gray-200">
                How can we assist you today?
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="text-sm text-gray-200">Common questions are:</div>
          <div className="space-y-2">
            <Button
              theme="white"
              className="w-full"
              onClick={() => alert("I want to create a website")}
            >
              I want to create a website
            </Button>
            <Button
              theme="white"
              className="w-full"
              onClick={() => alert("I want to promote my company")}
            >
              I want to promote my company
            </Button>
            <Button
              theme="white"
              className="w-full"
              onClick={() => alert("I am a fresher searching for job")}
            >
              I am a fresher searching for job
            </Button>
          </div>
        </div>

        <textarea
          className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:outline-none"
          rows={4}
          placeholder="Type your message..."
        />

        <Button
          isWidthFull
          className="my-2"
          theme="white"
          onClick={() => alert("Sending message...")}
        >
          Send Message
        </Button>
      </div>
    </div>
  );
};

export default ChatbotModal;
