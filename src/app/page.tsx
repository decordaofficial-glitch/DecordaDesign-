"use client";
import Image from "next/image";
import { Search, ShoppingCart, ShieldCheck, CircleDollarSign, Truck, Undo2, MapPin, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

export default function Home() {
  const products = [
    {
      name: "Birthday Event Backdrops",
      price: "1,199.00Rs",
      image: "https://picsum.photos/seed/product1/400/600",
      imageHint: "birthday backdrop"
    },
    {
      name: "Wedding Backdrop",
      price: "1,299.00Rs",
      image: "https://picsum.photos/seed/product2/400/600",
      imageHint: "wedding backdrop"
    },
    {
      name: "3D Wall Clocks",
      price: "799.00Rs",
      image: "https://picsum.photos/seed/product3/400/600",
      imageHint: "wall clock"
    },
    {
      name: "PVC Panaflex Wallpaper",
      price: "1,299.00Rs",
      image: "https://picsum.photos/seed/product4/400/600",
      imageHint: "pvc wallpaper"
    },
    {
      name: "Anniversary Decor",
      price: "1,499.00Rs",
      image: "https://picsum.photos/seed/product5/400/600",
      imageHint: "anniversary decoration"
    },
    {
      name: "Custom Neon Signs",
      price: "2,499.00Rs",
      image: "https://picsum.photos/seed/product6/400/600",
      imageHint: "neon sign"
    },
    {
      name: "Modern Art Prints",
      price: "899.00Rs",
      image: "https://picsum.photos/seed/product7/400/600",
      imageHint: "abstract art"
    },
    {
      name: "Party Balloon Arch",
      price: "1,799.00Rs",
      image: "https://picsum.photos/seed/product8/400/600",
      imageHint: "balloon arch"
    },
  ];

  const testimonials = [
    {
      name: "Fareeha Ismail",
      rating: 5,
      title: "Fantastic Birthday Backdrop! ★★★★★",
      text: "Ordered the Frozen Elsa Birthday Backdrop for my daughter's party, and it was a game-changer! Easy setup, vibrant colors, and made for stunning photos. Highly recommended for an instant party.",
      image: "https://picsum.photos/seed/testimonial-fareeha/300/400",
      imageHint: "woman portrait"
    },
    {
      name: "********667",
      rating: 5,
      title: "Thankyouuu Soo much ❤️❤️",
      text: "Bht bht acha bnaya apne 😍😍 I love it ❤️",
      image: "https://picsum.photos/seed/testimonial1/300/400",
      imageHint: "party decoration"
    },
    {
      name: "Kashif Ahmar",
      rating: 5,
      title: "Beautiful wedding backdrop! ★★★★★",
      text: "It added a touch of elegance to our special day, and the quality exceeded our expectations. Highly recommend for anyone looking to enhance their wedding decor!",
      image: "https://picsum.photos/seed/testimonial2/300/400",
      imageHint: "man portrait"
    },
    {
      name: "********",
      rating: 5,
      title: "Exceptional home decor products! ★★★★★",
      text: "The attention to detail and quality are unmatched. Our space has been transformed, thanks to these stylish and well-crafted pieces. Highly satisfied with the purchase!",
      image: "https://picsum.photos/seed/testimonial3/300/400",
      imageHint: "woman selfie"
    }
  ]

  const benefits = [
    {
      icon: <CircleDollarSign className="h-6 w-6 text-primary" />,
      title: "Money Back Guarantee",
      content: "We offer a money back guarantee if you are not satisfied with our products."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: "Pay On Delivery",
      content: "Pay for your order when it is delivered to your doorstep."
    },
    {
      icon: <Truck className="h-6 w-6 text-primary" />,
      title: "Express Delivery",
      content: "Get your order delivered to you in the fastest time possible."
    },
    {
      icon: <Undo2 className="h-6 w-6 text-primary" />,
      title: "Easy Return Process",
      content: "We have a simple and easy return process for your convenience."
    },
  ]

  const heroSlides = [
    {
      title: "Event's Backdrops",
      subtitle: "Create unforgettable moments with our stunning event backdrops.",
      image: "https://picsum.photos/seed/hero-backdrop/1920/600",
      imageHint: "event backdrop"
    },
    {
      title: "Stunning Home Decor",
      subtitle: "Transform your living space with our elegant home decor pieces.",
      image: "https://picsum.photos/seed/hero-decor/1920/600",
      imageHint: "modern living room"
    }
  ]
  
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
 
  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCurrent(api.scrollSnapList().length)
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
 
  }, [api])
  
  const navLinkClasses = "relative text-gray-600 after:absolute after:left-1/2 after:right-1/2 after:bottom-0 after:h-[1.5px] after:bg-primary after:transition-all after:duration-300 hover:text-primary hover:after:left-0 hover:after:right-0";

  return (
    <div className="bg-[#F8F8F8] text-gray-800">
      <div className="bg-gray-800 text-white text-center py-4 text-sm font-medium">
        Free shipping for orders over Rs 999
      </div>

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
                <nav className="hidden md:flex items-center justify-center flex-1 gap-8 text-sm">
                    <Link href="#" className={navLinkClasses}>Home</Link>
                    <Link href="#" className={navLinkClasses}>Event Backdrops</Link>
                    <Link href="#" className={navLinkClasses}>Cards & Invitations</Link>
                    <Link href="#" className={navLinkClasses}>Welcome Standee</Link>
                    <Link href="#" className={navLinkClasses}>Home Decor</Link>
                    <Link href="#" className={navLinkClasses}>Wall Poster</Link>
                    <Link href="#" className={navLinkClasses}>Party Supplies</Link>
                    <Link href="#" className={navLinkClasses}>Contact Us</Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Button variant="outline" className="hidden md:inline-flex bg-black text-white hover:bg-gray-700 border-black">Shop Now</Button>
                    <div className="flex items-center gap-4">
                      <Search className="h-5 w-5 text-gray-600 cursor-pointer hover:text-primary" />
                      <Link href="/cart">
                        <ShoppingCart className="h-5 w-5 text-gray-600 cursor-pointer hover:text-primary" />
                      </Link>
                    </div>
                </div>
            </div>
        </div>
      </header>

      <main>
        <section className="relative">
          <Carousel
            setApi={setApi}
            opts={{ loop: true }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {heroSlides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[600px] w-full">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      data-ai-hint={slide.imageHint}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <div className="text-center text-white overflow-hidden">
                          <h1
                            style={{
                              transform: current === index ? 'translateY(0)' : 'translateY(4rem)',
                              opacity: current === index ? 1 : 0,
                            }}
                            className="text-5xl md:text-7xl font-bold font-display transition-all duration-700 ease-out"
                          >
                            {slide.title}
                          </h1>
                          <p
                            style={{
                              transform: current === index ? 'translateY(0)' : 'translateY(4rem)',
                              opacity: current === index ? 1 : 0,
                            }}
                            className="mt-4 text-lg transition-all duration-700 ease-out delay-200"
                          >
                            {slide.subtitle}
                          </p>
                          <div
                            style={{
                              transform: current === index ? 'translateY(0)' : 'translateY(4rem)',
                              opacity: current === index ? 1 : 0,
                            }}
                            className="transition-all duration-700 ease-out delay-300"
                          >
                            <Button className="mt-8 bg-black hover:bg-gray-700">Shop Now</Button>
                          </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-transparent border-2 border-white hover:bg-white/20 hover:text-white" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-transparent border-2 border-white hover:bg-white/20 hover:text-white" />
          </Carousel>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold font-display text-center mb-10 text-primary">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                  <CardContent className="p-0">
                    <div className="relative h-96 w-full">
                       <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={product.imageHint} />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                      <p className="text-gray-600 mt-2">Starting From:</p>
                      <p className="text-xl font-bold text-primary mt-1">{product.price}</p>
                      <Button className="mt-6 bg-black hover:bg-gray-700">Buy Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold font-display text-gray-800">Let Us Decorate Your Memories</h2>
                        <p className="text-lg font-semibold text-gray-600 mt-2">We Believe In Quality Over Quantity</p>
                        <p className="mt-4 text-gray-600">At Decorda Design, we believe that every event is an opportunity to create magic and lasting memories. Our curated selection of event decorations is designed to transform any space into a captivating and visually stunning setting.</p>
                        <p className="mt-4 text-gray-600">From enchanting weddings to lively birthday celebrations, our decorations are crafted with precision and creativity, ensuring that each detail contributes to the overall ambiance of your event. Whether you envision a romantic and timeless atmosphere or a modern and vibrant vibe, Decorda Design has the perfect pieces to bring your vision to life.</p>
                    </div>
                    <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
                        <Image src="https://picsum.photos/seed/memories/600/700" alt="Decorate Your Memories" fill className="object-cover" data-ai-hint="event decoration" />
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl order-last md:order-first">
                        <Image src="https://picsum.photos/seed/livings/800/600" alt="Decorate Your Livings" fill className="object-cover" data-ai-hint="modern living room" />
                    </div>
                    <div className="md:pl-8">
                        <h2 className="text-4xl font-bold font-display text-gray-800">We Decor Your Livings</h2>
                        <p className="text-lg font-semibold text-gray-600 mt-2">Transform Your Space with Timeless Elegance: Decorda Design Home Decor</p>
                        <p className="mt-4 text-gray-600">Your home is a reflection of your style and personality, and at Decorda Design, we're here to help you curate a space that speaks to you. Our collection of home decorations is a celebration of sophistication and creativity, designed to elevate every corner of your living space.</p>
                        <p className="mt-4 text-gray-600">Discover a range of chic and timeless pieces, from eye-catching wall art to stylish accent pieces that effortlessly enhance your home's aesthetic. Whether you prefer a modern, minimalist vibe or a classic, traditional feel, Decorda Design has the perfect decor to complement your taste.</p>
                        <p className="mt-4 text-gray-600">Quality craftsmanship is our hallmark. Each home decoration is meticulously crafted using premium materials, a-ai-hint="company logo abstract" ensuring durability and a touch of luxury. Our curated selection includes a variety of styles and themes, allowing you to infuse your unique personality into every room.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold font-display text-primary">Know More About Decorda</h2>
                        <p className="mt-4 text-gray-600">Welcome to Decorda Design, your one-stop destination for all your event supplies and home decor needs! At Decorda, we blend creativity with quality to transform your special occasions and living spaces into unforgettable experiences. From elegant event supplies that set the perfect ambiance to stylish home decor pieces that reflect your unique taste, Decorda Design is your partner in turning dreams into reality. Discover a world of curated designs and impeccable craftsmanship—where every detail matters. Elevate your events and homes with Decorda Design, where style meets substance.</p>
                        <Button className="mt-6 bg-black hover:bg-gray-700">Learn More</Button>
                    </div>
                    <div className="relative h-[400px] rounded-lg overflow-hidden">
                        <Image src="https://picsum.photos/seed/decordalogo/800/400" alt="Decorda Logo" fill className="object-cover" data-ai-hint="company logo abstract" />
                    </div>
                </div>
            </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold font-display text-left mb-10 text-primary">Why Clients Love Us</h2>
            <div className="flex overflow-x-auto thin-scrollbar pb-4 -mb-4">
              <div className="flex gap-8">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-[600px] flex-shrink-0">
                      <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white h-full border">
                        <CardContent className="p-0 flex items-start">
                          <div className="relative w-48 h-[250px] flex-shrink-0">
                              <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" data-ai-hint={testimonial.imageHint} />
                          </div>
                          <div className="flex flex-col p-6">
                              <h3 className="font-semibold text-lg">{testimonial.title}</h3>
                              <p className="text-gray-600 text-sm flex-grow mt-2">{testimonial.text}</p>
                              <p className="font-semibold text-right mt-4">{testimonial.name}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative h-[400px] w-full my-16">
            <Image
                src="https://picsum.photos/seed/sale-banner/1920/400"
                alt="Sale banner"
                fill
                className="object-cover"
                data-ai-hint="modern living room"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white">
                    <h2 className="text-5xl md:text-6xl font-bold font-display">Sale up to 20% Off</h2>
                    <p className="mt-4 text-lg">Find the perfect match for your event decor in a reasonable price</p>
                    <Button className="mt-8 bg-black hover:bg-gray-700">Shop Now</Button>
                </div>
            </div>
        </section>

        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold font-display text-center mb-10 text-primary">Our Benefits</h2>
                 <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                    {benefits.map((benefit, index) => (
                      <AccordionItem key={index} value={`item-${index+1}`}>
                        <AccordionTrigger>
                          <div className="flex items-center gap-4">
                            {benefit.icon}
                            <span className="font-semibold">{benefit.title}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-10">
                          {benefit.content}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>

        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold font-display text-center mb-10 text-primary">Contact Us</h2>
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl mb-12">
                    <Image src="https://picsum.photos/seed/contact-hero/1200/400" alt="Contact Us" fill className="object-cover" data-ai-hint="office building" />
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-xl font-bold font-display text-primary">Gulistan e Johar Branch</h3>
                        <p className="mt-4 text-muted-foreground">Office: 9th Floor Building, Neighborhood Section 20, Gulistan e Johar, Near Toyota Showroom</p>
                        <p className="mt-2 text-muted-foreground">Karachi, Pakistan</p>
                        <a href="#" className="text-primary mt-2 inline-flex items-center gap-1 hover:underline">Get directions <MapPin className="h-4 w-4" /></a>
                        
                        <h3 className="text-xl font-bold font-display text-primary mt-8">Open hours</h3>
                        <p className="mt-2 text-muted-foreground">Always Open</p>

                        <h3 className="text-xl font-bold font-display text-primary mt-8">Contact Info</h3>
                        <a href="tel:+923192483064" className="mt-2 text-muted-foreground block hover:text-primary transition-colors">+92 319 2483064</a>
                        <a href="mailto:decordaofficial@gmail.com" className="mt-1 text-muted-foreground block hover:text-primary transition-colors">decordaofficial@gmail.com</a>

                        <div className="flex gap-4 mt-4">
                          <a href="#" className="text-primary hover:text-primary/80"><Facebook className="h-6 w-6" /></a>
                          <a href="#" className="text-primary hover:text-primary/80"><Instagram className="h-6 w-6" /></a>
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

      </main>

      <footer className="bg-black text-white py-12">
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
                <Link href="#" className="text-gray-400 hover:text-white hover:underline">Home</Link>
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
