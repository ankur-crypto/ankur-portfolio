
// // "use client";

// // import Link from "next/link";

// // import {
// //   Download,
// //   Mail,
// //   MapPin,
// //   GraduationCap,
// //   Briefcase,
// // } from "lucide-react";

// // const stats = [
// //   {
// //     value: "7+",
// //     label: "Projects",
// //   },
// //   {
// //     value: "12+",
// //     label: "Technologies",
// //   },
// //   {
// //     value: "1+",
// //     label: "Years Learning",
// //   },
// //   {
// //     value: "100%",
// //     label: "Dedication",
// //   },
// // ];

// // const personalInfo = [
// //   {
// //     icon: GraduationCap,
// //     title: "Education",
// //     value: "B.Tech in Computer Science",
// //   },
// //   {
// //     icon: Briefcase,
// //     title: "Role",
// //     value: "Frontend Developer",
// //   },
// //   {
// //     icon: MapPin,
// //     title: "Location",
// //     value: "Tripura, India",
// //   },
// // ];

// // export default function About() {
// //   return (
// //     <section
// //       id="about"
// //       className="bg-[#0B1120] py-24 text-white"
// //     >
// //       <div className="mx-auto max-w-7xl px-6">

// //         {/* Heading */}

// //         <div className="mb-20 text-center">

// //           <span className="inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
// //             About Me
// //           </span>

// //           <h2 className="mt-6 text-4xl font-bold md:text-5xl">
// //             Building Digital Experiences
// //           </h2>

// //           <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
// //             Passionate about crafting fast, responsive and modern web
// //             applications using React, Next.js and TypeScript.
// //           </p>

// //         </div>

// //         {/* Main Grid */}

// //         <div className="grid items-center gap-16 lg:grid-cols-2">
// //                     {/* Left Side */}

// //           <div>

// //             <h3 className="text-3xl font-bold leading-tight text-white md:text-4xl">
// //               Hi, I'm
// //               <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
// //                 {" "}
// //                 Ankur Chakraborty
// //               </span>
// //             </h3>

// //             <p className="mt-8 text-lg leading-8 text-gray-400">
// //               I'm a passionate Frontend Developer who enjoys building
// //               modern, responsive and user-friendly web applications
// //               using React, Next.js, TypeScript and Tailwind CSS.
// //             </p>

// //             <p className="mt-6 text-lg leading-8 text-gray-400">
// //               My goal is to transform ideas into clean, scalable and
// //               accessible digital experiences while continuously learning
// //               new technologies and improving my development skills.
// //             </p>

// //             {/* Buttons */}

// //             <div className="mt-10 flex flex-wrap gap-4">

// //               <a
// //                 href="/resume.pdf"
// //                 download
// //                 className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/30"
// //               >
// //                 <Download size={20} />
// //                 Download Resume
// //               </a>

// //               <Link
// //                 href="#contact"
// //                 className="inline-flex items-center gap-2 rounded-full border border-violet-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-violet-600"
// //               >
// //                 <Mail size={20} />
// //                 Contact Me
// //               </Link>

// //             </div>

// //             {/* Personal Info */}

// //             <div className="mt-12 space-y-4">
// //               {personalInfo.map((item, index) => {
// //   const Icon = item.icon;

// //   return (
// //     <div
// //       key={index}
// //       className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.20)]"
// //     >
// //       <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white">
// //         <Icon size={24} />
// //       </div>

// //       <div>
// //         <h4 className="text-lg font-semibold text-white">
// //           {item.title}
// //         </h4>

// //         <p className="mt-1 text-gray-400">
// //           {item.value}
// //         </p>
// //       </div>
// //     </div>
// //   );
// // })}

// //           </div>

// //         </div>

// //         {/* Right Side */}

// //         <div className="grid grid-cols-2 gap-6">

// //           {stats.map((item, index) => (
// //             <div
// //               key={index}
// //               className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500 hover:shadow-[0_0_35px_rgba(139,92,246,.25)]"
// //             >
// //               <h3 className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-5xl font-bold text-transparent">
// //                 {item.value}
// //               </h3>

// //               <p className="mt-4 text-gray-400">
// //                 {item.label}
// //               </p>
// //             </div>
// //           ))}

// //           {/* Tech Card */}

// //           <div className="col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500">

// //             <h3 className="text-2xl font-bold text-white">
// //               Tech Stack
// //             </h3>

// //             <div className="mt-6 flex flex-wrap gap-3">

