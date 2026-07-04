
"use client";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "JavaScript", level: 90 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Material UI", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 65 },
      { name: "REST API", level: 75 },
    ],
  },

  {
    title: "Database",
    skills: [
      { name: "MySQL", level: 70 },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 75 },
      { name: "Vercel", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#050816] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-20 text-center">

          <span className="inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            My Skills
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            My technical skills and the technologies I use to build
            modern, responsive and scalable web applications.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2">
                    {skillCategories.map((category, index) => (

            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500 hover:shadow-[0_0_35px_rgba(139,92,246,.25)]"
            >

              {/* Card Title */}

              <h3 className="mb-8 text-2xl font-bold text-white">
                {category.title}
              </h3>

              {/* Skills */}

              <div className="space-y-6">

                {category.skills.map((skill) => (

                  <div key={skill.name}>

                    {/* Skill Name & Percentage */}

                    <div className="mb-2 flex items-center justify-between">

                      <span className="font-medium text-gray-300">
                        {skill.name}
                      </span>

                      <span className="text-sm font-semibold text-violet-400">
                        {skill.level}%
                      </span>

                    </div>

                    {/* Progress Bar */}

                    <div className="h-3 overflow-hidden rounded-full bg-white/10">

                      <div
                        className="h-full rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 transition-all duration-700"
                        style={{
                          width: `${skill.level}%`,
                        }}
                      />

                    </div>

                  </div>

                ))}

              </div>

            </div>

          ))}
                  </div>

        {/* Bottom Tech Highlight */}

        <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">

          <h3 className="text-3xl font-bold text-white">
            Always Learning & Growing 🚀
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            I enjoy exploring modern frontend technologies, improving my
            problem-solving skills, and building responsive, scalable web
            applications with clean and maintainable code.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Material UI",
              "Node.js",
              "Express.js",
              "MySQL",
              "Git",
              "GitHub",
              "REST API",
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