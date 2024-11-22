import Image from "next/image";
import stripe from "@/assets/img.png";

export interface HeroProps {
  children?: React.ReactNode;
}

export function Hero({ children }: HeroProps) {
  return (
    <div className="relative p-[3ch] border-3 my-8">
      <Image src={stripe} className="object-cover -z-20" fill alt="" />
      <div className="bg-white/85 backdrop-blur-xs w-fit mx-auto px-2 py-0.5 ring-2 ring-black text-center">
        {children}
      </div>
    </div>
  );
}
