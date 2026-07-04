"use client";

import {
  Briefcase,
  GraduationCap,
  Rocket,
} from "lucide-react";

const experiences = [
  {
    year: "2024 - Present",
    title: "Frontend Developer",
    company: "Personal Projects",
    icon: Briefcase,
    description:
      "Building modern, responsive and scalable web applications using React, Next.js, TypeScript and Material UI.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Material UI",
    ],
  },

  {
    year: "2024",
    title: "Bachelor of Technology",
    company: "Tripura University",
    icon: GraduationCap,
    description:
      "Completed B.Tech while strengthening programming, software engineering and frontend development skills.",
    skills: [
      "Java",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },

  {
    year: "Continuous Learning",
    title: "Learning Journey",
    company: "Self Learning",
    icon: Rocket,
    description:
      "Continuously improving frontend architecture, backend development, Git, APIs and problem-solving skills through projects.",
    skills: [
      "Git",
      "GitHub",
      "REST API",
      "Node.js",
      "Problem Solving",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#050816] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-20 text-center">

          <span className="inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            Experience
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            My Journey
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            My education, learning journey and frontend development
            experience that shaped my skills.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-6 top-0 h-full w-1 rounded-full bg-gradient-to-b from-violet-600 via-cyan-500 to-pink-500"></div>

          <div className="space-y-12">
                      {experiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="relative flex gap-8"
              >
                {/* Timeline Icon */}

                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 shadow-lg shadow-violet-500/30">

                  <Icon size={26} className="text-white" />

                </div>

                {/* Card */}

                <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500 hover:shadow-[0_0_35px_rgba(139,92,246,.25)]">

                  {/* Year */}

                  <span className="inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-300">
                    {item.year}
                  </span>

                  {/* Title */}

                  <h3 className="mt-5 text-3xl font-bold text-white">
                    {item.title}
                  </h3>

                  {/* Company */}

                  <p className="mt-2 text-lg font-medium text-cyan-400">
                    {item.company}
                  </p>

                  {/* Description */}

                  <p className="mt-6 leading-8 text-gray-400">
                    {item.description}
                  </p>

                  {/* Skills */}

                  <div className="mt-8 flex flex-wrap gap-3">

                    {item.skills.map((skill) => (

                      <span
                        key={skill}
                        className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300 transition-all duration-300 hover:scale-105 hover:border-violet-500"
                      >
                        {skill}
                      </span>

                    ))}

                  </div>

                </div>

              </div>
            );
          })}
                  </div>

        {/* Bottom Section */}

        <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">

          <h3 className="text-3xl font-bold text-white">
            Always Learning & Growing 🚀
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            I believe learning never stops. Every project helps me improve my
            frontend development skills, write cleaner code and build better
            user experiences with modern technologies.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-[#111827]/50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500">

              <h4 className="text-4xl font-bold text-violet-400">
                7+
              </h4>

              <p className="mt-3 text-gray-400">
                Projects Completed
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-[#111827]/50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500">

              <h4 className="text-4xl font-bold text-cyan-400">
                12+
              </h4>

              <p className="mt-3 text-gray-400">
                Technologies Learned
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-[#111827]/50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500">

              <h4 className="text-4xl font-bold text-pink-400">
                100%
              </h4>

              <p className="mt-3 text-gray-400">
                Passion for Development
              </p>

            </div>

          </div>

        </div>

      </div>
      </div>

    </section>
  );
}