// //               {[
// //                 "React",
// //                 "Next.js",
// //                 "TypeScript",
// //                 "Tailwind CSS",
// //                 "Material UI",
// //                 "JavaScript",
// //                 "Git",
// //                 "GitHub",
// //               ].map((tech) => (
// //                 <span
// //                   key={tech}
// //                   className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300"
// //                 >
// //                   {tech}
// //                 </span>
// //               ))}

// //             </div>

// //           </div>

// //         </div>
// //               </div>

// //     </div>

// //   </section>
// //   );
// // }
// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   User,
//   MapPin,
//   GraduationCap,
//   Briefcase,
//   Mail,
//   Languages,
// } from "lucide-react";

// const info = [
//   {
//     icon: User,
//     title: "Name",
//     value: "Ankur Chakraborty",
//   },
//   {
//     icon: GraduationCap,
//     title: "Education",
//     value: "B.Sc Graduate",
//   },
//   {
//     icon: Briefcase,
//     title: "Role",
//     value: "Frontend Developer",
//   },
//   {
//     icon: MapPin,
//     title: "Location",
//     value: "Agartala, Tripura",
//   },
//   {
//     icon: Languages,
//     title: "Languages",
//     value: "English, Hindi, Bengali",
//   },
//   {
//     icon: Mail,
//     title: "Email",
//     value: "chakrabortyankur843@gmail.com",
//   },
// ];
// export default function About() {
//   return (
//     <section
//       id="about"
//       className="bg-[#050816] py-24"
//     >
//       <div className="mx-auto max-w-7xl px-6">

//         {/* Heading */}

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="mb-20 text-center"
//         >
//           <span className="inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
//             About Me
//           </span>

//           <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
//             Get To Know Me
//           </h2>

//           <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
//             I'm a passionate Frontend Developer who enjoys creating
//             beautiful, responsive and user-friendly web applications.
//             I love turning ideas into modern digital experiences using
//             React, Next.js, TypeScript and Tailwind CSS.
//           </p>
//         </motion.div>

//         <div className="grid gap-14 lg:grid-cols-2">
//                   {/* Left Side */}

//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h3 className="text-3xl font-bold text-white">
//             Frontend Developer
//           </h3>

//           <p className="mt-6 leading-8 text-gray-400">
//             Hello! I'm
//             <span className="font-semibold text-violet-400">
//               {" "}Ankur Chakraborty
//             </span>
//             , a passionate Frontend Developer from Agartala, Tripura.
//             I enjoy building modern, responsive and user-friendly web
//             applications using React, Next.js, TypeScript and Tailwind CSS.
//           </p>

//           <p className="mt-6 leading-8 text-gray-400">
//             I believe in writing clean, maintainable code and continuously
//             improving my skills by learning new technologies and building
//             real-world projects.
//           </p>

//           {/* Career Objective */}

//           <div className="mt-10 rounded-3xl border border-violet-500/20 bg-white/5 p-8 backdrop-blur-xl">

//             <h4 className="text-2xl font-bold text-white">
//               Career Objective
//             </h4>

//             <p className="mt-5 leading-8 text-gray-400">
//               My goal is to join a company where I can contribute to
//               meaningful products, collaborate with experienced developers,
//               and continue growing as a React and Next.js developer while
//               delivering high-quality software solutions.
//             </p>

//           </div>

//           {/* Highlights */}

//           <div className="mt-10 flex flex-wrap gap-3">

//             {[
//               "React",
//               "Next.js",
//               "TypeScript",
//               "Tailwind CSS",
//               "Material UI",
//               "REST APIs",
//               "Responsive Design",
//               "Frontend Development",
//             ].map((item) => (
//               <span
//                 key={item}
//                 className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300 transition-all duration-300 hover:scale-105 hover:border-violet-500"
//               >
//                 {item}
//               </span>
//             ))}

//           </div>

//         </motion.div>
//                 {/* Right Side */}

//         <motion.div
//           initial={{ opacity: 0, x: 60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <div className="grid gap-6 sm:grid-cols-2">

//             {info.map((item) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={item.title}
//                   className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,.25)]"
//                 >
//                   <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500">

//                     <Icon
//                       size={26}
//                       className="text-white"
//                     />

//                   </div>

//                   <h4 className="mt-6 text-xl font-semibold text-white">
//                     {item.title}
//                   </h4>

//                   <p className="mt-2 text-gray-400">
//                     {item.value}
//                   </p>

//                 </div>
//               );
//             })}

//           </div>

//           {/* Quick Stats */}

