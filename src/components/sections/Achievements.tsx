"use client";

import { motion } from "framer-motion";

import {
  Trophy,
  FolderKanban,
  Award,
  Code2,
} from "lucide-react";

const achievements = [
  {
    icon: <FolderKanban size={34} />,
    number: "4+",
    title: "Projects Completed",
    description:
      "Developed responsive and modern web applications using React, Next.js, TypeScript and Tailwind CSS.",
    color: "from-violet-600 to-fuchsia-500",
  },

  {
    icon: <Code2 size={34} />,
    number: "10+",
    title: "Technologies Learned",
    description:
      "Hands-on experience with modern frontend technologies, frameworks and development tools.",
    color: "from-cyan-500 to-blue-500",
  },

  {
    icon: <Award size={34} />,
    number: "1+",
    title: "Certifications",
    description:
      "Successfully completed professional certifications and online development courses.",
    color: "from-emerald-500 to-green-500",
  },

  {
    icon: <Trophy size={34} />,
    number: "100%",
    title: "Passion For Learning",
    description:
      "Continuously improving through projects, documentation, open-source resources and practice.",
    color: "from-orange-500 to-yellow-500",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
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

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >

          <span
            className="
              inline-block
              rounded-full
              border
              border-violet-500/20
              bg-violet-500/10
              px-5
              py-2
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-violet-500
            "
          >
            Achievements
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-gray-900 dark:text-white">
            Milestones &
            <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}Achievements
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            My journey as a Frontend Developer is driven by continuous
            learning, real-world projects and a passion for building
            high-quality web applications.
          </p>

        </motion.div>

        {/* Achievement Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {achievements.map((item, index) => (

  <motion.div
    key={item.title}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.6,
      delay: index * 0.15,
    }}
    viewport={{ once: true }}
    whileHover={{
      y: -10,
      scale: 1.03,
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
      dark:hover:shadow-[0_0_30px_rgba(139,92,246,.25)]
    "
  >

    {/* Icon */}

    <div
      className={`
        mb-8
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        bg-gradient-to-r
        ${item.color}
        text-white
        shadow-lg
      `}
    >
      {item.icon}
    </div>

    {/* Number */}

    <h3 className="text-5xl font-extrabold text-gray-900 dark:text-white">
      {item.number}
    </h3>

    {/* Title */}

    <h4 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
      {item.title}
    </h4>

    {/* Description */}

    <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
      {item.description}
    </p>

  </motion.div>

))}

</div>
        {/* Bottom CTA */}

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
            text-center
            shadow-lg
            transition-all
            duration-300
            dark:border-white/10
            dark:bg-white/5
            dark:shadow-none
          "
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
            The Journey Continues 🚀
          </h3>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-gray-600
              dark:text-gray-400
            "
          >
            Every project, certification and challenge helps me become a
            better developer. I enjoy learning new technologies, solving
            real-world problems and building applications that deliver
            meaningful user experiences.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Material UI",
              "Git",
              "GitHub",
              "REST API",
            ].map((tech) => (
              <span
                key={tech}
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
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-violet-500
                  hover:text-white
                  dark:text-violet-300
                "
              >
                {tech}
              </span>
            ))}

          </div>
        </motion.div>

      </div>
    </section>
  );
}