import Hero from "@/component/Hero";
import About from "./about/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

export default function Page() {
  return (
    <main>
      <section id="home" className="scroll-mt-28">
        <Hero />
      </section>

      <section id="about" className="scroll-mt-28">
        <About />
      </section>

      <section id="skills" className="scroll-mt-28">
        <Skills />
      </section>

      <section id="projects" className="scroll-mt-28">
        <Projects />
      </section>

      <section id="contact" className="scroll-mt-28">
        <Contact />
      </section>
    </main>
  );
}