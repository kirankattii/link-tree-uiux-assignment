"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { zoomIn } from "@/lib/animation";

export default function WhyDeserves() {
  return (
    <section className="relative bg-black pt-24 pb-0 overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 flex flex-col items-center">
        {/* Heading */}
        <div className="text-center font-orbitron">
          <h2 className="text-[28px] md:text-3xl  text-white tracking-wide leading-tight">
            Why Your Ride Deserves a
          </h2>
          <div className="mt-4 text-[42px] font-orbitron  md:text-4xl  text-red tracking-wider leading-none">
            Stop Here
          </div>
        </div>

        {/* Paragraph */}
        <p className="mt-10 max-w-[850px] text-center font-sans text-[14px]  md:text-[15px] leading-[1.5] text-white/90 font-light text-justify">
          At Car Decor, we believe your car deserves more than just accessories
          - it deserves a personality. Our services are designed to transform
          every journey into an experience, blending style, safety, and comfort
          seamlessly. With fast and secure shipping, getting your upgrades has
          never been easier. From cutting-edge upgrades to timeless
          enhancements, we handpick and install only the best, ensuring your
          ride feels as good as it looks. With a modern showroom that lets you
          imagine the possibilities and a team ready to guide you at every step,
          we make the process of upgrading your car simple, exciting, and truly
          your own.
        </p>

        {/* Wheels Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={zoomIn}
          className="relative w-full max-w-[1200px] aspect-[2.6/1] mt-8  select-none pointer-events-none"
        >
          <Image
            src="/wheel.png"
            alt="Wheels Showcase"
            fill
            priority
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
