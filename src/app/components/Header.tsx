'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const navLinkClasses =
    'relative text-gray-600 after:absolute after:left-1/2 after:right-1/2 after:bottom-0 after:h-[1.5px] after:bg-primary after:transition-all after:duration-300 hover:text-primary hover:after:left-0 hover:after:right-0';

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex flex-col -space-y-2 leading-none">
              <Image
                src="https://res.cloudinary.com/dh7m6g7f8/image/upload/v1759494205/Decorda_Header_Logo_x7kfez.png"
                alt="Decorda Logo"
                width={150}
                height={50}
                style={{ height: 'auto' }}
              />
            </Link>
          </div>
          <nav className="hidden md:flex items-center justify-center flex-1 gap-8 text-sm">
            <Link href="#" className={navLinkClasses}>
              Home
            </Link>
            <Link href="#" className={navLinkClasses}>
              Shop
            </Link>
            <Link href="#" className={navLinkClasses}>
              Services
            </Link>
            <Link href="#" className={navLinkClasses}>
              Portfolio
            </Link>
            <Link href="#" className={navLinkClasses}>
              Contact Us
            </Link>
            <Link href="#" className={navLinkClasses}>
              About Us
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="black"
              className="hidden md:inline-flex transition-colors duration-300"
            >
              Shop Now
            </Button>
            <div className="flex items-center gap-4">
              <Search className="h-5 w-5 text-gray-600 cursor-pointer hover:text-primary transition-colors duration-300" />
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5 text-gray-600 cursor-pointer hover:text-primary transition-colors duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
