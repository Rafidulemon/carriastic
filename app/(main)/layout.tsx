"use client"
import ".././globals.css";
import Header from "../components/navigations/Header";
import Footer from "../components/navigations/Footer";
import { FaRocketchat } from "react-icons/fa";
import { useState } from "react";
import ChatbotModal from "../components/modals/ChatBotModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <html lang="en">
      <head>
        <title>Carriastic</title>
        <link rel="icon" href="/images/app_icon.png" type="image/png" />
      </head>
      <body className="overflow-x-hidden antialiased bg-white">
        <Header />
        <div className="mt-[48px] md:mt-[60px] min-h-[calc(80vh-10px)]">{children}</div>
        <Footer />
        <div className="fixed bottom-2 right-2 md:bottom-10 md:right-10">
          <button
          onClick={toggleModal}
            className="p-4 rounded-full shadow-xl shadow-lg bg-neutral-100 md:bg-white focus:outline-none text-primary text-[25px] md:text-[40px]"
          >
            <FaRocketchat />
          </button>
        </div>
        <ChatbotModal isOpen={isModalOpen} onClose={toggleModal} />
      </body>
    </html>
  );
}
