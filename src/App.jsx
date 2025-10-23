import React from "react";
import { ThemeProvider } from "./components/Header/ThemeContext";
import Navbar from "./components/Header/Navbar";
import SkillsSection from "./components/Skills/SkillsSection";
import ProjectsSection from "./components/Projects/ProjectsSection";
import Contact from "./components/Contact/Contact";
import Hero from "./components/HeroSection/Hero";
import ThemeSwitcher from "./components/Header/ThemeSwitcher";
import Experience from "./components/Work_Experience/Experience";

export default function App() {
  return (
    <ThemeProvider>
      <div style={{ minHeight: "100vh", background: "var(--page-background)" }}>
        <Navbar />
        <main>
          <section id="hero">
            <Hero />
          </section>
          <section id="skills">
            <SkillsSection />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="projects">
            <ProjectsSection />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
}
