"use client";

import Image from "next/image";
import { brands } from "@/constants/data";

export default function BrandMarquee() {
  // Double the logos within each track to ensure the width is greater than any standard screen size
  const displayBrands = [...brands, ...brands];

  return (
    <section className="relative overflow-hidden bg-[#141414] py-8 border-y border-white/5">
      <div className="flex w-full overflow-hidden">
        {/* Track 1 */}
        <div className="flex shrink-0 flex-row items-center gap-16 md:gap-24 px-8 md:px-12 animate-marquee hover:[animation-play-state:paused] cursor-pointer">
          {displayBrands.map((brand, idx) => (
            <div
              key={`${brand.name}-t1-${idx}`}
              className="relative flex shrink-0 items-center justify-center transition-all duration-300"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={brand.width}
                height={brand.height}
                className="h-8 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Track 2 - Identical duplicate for seamless looping */}
        <div
          className="flex shrink-0 flex-row items-center gap-16 md:gap-24 px-8 md:px-12 animate-marquee hover:[animation-play-state:paused] cursor-pointer"
          aria-hidden="true"
        >
          {displayBrands.map((brand, idx) => (
            <div
              key={`${brand.name}-t2-${idx}`}
              className="relative flex shrink-0 items-center justify-center transition-all duration-300"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={brand.width}
                height={brand.height}
                className="h-8 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
