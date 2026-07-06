"use client";

import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && ( <motion.button
  initial={{
    opacity: 0,
    scale: 0.8,
    y: 20,
  }}
  animate={{
    opacity: 1,
    scale: 1,
    y: 0,
  }}
  exit={{
    opacity: 0,
    scale: 0.8,
    y: 20,
  }}
  transition={{
    duration: 0.25,
  }}
  onClick={scrollToTop}
  aria-label="Back to top"
  className="
    fixed
    bottom-8
    right-8
    z-50
    flex
    h-14
    w-14
    items-center
    justify-center
    rounded-full
    bg-gradient-to-r
    from-violet-600
    to-cyan-500
    text-white
    shadow-xl
    transition-all
    duration-300
    hover:scale-110
    hover:shadow-[0_0_30px_rgba(139,92,246,.45)]
    active:scale-95
  "
  whileHover={{
    y: -3,
  }}
  whileTap={{
    scale: 0.9,
  }}
>
  <ArrowUp size={24} />
</motion.button>
      )}
    </AnimatePresence>
  );
}