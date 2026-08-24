"use client";

import Link from "next/link";

export default function AutographCTA() {
  return (
    <section className="bg-white pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-5xl mx-auto bg-blue-950 rounded-3xl py-16 sm:py-20 px-4 sm:px-6 shadow-xl shadow-blue-950/10 text-center relative overflow-hidden">
        
        {/* Subtle background glow for the "Signature" vibe */}
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-blue-900 rounded-full blur-[100px] opacity-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black text-[#b5d334] uppercase tracking-tight mb-6">
            Ready to Experience <span className="text-[#b5d334]">Signature Living?</span>
          </h2>
          
          <p className="text-blue-100/80 font-light text-base sm:text-lg mb-10 max-w-2xl mx-auto">
            Reach out to our team today to discuss bespoke floor plans, arrange a private viewing, and secure your residence at The Autograph in Cantonments.
          </p>
          
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#b5d334] text-white font-bold uppercase tracking-widest text-sm rounded-full transition-all duration-300 hover:bg-[#a0c22c] hover:scale-105"
          >
            <span>Register Interest</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}