"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye } from "lucide-react";

import {
  Mail,
  ArrowRight,
  Download,
  MapPin,
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
    number: "4+",
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
      className="
      relative
      overflow-hidden
      bg-slate-50
      pt-24
      transition-colors
      duration-300
      dark:bg-[#050816]
      lg:pt-28
      "
    >
      {/* Background Blur */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-violet-600/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div
          className="
          grid
          items-center
          gap-10
          py-10
          lg:min-h-[calc(100vh-110px)]
          lg:grid-cols-2
          lg:gap-16
          "
        >

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >

            {/* Badge */}

            <div
              className="
              mb-6
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-emerald-500/20
              bg-emerald-500/10
              px-5
              py-2
              text-sm
              font-semibold
              text-emerald-500
              backdrop-blur-xl
              dark:text-emerald-400
              "
            >
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />

              Open to Full-Time & Freelance Opportunities
            </div>

            {/* Greeting */}

            <p className="mb-4 text-lg font-medium text-violet-500 dark:text-violet-400">
              👋 Hello, I'm
            </p>

            {/* Name */}

            <h1
              className="
              text-4xl
              font-extrabold
              leading-tight
              text-gray-900
              dark:text-white
              sm:text-5xl
              lg:text-7xl
              "
            >
              <span className="block">
                Ankur
              </span>

              <span
                className="
                bg-gradient-to-r
                from-violet-500
                via-fuchsia-500
                to-cyan-500
                bg-clip-text
                text-transparent
                "
              >
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
              className="
              mt-6
              text-xl
              font-bold
              text-cyan-500
              sm:text-2xl
              lg:text-4xl
              "
            />

            {/* Location */}

            <div className="mt-4 flex items-center gap-2 text-gray-600 dark:text-gray-400">

              <MapPin className="h-5 w-5 text-violet-500" />

              <span>
                Agartala, Tripura, India
              </span>

            </div>

            {/* Description */}

            <p
              className="
              mt-8
              max-w-2xl
              text-base
              leading-8
              text-gray-600
              dark:text-gray-400
              sm:text-lg
              sm:leading-9
              "
            >
              Passionate Frontend Developer specializing in{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                React, Next.js, TypeScript and Tailwind CSS
              </span>.
              I build modern, responsive and scalable web applications
              with beautiful UI, clean code and exceptional user experience.
            </p>

            {/* Tech */}

            <div className="mt-8 flex flex-wrap gap-3">

              {techStack.map((tech) => (

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
                  transition
                  hover:scale-105
                  hover:border-violet-500
                  dark:text-violet-300
                  "
                >
                  {tech}
                </span>

              ))}

            </div>
                        {/* Buttons */}

            <div
              className="
              mt-8
              flex
              flex-col
              gap-4
              sm:flex-row
              "
            >

              <Link
                href="#contact"
                className="
                inline-flex
                items-center
                justify-center
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
                Hire Me
                <ArrowRight size={18} />
              </Link>

                  <a
                    href="/resume/ankurportfolio.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      border
                      border-cyan-500/40
                      px-8
                      py-4
                      font-semibold
                      text-cyan-600
                      transition-all
                      duration-300
                      hover:bg-cyan-50
                      dark:text-cyan-300
                      dark:hover:bg-cyan-500/10
                    "
                  >
                    <Eye size={18} />
                    View Resume
                  </a>

            </div>

            {/* Social Icons */}

            <div
              className="
              mt-10
              flex
              flex-wrap
              items-center
              gap-4
              "
            >

              <a
                href="https://github.com/ankur-crypto"
                target="_blank"
                rel="noopener noreferrer"
                className="
                rounded-full
                border
                border-gray-300
                p-3
                text-gray-700
                transition
                hover:border-violet-500
                hover:text-violet-500
                dark:border-white/10
                dark:text-gray-300
                dark:hover:text-violet-400
                "
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/ankur-chakraborty-777b21197"
                target="_blank"
                rel="noopener noreferrer"
                className="
                rounded-full
                border
                border-gray-300
                p-3
                text-gray-700
                transition
                hover:border-cyan-500
                hover:text-cyan-500
                dark:border-white/10
                dark:text-gray-300
                dark:hover:text-cyan-400
                "
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="mailto:chakrabortyankur843@gmail.com"
                className="
                rounded-full
                border
                border-gray-300
                p-3
                text-gray-700
                transition
                hover:border-violet-500
                hover:text-violet-500
                dark:border-white/10
                dark:text-gray-300
                dark:hover:text-violet-400
                "
              >
                <Mail size={22} />
              </a>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="
            order-first
            flex
            justify-center
            lg:order-last
            "
          >

            {/* Glow */}

            <div
              className="
              absolute
              h-[260px]
              w-[260px]
              rounded-full
              bg-gradient-to-r
              from-violet-600/20
              to-cyan-500/20
              blur-3xl
              sm:h-[320px]
              sm:w-[320px]
              lg:h-[420px]
              lg:w-[420px]
              "
            />

            <div className="relative">

              {/* React */}

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="
                absolute
                -left-10
                top-10
                hidden
                rounded-2xl
                border
                border-violet-500/20
                bg-white/70
                px-5
                py-3
                shadow-lg
                backdrop-blur-xl
                dark:bg-white/5
                lg:block
                "
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
                className="
                absolute
                -right-10
                top-28
                hidden
                rounded-2xl
                border
                border-cyan-500/20
                bg-white/70
                px-5
                py-3
                shadow-lg
                backdrop-blur-xl
                dark:bg-white/5
                lg:block
                "
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
                className="
                absolute
                bottom-10
                -left-12
                hidden
                rounded-2xl
                border
                border-violet-500/20
                bg-white/70
                px-5
                py-3
                shadow-lg
                backdrop-blur-xl
                dark:bg-white/5
                lg:block
                "
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
                className="
                absolute
                bottom-16
                -right-12
                hidden
                rounded-2xl
                border
                border-cyan-500/20
                bg-white/70
                px-5
                py-3
                shadow-lg
                backdrop-blur-xl
                dark:bg-white/5
                lg:block
                "
              >
                <p className="font-semibold text-cyan-600 dark:text-cyan-300">
                  💨 Tailwind CSS
                </p>
              </motion.div>

              {/* Profile */}
                            <div
                className="
                relative
                h-[220px]
                w-[220px]
                rounded-full
                bg-gradient-to-r
                from-violet-600
                to-cyan-500
                p-[4px]
                shadow-[0_0_80px_rgba(139,92,246,.45)]
                sm:h-[260px]
                sm:w-[260px]
                md:h-[320px]
                md:w-[320px]
                lg:h-[420px]
                lg:w-[420px]
                "
              >
                <div className="relative h-full w-full overflow-hidden rounded-full bg-white dark:bg-[#050816]">

                  <Image
                    src="/images/Passport_Photograph.jpg"
                    alt="Ankur Chakraborty"
                    fill
                    priority
                    sizes="(max-width:640px) 220px,
                           (max-width:768px) 260px,
                           (max-width:1024px) 320px,
                           420px"
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
          className="mt-16 grid gap-6 md:grid-cols-3 lg:mt-24"
        >
          {stats.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
              rounded-3xl
              border
              border-gray-200
              bg-white
              p-8
              text-center
              shadow-lg
              transition-all
              duration-300
              hover:shadow-xl
              dark:border-white/10
              dark:bg-white/5
              dark:shadow-none
              "
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
          className="mt-16 flex justify-center pb-10 lg:mt-20"
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