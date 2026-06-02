"use client";

import Image from "next/image";

export default function RKEAbout() {
  return (
    <section id="about-rke" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      
      {/* Background Accent - Swapped blue for a soft lime glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime-50 rounded-full blur-[120px] pointer-events-none opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: Copy (Direct from Brochure) */}
          <div>
            {/* Company Profile Subheading */}
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-orange-500"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                Company Profile
              </span>
            </div>

            {/* UPDATED: Entire Heading is now uniform Lemon Green */}
            <h2 className="text-3xl sm:text-5xl font-black text-[#b5d334] uppercase tracking-tighter mb-8 leading-tight">
              Setting the Pace in Ghana's <br />
              Real Estate Sector
            </h2>

            {/* Paragraph text with blue highlights changed to dark slate */}
            <div className="space-y-6 text-slate-600 font-light text-base sm:text-lg leading-relaxed mb-10">
              <p>
                <strong className="font-semibold text-slate-900">Royal Kingdom Estate (RKE)</strong> is one of Ghana's fastest-growing real estate companies, established in 2018 with a vision to provide trusted, litigation-free, and accessible property solutions for both local and diaspora clients.
              </p>
              <p>
                Over the years, RKE has successfully launched and delivered multiple landmark developments, including <strong>Grace City Phase 1, 2, 3 and 4, Blackstar Village, The View Phase 1 and 2, Grace City Prime,</strong> and premium short-stay projects like <strong>The Decade Apartment</strong>.
              </p>
              <p>
                Under the visionary leadership of Founder & CEO <strong className="font-semibold text-orange-600">Danny Angels</strong>, RKE continues to build communities and empower the diaspora At the heart of our operations is a firm commitment to quality, innovation, and timely delivery.
              </p>
            </div>
            
            {/* Core Stats - Balanced Brand Colors without deep blue text */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
              <div>
                <span className="block text-3xl font-black text-slate-900">2018</span>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">Established</span>
              </div>
              <div>
                <span className="block text-3xl font-black text-[#b5d334]">100%</span>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">Litigation Free</span>
              </div>
              <div className="hidden sm:block">
                <span className="block text-3xl font-black text-orange-500">Premium</span>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">Quality Delivery</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Visual Frame (Using Picture 17 and 15) */}
          <div className="relative h-[600px] w-full">
            
            {/* Decorative Background Blob */}
            <div className="absolute top-10 right-10 bottom-10 left-10 bg-orange-500/5 rounded-[3rem] transform rotate-6 z-0"></div>

            {/* Main Large Image - Picture 17 */}
            <div className="absolute top-0 right-0 w-4/5 h-[80%] rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 border-4 border-white z-10 group">
              <Image
                src="/assets/royal_kingdom/Picture17.jpg"
                alt="Royal Kingdom Estate Masterpiece"
                fill
                sizes="(max-w-1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            {/* Overlapping Smaller Image - Picture 15 */}
            <div className="absolute bottom-0 left-0 w-3/5 h-[55%] rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/20 border-[6px] border-white z-20 group">
              <Image
                src="/assets/royal_kingdom/Picture15.jpg"
                alt="Royal Kingdom Estate Infrastructure"
                fill
                sizes="(max-w-1024px) 100vw, 30vw"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Bottom text overlay on the smaller image - switched to neutral dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="block text-[10px] font-black uppercase tracking-widest text-[#b5d334] mb-1">Visionary Leadership</span>
                <span className="block text-xs sm:text-sm font-bold text-white leading-snug">Empowering lives one property at a time.</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}