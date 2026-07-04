import { Asterisk } from "lucide-react";
import { features } from "@/constants/data";

export default function FeaturesBar() {
  return (
    <section className="bg-[#1f1f1f]">
      <div className="mx-auto flex h-[80px] max-w-[1600px] items-center justify-center px-6">
        {features.map((feature, index) => (
          <div key={feature} className="flex items-center">
            <span className="font-pt text-[24px] font-semibold italic tracking-middle text-white">
              {feature}
            </span>

            {index !== features.length - 1 && (
              <Asterisk
                size={24}
                strokeWidth={2.5}
                className="mx-10 text-white font-extrabold"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
