"use client";

import React from "react";

export default function AboutUs() {
  return (
    <section id="about-the-future" className="py-20 lg:py-28 bg-stone-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Editorial Content */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Small Heading - Locked to Orange */}
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-orange-500" />
              <span className="text-orange-600 font-bold uppercase text-xs tracking-widest">
                East Airport — Tse Addo
              </span>
            </div>

            {/* Sub Heading - Locked to Dominant Lemon Green */}
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#b5d334] leading-tight">
              About The <br />
              <span>Future Project</span>
            </h2>

            <p className="text-stone-800 font-medium text-base leading-relaxed">
              The Future stands as a landmark 10-storey mixed-use residential development 
              redefining Accra's rising skyline. Thoughtfully crafted for modern living, 
              this masterpiece features 99 curated studio, 1-bedroom, and 2-bedroom units 
              built with high-end architectural zoning and structural integrity.
            </p>

            <p className="text-stone-600 text-sm leading-relaxed">
              Whether establishing an urban residence or diversifying a high-yield real 
              estate portfolio, The Future offers an unparalleled investment landscape optimized 
              for capital appreciation, flexible design configurations, and premier placement 
              within the capital's most vibrant residential enclave.
            </p>

            {/* Highlighting Features with Only Lemon Green and Orange */}
            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="border-l-4 border-[#b5d334] pl-3">
                <h4 className="font-black text-sm uppercase text-[#b5d334]">99 Smart Units</h4>
                <p className="text-xs text-orange-500 font-bold tracking-wide mt-0.5">
                  Studio, 1 & 2 Beds
                </p>
              </div>
              <div className="border-l-4 border-[#b5d334] pl-3">
                <h4 className="font-black text-sm uppercase text-[#b5d334]">10 Storeys</h4>
                <p className="text-xs text-orange-500 font-bold tracking-wide mt-0.5">
                  Mixed-Use Luxury
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Clean Layout Using ONLY ONE Single Image (ty.png) */}
          <div className="lg:col-span-7 relative">
            {/* Back Decorative Accent Block - Using Dominant Lemon Green */}
            <div className="absolute -inset-4 bg-[#b5d334]/10 rounded-lg -z-0 transform rotate-1 hidden sm:block" />

            {/* Image: Primary Single View */}
            <div className="relative w-full z-10 group overflow-hidden bg-stone-200 aspect-[4/3] rounded-3xl shadow-lg border border-stone-200/60">
              <img
                src="/assets/the_future/ty.png"
                alt="The Future Mixed-Use Development Layout View"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "/assets/the_future/ty.jpeg";
                }}
              />
              {/* Overlay Badge - Using Only Orange and White */}
              <div className="absolute top-4 left-4 bg-white px-4 py-1.5 rounded-full shadow-sm">
                <span className="text-[10px] font-black uppercase tracking-widest text-orange-600">
                  Project Overview
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}