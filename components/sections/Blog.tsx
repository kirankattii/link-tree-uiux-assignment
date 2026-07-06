"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { blogs } from "@/constants/data";
import { staggerContainer, fadeInUp } from "@/lib/animation";

export default function Blog() {
  return (
    <section id="blog" className="relative bg-black py-24 overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-[1600px] px-6 md:px-24">
        {/* Heading */}
        <div className="text-center font-orbitron mb-10">
          <h2 className="text-[28px] md:text-4xl  text-white tracking-wide uppercase">
            Blogs
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-[1300px] mx-auto w-full"
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              variants={fadeInUp}
              className="flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-[#121212]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Title */}
              <h3 className="mt-6 font-orbitron text-[16px] md:text-[18px] font-medium text-white leading-[1.4] transition-colors duration-300 group-hover:text-red">
                {blog.title}
              </h3>

              {/* Button */}
              <div className="mt-6">
                <button className="bg-[#3a3a3c] hover:bg-red hover:shadow-[0_0_15px_rgba(219,2,4,0.3)] text-white text-[14px] font-medium py-2.5 px-6 transition-all duration-300 cursor-pointer">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

