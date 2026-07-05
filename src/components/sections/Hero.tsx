// "use client";

// import Image from "next/image";
// import Link from "next/link";

// import {
//   Mail,
//   ArrowRight,
//   Download,
// } from "lucide-react";

// import {
//   FaGithub,
//   FaLinkedin,
// } from "react-icons/fa";

// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";

// const techStack = [
//   "React",
//   "Next.js",
//   "TypeScript",
//   "Tailwind CSS",
// ];

// const stats = [
//   {
//     number: "10+",
//     label: "Projects",
//   },
//   {
//     number: "2+",
//     label: "Years Learning",
//   },
//   {
//     number: "100%",
//     label: "Responsive UI",
//   },
// ];

// export default function Hero() {
//   return ( 
//     <section
//   id="home"
//   className="relative overflow-hidden bg-[#050816] pt-28"
// >
//   {/* Background Blur */}

//   <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-violet-600/20 blur-[140px]" />

//   <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />

//   <div className="relative mx-auto max-w-7xl px-6">

//     <div className="grid min-h-[calc(100vh-110px)] items-center gap-16 lg:grid-cols-2">

//       {/* Left Side */}

//       <motion.div
//         initial={{ opacity: 0, x: -60 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//         className="max-w-2xl"
//       >
//                 {/* Available Badge */}

//         <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-sm font-semibold text-emerald-400 backdrop-blur-xl">
//           <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
//           Available for Full-Time Opportunities
//         </div>

//         {/* Greeting */}

//         <p className="mb-4 text-lg font-medium text-violet-400">
//           👋 Hello, I'm
//         </p>

//         {/* Name */}

//         <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
//           <span className="block">Ankur</span>

//           <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
//             Chakraborty
//           </span>
//         </h1>

//         {/* Typing Animation */}

//         <TypeAnimation
//           sequence={[
//             "Frontend Developer",
//             2000,
//             "React Developer",
//             2000,
//             "Next.js Developer",
//             2000,
//             "TypeScript Developer",
//             2000,
//           ]}
//           wrapper="h2"
//           speed={50}
//           repeat={Infinity}
//           className="mt-6 text-2xl font-bold text-cyan-400 md:text-4xl"
//         />

//         {/* Description */}

//         <p className="mt-8 max-w-2xl text-lg leading-9 text-gray-400">
//           Passionate Frontend Developer specializing in{" "}
//           <span className="font-semibold text-white">
//             React, Next.js, TypeScript and Tailwind CSS
//           </span>
//           . I build modern, responsive and scalable web applications with
//           beautiful UI, clean code and exceptional user experience.
//         </p>

//         {/* Tech Stack */}

//         <div className="mt-8 flex flex-wrap gap-3">
//           {techStack.map((tech) => (
//             <span
//               key={tech}
//               className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300 transition hover:scale-105 hover:border-violet-500"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>

//         {/* Buttons */}

//         <div className="mt-10 flex flex-wrap gap-4">

//           <Link
//             href="#contact"
//             className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-violet-500/40"
//           >
//             Hire Me
//             <ArrowRight size={18} />
//           </Link>

//           <a
//             href="/resume.pdf"
//             download
//             className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 px-8 py-4 font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-500/10"
//           >
//             <Download size={18} />
//             Download Resume
//           </a>

//         </div>

//         {/* Social Icons */}

//         <div className="mt-10 flex items-center gap-5">

//           <a
//             href="https://github.com/YOUR_GITHUB_USERNAME"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="rounded-full border border-white/10 p-3 text-gray-300 transition hover:border-violet-500 hover:text-violet-400"
//           >
//             <FaGithub size={22} />
//           </a>

//           <a
//             href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="rounded-full border border-white/10 p-3 text-gray-300 transition hover:border-cyan-500 hover:text-cyan-400"
//           >
//             <FaLinkedin size={22} />
//           </a>

//           <a
//             href="mailto:chakrabortyankur843@gmail.com"
//             className="rounded-full border border-white/10 p-3 text-gray-300 transition hover:border-violet-500 hover:text-violet-400"
//           >
//             <Mail size={22} />
//           </a>

//         </div>

//       </motion.div>
//             {/* Right Side */}

//       <motion.div
//         initial={{ opacity: 0, x: 60 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//         className="relative flex justify-center"
//       >
//         {/* Background Glow */}

//         <div className="absolute h-[420px] w-[420px] rounded-full bg-gradient-to-r from-violet-600/20 to-cyan-500/20 blur-3xl" />

//         {/* Profile Container */}

//         <div className="relative">

//           {/* Floating React */}

//           <motion.div
//             animate={{ y: [0, -10, 0] }}
//             transition={{
//               repeat: Infinity,
//               duration: 3,
//             }}
//             className="absolute -left-10 top-10 rounded-2xl border border-violet-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl"
//           >
//             <p className="font-semibold text-violet-300">
//               ⚛ React
//             </p>
//           </motion.div>

