// "use client";

// import Link from "next/link";

// import { motion } from "framer-motion";

// import {
//   FaGithub,
//   FaCodeBranch,
//   FaStar,
// } from "react-icons/fa";

// export default function GitHubStats() {
//   return (
//     <section
//       id="github"
//       className="
//         relative
//         overflow-hidden
//         bg-slate-50
//         py-28
//         transition-colors
//         duration-300
//         dark:bg-[#050816]
//       "
//     >
//       {/* Background Glow */}

//       <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[150px]" />

//       <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

//       <div className="relative mx-auto max-w-7xl px-6">

//         {/* Heading */}

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="mb-20 text-center"
//         >

//           <span
//             className="
//               inline-block
//               rounded-full
//               border
//               border-violet-500/20
//               bg-violet-500/10
//               px-5
//               py-2
//               text-sm
//               font-semibold
//               uppercase
//               tracking-[0.25em]
//               text-violet-500
//             "
//           >
//             GitHub
//           </span>

//           <h2 className="mt-6 text-5xl font-extrabold text-gray-900 dark:text-white">
//             Open Source &
//             <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
//               {" "}GitHub
//             </span>
//           </h2>

//           <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
//             My GitHub profile showcases projects, continuous learning and
//             contributions as I build modern web applications and improve my
//             development skills.
//           </p>

//         </motion.div>

//         {/* GitHub Cards */}

//         <div className="grid gap-8 lg:grid-cols-3">
//             {/* GitHub Profile */}

// <motion.div
//   initial={{ opacity: 0, y: 40 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.6 }}
//   viewport={{ once: true }}
//   whileHover={{
//     y: -8,
//     scale: 1.02,
//   }}
//   className="
//     rounded-3xl
//     border
//     border-gray-200
//     bg-white
//     p-8
//     shadow-lg
//     transition-all
//     duration-300
//     hover:shadow-2xl
//     dark:border-white/10
//     dark:bg-white/5
//     dark:shadow-none
//     dark:hover:border-violet-500
//     dark:hover:shadow-[0_0_30px_rgba(139,92,246,.25)]
//   "
// >
//   <div className="flex items-center gap-4">

//     <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 shadow-lg">
//       <FaGithub className="text-3xl text-white" />
//     </div>

//     <div>
//       <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
//         GitHub Profile
//       </h3>

//       <p className="text-gray-600 dark:text-gray-400">
//         @ankur-crypto
//       </p>
//     </div>

//   </div>

//   <p className="mt-6 leading-8 text-gray-600 dark:text-gray-400">
//     Explore my repositories, frontend projects and continuous learning
//     journey through my GitHub profile.
//   </p>

//   <div className="mt-8 flex gap-4">

//     <div className="flex items-center gap-2 rounded-full bg-violet-500/10 px-4 py-2 text-violet-600 dark:text-violet-300">
//       <FaCodeBranch />
//       Repositories
//     </div>

//     <div className="flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-600 dark:text-cyan-300">
//       <FaStar />
//       Projects
//     </div>

//   </div>

//   <Link
//     href="https://github.com/ankur-crypto"
//     target="_blank"
//     className="
//       mt-8
//       inline-flex
//       items-center
//       gap-2
//       rounded-full
//       bg-gradient-to-r
//       from-violet-600
//       to-cyan-500
//       px-6
//       py-3
//       font-semibold
//       text-white
//       transition-all
//       duration-300
//       hover:scale-105
//       hover:shadow-lg
//       hover:shadow-violet-500/30
//     "
//   >
//     <FaGithub />
//     Visit GitHub
//   </Link>

// </motion.div>
// {/* GitHub Stats */}

// <motion.div
//   initial={{ opacity: 0, y: 40 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.7, delay: 0.15 }}
//   viewport={{ once: true }}
//   className="space-y-8 lg:col-span-2"
// >

//   {/* GitHub Stats Image */}

//   <motion.div
//     whileHover={{ y: -6 }}
//     className="
//       overflow-hidden
//       rounded-3xl
//       border
//       border-gray-200
//       bg-white
//       p-5
//       shadow-lg
//       transition-all
//       duration-300
//       hover:shadow-2xl
//       dark:border-white/10
//       dark:bg-white/5
//       dark:shadow-none
//       dark:hover:border-violet-500
//     "
//   >

//     <img
//       src="https://github-readme-stats-sigma-five.vercel.app/api?username=ankur-crypto&show_icons=true&theme=tokyonight&hide_border=true"
//       alt="GitHub Stats"
//       className="w-full rounded-2xl"
//     />

//   </motion.div>

//   {/* Top Languages */}

