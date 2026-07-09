
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
    value: "B.Tech Graduate",
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
          4+
        </h4>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Projects
        </p>
      </div>

      <div className="text-center">
        <h4 className="text-4xl font-bold text-cyan-500">
          10+
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