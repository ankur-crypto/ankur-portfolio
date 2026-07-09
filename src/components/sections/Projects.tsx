"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Weather Dashboard",
    description:
      "A modern election management portal built using React, TypeScript and Material UI featuring district-wise election results, candidate details and responsive government-style design.",
    image: "/projects/sec.png",
    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      "REST API",
    ],
    github: "https://github.com/YOUR_GITHUB",
    live: "#",
  },

  {
    title: "Developer Portfolio",
    description:
      "A premium portfolio website built with Next.js, Tailwind CSS and Framer Motion featuring responsive layouts, animations and dark/light theme.",
    image: "/projects/portfolio.png",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github: "https://github.com/ankur-crypto/ankur-portfolio ",
    live: "https://ankur-portfolio-five.vercel.app",
  },

  {
    title: "Contractor Management System",
    description:
      "A contractor registration platform with authentication, profile management and document verification built using React and Material UI.",
    image: "/projects/contractor.png",
    technologies: [
      "React",
      "TypeScript",
      "Material UI",
    ],
    github: "https://github.com/YOUR_GITHUB",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
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
            My Projects
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-gray-900 dark:text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            Here are some of the projects I have developed using React,
            Next.js, TypeScript, Tailwind CSS and Material UI, focusing on
            responsive design, clean architecture and excellent user
            experience.
          </p>
        </motion.div>

        {/* Projects Grid */}

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
  <motion.article
    key={project.title}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.6,
      delay: index * 0.15,
    }}
    viewport={{ once: true }}
    whileHover={{
      y: -10,
    }}
    className="
      group
      overflow-hidden
      rounded-3xl
      border
      border-gray-200
      bg-white
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
    {/* Project Image */}

    <div className="relative h-60 overflow-hidden">

      <Image
        src={project.image}
        alt={project.title}
        fill
        priority={index === 0}
        sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="absolute right-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
        Featured
      </div>

    </div>

    {/* Content */}

    <div className="p-7">

      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
        {project.title}
      </h3>

      <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
        {project.description}
      </p>

      {/* Technologies */}

      <div className="mt-6 flex flex-wrap gap-2">

        {project.technologies.map((tech) => (
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

      {/* Buttons */}

      <div className="mt-8 flex flex-wrap gap-3">

        <Link
          href={project.github}
          target="_blank"
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-gray-300
            px-5
            py-3
            font-medium
            text-gray-800
            transition-all
            duration-300
            hover:border-violet-500
            hover:text-violet-600
            dark:border-white/10
            dark:text-white
            dark:hover:border-violet-500
            dark:hover:text-violet-400
          "
        >
          <FaGithub className="text-lg" />
          GitHub
        </Link>

        <Link
          href={project.live}
          target="_blank"
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-gradient-to-r
            from-violet-600
            to-cyan-500
            px-5
            py-3
            font-semibold
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:scale-105
          "
        >
          Live Demo
          <ExternalLink size={18} />
        </Link>

      </div>

    </div>

  </motion.article>
    
))}
    </div>    {/* Bottom CTA */}

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
            More Projects Coming Soon 🚀
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            I'm continuously learning new technologies, building modern
            applications and improving my development skills. You can explore
            more projects, source code and future updates on my GitHub profile.
          </p>

          <Link
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
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
            <FaGithub className="text-xl" />
            View GitHub
          </Link>
        </motion.div>

      </div>
    </section>
  );
}