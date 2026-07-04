"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-center">
      <h1 className="font-orbitron text-5xl font-bold text-red md:text-7xl">
        Oops!
      </h1>
      <h2 className="mt-4 font-orbitron text-xl uppercase text-white md:text-3xl">
        Something went wrong
      </h2>
      <p className="mt-4 max-w-[500px] font-ptSans text-lg font-light text-white/80">
        An unexpected error has occurred. We apologize for the inconvenience.
      </p>
      <button
        onClick={() => reset()}
        className="mt-8 border border-red px-8 py-3 font-orbitron text-sm font-semibold uppercase tracking-wider text-red transition-all hover:bg-red hover:text-white"
      >
        Try Again
      </button>
    </div>
  );
}
