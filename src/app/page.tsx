import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";

import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Certification from "@/components/sections/Certification";
import Achievements from "@/components/sections/Achievements";
import GithubStats from "@/components/sections/GithubStats";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
    <ScrollProgress />
    <BackToTop />

    <Navbar />

    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Certification />
      <Achievements />
      <GithubStats />
      <Contact />
    </main>

    <Footer />
  </>
  );
}