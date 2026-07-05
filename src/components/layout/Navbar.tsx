
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";

import ThemeToggle from "@/components/ui/ThemeToggle";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(item.href.replace("#", ""));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-gray-200/60 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#050816]/80"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <Link href="#home" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-lg font-bold text-white shadow-lg transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
            AC
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Ankur
              <span className="text-cyan-400">.</span>
            </h1>

            <p className="-mt-1 text-xs tracking-widest text-gray-600 dark:text-gray-400">
              FRONTEND DEVELOPER
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const active = activeSection === item.href.replace("#", "");

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  active
                    ? "text-violet-500 dark:text-violet-400"
                    : "text-gray-700 hover:text-violet-500 dark:text-gray-300 dark:hover:text-white"
                }`}
              >
                {item.name}

                <span
                  className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 transition-all duration-300 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Right Side */}

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <a
            href="/resume.pdf"
            download
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-violet-500/40 md:inline-flex"
          >
            <Download size={18} />
            Resume
          </a>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-gray-800 transition hover:bg-gray-200/50 dark:text-white dark:hover:bg-white/10 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}

      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white/95 backdrop-blur-xl dark:border-white/10 dark:bg-[#050816]/95 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-6">
            {navItems.map((item) => {
              const active = activeSection === item.href.replace("#", "");

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 ${
                    active
                      ? "bg-violet-500/20 text-violet-500 dark:text-violet-400"
                      : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <a
              href="/resume.pdf"
              download
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}