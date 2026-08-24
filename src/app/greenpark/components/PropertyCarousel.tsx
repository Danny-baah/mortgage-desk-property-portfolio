"use client";

import React, { useState } from "react";
import Image from "next/image";

// 1. Reusable Image Slider (Positioned at the Top of the Card)
interface CarouselProps {
  images: string[];
  propertyName: string;
}

function PropertyCarousel({ images, propertyName }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-64 sm:h-72 bg-slate-200 overflow-hidden group">
      {/* Sold Out Premium Badge */}
      <div className="absolute top-4 left-4 z-20 bg-black/80 text-white font-black text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded flex items-center gap-2 backdrop-blur-md">
        <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
        Sold Out
      </div>

      {/* Sliding Images Track */}
      <div
        className="w-full h-full flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, idx) => (
          <div key={idx} className="w-full h-full flex-shrink-0 relative">
            <Image
              src={src}
              alt={`${propertyName} - View ${idx + 1}`}
              fill
              sizes="(max-w-768px) 100vw, 33vw"
              className="object-cover object-center"
              priority={idx === 0}
            />
          </div>
        ))}
      </div>

      {/* Navigation Controls (Visible on hover) */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/90 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg hover:bg-[#b5d334]"
        aria-label="Previous image"
      >
        ←
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/90 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg hover:bg-[#b5d334]"
        aria-label="Next image"
      >
        →
      </button>

      {/* Bottom Dots */}
      <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentIndex === idx ? "w-4 bg-[#b5d334]" : "w-1.5 bg-white/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// 2. Main Grid Component
export default function GreenParkSoldOutGrid() {
  const soldOutProperties = [
    {
      name: "Redbury Vistas",
      location: "Airport Hills / Tse Addo",
      description:
        "Luxury residential development featuring 1-2 bed apartments. Set the standard for premium living in prime Accra.",
      highlights: ["Premium Living", "1-2 Bed Apartments"],
      images: [
        "/assets/greenpark/redbury_1_bed_1 (1).jpg",
        "/assets/greenpark/cherry_3_bed_sta_bed.jpg",
      ],
    },
    {
      name: "The Legacy",
      location: "East Legon, Accra",
      description:
        "GreenPark's debut luxury residential development of apartments & townhouses behind MDS Lancet. Generating rental income for owners.",
      highlights: ["Apartments & Townhouses", "High Rental Income"],
      images: [
        "/assets/greenpark/legacy-1.jpg",
        "/assets/greenpark/Legacy-real-8.jpg",
        "/assets/greenpark/legacy-3.jpg",
      ],
    },
    {
      name: "Preston Place",
      location: "Adjiringanor, East Legon",
      description:
        "Mixed residential development of apartments & townhouses. Units delivered 10-12% rental yield & 7-10% annual appreciation.",
      highlights: ["10-12% Rental Yield", "7-10% Appreciation"],
      images: [
        "/assets/greenpark/cherry_2_bed_living.jpg",
        "/assets/greenpark/cherry_3_bed_del_kitchen (1).jpg",
      ],
    },
  ];

  return (
    <section id="portfolio-completed" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center sm:text-left mb-16">
          <div className="inline-flex items-center gap-3 mb-4 justify-center sm:justify-start w-full">
            <span className="w-8 h-px bg-orange-500" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              Previous Projects
            </span>
          </div>
          {/* Main Heading changed to all green */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#b5d334] uppercase tracking-tighter">
            Completed & Sold Out
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto sm:mx-0">
            All previous projects are completely sold out—a testament to
            GreenPark's quality, trust, and market demand across prime Accra
            locations.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {soldOutProperties.map((property, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            >
              {/* TOP: Image Carousel */}
              <PropertyCarousel
                images={property.images}
                propertyName={property.name}
              />

              {/* BOTTOM: Text Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                {/* Location */}
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                  📍 {property.location}
                </span>

                {/* Column Title changed to green */}
                <h3 className="text-2xl font-black text-[#b5d334] uppercase tracking-tight mb-3">
                  {property.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                  {property.description}
                </p>

                {/* Highlights/Tags */}
                <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-2">
                  {property.highlights.map((highlight, hIdx) => (
                    <span
                      key={hIdx}
                      className="text-[10px] font-bold text-slate-700 bg-gray-100 px-3 py-1.5 rounded tracking-wide uppercase"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
