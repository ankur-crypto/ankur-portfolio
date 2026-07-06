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
      {loading && ( <motion.div
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
    items-center
    justify-center
    overflow-hidden
    bg-slate-50
    transition-colors
    duration-300
    dark:bg-[#050816]
  "
>

  {/* Background Glow */}

  <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[160px]" />

  <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

  <div className="relative flex flex-col items-center">

    {/* Logo */}

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
        h-24
        w-24
        items-center
        justify-center
        rounded-full
        bg-gradient-to-r
        from-violet-600
        to-cyan-500
        text-4xl
        font-extrabold
        text-white
        shadow-[0_0_40px_rgba(139,92,246,.45)]
      "
    >
      AC
    </motion.div>

    {/* Name */}

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
      className="mt-8 text-4xl font-extrabold text-gray-900 dark:text-white"
    >
      Ankur Chakraborty
    </motion.h1>

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
      className="mt-3 text-lg tracking-[0.3em] text-violet-500 uppercase"
    >
      Frontend Developer
    </motion.p>

    {/* Loading Dots */}

    <div className="mt-10 flex gap-3">

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
          className="h-3 w-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500"
        />
      ))}

    </div>

  </div>

</motion.div>
      )}
    </AnimatePresence>
  );
}