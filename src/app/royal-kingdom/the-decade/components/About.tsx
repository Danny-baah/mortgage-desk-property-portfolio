"use client";

import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Abstract Light Glow Accents */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-lime-50 rounded-full blur-[100px] -z-10 opacity-70" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Text Layout Mapped from Image Content */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-1 bg-[#ff8200] rounded-full" />
                <p className="text-xs sm:text-sm font-black tracking-widest uppercase text-[#ff8200]">
                  Exclusive Overview
                </p>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-[#b5d334] uppercase tracking-tight leading-tight">
                The Decade Apartment
              </h2>
            </div>

            {/* Main Content paragraphs from Picture76 */}
            <div className="space-y-6 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              <p className="border-l-4 border-[#b5d334] pl-4 italic font-medium text-slate-800">
                Located at Accra&apos;s premium East Airport enclave.
              </p>
              <p>
                The Decade Apartment offers premium <strong className="font-bold text-slate-900">2-bedroom furnished apartments</strong> blending elegance and comfort. 
                Every unit showcases meticulously curated modern interiors, high-speed internet accessibility, 
                integrated smart systems, and a thoroughly secure residential environment.
              </p>
              <p>
                Boasting a prime location near major corporate business hubs, upscale leisure spots, and the international airport, 
                the property guarantees absolute convenience. Supported by 24/7 dedicated management and secure internal parking, 
                it stands as the ideal luxury short-stay home for business or leisure travelers.
              </p>
            </div>

            {/* Highlight Feature Badges */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#ff8200]" />
                <span className="text-xs sm:text-sm font-bold uppercase text-slate-800">2-Bed Furnished</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#b5d334]" />
                <span className="text-xs sm:text-sm font-bold uppercase text-slate-800">Smart Systems</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#b5d334]" />
                <span className="text-xs sm:text-sm font-bold uppercase text-slate-800">24/7 Management</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#ff8200]" />
                <span className="text-xs sm:text-sm font-bold uppercase text-slate-800">East Airport Enclave</span>
              </div>
            </div>
          </div>

          {/* Right Side: Image Frame holding Picture76 */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#b5d334] to-[#ff8200] opacity-20 blur-lg" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-50 aspect-[4/3] lg:aspect-square">
              <Image
                src="/assets/the_decade/one.jpg"
                alt="The Decade Apartment Premium Bedroom Setup"
                fill
                className="object-cover object-center"
                sizes="(max-w-1024px) 100vw, 40vw"
              />
              
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow border border-slate-100 text-right">
                <p className="text-[10px] font-black tracking-widest text-[#ff8200] uppercase">Location Asset</p>
                <p className="text-xs font-extrabold text-slate-900 uppercase">East Airport, Accra</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}