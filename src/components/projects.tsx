"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

export default function ProjectSection() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const projects = [
    {
      title: "Portfolio Website 1",
      image: "/portfolio.1.jpeg",
      description: "Personal portfolio showcasing skills and work.",
      tags: ["Next.js", "Tailwind", "UI/UX"],
    },
    // {
    //   title: "Portfolio Website 2",
    //   image: "/portfolio.2.jpeg",
    //   description: "Dark-themed portfolio with animations.",
    //   tags: ["React", "Framer Motion"],
    // },
    {
      title: "E-Commerce Web App",
      image: "/ecommerec.png",
      description: "Fully responsive e-commerce front-end.",
      tags: ["Shopify", "Stripe", "Zustand"],
    },
    {
      title: "Dashboard UI",
      image: "/dashboard.png",
      description: "Analytics dashboard with custom charts.",
      tags: ["Recharts", "Shadcn/ui"],
    },
  ];

  const handleImageClick = (title: string) => {
    setActiveProject(title);
    console.log(`Clicked on: ${title}`);
  };

  return (
    <section
      id="projects"
      className="scroll-mt-24 py-20 px-4 bg-neutral-950 text-white text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-16">Projects</h2>

      <div className="grid grid-cols-3 gap-10 max-w-10xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(project.title)}
            className={clsx(
              "relative group cursor-pointer rounded-3xl overflow-hidden transition-transform transform hover:scale-[1.03] hover:shadow-2xl",
              "bg-neutral-800 bg-opacity-60 backdrop-blur-xl border border-white/10",
              activeProject === project.title
            )}
          >
            <div className="relative w-full aspect-square h-[400px]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-center rounded-3xl transition-opacity group-hover:opacity-75"
              />
            </div>

            {/* Overlay content on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6 rounded-3xl">
              <h3 className="text-lg font-bold mb-1">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-orange-600 text-white px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
