import Hero from "@/components/Hero";
import About from "@/components/About";
import Developers from "@/components/Developers";
import Values from "@/components/Values";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* 1. Hero Slideshow Section */}
      <Hero />
      <About />
      <Developers />
      <Values />
      <CTA />
      {/* Future sections (About, Partners Grid, etc.) will go here below the Hero */}
    </main>
  );
}