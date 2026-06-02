"use client";

import React from 'react';

// --- DATA FROM UPLOADED GRAPHIC ---
const investmentReasons = [
  {
    id: 1,
    title: "Enclave Appreciation",
    description: "Located in the rapidly growing Aburi enclave, ensuring strong property appreciation.",
  },
  {
    id: 2,
    title: "Diaspora Enclave",
    description: "Perfect for diaspora families seeking modern, sustainable homes in Ghana.",
  },
  {
    id: 3,
    title: "Market Potential",
    description: "Attractive rental and resale potential, with eco-friendly features.",
  },
];

export default function WhyInvest() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Text & Structured Value Propositions */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Headings */}
            <div>
              {/* Small Heading - Strict Orange (#ff8200) */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px" style={{ backgroundColor: '#ff8200' }} />
                <span 
                  className="text-xs font-bold uppercase tracking-[0.2em]" 
                  style={{ color: '#ff8200' }}
                >
                  Secure Value & Growth
                </span>
              </div>

              {/* Main Heading / Subheading - Strict Green (#b5d334) */}
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight"
                style={{ color: '#b5d334' }}
              >
                Why Invest in Grace City <br />
                <span>Prime Homes (Aburi)</span>
              </h2>
            </div>

            {/* Structured Info List */}
            <div className="space-y-6">
              {investmentReasons.map((item) => (
                <div key={item.id} className="flex gap-4 items-start group">
                  {/* Square Bullet Marker - Strict Deep Blue (#003883) */}
                  <div 
                    className="w-3 h-3 rounded-sm mt-1.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" 
                    style={{ backgroundColor: '#003883' }}
                  />
                  
                  <div>
                    <h3 className="text-lg font-black text-stone-900 uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-stone-600 text-sm font-medium leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: High-End Aesthetic Contextual Asset */}
          <div className="lg:col-span-5 relative">
            {/* Background Accent Layer using transparent brand green */}
            <div 
              className="absolute -inset-4 rounded-2xl -z-0 transform -rotate-1 hidden sm:block" 
              style={{ backgroundColor: 'rgba(181, 211, 52, 0.1)' }}
            />

            {/* Structural Overview Image Asset */}
            <div className="relative w-full z-10 overflow-hidden rounded-3xl aspect-[4/5] shadow-xl border border-stone-100">
              <img
                src="/assets/grace_city_prime_homes/Picture39.jpg"
                alt="Why Invest in Grace City Premium Real Estate Asset"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              
              {/* Minimalist Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white border border-stone-100 px-6 py-4 rounded-2xl shadow-lg">
                <span 
                  className="text-[10px] font-black uppercase tracking-[0.2em] block mb-1"
                  style={{ color: '#b5d334' }}
                >
                  Guaranteed Asset
                </span>
                <span className="text-xs font-bold text-stone-800 block">
                  Litigation-free property with immediate equity valuation.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}