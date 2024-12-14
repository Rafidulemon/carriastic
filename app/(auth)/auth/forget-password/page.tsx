"use client";
import Image from "next/image";
import TextInput from "@/app/components/inputs/TextInput";
import { useRouter } from "next/navigation";

const ForgetPasswordPage = () => {
  const router = useRouter();
  return (
    <div className="max-h-[calc(80vh-10px)] overflow-y-auto relative z-10 bg-white p-8 md:p-12 rounded-lg shadow-lg w-[80%] lg:w-[400px] xl:w-[500px] text-center my-6">
      <div className="flex justify-center mb-6">
        <Image
          src="/images/logo_main.png"
          alt="logo"
          width={150}
          height={55}
          className="cursor-pointer"
        />
      </div>

      <h2 className="text-2xl font-bold text-gray-700 mb-6">Forget Password?</h2>
      <div className="space-y-4 mt-10">
        <TextInput
          label="Enter your email"
          placeholder="Enter your email"
          className="w-full"
        />
      </div>

      <button className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:opacity-90 transition" onClick={()=> router.push("/auth/reset-password")}>
        Send Email
      </button>
    </div>
  );
};

export default ForgetPasswordPage;
