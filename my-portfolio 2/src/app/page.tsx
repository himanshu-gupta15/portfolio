import Hero from "@/component/Hero";
import About from "./about/page";
import Skills from "./skills/page";
import CodingProfileSection from "@/component/CodingProfileSection";
import Projects from "./projects/page";
import Contact from "./contact/page";
import AnimatedBackground from "@/component/AnimatedBackground";

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <section id="home" className="scroll-mt-28">
        <Hero />
      </section>

      <section id="about" className="scroll-mt-28">
        <About />
      </section>

      <section id="skills" className="scroll-mt-28">
        <Skills />
      </section>

      <CodingProfileSection />

      <section id="projects" className="scroll-mt-28">
        <Projects />
      </section>

      <section id="contact" className="scroll-mt-28">
        <Contact />
      </section>
    </main>
  );
}