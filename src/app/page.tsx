"use client";

import { useEffect } from "react";
import Navigation from "@/components/Navigation/Navigation";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  useEffect(() => {
    const nav = document.querySelector("nav");
    const handleScroll = () => {
      if (window.scrollY > 100) {
        nav?.style.setProperty("background-color", "rgba(10, 10, 10, 0.95)");
      } else {
        nav?.style.setProperty("background-color", "rgba(10, 10, 10, 0.8)");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
