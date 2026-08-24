"use client";

import React, { useState } from "react";
import Image from "next/image";

// 1. Reusable Image Slider (Tailored for a 50/50 Split Layout)
interface CarouselProps {
  images: string[];
  propertyName: string;
}

function HalfColumnCarousel({ images, propertyName }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[400px] lg:h-[550px] bg-slate-200 overflow-hidden group rounded-2xl shadow-lg">
      {/* High-Impact "Now Selling" Badge (Using Secondary Color: #f82000) */}
      <div className="absolute top-6 left-6 z-20 bg-[#f82000] text-white font-black text-[10px] uppercase tracking-[0.2em] px-4 py-2 rounded shadow-xl flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
        Now Selling
      </div>

      {/* Sliding Images Track */}
      <div
        className="w-full h-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, idx) => (
          <div key={idx} className="w-full h-full flex-shrink-0 relative">
            <Image
              src={src}
              alt={`${propertyName} - View ${idx + 1}`}
              fill
              sizes="(max-w-1024px) 100vw, 50vw"
              className="object-cover object-center"
              priority={idx === 0}
            />
            {/* Subtle inner gradient for premium framing */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl hover:bg-[#b5d334] hover:scale-110"
        aria-label="Previous image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl hover:bg-[#b5d334] hover:scale-110"
        aria-label="Next image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Bottom Dots */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2.5">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 shadow-sm ${
              currentIndex === idx
                ? "w-6 bg-[#b5d334]"
                : "w-2 bg-white/70 hover:bg-white"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// 2. Main Ongoing Projects Component
export default function GreenParkOngoingProjects() {
  const ongoingProjects = [
    {
      name: "Cherry's Green",
      location: "CFC Estates, Achimota",
      price: "Starting from $78,000",
      status: "Phase 1 (95% SOLD) • Phase 2 (50% SOLD)",
      inventory: "45 Apartments & 13 Townhouses",
      features: [
        "1 & 2-Bed Apartments",
        "2-3 Bed Townhouses",
        "Gym + Pool",
        "24hr Security & Backup Power",
      ],
      images: [
        "/assets/greenpark/cherry_2_bed_1.jpg",
        "/assets/greenpark/cherry_2_bed_bed.jpg",
        "/assets/greenpark/cherry_3_bed_del_1.jpg",
        "/assets/greenpark/cherry_3_bed_stand_1.jpg",
        "/assets/greenpark/cherry_4_bed_2.jpg",
        "/assets/greenpark/cherry_4_bed_bed.jpg",
        "/assets/greenpark/cherry_4_bed_kitchen.jpg",
        "/assets/greenpark/cherry-apartments_2 (1).jpg",
        "/assets/greenpark/cherry-apartments_bedroom.jpg",
        "/assets/greenpark/cherry-apartments_living.jpg",
        "/assets/greenpark/cherry-Semi_Detached_1.jpg",
        "/assets/greenpark/cherry_3_bed_del_kitchen (1).jpg",
      ],
    },
    {
      name: "Haven Gardens",
      location: "Adjiringanor, East Legon",
      price: "Starting from $90,000",
      status: "Phase 1 (95% SOLD) • Phase 2 (60% SOLD)",
      inventory: "Mixed-use units | 58 Apartments & 4 Townhouses",
      features: [
        "1-3 Bed Apartments incl. Penthouse",
        "4 Bed Townhouses + BQ",
        "Swimming Pool & Gym",
        "Premium East Legon Location",
      ],
      images: [
        "/assets/greenpark/haven_2.jpg",
        "/assets/greenpark/haven_3.jpg",
        "/assets/greenpark/haven_7.jpg",
        "/assets/greenpark/haven_12.jpg",
        "/assets/greenpark/haven_9.jpg",
        "/assets/greenpark/haven_10.jpg",
        "/assets/greenpark/haven_11.jpg",
        "/assets/greenpark/haven_6.jpg",
      ],
    },
  ];

  return (
    <section
      id="now-selling"
      className="py-24 sm:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-4 justify-center w-full">
            <span className="w-8 h-px bg-orange-500" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              Current & Ongoing
            </span>
            <span className="w-8 h-px bg-orange-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#b5d334] uppercase tracking-tighter">
            Now Selling
          </h2>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg font-light">
            Secure your unit in our latest premium developments before they sell
            out. Enjoy luxury living with high capital appreciation potential.
          </p>
        </div>

        {/* Projects List (Alternating 2-Column Layout) */}
        <div className="space-y-24 lg:space-y-32">
          {ongoingProjects.map((project, idx) => {
            // Determine layout direction based on index (even = image left, odd = image right)
            const isImageRight = idx % 2 !== 0;

            return (
              <div
                key={idx}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${
                  isImageRight ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Column 1: Carousel Slider */}
                <div className="w-full lg:w-1/2">
                  <HalfColumnCarousel
                    images={project.images}
                    propertyName={project.name}
                  />
                </div>

                {/* Column 2: Project Specifications Data Card */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  {/* Sales Status Bar */}
                  <div className="inline-flex items-center gap-2.5 bg-slate-100 border border-slate-200 px-4 py-2 rounded-full mb-6 w-max">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b5d334] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#b5d334]"></span>
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700">
                      {project.status}
                    </span>
                  </div>

                  {/* Project Name (Primary Green #b5d334) */}
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#b5d334] uppercase tracking-tight mb-2">
                    {project.name}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-slate-500 font-medium mb-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 text-[#f82000]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.343 7.587a13.911 13.911 0 002.573 1.938 5.744 5.744 0 00.281.14.77.77 0 00.093.04l.02.008zM10 12a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {project.location}
                  </div>

                  <div className="bg-slate-50 border-l-4 border-[#b5d334] p-5 mb-8 rounded-r-xl">
                    <p className="text-sm font-semibold text-slate-900 mb-1">
                      {project.inventory}
                    </p>
                    <p className="text-2xl font-black text-blue-950">
                      {project.price}
                    </p>
                  </div>

                  {/* Bulleted Features List */}
                  <ul className="space-y-4 mb-10">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <div className="mt-0.5 shrink-0 w-5 h-5 rounded bg-[#b5d334]/20 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-3.5 h-3.5 text-[#b5d334]"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-slate-600 font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                 
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="px-8 py-4 bg-[#b5d334] text-white font-bold rounded text-xs uppercase tracking-widest hover:bg-[#d61c00] hover:scale-105 transition-all shadow-lg shadow-[#f82000]/30 w-full sm:w-auto">
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
