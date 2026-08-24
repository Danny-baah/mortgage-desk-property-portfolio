"use client";

import Image from "next/image";
import Link from "next/link";

export default function WoodlandsHero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex flex-col justify-center items-center overflow-hidden bg-blue-950">
      
      {/* Immersive Organic-Luxury Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/assets/woodlands/Picture1.png"
          alt="Devtraco Woodlands Master Plan Aerial View"
          fill
          priority
          className="object-cover object-center animate-slow-zoom"
        />
        {/* Layered Master-Plan Gradients - Now using Brand Blue */}
        <div className="absolute inset-0 bg-blue-950/50 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/60 via-transparent to-blue-950/60"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center">
        
        {/* Wellness Ecosystem Badge */}
        <div className="inline-flex items-center gap-2.5 border border-emerald-500/30 bg-blue-950/60 backdrop-blur-md px-5 py-2 rounded-full mb-8 shadow-xl animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-orange-500">
            Premium Suburban Retreat
          </span>
        </div>

        {/* Brand Typography */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-[#b5d334] uppercase tracking-tighter mb-4 leading-none drop-shadow-md animate-slide-down">
          WOODLANDS
        </h1>

        <p className="text-emerald-400 font-bold uppercase tracking-[0.3em] text-xs sm:text-sm mb-10 animate-fade-in-delayed">
          Coastal calm, <span className="text-white">city energy</span>
        </p>

        <div className="w-12 h-px bg-orange-500 mb-10 animate-fade-in-delayed"></div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto animate-fade-in-delayed-more">
          <Link
            href="#about-woodlands"
            className="inline-flex items-center justify-center px-10 py-4 bg-[#b5d334] text-white font-bold uppercase tracking-widest text-xs rounded-full transition-all duration-300 hover:bg-orange-600 hover:-translate-y-1 shadow-lg shadow-orange-500/20 w-full sm:w-auto"
          >
            Explore The Retreat
          </Link>
        </div>

      </div>

      {/* Embedded Animation Keyframes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        .animate-slow-zoom {
          animation: slowZoom 22s ease-out forwards;
        }
        .animate-slide-down {
          animation: slideDown 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
          animation: fadeIn 1.2s ease-out forwards;
        }
        .animate-fade-in-delayed {
          animation: fadeIn 1.2s ease-out 0.4s forwards;
          opacity: 0;
        }
        .animate-fade-in-delayed-more {
          animation: fadeIn 1.2s ease-out 0.6s forwards;
          opacity: 0;
        }
      `}} />
    </section>
  );
}