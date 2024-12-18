"use client";
import { useEffect, useState } from "react";
import ".././globals.css";
import Header from "../components/navigations/AuthHeader";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);
  return (
    client && (
      <html lang="en">
        <head>
          <title>Carriastic</title>
          <link rel="icon" href="/images/app_icon.png" type="image/png" />
        </head>
        <body className="overflow-x-hidden antialiased bg-white relative min-h-screen flex flex-col bg-white">
          <div className="absolute top-0 left-0 w-[70%] h-[35%] md:w-[20%] md:h-[35%] bg-gradient-to-tr from-pink-500 to-purple-500 rounded-br-full"></div>
          <div className="absolute bottom-0 right-0 w-[60%] h-[35%] md:w-[15%] md:h-[35%] bg-gradient-to-tl from-blue-400 to-green-400 rounded-tl-full"></div>
          <Header />
          <div className="w-full min-h-[calc(80vh-10px)] flex flex-col justify-center items-center">
            {children}
          </div>
        </body>
      </html>
    )
  );
}
