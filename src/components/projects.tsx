"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import clsx from "clsx";

export default function ProjectSection() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const projects = [
    {
      title: "Portfolio Website 1",
      image: "/portfolio.1.jpeg",
      description: "Personal portfolio showcasing skills and work.",
      tags: ["Next.js", "Tailwind", "UI/UX"],
    },
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

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleProjectClick = (title: string) => {
    if (activeProject === title) {
      setActiveProject(null);
    } else {
      setActiveProject(title);
    }
  };

  const handleProjectHover = (title: string | null) => {
    if (!isMobile) {
      setActiveProject(title);
    }
  };

  return (
    <section
      id="projects"
      className="scroll-mt-24 py-12 md:py-20 px-4 bg-neutral-950 text-white text-center"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => handleProjectClick(project.title)}
            onMouseEnter={() => handleProjectHover(project.title)}
            onMouseLeave={() => handleProjectHover(null)}
            className={clsx(
              "relative group cursor-pointer rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-300",
              "bg-neutral-800 bg-opacity-60 backdrop-blur-xl border border-white/10",
              "hover:scale-[1.02] active:scale-[0.99]",
              "touch-manipulation",
              {
                "scale-[1.02] shadow-2xl": activeProject === project.title,
                "ring-2 ring-orange-500":
                  activeProject === project.title && isMobile,
              }
            )}
          >
            {/* Image Container - Always Visible */}
            <div className="relative w-full aspect-square h-[250px] sm:h-[300px] lg:h-[350px]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center rounded-2xl md:rounded-3xl"
                priority={index < 2}
              />
            </div>

            {/* Overlay content - FIXED: Only shows on hover/tap */}
            <div
              className={clsx(
                "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-300 flex flex-col justify-end p-4 md:p-6 rounded-2xl md:rounded-3xl",
                {
                  // Desktop: Show on hover, Mobile: Show when active
                  "opacity-100": activeProject === project.title,
                  "opacity-0 group-hover:opacity-100":
                    !isMobile && activeProject !== project.title,
                  "opacity-0": isMobile && activeProject !== project.title,
                }
              )}
            >
              <h3 className="text-lg font-bold mb-1 md:mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-sm text-gray-200 mb-2 md:mb-3 leading-tight">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1 md:gap-2 text-xs">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-orange-600 text-white px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Mobile tap indicator - Only show when overlay is hidden */}
            {isMobile && activeProject !== project.title && (
              <div className="absolute top-3 right-3 md:hidden">
                <div className="bg-black bg-opacity-50 rounded-full p-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile instructions */}
      {isMobile && (
        <div className="mt-8 text-sm text-gray-400">
          <p>Tap on a project to view details</p>
        </div>
      )}
    </section>
  );
}
