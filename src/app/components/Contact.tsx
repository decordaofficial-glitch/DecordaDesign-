"use client";
import Image from "next/image";
import { MapPin, Facebook, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-display text-center mb-10 text-primary">
          Contact Us
        </h2>
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl mb-12 group">
          <Image
            src="https://picsum.photos/seed/contact-hero/1200/400"
            alt="Contact Us"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            data-ai-hint="office building"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-xl font-bold font-display text-primary">
              Gulistan e Johar Branch
            </h3>
            <p className="mt-4 text-muted-foreground">
              Office: 9th Floor Building, Neighborhood Section 20, Gulistan e
              Johar, Near Toyota Showroom
            </p>
            <p className="mt-2 text-muted-foreground">Karachi, Pakistan</p>
            <a
              href="#"
              className="text-primary mt-2 inline-flex items-center gap-1 hover:underline"
            >
              Get directions <MapPin className="h-4 w-4" />
            </a>

            <h3 className="text-xl font-bold font-display text-primary mt-8">
              Open hours
            </h3>
            <p className="mt-2 text-muted-foreground">Always Open</p>

            <h3 className="text-xl font-bold font-display text-primary mt-8">
              Contact Info
            </h3>
            <a
              href="tel:+923192483064"
              className="mt-2 text-muted-foreground block hover:text-primary transition-colors duration-300"
            >
              +92 319 2483064
            </a>
            <a
              href="mailto:decordaofficial@gmail.com"
              className="mt-1 text-muted-foreground block hover:text-primary transition-colors duration-300"
            >
              decordaofficial@gmail.com
            </a>

            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="text-primary hover:text-primary/80 transition-colors duration-300"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-primary hover:text-primary/80 transition-colors duration-300"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.434293937953!2d67.1147023150039!3d24.88313298404454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3395a60a74b7f%3A0x94b411d3326fc49e!2sGulistan-e-Johar%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1684484089941!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of Gulistan e Johar Branch"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
