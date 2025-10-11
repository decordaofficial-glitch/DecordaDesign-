"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const products = [
    {
      name: "Birthday Event Backdrops",
      price: "1,199.00Rs",
      image: "https://picsum.photos/seed/product1/400/600",
      imageHint: "birthday backdrop",
    },
    {
      name: "Wedding Backdrop",
      price: "1,299.00Rs",
      image: "https://picsum.photos/seed/product2/400/600",
      imageHint: "wedding backdrop",
    },
    {
      name: "3D Wall Clocks",
      price: "799.00Rs",
      image: "https://picsum.photos/seed/product3/400/600",
      imageHint: "wall clock",
    },
    {
      name: "PVC Panaflex Wallpaper",
      price: "1,299.00Rs",
      image: "https://picsum.photos/seed/product4/400/600",
      imageHint: "pvc wallpaper",
    },
    {
      name: "Anniversary Decor",
      price: "1,499.00Rs",
      image: "https://picsum.photos/seed/product5/400/600",
      imageHint: "anniversary decoration",
    },
    {
      name: "Custom Neon Signs",
      price: "2,499.00Rs",
      image: "https://picsum.photos/seed/product6/400/600",
      imageHint: "neon sign",
    },
    {
      name: "Modern Art Prints",
      price: "899.00Rs",
      image: "https://picsum.photos/seed/product7/400/600",
      imageHint: "abstract art",
    },
    {
      name: "Party Balloon Arch",
      price: "1,799.00Rs",
      image: "https://picsum.photos/seed/product8/400/600",
      imageHint: "balloon arch",
    },
  ];

export default function FeaturedProducts() {
    return (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold font-display text-center mb-10 text-primary">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {products.slice(0, 4).map((product, index) => (
                <Card
                  key={index}
                  className="overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                >
                  <CardContent className="p-0">
                    <div className="relative h-96 w-full">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={product.imageHint}
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mt-2">Starting From:</p>
                      <p className="text-xl font-bold text-primary mt-1">
                        {product.price}
                      </p>
                      <Button className="mt-6 bg-black hover:bg-gray-700 transition-colors duration-300">
                        Buy Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <h2 className="text-4xl font-bold font-display text-center my-10 text-primary">
              Our Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {products.slice(4, 8).map((product, index) => (
                <Card
                  key={index}
                  className="overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                >
                  <CardContent className="p-0">
                    <div className="relative h-96 w-full">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={product.imageHint}
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mt-2">Starting From:</p>
                      <p className="text-xl font-bold text-primary mt-1">
                        {product.price}
                      </p>
                      <Button className="mt-6 bg-black hover:bg-gray-700 transition-colors duration-300">
                        Buy Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
    )
}