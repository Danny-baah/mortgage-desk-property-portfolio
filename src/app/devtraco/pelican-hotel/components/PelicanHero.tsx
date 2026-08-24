"use client";

import Link from "next/link";

export default function PelicanHero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex flex-col justify-center items-center overflow-hidden bg-blue-950">
      
      {/* Background Video Element */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/pelican/The Pelican Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark luxury lens tint overlay */}
        <div className="absolute inset-0 bg-blue-950/80 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-blue-950/40"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center">
        
        {/* Hospitality Badge */}
        <div className="inline-flex items-center gap-2 border border-orange-500/30 bg-blue-950/60 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 shadow-lg animate-fade-in">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-orange-400">
            Award-Winning Hospitality Asset
          </span>
        </div>

        {/* Animated Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#b5d334] uppercase tracking-tighter mb-6 leading-none flex flex-col items-center">
          <span className="animate-slide-down inline-block tracking-tight">
            THE PELICAN
          </span>
          <span className="text-[#b5d334] animate-slide-up inline-block mt-1 sm:mt-2">
            HOTEL
          </span>
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-light tracking-wide mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-delayed">
          Where modern luxury meets authentic Ghanaian hospitality.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto animate-fade-in-delayed-more">
          <Link
            href="#about-pelican"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#b5d334] text-white font-bold uppercase tracking-widest text-xs rounded-full transition-all duration-300 hover:bg-orange-600 hover:scale-105 shadow-xl shadow-orange-500/20 w-full sm:w-auto"
          >
            Explore the Asset
          </Link>
        </div>

      </div>

      {/* Internal Animations Pack */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        .animate-slide-down {
          animation: slideDown 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slide-up {
          animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards;
          opacity: 0;
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