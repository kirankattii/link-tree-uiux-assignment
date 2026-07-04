import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-center">
      <h1 className="font-orbitron text-7xl font-bold text-red md:text-9xl">
        404
      </h1>
      <h2 className="mt-4 font-orbitron text-2xl uppercase text-white md:text-4xl">
        Page Not Found
      </h2>
      <p className="mt-4 max-w-[500px] font-ptSans text-lg font-light text-white/80">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 border border-red px-8 py-3 font-orbitron text-sm font-semibold uppercase tracking-wider text-red transition-all hover:bg-red hover:text-white"
      >
        Return Home
      </Link>
    </div>
  );
}
