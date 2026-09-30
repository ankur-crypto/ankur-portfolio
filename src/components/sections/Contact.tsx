
"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";

import { motion } from "framer-motion";

import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <Mail size={24} />,
    title: "Email",
    value: "chakrabortyankur843@gmail.com",
    href: "mailto:chakrabortyankur843@gmail.com",
  },
  {
    icon: <Phone size={24} />,
    title: "Phone",
    value: "+91 7005010311",
    href: "tel:+917005010311",
  },
  {
    icon: <MapPin size={24} />,
    title: "Location",
    value: "Agartala, Tripura, India",
    href: "#",
  },
];

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.subject ||
      !form.message
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success(
        "🎉 Thank you! Your message has been sent successfully."
      );

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      toast.error(
        "❌ Something went wrong. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
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
          sm:blur-[140px]
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
          sm:blur-[140px]
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
          className="mb-12 text-center sm:mb-16 lg:mb-20"
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
            Contact
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
            Let&apos;s Work Together
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
            Have a project in mind or want to discuss an opportunity?
            Feel free to reach out. I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* ===========================
            Contact Content
        =========================== */}

        <div
          className="
            grid
            min-w-0
            grid-cols-1
            gap-10
            lg:grid-cols-2
            lg:gap-12
          "
        >
          {/* ===========================
              Left Side
          =========================== */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="min-w-0 space-y-4 sm:space-y-6"
          >
            {contactInfo.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="
                  flex
                  w-full
                  min-w-0
                  items-center
                  gap-3
                  overflow-hidden
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  p-4
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  sm:gap-5
                  sm:rounded-3xl
                  sm:p-6
                  dark:border-white/10
                  dark:bg-white/5
                  dark:shadow-none
                  dark:hover:border-violet-500
                "
              >
                {/* Icon */}

                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-to-r
                    from-violet-600
                    to-cyan-500
                    text-white
                    shadow-lg
                    sm:h-14
                    sm:w-14
                    sm:rounded-2xl
                  "
                >
                  {item.icon}
                </div>

                {/* Text */}

                <div className="min-w-0 flex-1">
                  <h3
                    className="
                      text-base
                      font-semibold
                      text-gray-900
                      sm:text-lg
                      dark:text-white
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-1
                      break-all
                      text-sm
                      leading-6
                      text-gray-600
                      sm:break-normal
                      sm:text-base
                      dark:text-gray-400
                    "
                  >
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            {/* ===========================
                Social Links
            =========================== */}

            <div className="pt-4 sm:pt-8">
              <h3
                className="
                  mb-4
                  text-xl
                  font-bold
                  text-gray-900
                  sm:mb-5
                  sm:text-2xl
                  dark:text-white
                "
              >
                Connect with me
              </h3>

              <div className="flex gap-3 sm:gap-4">
                {/* GitHub */}

                <a
                  href="https://github.com/ankur-crypto"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-gray-200
                    bg-white
                    text-gray-700
                    shadow-lg
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:border-violet-500
                    hover:text-violet-500
                    sm:h-14
                    sm:w-14
                    dark:border-white/10
                    dark:bg-white/5
                    dark:text-white
                  "
                >
                  <FaGithub size={22} />
                </a>

                {/* LinkedIn */}

                <a
                  href="https://www.linkedin.com/in/ankur-chakraborty-777b21197?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-gray-200
                    bg-white
                    text-gray-700
                    shadow-lg
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:border-cyan-500
                    hover:text-cyan-500
                    sm:h-14
                    sm:w-14
                    dark:border-white/10
                    dark:bg-white/5
                    dark:text-white
                  "
                >
                  <FaLinkedin size={22} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* ===========================
              Right Side - Contact Form
          =========================== */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              min-w-0
              rounded-2xl
              border
              border-gray-200
              bg-white
              p-4
              shadow-lg
              sm:rounded-3xl
              sm:p-6
              lg:p-8
              dark:border-white/10
              dark:bg-white/5
              dark:shadow-none
            "
          >
            <div className="grid min-w-0 gap-5 sm:gap-6">
              {/* Name */}

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="
                  w-full
                  min-w-0
                  rounded-xl
                  border
                  border-gray-300
                  bg-transparent
                  px-4
                  py-3.5
                  text-sm
                  outline-none
                  transition
                  focus:border-violet-500
                  sm:px-5
                  sm:py-4
                  sm:text-base
                  dark:border-white/10
                  dark:text-white
                "
              />

              {/* Email */}

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="
                  w-full
                  min-w-0
                  rounded-xl
                  border
                  border-gray-300
                  bg-transparent
                  px-4
                  py-3.5
                  text-sm
                  outline-none
                  transition
                  focus:border-violet-500
                  sm:px-5
                  sm:py-4
                  sm:text-base
                  dark:border-white/10
                  dark:text-white
                "
              />

              {/* Subject */}

              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="
                  w-full
                  min-w-0
                  rounded-xl
                  border
                  border-gray-300
                  bg-transparent
                  px-4
                  py-3.5
                  text-sm
                  outline-none
                  transition
                  focus:border-violet-500
                  sm:px-5
                  sm:py-4
                  sm:text-base
                  dark:border-white/10
                  dark:text-white
                "
              />

              {/* Message */}

              <textarea
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="
                  w-full
                  min-w-0
                  resize-none
                  rounded-xl
                  border
                  border-gray-300
                  bg-transparent
                  px-4
                  py-3.5
                  text-sm
                  outline-none
                  transition
                  focus:border-violet-500
                  sm:px-5
                  sm:py-4
                  sm:text-base
                  dark:border-white/10
                  dark:text-white
                "
              />

              {/* Submit Button */}

              <button
                type="submit"
                disabled={loading}
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-gradient-to-r
                  from-violet-600
                  to-cyan-500
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  sm:px-8
                  sm:py-4
                  sm:text-base
                  disabled:cursor-not-allowed
                  disabled:opacity-70
                "
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </motion.form>
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
            Open to New Opportunities 🚀
          </h3>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-base
              leading-7
              text-gray-600
              sm:mt-6
              sm:text-lg
              sm:leading-8
              dark:text-gray-400
            "
          >
            Whether you have a freelance project, internship,
            full-time opportunity or simply want to connect,
            I&apos;d be happy to hear from you.
            Let&apos;s build something amazing together.
          </p>

          <a
            href="mailto:chakrabortyankur843@gmail.com"
            className="
              mt-6
              inline-flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-full
              bg-gradient-to-r
              from-violet-600
              to-cyan-500
              px-6
              py-3.5
              font-semibold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-violet-500/30
              sm:mt-8
              sm:w-auto
              sm:px-8
              sm:py-4
            "
          >
            <Mail size={20} />
            Email Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}