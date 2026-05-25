"use client";

import { useState } from "react";
import Image from "next/image";

// Image Inventory specifically for Woodlands with targeted alt text
const woodlandsVisuals = [
  {
    id: "master-plan",
    src: "/assets/woodlands/Picture1.png",
    alt: "Devtraco Woodlands Master Plan - Aerial Ecosystem View",
  },
  {
    id: "clubhouse-social",
    src: "/assets/woodlands/Clubhouse.png",
    alt: "The Premium Community Clubhouse & Recreation Hub",
  },
  {
    id: "residential-street",
    src: "/assets/woodlands/Picture2.png",
    alt: "Secure & Serene Residential Street Scene",
  },
  {
    id: "lush-scenery",
    src: "/assets/woodlands/Picture3.png",
    alt: "Tranquil Green Spaces and Manicured Gardens",
  },
  {
    id: "tarred-roads",
    src: "/assets/woodlands/Services-Asphalt-Roads-New.png",
    alt: "High-Durability Asphalt Infrastructure",
  },
];

export default function WoodlandsGallery() {
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
    setPhotoIndex((prev) => (prev + 1) % woodlandsVisuals.length);
  };

  const prevPhoto = () => {
    setPhotoIndex((prev) => (prev - 1 + woodlandsVisuals.length) % woodlandsVisuals.length);
  };

  return (
    <section id="woodlands-gallery" className="pb-24 sm:pb-32 pt-16 bg-white relative overflow-hidden">
      
      {/* Background organic blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-50 rounded-full blur-[150px] pointer-events-none opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================
            CENTERED HEADER
            ========================================================= */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-px bg-emerald-600"></span>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600">
                Visual Portfolio
              </span>
              <span className="w-8 h-px bg-emerald-600"></span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-blue-950 uppercase tracking-tighter mb-6 leading-none shadow-orange-500/10">
            A Living <span className="text-orange-500">Masterpiece</span>
          </h2>
          <p className="text-slate-600 font-light text-base sm:text-lg mx-auto max-w-lg">
            Explore the harmonious blend of modern infrastructure, lush natural ecosystems, and elite community lifestyle amenities.
          </p>
        </div>

        {/* =========================================================
            EDITORIAL BENTO GRID (Symmetrical & Balanced)
            ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-5">
          
          {/* 1. Feature Vertical Image (Picture1.png - Aerial/Master Plan) */}
          {woodlandsVisuals.slice(0, 1).map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(index)}
              className="relative md:col-span-2 md:row-span-2 group overflow-hidden rounded-2xl cursor-pointer shadow-xl shadow-blue-950/5 border border-slate-100/60 bg-slate-50 aspect-[4/5] md:aspect-auto"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Dynamic Emerald Vignette on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-blue-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <p className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                  {image.alt}
                </p>
              </div>
              <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                <span className="text-white font-light text-xl">+</span>
              </div>
            </div>
          ))}

          {/* 2-5. Detail Grid Images (2x2 Balanced) */}
          {woodlandsVisuals.slice(1).map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(index + 1)} // Adjusted index for sliced array
              className="relative group overflow-hidden rounded-2xl cursor-pointer shadow-lg shadow-blue-950/5 border border-slate-100/60 bg-slate-50 aspect-[4/3]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-w-768px) 100vw, (max-w-1024px) 33vw, 25vw"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                <p className="text-white font-semibold text-xs uppercase tracking-wide translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                  {image.alt}
                </p>
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                <span className="text-white font-light text-xl">+</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* =========================================================
          SIMPLIFIED LIGHTBOX MODAL OVERLAY
          ========================================================= */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-blue-950/98 backdrop-blur-lg flex flex-col justify-center items-center animate-fadeIn p-4 sm:p-10">
          
          {/* Close Trigger */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-[110] w-12 h-12 rounded-full bg-white/5 hover:bg-orange-500 flex items-center justify-center text-white transition-colors duration-300"
          >
            <span className="text-3xl font-light">×</span>
          </button>

          {/* Core Display with Mobile Tap Nav */}
          <div className="relative w-full max-w-7xl h-[70vh] sm:h-[80vh] flex items-center justify-center group">
            
            {/* Nav Backward */}
            <button 
              onClick={prevPhoto}
              className="absolute left-4 z-[110] w-14 h-14 rounded-full bg-white/5 text-white/50 hover:bg-white hover:text-blue-950 flex items-center justify-center shadow-2xl transition-all duration-300 md:-translate-x-1/2 opacity-0 group-hover:opacity-100"
            >
              <span className="text-3xl font-light relative -left-0.5">‹</span>
            </button>

            {/* Nav Forward */}
            <button 
              onClick={nextPhoto}
              className="absolute right-4 z-[110] w-14 h-14 rounded-full bg-white/5 text-white/50 hover:bg-white hover:text-blue-950 flex items-center justify-center shadow-2xl transition-all duration-300 md:translate-x-1/2 opacity-0 group-hover:opacity-100"
            >
              <span className="text-3xl font-light relative -right-0.5">›</span>
            </button>

            <Image
              src={woodlandsVisuals[photoIndex].src}
              alt={woodlandsVisuals[photoIndex].alt}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Caption Panel (Balanced Bottom) */}
          <div className="text-center mt-10 text-white max-w-xl px-4 border-t border-white/10 pt-6">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-2">
              Visual {photoIndex + 1} // {woodlandsVisuals.length}
            </span>
            <p className="text-sm sm:text-base font-light text-slate-100 leading-relaxed">
              {woodlandsVisuals[photoIndex].alt}
            </p>
          </div>

          {/* Simple Mobile Tap Hint (Visible on small screens) */}
          <div className="flex md:hidden gap-4 mt-8">
            <button onClick={prevPhoto} className="px-6 py-2 bg-white/10 text-white rounded-full text-xs font-bold uppercase tracking-widest border border-white/10">Prev</button>
            <button onClick={nextPhoto} className="px-6 py-2 bg-white/10 text-white rounded-full text-xs font-bold uppercase tracking-widest border border-white/10">Next</button>
          </div>

        </div>
      )}

      {/* Internal stylesheet layer */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }
      `}} />
    </section>
  );
}