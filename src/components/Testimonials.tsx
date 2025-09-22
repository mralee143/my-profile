"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Zonathon Doe",
    role: "Frontend Developer @X",
    image: "/avatar.1.jpg",
    text: "Ali helped us build an amazing website with blazing-fast performance. His React and Tailwind skills are top-notch.",
  },
  {
    id: 2,
    name: "Martin Smith",
    role: "CTO @Google",
    image: "/avatar.2.jpg",
    text: "One of the most efficient developers I’ve worked with. His attention to detail and UI work is impressive.",
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "UI/UX Designer @Dribbble",
    image: "/avatar.3.jpg",
    text: "He understands user interface deeply. The design implementation exceeded my expectations.",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Product Manager @Amazon",
    image: "/avatar.4.jpg",
    text: "Ali’s work helped improve our website load time and SEO. Truly professional and communicative.",
  },
  {
    id: 5,
    name: "Sophia Lee",
    role: "CEO @TechNova",
    image: "/avatar.5.webp",
    text: "He built a scalable and modern architecture for our product. Will definitely work again!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-6xl md:text-5xl font-bold mb-16">Testimonials</h2>

        {/* Row 1: 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {testimonials.slice(0, 3).map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>

        {/* Row 2: 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {testimonials.slice(3).map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, role, image, text }: any) {
  return (
    <div className="relative bg-neutral-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition duration-300 group">
      <Quote className="w-10 h-10 text-orange-500 absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition" />

      <p className="text-gray-300 text-base leading-relaxed mb-8 italic">
        “{text}”
      </p>

      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt={name}
          width={48}
          height={48}
          className="rounded-full object-cover border"
        />
        <div className="text-left">
          <h4 className="font-semibold text-white text-sm tracking-wide uppercase">
            {name}
          </h4>
          <p className="text-xs text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
}
