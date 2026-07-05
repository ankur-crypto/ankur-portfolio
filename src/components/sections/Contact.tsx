// "use client";

// import { useState } from "react";

// import {
//   Mail,
//   Phone,
//   MapPin,
//   Send,
// } from "lucide-react";

// import { sendEmail } from "@/lib/email";

// const contactInfo = [
//   {
//     icon: Mail,
//     title: "Email",
//     value: "chakrabortyankur843@gmail.com",
//   },
//   {
//     icon: Phone,
//     title: "Phone",
//     value: "+91 7005010311",
//   },
//   {
//     icon: MapPin,
//     title: "Location",
//     value: "Agartala, Tripura, India",
//   },
// ];

// const initialForm = {
//   name: "",
//   email: "",
//   subject: "",
//   message: "",
// };

// export default function Contact() {
//   const [formData, setFormData] = useState(initialForm);

//   const [loading, setLoading] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (
//     e: React.FormEvent<HTMLFormElement>
//   ) => {
//     e.preventDefault();

//     setLoading(true);

//     try {
//       await sendEmail({
//         name: formData.name,
//         email: formData.email,
//         subject: formData.subject,
//         message: formData.message,
//       });

//       alert("Message sent successfully!");

//       setFormData(initialForm);

//      } catch (error: any) {
//         console.log("ERROR:", error);
//         console.log("TEXT:", error?.text);
//         console.log("STATUS:", error?.status);
//         console.log("MESSAGE:", error?.message);

//         alert(error?.text || error?.message || "Unknown error");
// } finally {

//       setLoading(false);

//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="bg-[#0B1120] py-24 text-white"
//     >
//       <div className="mx-auto max-w-7xl px-6">

//         {/* Heading */}

//         <div className="mb-20 text-center">

//           <span className="inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
//             Contact
//           </span>

//           <h2 className="mt-6 text-4xl font-bold md:text-5xl">
//             Let's Work Together
//           </h2>

//           <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
//             Have a project in mind or want to connect? Feel free to send me
//             a message.
//           </p>

//         </div>

//         <div className="grid gap-10 lg:grid-cols-2">
//                     {/* Left Side */}

//           <div className="space-y-6">

//             {contactInfo.map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={index}
//                   className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500 hover:shadow-[0_0_35px_rgba(139,92,246,.25)]"
//                 >
//                   <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500">

//                     <Icon
//                       size={26}
//                       className="text-white"
//                     />

//                   </div>

//                   <div>

//                     <h3 className="text-xl font-semibold text-white">
//                       {item.title}
//                     </h3>

//                     <p className="mt-1 text-gray-400">
//                       {item.value}
//                     </p>

//                   </div>

//                 </div>
//               );
//             })}

//             <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

//               <h3 className="text-2xl font-bold text-white">
//                 Let's Build Something Amazing 🚀
//               </h3>

//               <p className="mt-5 leading-8 text-gray-400">
//                 I'm always interested in discussing frontend development,
//                 React, Next.js, TypeScript, freelance opportunities and
//                 exciting projects. Feel free to reach out anytime.
//               </p>

//             </div>

//           </div>

//           {/* Right Side */}

//           <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

//             <form
//               onSubmit={handleSubmit}
//               className="space-y-6"
//             >

//               {/* Name */}

//               <div>

//                 <label className="mb-2 block text-sm font-medium text-gray-300">
//                   Full Name
//                 </label>

//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter your full name"
//                   required
//                   className="w-full rounded-2xl border border-white/10 bg-[#111827]/60 px-5 py-4 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
//                 />

//               </div>

//               {/* Email */}

//               <div>

//                 <label className="mb-2 block text-sm font-medium text-gray-300">
//                   Email Address
//                 </label>

//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter your email"
//                   required
//                   className="w-full rounded-2xl border border-white/10 bg-[#111827]/60 px-5 py-4 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
//                 />

//               </div>
//                             {/* Subject */}

//               <div>

//                 <label className="mb-2 block text-sm font-medium text-gray-300">
//                   Subject
//                 </label>

//                 <input
//                   type="text"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   placeholder="Project discussion"
//                   required
//                   className="w-full rounded-2xl border border-white/10 bg-[#111827]/60 px-5 py-4 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
//                 />

//               </div>

//               {/* Message */}

//               <div>

//                 <label className="mb-2 block text-sm font-medium text-gray-300">
//                   Message
//                 </label>

//                 <textarea
//                   name="message"
//                   rows={6}
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Write your message..."
//                   required
//                   className="w-full resize-none rounded-2xl border border-white/10 bg-[#111827]/60 px-5 py-4 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
//                 />

//               </div>

//               {/* Submit Button */}

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-violet-500/30 disabled:cursor-not-allowed disabled:opacity-60"
//               >
//                 <Send size={20} />

