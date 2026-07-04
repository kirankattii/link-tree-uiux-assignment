import Image from "next/image";
import Link from "next/link";

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
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-10 md:px-16 lg:px-20">
      <div className="flex h-22 items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Car Decor"
            width={180}
            height={70}
            priority
            className="h-auto w-auto -mb-5"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-10">
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
      </div>
    </header>
  );
}
