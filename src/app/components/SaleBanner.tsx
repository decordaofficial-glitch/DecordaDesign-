"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function SaleBanner() {
  return (
    <section className="relative h-[400px] w-full my-16 group">
      <Image
        src="https://picsum.photos/seed/sale-banner/1920/400"
        alt="Sale banner"
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
        data-ai-hint="modern living room"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-5xl md:text-6xl font-bold font-display">
            Sale up to 20% Off
          </h2>
          <p className="mt-4 text-lg">
            Find the perfect match for your event decor in a reasonable price
          </p>
          <Button className="mt-8 bg-black hover:bg-gray-700 transition-colors duration-300">
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  );
}
