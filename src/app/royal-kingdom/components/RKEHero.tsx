"use client";

import Image from "next/image";
import Link from "next/link";

export default function RKEHero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex flex-col justify-center items-center overflow-hidden bg-blue-950">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/assets/royal_kingdom/Picture16.jpg"
          alt="Royal Kingdom Estate"
          fill
          priority
          className="object-cover object-center animate-slow-zoom opacity-50"
        />
        {/* Deep Blue Gradient Overlays to match established brand */}
        <div className="absolute inset-0 bg-blue-950/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 via-transparent to-blue-950/80"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center">
        
        {/* Established Badge - SWAPPED TO ORANGE */}
        <div className="inline-flex items-center gap-2.5 border border-orange-500/30 bg-orange-950/40 backdrop-blur-md px-5 py-2 rounded-full mb-8 shadow-xl animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-orange-400">
            Est. 2018
          </span>
        </div>

        {/* Brand Typography - WITH LOOPED FLOATING ANIMATION & NEW GREEN */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter mb-4 leading-none animate-hero-title">
          Royal Kingdom <br />
          <span className="text-[#b5d334]">Estate</span>
        </h1>

        <p className="text-[#b5d334] font-bold uppercase tracking-[0.3em] text-xs sm:text-sm mb-8 animate-fade-in-delayed">
          Building Communities, <span className="text-white">Nurturing Dreams!</span>
        </p>

        {/* Core Pillars from the brochure */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-300 mb-10 animate-fade-in-delayed">
          <span>Litigation-Free Land</span>
          <span className="hidden sm:inline text-[#b5d334]">•</span>
          <span>Seamless Construction</span>
          <span className="hidden sm:inline text-[#b5d334]">•</span>
          <span>Customer Satisfaction</span>
        </div>

        <div className="w-12 h-px bg-[#b5d334] mb-10 animate-fade-in-delayed"></div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto animate-fade-in-delayed-more">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center px-10 py-4 bg-[#b5d334] text-blue-950 font-black uppercase tracking-widest text-xs rounded-full transition-all duration-300 hover:bg-[#a2bd2e] hover:-translate-y-1 shadow-lg shadow-[#b5d334]/20 w-full sm:w-auto"
          >
            Explore Our Portfolio
          </Link>
        </div>

      </div>

      {/* Embedded Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatLoop {
          0%, 100% { transform: translateY(0); text-shadow: 0 4px 20px rgba(0,0,0,0.5); }
          /* RGB for #b5d334 is 181, 211, 52 */
          50% { transform: translateY(-8px); text-shadow: 0 15px 30px rgba(181, 211, 52, 0.3); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        .animate-slow-zoom { 
          animation: slowZoom 25s ease-out forwards; 
        }
        
        /* Combines initial entry animation with the infinite float loop */
        .animate-hero-title { 
          animation: slideDown 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards, floatLoop 5s ease-in-out 1.2s infinite; 
        }
        
        .animate-fade-in { animation: fadeIn 1.2s ease-out forwards; }
        .animate-fade-in-delayed { animation: fadeIn 1.2s ease-out 0.4s forwards; opacity: 0; }
        .animate-fade-in-delayed-more { animation: fadeIn 1.2s ease-out 0.6s forwards; opacity: 0; }
      `}} />
    </section>
  );
}