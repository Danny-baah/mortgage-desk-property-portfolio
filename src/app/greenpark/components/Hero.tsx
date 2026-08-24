"use client";

import Image from "next/image";
import Link from "next/link";

export default function GreenParkHero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex flex-col justify-center items-center overflow-hidden bg-black">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/assets/greenpark/cherry-Semi_Detached_1.jpg"
          alt="GreenPark Properties"
          fill
          priority
          className="object-cover object-center opacity-60"
        />

        {/* DARK OVERLAYS (Reduced by ~15%) */}
        <div className="absolute inset-0 bg-black/[0.35]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-transparent to-black/65"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center">
        {/* Established Badge */}
        <div className="inline-flex items-center gap-2.5 border border-white/20 bg-white/5 backdrop-blur-md px-5 py-2 rounded-full mb-8 shadow-xl">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-orange-500">
            10+ Years Experience
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter mb-4 leading-none">
          GreenPark <br />
          <span className="text-[#b5d334]">Properties</span>
        </h1>

        {/* Tagline from PDF */}
        <p className="text-[#b5d334] font-bold uppercase tracking-[0.3em] text-xs sm:text-sm mb-8">
          World-Class Living,{" "}
          <span className="text-white">Designed for Value</span>
        </p>

        {/* Core Pillars */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-300 mb-10">
          <span>Quality Developments</span>
          <span className="hidden sm:inline text-[#b5d334]">•</span>
          <span>Flexible Payment Plans</span>
          <span className="hidden sm:inline text-[#b5d334]">•</span>
          <span>Investment Growth</span>
        </div>

        <div className="w-12 h-px bg-[#b5d334] mb-10"></div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center px-10 py-4 bg-[#b5d334] text-white font-black uppercase tracking-widest text-xs rounded-full transition-all duration-300 hover:bg-[#a2bd2e] hover:-translate-y-1 shadow-lg shadow-[#b5d334]/20 w-full sm:w-auto"
          >
            View Properties
          </Link>
        </div>
      </div>
    </section>
  );
}
