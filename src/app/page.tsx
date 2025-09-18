
"use client";
import Image from "next/image";
import { Search, User, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';

export default function Home() {
  const products = [
    {
      name: "Birthday Event Backdrops",
      price: "1,199.00Rs",
      image: "https://picsum.photos/seed/product1/400/400",
      imageHint: "birthday backdrop"
    },
    {
      name: "Wedding Backdrop",
      price: "1,299.00Rs",
      image: "https://picsum.photos/seed/product2/400/400",
      imageHint: "wedding backdrop"
    },
    {
      name: "3D Wall Clocks",
      price: "799.00Rs",
      image: "https://picsum.photos/seed/product3/400/400",
      imageHint: "wall clock"
    },
    {
      name: "PVC Panaflex Wallpaper",
      price: "1,299.00Rs",
      image: "https://picsum.photos/seed/product4/400/400",
      imageHint: "pvc wallpaper"
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      <div className="bg-gray-800 text-white text-center py-2 text-sm">
        Free shipping for orders over Rs 999
      </div>

      <header className="border-b">
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
                <div className="flex items-center gap-8">
                    <Link href="/" className="text-2xl font-bold text-gray-900">DECORBA</Link>
                    <nav className="hidden md:flex items-center gap-6 text-sm">
                        <Link href="#" className="hover:text-primary">Home</Link>
                        <Link href="#" className="hover:text-primary">Event Backdrops</Link>
                        <Link href="#" className="hover:text-primary">Cards & Invitations</Link>
                        <Link href="#" className="hover:text-primary">Welcome Standee</Link>
                        <Link href="#" className="hover:text-primary">Home Decor</Link>
                        <Link href="#" className="hover:text-primary">Wall Poster</Link>
                        <Link href="#" className="hover:text-primary">Party Supplies</Link>
                        <Link href="#" className="hover:text-primary">Contact Us</Link>
                        <Link href="#" className="hover:text-primary">About Us</Link>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="outline" className="hidden md:inline-flex">Shop Now</Button>
                    <div className="flex items-center gap-4">
                      <Search className="h-5 w-5 text-gray-600 cursor-pointer hover:text-primary" />
                      <User className="h-5 w-5 text-gray-600 cursor-pointer hover:text-primary" />
                      <ShoppingCart className="h-5 w-5 text-gray-600 cursor-pointer hover:text-primary" />
                    </div>
                </div>
            </div>
        </div>
      </header>

      <main>
        <div className="relative h-[600px] w-full">
            <Image
                src="https://picsum.photos/seed/hero-backdrop/1920/600"
                alt="Events Backdrop"
                fill
                className="object-cover"
                data-ai-hint="event backdrop"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white">
                    <h1 className="text-5xl md:text-7xl font-bold">Event's Backdrops</h1>
                    <p className="mt-4 text-lg">Create unforgettable moments with our stunning event backdrops.</p>
                    <Button variant="secondary" className="mt-8 bg-white text-black hover:bg-gray-200">Shop Now</Button>
                </div>
            </div>
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                    <ChevronLeft className="h-8 w-8" />
                </Button>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                    <ChevronRight className="h-8 w-8" />
                </Button>
            </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-10">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {products.map((product) => (
                <Card key={product.name} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="relative h-64 w-full">
                       <Image src={product.image} alt={product.name} fill className="object-cover" data-ai-hint={product.imageHint} />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <p className="text-gray-600 mt-2">Starting From:</p>
                      <p className="text-xl font-bold text-primary mt-1">{product.price}</p>
                      <Button variant="outline" className="mt-6">Buy Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