//                 {loading ? "Sending..." : "Send Message"}

//               </button>

//             </form>

//           </div>
//                   </div>

//         {/* Bottom CTA */}

//         <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">

//           <h3 className="text-3xl font-bold text-white">
//             Ready to Build Something Great?
//           </h3>

//           <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
//             Whether you have a project idea, an internship opportunity,
//             a frontend developer role, or simply want to connect,
//             I'd be happy to hear from you.
//           </p>

//           <div className="mt-8 flex flex-wrap justify-center gap-3">

//             {[
//               "React",
//               "Next.js",
//               "TypeScript",
//               "Tailwind CSS",
//               "Material UI",
//               "Frontend Development",
//               "REST API",
//               "UI/UX",
//             ].map((item) => (

//               <span
//                 key={item}
//                 className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300 transition-all duration-300 hover:scale-105 hover:border-violet-500"
//               >
//                 {item}
//               </span>

//             ))}

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }
"use client";

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
    value: "your.email@gmail.com",
    href: "mailto:your.email@gmail.com",
  },

  {
    icon: <Phone size={24} />,
    title: "Phone",
    value: "+91 XXXXX XXXXX",
    href: "tel:+91XXXXXXXXXX",
  },

  {
    icon: <MapPin size={24} />,
    title: "Location",
    value: "Agartala, Tripura, India",
    href: "#",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-slate-50
        py-28
        transition-colors
        duration-300
        dark:bg-[#050816]
      "
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-violet-500">
            Contact
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-gray-900 dark:text-white">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            Have a project in mind or want to discuss an opportunity?
            Feel free to reach out. I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Content */}

        <div className="grid gap-12 lg:grid-cols-2">
                  {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {contactInfo.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="
                flex
                items-center
                gap-5
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-6
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                dark:border-white/10
                dark:bg-white/5
                dark:shadow-none
                dark:hover:border-violet-500
              "
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg">
                {item.icon}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  {item.value}
                </p>
              </div>
            </a>
          ))}

          {/* Social Links */}

          <div className="pt-8">
            <h3 className="mb-5 text-2xl font-bold text-gray-900 dark:text-white">
              Connect with me
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/YOUR_GITHUB_USERNAME"
                target="_blank"
                className="
                  flex
                  h-14
                  w-14
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
                  dark:border-white/10
                  dark:bg-white/5
                  dark:text-white
                "
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
                target="_blank"
                className="
                  flex
                  h-14
                  w-14
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

        {/* Right Side */}

        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            rounded-3xl
            border
            border-gray-200
            bg-white
            p-8
            shadow-lg
            dark:border-white/10
            dark:bg-white/5
            dark:shadow-none
          "
        >
          <div className="grid gap-6">

            <input
              type="text"
              placeholder="Your Name"
              className="
                rounded-xl
                border
                border-gray-300
                bg-transparent
                px-5
                py-4
                outline-none
                transition
                focus:border-violet-500
                dark:border-white/10
                dark:text-white
              "
            />

            <input
              type="email"
              placeholder="Your Email"
              className="
                rounded-xl
                border
                border-gray-300
                bg-transparent
                px-5
                py-4
                outline-none
                transition
                focus:border-violet-500
                dark:border-white/10
                dark:text-white
              "
            />

            <input
              type="text"
              placeholder="Subject"
              className="
                rounded-xl
                border
                border-gray-300
                bg-transparent
                px-5
                py-4
                outline-none
                transition
                focus:border-violet-500
                dark:border-white/10
                dark:text-white
              "
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="
                resize-none
                rounded-xl
                border
                border-gray-300
                bg-transparent
                px-5
                py-4
                outline-none
                transition
                focus:border-violet-500
                dark:border-white/10
                dark:text-white
              "
            />

            <button
              type="submit"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-gradient-to-r
                from-violet-600
                to-cyan-500
                px-8
                py-4
                font-semibold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:scale-[1.02]
              "
            >
              <Send size={20} />
              Send Message
            </button>

          </div>
        </motion.form>
                </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            mt-20
            rounded-3xl
            border
            border-gray-200
            bg-white
            p-10
            text-center
            shadow-lg
            transition-all
            duration-300
            dark:border-white/10
            dark:bg-white/5
            dark:shadow-none
          "
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
            Open to New Opportunities 🚀
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            Whether you have a freelance project, internship, full-time
            opportunity or just want to connect, I'd be happy to hear from
            you. Let's build something amazing together.
          </p>

          <a
            href="mailto:your.email@gmail.com"
            className="
              mt-8
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-gradient-to-r
              from-violet-600
              to-cyan-500
              px-8
              py-4
              font-semibold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-violet-500/30
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