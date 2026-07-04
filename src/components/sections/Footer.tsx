"use client";

import Link from "next/link";

import {
  ArrowUp,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816] text-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-3">
                      {/* About */}

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-xl font-bold text-white shadow-lg">
                AC
              </div>

              <div>

                <h2 className="text-2xl font-bold">
                  Ankur
                  <span className="text-cyan-400">.</span>
                </h2>

                <p className="text-sm tracking-widest text-gray-400">
                  FRONTEND DEVELOPER
                </p>

              </div>

            </div>

            <p className="mt-6 leading-8 text-gray-400">
              Passionate Frontend Developer building modern, responsive
              and user-friendly web applications using React, Next.js,
              TypeScript and modern frontend technologies.
            </p>

            {/* Social Icons */}

            <div className="mt-8 flex gap-4">

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:scale-110 hover:border-violet-500 hover:bg-violet-600"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:scale-110 hover:border-cyan-500 hover:bg-cyan-600"
              >
                <FaLinkedin size={20} />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-2xl font-bold">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">

              {quickLinks.map((link) => (

                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 transition-all duration-300 hover:translate-x-2 hover:text-violet-400"
                >
                  {link.name}
                </Link>

              ))}

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-2xl font-bold">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-4">

                <Mail className="text-violet-400" />

                <span className="text-gray-400">
                  chakrabortyankur843@gmail.com
                </span>

              </div>

              <div className="flex items-center gap-4">

                <MapPin className="text-cyan-400" />

                <span className="text-gray-400">
                  Agartala, Tripura, India
                </span>

              </div>

            </div>

          </div>
                  </div>

        {/* Bottom Footer */}

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">

          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Ankur Chakraborty. All Rights Reserved.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-violet-500/30"
            aria-label="Back to top"
          >
            <ArrowUp size={22} />
          </button>

        </div>

      </div>

    </footer>
  );
}