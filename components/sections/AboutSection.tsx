import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="bg-black py-28">
      <div className="mx-auto max-w-[1600px] pl-32">
        <div className="grid grid-cols-12 items-center">
          {/* Left Content */}
          <div className="col-span-12 lg:col-span-6">
            <h2 className="font-orbitron text-5xl  leading-none text-red">
              Love your ride?
            </h2>

            <h3 className="mt-2 font-orbitron text-3xl font-light leading-none text-white">
              You'll love us too.
            </h3>

            <div className="mt-8 max-w-[720px] space-y-6">
              <p className="text-lg leading-[1.4] font-light text-white">
                Not sure where to start your car’s upgrade journey? Spoiler:
                With us. Every time you upgrade your car with us, it’s more than
                just finding the best car accessories; it’s about creating a new
                look for your car. We work our magic to make sure we meet
                everything on your ride’s wishlist, from exterior styling to
                interior car accessories. We’re here to bridge the gap between
                customer aspirations and high-quality car accessories. Whether
                it’s ambient lighting to set the mood or performance parts to
                boost your drive, we have it all.
              </p>

              <p className="text-lg leading-[1.4] font-light text-white">
                By bringing the finest brands just a drive away in Bangalore,
                our expert team ensures you customise your car exactly the way
                you envision it. Since our establishment in 1992, we have never
                wavered from the goal of making car customization, car upgrades,
                and car styling easier for you. We take your ride as seriously
                as you do! Join us and let’s give it the transformation it’s
                been waiting for.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative col-span-12 flex justify-end lg:col-span-6">
            <div className="relative h-[560px] w-[900px]">
              <Image
                src="/love-ride.png"
                alt="Car Interior"
                fill
                priority
                className="object-cover object-right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
