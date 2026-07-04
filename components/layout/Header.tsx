"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  {
    title: "About Us",
    href: "#about",
  },
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "Blogs",
    href: "#blog",
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 px-5 md:px-16 lg:px-20">
        <div className="flex h-22 items-center justify-between">
          {/* Logo */}
          <Link
            href="#"
            className="flex items-center"
            onClick={closeMobileMenu}
          >
            <Image
              src="/logo.png"
              alt="Car Decor"
              width={180}
              height={70}
              priority
              className="h-auto w-auto -mb-5"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-md font-medium text-white transition-colors duration-300 hover:text-red-500"
              >
                {item.title}
              </Link>
            ))}

            <Link
              href="#contact"
              className="border border-white/20 bg-[#181818] px-8 py-2 text-md font-medium text-white transition-all duration-300 hover:border-red-500 hover:bg-red-600"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-red-500 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/80 md:hidden transition-opacity"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Top Menu */}
      <div
        className={`fixed top-0 left-0 z-50 w-full bg-[#0a0a0a] border-b border-white/10 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pb-8 ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex h-22 items-center justify-between px-5">
          <Link
            href="#"
            className="flex items-center"
            onClick={closeMobileMenu}
          >
            <Image
              src="/logo.png"
              alt="Car Decor"
              width={180}
              height={70}
              priority
              className="h-auto w-auto -mb-5"
            />
          </Link>
          <button
            className="text-white hover:text-red-500 focus:outline-none"
            onClick={closeMobileMenu}
            aria-label="Close Menu"
          >
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col px-8 gap-8 mt-4 items-center">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={closeMobileMenu}
              className="text-xl font-medium text-white transition-colors duration-300 hover:text-red-500"
            >
              {item.title}
            </Link>
          ))}

          <Link
            href="#contact"
            onClick={closeMobileMenu}
            className="mt-2 border border-white/20 bg-[#181818] px-10 py-3 text-lg font-medium text-white transition-all duration-300 hover:border-red-500 hover:bg-red-600"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
}
