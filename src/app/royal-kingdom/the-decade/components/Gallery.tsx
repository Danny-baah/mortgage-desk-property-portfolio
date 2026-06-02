"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface GalleryPhoto {
  id: number;
  imageSrc: string;
}

// Placeholder array using The Decade asset paths
const decadeGalleryData: GalleryPhoto[] = [
  { id: 1, imageSrc: "/assets/the_decade/Picture73.jpg" },
  { id: 2, imageSrc: "/assets/the_decade/Picture75.jpg" },
  { id: 3, imageSrc: "/assets/the_decade/Picture72.jpg" },
  { id: 4, imageSrc: "/assets/the_decade/ph13 (1).jpg" },
  // Add more image paths as needed
  { id: 5, imageSrc: "/assets/the_decade/ph13 (2).jpg" },
  { id: 6, imageSrc: "/assets/the_decade/one.jpg" },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % decadeGalleryData.length : null,
    );
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) =>
      prev !== null
        ? (prev - 1 + decadeGalleryData.length) % decadeGalleryData.length
        : null,
    );
  };

  // Handle escape key to close lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const activePhoto =
    lightboxIndex !== null ? decadeGalleryData[lightboxIndex] : null;

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Soft Background Glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-lime-50 rounded-full blur-[100px] pointer-events-none opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-50 rounded-full blur-[100px] pointer-events-none opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* =========================================================
            HEADER SECTION
            ========================================================= */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs sm:text-sm font-black tracking-[0.3em] uppercase mb-3 text-[#ff8200]">
            Visual Tour
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase text-[#b5d334]">
            Property Gallery
          </h2>
          <div className="w-24 h-1 bg-[#ff8200] mx-auto mt-6 rounded-full" />
        </div>

        {/* =========================================================
            PHOTO GRID
            ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {decadeGalleryData.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-slate-50 border border-slate-100 hover:border-[#b5d334] shadow-sm hover:shadow-2xl transition-all duration-500 ease-in-out aspect-[4/3]"
            >
              {/* Main Image Layer */}
              <div className="relative w-full h-full">
                <Image
                  src={photo.imageSrc}
                  alt={`The Decade Property View ${photo.id}`}
                  fill
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                />
              </div>

              {/* Minimal Hover Overlay */}
              <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center backdrop-blur-[2px]">
                <div className="w-16 h-16 rounded-full bg-[#b5d334] flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-400">
                  <svg
                    className="w-8 h-8 text-black"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================
            LIGHTBOX MODAL
            ========================================================= */}
        {activePhoto && lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-6 transition-all duration-300"
            onClick={closeLightbox}
          >
            {/* Action Top Control Bar */}
            <div className="absolute top-0 inset-x-0 h-24 flex items-center justify-between px-6 sm:px-12 z-50 pointer-events-none">
              <div className="text-[#b5d334] text-sm font-black tracking-widest uppercase">
                {lightboxIndex + 1} / {decadeGalleryData.length}
              </div>
              <button
                className="pointer-events-auto text-white hover:text-[#ff8200] p-3 bg-white/10 rounded-full backdrop-blur-xl transition-all border border-white/20 hover:border-[#ff8200]/50"
                onClick={closeLightbox}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Slider Content Frame */}
            <div
              className="relative w-full max-w-6xl h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                onClick={showPrev}
                className="absolute left-2 sm:-left-16 top-1/2 -translate-y-1/2 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 text-white hover:text-black hover:bg-[#b5d334] flex items-center justify-center transition-all border border-white/10 backdrop-blur-lg"
              >
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src={activePhoto.imageSrc}
                  alt={`The Decade Property Expanded View ${activePhoto.id}`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Next Button */}
              <button
                onClick={showNext}
                className="absolute right-2 sm:-right-16 top-1/2 -translate-y-1/2 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 text-white hover:text-black hover:bg-[#b5d334] flex items-center justify-center transition-all border border-white/10 backdrop-blur-lg"
              >
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
