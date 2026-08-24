"use client";

import { useState } from "react";
import Image from "next/image";

const forteImages = [
  {
    src: "/assets/forte/THE-FORTE-Exterior-03-600x400.jpg",
    alt: "Forte Residences Architectural Exterior",
    gridClass: "md:col-span-2 md:row-span-2", // Primary Showcase
  },
  {
    src: "/assets/forte/kitchen.768x0-600x400.jpg",
    alt: "Masterfully Appointed Gourmet Kitchen",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/assets/forte/THE-FORTE-Interior-01-600x400.jpg",
    alt: "Lavish Open-Plan Living Space",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/assets/forte/THE-FORTE-Exterior-01-600x400.jpg",
    alt: "Contemporary Townhouse Frontage",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/assets/forte/THE-FORTE-Interior-02-600x400.jpg",
    alt: "Striking Contemporary Dining Interior",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/assets/forte/THE-FORTE-Exterior-02-600x400.jpg",
    alt: "Exclusive Gated Enclave Community View",
    gridClass: "md:col-span-2 md:row-span-1", // Horizontal Accent
  },
  {
    src: "/assets/forte/THE-FORTE-Interior-03-600x400.jpg",
    alt: "Serene Master Suite Bedroom Layout",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/assets/forte/THE-FORTE-Exterior-04-600x400.jpg",
    alt: "Striking Architecture & Landscaped Paths",
    gridClass: "md:col-span-1 md:row-span-1",
  }
];

export default function ForteGallery() {
  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextPhoto = () => {
    setPhotoIndex((prev) => (prev + 1) % forteImages.length);
  };

  const prevPhoto = () => {
    setPhotoIndex((prev) => (prev - 1 + forteImages.length) % forteImages.length);
  };

  return (
    <section id="forte-gallery" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================
            HEADER
            ========================================================= */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-px bg-blue-950"></span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Architecture & Design
              </span>
              <span className="w-8 h-px bg-blue-950"></span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#b5d334] uppercase tracking-tighter mb-6">
            The Forte <span className="text-[#b5d334]">Portfolio</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 font-light text-lg">
            Explore our architectural facades, meticulous interior treatments, and fluid, lifestyle-driven spaces.
          </p>
        </div>

        {/* =========================================================
            EDITORIAL MASONRY GRID
            ========================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]">
          {forteImages.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer shadow-lg shadow-blue-950/5 hover:shadow-2xl hover:shadow-orange-500/15 transition-all duration-500 bg-slate-100 ${image.gridClass}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Elegant Interactive Hover Overlay */}
              <div className="absolute inset-0 bg-blue-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <p className="text-white font-bold text-sm uppercase tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {image.alt}
                </p>
                <div className="w-8 h-0.5 bg-orange-500 mt-2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              {/* Minimal Expand Icon Overlay */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-5.25 5.25m-9.75 11.25v-4.5m0 4.5h4.5m-4.5 0L9 15m11.25 5.25v-4.5m0 4.5h-4.5m4.5 0-5.25-5.25" />
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* =========================================================
          LIGHTBOX MODAL
          ========================================================= */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-blue-950/95 backdrop-blur-lg flex flex-col justify-center items-center p-4 sm:p-8 animate-fadeIn">
          
          {/* Close Trigger */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center text-white transition-colors duration-300 shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Interactive Core Display */}
          <div className="relative w-full max-w-5xl h-[65vh] sm:h-[75vh] flex items-center justify-center">
            
            {/* Control Back */}
            <button 
              onClick={prevPhoto}
              className="absolute left-4 md:-left-16 z-[110] w-12 h-12 rounded-full bg-white text-blue-950 hover:bg-orange-500 hover:text-white flex items-center justify-center shadow-2xl transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Control Forward */}
            <button 
              onClick={nextPhoto}
              className="absolute right-4 md:-right-16 z-[110] w-12 h-12 rounded-full bg-white text-blue-950 hover:bg-orange-500 hover:text-white flex items-center justify-center shadow-2xl transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            <Image
              src={forteImages[photoIndex].src}
              alt={forteImages[photoIndex].alt}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Frame Info Panel */}
          <div className="text-center mt-6 text-white max-w-2xl px-4">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400 block mb-1">
              Asset {photoIndex + 1} of {forteImages.length}
            </span>
            <p className="text-base sm:text-lg font-light text-slate-200">
              {forteImages[photoIndex].alt}
            </p>
          </div>

        </div>
      )}

      {/* Internal Custom Animation Layer */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />
    </section>
  );
}