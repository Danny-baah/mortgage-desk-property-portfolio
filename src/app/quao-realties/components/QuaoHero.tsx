"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const heroSlides = [
  {
    id: "autograph",
    propertyName: "The Autograph",
    src: "/assets/quao/Manora_EXT_-Entrance-Lobby.jpg",
    link: "/quao/autograph"
  },
  {
    id: "manora",
    propertyName: "The Manora",
    src: "/assets/quao/Manora.jpg",
    link: "/quao/manora"
  }
];

export default function QuaoHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance the background slider every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] w-full bg-blue-950 flex flex-col justify-center overflow-hidden">
      
      {/* Custom Keyframes for the Text Animations & Glowing Buttons */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes smoothFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes textShimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-float-1 {
          display: block;
          animation: smoothFloat 4s ease-in-out infinite;
        }
        .animate-float-2 {
          display: block;
          animation: smoothFloat 4s ease-in-out infinite;
          animation-delay: 0.6s;
        }
        .animate-shimmer-text {
          background-size: 200% auto;
          animation: textShimmer 4s linear infinite;
        }
      `}} />

      {/* =========================================================
          BACKGROUND CINEMATIC SLIDER
          ========================================================= */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* MAX CONTRAST: Deepened 'from-blue-950/90' at the top to highlight the orange badge */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-blue-950/90 via-blue-950/85 to-blue-950/98"></div>
          
          <Image
            src={slide.src}
            alt={slide.propertyName}
            fill
            priority={index === 0}
            className={`object-cover object-center transition-transform duration-[10000ms] ease-out ${
              index === currentSlide ? "scale-105" : "scale-100"
            }`}
          />
        </div>
      ))}

      {/* =========================================================
          HERO CONTENT 
          ========================================================= */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center mt-20">
        
        {/* Luxury Overline Badge - Solidified background for extreme orange pop */}
        <div className="flex justify-center mb-8 animate-[fadeIn_1s_ease-out_forwards]">
          <div className="inline-flex items-center gap-3 border border-orange-500/40 bg-blue-950/90 backdrop-blur-xl px-6 py-2 rounded-full shadow-2xl shadow-orange-500/5">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.35em] text-orange-400 drop-shadow-sm">
              Quao Realty
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
          </div>
        </div>

        {/* Clean Line-Broken Tagline with Continuous floating + shimmer */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight mb-6 drop-shadow-2xl leading-[1.1] sm:leading-none">
          <span className="animate-float-1">
            It's Where
          </span>
          <span className="animate-float-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-200 to-orange-500 animate-shimmer-text mt-2 block pb-4">
            You Belong.
          </span>
        </h1>

        {/* Vision Statement Subtext - Clear, Crisp & High-Contrast */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-white font-normal drop-shadow-md leading-relaxed mb-12 animate-[fadeIn_1.5s_ease-out_forwards]">
          We are making the dreams of luxury homeowners and investors in Africa and the world come true through uncompromising quality and innovative design.
        </p>

        {/* Dynamic Action Buttons with Scale & Glow Hover Effects */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-[fadeIn_2s_ease-out_forwards]">
          
          {/* Primary Action Button */}
          <Link
            href="#residences"
            className="group relative px-8 py-4 bg-orange-500 text-white font-bold uppercase tracking-widest text-xs sm:text-sm transition-all duration-500 hover:bg-orange-600 hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] rounded-full w-full sm:w-auto flex justify-center items-center gap-3"
          >
            <span>View Our Residences</span>
            <svg className="w-5 h-5 transform transition-transform duration-500 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          
          {/* Secondary Action Button */}
          <Link
            href="/register"
            className="group px-8 py-4 border-2 border-orange-500 text-orange-400 font-bold uppercase tracking-widest text-xs sm:text-sm transition-all duration-500 hover:bg-orange-500 hover:text-white hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] rounded-full w-full sm:w-auto flex justify-center items-center"
          >
            Register Interest
          </Link>

        </div>

      </div>

      {/* =========================================================
          SLIDER INDICATORS & SCROLL PROMPT
          ========================================================= */}
      <div className="absolute bottom-10 left-0 right-0 z-20 px-4 sm:px-8 flex justify-between items-end">
        
        {/* Slide Tracker */}
        <div className="flex items-center gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-500 rounded-full ${
                index === currentSlide 
                  ? "w-8 h-1.5 bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]" 
                  : "w-2 h-1.5 bg-blue-500/50 hover:bg-orange-400/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Down Indicator */}
        <div className="hidden sm:flex flex-col items-center gap-2 opacity-90">
          <span className="text-[9px] uppercase tracking-[0.3em] text-orange-400 font-bold rotate-90 mb-6">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-orange-500 to-transparent"></div>
        </div>

      </div>
    </section>
  );
}