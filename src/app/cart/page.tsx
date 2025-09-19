"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2 } from "lucide-react";

export default function CartPage() {
  // Placeholder data
  const cartItems = [
    {
      id: 1,
      name: "Birthday Event Backdrop",
      price: 1199.0,
      quantity: 1,
      image: "https://picsum.photos/seed/product1/150/150",
      imageHint: "birthday backdrop"
    },
    {
      id: 2,
      name: "3D Wall Clock",
      price: 799.0,
      quantity: 2,
      image: "https://picsum.photos/seed/product3/150/150",
      imageHint: "wall clock"
    },
  ];

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 49.0;
  const total = subtotal + shipping;

  return (
    <div className="bg-white text-gray-800">
       <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-6">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex flex-col -space-y-2 leading-none">
                      <div className="text-3xl font-bold font-display">
                        <span className="text-gray-900">DECOR</span><span className="text-red-600">DA</span>
                      </div>
                      <span className="text-sm tracking-[0.18em] text-gray-700">DESIGN</span>
                    </Link>
                </div>
            </div>
        </div>
      </header>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold font-display text-center mb-10 text-primary">Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-6 bg-gray-50 p-4 rounded-lg shadow-sm">
                <div className="relative w-28 h-28 rounded-md overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    data-ai-hint={item.imageHint}
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold font-display">{item.name}</h2>
                  <p className="text-primary font-bold mt-1">
                    {item.price.toFixed(2)}Rs
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    value={item.quantity}
                    className="w-16 h-8 text-center"
                    readOnly
                  />
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <p className="font-bold w-24 text-right">
                  {(item.price * item.quantity).toFixed(2)}Rs
                </p>
                <Button variant="ghost" size="icon" className="text-gray-500 hover:text-red-600">
                  <Trash2 className="h-5 w-5" />
                </Button>
              </div>
            ))}
             <div className="text-center mt-8">
              <Link href="/" className="text-primary hover:underline font-semibold">
                &larr; Continue Shopping
              </Link>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-md h-fit">
            <h2 className="text-2xl font-bold font-display text-primary mb-6">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold">{subtotal.toFixed(2)}Rs</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-semibold">{shipping.toFixed(2)}Rs</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>{total.toFixed(2)}Rs</span>
              </div>
            </div>
            <Button className="w-full mt-8 bg-black text-white hover:bg-gray-800">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
       <footer className="bg-black text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <Link href="/" className="flex flex-col -space-y-2 leading-none">
                <div className="text-3xl font-bold font-display">
                  <span className="text-white">DECOR</span><span className="text-red-600">DA</span>
                </div>
                <span className="text-sm tracking-[0.18em] text-gray-400">DESIGN</span>
              </Link>
              <p className="mt-4 text-gray-400 text-sm">Elevate your events and homes with Decorda Design, where style meets substance.</p>
              <div className="flex gap-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-white"><Facebook className="h-6 w-6" /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Instagram className="h-6 w-6" /></a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-white">Quick Links</h3>
              <nav className="mt-4 flex flex-col gap-2 text-sm">
                <Link href="/" className="text-gray-400 hover:text-white hover:underline">Home</Link>
                <Link href="#" className="text-gray-400 hover:text-white hover:underline">Event Backdrops</Link>
                <Link href="#" className="text-gray-400 hover:text-white hover:underline">Home Decor</Link>
                <Link href="#" className="text-gray-400 hover:text-white hover:underline">Contact Us</Link>
              </nav>
            </div>
            <div>
              <h3 className="font-semibold text-white">Customer Service</h3>
              <nav className="mt-4 flex flex-col gap-2 text-sm">
                <Link href="#" className="text-gray-400 hover:text-white hover:underline">FAQ</Link>
                <Link href="#" className="text-gray-400 hover:text-white hover:underline">Shipping & Returns</Link>
                <Link href="#" className="text-gray-400 hover:text-white hover:underline">Privacy Policy</Link>
                <Link href="#" className="text-gray-400 hover:text-white hover:underline">Terms of Service</Link>
              </nav>
            </div>
            <div>
              <h3 className="font-semibold text-white">Contact</h3>
              <div className="mt-4 text-sm text-gray-400 space-y-2">
                <p>+92 319 2483064</p>
                <p>decordaofficial@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex gap-4">
              <Link href="#" className="text-gray-500 hover:text-white hover:underline">Cookie settings</Link>
              <Link href="#" className="text-gray-500 hover:text-white hover:underline">Report abuse</Link>
            </div>
            <p className="mt-4 md:mt-0 text-gray-500">&copy; {new Date().getFullYear()} Decorda Design. Powered by Lightpost.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
