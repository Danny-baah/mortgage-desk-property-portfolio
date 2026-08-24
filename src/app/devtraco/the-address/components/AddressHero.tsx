"use client";

import Image from "next/image";
import Link from "next/link";

export default function AddressHero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex flex-col justify-center items-center overflow-hidden bg-blue-950">
      
      {/* Background Image with Cinematic Pan */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/assets/the-address/Residential_Big_Image.jpg"
          alt="The Address Residential Exterior"
          fill
          priority
          className="object-cover object-center animate-slow-zoom"
        />
        {/* Institutional Luxury Overlays */}
        <div className="absolute inset-0 bg-blue-950/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 via-transparent to-blue-950/80"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center">
        
        {/* Location & Investment Badge */}
        <div className="inline-flex items-center gap-2 border border-orange-500/40 bg-blue-950/50 backdrop-blur-md px-5 py-2 rounded-full mb-8 shadow-2xl animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500">
            Roman Ridge, Accra
          </span>
        </div>

        {/* Hero Typography */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-[#b5d334] uppercase tracking-tighter mb-6 leading-none flex flex-col items-center drop-shadow-lg">
          <span className="animate-slide-down inline-block tracking-tight">
            THE ADDRESS
          </span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-slate-200 font-light tracking-wide mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-delayed border-t border-white/20 pt-6">
          Where modern living meets <strong className="font-bold text-orange-400">smart investment.</strong>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto animate-fade-in-delayed-more">
          <Link
            href="#about-address"
            className="inline-flex items-center justify-center px-10 py-4 bg-[#b5d334] text-white font-bold uppercase tracking-widest text-xs rounded-full transition-all duration-300 hover:bg-orange-600 hover:-translate-y-1 shadow-xl shadow-orange-500/20 w-full sm:w-auto"
          >
            Discover The Towers
          </Link>
        </div>

      </div>

      {/* Internal Custom Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        .animate-slow-zoom {
          animation: slowZoom 20s ease-out forwards;
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