"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-50 px-6 transition-colors duration-300 dark:bg-[#050816]">
      <div className="text-center">

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-8xl font-extrabold text-transparent md:text-9xl"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-4xl font-bold text-gray-900 dark:text-white"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-400"
        >
          Sorry, the page you're looking for doesn't exist or may have been moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/"
            className="mt-10 inline-flex rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
          >
            ← Back to Home
          </Link>
        </motion.div>

      </div>
    </section>
  );
}