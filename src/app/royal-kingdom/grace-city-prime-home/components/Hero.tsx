"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video Overlay for readability */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Hero Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none scale-105"
      >
        <source
          src="/assets/grace_city_prime_land/GRACE CITY PHASE 3.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <span className="inline-block bg-[#b5d334] text-black font-black text-xs uppercase tracking-[0.3em] px-4 py-1.5 rounded-sm mb-6 shadow-sm">
          Royal Kingdom Properties
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase max-w-4xl mx-auto leading-none mb-6 drop-shadow-md">
          Grace City <br className="sm:hidden" />
          <span className="text-[#b5d334]">Prime Home</span>
        </h1>
        <p className="text-white/90 font-medium text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 drop-shadow-sm leading-relaxed">
          Step into unparalleled luxury in an elite, master-planned residential
          oasis. Exquisite turnkey homes engineered for modern comfort and
          generational value.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#about"
            className="bg-[#b5d334] text-black font-black text-sm uppercase tracking-wider px-8 py-4 rounded-sm hover:bg-white transition-all duration-300 shadow-lg text-center"
          >
            View Available Homes
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white text-white font-black text-sm uppercase tracking-wider px-8 py-4 rounded-sm hover:bg-white hover:text-black transition-all duration-300 text-center"
          >
            Register Interest 
          </Link>
        </div>
      </div>

      {/* Bottom Accent Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#b5d334] z-20" />
    </section>
  );
}