//           {/* Floating Next.js */}

//           <motion.div
//             animate={{ y: [0, 12, 0] }}
//             transition={{
//               repeat: Infinity,
//               duration: 3.5,
//             }}
//             className="absolute -right-10 top-28 rounded-2xl border border-cyan-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl"
//           >
//             <p className="font-semibold text-cyan-300">
//               ▲ Next.js
//             </p>
//           </motion.div>

//           {/* Floating TypeScript */}

//           <motion.div
//             animate={{ y: [0, -8, 0] }}
//             transition={{
//               repeat: Infinity,
//               duration: 2.8,
//             }}
//             className="absolute bottom-10 -left-12 rounded-2xl border border-violet-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl"
//           >
//             <p className="font-semibold text-violet-300">
//               TS TypeScript
//             </p>
//           </motion.div>

//           {/* Floating Tailwind */}

//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{
//               repeat: Infinity,
//               duration: 4,
//             }}
//             className="absolute bottom-16 -right-12 rounded-2xl border border-cyan-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl"
//           >
//             <p className="font-semibold text-cyan-300">
//               💨 Tailwind CSS
//             </p>
//           </motion.div>

//           {/* Profile */}

//           <div className="relative h-[360px] w-[360px] rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 p-[4px] shadow-[0_0_80px_rgba(139,92,246,.45)]">

//             <div className="relative h-full w-full overflow-hidden rounded-full bg-[#050816]">

//               <Image
//                 src="/images/Passport_Photograph.jpg"
//                 alt="Ankur Chakraborty"
//                 fill
//                 priority
//                 className="object-cover"
//               />

//             </div>

//           </div>

//         </div>

//       </motion.div>

//     </div>
//           {/* Statistics */}

//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="mt-24 grid gap-6 md:grid-cols-3"
//       >
//         {stats.map((item) => (
//           <motion.div
//             key={item.label}
//             whileHover={{
//               y: -8,
//               scale: 1.03,
//             }}
//             className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-300"
//           >
//             <h3 className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-5xl font-bold text-transparent">
//               {item.number}
//             </h3>

//             <p className="mt-3 text-gray-400">
//               {item.label}
//             </p>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Scroll Indicator */}

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{
//           delay: 1.5,
//           duration: 1,
//         }}
//         className="mt-20 flex justify-center pb-10"
//       >
//         <Link
//           href="#about"
//           className="group flex flex-col items-center gap-3 text-gray-400 transition hover:text-cyan-400"
//         >
//           <span className="text-xs uppercase tracking-[0.35em]">
//             Scroll Down
//           </span>

//           <div className="flex h-14 w-8 justify-center rounded-full border border-white/20 p-1">
//             <motion.div
//               animate={{
//                 y: [0, 18, 0],
//               }}
//               transition={{
//                 repeat: Infinity,
//                 duration: 1.8,
//               }}
//               className="h-3 w-3 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
//             />
//           </div>
//         </Link>
//       </motion.div>

//     </div>
//   </section>
// );
// }
"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Mail,
  ArrowRight,
  Download,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
];