//   <motion.div
//     whileHover={{ y: -6 }}
//     className="
//       overflow-hidden
//       rounded-3xl
//       border
//       border-gray-200
//       bg-white
//       p-5
//       shadow-lg
//       transition-all
//       duration-300
//       hover:shadow-2xl
//       dark:border-white/10
//       dark:bg-white/5
//       dark:shadow-none
//       dark:hover:border-cyan-500
//     "
//   >

//     <img
//       src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=ankur-crypto&layout=compact&theme=tokyonight&hide_border=true"
//       className="w-full rounded-2xl"
//     />

//   </motion.div>

// </motion.div>

// </div>

// {/* Bottom CTA */}

// <motion.div
//   initial={{ opacity: 0, y: 40 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.8 }}
//   viewport={{ once: true }}
//   className="
//     mt-20
//     rounded-3xl
//     border
//     border-gray-200
//     bg-white
//     p-10
//     text-center
//     shadow-lg
//     transition-all
//     duration-300
//     dark:border-white/10
//     dark:bg-white/5
//     dark:shadow-none
//   "
// >

//   <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
//     Let's Build Something Amazing Together 🚀
//   </h3>

//   <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
//     I'm passionate about creating modern web applications,
//     writing clean code and continuously learning new technologies.
//     Feel free to explore my GitHub repositories and connect with me.
//   </p>

//   <Link
//     href="#contact"
//     className="
//       mt-8
//       inline-flex
//       items-center
//       rounded-full
//       bg-gradient-to-r
//       from-violet-600
//       to-cyan-500
//       px-8
//       py-4
//       font-semibold
//       text-white
//       transition-all
//       duration-300
//       hover:scale-105
//       hover:shadow-lg
//       hover:shadow-violet-500/30
//     "
//   >
//     Get In Touch
//   </Link>

// </motion.div>

// </div>

