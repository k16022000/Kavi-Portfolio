import Contact from "/components/Contact";
import Experience from "/components/Experience";
import Hero from "/components/Hero";
import Navbar from "/components/Navbar";
import Projects from "/components/Projects";
import Skills from "/components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
