"use client";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex flex-col -space-y-2 leading-none">
              <Image
                src="https://res.cloudinary.com/dh7m6g7f8/image/upload/v1759494205/Decorda_Header_Logo_x7kfez.png"
                alt="Decorda Logo"
                width={150}
                height={50}
              />
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Elevate your events and homes with Decorda Design, where style
              meets substance.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white">Quick Links</h3>
            <nav className="mt-4 flex flex-col gap-2 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white hover:underline">
                Home
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white hover:underline">
                Event Backdrops
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white hover:underline">
                Home Decor
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white hover:underline">
                Contact Us
              </Link>
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
          <p className="mt-4 md:mt-0 text-gray-500">
            &copy; {new Date().getFullYear()} Decorda Design. Powered by Lightpost.
          </p>
        </div>
      </div>
    </footer>
  );
}
