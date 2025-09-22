"use client";

import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "We craft modern, scalable, and SEO-optimized websites using React and Next.js, tailored to deliver high performance and engaging user experiences.",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "Our design approach focuses on intuitive, accessible, and visually appealing interfaces that enhance user engagement and drive business goals.",
  },
  {
    number: "03",
    title: "Mobile Design",
    description:
      "We design responsive, mobile-first interfaces that are optimized for speed, accessibility, and seamless performance across all screen sizes.",
  },
  {
    number: "04",
    title: "E-commerce Solutions",
    description:
      "We develop scalable online stores with seamless checkout, inventory management, and third-party integrations tailored for conversions.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-black py-24 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Services
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            I help brands grow with modern web solutions and stunning design.
          </p>
        </div>

        {/* Custom Grid Layout */}
        <div className="grid gap-10">
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Large Service 1 */}
            <ServiceCard
              service={services[0]}
              className="h-[400px] bg-[#111] max-w-full"
            />
            {/* Smaller Service 2 */}
            <ServiceCard
              service={services[1]}
              className="h-[300px] bg-[#111] max-w-full"
            />
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-3 gap-10">
            {/* Rectangular Service 3 - spans two cols */}
            <div className="md:col-span-2">
              <ServiceCard
                service={services[2]}
                className="h-[350px] bg-[#111]"
              />
            </div>
            {/* Square Service 4 */}
            <ServiceCard
              service={services[3]}
              className="aspect-square h-full bg-[#111]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable Card Component
function ServiceCard({
  service,
  className,
}: {
  service: any;
  className?: string;
}) {
  return (
    <div
      className={`relative text-white p-6 pt-20 pb-10 border border-[#222] rounded-2xl group transition-all duration-300 hover:border-orange-500 hover:shadow-lg ${className}`}
    >
      {/* Service Number Tag */}
      <div className="absolute top-4 left-4 bg-orange-600 text-black text-sm font-bold px-3 py-1 rounded">
        {service.number}
      </div>

      {/* Top Right Arrow */}
      <ArrowUpRight
        className="absolute top-4 right-4 text-gray-400 group-hover:text-orange-500 group-hover:rotate-45 transition-all duration-300"
        size={20}
      />

      {/* Title and Description */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-3 leading-snug">
          {service.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        <button className="inline-flex items-center gap-1 text-sm text-orange-500 group-hover:underline">
          Learn More
          <ArrowUpRight size={16} />
        </button>
      </div>
    </div>
  );
}
