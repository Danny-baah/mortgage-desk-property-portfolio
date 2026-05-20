"use client";

import Image from "next/image";
import Link from "next/link";

// 1. STYLES MOVED OUTSIDE: Keeps the Next.js compiler completely safe from panics
const waveAnimationStyles = `
  @keyframes subtle-zoom {
    0%, 100% { transform: scale(1.02); }
    50% { transform: scale(1.06); }
  }
  @keyframes letter-wave {
    0%, 100% { transform: translateY(0); }
    20% { transform: translateY(-10px); }
    40% { transform: translateY(0); }
  }
`;

interface WavingTextProps {
  text: string;
  className?: string;
  startDelayIndex?: number;
}

// 2. PURE SUB-COMPONENT: Safely fragments text into staggered waving letters
function WavingText({ text, className = "", startDelayIndex = 0 }: WavingTextProps) {
  return (
    <span className="inline-block">
      {text.split("").map((char, index) => {
        // Calculates smooth, sequential delays per letter
        const delay = `${(startDelayIndex + index) * 0.04}s`;
        return (
          <span
            key={index}
            className={`inline-block animate-[letter-wave_2.8s_ease-in-out_infinite] ${className}`}
            style={{ animationDelay: delay }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
    </span>
  );
}

export default function AttaDokuHero() {
  // Smooth scroll handler for Button 1
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("explore-models");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen bg-blue-950 flex items-center overflow-hidden">
      {/* Injecting static animation styles safely */}
      <style dangerouslySetInnerHTML={{ __html: waveAnimationStyles }} />
      
      {/* Background Graphic Elements */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-orange-500/15 rounded-full blur-[120px] pointer-events-none z-10"></div>
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none z-10"></div>

      {/* Full Background Image Layer with Cinematic Fade */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/atta-doku/Picture9.png"
          alt="Atta Doku Meadows Luxury Coastal Sanctuary"
          fill
          priority
          className="object-cover object-center transform scale-105 animate-[subtle-zoom_20s_ease-out_infinite]"
        />
        {/* Multilayer luxury deep navy vignette over the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-900/30 lg:block hidden"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/80 to-blue-950/40 lg:hidden block"></div>
      </div>

      {/* Main Layout Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-32 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Premium Editorial Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 max-w-2xl">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2.5 bg-blue-900/50 backdrop-blur-md px-4 py-2 rounded-full border border-blue-700/50 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-orange-500 shadow-md shadow-orange-500/50"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-orange-400">
                Your Coastal Sanctuary • Prampram
              </span>
            </div>

            {/* Main Headline with Safe Letter Wave Ripples */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.2]">
              <span className="block">
                <WavingText text="Live in " startDelayIndex={0} />
                <WavingText 
                  text="Serenity." 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500" 
                  startDelayIndex={8} 
                />
              </span>
              <span className="block mt-1">
                <WavingText text="Own Luxury." startDelayIndex={18} />
              </span>
            </h1>

            {/* Subtext describing the lifestyle */}
            <p className="text-base sm:text-lg text-blue-100/80 font-light leading-relaxed">
              Escape the noise of the city. Atta Doku Meadows offers an exclusive luxury gated community featuring 28 multi-unit homes, situated perfectly just a 15-minute walk from the pristine oceanfront. 
            </p>

            {/* CTA Interaction Block */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto items-stretch sm:items-center">
              {/* BUTTON 1: Smooth scrolls down to section container with ID #explore-models */}
              <a
                href="#explore-models"
                onClick={handleScroll}
                className="group inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-extrabold rounded-full transition-all duration-300 hover:bg-orange-600 shadow-xl shadow-orange-500/20 hover:-translate-y-0.5 text-sm text-center cursor-pointer"
              >
                Explore Home Models
                <svg className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              
              {/* BUTTON 2: Redirects natively to the /register route */}
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-8 py-4 border border-blue-400/30 text-white font-bold rounded-full transition-all duration-300 bg-blue-800/30 backdrop-blur-sm hover:bg-blue-800/60 hover:border-blue-400/60 text-sm text-center"
              >
                Register Interest
              </Link>
            </div>

            {/* UPGRADED: Glassmorphism Statistics Cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-10 w-full max-w-xl">
              
              {/* Card 1 */}
              <div className="bg-blue-900/40 backdrop-blur-sm border border-blue-800/50 rounded-2xl p-4 sm:p-5 text-center transition-transform hover:-translate-y-1 duration-300">
                <p className="text-2xl sm:text-3xl font-black text-white">28</p>
                <p className="text-[10px] font-bold text-orange-400 uppercase tracking-wider mt-1">Exclusive Units</p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-blue-900/40 backdrop-blur-sm border border-blue-800/50 rounded-2xl p-4 sm:p-5 text-center transition-transform hover:-translate-y-1 duration-300">
                <p className="text-2xl sm:text-3xl font-black text-orange-500">15 Min</p>
                <p className="text-[10px] font-bold text-blue-200 uppercase tracking-wider mt-1">Walk to Beach</p>
              </div>
              
              {/* Card 3 */}
              <div className="bg-blue-900/40 backdrop-blur-sm border border-blue-800/50 rounded-2xl p-4 sm:p-5 text-center transition-transform hover:-translate-y-1 duration-300">
                <p className="text-2xl sm:text-3xl font-black text-white">2 - 4</p>
                <p className="text-[10px] font-bold text-orange-400 uppercase tracking-wider mt-1">Bed Options</p>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: Hidden layout balance spacer */}
          <div className="lg:col-span-5 hidden lg:block"></div>

        </div>
      </div>

      {/* Minimalistic Elegant Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-950 to-transparent pointer-events-none z-10"></div>
    </section>
  );
}