//           <div className="mt-8 rounded-3xl border border-violet-500/20 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 p-8 backdrop-blur-xl">

//             <h3 className="text-2xl font-bold text-white">
//               Quick Summary
//             </h3>

//             <div className="mt-8 grid grid-cols-3 gap-6 text-center">

//               <div>
//                 <h4 className="text-3xl font-bold text-violet-400">
//                   15+
//                 </h4>

//                 <p className="mt-2 text-sm text-gray-400">
//                   Projects
//                 </p>
//               </div>

//               <div>
//                 <h4 className="text-3xl font-bold text-cyan-400">
//                   20+
//                 </h4>

//                 <p className="mt-2 text-sm text-gray-400">
//                   Technologies
//                 </p>
//               </div>

//               <div>
//                 <h4 className="text-3xl font-bold text-emerald-400">
//                   Open
//                 </h4>

//                 <p className="mt-2 text-sm text-gray-400">
//                   To Work
//                 </p>
//               </div>

//             </div>

//           </div>

//         </motion.div>

//       </div>
//               {/* Bottom CTA */}

//                 {/* Bottom CTA */}

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl"
//         >
//           <h3 className="text-3xl font-bold text-white">
//             Let's Build Something Amazing Together 🚀
//           </h3>

//           <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
//             I'm actively looking for Frontend Developer opportunities where I
//             can contribute, learn, and grow while building modern web
//             applications using React, Next.js, TypeScript and Tailwind CSS.
//           </p>

//           <Link
//             href="#contact"
//             className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-violet-500/30"
//           >
//             Let's Connect
//           </Link>
//         </motion.div>

//       </div>
//     </section>
//   );
// }
"use client";

import {
  User,
  GraduationCap,
  Briefcase,
  MapPin,
  Mail,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";
import Link from "next/link";

const infoCards = [
  {
    icon: User,
    title: "Name",
    value: "Ankur Chakraborty",
  },
  {
    icon: GraduationCap,
    title: "Education",
    value: "B.Sc Graduate",
  },
  {
    icon: Briefcase,
    title: "Role",
    value: "Frontend Developer",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Agartala, Tripura",
  },
];

const highlights = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Responsive UI",
  "REST API",
];

