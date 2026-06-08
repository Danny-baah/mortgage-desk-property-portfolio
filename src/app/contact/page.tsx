"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactAccessBankPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <main className="bg-white min-h-screen flex flex-col">
      {/* =========================================================
         1. CLEAN HERO SECTION WITH BLACK OVERLAY & DOMINANT GREEN
         ========================================================= */}
      <section className="relative w-full min-h-[500px] lg:min-h-[580px] flex items-center bg-black overflow-visible z-10">
        {/* Neutral Corporate / Financial Center Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
            alt="Access Bank Financial Center"
            fill
            priority
            className="object-cover object-center opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-zinc-900/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hand: Simplified Text */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-px bg-orange-500"></span>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400">
                  Access Bank Mortgages
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
                Your Direct Line <br />
                To Specialized <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b5d334] to-amber-200">
                  Financing Plans.
                </span>
              </h1>
              <p className="text-zinc-300 text-base md:text-lg font-light leading-relaxed max-w-lg">
                Connect directly with our specialized mortgage desk advisors to
                review flexible financing frameworks tailored completely around
                your global acquisition goals.
              </p>
            </div>

            {/* Right Hand: Elegant Floating Card */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
              <div className="w-full max-w-md bg-white rounded-[32px] p-8 shadow-2xl border border-slate-100/80 lg:translate-y-24 transform transition-all duration-300">
                <div className="flex flex-col h-full space-y-6">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-orange-500 mb-2 block">
                      Mortgage & Credit
                    </span>
                    <h4 className="text-[#b5d334] text-2xl font-black mb-3 tracking-tight">
                      Institutional Finance Desk
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-light">
                      Secure pre-approvals, competitive international currency
                      frameworks, and structured long-term financial backing
                      under one consolidated banking umbrella.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-sm rotate-45"></div>
                      <span className="text-xs font-bold text-[#b5d334] uppercase tracking-wider">
                        Access Bank
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-slate-600 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                      Pre-approval available instantly
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         2. CLEAN CONNECTIONS AND SUBMISSION FORM SECTION
         ========================================================= */}
      <section className="pt-32 pb-24 lg:pt-40 bg-slate-50 relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Side: General Bank Contact Info */}
            <div className="lg:col-span-5 flex flex-col space-y-8">
              <div>
                {/* RESTORED: Changed label text from dominant green to orange */}
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 mb-3">
                  Banker Connect
                </h2>
                {/* UPDATED: Changed headline color from slate-900 to Dominant Lemon Green */}
                <h3 className="text-3xl md:text-4xl font-black text-[#b5d334] mb-6 tracking-tight">
                  Connect Privately
                </h3>
                <p className="text-slate-600 font-light leading-relaxed">
                  Our professional Mortgage Desk specialists are deployed
                  globally to support both domestic accounts and international
                  diaspora property acquisitions.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-200">
                {/* Location */}
                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#b5d334]/10 flex items-center justify-center text-[#b5d334] flex-shrink-0 mt-0.5">
                    <svg
                      className="w-5 h-5"
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
                    <h4 className="font-bold text-slate-900 text-sm mb-0.5">
                      Access Bank Head Office
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Starlets' 91 Street, Opposite Ohene Djan Stadium, Accra,
                      Ghana
                    </p>
                  </div>
                </div>

                {/* Grid for Phones and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 flex-shrink-0">
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
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs mb-0.5">
                        Direct Lines
                      </h4>
                      <p className="text-[11px] text-slate-600 font-medium leading-tight">
                        +233 302 742699
                        <br />
                        +233 540 102702
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-[#b5d334]/10 flex items-center justify-center text-[#b5d334] flex-shrink-0">
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
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs mb-0.5">
                        Email Support
                      </h4>
                      <p className="text-[11px] text-[#b5d334] font-bold truncate">
                        mortgages@
                        <br />
                        accessbankplc.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Clean Form */}
            <div className="lg:col-span-7 bg-white rounded-[24px] p-8 md:p-10 shadow-xl border border-slate-100 relative">
              {submitted && (
                <div className="absolute inset-0 bg-black/95 rounded-[24px] flex flex-col items-center justify-center text-center z-20 p-6">
                  <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white mb-4">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-black text-white mb-2">
                    Message Dispatched
                  </h4>
                  <p className="text-slate-300 text-sm font-light max-w-xs">
                    An Access Bank representative has logged your requirements
                    and will follow up shortly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                      First name
                    </label>
                    <input
                      type="text"
                      placeholder="Daniel"
                      className="w-full bg-slate-50 border border-slate-200/70 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-[#b5d334] focus:bg-white transition-colors"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                      Last name
                    </label>
                    <input
                      type="text"
                      placeholder="Baah"
                      className="w-full bg-slate-50 border border-slate-200/70 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-[#b5d334] focus:bg-white transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+233 50 000 0000"
                      className="w-full bg-slate-50 border border-slate-200/70 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-[#b5d334] focus:bg-white transition-colors"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="baah23064@gmail.com"
                      className="w-full bg-slate-50 border border-slate-200/70 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-[#b5d334] focus:bg-white transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                    Message / Financing Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Type your inquiry or dynamic asset specifications here..."
                    className="w-full bg-slate-50 border border-slate-200/70 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-[#b5d334] focus:bg-white transition-colors resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#b5d334] text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-300 hover:bg-orange-500 shadow-md cursor-pointer"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         3. SIMPLIFIED REGISTRATION SECTION 
         ========================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-[32px] border border-slate-100 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Hand: High Quality Faceless Corporate Image */}
            <div className="lg:col-span-5 relative h-[320px] lg:h-[420px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070"
                alt="Faceless business desk showing contract and documents"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Right Hand: Text Content and Button */}
            <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col items-start text-left">
              {/* UPDATED: Changed headline color to Dominant Lemon Green */}
              <h3 className="text-3xl font-black text-[#b5d334] tracking-tight leading-tight mb-4">
                Ready to acquire? <br />
                Formalize your acquisition journey.
              </h3>
              <p className="text-slate-600 font-light text-base mb-8 max-w-xl">
                Skip generic entry channels and pre-qualify your financial
                portfolio instantly by integrating directly within our dedicated
                client registry.
              </p>

              <Link
                href="/register"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#b5d334] text-white rounded-xl font-bold text-sm shadow-lg hover:bg-orange-500 transition-all duration-300 group"
              >
                Go to Registration Page
                <svg
                  className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
