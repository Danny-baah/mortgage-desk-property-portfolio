"use client";

import Hero from "./components/Hero";
import About from "./components/About";
import Infrastructure from "./components/Infrastructure";
import UnitTypes from "./components/UnitTypes";
import Location from "./components/Location";
import WhyInvest from "./components/WhyInvest";
import Gallery from "./components/Gallery";
import CallToAction from "./components/CallToAction";








export default function GraceCityPrimeHomePage() {
  return (
    <main className="min-h-screen bg-white antialiased selection:bg-[#b5d334] selection:text-black">
      <Hero />
        <About />
        <Infrastructure />
        <UnitTypes />
        <Location />
        <WhyInvest />
        <Gallery />
        <CallToAction />
    </main>
  );
}
