"use client";

import Image from "next/image";
import Link from "next/link";

export default function QuaoAbout() {
  const focusAreas = [
    "Acquisition",
    "Development",
    "Construction",
    "Management",
    "Sales",
    "Leasing",
  ];

  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
    >
      {/* Subtle Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] pointer-events-none opacity-60 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-50 rounded-full blur-[100px] pointer-events-none opacity-50 -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
         
          <div className="relative group">
            {/* Orange Decorative Backdrop */}
            <div className="absolute -inset-4 sm:-inset-6 bg-orange-500/10 rounded-2xl transform rotate-2 transition-transform duration-700 group-hover:rotate-3"></div>

            {/* Main Image Wrapper */}
            <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-950/10">
              {/* Ensure the file extension matches what is in your folder (.jpg / .png) */}
              <Image
                src="/assets/quao/The-Autograph-Main-Brochure-3_page-0001-1.jpg"
                alt="The Autograph - Street View Night"
                fill
                sizes="(max-w-1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Inner Gradient Overlay for premium feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent"></div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 bg-white/95 backdrop-blur-sm p-4 sm:p-5 rounded-xl shadow-lg flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-950 rounded-full flex items-center justify-center text-orange-500">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-bold text-orange-500 uppercase tracking-widest mb-0.5">
                    Quao Realty
                  </p>
                  <p className="text-sm sm:text-base font-black text-blue-950 uppercase tracking-tight">
                    Luxury Defined
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================
              RIGHT SIDE: CONTENT TEXT
              ========================================================= */}
          <div className="flex flex-col justify-center">
            {/* Section Header */}
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-orange-500"></span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                About Us
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#b5d334] uppercase tracking-tight mb-8 leading-[1.1]">
              It's Where <br className="hidden sm:block" />
              <span className="text-[#b5d334]">You Belong.</span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-6 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              <p>
                We are a{" "}
                <strong className="font-semibold text-blue-950">
                  luxury real estate development and management company
                </strong>
                . Our mission is to develop and invest in luxury properties. We
                aim to create value for homeowners and investors by designing
                innovative products, prioritizing keeping our promises to our
                clients above all else.
              </p>
              <p>
                We take real estate personally. Each team member is well-versed
                in their field of expertise. Together, we create the perfect
                workforce to meet and exceed the desires of our clients.
              </p>
            </div>

            {/* Core Capabilities Grid */}
            <div className="mt-10 mb-10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                Our Areas of Expertise
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {focusAreas.map((area, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-50 border border-blue-100 text-blue-950 text-xs sm:text-sm font-bold uppercase tracking-wide rounded-md transition-colors hover:bg-orange-500 hover:text-white hover:border-orange-500 cursor-default"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Vision Blockquote */}
            <div className="relative p-6 sm:p-8 bg-blue-950 rounded-2xl shadow-xl">
              {/* Quote Icon watermark */}
              <svg
                className="absolute top-4 right-4 w-16 h-16 text-white/5 pointer-events-none"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <h3 className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                Our Vision
              </h3>
              <p className="text-white sm:text-lg font-medium leading-relaxed italic relative z-10">
                "To become the leading Real Estate Developers making the dreams
                of luxury homeowners and investors in Africa and the world come
                true."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
