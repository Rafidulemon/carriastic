import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../button/Button";

const Partnership = () => {
  const router = useRouter();
  return (
    <div className="w-full flex flex-col gap-6 my-6 items-center">
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-8 animate-marquee-logo whitespace-nowrap">
          <Image
            src="/clients/client1-logo.jpg"
            alt="Client 1"
            width={200}
            height={80}
            className="object-contain"
          />
          <Image
            src="/clients/client5-logo.jpg"
            alt="Client 5"
            width={200}
            height={80}
            className="object-contain"
          />
          <Image
            src="/clients/client2-logo.jpg"
            alt="Client 2"
            width={200}
            height={80}
            className="object-contain"
          />
          <Image
            src="/clients/client3-logo.jpg"
            alt="Client 3"
            width={200}
            height={80}
            className="object-contain"
          />
          <Image
            src="/clients/client4-logo.jpg"
            alt="Client 4"
            width={200}
            height={80}
            className="object-contain"
          />
          <Image
            src="/clients/client5-logo.jpg"
            alt="Client 5"
            width={200}
            height={80}
            className="object-contain"
          />

          <Image
            src="/clients/client1-logo.jpg"
            alt="Client 1"
            width={200}
            height={80}
            className="object-contain"
          />
          <Image
            src="/clients/client5-logo.jpg"
            alt="Client 5"
            width={200}
            height={80}
            className="object-contain"
          />
          <Image
            src="/clients/client2-logo.jpg"
            alt="Client 2"
            width={200}
            height={80}
            className="object-contain"
          />
          <Image
            src="/clients/client3-logo.jpg"
            alt="Client 3"
            width={200}
            height={80}
            className="object-contain"
          />
          <Image
            src="/clients/client4-logo.jpg"
            alt="Client 4"
            width={200}
            height={80}
            className="object-contain"
          />
          <Image
            src="/clients/client5-logo.jpg"
            alt="Client 5"
            width={200}
            height={80}
            className="object-contain"
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-1 justify-center items-center">
        <span className="text-[18px] font-[600] text-primary">Schedule a meeting</span>
        <Button onClick={() => router.push("/contact")} className="px-8">Book Now</Button>
      </div>
      <div
        onClick={() => router.push("/clients")}
        className="text-primary hover:font-[600] hover:underline text-[18px] cursor-pointer"
      >
        See All
      </div>
    </div>
  );
};

export default Partnership;
