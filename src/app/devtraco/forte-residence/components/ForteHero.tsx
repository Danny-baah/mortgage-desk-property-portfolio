"use client";

import Image from "next/image";
import Link from "next/link";

export default function ForteHero() {
  return (
    <section className="relative w-full min-h-[75vh] flex flex-col justify-center items-center overflow-hidden bg-blue-950 pt-32 pb-24 lg:pt-40 lg:pb-32">
      
      {/* Background Image Accent */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/assets/forte/THE-FORTE-Exterior-03-600x400.jpg"
          alt="Forte Residences Exterior Architecture"
          fill
          priority
          className="object-cover object-center animate-slow-zoom"
        />
        {/* Balanced brand gradient overlay to ensure text pops */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-950/60 to-blue-950/80"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center">
        
        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 border border-orange-500/40 bg-blue-950/80 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 shadow-lg shadow-orange-500/5 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
            Community 20, Tema
          </span>
        </div>

        {/* Animated Title */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter mb-6 leading-none flex flex-col items-center">
          <span className="animate-slide-down inline-block drop-shadow-2xl">
            FORTE
          </span>
          <span className="text-orange-500 animate-slide-up inline-block drop-shadow-xl mt-1 sm:mt-2">
            RESIDENCES
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-200 font-light tracking-wide mb-10 max-w-xl mx-auto animate-fade-in-delayed">
          Exclusive community living, masterfully designed.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto animate-fade-in-delayed-more">
          <Link
            href="#about-forte"
            className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold uppercase tracking-widest text-xs rounded-full transition-all duration-300 hover:bg-orange-600 hover:scale-105 shadow-xl shadow-orange-500/20 w-full sm:w-auto"
          >
            Discover the Enclave
          </Link>
        </div>

      </div>

      {/* Internal Styles for Custom Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        
        .animate-slide-down {
          animation: slideDown 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slide-up {
          animation: slideUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
          opacity: 0;
        }
        .animate-fade-in {
          animation: fadeIn 1.5s ease-out forwards;
        }
        .animate-fade-in-delayed {
          animation: fadeIn 1.5s ease-out 0.6s forwards;
          opacity: 0;
        }
        .animate-fade-in-delayed-more {
          animation: fadeIn 1.5s ease-out 0.9s forwards;
          opacity: 0;
        }
        .animate-slow-zoom {
          animation: slowZoom 25s linear infinite alternate;
        }
      `}} />
    </section>
  );
}