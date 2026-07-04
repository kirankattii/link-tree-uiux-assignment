import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative md:min-h-screen overflow-hidden bg-black">
      {/* Lights */}
      <div className="absolute inset-x-0 top-[40%] md:-top-[150px] h-[80vw] md:h-[60vw]">
        <Image
          src="/lights.jpg"
          alt="Spot lights"
          fill
          priority
          className="object-cover object-top"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[80vh] md:min-h-screen -translate-y-12 flex-col gap-4 items-center pt-[55%] md:pt-0 md:justify-center text-center px-4 md:px-0">
        <h1 className="font-orbitron text-5xl md:text-7xl uppercase text-red">
          Attention
        </h1>

        <h2 className="text-xl md:text-3xl font-orbitron font-light text-white">
          Your car is due for a new look
        </h2>

        <p className="max-w-[560px] text-sm md:text-base font-light text-white">
          We've been doing this for three decades,
          <br />
          let us upgrade your ride!
        </p>
      </div>

      {/* Car */}
      <div className="pointer-events-none absolute bottom-5 md:bottom-0 md:bottom-[-40px] left-1/2 z-20 w-[400px] sm:w-[700px] md:w-[900px] -translate-x-1/2">
        <Image
          src="/black-car.png"
          alt="Car"
          width={900}
          height={500}
          priority
          className="h-auto w-full"
        />
      </div>

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
