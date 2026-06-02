"use client";

export default function Amenities() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      
      {/* Text Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        
        {/* Small Heading - Orange */}
        <div className="inline-flex items-center gap-3 mb-6 justify-center">
          <div className="h-px w-12 bg-orange-500" />
          <span className="text-orange-600 font-bold uppercase text-xs tracking-widest">
          Curated For Modern Living
          </span>
          <div className="h-px w-12 bg-orange-500" />
        </div>

        {/* Main Heading - Dominant Lemon Green */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#b5d334] leading-tight mb-8">
         Wellness, leisure, and absolute security.
        </h2>

        {/* Description Text */}
        <p className="text-stone-600 font-medium text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
Experience premium lifestyle infrastructure featuring a panoramic rooftop terrace, fitness center, multi-tier security, and ground-floor retail convenience.        </p>
      </div>

      {/* Full Width Image Container - Fixed Truncation */}
      <div className="w-full relative bg-stone-50">
        <img
          src="/assets/the_future/Picture55.png"
          alt="Grace City Prime Lands Infrastructure"
          className="w-full h-auto object-contain"
          onError={(e) => {
            // Fallbacks in case the extension is different
            const target = e.target as HTMLImageElement;
            if (target.src.endsWith('.jpg')) {
              target.src = "/assets/grace_city_prime_land/Picture25.png";
            } else if (target.src.endsWith('.png')) {
              target.src = "/assets/grace_city_prime_land/Picture25.jpeg";
            }
          }}
        />
         <img
          src="/assets/the_future/Picture56.png"
          alt="Grace City Prime Lands Infrastructure"
          className="w-full h-auto object-contain"
          onError={(e) => {
            // Fallbacks in case the extension is different
            const target = e.target as HTMLImageElement;
            if (target.src.endsWith('.jpg')) {
              target.src = "/assets/grace_city_prime_land/Picture25.png";
            } else if (target.src.endsWith('.png')) {
              target.src = "/assets/grace_city_prime_land/Picture25.jpeg";
            }
          }}
        />
        
        {/* Optional: Subtle gradient overlay at the bottom to blend with the next section if needed */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
      </div>

    </section>
  );
}