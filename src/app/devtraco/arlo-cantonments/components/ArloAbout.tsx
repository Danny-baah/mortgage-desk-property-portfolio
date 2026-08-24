"use client";

import Image from "next/image";

export default function ArloAbout() {
  return (
    <section
      id="about-arlo"
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT SIDE: Content */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-orange-500"></span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                About Arlo
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-[#b5d334] uppercase tracking-tighter mb-8 leading-[1.1]">
              Precision Over Excess. <br />
              <span className="text-[#b5d335">Quality Over Quantity.</span>
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              <p>
                Anchored in the prestigious suburb of Cantonments,{" "}
                <strong className="font-semibold text-blue-950">Arlo</strong> is
                a curated collection of Studios to Three-Bedroom Penthouses
                designed with the modern investor in mind.
              </p>
              <p>
                Every layout, finish, window placement, and square metre is
                deliberate — coming together to create spaces that feel
                inspiring, seamless, and effortlessly balanced.
              </p>
            </div>

            {/* Precision Stats / Badges */}
            <div className="flex flex-wrap gap-6 mt-12 border-t border-blue-100 pt-8">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-blue-950 tracking-tighter">
                  Studios
                </span>
                <span className="text-xs font-bold text-orange-500 uppercase tracking-widest mt-1">
                  To 3-Bed Penthouses
                </span>
              </div>
              <div className="w-px h-12 bg-blue-100 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-blue-950 tracking-tighter">
                  Cantonments
                </span>
                <span className="text-xs font-bold text-orange-500 uppercase tracking-widest mt-1">
                  Prestigious Suburb
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Image Presentation */}
          <div className="relative group w-full">
            {/* Blue accent frame */}
            <div className="absolute -inset-4 bg-blue-50 rounded-2xl transform translate-x-4 translate-y-4 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2 z-0 border border-blue-100"></div>

            <div className="relative aspect-[975/620] w-full overflow-hidden shadow-2xl shadow-blue-950/15 z-10 bg-slate-200 rounded-xl">
              <Image
                src="/assets/arlo/arlo-image-975-x-620.jpg"
                alt="Arlo Cantonments Architecture"
                fill
                sizes="(max-w-1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
