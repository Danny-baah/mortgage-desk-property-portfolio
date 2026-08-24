"use client";

import Link from "next/link";

export default function PelicanCTA() {
  return (
    <section className="bg-white pb-24 pt-0 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-blue-950 rounded-2xl py-12 px-6 sm:px-16 text-center relative overflow-hidden shadow-xl shadow-blue-950/20">
        
        {/* Ambient asset background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5 pointer-events-none"></div>
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-orange-400 block mb-3">
            Exclusive Cantonments Inventory
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-black text-[#b5d334] uppercase tracking-tight mb-4 leading-none">
            Secure Your <span className="text-[#b5d334]">Pelican</span> Allocation
          </h2>
          
          <p className="max-w-2xl mx-auto text-slate-300 font-light mb-8 text-sm sm:text-base leading-relaxed">
            Whether booking an elite capital stay or inquiring about premier fractional hotel asset ownership with Devtraco Plus, our dedicated hospitality desk is ready to facilitate your setup.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#b5d334] text-white hover:bg-orange-600 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-lg shadow-orange-500/20 w-full sm:w-auto text-center justify-center group"
            >
              <span>Contact the Access mortgage desk</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  );
}