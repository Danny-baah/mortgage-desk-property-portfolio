"use client";

import { useState } from "react";
import Image from "next/image";

// Compilation of ALL provided images for The Address with tailored grid mapping
const addressVisualInventory = [
  {
    id: "day-landscape",
    src: "/assets/the-address/The Address Hotel_ORA_ Exterior 02 Landscape_Day.jpg",
    alt: "The Address Architectural Landmark - Grand Day Perspective",
    // Layout priority: Horizontal Feature
    gridClasses: "md:col-span-3 md:row-span-2", 
  },
  {
    id: "residential-tower",
    src: "/assets/the-address/Residential_Big_Image.jpg",
    alt: "The Address Residential Tower - Vertical Scope",
    // Layout priority: Vertical Feature
    gridClasses: "md:col-span-1 md:row-span-2",
  },
  {
    id: "hotel-tower",
    src: "/assets/the-address/Hotel_Big-_Image.jpg",
    alt: "The Address Hotel & Serviced Apartments Exterior",
    gridClasses: "md:col-span-2 md:row-span-2",
  },
  {
    id: "night-landscape",
    src: "/assets/the-address/The Address Hotel_ORA_ Exterior 02 Landscape_Night.jpg",
    alt: "The Address Architectural Illumination - Night Perspective",
    // Layout priority: Horizontal Accent
    gridClasses: "md:col-span-2 md:row-span-2",
  },
  {
    id: "vacation-tower",
    src: "/assets/the-address/VacationBig_Image_v.jpg",
    alt: "The Address Vacation Units & Short-Stay Tower",
    // Completes the grid flow
    gridClasses: "md:col-span-2 md:row-span-2",
  }
];

export default function AddressGallery() {
  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextPhoto = () => {
    setPhotoIndex((prev) => (prev + 1) % addressVisualInventory.length);
  };

  const prevPhoto = () => {
    setPhotoIndex((prev) => (prev - 1 + addressVisualInventory.length) % addressVisualInventory.length);
  };

  return (
    <section id="address-gallery" className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden">
      
      {/* Background Institutional Braning Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] text-blue-950 pointer-events-none overflow-hidden text-7xl font-black uppercase tracking-tighter grid grid-cols-2 gap-10">
         <div className="whitespace-nowrap">THE ADDRESS 01 • ACCRA 02</div>
         <div className="whitespace-nowrap translate-x-20">ACCRA 02 • THE ADDRESS 01</div>
         <div className="whitespace-nowrap -translate-x-10">THE ADDRESS 01 • ACCRA 02</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================
            HEADER
            ========================================================= */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-px bg-blue-950"></span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Visual Portfolio
              </span>
              <span className="w-8 h-px bg-blue-950"></span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#b5d334] uppercase tracking-tighter mb-6 leading-none shadow-orange-500/10">
            A New Standard <br />
            <span className="text-[#b5d334]">In Accra</span>
          </h2>
          <p className="text-slate-600 font-light text-lg">
            Explore the multi-tower architecture, meticulously engineered to combine elite professional residency with high-yield capital performance.
          </p>
        </div>

        {/* =========================================================
            COMPLEX MASONRY GRID
            ========================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 md:auto-rows-[160px] lg:auto-rows-[190px] gap-4 md:gap-5">
          {addressVisualInventory.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(index)}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer shadow-lg shadow-blue-950/5 hover:shadow-2xl hover:shadow-orange-500/15 transition-all duration-500 bg-slate-100 border border-slate-200/50 ${image.gridClasses}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-w-768px) 50vw, (max-w-1024px) 33vw, 25vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Premium Interaction Vignette Overlay */}
              <div className="absolute inset-0 bg-blue-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                <p className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                  {image.alt}
                </p>
              </div>

              {/* Minimalist Plus Icon Accent */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 shadow-xl shadow-black/20">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* =========================================================
          LIGHTBOX MODAL OVERLAY
          ========================================================= */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-blue-950/95 backdrop-blur-lg flex flex-col justify-center items-center p-4 sm:p-8 animate-fadeIn">
          
          {/* Close Trigger (X) */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center text-white transition-colors duration-300 shadow-lg border border-white/20"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Interactive Core Display */}
          <div className="relative w-full max-w-7xl h-[70vh] sm:h-[80vh] flex items-center justify-center">
            
            {/* Control Backward */}
            <button 
              onClick={prevPhoto}
              className="absolute left-0 z-[110] -translate-x-1/2 w-14 h-14 rounded-full bg-white text-blue-950 hover:bg-orange-500 hover:text-white flex items-center justify-center shadow-2xl transition-all duration-300 hidden md:flex"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Control Forward */}
            <button 
              onClick={nextPhoto}
              className="absolute right-0 z-[110] translate-x-1/2 w-14 h-14 rounded-full bg-white text-blue-950 hover:bg-orange-500 hover:text-white flex items-center justify-center shadow-2xl transition-all duration-300 hidden md:flex"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            <Image
              src={addressVisualInventory[photoIndex].src}
              alt={addressVisualInventory[photoIndex].alt}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Asset Meta Info Panel */}
          <div className="text-center mt-8 text-white max-w-2xl px-4 border-t border-white/10 pt-6">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400 block mb-1">
              Asset {photoIndex + 1} of {addressVisualInventory.length} • The Address
            </span>
            <p className="text-base sm:text-lg font-light text-slate-100">
              {addressVisualInventory[photoIndex].alt}
            </p>
          </div>

          {/* Mobile Tap Navigation */}
          <div className="flex gap-4 mt-6 md:hidden">
            <button onClick={prevPhoto} className="px-5 py-2.5 bg-white text-blue-950 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 shadow-lg">Prev</button>
            <button onClick={nextPhoto} className="px-5 py-2.5 bg-white text-blue-950 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 shadow-lg">Next</button>
          </div>

        </div>
      )}

      {/* Internal stylesheet layer for fadeIn */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />
    </section>
  );
}