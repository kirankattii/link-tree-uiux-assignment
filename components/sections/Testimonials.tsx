"use client";

import { useState } from "react";
import Image from "next/image";
import { testimonials } from "@/constants/data";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1); // Default to Karthik Sudarshan (index 1)

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const getCardTransform = (index: number) => {
    let offset = index - activeIndex;

    // Handle wrap around for circular scrolling
    if (offset < -1) offset += testimonials.length;
    if (offset > 1) offset -= testimonials.length;

    if (offset === 0) {
      return {
        transform: "translateX(0) scale(1)",
        opacity: 1,
        filter: "blur(0)",
        zIndex: 30,
      };
    } else if (offset === -1) {
      return {
        transform: "translateX(var(--translate-left, -96%)) scale(0.9)",
        opacity: 0.25,
        filter: "blur(4px)",
        zIndex: 20,
        pointerEvents: "none" as const,
      };
    } else if (offset === 1) {
      return {
        transform: "translateX(var(--translate-right, 96%)) scale(0.9)",
        opacity: 0.25,
        filter: "blur(4px)",
        zIndex: 20,
        pointerEvents: "none" as const,
      };
    } else {
      return {
        transform: "translateX(0) scale(0.8)",
        opacity: 0,
        filter: "blur(8px)",
        zIndex: 10,
        pointerEvents: "none" as const,
      };
    }
  };

  return (
    <section className="relative bg-black py-4 overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 flex flex-col items-center">
        {/* Heading */}
        <div className="text-center font-orbitron mb-6">
          <h2 className="text-[28px] md:text-3xl  text-white tracking-wide leading-tight">
            Trust our customers,
          </h2>
          <div className="mt-4 text-[38px] md:text-4xl  text-red tracking-wider leading-none">
            not just us
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full h-[400px] md:h-[350px] flex items-center justify-center overflow-visible [--translate-left:-96%] [--translate-right:96%] md:[--translate-left:-103%] md:[--translate-right:103%]">
          {testimonials.map((testimonial, index) => {
            const style = getCardTransform(index);
            const isActive = index === activeIndex;

            return (
              <div
                key={testimonial.id}
                style={style}
                className="absolute w-[90%] md:w-[640px] bg-[#181818] rounded-2xl p-6 md:p-8 transition-all duration-500 ease-in-out border border-white/5 flex flex-col justify-between"
              >
                {/* Quote Symbol (Only visible or prominent on active card) */}
                {isActive && (
                  <div className="absolute -top-3 -left-3 md:-top-6 md:-left-6 w-8 h-8 md:w-12 md:h-12 select-none z-10">
                    <Image
                      src="/colon.png"
                      alt="Quote"
                      width={89}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}

                {/* Review Text */}
                <p className="text-[14px] md:text-[15px] leading-relaxed text-gray-300 font-light z-0">
                  {testimonial.text}
                </p>

                {/* Author Name */}
                <div className="mt-6 md:mt-8 text-right">
                  <span className="font-orbitron text-[15px] md:text-[17px] font-bold text-white tracking-wider">
                    -{testimonial.author}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-6 ">
          <button
            onClick={handlePrev}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#181818] border border-white/5 flex items-center justify-center text-white hover:bg-red hover:border-red transition-all duration-300 shadow-md cursor-pointer hover:scale-105 active:scale-95"
            aria-label="Previous testimonial"
          >
            <Image
              src="/left-arrow.png"
              alt="Previous"
              width={20}
              height={20}
              className="w-5 h-5 md:w-6 md:h-6 object-contain"
            />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#181818] border border-white/5 flex items-center justify-center text-white hover:bg-red hover:border-red transition-all duration-300 shadow-md cursor-pointer hover:scale-105 active:scale-95"
            aria-label="Next testimonial"
          >
            <Image
              src="/right-arrow.png"
              alt="Next"
              width={20}
              height={20}
              className="w-5 h-5 md:w-6 md:h-6 object-contain"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
