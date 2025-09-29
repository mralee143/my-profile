"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-28 min-h-screen flex flex-col mt-40 items-center justify-center px-4 text-center"
    >
      {/* Headline */}
      <div className="relative inline-block">
        <h1 className="text-[3rem] sm:text-[5rem] md:text-[9rem] font-bold leading-tight tracking-wide relative text-gray-700">
          FREELANCE <br />
          WEB DESIGNER
        </h1>

        {/* Profile Image */}
        <div className="absolute top-[-90px] right-[-35px] sm:-top-16 sm:right-4 md:-top-20 md:right-6 lg:-top-24 lg:right-10">
          <Image
            src="/profile.jpeg"
            alt="Profile"
            width={170}
            height={170}
            className="rounded-full border-4 border-gray-300 object-cover w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[170px] md:h-[170px]"
          />
        </div>
      </div>

      {/* Intro Text */}
      <p className="mt-6 text-gray-300 text-xl md:text-2xl leading-relaxed max-w-2xl text-center">
        Hi, I'm Ali Haider, a passionate Web Designer dedicated to creating
        user-friendly digital experiences.
      </p>

      {/* CTA Button */}
      <div className="mt-8 flex gap-4">
        <a href="#contact" className="flex-1">
          <button className="w-full px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded text-white font-medium transition">
            Get in touch
          </button>
        </a>
        <a
          href="/ALI Haider_CV.pdf" // ✅ Correct path (without /public)
          download
          className="flex-1"
        >
          <button className="w-full px-7 bg-orange-600 hover:bg-orange-700 rounded text-white font-medium transition">
            Download CV
          </button>
        </a>
      </div>

      {/* Animated Brand Names */}
      <div className="mt-16 flex flex-wrap justify-center items-center gap-10 px-4 w-full max-w-5xl">
        {[
          "Ankara",
          "phoeniX",
          "Swiss",
          "Bristol",
          "Leafe",
          "italic",
          "greenish",
        ].map((brand, i) => (
          <div
            key={brand}
            className="animate-spin-slow"
            style={{ animationDelay: `${i * 0.3}s` }}
          >
            <Image
              src={`/avatar/${brand.toLowerCase()}.webp`}
              alt={brand}
              width={100}
              height={40}
              className="animate"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
