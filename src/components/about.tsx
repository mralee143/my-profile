"use client";

import { useState } from "react";
import Image from "next/image";
import { GraduationCap, Briefcase } from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState<"education" | "experience">(
    "education"
  );

  return (
    <section className="bg-neutral-950 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Left: Image */}
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-2xl">
          <Image
            src="/about.jpeg"
            alt="About Me"
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>

        {/* Right: About Text + Tabs */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            I'm Ali Haider, a passionate Full Stack Developer with expertise in
            React, Next.js, and UI/UX design. I specialize in building modern,
            responsive, and high-performance websites that deliver excellent
            user experiences and real business value.
          </p>

          {/* Tabs */}
          <div className="flex gap-6 mb-6 border-b border-neutral-700 pb-2">
            {["education", "experience"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`relative pb-2 text-sm md:text-base font-semibold transition-colors duration-200 ${
                  activeTab === tab
                    ? "text-orange-500"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab === "education" ? "Education" : "Experience"}
                {activeTab === tab && (
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-xl shadow-md border border-white/10 transition-all duration-300">
            {activeTab === "education" ? (
              <div className="flex items-start gap-4">
                <GraduationCap className="w-6 h-6 text-orange-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-1 text-lg">
                    Bachelor's in Computer Science
                  </h3>
                  <p className="text-gray-400 text-sm">
                    University of Technology — 2022 - 2026
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-start gap-4">
                <Briefcase className="w-6 h-6 text-orange-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-1 text-lg">
                    Full Stack Developer at Metosys
                  </h3>
                  <p className="text-gray-400 text-sm">
                    1 year of experience working with React, Next.js & Tailwind
                    CSS
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
