"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  // Wait until theme is available
  if (!resolvedTheme) {
    return (
      <div className="h-11 w-11 rounded-full border border-gray-300 dark:border-white/10" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Theme"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-900 shadow-md transition-all duration-300 hover:scale-110 dark:border-white/10 dark:bg-white/10 dark:text-white"
    >
      {isDark ? (
        <FaSun className="text-lg text-yellow-400" />
      ) : (
        <FaMoon className="text-lg text-violet-600" />
      )}
    </button>
  );
}