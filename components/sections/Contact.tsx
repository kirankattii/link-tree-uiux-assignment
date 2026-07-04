"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    requirement: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting form: ", formData);
    // Add form submission logic here if needed
  };

  return (
    <section
      id="contact"
      className="relative bg-black overflow-hidden border-t border-white/5"
    >
      <div className="mx-auto max-w-[1600px] flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side: Car Image */}
        <div className="relative w-full lg:w-1/2 h-[350px] sm:h-[450px] lg:h-[800px] overflow-hidden bg-black flex items-center justify-start">
          <Image
            src="/car2.png"
            alt="Tesla Model S Custom Build"
            fill
            priority
            className="object-cover object-left"
          />
          {/* Gradients to blend the top and right edges of the image into the black background */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-black pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black via-black/50 to-transparent pointer-events-none" />
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full lg:w-1/2 px-6 py-16 md:py-24 lg:pl-16 lg:pr-24 flex flex-col justify-center">
          {/* Heading */}
          <div className="font-orbitron mb-10">
            <h2 className="text-[26px]  md:text-3xl  text-white tracking-wide leading-tight">
              A better ride is just a
            </h2>
            <div className="mt-5 text-[36px]  md:text-4xl  text-red tracking-wider leading-none">
              call away!
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 max-w-[650px] w-full"
          >
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 bg-transparent border border-white/10 text-white placeholder-white/50 text-[14px] focus:outline-none focus:border-red transition-colors duration-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 bg-transparent border border-white/10 text-white placeholder-white/50 text-[14px] focus:outline-none focus:border-red transition-colors duration-300"
              />
            </div>

            {/* Row 2: Number and Requirements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="tel"
                name="number"
                placeholder="Number"
                value={formData.number}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 bg-transparent border border-white/10 text-white placeholder-white/50 text-[14px] focus:outline-none focus:border-red transition-colors duration-300"
              />
              <div className="relative w-full">
                <select
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  required
                  className="w-full h-12 px-4 bg-black border border-white/10 text-white placeholder-white/50 text-[14px] focus:outline-none focus:border-red transition-colors duration-300 appearance-none cursor-pointer pr-10"
                >
                  <option value="" disabled>
                    Requirements
                  </option>
                  <option value="interior">Interior Accessories</option>
                  <option value="exterior">Exterior Styling</option>
                  <option value="electronics">Electronics & Gadgets</option>
                  <option value="performance">Performance Parts</option>
                </select>
                <ChevronDown
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none"
                  size={16}
                />
              </div>
            </div>

            {/* Row 3: Message */}
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={3}
              className="w-full h-16 px-4 py-3 bg-transparent border border-white/10 text-white placeholder-white/50 text-[14px] focus:outline-none focus:border-red transition-colors duration-300 resize-none"
            />

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="bg-[#3a3a3c] hover:bg-red hover:shadow-[0_0_15px_rgba(219,2,4,0.3)] text-white text-[14px] font-medium py-3 px-5 transition-all duration-300 cursor-pointer"
              >
                Get a Consultation
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
