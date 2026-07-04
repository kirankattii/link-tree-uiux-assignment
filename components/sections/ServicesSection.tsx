"use client";

import { useState } from "react";
import Image from "next/image";
import { services } from "@/constants/data";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  image: string;
  active?: boolean;
  description?: string;
  onClick: () => void;
  onMouseEnter: () => void;
}

function ServiceCard({
  title,
  subtitle,
  image,
  active = false,
  description,
  onClick,
  onMouseEnter,
}: ServiceCardProps) {
  return (
    <div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className="group relative cursor-pointer overflow-hidden bg-[#181818] transition-all duration-500 ease-in-out w-full"
    >
      {/* Header */}
      <div className="py-4 bg-[#181818] px-6 flex flex-col justify-center">
        <h3
          className={`font-sans text-[18px] font-bold transition-colors duration-300 ${
            active ? "text-red" : "text-white"
          }`}
        >
          {title}
        </h3>

        <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
          {subtitle}
        </p>
      </div>

      {/* Image Container */}
      <div className="relative h-[240px] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover transition-transform duration-700 ease-out ${
            active ? "scale-105" : "scale-100 group-hover:scale-[1.03]"
          }`}
        />
        {/* Subtle dark overlay that fades when active */}
        <div
          className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${
            active ? "opacity-0" : "opacity-20 group-hover:opacity-10"
          }`}
        />
      </div>

      {/* Active Content Panel */}
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          active
            ? "grid-rows-[1fr] opacity-100 px-6 pt-6 pb-6"
            : "grid-rows-[0fr] opacity-0 px-6 py-0 pointer-events-none"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-[14px] leading-relaxed text-gray-300 font-light">
            {description}
          </p>

          <button className="cursor-pointer hover:bg-red mt-4 bg-[#3a3a3c] hover:bg-[#4a4a4c] text-white text-[14px] font-medium py-2.5 px-6 transition-colors duration-300">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(1); // Default to second card (Exterior Styling)

  return (
    <section
      id="services"
      className="min-h-screen relative overflow-hidden bg-black py-28 pt-5 border-t border-white/5"
    >
      {/* Subtle radial background glow */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        {/* Heading */}
        <div className="mb-15 flex justify-center text-center">
          <h2 className="max-w-[900px] font-orbitron text-[32px]  md:text-3xl leading-[1.3] text-white  tracking-wide">
            We know your car deserves
            <br />
            the best, so we've got you covered!
          </h2>
        </div>

        {/* Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-[1300px] mx-auto w-full items-start">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              subtitle={service.subtitle}
              image={service.image}
              active={activeIndex === index}
              description={service.description}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
