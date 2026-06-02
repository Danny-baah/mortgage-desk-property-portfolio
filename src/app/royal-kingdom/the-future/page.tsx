"use client";

import TheFutureHero from "./components/TheFutureHero";
import AboutUs from "./components/AboutUs";
import Amenities from "./components/Amenities";
import UnitTypes from "./components/UnitTypes";
import Gallery from "./components/Gallery";
import CTA from "./components/CTA";


export default function GraceCityPrimeLandsPage() {
  return (
    <main className="bg-white min-h-screen antialiased">
      <TheFutureHero />
      <AboutUs />
      <Amenities />
      <UnitTypes />
      <Gallery />
      <CTA />     
    </main>
  );
}
