'use client';
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const heroSlides = [
  {
    title: "Event's Backdrops",
    subtitle: "Create unforgettable moments with our stunning event backdrops.",
    image:
      "https://res.cloudinary.com/dh7m6g7f8/image/upload/v1759499667/Event_Backdrops_u9ibuv.jpg",
    imageHint: "event backdrop",
  },
  {
    title: "Stunning Home Decor",
    subtitle: "Transform your living space with our elegant home decor pieces.",
    image:
      "https://res.cloudinary.com/dh7m6g7f8/image/upload/v1759499667/Home_Decor_ufifql.jpg",
    imageHint: "modern living room",
  },
  {
    title: "Party Supplies",
    subtitle: "Everything you need for your next celebration.",
    image:
      "https://res.cloudinary.com/dh7m6g7f8/image/upload/v1759499636/Party_Supplies_lwpdio.jpg",
    imageHint: "party supplies",
  },
  {
    title: "Fashion Supplies",
    subtitle: "Everything you need for your next celebration.",
    image:
      "https://res.cloudinary.com/dh7m6g7f8/image/upload/v1759499666/Decorda_Fasion_arqpuq.jpg",
    imageHint: "fashion supplies",
  },
];

export default function Hero() {
  const [heroApi, setHeroApi] = React.useState<CarouselApi | undefined>(
    undefined
  );
  const [heroCurrent, setHeroCurrent] = React.useState<number>(0);

  React.useEffect(() => {
    if (!heroApi) return;

    const setInitial = () => {
      try {
        if (typeof heroApi.selectedScrollSnap === "function") {
          setHeroCurrent(heroApi.selectedScrollSnap() ?? 0);
        } else {
          setHeroCurrent(0);
        }
      } catch {
        setHeroCurrent(0);
      }
    };

    const onSelect = () => {
      try {
        if (typeof heroApi.selectedScrollSnap === "function") {
          setHeroCurrent(heroApi.selectedScrollSnap());
        }
      } catch {
        // ignore
      }
    };

    setInitial();

    if (typeof heroApi.on === "function") heroApi.on("select", onSelect);

    return () => {
      if (typeof heroApi.off === "function") heroApi.off("select", onSelect);
    };
  }, [heroApi]);

  return (
    <section className='relative group'>
      <Carousel
        setApi={setHeroApi}
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className='w-full'
      >
        <CarouselContent>
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className='relative h-[600px] w-full overflow-hidden'>
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className='object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'
                  data-ai-hint={slide.imageHint}
                />
                <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center'>
                  <div className='text-center text-white overflow-hidden px-4'>
                    <h1
                      className={`text-5xl md:text-7xl font-bold font-display transition-all duration-700 ease-out ${
                        heroCurrent === index
                          ? 'opacity-100 translate-y-0 animate-slide-up'
                          : 'opacity-0 -translate-y-0 translate-y-16 pointer-events-none'
                      }`}
                    >
                      {slide.title}
                    </h1>
                    <p
                      className={`mt-4 text-lg transition-all duration-700 ease-out delay-200 ${
                        heroCurrent === index
                          ? 'opacity-100 translate-y-0 animate-slide-up'
                          : 'opacity-0 translate-y-16 pointer-events-none'
                      }`}
                    >
                      {slide.subtitle}
                    </p>
                    <div
                      className={`transition-all duration-700 ease-out delay-300 ${
                        heroCurrent === index
                          ? 'opacity-100 translate-y-0 animate-slide-up'
                          : 'opacity-0 translate-y-16 pointer-events-none'
                      }`}
                    >
                      <Button className='mt-8 bg-black hover:bg-gray-700 transition-colors duration-300'>
                        Shop Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='absolute left-4 top-1/2 -translate-y-1/2 text-white bg-transparent border-2 border-white hover:bg-white/20 hover:text-white transition-all duration-300' />
        <CarouselNext className='absolute right-4 top-1/2 -translate-y-1/2 text-white bg-transparent border-2 border-white hover:bg-white/20 hover:text-white transition-all duration-300' />
      </Carousel>
    </section>
  );
}