const stats = [
  {
    number: "10+",
    label: "Projects",
  },
  {
    number: "2+",
    label: "Years Learning",
  },
  {
    number: "100%",
    label: "Responsive UI",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-50 pt-28 transition-colors duration-300 dark:bg-[#050816]"
    >
      {/* Background Blur */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-violet-600/20 blur-[140px] " />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid min-h-[calc(100vh-110px)] items-center gap-16 lg:grid-cols-2">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            {/* Badge */}

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-sm font-semibold text-emerald-500 backdrop-blur-xl dark:text-emerald-400">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
              Available for Full-Time Opportunities
            </div>

            {/* Greeting */}

            <p className="mb-4 text-lg font-medium text-violet-500 dark:text-violet-400">
              👋 Hello, I'm
            </p>

            {/* Name */}

            <h1 className="text-5xl font-extrabold leading-tight text-gray-900 md:text-7xl dark:text-white">
              <span className="block">Ankur</span>

              <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                Chakraborty
              </span>
            </h1>

            {/* Typing */}

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
              className="mt-6 text-2xl font-bold text-cyan-500 md:text-4xl"
            />

            {/* Description */}

            <p className="mt-8 max-w-2xl text-lg leading-9 text-gray-600 dark:text-gray-400">
              Passionate Frontend Developer specializing in{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                React, Next.js, TypeScript and Tailwind CSS
              </span>
              . I build modern, responsive and scalable web applications with
              beautiful UI, clean code and exceptional user experience.
            </p>

            {/* Tech */}

            <div className="mt-8 flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-600 transition hover:scale-105 hover:border-violet-500 dark:text-violet-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-violet-500/40"
              >
                Hire Me
                <ArrowRight size={18} />
              </Link>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 px-8 py-4 font-semibold text-cyan-600 transition-all duration-300 hover:bg-cyan-50 dark:text-cyan-300 dark:hover:bg-cyan-500/10"
              >
                <Download size={18} />
                Download Resume
              </a>

            </div>

            {/* Social */}

            <div className="mt-10 flex items-center gap-5">

              <a
                href="https://github.com/YOUR_GITHUB_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gray-300 p-3 text-gray-700 transition hover:border-violet-500 hover:text-violet-500 dark:border-white/10 dark:text-gray-300 dark:hover:text-violet-400"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gray-300 p-3 text-gray-700 transition hover:border-cyan-500 hover:text-cyan-500 dark:border-white/10 dark:text-gray-300 dark:hover:text-cyan-400"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="mailto:chakrabortyankur843@gmail.com"
                className="rounded-full border border-gray-300 p-3 text-gray-700 transition hover:border-violet-500 hover:text-violet-500 dark:border-white/10 dark:text-gray-300 dark:hover:text-violet-400"
              >
                <Mail size={22} />
              </a>

            </div>

          </motion.div>
          {/* Right Side */}

<motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative flex justify-center"
>
  {/* Glow */}

  <div className="absolute h-[420px] w-[420px] rounded-full bg-gradient-to-r from-violet-600/20 to-cyan-500/20 blur-3xl" />

  <div className="relative">

    {/* React */}

    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        repeat: Infinity,
        duration: 3,
      }}
      className="absolute -left-10 top-10 rounded-2xl border border-violet-500/20 bg-white/70 px-5 py-3 shadow-lg backdrop-blur-xl dark:bg-white/5"
    >
      <p className="font-semibold text-violet-600 dark:text-violet-300">
        ⚛ React
      </p>
    </motion.div>

    {/* Next.js */}

    <motion.div
      animate={{ y: [0, 12, 0] }}
      transition={{
        repeat: Infinity,
        duration: 3.5,
      }}
      className="absolute -right-10 top-28 rounded-2xl border border-cyan-500/20 bg-white/70 px-5 py-3 shadow-lg backdrop-blur-xl dark:bg-white/5"
    >
      <p className="font-semibold text-cyan-600 dark:text-cyan-300">
        ▲ Next.js
      </p>
    </motion.div>

    {/* TypeScript */}

    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{
        repeat: Infinity,
        duration: 2.8,
      }}
      className="absolute bottom-10 -left-12 rounded-2xl border border-violet-500/20 bg-white/70 px-5 py-3 shadow-lg backdrop-blur-xl dark:bg-white/5"
    >
      <p className="font-semibold text-violet-600 dark:text-violet-300">
        TS TypeScript
      </p>
    </motion.div>

    {/* Tailwind */}

    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{
        repeat: Infinity,
        duration: 4,
      }}
      className="absolute bottom-16 -right-12 rounded-2xl border border-cyan-500/20 bg-white/70 px-5 py-3 shadow-lg backdrop-blur-xl dark:bg-white/5"
    >
      <p className="font-semibold text-cyan-600 dark:text-cyan-300">
        💨 Tailwind CSS
      </p>
    </motion.div>

    {/* Profile */}

    <div className="relative h-[360px] w-[360px] rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 p-[4px] shadow-[0_0_80px_rgba(139,92,246,.45)]">

      <div className="relative h-full w-full overflow-hidden rounded-full bg-white dark:bg-[#050816]">

        <Image
          src="/images/Passport_Photograph.jpg"
          alt="Ankur Chakraborty"
          fill
          priority
          sizes="(max-width:768px) 280px, 360px"
          className="object-cover"
        />

      </div>

    </div>

  </div>

</motion.div>

</div>
      {/* Statistics */}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-24 grid gap-6 md:grid-cols-3"
      >
        {stats.map((item) => (
          <motion.div
            key={item.label}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:shadow-none"
          >
            <h3 className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-5xl font-bold text-transparent">
              {item.number}
            </h3>

            <p className="mt-3 text-gray-600 dark:text-gray-400">
              {item.label}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll Indicator */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.5,
          duration: 1,
        }}
        className="mt-20 flex justify-center pb-10"
      >
        <Link
          href="#about"
          className="group flex flex-col items-center gap-3 text-gray-600 transition hover:text-cyan-500 dark:text-gray-400 dark:hover:text-cyan-400"
        >
          <span className="text-xs uppercase tracking-[0.35em]">
            Scroll Down
          </span>

          <div className="flex h-14 w-8 justify-center rounded-full border border-gray-300 p-1 dark:border-white/20">
            <motion.div
              animate={{
                y: [0, 18, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
              }}
              className="h-3 w-3 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
            />
          </div>
        </Link>
      </motion.div>

    </div>
  </section>
  );
}