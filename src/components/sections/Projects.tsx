
"use client";

import Image from "next/image";

import { ExternalLink } from "lucide-react";

import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Tripura Election Management System",
    description:
      "A modern election management portal built using React, TypeScript and Material UI for election information, election results and citizen services.",
    image: "/projects/election.png",
    github: "https://github.com/yourusername/election-project",
    demo: "",
    featured: true,
    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      "REST API",
    ],
  },

  {
    title: "Personal Portfolio",
    description:
      "Modern responsive portfolio built with Next.js, Tailwind CSS and TypeScript showcasing projects, skills and experience.",
    image: "/projects/portfolio.png",
    github: "https://github.com/yourusername/portfolio",
    demo: "",
    featured: false,
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
    ],
  },

  {
    title: "Contractor Registration System",
    description:
      "Responsive contractor registration portal with authentication, multi-step forms and API integration.",
    image: "/projects/contractor.png",
    github: "https://github.com/yourusername/contractor",
    demo: "",
    featured: false,
    technologies: [
      "React",
      "Material UI",
      "TypeScript",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0B1120] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-20 text-center">

          <span className="inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            My Projects
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Featured Work
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Here are some of the projects I've built using React,
            Next.js, TypeScript and modern frontend technologies.
          </p>

        </div>

        <div className="space-y-10">
                    {projects.map((project, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500 hover:shadow-[0_0_35px_rgba(139,92,246,.25)] ${
                project.featured
                  ? "lg:grid lg:grid-cols-2"
                  : "md:flex"
              }`}
            >
              {/* Project Image */}

              <div className="relative h-72 overflow-hidden md:w-full lg:h-auto">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />

              </div>

              {/* Project Content */}

              <div className="flex flex-1 flex-col justify-center p-8">

                {project.featured && (
                  <span className="mb-4 inline-block w-fit rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-violet-400">
                    ⭐ Featured Project
                  </span>
                )}

                <h3 className="text-3xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-6 leading-8 text-gray-400">
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="mt-8 flex flex-wrap gap-3">

                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Buttons */}

                <div className="mt-8 flex flex-wrap gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-violet-500 hover:bg-violet-600"
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}

                </div>

              </div>

            </div>
          ))}
                  </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">

          <h3 className="text-3xl font-bold text-white">
            More Projects Coming Soon 🚀
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            I enjoy building real-world applications and continuously
            improving my frontend development skills. More exciting
            projects will be added as I continue learning and building.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Material UI",
              "REST API",
              "Node.js",
              "Express.js",
              "MySQL",
              "Git",
              "GitHub",
              "Responsive Design",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300 transition-all duration-300 hover:scale-105 hover:border-violet-500"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}