"use client";

import Link from "next/link";

export default function ManoraCTA() {
  return (
    // Outer section has a white background and padding at the bottom (pb-16 / pb-24) to disconnect from the footer
    <section className="bg-white pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8">
      {/* The CTA is now a neat, rounded block with its own internal padding */}
      <div className="max-w-5xl mx-auto bg-blue-950 rounded-3xl py-16 sm:py-20 px-4 sm:px-6 shadow-xl shadow-blue-950/10 text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-[#b5d334] uppercase tracking-tight mb-6">
          Ready to Secure Your{" "}
          <span className="text-[#b5d334]">Residence?</span>
        </h2>

        <p className="text-blue-100/80 font-light text-base sm:text-lg mb-10 max-w-2xl mx-auto">
          Reach out to our team today to discuss floor plans, availability, and
          investment opportunities at Manora.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#b5d334] text-white font-bold uppercase tracking-widest text-sm rounded-full transition-all duration-300 hover:bg-orange-600 hover:scale-105"
        >
          <span>Contact Us</span>
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
