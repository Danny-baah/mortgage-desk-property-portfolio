"use client";

import { useState } from "react";
import Image from "next/image";

const galleryItems = [
  // THE NILE
  {
    src: "/assets/atta-doku/The-Nile-1.jpg",
    alt: "The Nile - Modern Semi-Detached Facade View",
    category: "nile",
    title: "The Nile Exterior"
  },
  {
    src: "/assets/atta-doku/The-Nile-2.jpg",
    alt: "The Nile - Architectural Elevation Perspective",
    category: "nile",
    title: "The Nile Elevation"
  },
  {
    src: "/assets/atta-doku/The-Nile-3.jpg",
    alt: "The Nile - Interior Living Area Architecture",
    category: "interiors",
    title: "The Nile Interior Living"
  },
  {
    src: "/assets/atta-doku/The-Nile-4.jpg",
    alt: "The Nile - Premium Floor Plan & Layout Blueprint",
    category: "nile",
    title: "The Nile Layout"
  },
  
  // THE DENSU
  {
    src: "/assets/atta-doku/1.-The-Densu.jpg",
    alt: "The Densu - Executive Detached Premium Facade View 1",
    category: "densu",
    title: "The Densu Front Elevation"
  },
  {
    src: "/assets/atta-doku/2.-The-Densu.jpg",
    alt: "The Densu - Executive Detached Side View 2",
    category: "densu",
    title: "The Densu Side Profile"
  },
  {
    src: "/assets/atta-doku/3.-The-Densu.jpg",
    alt: "The Densu - Exterior Perspective Angle 3",
    category: "densu",
    title: "The Densu Architecture"
  },
  {
    src: "/assets/atta-doku/5.-The-Densu.jpg",
    alt: "The Densu - Scenic Landscape Estate Render 5",
    category: "densu",
    title: "The Densu Landscape"
  },
  {
    src: "/assets/atta-doku/interior-collage-1.jpg",
    alt: "The Densu - Curated Premium Living Room & Kitchen Showcase",
    category: "interiors",
    title: "The Densu Living Showcase"
  },

  // THE PACIFIC
  {
    src: "/assets/atta-doku/Pacific-1.jpg",
    alt: "The Pacific - Luxury Flagship Model Front Facade View 1",
    category: "pacific",
    title: "The Pacific Flagship"
  },
  {
    src: "/assets/atta-doku/Pacific-2.jpg",
    alt: "The Pacific - Luxury Flagship Estate Perspective View 2",
    category: "pacific",
    title: "The Pacific Perspective"
  },
  {
    src: "/assets/atta-doku/Pacific-3.jpg",
    alt: "The Pacific - Luxury Flagship Rear/Side View 3",
    category: "pacific",
    title: "The Pacific Courtyard View"
  },
  {
    src: "/assets/atta-doku/Pacific-4.jpg",
    alt: "The Pacific - Luxury Flagship Rooftop Terrace Angle 4",
    category: "pacific",
    title: "The Pacific Rooftop Vista"
  },
  {
    src: "/assets/atta-doku/Interior-2.jpg",
    alt: "The Pacific - Elegant Master Interior Living Room & Lounge",
    category: "interiors",
    title: "The Pacific Grand Lounge"
  }
];

const categories = [
  { id: "all", label: "All Masterpieces" },
  { id: "nile", label: "The Nile" },
  { id: "densu", label: "The Densu" },
  { id: "pacific", label: "The Pacific" },
  { id: "interiors", label: "Interior Concepts" }
];

export default function AttaDokuGallery() {
  const [filter, setFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items based on selected tab category
  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const openLightbox = (src: string) => {
    const globalIdx = galleryItems.findIndex(item => item.src === src);
    if (globalIdx !== -1) setLightboxIndex(globalIdx);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryItems.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decorative Gradient Radial flares */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-950/40 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-orange-950/20 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-full mb-4 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
              Visual Exhibition
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4 uppercase">
            Project Gallery
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-light">
            Immerse yourself in full high-definition conceptual renderings and spatial layout architectures of Atta Doku Meadows.
          </p>
        </div>

        {/* CONTROLS CATEGORY TABS BAR */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2.5 rounded-xl font-bold tracking-wide text-xs uppercase transition-all duration-300 border ${
                filter === cat.id
                  ? "bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-500/20"
                  : "bg-slate-800/60 border-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* DYNAMIC GALLERIES PHOTO GRID LAYOUT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              onClick={() => openLightbox(item.src)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-800 border border-slate-800 cursor-pointer shadow-md transition-all duration-500 hover:-translate-y-1 hover:border-slate-700"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              />
              
              {/* Overlay Glass Frame on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
                <span className="text-[10px] font-bold tracking-widest text-orange-400 uppercase mb-1">
                  {item.category === "interiors" ? "Interior Concept" : `Model Focus`}
                </span>
                <h4 className="text-base font-black text-white uppercase tracking-tight line-clamp-1">
                  {item.title}
                </h4>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                  <span>View Full Screen</span>
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>

              {/* Minimal floating zoom icon for utility indicators */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-slate-950/60 text-white backdrop-blur-md rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm border border-white/5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* =========================================================
         LIGHTBOX FULL-SCREEN INTERACTIVE OVERLAY WINDOW MODAL
         ========================================================= */}
      {lightboxIndex !== null && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 transition-all duration-300 animate-fadeIn"
        >
          {/* Close Header button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/5 text-white hover:bg-orange-500 rounded-full flex items-center justify-center border border-white/10 transition-colors shadow-lg group focus:outline-none"
            aria-label="Close Lightbox"
          >
            <svg className="w-6 h-6 transition-transform duration-200 group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Core Interactive Display Framer */}
          <div className="relative w-full max-w-5xl aspect-[4/3] sm:aspect-[16/10] max-h-[75vh] flex items-center justify-center">
            
            {/* Nav Arrows Left */}
            <button 
              onClick={prevImage}
              className="absolute left-2 sm:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/5 text-white hover:bg-orange-500 rounded-full flex items-center justify-center border border-white/10 transition-all shadow-lg z-50 focus:outline-none"
              aria-label="Previous Image"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Main Img Wrapper */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
              <Image
                src={galleryItems[lightboxIndex].src}
                alt={galleryItems[lightboxIndex].alt}
                fill
                priority
                className="object-contain p-2"
              />
            </div>

            {/* Nav Arrows Right */}
            <button 
              onClick={nextImage}
              className="absolute right-2 sm:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/5 text-white hover:bg-orange-500 rounded-full flex items-center justify-center border border-white/10 transition-all shadow-lg z-50 focus:outline-none"
              aria-label="Next Image"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Descriptive Information Lower Banner Caption Bar */}
          <div className="text-center mt-6 max-w-2xl px-4 select-none">
            <h4 className="text-lg font-black tracking-tight text-white uppercase">
              {galleryItems[lightboxIndex].title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-light mt-1.5 leading-relaxed">
              {galleryItems[lightboxIndex].alt}
            </p>
            <div className="inline-block mt-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
              Asset Image {lightboxIndex + 1} of {galleryItems.length}
            </div>
          </div>

        </div>
      )}
    </section>
  );
}