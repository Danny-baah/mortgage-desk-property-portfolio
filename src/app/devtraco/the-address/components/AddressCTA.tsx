"use client";

import Link from "next/link";

export default function AddressCTA() {
  return (
    <section className="bg-white pb-24 pt-0 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-blue-950 rounded-2xl py-14 px-8 sm:px-16 text-center relative overflow-hidden shadow-2xl shadow-blue-950/10">
        
        {/* Subtle geometric linear background accent */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-400 block mb-3">
            Roman Ridge Premium Inventory
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-4 leading-tight">
            Secure Your Positioning <br />At <span className="text-orange-500">The Address</span>
          </h2>
          
          <p className="text-slate-300 font-light mb-10 text-sm sm:text-base leading-relaxed">
            Maximize your capital deployment with Accra's premier real estate vehicle. Request pricing layouts or speak to our investment Desk directly today.
          </p>
          
          {/* Dual Action Matrix */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            
            <Link
              href="/register"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white hover:bg-orange-600 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-lg shadow-orange-500/10 w-full sm:w-auto text-center"
            >
              Register Allocation
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/20 text-white hover:bg-white hover:text-blue-950 hover:border-white text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 w-full sm:w-auto text-center"
            >
              Contact Access Bank
            </Link>

          </div>
        </div>
        
      </div>
    </section>
  );
}