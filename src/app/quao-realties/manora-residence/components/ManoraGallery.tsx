"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  {
    src: "/assets/quao/Manora.jpg",
    title: "Main Exterior Elevation",
    category: "Architecture",
    aspect: "aspect-[16/10]" // Landscape for standard grid
  },
  {
    src: "/assets/quao/Manora_EXT_-Entrance-Lobby.jpg",
    title: "Entrance Lobby Experience",
    category: "Interiors",
    aspect: "aspect-[4/5]" // Portrait for masonry break
  },
  {
    src: "/assets/quao/Manora_INT_-Studio-1.jpg",
    title: "Studio Interior Concept",
    category: "Interiors",
    aspect: "aspect-[16/11]"
  },
  {
    src: "/assets/quao/Manora_INT_-2BD-Living.jpg",
    title: "1-3 Bed Living Area",
    category: "Interiors",
    aspect: "aspect-[4/3]"
  },
  {
    src: "/assets/quao/Manora_INT_-Penthouse.jpg",
    title: "The Penthouse View",
    category: "Exclusives",
    aspect: "aspect-[16/9]"
  }
];

export default function ManoraGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden">
      
      {/* Decorative Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
       
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-px bg-orange-500"></span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Visual Experience
              </span>
              <span className="w-8 h-px bg-orange-500"></span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#b5d334] uppercase tracking-tight">
            Manora <span className="text-[#b5d334]">Gallery</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-light">
            Immerse yourself in full-high-definition conceptual renderings and explore the sophisticated architecture and interior designs of Manora Residences.
          </p>
        </div>

        {/* =========================================================
            MASONRY/GRID INTERACTIVE LAYOUT
            ========================================================= */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, index) => (
            <div 
              key={index}
              onClick={() => openLightbox(index)}
              className={`relative ${image.aspect} w-full rounded-2xl overflow-hidden shadow-xl shadow-blue-950/5 group cursor-pointer border border-white`}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Glass Frame on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-[10px] font-bold tracking-widest text-orange-400 uppercase mb-1">
                  {image.category}
                </span>
                <h4 className="text-base font-black text-white uppercase tracking-tight line-clamp-1">
                  {image.title}
                </h4>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                  <span>View Full Screen</span>
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>

              {/* Minimal floating zoom icon */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 text-white backdrop-blur-sm rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-inner">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* =========================================================
         LIGHTBOX FULL-SCREEN INTERACTIVE OVERLAY
         ========================================================= */}
      {lightboxIndex !== null && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-[100] bg-blue-950/95 backdrop-blur-2xl flex flex-col items-center justify-center p-4 transition-all duration-300 animate-fadeIn"
        >
          {/* Close button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 text-white hover:bg-orange-500 rounded-full flex items-center justify-center border border-white/10 transition-colors shadow-lg group focus:outline-none"
            aria-label="Close Lightbox"
          >
            <svg className="w-6 h-6 transition-transform duration-200 group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Interactive display area */}
          <div className="relative w-full max-w-7xl aspect-[16/10] max-h-[85vh] flex items-center justify-center">
            
            {/* Nav Arrow Prev */}
            <button 
              onClick={prevImage}
              className="absolute left-2 sm:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 text-white hover:bg-orange-500 rounded-full flex items-center justify-center border border-white/10 transition-all shadow-lg z-50 focus:outline-none"
              aria-label="Previous Image"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Img Wrapper */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-blue-900 border border-blue-900">
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].title}
                fill
                priority
                className="object-contain p-2"
              />
            </div>

            {/* Nav Arrow Next */}
            <button 
              onClick={nextImage}
              className="absolute right-2 sm:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 text-white hover:bg-orange-500 rounded-full flex items-center justify-center border border-white/10 transition-all shadow-lg z-50 focus:outline-none"
              aria-label="Next Image"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Descriptive Information Lower Banner */}
          <div className="text-center mt-6 max-w-2xl px-4 select-none">
            <h4 className="text-lg font-black tracking-tight text-white uppercase">
              {images[lightboxIndex].title}
            </h4>
            <div className="inline-block mt-4 text-[10px] font-bold text-orange-400 uppercase tracking-widest bg-blue-950 px-3 py-1 rounded-full border border-blue-900">
              Asset Image {lightboxIndex + 1} of {images.length}
            </div>
          </div>

        </div>
      )}
    </section>
  );
}