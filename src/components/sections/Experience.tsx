
"use client";

import { motion } from "framer-motion";
import { Briefcase, CalendarDays } from "lucide-react";

const experiences = [
  {
    company: "SBS Computer Education (systern concern of TATA)",
    role: "Frontend Developer",
    duration: "2022 - 24",
    location: "Agartala, Tripura",
    description:
      "Developing modern government web applications using React, TypeScript and Material UI with responsive layouts and reusable components.",
    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      "REST API",
      "Git",
    ],
  },

  {
    company: "Freelancer",
    role: "Frontend Developer",
    duration: "2026 - Present",
    location: "Remote",
    description:
      "Building premium web applications including Portfolio, Weather Dashboard and Contractor Registration System using modern frontend technologies.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "React",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-50 py-28 transition-colors duration-300 dark:bg-[#050816]"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-violet-500">
            Experience
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-gray-900 dark:text-white">
            My Professional Journey
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            My experience in frontend development, building responsive web
            applications and continuously learning modern technologies.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">

  {/* Timeline Line */}

  <div className="absolute left-5 top-0 h-full w-1 rounded-full bg-gradient-to-b from-violet-500 via-cyan-500 to-violet-500 md:left-1/2 md:-translate-x-1/2" />

  <div className="space-y-16">

    {experiences.map((experience, index) => (

      <motion.div
        key={experience.company}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: index * 0.2,
        }}
        viewport={{ once: true }}
        className={`relative flex ${
          index % 2 === 0
            ? "md:justify-start"
            : "md:justify-end"
        }`}
      >

        {/* Timeline Dot */}

        <div
          className="
            absolute
            left-5
            top-8
            z-10
            flex
            h-10
            w-10
            -translate-x-1/2
            items-center
            justify-center
            rounded-full
            bg-gradient-to-r
            from-violet-600
            to-cyan-500
            text-white
            shadow-lg
            md:left-1/2
          "
        >
          <Briefcase size={18} />
        </div>

        {/* Card */}

        <motion.div
          whileHover={{
            y: -6,
            scale: 1.01,
          }}
          className="
            ml-16
            w-full
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
            md:ml-0
            md:w-[45%]
          "
        >

          {/* Role */}

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {experience.role}
          </h3>

          {/* Company */}

          <p className="mt-2 text-lg font-semibold text-violet-500">
            {experience.company}
          </p>

          {/* Duration */}

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">

            <div className="flex items-center gap-2">

              <CalendarDays size={16} />

              {experience.duration}

            </div>

            <span>•</span>

            <span>{experience.location}</span>

          </div>

          {/* Description */}

          <p className="mt-6 leading-7 text-gray-600 dark:text-gray-400">
            {experience.description}
          </p>

          {/* Technologies */}

          <div className="mt-6 flex flex-wrap gap-2">

            {experience.technologies.map((tech) => (

              <span
                key={tech}
                className="
                  rounded-full
                  border
                  border-violet-500/20
                  bg-violet-500/10
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  text-violet-600
                  transition
                  hover:scale-105
                  dark:text-violet-300
                "
              >
                {tech}
              </span>

            ))}

          </div>

        </motion.div>

      </motion.div>

    ))}

  </div>

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
            Looking for New Opportunities 🚀
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            I'm passionate about building scalable, user-friendly web
            applications using modern frontend technologies. I'm always eager
            to learn, collaborate with talented teams, and contribute to
            impactful projects.
          </p>

          <a
            href="#contact"
            className="
              mt-8
              inline-flex
              items-center
              gap-3
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
              hover:shadow-violet-500/30
            "
          >
            Let's Connect
          </a>
        </motion.div>

      </div>
    </section>
  );
}