"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#050816]">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between px-6 py-24 md:flex-row">

        {/* Left Side */}
        <div className="max-w-xl">

          <p className="mb-4 text-lg text-violet-400">
            👋 Hello, I m
          </p>

          <h1 className="mb-4 text-6xl font-bold leading-tight text-white">
            Ankur <br />
            Chakraborty
          </h1>

          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "React Developer",
              2000,
              "Next.js Developer",
              2000,
              "TypeScript Developer",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="mb-6 text-3xl font-semibold text-violet-400"
          />

          <p className="mb-8 text-lg leading-8 text-gray-400">
            I build beautiful, modern and scalable web applications using
            React, Next.js, TypeScript and Tailwind CSS.
          </p>

          <div className="flex gap-4">

            <button className="rounded-full bg-violet-600 px-8 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-violet-700">
              Hire Me
            </button>

            <button className="rounded-full border border-violet-500 px-8 py-3 font-semibold text-white transition duration-300 hover:bg-violet-600">
              Download CV
            </button>

          </div>

        </div>

        {/* Right Side */}
        <div className="mb-16 md:mb-0">

          <div className="relative h-80 w-80 animate-pulse">

            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-full border-4 border-violet-500 shadow-[0_0_70px_rgba(139,92,246,0.9)]"></div>

            {/* Profile Image */}
            <Image
              src="/images/Passport_Photograph.jpg"
              alt="Ankur Chakraborty"
              fill
              priority
              className="rounded-full object-cover p-3"
            />

          </div>

        </div>

      </div>
    </section>
  );
}