
"use client";

import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institute: "ICFAI University Tripura",
    duration: "2020 - 2024",
    score: "CGPA: 6.82 / 10",
    description:
      "Successfully completed a four-year Bachelor of Technology in Computer Science & Engineering, building a strong foundation in Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks, Software Engineering, Object-Oriented Programming, and Web Development. During my undergraduate journey, I completed three internships and developed four academic projects, gaining practical experience in modern software development, frontend technologies, and collaborative project work.",
  },
    {
   degree: "12th",
    institute: "Kendriya Vidyalaya No.1 Kunjaban Agartala",
    duration: "2020",
    score: "75%",
    description:
      "Completed Higher Secondary education in the Science stream, strengthening my analytical thinking, mathematical aptitude, and problem-solving abilities. This phase laid the academic foundation for pursuing Computer Science & Engineering.",
  },  {
    degree: "10th",
    institute: "Kendriya Vidyalaya No.1 Kunjaban Agartala",
    duration: "2018",
    score: "71.2%",
    description:
      "Completed Secondary education while developing a strong interest in computers, technology, and logical reasoning, which motivated me to pursue engineering in Computer Science",
  },


];

export default function Education() {
  return (
    <section
      id="education"
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

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >

          <span className="inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-violet-500">
            Education
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-gray-900 dark:text-white">
            Academic{" "}
            <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            My academic journey has built a strong foundation in
            computer science, software engineering, problem solving and
            modern web development.
          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative">
          {/* Timeline Line */}

<div className="absolute left-6 top-0 hidden h-full w-1 rounded-full bg-gradient-to-b from-violet-600 to-cyan-500 md:block" />

{education.map((item, index) => (

  <motion.div
    key={item.degree}
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      duration: 0.7,
      delay: index * 0.2,
    }}
    viewport={{ once: true }}
    className="relative mb-12 md:ml-16"
  >

    {/* Timeline Dot */}

    <div className="absolute -left-[62px] hidden h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 shadow-lg md:flex">

      <FaGraduationCap className="text-xl text-white" />

    </div>

    {/* Education Card */}

    <motion.div
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
        dark:hover:shadow-[0_0_30px_rgba(139,92,246,.25)]
      "
    >

      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

        <div>

          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
            {item.degree}
          </h3>

          <p className="mt-2 text-lg font-semibold text-violet-500">
            {item.institute}
          </p>

        </div>

        <div
          className="
            rounded-full
            bg-violet-500/10
            px-5
            py-2
            text-sm
            font-semibold
            text-violet-600
            dark:text-violet-300
          "
        >
          {item.duration}
        </div>

      </div>

      <div
        className="
          mt-6
          inline-flex
          rounded-full
          bg-cyan-500/10
          px-4
          py-2
          text-sm
          font-semibold
          text-cyan-600
          dark:text-cyan-300
        "
      >
        {item.score}
      </div>

      <p className="mt-6 leading-8 text-gray-600 dark:text-gray-400">
        {item.description}
      </p>

    </motion.div>

  </motion.div>

))}
        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            mt-16
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
            Always Learning 📚
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            Learning is a continuous journey. Along with my academic
            education, I constantly improve my skills through personal
            projects, technical documentation, online courses and
            hands-on development to stay updated with modern web
            technologies.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Material UI",
              "JavaScript",
            ].map((skill) => (
              <span
                key={skill}
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
                {skill}
              </span>
            ))}

          </div>
        </motion.div>

      </div>

    </div>

  </section>
  );
}