"use client";

import { useState } from "react";
import Image from "next/image";

export default function ShelterMartGallery() {
  // Generate all 24 image paths, ensuring Picture6 and Picture21 use .png while others use .jpeg
  const totalImages = Array.from({ length: 24 }, (_, i) => {
    const imageNumber = i + 1;
    const extension = imageNumber === 6 || imageNumber === 21 ? "png" : "jpeg";
    return `/assets/shelter/Picture${imageNumber}.${extension}`;
  });

  // State to control how many images are visible at a go
  const [visibleCount, setVisibleCount] = useState(8);

  // Handler to load the next block of 8 images
  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gallery Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-1 bg-[#ff8200] rounded-full"></span>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500 ">
              Visual Tour
            </span>
            <span className="w-8 h-1 bg-[#ff8200] rounded-full"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#b5d334] tracking-tight mb-6">
            Property Gallery
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Take a glimpse into the premium residential and commercial spaces
            managed and delivered by Shelter Mart Properties.
          </p>
        </div>

        {/* Responsive Grid layout showing only sliced active items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {totalImages.slice(0, visibleCount).map((src, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-sm bg-gray-100 aspect-[4/3] cursor-pointer border border-gray-100"
            >
              <Image
                src={src}
                alt={`Shelter Mart Property View ${index + 1}`}
                fill
                sizes="(max-w-768px) 100vw, (max-w-1024px) 50vw, 25vw"
                className="object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                priority={index < 4}
              />

              {/* Deep Navy Blue Overlay on Hover */}
              <div className="absolute inset-0 bg-blue-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#b5d334] flex items-center justify-center text-blue-950 shadow-lg">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button: Disappears cleanly when visibleCount hits or exceeds 24 */}
        {visibleCount < totalImages.length && (
          <div className="mt-16 text-center">
            <button
              type="button"
              onClick={handleViewMore}
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-blue-950 text-blue-950 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:bg-blue-950 hover:text-white shadow-sm hover:scale-105 active:scale-95"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
