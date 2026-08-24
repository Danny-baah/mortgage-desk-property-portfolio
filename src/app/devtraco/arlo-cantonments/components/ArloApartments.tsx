"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const apartmentData = [
  {
    id: "studio",
    type: "Studio Residences",
    description: "With an open-plan layout, premium finishes, and smart storage solutions, it’s the perfect space for short term rentals.",
    features: ["Optimized Open-Plan Configuration", "High-Yield Rental Potential", "Integrated Smart Storage Solutions", "Premium European Finishes"],
    images: [
      "/assets/arlo/Studio-1.jpg",
      "/assets/arlo/Studio-2.jpg",
      "/assets/arlo/studio-Bed-1.jpg"
    ]
  },
  {
    id: "one-bed",
    type: "One Bedroom Apartments",
    description: "Thoughtfully designed with a spacious bedroom, modern open plan kitchen, and airy living area, this unit is tailored for style and practicality.",
    features: ["Spacious Master Suite", "Gourmet Open-Plan Kitchen", "Bright, Panoramic Living Area", "Perfect Urban Footprint"],
    images: [
      "/assets/arlo/One-Bed-1.jpg",
      "/assets/arlo/One-Bed-2.jpg"
    ]
  },
  {
    id: "two-bed",
    type: "Two Bedroom Apartments",
    description: "Perfect for those desiring extra space, offering generous interiors, en-suite bedrooms, and a welcoming living area. Enjoy the comfort of a well-zoned layout that supports both relaxation and entertainment.",
    features: ["All Bedrooms Fully En-Suite", "Dual-Zone Living & Lounge Layout", "Generous Walk-In Closets", "Private Dynamic Terraces"],
    images: [
      "/assets/arlo/Two-Bed-1.jpg",
      "/assets/arlo/Two-Bed-2.jpg"
    ]
  },
  {
    id: "penthouse",
    type: "Three Bedroom Penthouses",
    description: "Experience elevated luxury in our penthouse. With expansive layouts, panoramic views, top-tier finishes and private terraces, our penthouse creates an exclusive living experience.",
    features: ["Pinnacle 18th Floor Placement", "Expansive Multi-Aspect Terraces", "Breathtaking Skyline Panoramas", "Ultra-Premium Architectural Craftsmanship"],
    images: [
      "/assets/arlo/Penthouse-2.jpg",
      "/assets/arlo/pexels-mateusz-pielech-1032276948-33054903.jpg"
    ]
  }
];

export default function ArloApartments() {
  // Store active image overrides for each apartment type id
  const [activeImages, setActiveImages] = useState<{ [key: string]: string }>({});

  const handleThumbnailClick = (id: string, src: string) => {
    setActiveImages((prev) => ({ ...prev, [id]: src }));
  };

  return (
    <section id="arlo-apartments" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      
      {/* Structural Visual Grids */}
      <div className="absolute inset-y-0 left-0 w-px bg-slate-100 left-1/4 hidden lg:block pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-px bg-slate-100 right-1/4 hidden lg:block pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================
            SECTION HEADER
            ========================================================= */}
        <div className="text-center mb-24">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-px bg-orange-500"></span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                The Collection
              </span>
              <span className="w-8 h-px bg-orange-500"></span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#b5d334] uppercase tracking-tighter mb-6">
            Residential <span className="text-[#b5d334]">Floorplans</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 font-light text-lg">
            Impeccable space optimization tailored for high-performing investment yields and unmatched residential luxury.
          </p>
        </div>

        {/* =========================================================
            RESIDENCES LIST
            ========================================================= */}
        <div className="space-y-28 sm:space-y-36">
          {apartmentData.map((apt, index) => {
            const isReversed = index % 2 !== 0;
            const currentImage = activeImages[apt.id] || apt.images[0];

            return (
              <div 
                key={apt.id}
                className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}
              >
                
                {/* INTERACTIVE MEDIA DISPLAY BLOCK */}
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                  {/* Main Selected View */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl shadow-blue-950/10 bg-slate-100 border border-slate-100 group">
                    <Image
                      src={currentImage}
                      alt={apt.type}
                      fill
                      sizes="(max-w-1024px) 100vw, 50vw"
                      className="object-cover object-center transition-all duration-700 group-hover:scale-105"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent"></div>
                  </div>

                  {/* Thumbnails Picker */}
                  <div className="flex items-center gap-3 flex-wrap">
                    {apt.images.map((imgSrc, imgIdx) => {
                      const isActive = currentImage === imgSrc;
                      return (
                        <button
                          key={imgIdx}
                          onClick={() => handleThumbnailClick(apt.id, imgSrc)}
                          className={`relative w-20 sm:w-24 aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all duration-300 bg-slate-200 ${
                            isActive 
                              ? "border-orange-500 scale-95 shadow-md shadow-orange-500/20" 
                              : "border-transparent opacity-60 hover:opacity-100 hover:scale-95"
                          }`}
                        >
                          <Image
                            src={imgSrc}
                            alt={`${apt.type} view ${imgIdx + 1}`}
                            fill
                            sizes="96px"
                            className="object-cover object-center"
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* CONTENT & INFORMATION BLOCK */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="text-xs font-black text-orange-500 uppercase tracking-widest bg-orange-50 px-3 py-1 rounded">
                      Option 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-black text-[#b5d334] uppercase tracking-tight mb-6 leading-none">
                    {apt.type}
                  </h3>

                  <p className="text-slate-600 font-light text-base sm:text-lg leading-relaxed mb-8">
                    {apt.description}
                  </p>

                  {/* Bullet Spec Grid */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 border-t border-slate-100 pt-8">
                    {apt.features.map((feature, featIdx) => (
                      <li key={featIdx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-blue-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-slate-700 tracking-tight">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <Link
                      href="/register"
                      className="inline-flex items-center justify-center px-8 py-4 bg-[#b5d334] text-white rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 hover:bg-orange-500 shadow-xl shadow-blue-950/10 hover:shadow-orange-500/30"
                    >
                      <span>Register</span>
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
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