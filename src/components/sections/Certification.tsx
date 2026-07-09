
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

const certifications = [
  {
    title: "Python Certification",
    issuer: "Li-Mat solution pvt.Ltd",
    date: "2022",
    description:
      "Completed a comprehensive React course covering Hooks, Routing, State Management and modern React development.",
    link: "https://drive.google.com/file/d/16jhnQRvHKDNjq2WK8-wskbUI4IiDuhSq/view?usp=drive_link",
  },
  {
    title: "Mern Stack",
    issuer: "Ardent Computech pvt.ltd",
    date: "2023",
    description:
      "Learned TypeScript fundamentals, interfaces, generics, type safety and best development practices.",
    link: "https://drive.google.com/file/d/1H7IUW3vfvif1YbrTA8DDoThsTFkIrHtX/view?usp=drive_link",
  },
   {
    title: "Badge of participate - BRIDGE Campus Learning Series",
    issuer: "Ardent Computech pvt.ltd",
    date: "2024",
    description:
      "Learned TypeScript fundamentals, interfaces, generics, type safety and best development practices.",
    link: "https://drive.google.com/file/d/1f1dSNp089M7De1pd4LdnSfM6NeS26g2b/view?usp=drive_link",
  },
  {
    title: "Web developer",
    issuer: "SBS Computer Education",
    date: "2024",
    description:
      "Built responsive websites using HTML, CSS and modern UI design principles.",
    link: "#",
  },
];

export default function Certification() {
  return (
    <section
      id="certifications"
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

        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >

          <span className="inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-violet-500">
            Certifications
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-gray-900 dark:text-white">
            Professional{" "}
            <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            Certifications and achievements that demonstrate my commitment
            to continuous learning, professional growth and staying updated
            with modern web technologies.
          </p>

        </motion.div>

        {/* Certifications Grid */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certificate, index) => (

  <motion.div
    key={certificate.title}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.6,
      delay: index * 0.15,
    }}
    viewport={{ once: true }}
    whileHover={{
      y: -10,
      scale: 1.02,
    }}
    className="
      group
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

    {/* Certificate Icon */}

    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 shadow-lg">
      <FaCertificate className="text-3xl text-white" />
    </div>

    {/* Title */}

    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
      {certificate.title}
    </h3>

    {/* Issuer */}

    <p className="mt-3 text-lg font-semibold text-violet-500">
      {certificate.issuer}
    </p>

    {/* Date */}

    <div
      className="
        mt-5
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
      {certificate.date}
    </div>

    {/* Description */}

    <p className="mt-6 leading-8 text-gray-600 dark:text-gray-400">
      {certificate.description}
    </p>

    {/* Button */}

    <Link
      href={certificate.link}
      target="_blank"
      className="
        mt-8
        inline-flex
        items-center
        gap-2
        font-semibold
        text-cyan-600
        transition-all
        duration-300
        hover:gap-3
        hover:text-violet-500
        dark:text-cyan-400
        dark:hover:text-violet-400
      "
    >
      View Certificate
      <HiOutlineExternalLink className="text-lg" />
    </Link>

  </motion.div>

))}

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
            Learning Never Stops 🚀
          </h3>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-gray-600
              dark:text-gray-400
            "
          >
            I continuously enhance my knowledge by completing professional
            courses, building real-world applications, reading official
            documentation and exploring emerging technologies. My goal is to
            become a highly skilled Full Stack Developer capable of building
            scalable and user-friendly applications.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            {[
              "React",
              "Next.js",
              "TypeScript",
              "JavaScript",
              "Tailwind CSS",
              "Material UI",
            ].map((tech) => (
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

          <Link
            href="#contact"
            className="
              mt-10
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
              shadow-lg
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-violet-500/30
            "
          >
            Let's Connect
          </Link>

        </motion.div>

      </div>

    </section>
  );
}