"use client";

import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Certifications } from "@/components/sections/Certifications";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-bg-deep">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <FeaturedProject />
        <ProjectsGrid />
        <Experience />
        <Skills />
        <Certifications />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
