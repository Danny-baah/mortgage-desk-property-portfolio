"use client";

import Image from "next/image";

export default function RKEServices() {
  return (
    <section id="rke-services" className="pt-24 sm:pt-32 bg-slate-50 relative overflow-hidden flex flex-col">
      
      {/* Background Accents - Soft lime glow instead of blue */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-lime-50 rounded-full blur-[150px] pointer-events-none opacity-60 translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-16 sm:mb-24">
        
        {/* HEADER: Centered & Minimal */}
        <div className="text-center max-w-3xl mx-auto">
          {/* UPDATED: Small heading is now Orange */}
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-orange-500"></span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
              What We Do
            </span>
            <span className="w-10 h-px bg-orange-500"></span>
          </div>

          {/* UPDATED: Big heading is now fully uniform Lemon Green */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#b5d334] uppercase tracking-tighter mb-6 leading-none">
            Comprehensive <br />
            Real Estate Solutions
          </h2>
          
          <p className="text-slate-500 font-light text-lg sm:text-xl">
            Establishing a benchmark of integrity, transparency, and professionalism in Africa's real estate sector.
          </p>
        </div>

      </div>

      {/* MASSIVE FULL-WIDTH IMAGE */}
      <div className="w-full relative h-[60vh] min-h-[500px] lg:h-[800px] group">
        <Image
          src="/assets/royal_kingdom/Picture24.jpg"
          alt="Royal Kingdom Estate Services"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        
        {/* Overlays - Swapped deep blue for slate neutrals to reduce blue footprint */}
        <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>
        
        {/* Floating Brand Badge inside the image */}
        <div className="absolute bottom-10 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            {/* Small accent bar matches the small heading theme */}
            <div className="w-16 h-1 bg-orange-500 mb-4"></div>
            <p className="text-white font-black text-2xl sm:text-4xl uppercase tracking-tighter drop-shadow-xl">
              Building Communities, <br />
              <span className="text-[#b5d334]">Nurturing Dreams</span>
            </p>
          </div>
          <div className="hidden md:block w-32 h-32 rounded-full border-4 border-white/20 flex items-center justify-center backdrop-blur-sm bg-white/5">
             {/* Small text info badge matches orange theme */}
             <span className="text-orange-400 font-black text-sm uppercase tracking-widest text-center leading-tight">Est.<br/>2018</span>
          </div>
        </div>
      </div>

    </section>
  );
}