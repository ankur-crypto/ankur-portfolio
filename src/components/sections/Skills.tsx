// "use client";

// import { motion } from "framer-motion";

// import {
//   Code2,
//   Palette,
//   Database,
//   Globe,
//   GitBranch,
//   Smartphone,
// } from "lucide-react";

// const skillCategories = [
//   {
//     title: "Frontend",
//     icon: <Code2 size={28} />,
//     color: "from-violet-600 to-fuchsia-500",
//     skills: [
//       { name: "React", level: 95 },
//       { name: "Next.js", level: 92 },
//       { name: "TypeScript", level: 90 },
//       { name: "JavaScript", level: 95 },
//       { name: "HTML5", level: 98 },
//       { name: "CSS3", level: 96 },
//       { name: "Tailwind CSS", level: 94 },
//     ],
//   },

//   {
//     title: "UI / Design",
//     icon: <Palette size={28} />,
//     color: "from-pink-500 to-rose-500",
//     skills: [
//       { name: "Responsive Design", level: 95 },
//       { name: "Material UI", level: 92 },
//       { name: "Bootstrap", level: 90 },
//       { name: "Figma", level: 75 },
//     ],
//   },

//   {
//     title: "Backend",
//     icon: <Database size={28} />,
//     color: "from-cyan-500 to-blue-500",
//     skills: [
//       { name: "Node.js", level: 70 },
//       { name: "Express.js", level: 68 },
//       { name: "MongoDB", level: 65 },
//       { name: "MySQL", level: 75 },
//     ],
//   },

//   {
//     title: "Tools",
//     icon: <GitBranch size={28} />,
//     color: "from-emerald-500 to-green-500",
//     skills: [
//       { name: "Git", level: 90 },
//       { name: "GitHub", level: 90 },
//       { name: "VS Code", level: 95 },
//       { name: "Vercel", level: 88 },
//     ],
//   },

//   {
//     title: "Web",
//     icon: <Globe size={28} />,
//     color: "from-orange-500 to-yellow-500",
//     skills: [
//       { name: "REST API", level: 85 },
//       { name: "JSON", level: 90 },
//       { name: "SEO Basics", level: 70 },
//     ],
//   },

//   {
//     title: "Mobile Friendly",
//     icon: <Smartphone size={28} />,
//     color: "from-indigo-500 to-cyan-500",
//     skills: [
//       { name: "Responsive UI", level: 98 },
//       { name: "Cross Browser", level: 92 },
//       { name: "Accessibility", level: 80 },
//     ],
//   },
// ];

// export default function Skills() {
//     return (
//     <section
//       id="skills"
//       className="relative bg-[#050816] py-24 overflow-hidden"
//     >
//       {/* Background Blur */}

//       <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[150px]" />

//       <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

//       <div className="relative mx-auto max-w-7xl px-6">

//         {/* Heading */}

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="mb-20 text-center"
//         >

//           <span className="inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
//             My Skills
//           </span>

//           <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
//             Technologies I Work With
//           </h2>

//           <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
//             I enjoy building modern, responsive and scalable web
//             applications using the latest frontend technologies,
//             development tools and best practices.
//           </p>

//         </motion.div>

//         {/* Skills Grid */}

//         <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
//                     {skillCategories.map((category, index) => (
//             <motion.div
//               key={category.title}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.6,
//                 delay: index * 0.1,
//               }}
//               viewport={{ once: true }}
//               whileHover={{
//                 y: -8,
//               }}
//               className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,.20)]"
//             >
//               {/* Card Header */}

//               <div className="mb-8 flex items-center gap-4">

//                 <div
//                   className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${category.color} text-white shadow-lg`}
//                 >
//                   {category.icon}
//                 </div>

//                 <div>

//                   <h3 className="text-2xl font-bold text-white">
//                     {category.title}
//                   </h3>

//                   <p className="text-sm text-gray-400">
//                     {category.skills.length} Skills
//                   </p>

//                 </div>

//               </div>

//               {/* Skills */}

//               <div className="space-y-6">

//                 {category.skills.map((skill) => (

//                   <div key={skill.name}>

//                     <div className="mb-2 flex items-center justify-between">

//                       <span className="font-medium text-gray-300">
//                         {skill.name}
//                       </span>

//                       <span className="text-sm font-semibold text-violet-400">
//                         {skill.level}%
//                       </span>

//                     </div>

//                     <div className="h-2 overflow-hidden rounded-full bg-gray-800">

//                       <motion.div
//                         initial={{ width: 0 }}
//                         whileInView={{
//                           width: `${skill.level}%`,
//                         }}
//                         transition={{
//                           duration: 1.2,
//                         }}
//                         viewport={{ once: true }}
//                         className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
//                       />

//                     </div>

//                   </div>

//                 ))}

//               </div>

//             </motion.div>
//           ))}
//                   </div>

//         {/* Bottom Technologies */}

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
//         >
//           <h3 className="text-center text-3xl font-bold text-white">
//             Favorite Technologies
//           </h3>

//           <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
//             These are the technologies I enjoy using to build modern,
//             scalable and responsive web applications.
//           </p>

//           <div className="mt-10 flex flex-wrap justify-center gap-4">

