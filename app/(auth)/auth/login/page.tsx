"use client";
import React from "react";
import Image from "next/image";
import TextInput from "@/app/components/inputs/TextInput";
import PasswordInput from "@/app/components/inputs/PasswordInput";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  return (
    <div className="relative z-10 bg-white p-8 md:p-12 rounded-lg shadow-lg w-[80%] lg:w-[400px] xl:w-[500px] text-center">
      <div className="flex justify-center mb-6">
        <Image
          src="/images/logo_main.png"
          alt="logo"
          width={150}
          height={55}
          className="cursor-pointer"
        />
      </div>

      <h2 className="text-3xl font-bold text-gray-700 mb-6">Login</h2>
      <p className="text-sm text-gray-500 mb-8">
        Welcome back!
        <br />
        <a href="/auth/forget-password" className="text-pink-500 hover:underline">
          Did you forget your password?
        </a>
      </p>

      <div className="space-y-4">
        <TextInput label="Email" placeholder="Email" className="w-full" />
        <PasswordInput
          label="Password"
          name="password"
          placeholder="Password"
          className="w-full"
        />
      </div>

      <button className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:opacity-90 transition">
        Log In
      </button>

      <div className="w-full flex flex-row justify-center items-center gap-2 mt-10">
        <div className="text-[16px] text-gray-500">
          Don&apos;t have an account?
        </div>
        <div className="text-primary text-[16px] font-[500] underline cursor-pointer" onClick={()=> router.push("/auth/signup")}>Register</div>
      </div>
    </div>
  );
};

export default Login;
