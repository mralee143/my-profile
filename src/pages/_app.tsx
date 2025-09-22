"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Loading from "@/components/loading";
import Services from "@/components/services";
import Project from "@/components/projects";
import Testimonials from "@/components/Testimonials";
import About from "@/components/about";
import "@/styles/globals.css";
import Contact from "@/components/contact";
import Email from "@/components/email";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen text-white bg-black">
      {/* Background image section with navbar and hero */}
      <div className="relative bg-[url('/background.png')] bg-cover bg-center bg-no-repeat">
        <Navbar />
        <div className="pt-[80px]">
          <Hero />
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="scroll-mt-24 bg-black ">
        <Services />
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-24 bg-black ">
        <Project />
      </section>
      {/* Projects Section */}
      <section id="testimonials" className="scroll-mt-24 bg-black ">
        <Testimonials />
      </section>
      <section id="about" className="scroll-mt-24 bg-black ">
        <About />
      </section>
      <section id="contact" className="scroll-mt-24 bg-black ">
        <Contact />
      </section>
      <section id="email" className="scroll-mt-24 bg-black ">
        <Email />
      </section>
    </div>
  );
}
