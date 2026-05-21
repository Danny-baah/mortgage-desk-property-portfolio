"use client";

import Link from "next/link";

export default function ArloHero() {
  return (
    <section className="relative w-full bg-blue-950 flex flex-col justify-center overflow-hidden min-h-[70vh] pt-32 pb-24 lg:pt-40 lg:pb-32">
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Deep blue gradient overlay to ensure text legibility while keeping the brand vibe */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-blue-950/80 via-blue-950/60 to-blue-950/95"></div>
        
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src="/assets/arlo/Arlo Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 border border-orange-500/40 bg-blue-950/60 backdrop-blur-md px-5 py-2 rounded-full shadow-lg shadow-orange-500/10">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-orange-400">
              Cantonments, Accra
            </span>
          </div>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter mb-6 drop-shadow-2xl leading-none">
          ARLO
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-blue-100 font-light tracking-wide mb-10">
          Precision over excess. Quality over quantity.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href="#about-arlo"
            className="group relative px-8 py-4 bg-orange-500 text-white font-bold uppercase tracking-widest text-xs transition-all duration-300 hover:bg-orange-600 hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] rounded-full w-full sm:w-auto flex justify-center items-center gap-3"
          >
            <span>Explore Arlo</span>
            <svg className="w-4 h-4 transform transition-transform duration-500 group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}