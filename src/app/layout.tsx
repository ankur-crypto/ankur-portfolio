
// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import { Toaster } from "react-hot-toast";

// import ThemeProvider from "@/components/providers/ThemeProvider";
// import LoadingScreen from "@/components/ui/LoadingScreen";

// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: {
//     default: "Ankur Chakraborty | Frontend Developer",
//     template: "%s | Ankur Chakraborty",
//   },

//   description:
//     "Frontend Developer specializing in React, Next.js, TypeScript and Tailwind CSS. Building modern, responsive and scalable web applications.",

//   keywords: [
//     "Ankur Chakraborty",
//     "Frontend Developer",
//     "React",
//     "Next.js",
//     "TypeScript",
//     "Tailwind CSS",
//     "Portfolio",
//   ],

//   authors: [
//     {
//       name: "Ankur Chakraborty",
//     },
//   ],

//   creator: "Ankur Chakraborty",

//   metadataBase: new URL("https://ankur-portfolio-five.vercel.app"),

//   openGraph: {
//     title: "Ankur Chakraborty | Frontend Developer",
//     description:
//       "Frontend Developer specializing in React, Next.js and TypeScript.",

//     type: "website",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html
//       lang="en"
//       suppressHydrationWarning
//       className={`${geistSans.variable} ${geistMono.variable}`}
//     >
// <ThemeProvider>
//   <LoadingScreen />
//   <Toaster
//     position="top-right"
//     toastOptions={{
//       duration: 3000,
//       style: {
//         borderRadius: "12px",
//       },
//     }}
//   />
//   {children}
// </ThemeProvider>
//     </html>
//   );
// }
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";

import ThemeProvider from "@/components/providers/ThemeProvider";
import LoadingScreen from "@/components/ui/LoadingScreen";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ankur Chakraborty | Frontend Developer",
    template: "%s | Ankur Chakraborty",
  },

  description:
    "Frontend Developer specializing in React, Next.js, TypeScript and Tailwind CSS. Building modern, responsive and scalable web applications.",

  keywords: [
    "Ankur Chakraborty",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript",
    "Portfolio",
    "Web Developer",
  ],

  authors: [
    {
      name: "Ankur Chakraborty",
    },
  ],

  creator: "Ankur Chakraborty",

  metadataBase: new URL("https://ankur-portfolio-five.vercel.app"),

  openGraph: {
    title: "Ankur Chakraborty | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, TypeScript and Tailwind CSS.",

    url: "https://ankur-portfolio-five.vercel.app",

    siteName: "Ankur Portfolio",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ankur Chakraborty Portfolio",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Ankur Chakraborty | Frontend Developer",

    description:
      "Frontend Developer specializing in React, Next.js, TypeScript and Tailwind CSS.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-white text-gray-900 antialiased dark:bg-[#050816] dark:text-white">
        <ThemeProvider>
          <LoadingScreen />

          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                borderRadius: "12px",
              },
            }}
          />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}