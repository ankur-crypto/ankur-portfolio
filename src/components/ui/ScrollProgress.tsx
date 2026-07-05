"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[9999] h-1 origin-left bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}