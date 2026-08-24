"use client";

import Link from "next/link";

export default function ArloCTA() {
  return (
    <section className="bg-white pb-24 pt-0 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-blue-950 rounded-2xl py-10 px-6 sm:px-12 text-center relative overflow-hidden shadow-xl shadow-blue-950/20">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <h2 className="text-2xl sm:text-3xl font-black text-[#b5d334] uppercase tracking-tight mb-2 relative z-10">
          Make <span className="text-[#b5d334]">Arlo</span> Yours
        </h2>

        <p className="text-slate-300 font-light mb-6 text-sm sm:text-base relative z-10">
          Limited inventory remaining. Secure your private viewing today.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#b5d334] text-white hover:bg-orange-600 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-md shadow-orange-500/10 relative z-10"
        >
          <span>Get In Touch</span>
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
