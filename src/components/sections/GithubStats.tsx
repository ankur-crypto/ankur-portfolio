"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaCodeBranch,
  FaStar,
} from "react-icons/fa";

export default function GitHubStats() {
  return (
    <section
      id="github"
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
            GitHub
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-gray-900 dark:text-white">
            Open Source &
            <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}GitHub
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            My GitHub profile showcases projects, continuous learning and
            contributions as I build modern web applications and improve my
            development skills.
          </p>

        </motion.div>

        {/* GitHub Cards */}

        <div className="grid gap-8 lg:grid-cols-3">
            {/* GitHub Profile */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
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
    dark:hover:shadow-[0_0_30px_rgba(139,92,246,.25)]
  "
>
  <div className="flex items-center gap-4">

    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 shadow-lg">
      <FaGithub className="text-3xl text-white" />
    </div>

    <div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
        GitHub Profile
      </h3>

      <p className="text-gray-600 dark:text-gray-400">
        @YOUR_GITHUB_USERNAME
      </p>
    </div>

  </div>

  <p className="mt-6 leading-8 text-gray-600 dark:text-gray-400">
    Explore my repositories, frontend projects and continuous learning
    journey through my GitHub profile.
  </p>

  <div className="mt-8 flex gap-4">

    <div className="flex items-center gap-2 rounded-full bg-violet-500/10 px-4 py-2 text-violet-600 dark:text-violet-300">
      <FaCodeBranch />
      Repositories
    </div>

    <div className="flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-600 dark:text-cyan-300">
      <FaStar />
      Projects
    </div>

  </div>

  <Link
    href="https://github.com/YOUR_GITHUB_USERNAME"
    target="_blank"
    className="
      mt-8
      inline-flex
      items-center
      gap-2
      rounded-full
      bg-gradient-to-r
      from-violet-600
      to-cyan-500
      px-6
      py-3
      font-semibold
      text-white
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-lg
      hover:shadow-violet-500/30
    "
  >
    <FaGithub />
    Visit GitHub
  </Link>

</motion.div>
{/* GitHub Stats */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.15 }}
  viewport={{ once: true }}
  className="space-y-8 lg:col-span-2"
>

  {/* GitHub Stats Image */}

  <motion.div
    whileHover={{ y: -6 }}
    className="
      overflow-hidden
      rounded-3xl
      border
      border-gray-200
      bg-white
      p-5
      shadow-lg
      transition-all
      duration-300
      hover:shadow-2xl
      dark:border-white/10
      dark:bg-white/5
      dark:shadow-none
      dark:hover:border-violet-500
    "
  >

    <img
      src="https://github-readme-stats.vercel.app/api?username=YOUR_GITHUB_USERNAME&show_icons=true&theme=transparent&hide_border=true"
      alt="GitHub Stats"
      className="w-full rounded-2xl"
    />

  </motion.div>

  {/* Top Languages */}

  <motion.div
    whileHover={{ y: -6 }}
    className="
      overflow-hidden
      rounded-3xl
      border
      border-gray-200
      bg-white
      p-5
      shadow-lg
      transition-all
      duration-300
      hover:shadow-2xl
      dark:border-white/10
      dark:bg-white/5
      dark:shadow-none
      dark:hover:border-cyan-500
    "
  >

    <img
      src="https://github-readme-stats.vercel.app/api/top-langs/?username=YOUR_GITHUB_USERNAME&layout=compact&theme=transparent&hide_border=true"
      alt="Top Languages"
      className="w-full rounded-2xl"
    />

  </motion.div>

  {/* GitHub Streak */}

  <motion.div
    whileHover={{ y: -6 }}
    className="
      overflow-hidden
      rounded-3xl
      border
      border-gray-200
      bg-white
      p-5
      shadow-lg
      transition-all
      duration-300
      hover:shadow-2xl
      dark:border-white/10
      dark:bg-white/5
      dark:shadow-none
      dark:hover:border-emerald-500
    "
  >

    <img
      src="https://streak-stats.demolab.com?user=YOUR_GITHUB_USERNAME&theme=transparent&hide_border=true"
      alt="GitHub Streak"
      className="w-full rounded-2xl"
    />

  </motion.div>

</motion.div>

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
    Let's Build Something Amazing Together 🚀
  </h3>

  <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
    I'm passionate about creating modern web applications,
    writing clean code and continuously learning new technologies.
    Feel free to explore my GitHub repositories and connect with me.
  </p>

  <Link
    href="#contact"
    className="
      mt-8
      inline-flex
      items-center
      rounded-full
      bg-gradient-to-r
      from-violet-600
      to-cyan-500
      px-8
      py-4
      font-semibold
      text-white
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-lg
      hover:shadow-violet-500/30
    "
  >
    Get In Touch
  </Link>

</motion.div>

</div>

</section>
);
}