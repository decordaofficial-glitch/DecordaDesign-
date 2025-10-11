"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Info() {
  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold font-display text-gray-800">
                Let Us Decorate Your Memories
              </h2>
              <p className="text-lg font-semibold text-gray-600 mt-2">
                We Believe In Quality Over Quantity
              </p>
              <p className="mt-4 text-gray-600">
                At Decorda Design, we believe that every event is an
                opportunity to create magic and lasting memories. Our curated
                selection of event decorations is designed to transform any
                space into a captivating and visually stunning setting.
              </p>
              <p className="mt-4 text-gray-600">
                From enchanting weddings to lively birthday celebrations, our
                decorations are crafted with precision and creativity,
                ensuring that each detail contributes to the overall ambiance
                of your event. Whether you envision a romantic and timeless
                atmosphere or a modern and vibrant vibe, Decorda Design has
                the perfect pieces to bring your vision to life.
              </p>
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl group">
              <Image
                src="https://res.cloudinary.com/dh7m6g7f8/image/upload/v1759499674/WhatsApp_Image_2025-09-19_at_10.44.37_PM_1_t333j8.jpg"
                alt="Decorate Your Memories"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                data-ai-hint="event decoration"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl order-last md:order-first group">
              <Image
                src="https://res.cloudinary.com/dh7m6g7f8/image/upload/v1759499674/WhatsApp_Image_2025-09-19_at_10.44.37_PM_gtfntp.jpg"
                alt="Decorate Your Livings"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                data-ai-hint="modern living room"
              />
            </div>
            <div className="md:pl-8">
              <h2 className="text-4xl font-bold font-display text-gray-800">
                We Decor Your Livings
              </h2>
              <p className="text-lg font-semibold text-gray-600 mt-2">
                Transform Your Space with Timeless Elegance: Decorda Design
                Home Decor
              </p>
              <p className="mt-4 text-gray-600">
                Your home is a reflection of your style and personality, and
                at Decorda Design, we're here to help you curate a space that
                speaks to you. Our collection of home decorations is a
                celebration of sophistication and creativity, designed to
                elevate every corner of your living space.
              </p>
              <p className="mt-4 text-gray-600">
                Discover a range of chic and timeless pieces, from eye-catching
                wall art to stylish accent pieces that effortlessly enhance
                your home's aesthetic. Whether you prefer a modern, minimalist
                vibe or a classic, traditional feel, Decorda Design has the
                perfect decor to complement your taste.
              </p>
              <p className="mt-4 text-gray-600">
                Quality craftsmanship is our hallmark. Each home decoration is
                meticulously crafted using premium materials, ensuring
                durability and a touch of luxury. Our curated selection
                includes a variety of styles and themes, allowing you to
                infuse your unique personality into every room.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold font-display text-primary">
                Know More About Decorda
              </h2>
              <p className="mt-4 text-gray-600">
                Welcome to Decorda Design, your one-stop destination for all
                your event supplies and home decor needs! At Decorda, we blend
                creativity with quality to transform your special occasions
                and living spaces into unforgettable experiences. From elegant
                event supplies that set the perfect ambiance to stylish home
                decor pieces that reflect your unique taste, Decorda Design is
                your partner in turning dreams into reality. Discover a world
                of curated designs and impeccable craftsmanship—where every
                detail matters. Elevate your events and homes with Decorda
                Design, where style meets substance.
              </p>
              <Button className="mt-6 bg-black hover:bg-gray-700 transition-colors duration-300">
                Learn More
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden group">
              <Image
                src="https://res.cloudinary.com/dh7m6g7f8/image/upload/v1759494107/About_Us_dalgr6.jpg"
                alt="Decorda Logo"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                data-ai-hint="company logo abstract"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
