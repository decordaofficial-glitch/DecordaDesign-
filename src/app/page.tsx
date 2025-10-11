"use client";

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Info from "./components/Info";
import Clients from "./components/Clients";
import SaleBanner from "./components/SaleBanner";
import Benefits from "./components/Benefits";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-[#F8F8F8] text-gray-800">
      <div className="bg-gray-800 text-white text-center py-4 text-sm font-medium">
        Free shipping for orders over Rs 999
      </div>

      <Header />

      <main>
        <Hero />
        <FeaturedProducts />
        <Info />
        <Clients />
        <SaleBanner />
        <Benefits />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