//             {[
//               "React",
//               "Next.js",
//               "TypeScript",
//               "JavaScript",
//               "Tailwind CSS",
//               "Material UI",
//               "Node.js",
//               "Express.js",
//               "MongoDB",
//               "MySQL",
//               "Git",
//               "GitHub",
//               "REST API",
//               "Vercel",
//             ].map((tech) => (
//               <motion.span
//                 key={tech}
//                 whileHover={{
//                   scale: 1.08,
//                   y: -4,
//                 }}
//                 className="cursor-default rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-3 text-sm font-medium text-violet-300 transition-all duration-300 hover:border-violet-500"
//               >
//                 {tech}
//               </motion.span>
//             ))}

//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";

import {
  Code2,
  Palette,
  Database,
  Globe,
  GitBranch,
  Smartphone,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code2 size={28} />,
    color: "from-violet-600 to-fuchsia-500",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "HTML5", level: 98 },
      { name: "CSS3", level: 96 },
      { name: "Tailwind CSS", level: 94 },
    ],
  },

  {
    title: "UI / Design",
    icon: <Palette size={28} />,
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "Responsive Design", level: 95 },
      { name: "Material UI", level: 92 },
      { name: "Bootstrap", level: 90 },
      { name: "Figma", level: 75 },
    ],
  },

  {
    title: "Backend",
    icon: <Database size={28} />,
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 68 },
      { name: "MongoDB", level: 65 },
      { name: "MySQL", level: 75 },
    ],
  },

  {
    title: "Tools",
    icon: <GitBranch size={28} />,
    color: "from-emerald-500 to-green-500",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Vercel", level: 88 },
    ],
  },

  {
    title: "Web",
    icon: <Globe size={28} />,
    color: "from-orange-500 to-yellow-500",
    skills: [
      { name: "REST API", level: 85 },
      { name: "JSON", level: 90 },
      { name: "SEO Basics", level: 70 },
    ],
  },

  {
    title: "Mobile",
    icon: <Smartphone size={28} />,
    color: "from-indigo-500 to-cyan-500",
    skills: [
      { name: "Responsive UI", level: 98 },
      { name: "Cross Browser", level: 92 },
      { name: "Accessibility", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-50 py-28 transition-colors duration-300 dark:bg-[#050816]"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >

          <span className="inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-violet-500">
            My Skills
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-gray-900 dark:text-white">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            I enjoy building modern, responsive and scalable web
            applications using the latest frontend technologies,
            development tools and best practices.
          </p>

        </motion.div>

        {/* Skills Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
  <motion.div
    key={category.title}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.6,
      delay: index * 0.1,
    }}
    viewport={{ once: true }}
    whileHover={{
      y: -8,
      scale: 1.02,
    }}
    className="
      rounded-3xl
      border
      border-gray-200
      bg-white
      p-8
      shadow-lg
      transition-all
      duration-300
      hover:shadow-2xl
      dark:border-white/10
      dark:bg-white/5
      dark:shadow-none
      dark:hover:border-violet-500
      dark:hover:shadow-[0_0_30px_rgba(139,92,246,.20)]
    "
  >
    {/* Card Header */}

    <div className="mb-8 flex items-center gap-4">

      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${category.color} text-white shadow-lg`}
      >
        {category.icon}
      </div>

      <div>

        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {category.title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-400">
          {category.skills.length} Skills
        </p>

      </div>

    </div>

    {/* Skills */}

    <div className="space-y-6">

      {category.skills.map((skill) => (

        <div key={skill.name}>

          <div className="mb-2 flex items-center justify-between">

            <span className="font-medium text-gray-700 dark:text-gray-300">
              {skill.name}
            </span>

            <span className="text-sm font-semibold text-violet-500 dark:text-violet-400">
              {skill.level}%
            </span>

          </div>

          <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-white/10">

            <motion.div
              initial={{ width: 0 }}
              whileInView={{
                width: `${skill.level}%`,
              }}
              transition={{
                duration: 1.2,
              }}
              viewport={{ once: true }}
              className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
            />

          </div>

        </div>

      ))}

    </div>

  </motion.div>
))}
  </div>
        {/* Favorite Technologies */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            mt-20
            rounded-3xl
            border
            border-gray-200
            bg-white
            p-10
            shadow-lg
            dark:border-white/10
            dark:bg-white/5
            dark:shadow-none
          "
        >
          <h3 className="text-center text-3xl font-bold text-gray-900 dark:text-white">
            Favorite Technologies
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600 dark:text-gray-400">
            These are the technologies I enjoy using to build modern,
            scalable and responsive web applications.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            {[
              "React",
              "Next.js",
              "TypeScript",
              "JavaScript",
              "Tailwind CSS",
              "Material UI",
              "Node.js",
              "Express.js",
              "MongoDB",
              "MySQL",
              "Git",
              "GitHub",
              "REST API",
              "Vercel",
            ].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{
                  scale: 1.08,
                  y: -4,
                }}
                className="
                  cursor-default
                  rounded-full
                  border
                  border-violet-500/20
                  bg-violet-500/10
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-violet-600
                  transition-all
                  duration-300
                  hover:border-violet-500
                  hover:bg-violet-500
                  hover:text-white
                  dark:text-violet-300
                  dark:hover:bg-violet-600
                "
              >
                {tech}
              </motion.span>
            ))}

          </div>
        </motion.div>
        </div>

    </section>
  );
}