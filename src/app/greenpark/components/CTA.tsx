"use client";

import React from "react";

export default function AccessBankCTA() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative overflow-hidden bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/40 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 group">
        {/* Subtle Decorative Background Glow */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#b5d334]/10 rounded-full blur-[80px] pointer-events-none transition-transform duration-700 group-hover:scale-150" />

        {/* Left Content Area */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 relative z-10 w-full md:w-auto">
          {/* Bank/Finance Icon - Set to Orange */}
          <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#f82000] shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
              />
            </svg>
          </div>

          <div>
            {/* Financing Partner Label - Set to Orange */}
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-4 h-px bg-[#f82000]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#f82000]">
                Financing Partner
              </span>
            </div>

            {/* Main Heading - Set to Green */}
            <h3 className="text-2xl font-black text-[#b5d334] tracking-tight mb-2">
              Ready to Secure Your Investment?
            </h3>

            <p className="text-sm text-slate-600 font-light max-w-lg leading-relaxed">
              We have partnered with{" "}
              <span className="font-semibold text-slate-900">Access Bank</span>{" "}
              to provide seamless, highly competitive mortgage and financing
              options tailored specifically for GreenPark properties.
            </p>
          </div>
        </div>

        {/* Right CTA Button Area - Set to Green */}
        <div className="relative z-10 flex-shrink-0 w-full md:w-auto">
          <a
            href="#contact-access-bank" // Replace with actual link or handler
            className="flex items-center justify-center gap-3 w-full md:w-auto px-8 py-4 bg-[#b5d334] text-slate-900 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#a4c02e] hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-[#b5d334]/30"
          >
            Contact Access Bank
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
