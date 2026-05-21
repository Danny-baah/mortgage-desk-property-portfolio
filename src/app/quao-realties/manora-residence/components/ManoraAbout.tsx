"use client";

import Image from "next/image";

export default function ManoraAbout() {
  return (
    <section id="about-manora" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      
      {/* Background Subtle Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50 rounded-full blur-[100px] pointer-events-none opacity-50 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT SIDE: Content */}
          <div className="flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-orange-500"></span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                About The Residence
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-950 uppercase tracking-tight mb-8 leading-[1.1]">
              Where Luxury <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Meets Lifestyle
              </span>
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              <p>
                <strong className="font-semibold text-blue-950">Manora Residences</strong> is a premium residential development located in the prestigious Airport Residential Area of Accra, just minutes from Kotoka International Airport. 
              </p>
              <p>
                Designed to blend sophisticated architecture with modern comfort, it offers a range of living options—from stylish studios to expansive penthouses—tailored to suit individuals, families, and investors.
              </p>
              <p>
                With high-end finishes, thoughtfully designed spaces, and world-class amenities, Manora is more than just a place to live—it’s a complete lifestyle destination. Whether you’re seeking a refined home or a high-value investment, Manora delivers exceptional living in one of Accra’s most sought-after locations.
              </p>
            </div>

            {/* Quick Fact Badges */}
            <div className="flex flex-wrap gap-4 mt-10">
              <div className="px-5 py-3 border border-slate-200 rounded-lg flex flex-col">
                <span className="text-2xl font-black text-blue-950">3 Min</span>
                <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">To Kotoka Airport</span>
              </div>
              <div className="px-5 py-3 border border-slate-200 rounded-lg flex flex-col">
                <span className="text-2xl font-black text-blue-950">Premium</span>
                <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">Lifestyle Destination</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Image Presentation */}
          <div className="relative group w-full">
            {/* Orange Backdrop Accent */}
            <div className="absolute -inset-4 sm:-inset-6 bg-blue-950/5 rounded-2xl transform -rotate-2 transition-transform duration-700 group-hover:-rotate-3"></div>
            
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-950/10">
              {/* Note: Reusing the Manora image here, but you can swap this for an interior shot later! */}
              <Image
                src="/assets/quao/Manora.jpg"
                alt="Manora Residences Overview"
                fill
                sizes="(max-w-1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-[10000ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}