"use client";

import { Asterisk } from "lucide-react";
import { features } from "@/constants/data";
import { motion } from "framer-motion";

export default function FeaturesBar() {
  return (
    <section className="bg-[#1f1f1f] overflow-hidden">
      {/* Desktop View */}
      <div className="mx-auto hidden h-[80px] max-w-[1600px] items-center justify-center px-6 lg:flex">
        {features.map((feature, index) => (
          <div key={feature} className="flex items-center">
            <span className="font-pt text-[24px] font-semibold italic tracking-middle text-white whitespace-nowrap">
              {feature}
            </span>

            {index !== features.length - 1 && (
              <Asterisk
                size={24}
                strokeWidth={2.5}
                className="mx-10 text-white font-extrabold shrink-0"
              />
            )}
          </div>
        ))}
      </div>

      {/* Mobile & Tab View */}
      <div className="flex h-[80px] items-center lg:hidden">
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 15,
            ease: "linear",
          }}
        >
          {[...features, ...features].map((feature, index) => (
            <div key={`${feature}-${index}`} className="flex items-center">
              <span className="font-pt text-[24px] font-semibold italic tracking-middle text-white whitespace-nowrap">
                {feature}
              </span>

              <Asterisk
                size={24}
                strokeWidth={2.5}
                className="mx-10 text-white font-extrabold shrink-0"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
