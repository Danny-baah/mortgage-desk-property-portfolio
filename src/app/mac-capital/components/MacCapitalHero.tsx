"use client";

import Image from "next/image";
import Link from "next/link";

export default function MacCapitalHero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      
      <style dangerouslySetInnerHTML={{ __html: `
        /* Cinematic Slow Zoom for Background */
        @keyframes kenBurns {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
        
        /* Smooth Fade-Up for text elements */
        @keyframes fadeUp {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        /* NEW: Continuous Zoom In and Out for the Heading */
        @keyframes pulseScale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .animate-bg-zoom {
          animation: kenBurns 20s ease-out forwards;
        }
        .animate-fade-up-1 { animation: fadeUp 1s ease-out forwards; animation-delay: 0.2s; opacity: 0; }
        .animate-fade-up-2 { animation: fadeUp 1s ease-out forwards; animation-delay: 0.4s; opacity: 0; }
        .animate-fade-up-3 { animation: fadeUp 1s ease-out forwards; animation-delay: 0.6s; opacity: 0; }
        .animate-fade-up-4 { animation: fadeUp 1s ease-out forwards; animation-delay: 0.8s; opacity: 0; }
        
        /* Apply the 4-second infinite breathing effect */
        .animate-pulse-scale { 
          animation: pulseScale 4s ease-in-out infinite; 
        }
      ` }} />

      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/mac capital/Picture1.jpg"
          alt="Mac Capital Homes Amrahia"
          fill
          priority
          className="object-cover object-center animate-bg-zoom"
        />
        {/* Dual Gradient Overlay: Darkens edges, keeps center slightly clearer */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80"></div>
      </div>

      {/* =========================================================
         HERO CONTENT (Frosted Glass Card Style)
         ========================================================= */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center mt-16">
        
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl text-center max-w-4xl w-full">
          
          {/* Sub Heading */}
          <div className="animate-fade-up-1 flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-orange-400"></span>
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-orange-400 drop-shadow-md">
              Amrahia's Premier Residences
            </span>
            <span className="w-12 h-px bg-orange-400"></span>
          </div>

          {/* Main Heading (Wrapped in fade-up, heading itself zooms in and out) */}
          <div className="animate-fade-up-2 mb-6">
            <h1 className="animate-pulse-scale text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight drop-shadow-lg">
              MAC CAPITAL <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                HOMES
              </span>
            </h1>
          </div>

          {/* Descriptive Text (From PDF context) */}
          <p className="animate-fade-up-3 text-lg md:text-xl text-gray-200 font-light leading-relaxed max-w-2xl mx-auto mb-10 drop-shadow-sm">
            Discover our stunning 4-bedroom, fully en-suite residences designed for modern families. Nestled in a peaceful community, offering the perfect blend of urban convenience and suburban charm.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-up-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white rounded-full font-bold text-base transition-all duration-300 hover:bg-white hover:text-black shadow-xl hover:-translate-y-1"
            >
              Contact Us to View
              <svg 
                className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
          
        </div>
      </div>

    </section>
  );
}