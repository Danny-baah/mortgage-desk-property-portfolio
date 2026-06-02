'use client';

import React from 'react';

export default function CallToAction() {
  return (
    <section className="py-24 px-4 sm:px-8 md:px-16 lg:px-24 bg-white">
      <div 
        className="max-w-[1200px] mx-auto rounded-3xl relative overflow-hidden shadow-xl p-10 md:p-16 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12"
        style={{ backgroundColor: '#b5d334' }} // Dominant Lemon Green Background
      >
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div 
          className="absolute bottom-0 left-0 w-80 h-80 opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/3 bg-black"
        ></div>

        {/* CTA Content */}
        <div className="relative z-10 lg:w-2/3 space-y-5 text-center lg:text-left">
          {/* Subheading - Changed to Black */}
          <span 
            className="block font-bold tracking-[0.25em] uppercase text-xs md:text-sm"
            style={{ color: '#000000' }}
          >
            Take The Next Step
          </span>
          
          {/* Main Title - Changed to White */}
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight"
            style={{ color: '#ffffff' }}
          >
            Ready to secure your new home?
          </h2>
          
          {/* Paragraph text - Changed to Black */}
          <p 
            className="text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0"
            style={{ color: '#000000' }} 
          >
            If you are interested in making Grace City your reality, the{' '}
            <span className="font-black underline decoration-2">
              Access Bank Mortgage Desk
            </span>{' '}
            is fully equipped to assist you with tailored financing options to help you purchase your property seamlessly.
          </p>
        </div>

        {/* Action Button */}
        <div className="relative z-10 lg:w-1/3 flex justify-center lg:justify-end w-full">
          <a 
            href="/contact" 
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white uppercase tracking-wider text-sm rounded-full overflow-hidden transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto text-center"
            style={{ backgroundColor: '#003883' }} // Grounding Deep Blue Button
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Contact Us Today
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transition-transform group-hover:translate-x-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
            {/* Hover overlay changing to brand orange */}
            <div 
              className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"
              style={{ backgroundColor: '#ff8200' }}
            ></div>
          </a>
        </div>

      </div>
    </section>
  );
}