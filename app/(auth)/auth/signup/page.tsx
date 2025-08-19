"use client";
import Image from "next/image";
import TextInput from "@/app/components/inputs/TextInput";
import PasswordInput from "@/app/components/inputs/PasswordInput";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const router = useRouter();
  return (
    <div className="max-h-[calc(80vh-10px)] overflow-y-auto scrollbar-hidden relative z-10 bg-white p-8 md:p-12 rounded-lg shadow-lg w-[80%] lg:w-[400px] xl:w-[500px] text-center my-6">
      <div className="flex justify-center mb-6">
        <Image
          src="/images/logo_main.png"
          alt="logo"
          width={150}
          height={55}
          className="cursor-pointer"
        />
      </div>

      <h2 className="text-3xl font-bold text-gray-700 mb-6">Sign Up</h2>
      <p className="text-sm text-gray-500">Welcome to Carriastic!</p>
      <div className="w-full flex flex-col justify-center items-center gap-1 my-3">
        <div
          className="text-primary text-sm font-[500] cursor-pointer"
          onClick={() => router.push("/auth/login")}
        >
          Click here to Login
        </div>
      </div>

      <div className="space-y-4 mt-4">
        <TextInput
          label="First Name"
          placeholder="First Name"
          className="w-full"
        />
        <TextInput
          label="Last Name"
          placeholder="Last Name"
          className="w-full"
        />
        <TextInput
          label="Email"
          placeholder="Email"
          className="w-full"
        />
        <TextInput
          label="Phone Number"
          placeholder="Phone Number"
          className="w-full"
        />
        <PasswordInput
          label="Password"
          name="password"
          placeholder="Password"
          className="w-full"
        />
        <PasswordInput
          label="Confirm Password"
          name="Confirm password"
          placeholder="Password"
          className="w-full"
        />
      </div>

      <button className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:opacity-90 transition">
        Sign Up
      </button>
    </div>
  );
};

export default SignUpPage;
