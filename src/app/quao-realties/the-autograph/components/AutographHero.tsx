"use client";

import Image from "next/image";
import Link from "next/link";

export default function AutographHero() {
  return (
    <section className="relative w-full bg-blue-950 flex flex-col justify-center overflow-hidden min-h-[60vh] pt-32 pb-24 lg:pt-40 lg:pb-32">
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slowZoomOut {
          from { transform: scale(1.1); }
          to { transform: scale(1); }
        }
      `}} />

      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-blue-950/70 via-blue-950/85 to-blue-950/98"></div>
        {/* Ensure the file extension matches your actual file (e.g., .jpg or .png) */}
        <Image
          src="/assets/quao/The-Autograph-Main-Brochure-3_page-0001-1.jpg"
          alt="The Autograph Exterior"
          fill
          priority
          className="object-cover object-center animate-[slowZoomOut_10s_ease-out_forwards]"
        />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        
        <div className="flex justify-center mb-8 animate-[fadeIn_1s_ease-out_forwards]">
          <div className="inline-flex items-center gap-2 border border-orange-500/40 bg-blue-950/90 backdrop-blur-xl px-5 py-2 rounded-full shadow-2xl shadow-orange-500/10">
            <svg className="w-4 h-4 text-orange-500 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-orange-400 drop-shadow-sm">
              Cantonments, Accra
            </span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight mb-6 drop-shadow-2xl leading-[1.1] sm:leading-[1.15] animate-[fadeIn_1.3s_ease-out_forwards]">
          Signature <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-200 to-orange-500">
            Living
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-blue-100/90 font-light leading-relaxed mb-10 animate-[fadeIn_1.6s_ease-out_forwards] drop-shadow-md">
          A luxury residential development crafted for those who appreciate refined design and elevated living.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-[fadeIn_1.9s_ease-out_forwards]">
          <Link
            href="#about-autograph"
            className="group relative px-8 py-4 bg-orange-500 text-white font-bold uppercase tracking-widest text-xs sm:text-sm transition-all duration-500 hover:bg-orange-600 hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] rounded-full w-full sm:w-auto flex justify-center items-center gap-3"
          >
            <span>Discover The Autograph</span>
            <svg className="w-5 h-5 transform transition-transform duration-500 group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
          
          <Link
            href="/register"
            className="group px-8 py-4 border-2 border-orange-500 text-orange-400 font-bold uppercase tracking-widest text-xs sm:text-sm transition-all duration-500 hover:bg-orange-500 hover:text-white hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] rounded-full w-full sm:w-auto flex justify-center items-center"
          >
            Register Interest
          </Link>
        </div>
      </div>
    </section>
  );
}