// </section>
// );
// }
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
        py-16
        transition-colors
        duration-300
        sm:py-20
        lg:py-28
        dark:bg-[#050816]
      "
    >
      {/* ===========================
          Background Glow
      =========================== */}

      <div
        className="
          absolute
          left-0
          top-0
          h-64
          w-64
          rounded-full
          bg-violet-600/10
          blur-[100px]
          sm:h-96
          sm:w-96
          sm:blur-[150px]
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          h-64
          w-64
          rounded-full
          bg-cyan-500/10
          blur-[100px]
          sm:h-96
          sm:w-96
          sm:blur-[150px]
        "
      />

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* ===========================
            Heading
        =========================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            mb-12
            text-center
            sm:mb-16
            lg:mb-20
          "
        >
          <span
            className="
              inline-block
              rounded-full
              border
              border-violet-500/20
              bg-violet-500/10
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-violet-500
              sm:px-5
              sm:text-sm
              sm:tracking-[0.25em]
            "
          >
            GitHub
          </span>

          <h2
            className="
              mt-5
              text-4xl
              font-extrabold
              leading-tight
              text-gray-900
              sm:mt-6
              sm:text-5xl
              dark:text-white
            "
          >
            Open Source &{" "}
            <span
              className="
                bg-gradient-to-r
                from-violet-500
                to-cyan-500
                bg-clip-text
                text-transparent
              "
            >
              GitHub
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-base
              leading-7
              text-gray-600
              sm:mt-6
              sm:text-lg
              sm:leading-8
              dark:text-gray-400
            "
          >
            My GitHub profile showcases projects, continuous learning and
            contributions as I build modern web applications and improve my
            development skills.
          </p>
        </motion.div>

        {/* ===========================
            GitHub Cards
        =========================== */}

        <div
          className="
            grid
            min-w-0
            grid-cols-1
            gap-6
            lg:grid-cols-3
            lg:gap-8
          "
        >
          {/* ===========================
              GitHub Profile
          =========================== */}

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
              min-w-0
              rounded-2xl
              border
              border-gray-200
              bg-white
              p-5
              shadow-lg
              transition-all
              duration-300
              hover:shadow-2xl
              sm:rounded-3xl
              sm:p-8
              dark:border-white/10
              dark:bg-white/5
              dark:shadow-none
              dark:hover:border-violet-500
              dark:hover:shadow-[0_0_30px_rgba(139,92,246,.25)]
            "
          >
            {/* Profile Header */}

            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <div
                className="
                  flex
                  h-14
                  w-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-gradient-to-r
                  from-violet-600
                  to-cyan-500
                  shadow-lg
                  sm:h-16
                  sm:w-16
                  sm:rounded-2xl
                "
              >
                <FaGithub className="text-2xl text-white sm:text-3xl" />
              </div>

              <div className="min-w-0">
                <h3
                  className="
                    text-xl
                    font-bold
                    text-gray-900
                    sm:text-2xl
                    dark:text-white
                  "
                >
                  GitHub Profile
                </h3>

                <p className="text-sm text-gray-600 sm:text-base dark:text-gray-400">
                  @ankur-crypto
                </p>
              </div>
            </div>

            {/* Description */}

            <p
              className="
                mt-5
                text-sm
                leading-7
                text-gray-600
                sm:mt-6
                sm:text-base
                sm:leading-8
                dark:text-gray-400
              "
            >
              Explore my repositories, frontend projects and continuous
              learning journey through my GitHub profile.
            </p>

            {/* Repository / Projects */}

            <div
              className="
                mt-6
                flex
                flex-wrap
                gap-3
                sm:mt-8
                sm:gap-4
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-violet-500/10
                  px-4
                  py-2
                  text-sm
                  text-violet-600
                  dark:text-violet-300
                "
              >
                <FaCodeBranch />
                Repositories
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-cyan-500/10
                  px-4
                  py-2
                  text-sm
                  text-cyan-600
                  dark:text-cyan-300
                "
              >
                <FaStar />
                Projects
              </div>
            </div>

            {/* GitHub Button */}

            <Link
              href="https://github.com/ankur-crypto"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-gradient-to-r
                from-violet-600
                to-cyan-500
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-lg
                hover:shadow-violet-500/30
                sm:mt-8
                sm:px-6
                sm:text-base
              "
            >
              <FaGithub />
              Visit GitHub
            </Link>
          </motion.div>

          {/* ===========================
              GitHub Stats
          =========================== */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="
              min-w-0
              space-y-6
              lg:col-span-2
              lg:space-y-8
            "
          >
            {/* ===========================
                GitHub Stats Image
            =========================== */}

            <motion.div
              whileHover={{ y: -6 }}
              className="
                min-w-0
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-3
                shadow-lg
                transition-all
                duration-300
                hover:shadow-2xl
                sm:rounded-3xl
                sm:p-5
                dark:border-white/10
                dark:bg-white/5
                dark:shadow-none
                dark:hover:border-violet-500
              "
            >
              <div className="w-full overflow-x-auto">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=ankur-crypto&show_icons=true&theme=tokyonight&hide_border=true"
                  alt="Ankur Chakraborty GitHub statistics"
                  className="
                    block
                    h-auto
                    w-full
                    min-w-0
                    rounded-xl
                    sm:rounded-2xl
                  "
                />
              </div>
            </motion.div>

            {/* ===========================
                Top Languages
            =========================== */}

            <motion.div
              whileHover={{ y: -6 }}
              className="
                min-w-0
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-3
                shadow-lg
                transition-all
                duration-300
                hover:shadow-2xl
                sm:rounded-3xl
                sm:p-5
                dark:border-white/10
                dark:bg-white/5
                dark:shadow-none
                dark:hover:border-cyan-500
              "
            >
              <div className="w-full overflow-x-auto">
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=ankur-crypto&layout=compact&theme=tokyonight&hide_border=true"
                  alt="Ankur Chakraborty top GitHub languages"
                  className="
                    block
                    h-auto
                    w-full
                    min-w-0
                    rounded-xl
                    sm:rounded-2xl
                  "
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ===========================
            Bottom CTA
        =========================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            mt-12
            rounded-2xl
            border
            border-gray-200
            bg-white
            p-6
            text-center
            shadow-lg
            transition-all
            duration-300
            sm:mt-16
            sm:rounded-3xl
            sm:p-8
            lg:mt-20
            lg:p-10
            dark:border-white/10
            dark:bg-white/5
            dark:shadow-none
          "
        >
          <h3
            className="
              text-2xl
              font-bold
              leading-tight
              text-gray-900
              sm:text-3xl
              dark:text-white
            "
          >
            Let&apos;s Build Something Amazing Together 🚀
          </h3>

          <p
            className="
              mx-auto
              mt-4
              max-w-3xl
              text-base
              leading-7
              text-gray-600
              sm:mt-6
              sm:text-lg
              sm:leading-8
              dark:text-gray-400
            "
          >
            I&apos;m passionate about creating modern web applications,
            writing clean code and continuously learning new technologies.
            Feel free to explore my GitHub repositories and connect with me.
          </p>

          <Link
            href="#contact"
            className="
              mt-6
              inline-flex
              w-full
              items-center
              justify-center
              rounded-full
              bg-gradient-to-r
              from-violet-600
              to-cyan-500
              px-6
              py-3.5
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-lg
              hover:shadow-violet-500/30
              sm:mt-8
              sm:w-auto
              sm:px-8
              sm:py-4
            "
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}