export default function About() {
  return (
    <section
      id="about"
      className="
      relative
      overflow-hidden
      bg-slate-50
      py-28
      transition-colors
      duration-300
      dark:bg-[#050816]
      "
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          <span
            className="
            inline-block
            rounded-full
            border
            border-violet-500/30
            bg-violet-500/10
            px-5
            py-2
            text-sm
            font-semibold
            tracking-[0.25em]
            uppercase
            text-violet-500
            "
          >
            About Me
          </span>

          <h2
            className="
            mt-6
            text-5xl
            font-extrabold
            text-gray-900
            dark:text-white
            "
          >
            Get To Know Me
          </h2>

          <p
            className="
            mt-6
            text-lg
            leading-8
            text-gray-600
            dark:text-gray-400
            "
          >
            I'm a passionate Frontend Developer who enjoys building
            modern, responsive and beautiful web applications using
            React, Next.js, TypeScript and Tailwind CSS.
          </p>

        </motion.div>

        {/* Main Grid */}

        <div className="grid gap-14 lg:grid-cols-2">
          {/* Left Side */}

<motion.div
  initial={{ opacity: 0, x: -60 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="space-y-8"
>
  {/* About Card */}

  <div
    className="
      rounded-3xl
      border
      border-gray-200
      bg-white
      p-8
      shadow-lg
      transition-all
      duration-300
      hover:-translate-y-2
      dark:border-white/10
      dark:bg-white/5
      dark:shadow-none
    "
  >
    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
      Frontend Developer
    </h3>

    <p className="mt-6 leading-8 text-gray-600 dark:text-gray-400">
      Hello! I'm
      <span className="font-semibold text-violet-500">
        {" "}Ankur Chakraborty
      </span>
      , a passionate Frontend Developer from
      <span className="font-semibold">
        {" "}Agartala, Tripura.
      </span>
    </p>

    <p className="mt-5 leading-8 text-gray-600 dark:text-gray-400">
      I specialize in creating modern, responsive and user-friendly web
      applications using React, Next.js, TypeScript and Tailwind CSS.
    </p>

    <p className="mt-5 leading-8 text-gray-600 dark:text-gray-400">
      I enjoy transforming UI designs into interactive experiences,
      writing clean and reusable code, and continuously learning new
      technologies to become a better developer every day.
    </p>
  </div>

  {/* Career Objective */}

  <div
    className="
      rounded-3xl
      border
      border-violet-500/20
      bg-gradient-to-r
      from-violet-500/10
      to-cyan-500/10
      p-8
    "
  >
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
      Career Objective
    </h3>

    <p className="mt-5 leading-8 text-gray-700 dark:text-gray-300">
      My goal is to join an innovative organization where I can build
      scalable applications, solve real-world problems and contribute to
      meaningful products while continuously improving my technical and
      professional skills.
    </p>
  </div>

  {/* Technologies */}

  <div>
    <h3 className="mb-5 text-xl font-bold text-gray-900 dark:text-white">
      Technologies I Love
    </h3>

    <div className="flex flex-wrap gap-3">
      {highlights.map((item) => (
        <span
          key={item}
          className="
            rounded-full
            border
            border-violet-500/20
            bg-violet-500/10
            px-4
            py-2
            text-sm
            font-medium
            text-violet-600
            transition
            hover:scale-105
            dark:text-violet-300
          "
        >
          {item}
        </span>
      ))}
    </div>
  </div>

  {/* CTA */}

  <Link
    href="#contact"
    className="
      inline-flex
      items-center
      gap-2
      rounded-full
      bg-gradient-to-r
      from-violet-600
      to-cyan-500
      px-8
      py-4
      font-semibold
      text-white
      shadow-lg
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-violet-500/40
    "
  >
    Let's Connect
    <ArrowRight size={18} />
  </Link>
</motion.div>
{/* Right Side */}

<motion.div
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
>
  {/* Info Cards */}

  <div className="grid gap-6 sm:grid-cols-2">
    {infoCards.map((item) => {
      const Icon = item.icon;

      return (
        <motion.div
          key={item.title}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          className="
            rounded-3xl
            border
            border-gray-200
            bg-white
            p-6
            shadow-lg
            transition-all
            duration-300
            dark:border-white/10
            dark:bg-white/5
            dark:shadow-none
          "
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500">
            <Icon size={26} className="text-white" />
          </div>

          <h4 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">
            {item.title}
          </h4>

          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {item.value}
          </p>
        </motion.div>
      );
    })}
  </div>

  {/* Quick Summary */}

  <motion.div
    whileHover={{
      y: -8,
    }}
    className="
      mt-8
      rounded-3xl
      border
      border-violet-500/20
      bg-gradient-to-r
      from-violet-500/10
      to-cyan-500/10
      p-8
    "
  >
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
      Quick Summary
    </h3>

    <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">

      <div className="text-center">
        <h4 className="text-4xl font-bold text-violet-500">
          15+
        </h4>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Projects
        </p>
      </div>

      <div className="text-center">
        <h4 className="text-4xl font-bold text-cyan-500">
          20+
        </h4>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Technologies
        </p>
      </div>

      <div className="text-center">
        <h4 className="text-4xl font-bold text-emerald-500">
          2+
        </h4>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Years Learning
        </p>
      </div>

      <div className="text-center">
        <h4 className="text-4xl font-bold text-orange-500">
          Open
        </h4>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          To Work
        </p>
      </div>

    </div>
  </motion.div>

  {/* Skills Progress */}

  <motion.div
    whileHover={{
      y: -8,
    }}
    className="
      mt-8
      rounded-3xl
      border
      border-gray-200
      bg-white
      p-8
      shadow-lg
      dark:border-white/10
      dark:bg-white/5
      dark:shadow-none
    "
  >
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
      Core Skills
    </h3>

    <div className="mt-8 space-y-6">

      {[
        ["React", "95%"],
        ["Next.js", "90%"],
        ["TypeScript", "88%"],
        ["Tailwind CSS", "95%"],
      ].map(([skill, percent]) => (
        <div key={skill}>
          <div className="mb-2 flex justify-between">
            <span className="font-medium text-gray-900 dark:text-white">
              {skill}
            </span>

            <span className="text-sm text-gray-600 dark:text-gray-400">
              {percent}
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-gray-200 dark:bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-600 to-cyan-500"
              style={{ width: percent }}
            />
          </div>
        </div>
      ))}

    </div>
  </motion.div>

</motion.div>
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-lg dark:border-white/10 dark:bg-white/5 dark:shadow-none"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
            Let's Build Something Amazing Together 🚀
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            I'm currently looking for Frontend Developer opportunities where
            I can contribute, learn and grow while building modern web
            applications using React, Next.js and TypeScript.
          </p>

          <Link
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
          >
            Let's Connect
            <ArrowRight size={18} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}