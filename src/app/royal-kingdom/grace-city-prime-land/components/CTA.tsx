"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container - Block colored with Dominant Lemon Green */}
        <div className="bg-[#b5d334] rounded-[2rem] p-10 sm:p-16 text-center shadow-xl shadow-[#b5d334]/20 relative overflow-hidden">
          
          {/* Main Content Area */}
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            
            {/* Main Heading styled exactly like your banner reference */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              MAKE <span className="text-orange-500">GRACE CITY</span> YOURS
            </h2>

            {/* Sub-text and Mortgage Callout */}
            <p className="text-black font-semibold text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              Limited inventory remaining. Secure your private viewing today or connect directly with the Access Bank Ghana Mortgage Desk for flexible land financing options.
            </p>

            {/* Both Action Buttons positioned directly beneath the text */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              
              {/* Primary Button - Orange Action */}
              <Link 
                href="/register"
                className="w-full sm:w-auto min-w-[200px] bg-orange-500 hover:bg-orange-600 text-white font-black uppercase tracking-widest text-xs py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                Get In Touch →
              </Link>

              {/* Secondary Button - Pure White Contrast */}
              <Link 
                href="/contact"
                className="w-full sm:w-auto min-w-[200px] bg-white hover:bg-stone-50 text-black font-black uppercase tracking-widest text-xs py-4 px-8 rounded-full shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                Contact Agent
              </Link>
              
            </div>

          </div>

          {/* Subtle design element to add premium feel without dark colors */}
          <div className="absolute -inset-0 bg-white/5 pointer-events-none rounded-[2rem]" />
          
        </div>
        
      </div>
    </section>
  );
}