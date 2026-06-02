"use client";

import React from "react";
import Image from "next/image";

const proximities = [
  { id: 1, place: "Accra International Airport", time: "10 min" },
  { id: 2, place: "Major Malls", time: "5 - 7 min" },
  { id: 3, place: "Schools", time: "10 min" },
  { id: 4, place: "Embassies & Diplomatic Missions", time: "10 min" },
  { id: 5, place: "Leading Hospitals & Clinics", time: "5 min" },
  { id: 6, place: "Recreational Centers", time: "5 - 10 min" },
];

export default function Location() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Information & Proximity Data */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Header Section */}
            <div className="mb-10">
              <h2 className="text-4xl sm:text-5xl font-black text-[#ff8200] tracking-tight mb-4">
                Location Highlights
              </h2>
              <p className="text-2xl sm:text-3xl font-medium text-slate-800 leading-snug">
                The Decade is located <br className="hidden sm:block" />
                at <span className="font-black text-[#b5d334]">East Airport.</span>
              </p>
            </div>

            {/* Proximity Data Card - Dominant Lemon Green */}
            <div className="bg-[#b5d334] rounded-3xl p-8 sm:p-10 shadow-xl shadow-[#b5d334]/20">
              <h3 className="text-xl font-black text-white mb-6 border-b-2 border-black/10 pb-4 inline-block pr-8">
                Proximity to:
              </h3>
              
              <ul className="space-y-4">
                {proximities.map((item) => (
                  <li 
                    key={item.id} 
                    className="flex justify-between items-center text-black font-medium text-sm sm:text-base border-b border-black/5 pb-2 last:border-0 last:pb-0 hover:pl-2 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                      <span>{item.place}</span>
                    </div>
                    <span className="font-black whitespace-nowrap ml-4">
                      {item.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column: Map Visual */}
          <div className="lg:col-span-7 relative w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-slate-50 rounded-3xl p-4 border border-slate-200">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="/assets/the_decade/one.jpg"
                alt="The Decade Location Map - East Airport"
                fill
                className="object-contain object-center"
                sizes="(max-w-1024px) 100vw, 60vw"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}