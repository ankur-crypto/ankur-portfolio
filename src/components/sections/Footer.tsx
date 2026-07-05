// // 
// "use client";

// import Link from "next/link";

// import {
//   FaGithub,
//   FaLinkedin,
//   FaArrowUp,
// } from "react-icons/fa";

// import {
//   MdEmail,
//   MdLocationOn,
// } from "react-icons/md";

// import { motion } from "framer-motion";
// export default function Footer() {
//   return (
//     <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816]">

//       {/* Background Glow */}

//       <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />

//       <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

//       <div className="relative mx-auto max-w-7xl px-6 py-20">

//         {/* Main Content */}

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >

//           <h2 className="text-4xl font-bold text-white">
//             Ankur
//             <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
//               {" "}Chakraborty
//             </span>
//           </h2>

//           <p className="mt-5 text-lg text-gray-400">
//             Frontend Developer • React • Next.js • TypeScript
//           </p>

//           <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-gray-400">

//             <div className="flex items-center gap-2">
//               <MdLocationOn className="text-xl text-violet-400" />
//               Agartala, Tripura
//             </div>

//             <div className="flex items-center gap-2">
//               <MdEmail className="text-xl text-cyan-400" />
//               chakrabortyankur843@gmail.com
//             </div>

//           </div>

//           {/* Social Links */}

//           <div className="mt-10 flex justify-center gap-5">
//                       <Link
//             href="https://github.com/YOUR_GITHUB_USERNAME"
//             target="_blank"
//             className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:scale-110 hover:border-violet-500 hover:text-violet-400 hover:shadow-[0_0_25px_rgba(139,92,246,.35)]"
//           >
//             <FaGithub className="text-2xl" />
//           </Link>

//           <Link
//             href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
//             target="_blank"
//             className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:scale-110 hover:border-cyan-500 hover:text-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,.35)]"
//           >
//             <FaLinkedin className="text-2xl" />
//           </Link>

//         </div>

//         {/* Back To Top */}

//         <div className="mt-14 flex justify-center">

//           <Link
//             href="#home"
//             className="group flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(139,92,246,.45)]"
//           >
//             <FaArrowUp className="transition-transform duration-300 group-hover:-translate-y-1" />
//           </Link>

//         </div>

//         <div className="mt-14 border-t border-white/10 pt-8 text-center">

//           <p className="text-gray-400">
//             © {new Date().getFullYear()} Ankur Chakraborty. All rights reserved.
//           </p>

//           <p className="mt-3 text-sm text-gray-500">
//             Built with ❤️ using Next.js, Tailwind CSS and Framer Motion.
//           </p>

//         </div>

//       </motion.div>

//     </div>

//   </footer>
//   );
// }
"use client";

import Link from "next/link";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gray-200 bg-slate-50 transition-colors duration-300 dark:border-white/10 dark:bg-[#050816]">

      {/* Top Gradient */}

      <div className="h-[2px] w-full bg-gradient-to-r from-violet-600 via-cyan-500 to-violet-600" />

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Branding */}

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-lg font-bold text-white shadow-lg">
                AC
              </div>

              <div>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Ankur
                  <span className="text-cyan-500">.</span>
                </h2>

                <p className="text-sm tracking-widest text-gray-500 dark:text-gray-400">
                  FRONTEND DEVELOPER
                </p>

              </div>

            </div>

            <p className="mt-6 leading-8 text-gray-600 dark:text-gray-400">
              Passionate about building modern, responsive and scalable
              web applications using React, Next.js, TypeScript and
              Tailwind CSS.
            </p>

          </div>
                    {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Contact",
              ].map((item) => (

                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="
                    text-gray-600
                    transition-all
                    duration-300
                    hover:translate-x-2
                    hover:text-violet-500
                    dark:text-gray-400
                    dark:hover:text-violet-400
                  "
                >
                  {item}
                </Link>

              ))}

            </div>

          </div>

          {/* Social Links */}

          <div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Connect
            </h3>

            <div className="mt-6 flex gap-4">

              <a
                href="https://github.com/YOUR_GITHUB_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-300
                  bg-white
                  text-gray-700
                  shadow-lg
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:border-violet-500
                  hover:text-violet-500
                  dark:border-white/10
                  dark:bg-white/5
                  dark:text-white
                "
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-300
                  bg-white
                  text-gray-700
                  shadow-lg
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:border-cyan-500
                  hover:text-cyan-500
                  dark:border-white/10
                  dark:bg-white/5
                  dark:text-white
                "
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="mailto:your.email@gmail.com"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-300
                  bg-white
                  text-gray-700
                  shadow-lg
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:border-violet-500
                  hover:text-violet-500
                  dark:border-white/10
                  dark:bg-white/5
                  dark:text-white
                "
              >
                <Mail size={20} />
              </a>

            </div>

          </div>

        </div>
                <div className="mt-16 border-t border-gray-200 pt-8 dark:border-white/10">

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

            <p className="text-center text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-violet-500">
                Ankur Chakraborty
              </span>
              . All Rights Reserved.
            </p>

            <Link
              href="#home"
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-gradient-to-r
                from-violet-600
                to-cyan-500
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-110
              "
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}