"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    title: "Unlock Premium Living",
    subtitle: "Access Bank provides the exclusive financial pathways and tailored mortgage solutions you need to acquire Ghana's most prestigious properties.",
    image: "/assets/access.jpg", 
    ctaText: "Contact Us",
    ctaLink: "/contact",
    btnColor: "bg-blue-900 hover:bg-blue-800"
  },
  {
    id: 2,
    title: "Devtraco Plus",
    subtitle: "Experience signature luxury and award-winning developments crafted for the modern visionary. Discover a new standard of living.",
    image: "/assets/devtraco.jpg", 
    ctaText: "Register Interest",
    ctaLink: "/register",
    btnColor: "bg-orange-500 hover:bg-orange-600"
  },
  {
    id: 3,
    title: "Quao Realties",
    subtitle: "Redefining urban elegance. Invest in architectural masterpieces that stand the test of time in prime locations.",
    image: "/assets/Manora.jpg", 
    ctaText: "Register Interest",
    ctaLink: "/register",
    btnColor: "bg-orange-500 hover:bg-orange-600"
  },
  {
    id: 4,
    title: "Mac Capital",
    subtitle: "Invest in unparalleled craftsmanship and high-yield residential havens designed for maximum comfort and return.",
    image: "/assets/mac-capital.jpg", 
    ctaText: "Register Interest",
    ctaLink: "/register",
    btnColor: "bg-orange-500 hover:bg-orange-600"
  },
  {
    id: 5,
    title: "Peregrino Properties",
    subtitle: "Discover bespoke living spaces where cutting-edge innovation meets everyday comfort and tranquility.",
    image: "/assets/peregrino.jpg", 
    ctaText: "Register Interest",
    ctaLink: "/register",
    btnColor: "bg-orange-500 hover:bg-orange-600"
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Ultra-slow auto-play: set to 15 seconds (15000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 15000); 
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <div className="relative w-full h-[75vh] min-h-[550px] overflow-hidden bg-gray-900">
      
      {/* Slides */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image Wrapper */}
          <div className="absolute inset-0 overflow-hidden">
            <Image 
              src={slide.image} 
              alt={slide.title}
              fill
              // Slowed down the Ken Burns zoom to match the 15-second timer
              className={`object-cover object-center transition-transform ease-linear duration-[15000ms] ${
                index === current ? 'scale-110' : 'scale-100'
              }`}
              priority={index === 0}
            />
            {/* Overlays */}
            <div className={`absolute inset-0 ${index === 0 ? 'bg-blue-900/60' : 'bg-black/50'}`}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          </div>

          {/* Slide Content */}
          <div className="relative z-20 h-full max-w-6xl mx-auto px-6 lg:px-8 flex flex-col justify-center">
            <div className={`max-w-2xl transform transition-all duration-1000 delay-300 ${
              index === current ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-5 leading-tight tracking-tight drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-100 mb-10 font-light leading-relaxed max-w-xl drop-shadow-md">
                {slide.subtitle}
              </p>
              <Link 
                href={slide.ctaLink}
                className={`inline-block px-10 py-4 rounded-full text-white font-bold tracking-wide shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ${slide.btnColor}`}
              >
                {slide.ctaText}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Left/Right Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-30 p-2.5 bg-white/10 hover:bg-white/30 text-white rounded-full backdrop-blur-md transition-all"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-30 p-2.5 bg-white/10 hover:bg-white/30 text-white rounded-full backdrop-blur-md transition-all"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Bottom Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? 'bg-orange-500 w-9' : 'bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
}