"use client";
import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const logos = [
  {
    src: "https://res.cloudinary.com/dh7m6g7f8/image/upload/v1759769027/Our_Clients-01_jhjpje.png",
    alt: "Client 1",
    imageHint: "client 1 logo",
  },
  {
    src: "https://res.cloudinary.com/dh7m6g7f8/image/upload/v1759769027/Our_Clients-03_r3urkt.png",
    alt: "Client 2",
    imageHint: "client 2 logo",
  },
  {
    src: "https://res.cloudinary.com/dh7m6g7f8/image/upload/v1759769028/Our_Clients-02_bsizt3.png",
    alt: "Client 3",
    imageHint: "client 3 logo",
  },
  {
    src: "https://res.cloudinary.com/dh7m6g7f8/image/upload/v1759769028/Our_Clients-05_g2f8gu.png",
    alt: "Client 4",
    imageHint: "client 4 logo",
  },
  {
    src: "https://res.cloudinary.com/dh7m6g7f8/image/upload/v1759769028/Our_Clients-04_h1rnv5.png",
    alt: "Client 5",
    imageHint: "client 5 logo",
  },
  {
    src: "https://res.cloudinary.com/dh7m6g7f8/image/upload/v1759769028/Our_Clients-06_mcmz9e.png",
    alt: "Client 6",
    imageHint: "client 6 logo",
  },
];

export default function Clients() {
  const [clientApi, setClientApi] = React.useState<CarouselApi | undefined>(
    undefined
  );
  const [clientCurrent, setClientCurrent] = React.useState<number>(0);

  React.useEffect(() => {
    if (!clientApi) return;

    const setInitial = () => {
      try {
        if (typeof clientApi.selectedScrollSnap === "function") {
          setClientCurrent(clientApi.selectedScrollSnap() ?? 0);
        } else {
          setClientCurrent(0);
        }
      } catch {
        setClientCurrent(0);
      }
    };

    const onSelect = () => {
      try {
        if (typeof clientApi.selectedScrollSnap === "function") {
          setClientCurrent(clientApi.selectedScrollSnap());
        }
      } catch {
        // ignore
      }
    };

    setInitial();

    if (typeof clientApi.on === "function")
      clientApi.on("select", onSelect);

    return () => {
      if (typeof clientApi.off === "function")
        clientApi.off("select", onSelect);
    };
  }, [clientApi]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-display text-center mb-10 text-primary">
          Our Clients
        </h2>
        <Carousel
          setApi={setClientApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {Array.from({ length: Math.ceil(logos.length / 3) }).map((_, i) => (
              <CarouselItem key={i} className="basis-full">
                <div className="flex justify-center items-center space-x-8 p-4">
                  {logos.slice(i * 3, i * 3 + 3).map((logo, j) => (
                    <div key={j} className="flex-shrink-0">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={150}
                        height={50}
                        style={{ height: 'auto' }}
                        data-ai-hint={logo.imageHint}
                      />
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center items-center mt-8 space-x-2">
            <CarouselPrevious className="static -translate-y-0" />
            {Array.from({ length: Math.ceil(logos.length / 3) }).map((_, i) => (
              <button
                key={i}
                onClick={() => clientApi?.scrollTo(i)}
                className={`h-2 w-2 rounded-full ${
                  clientCurrent === i ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
            <CarouselNext className="static -translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
