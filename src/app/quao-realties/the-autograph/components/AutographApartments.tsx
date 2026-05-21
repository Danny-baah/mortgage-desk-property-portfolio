"use client";

import Image from "next/image";
import Link from "next/link";

const apartments = [
  {
    id: "studio",
    title: "Stylish Studio Apartments",
    image: "/assets/quao/Manora_INT_-Residents-Lounge.jpg",
    features: [
      "Intelligently designed studio layouts combining modern efficiency with refined elegance.",
      "Flexible design options that allow homeowners to effortlessly personalize their living space.",
      "Sophisticated interior aesthetics featuring premium high-end finishes and appliances.",
      "An exceptional luxury footprint ideal for modern professionals and premium investors."
    ],
  },
  {
    id: "1-3-bed",
    title: "1-3 Bedroom Apartments",
    image: "/assets/quao/Manora_INT_-Master-Bathroom-1.jpg",
    features: [
      "Expansive configurations featuring spacious layout transitions and separate sleeping quarters.",
      "Gourmet open-concept kitchens blending seamlessly into bright living and lounge areas.",
      "Sophisticated master bedrooms with upscale, spa-like attached bathrooms.",
      "Perfect choice for families, couples, or individuals seeking refined city comfort."
    ],
  },
  {
    id: "penthouse",
    title: "Exclusive Penthouses",
    image: "/assets/quao/Manora_INT_-Penthouse.jpg",
    features: [
      "The absolute pinnacle of signature luxury living within the heart of Cantonments.",
      "Fluid, grand-scale architectural forms offering massive, uncompromised living rooms.",
      "Elevated premium design details highlighting double-height vistas and rich craftsmanship.",
      "Crafted for those who appreciate timeless luxury, utmost privacy, and wellness."
    ],
  }
];

export default function AutographApartments() {
  return (
    <section id="apartments" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      
      {/* Decorative Top Border Accent */}
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================
            SECTION HEADER
            ========================================================= */}
        <div className="text-center mb-20 lg:mb-28">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-px bg-orange-500"></span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                The Residences
              </span>
              <span className="w-8 h-px bg-orange-500"></span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-950 uppercase tracking-tight">
            Curated <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Living Spaces</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-light">
            Explore a range of sophisticated residential options from modern studios to ultra-exclusive top-floor collections, built around graceful architecture.
          </p>
        </div>

        {/* =========================================================
            APARTMENTS ALTERNATING LIST
            ========================================================= */}
        <div className="space-y-24 sm:space-y-32">
          {apartments.map((apt, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div 
                key={apt.id} 
                className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-16 group`}
              >
                
                {/* Image Showcase Frame */}
                <div className="w-full lg:w-3/5 relative">
                  {/* Floating shadow background tile */}
                  <div className={`absolute -inset-4 sm:-inset-6 bg-slate-50 rounded-2xl transform ${isReversed ? 'rotate-2 group-hover:rotate-3' : '-rotate-2 group-hover:-rotate-3'} transition-transform duration-700 z-0`}></div>
                  
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-950/10 z-10">
                    <Image
                      src={apt.image}
                      alt={apt.title}
                      fill
                      sizes="(max-w-1024px) 100vw, 60vw"
                      className="object-cover object-center transition-transform duration-[10000ms] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 to-transparent opacity-60"></div>
                  </div>
                </div>

                {/* Content Block */}
                <div className="w-full lg:w-2/5 flex flex-col justify-center">
                  
                  {/* Decorative Number Index */}
                  <span className="text-6xl sm:text-7xl font-black text-slate-100 mb-2 select-none">
                    0{index + 1}
                  </span>

                  <h3 className="text-3xl sm:text-4xl font-black text-blue-950 uppercase tracking-tight mb-6 leading-tight">
                    {apt.title}
                  </h3>

                  <ul className="space-y-4 mb-10">
                    {apt.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-6 h-6 rounded-full bg-orange-50 flex items-center justify-center">
                            <svg className="w-3.5 h-3.5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <p className="text-slate-600 font-light text-base sm:text-lg leading-relaxed">
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-950 text-blue-950 font-bold uppercase tracking-widest text-xs sm:text-sm rounded-full transition-all duration-300 hover:bg-blue-950 hover:text-white"
                    >
                      <span>Request Floor Plans</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
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