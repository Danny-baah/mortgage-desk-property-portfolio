"use client";

import React, { useState } from "react";
import Image from "next/image";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: "interiors" | "exteriors" | "amenities";
  gridClass: string;
}

export default function GreenParkGallery() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Spaces" },
    { id: "exteriors", label: "Exteriors" },
    { id: "interiors", label: "Interiors & Living" },
    { id: "amenities", label: "Amenities & Lifestyle" },
  ];

  // Grid size helpers
  const sizeLarge = "md:col-span-2 md:row-span-2 h-[400px] md:h-[620px]";
  const sizeTall = "md:col-span-1 md:row-span-2 h-[400px] md:h-[620px]";
  const sizeWide = "md:col-span-2 md:row-span-1 h-[250px] md:h-[298px]";
  const sizeSquare = "md:col-span-1 md:row-span-1 h-[250px] md:h-[298px]";

  const galleryItems: GalleryItem[] = [
    // --- Initial Batch ---
    {
      id: 1,
      src: "/assets/greenpark/cherry-Semi_Detached_1.jpg",
      alt: "GreenPark Exterior 1",
      category: "exteriors",
      gridClass: sizeLarge,
    },
    {
      id: 2,
      src: "/assets/greenpark/cherry-apartments_living.jpg",
      alt: "GreenPark Interior 1",
      category: "interiors",
      gridClass: sizeSquare,
    },
    {
      id: 3,
      src: "/assets/greenpark/haven_2.jpg",
      alt: "GreenPark Exterior 2",
      category: "exteriors",
      gridClass: sizeTall,
    },
    {
      id: 4,
      src: "/assets/greenpark/cherry-apartments_bedroom.jpg",
      alt: "GreenPark Interior 2",
      category: "interiors",
      gridClass: sizeSquare,
    },
    {
      id: 5,
      src: "/assets/greenpark/haven_6.jpg",
      alt: "GreenPark Amenity Pool",
      category: "amenities",
      gridClass: sizeWide,
    },
    {
      id: 6,
      src: "/assets/greenpark/cherry_2_bed_bed.jpg",
      alt: "GreenPark Interior Kitchen",
      category: "interiors",
      gridClass: sizeSquare,
    },

    {
      id: 7,
      src: "/assets/greenpark/haven_3.jpg",
      alt: "GreenPark Exterior 3",
      category: "exteriors",
      gridClass: sizeSquare,
    },
    {
      id: 8,
      src: "/assets/greenpark/haven_6.jpg",
      alt: "GreenPark Exterior 4",
      category: "exteriors",
      gridClass: sizeLarge,
    },
    {
      id: 9,
      src: "/assets/greenpark/haven_7.jpg",
      alt: "GreenPark Exterior 5",
      category: "exteriors",
      gridClass: sizeWide,
    },
    {
      id: 10,
      src: "/assets/greenpark/haven_9.jpg",
      alt: "GreenPark Exterior 6",
      category: "exteriors",
      gridClass: sizeTall,
    },
    {
      id: 11,
      src: "/assets/greenpark/haven_10.jpg",
      alt: "GreenPark Exterior 7",
      category: "exteriors",
      gridClass: sizeSquare,
    },
    {
      id: 12,
      src: "/assets/greenpark/cherry_2_bed_1.jpg",
      alt: "GreenPark Exterior 8",
      category: "exteriors",
      gridClass: sizeSquare,
    },
    {
      id: 13,
      src: "/assets/greenpark/cherry_3_bed_stand_1.jpg",
      alt: "GreenPark Exterior 9",
      category: "exteriors",
      gridClass: sizeWide,
    },
    {
      id: 14,
      src: "/assets/greenpark/cherry_4_bed_2.jpg",
      alt: "GreenPark Exterior 10",
      category: "exteriors",
      gridClass: sizeSquare,
    },

    // --- Additional Interiors (Total 10) ---
    {
      id: 15,
      src: "/assets/greenpark/cherry_3_bed_del_kitchen (1).jpg",
      alt: "GreenPark Interior 4",
      category: "interiors",
      gridClass: sizeTall,
    },
    {
      id: 16,
      src: "/assets/greenpark/cherry_3_bed_sta_bed.jpg",
      alt: "GreenPark Interior 5",
      category: "interiors",
      gridClass: sizeSquare,
    },
    {
      id: 17,
      src: "/assets/greenpark/cherry_4_bed_bed.jpg",
      alt: "GreenPark Interior 6",
      category: "interiors",
      gridClass: sizeLarge,
    },
    {
      id: 18,
      src: "/assets/greenpark/cherry-apartments_bedroom.jpg",
      alt: "GreenPark Interior 7",
      category: "interiors",
      gridClass: sizeSquare,
    },
    {
      id: 19,
      src: "/assets/greenpark/Legacy-real-8.jpg",
      alt: "GreenPark Interior 8",
      category: "interiors",
      gridClass: sizeWide,
    },
    {
      id: 20,
      src: "/assets/greenpark/redbury_2_bed_3.jpg",
      alt: "GreenPark Interior 9",
      category: "interiors",
      gridClass: sizeSquare,
    },
    {
      id: 21,
      src: "/assets/greenpark/redbury_1_bed_1.jpg",
      alt: "GreenPark Interior 10",
      category: "interiors",
      gridClass: sizeSquare,
    },

    // --- Additional Amenities (Total 4) ---
    {
      id: 22,
      src: "/assets/greenpark/Redbury-Exterior_6.jpg",
      alt: "GreenPark Amenity Gym",
      category: "amenities",
      gridClass: sizeSquare,
    },
    {
      id: 23,
      src: "/assets/greenpark/Redbury-Exterior_7.jpg",
      alt: "GreenPark Amenity Playground",
      category: "amenities",
      gridClass: sizeTall,
    },
    {
      id: 24,
      src: "/assets/greenpark/Redbury-Exterior_1.jpg",
      alt: "GreenPark Amenity Clubhouse",
      category: "amenities",
      gridClass: sizeWide,
    },
  ];

  // Filtering Logic
  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section
      id="gallery"
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
    >
      {/* Dynamic Background Light Accents */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#b5d334]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#f82000]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-4 justify-center w-full">
            <span className="w-8 h-px bg-orange-500" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              Visual Portfolio
            </span>
            <span className="w-8 h-px bg-orange-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 uppercase tracking-tighter">
            Our Architectural <span className="text-[#b5d334]">Gallery</span>
          </h2>
          <p className="mt-4 text-slate-600 text-lg font-light">
            Immerse yourself in our completed architectural spaces. Discover
            premium builds where design ingenuity meets structural permanence.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 sm:mb-16">
          {categories.map((category) => {
            const isActive = activeFilter === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Mosaic Grid Layout - Note the 'grid-flow-dense' class to fill gaps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-max grid-flow-dense transition-all duration-500">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl bg-slate-100 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 ${item.gridClass}`}
            >
              {/* Image Frame with Smooth Scaling */}
              <div className="w-full h-full relative overflow-hidden bg-slate-200">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-w-7xl) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle overlay on hover to make the interaction feel premium */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
