"use client";

import { useState } from "react";
import Image from "next/image";

// Inventory of all provided non-amenity images, with calculated aspect ratios for the masonry grid
const arloImages = [
  {
    src: "/assets/arlo/arlo-image-975-x-620.jpg",
    alt: "Arlo Cantonments Architectural Exterior",
    className: "col-span-2 row-span-2", // Large Featured Image
  },
  {
    src: "/assets/arlo/Studio-1.jpg",
    alt: "Arlo Studio Residence Open Plan",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/assets/arlo/One-Bed-1.jpg",
    alt: "Arlo One Bedroom Living Area",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/assets/arlo/Two-Bed-1.jpg",
    alt: "Arlo Two Bedroom En-suite",
    className: "col-span-1 row-span-2", // Vertical Image
  },
  {
    src: "/assets/arlo/Penthouse-2.jpg",
    alt: "Arlo Penthouse Master Bedroom",
    className: "col-span-2 row-span-1", // Horizontal Image
  },
  {
    src: "/assets/arlo/Studio-2.jpg",
    alt: "Arlo Studio Smart Storage Solutions",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/assets/arlo/pexels-mateusz-pielech-1032276948-33054903.jpg", // Kept exact user filename
    alt: "Arlo Penthouse Panoramic View Terrace",
    className: "col-span-2 row-span-2", // Large Featured Image
  },
  {
    src: "/assets/arlo/One-Bed-2.jpg",
    alt: "Arlo One Bedroom Modern Kitchen",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/assets/arlo/studio-Bed-1.jpg",
    alt: "Arlo Studio Sleeping Area",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/assets/arlo/Two-Bed-2.jpg",
    alt: "Arlo Two Bedroom Welcoming Lounge",
    className: "col-span-1 row-span-1",
  },
];

export default function ArloGallery() {
  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setIsOpen(false);
    // Re-enable scrolling
    document.body.style.overflow = "auto";
  };

  const nextPhoto = () => {
    setPhotoIndex((prev) => (prev + 1) % arloImages.length);
  };

  const prevPhoto = () => {
    setPhotoIndex((prev) => (prev - 1 + arloImages.length) % arloImages.length);
  };

  return (
    <section id="arlo-gallery" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      
      {/* Visual Accents */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-orange-100 rounded-full blur-[100px] pointer-events-none opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================
            HEADER
            ========================================================= */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-px bg-blue-950"></span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-950">
                Visual Experience
              </span>
              <span className="w-8 h-px bg-blue-950"></span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-blue-950 uppercase tracking-tighter mb-6">
            Inside <span className="text-orange-500">Arlo</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 font-light text-lg">
            A curated look into the deliberate design, premium finishes, and effortless balance of Arlo's residential collections.
          </p>
        </div>

        {/* =========================================================
            MASONRY GRID
            ========================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[250px]">
          {arloImages.map((image, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer shadow-lg shadow-blue-950/5 hover:shadow-2xl hover:shadow-orange-500/15 transition-all duration-500 bg-slate-100 ${image.className}`}
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-w-768px) 50vw, (max-w-1200px) 33vw, 25vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlays */}
              <div className="absolute inset-0 bg-blue-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Plus Icon Accent */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>

              {/* Bottom Orange Line Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

      </div>

      {/* =========================================================
          LIGHTBOX OVERLAY
          ========================================================= */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-blue-950/95 backdrop-blur-lg flex flex-col justify-center items-center p-4 sm:p-8 animate-fadeIn">
          
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-110 w-12 h-12 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center text-white transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Main Image Container */}
          <div className="relative w-full max-w-7xl h-[70vh] sm:h-[80vh] flex items-center justify-center">
            
            {/* Previous Button */}
            <button 
              onClick={prevPhoto}
              className="absolute left-0 z-110 -translate-x-1/2 w-14 h-14 rounded-full bg-white text-blue-950 hover:bg-orange-500 hover:text-white flex items-center justify-center shadow-2xl transition-all duration-300 hidden md:flex"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Next Button */}
            <button 
              onClick={nextPhoto}
              className="absolute right-0 z-110 translate-x-1/2 w-14 h-14 rounded-full bg-white text-blue-950 hover:bg-orange-500 hover:text-white flex items-center justify-center shadow-2xl transition-all duration-300 hidden md:flex"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            <Image
              src={arloImages[photoIndex].src}
              alt={arloImages[photoIndex].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Caption & Counter */}
          <div className="text-center mt-8 text-white max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-orange-400 mb-1">
              Image {photoIndex + 1} of {arloImages.length}
            </p>
            <p className="text-lg font-light">
              {arloImages[photoIndex].alt}
            </p>
          </div>

          {/* Mobile Navigation */}
          <div className="flex gap-4 mt-6 md:hidden">
            <button onClick={prevPhoto} className="px-6 py-2 bg-white text-blue-950 rounded-full text-sm font-bold">Prev</button>
            <button onClick={nextPhoto} className="px-6 py-2 bg-white text-blue-950 rounded-full text-sm font-bold">Next</button>
          </div>

        </div>
      )}

      {/* Basic animation CSS for fadeIn */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}} />
    </section>
  );
}