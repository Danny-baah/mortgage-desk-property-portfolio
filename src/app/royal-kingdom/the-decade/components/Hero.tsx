"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[75vh] min-h-[550px] w-full flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image Asset */}
      <Image
        src="/assets/the_decade/Picture72.jpg"
        alt="The Decade Apartment Exterior Banner"
        fill
        priority
        className="object-cover object-center opacity-90"
      />
      
      {/* Slightly darkened overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-xs sm:text-sm font-black uppercase tracking-[0.4em] mb-4 text-[#ff8200] bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
          Premium Residential
        </span>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#b5d334] uppercase tracking-tighter drop-shadow-md leading-none">
          The Decade Apartment
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-100 font-medium max-w-2xl mx-auto drop-shadow-md">
          Experience luxury short-stay living perfectly engineered for both business and leisure travelers in Accra.
        </p>
        <div className="mt-8 flex justify-center">
          <a 
            href="#about"
            className="px-8 py-3.5 bg-[#b5d334] hover:bg-[#b5d334]/90 text-black font-black uppercase tracking-wider text-xs rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            Explore Property
          </a>
        </div>
      </div>
    </section>
  );
}