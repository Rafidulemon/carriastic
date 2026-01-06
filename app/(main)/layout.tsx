"use client";
import Header from "../components/navigations/Header";
import Footer from "../components/navigations/Footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import ChatbotModal from "../components/modals/ChatBotModal";
import LanguageProvider from "../i18n/LanguageProvider";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jakarta",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  useEffect(() => {
    let timeoutId: number | null = null;

    const handleScroll = () => {
      document.body.classList.add("scrollbar-active");
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
      timeoutId = window.setTimeout(() => {
        document.body.classList.remove("scrollbar-active");
      }, 900);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
      document.body.classList.remove("scrollbar-active");
    };
  }, []);

  useEffect(() => {
    const handleOpenChatbot = () => {
      setIsModalOpen(true);
    };

    window.addEventListener("carriastic:open-chatbot", handleOpenChatbot);
    return () => {
      window.removeEventListener("carriastic:open-chatbot", handleOpenChatbot);
    };
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    client && (
      <div
        className={`overflow-x-hidden overflow-y-auto antialiased font-jakarta ${jakarta.variable} ${spaceGrotesk.variable}`}
      >
        <LanguageProvider>
          <Header />
          <div className="mt-16 md:mt-20 min-h-[calc(80vh-10px)]">
            {children}
          </div>
          <Footer />
          {!isModalOpen && (
            <div
              className="cursor-pointer fixed bottom-0 right-0 md:bottom-6 md:right-6 flex flex-row items-center"
              onClick={toggleModal}
            >
              <Image
                src="/gifs/chatbot.gif"
                alt="Chatbot"
                width={48}
                height={48}
                className="h-20 w-20 md:h-28 md:w-28"
                unoptimized
              />
              <div className="hidden md:block h-9 rounded-xl -ml-2 -mt-4 px-3 py-1 bg-gradient-to-r from-primary via-[#6d36dc] to-[#4b50e6] text-white font-space-grotesk">
                Meet Carriastic AI
              </div>
            </div>
          )}

          <ChatbotModal isOpen={isModalOpen} onClose={toggleModal} />
        </LanguageProvider>
      </div>
    )
  );
}
