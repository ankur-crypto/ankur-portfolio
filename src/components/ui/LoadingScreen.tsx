
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            min-h-screen
            w-full
            items-center
            justify-center
            overflow-hidden
            bg-slate-50
            px-4
            transition-colors
            duration-300
            dark:bg-[#050816]
          "
        >
          {/* ===========================
              Background Glow
          =========================== */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[280px]
              w-[280px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-violet-600/10
              blur-[100px]
              sm:h-[420px]
              sm:w-[420px]
              sm:blur-[160px]
            "
          />

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[220px]
              w-[220px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-cyan-500/10
              blur-[80px]
              sm:h-[320px]
              sm:w-[320px]
              sm:blur-[120px]
            "
          />

          {/* ===========================
              Main Content
          =========================== */}

          <div
            className="
              relative
              flex
              w-full
              max-w-xl
              flex-col
              items-center
              text-center
            "
          >
            {/* ===========================
                Logo
            =========================== */}

            <motion.div
              initial={{
                scale: 0,
                rotate: -180,
              }}
              animate={{
                scale: 1,
                rotate: 0,
              }}
              transition={{
                duration: 0.8,
                type: "spring",
              }}
              className="
                flex
                h-20
                w-20
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-gradient-to-r
                from-violet-600
                to-cyan-500
                text-3xl
                font-extrabold
                text-white
                shadow-[0_0_40px_rgba(139,92,246,.45)]
                sm:h-24
                sm:w-24
                sm:text-4xl
              "
            >
              AC
            </motion.div>

            {/* ===========================
                Name
            =========================== */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
              }}
              className="
                mt-7
                whitespace-nowrap
                text-3xl
                font-extrabold
                leading-tight
                text-gray-900
                sm:mt-8
                sm:text-4xl
                dark:text-white
              "
            >
              Ankur Chakraborty
            </motion.h1>

            {/* ===========================
                Profession
            =========================== */}

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.5,
              }}
              className="
                mt-3
                text-xs
                font-medium
                tracking-[0.2em]
                text-violet-500
                uppercase
                sm:text-lg
                sm:tracking-[0.3em]
              "
            >
              Web Developer
            </motion.p>

            {/* ===========================
                Loading Dots
            =========================== */}

            <div className="mt-8 flex gap-3 sm:mt-10">
              {[0, 1, 2].map((dot) => (
                <motion.span
                  key={dot}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.7,
                    delay: dot * 0.2,
                  }}
                  className="
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-gradient-to-r
                    from-violet-600
                    to-cyan-500
                    sm:h-3
                    sm:w-3
                  "
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}