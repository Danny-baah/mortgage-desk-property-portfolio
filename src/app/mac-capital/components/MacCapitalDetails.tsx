"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function MacCapitalDetails() {
  const images = [
    "/assets/mac capital/Picture2.jpg",
    "/assets/mac capital/Picture5.jpg",
    "/assets/mac capital/Picture7.jpg"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* =========================================================
             LEFT SIDE: Interactive Image Slider
             ========================================================= */}
          <div className="lg:col-span-7 relative h-[450px] md:h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl group border-4 border-slate-50">
            
            {/* Slider Images */}
            {images.map((src, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={src}
                  alt={`Mac Capital Property View ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}

            {/* Slider Controls (Show on Hover) */}
            <div className="absolute inset-0 z-20 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white/80 backdrop-blur text-blue-950 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors shadow-lg"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white/80 backdrop-blur text-blue-950 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors shadow-lg"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Slider Indicators */}
            <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide ? "w-8 h-2.5 bg-orange-500" : "w-2.5 h-2.5 bg-white/60 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* =========================================================
             RIGHT SIDE: Investment Profile & PDF Details
             ========================================================= */}
          <div className="lg:col-span-5 flex flex-col">
            
            <div className="bg-slate-50 p-8 md:p-10 rounded-[2rem] border border-slate-100 shadow-lg relative overflow-hidden">
              {/* Decorative Accent */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-900/5 rounded-full blur-2xl"></div>

              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 mb-2">
                Investment Profile
              </h2>
              <h3 className="text-3xl font-black text-blue-950 tracking-tight mb-8">
                Acquisition Details
              </h3>

              {/* Pricing Section */}
              <div className="mb-8 pb-8 border-b border-slate-200">
                <p className="text-sm text-slate-500 font-medium mb-1">Total Market Value</p>
                <h4 className="text-5xl font-black text-blue-900">
                  $165,000<span className="text-xl text-slate-400 font-medium">.00</span>
                </h4>
                
                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-green-50 text-green-700 text-xs font-bold border border-green-100">
                    <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Mortgage Accepted
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100">
                    <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Direct Payment Available
                  </span>
                </div>
              </div>

              {/* Specific Room Configurations from PDF */}
              <div className="space-y-6 mb-10">
                <div>
                  <h5 className="font-bold text-blue-950 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                    Master Area Config
                  </h5>
                  <ul className="text-sm text-slate-600 font-light space-y-1.5 pl-4 border-l border-slate-200 ml-1">
                    <li>• Fully Air-conditioned</li>
                    <li>• En-Suite Bathroom with hot and cold taps</li>
                    <li>• Luxury bathtub for relaxation</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold text-blue-950 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-900"></div>
                    Open Area Config
                  </h5>
                  <ul className="text-sm text-slate-600 font-light space-y-1.5 pl-4 border-l border-slate-200 ml-1">
                    <li>• Fully Air-conditioned layout</li>
                    <li>• Optimized perfectly for gatherings or family activities</li>
                  </ul>
                </div>
              </div>

              {/* Call to Action mapped to Registration */}
              <Link
                href="/register"
                className="w-full inline-flex items-center justify-center px-6 py-4 bg-blue-900 text-white rounded-xl font-bold transition-all duration-300 hover:bg-orange-500 shadow-xl hover:-translate-y-1 group"
              >
                Secure this Property
                <svg className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}