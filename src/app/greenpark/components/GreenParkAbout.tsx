"use client";

import Image from "next/image";

export default function GreenParkAbout() {
  return (
    <section
      id="about-greenpark"
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
    >
      {/* Background Accent - Soft lime glow using your dominant color */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#b5d334]/10 rounded-full blur-[120px] pointer-events-none opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT: Copy (Direct from GreenPark PDF) */}
          <div>
            {/* Company Profile Subheading */}
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-[#f82000]"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f82000]">
                Who We Are
              </span>
            </div>

            {/* Heading in dominant color */}
            <h2 className="text-3xl sm:text-5xl font-black text-[#b5d334] uppercase tracking-tighter mb-8 leading-tight">
              Merging Affordability <br />
              With Luxury Living
            </h2>

            {/* Paragraph text sourced from PDF */}
            <div className="space-y-6 text-slate-600 font-light text-base sm:text-lg leading-relaxed mb-10">
              <p>
                <strong className="font-semibold text-slate-900">
                  GreenPark Properties Limited
                </strong>{" "}
                is an Accra-based residential development company with 10+ years
                of experience delivering high-value homes within Accra's most
                prestigious neighbourhoods.
              </p>
              <p>
                Through strategic partnerships, we provide tailored living
                solutions designed for long-term comfort and investment growth.
                We pride ourselves on a proven track record, operating in prime
                locations like East Legon, Achimota, Adjiringanor, and Tse Addo.
              </p>
              <p>
                Our mission is to develop cost-effective residential properties
                that add lasting value. We are committed to generating
                sustainable income for investors while developing the right
                products for customers—
                <strong className="font-semibold text-slate-900">
                  excellence in every brick we lay.
                </strong>
              </p>
            </div>

            {/* Core Stats - Balanced Brand Colors */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
              <div>
                <span className="block text-3xl font-black text-slate-900">
                  10+
                </span>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">
                  Years Experience
                </span>
              </div>
              <div>
                {/* Secondary color used for high-impact metric */}
                <span className="block text-3xl font-black text-[#f82000]">
                  Zero
                </span>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">
                  Abandoned Projects
                </span>
              </div>
              <div className="hidden sm:block">
                <span className="block text-3xl font-black text-[#b5d334]">
                  10-12%
                </span>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">
                  Annual Returns
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Visual Frame (Replaced with Video) */}
          <div className="relative flex items-center justify-center w-full h-full min-h-[400px] lg:min-h-[600px]">
            {/* Decorative Background Blob using secondary color */}
            <div className="absolute top-10 right-10 bottom-10 left-10 bg-[#f82000]/5 rounded-[3rem] transform rotate-6 z-0"></div>

            {/* Main Video Player Container */}
            <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 border-4 border-white z-10 bg-slate-900 aspect-[4/5] sm:aspect-video lg:aspect-[4/5]">
              <video
                className="w-full h-full object-cover object-center"
                controls
                playsInline
                preload="metadata"
                poster="/assets/greenpark/cherry-Semi_Detached_1.jpg" // Optional: gives a nice cover before playing
              >
                <source
                  src="/assets/greenpark/GreenPark-Video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
