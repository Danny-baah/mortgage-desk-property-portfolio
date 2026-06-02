"use client";

import Hero from "./components/Hero";
import About from "./components/About";
import Infrastructure from "./components/Infrastructure";
import Location from "./components/Location";
import WhyInvest from "./components/WhyInvest";
import Gallery from "./components/Gallery";
import CTA from "./components/CTA";

export default function GraceCityPrimeLandsPage() {
  return (
    <main className="bg-white min-h-screen antialiased">
      <Hero />
      <About />
      <Infrastructure />
      <Location />
      <WhyInvest /> 
      <Gallery />
      <CTA />   
    </main>
  );
}
