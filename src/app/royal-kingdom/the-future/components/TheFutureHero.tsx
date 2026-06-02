"use client";

import React from "react";

export default function TheFutureHero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* --- BACKGROUND VIDEO --- */}
      {/* Plays automatically, loops infinitely, muted for auto-play compliance */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="/assets/the_future/THE FUTURE PROJECT conv.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* --- PREMIUM GRADIENT OVERLAY --- */}
      {/* Blends your deep brand blue at the top into a dark cinematic gradient to make text pop */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#003883]/60 via-black/50 to-black/80"></div>

      {/* --- HERO CONTENT --- */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 md:px-12 text-center mt-12 md:mt-0">
        {/* Location Badge */}
        <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: "#ff8200" }}
          ></span>
          <span className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-white">
            Location: East Airport — Tse Addo
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif font-black text-white leading-tight mb-6 tracking-tight drop-shadow-lg">
          Welcome to <br />
          <span style={{ color: "#b5d334" }}>The Future</span>
        </h1>

        {/* Description from the graphic (Reduced) */}
        <p className="text-base md:text-xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed mb-10 drop-shadow-md">
          A 10-storey mixed-use development comprising 99 thoughtfully designed units. 
          This is your chance to own a prime piece of Accra's rising skyline.
        </p>

        {/* Call To Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {/* Primary Button - Dominant Green Background with Deep Blue Text */}
          <a
            href="#project-overview"
            className="w-full sm:w-auto px-10 py-4 font-bold uppercase tracking-[0.15em] text-sm rounded-sm transition-transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(181,211,52,0.3)]"
            style={{ backgroundColor: "#b5d334", color: "#003883" }}
          >
            Explore The Project
          </a>

          {/* Secondary Button - Transparent with Orange Border/Text */}
          <a
            href="/register"
            className="w-full sm:w-auto px-10 py-4 font-bold uppercase tracking-[0.15em] text-sm rounded-sm transition-all border-2 bg-black/20 backdrop-blur-sm hover:bg-white/10"
            style={{ borderColor: "#ff8200", color: "#ff8200" }}
          >
            Register Interest
          </a>
        </div>
      </div>
    </section>
  );
}