"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      
      {/* Background Accent - Soft lime glow copied exactly from the style reference */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime-50 rounded-full blur-[120px] pointer-events-none opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: Copy (Your Exact Content) */}
          <div>
            {/* Subheading Area */}
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-orange-500"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                About The Development
              </span>
            </div>

            {/* Heading - Uniform Lemon Green */}
            <h2 className="text-3xl sm:text-5xl font-black text-[#b5d334] uppercase tracking-tighter mb-8 leading-tight">
              Redefining Luxury <br />
              Living in Aburi
            </h2>

            {/* Paragraph text matching layout typography */}
            <div className="space-y-6 text-slate-600 font-light text-base sm:text-lg leading-relaxed mb-10">
              <p>
                Grace City Prime Home offers an exclusive collection of masterfully crafted residences. Set against the serene, lush backdrop of the Aburi hills, our turnkey homes are designed for those who demand the highest standards of architectural excellence and modern comfort.
              </p>
              <p>
                Every detail, from the premium interior finishes to the expansive eco-friendly landscapes, has been thoughtfully curated to provide a sanctuary of peace, privacy, and generational value.
              </p>
            </div>
            
            {/* Core Features laid out exactly in the reference style grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
              <div>
                <span className="block text-2xl font-black text-slate-900">Modern</span>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">Architectural Brilliance</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-[#b5d334]">Premium</span>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">Turnkey Finishes</span>
              </div>
              <div className="hidden sm:block">
                <span className="block text-2xl font-black text-orange-500">24/7</span>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">Estate Security</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Visual Frame (Using your exact photos mapped into the RKE overlay style) */}
          <div className="relative h-[600px] w-full">
            
            {/* Decorative Background Blob */}
            <div className="absolute top-10 right-10 bottom-10 left-10 bg-orange-500/5 rounded-[3rem] transform rotate-6 z-0"></div>

            {/* Main Large Image - NP4_7 - Photo.jpg */}
            <div className="absolute top-0 right-0 w-4/5 h-[80%] rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 border-4 border-white z-10 group">
              <Image
                src="/assets/grace_city_prime_homes/NP4_7 - Photo.jpg.jpeg"
                alt="Grace City Prime Home Exterior Masterpiece"
                fill
                sizes="(max-w-1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            {/* Overlapping Smaller Image - 3_2 - Photo.jpg (Definitively on top) */}
            <div className="absolute bottom-0 left-0 w-3/5 h-[55%] rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/20 border-[6px] border-white z-20 group">
              <Image
                src="/assets/grace_city_prime_homes/4_4 - Photo.jpg"
                alt="Grace City Prime Home Interior Craftsmanship"
                fill
                sizes="(max-w-1024px) 100vw, 30vw"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Bottom text overlay on the smaller image */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="block text-[10px] font-black uppercase tracking-widest text-[#b5d334] mb-1">Eco-Friendly Living</span>
                <span className="block text-xs sm:text-sm font-bold text-white leading-snug">Serene Environment & Premium Design.</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}