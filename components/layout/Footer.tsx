"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#121212] py-4 pt-0 border-t border-white/5 -pb-4">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 flex flex-col items-center justify-center gap-2 text-center">
        {/* Logo */}
        <Link href="#" className="inline-block ">
          <Image
            src="/logo.png"
            alt="Car Decor Logo"
            width={140}
            height={0}
            priority
            className=" w-auto "
          />
        </Link>

        {/* Copyright Text */}
        <p className="-mt-10 text-[12px] md:text-xs text-white/60 font-sans tracking-wide">
          Copyright &copy; {new Date().getFullYear()} Car Decor | All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
}
