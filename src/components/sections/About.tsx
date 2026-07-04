
"use client";

import Link from "next/link";

import {
  Download,
  Mail,
  MapPin,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const stats = [
  {
    value: "7+",
    label: "Projects",
  },
  {
    value: "12+",
    label: "Technologies",
  },
  {
    value: "1+",
    label: "Years Learning",
  },
  {
    value: "100%",
    label: "Dedication",
  },
];

const personalInfo = [
  {
    icon: GraduationCap,
    title: "Education",
    value: "B.Tech in Computer Science",
  },
  {
    icon: Briefcase,
    title: "Role",
    value: "Frontend Developer",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Tripura, India",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0B1120] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-20 text-center">

          <span className="inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            About Me
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Building Digital Experiences
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Passionate about crafting fast, responsive and modern web
            applications using React, Next.js and TypeScript.
          </p>

        </div>

        {/* Main Grid */}

        <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* Left Side */}

          <div>

            <h3 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              Hi, I'm
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                Ankur Chakraborty
              </span>
            </h3>

            <p className="mt-8 text-lg leading-8 text-gray-400">
              I'm a passionate Frontend Developer who enjoys building
              modern, responsive and user-friendly web applications
              using React, Next.js, TypeScript and Tailwind CSS.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              My goal is to transform ideas into clean, scalable and
              accessible digital experiences while continuously learning
              new technologies and improving my development skills.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/30"
              >
                <Download size={20} />
                Download Resume
              </a>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-violet-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-violet-600"
              >
                <Mail size={20} />
                Contact Me
              </Link>

            </div>

            {/* Personal Info */}

            <div className="mt-12 space-y-4">
              {personalInfo.map((item, index) => {
  const Icon = item.icon;

  return (
    <div
      key={index}
      className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.20)]"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white">
        <Icon size={24} />
      </div>

      <div>
        <h4 className="text-lg font-semibold text-white">
          {item.title}
        </h4>

        <p className="mt-1 text-gray-400">
          {item.value}
        </p>
      </div>
    </div>
  );
})}

          </div>

        </div>

        {/* Right Side */}

        <div className="grid grid-cols-2 gap-6">

          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500 hover:shadow-[0_0_35px_rgba(139,92,246,.25)]"
            >
              <h3 className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-5xl font-bold text-transparent">
                {item.value}
              </h3>

              <p className="mt-4 text-gray-400">
                {item.label}
              </p>
            </div>
          ))}

          {/* Tech Card */}

          <div className="col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500">

            <h3 className="text-2xl font-bold text-white">
              Tech Stack
            </h3>

            <div className="mt-6 flex flex-wrap gap-3">

              {[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Material UI",
                "JavaScript",
                "Git",
                "GitHub",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300"
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>

        </div>
              </div>

    </div>

  </section>
  );
}