"use client";

const investmentReasons = [
  {
    id: 1,
    stat: "70%",
    title: "Annual Land Appreciation",
    description: "Capitalize on compounding value in one of Ghana's most rapidly expanding high-yield real estate corridors.",
  },
  {
    id: 2,
    title: "Ready-To-Build Serviced Plots",
    description: "Directly addresses Ghana’s housing deficit with premium, pre-zoned land prepared for immediate structural construction.",
  },
  {
    id: 3,
    title: "Serene, Eco-Friendly Environment",
    description: "Escape the city congestion and immerse yourself in the pristine, crisp, and clean climate of the legendary Aburi hills.",
  },
  {
    id: 4,
    title: "Seamless Strategic Connectivity",
    description: "Positioned perfectly only 45 minutes from Accra International Airport, ensuring effortless travel and business integration.",
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
              {/* Small Heading - Orange */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-orange-500" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                  Secure Value & Growth
                </span>
              </div>

              {/* Main Heading - Dominant Lemon Green */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#b5d334] leading-tight">
                Why Invest in Grace City <br />
                <span>Prime Lands (Aburi)</span>
              </h2>
            </div>

            {/* Structured Info List */}
            <div className="space-y-6">
              {investmentReasons.map((item) => (
                <div key={item.id} className="flex gap-4 items-start group">
                  {/* Square Marker - Locked to Orange from original graphic */}
                  <div className="w-3 h-3 bg-orange-500 rounded-sm mt-1.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  
                  <div>
                    <h3 className="text-lg font-black text-stone-900 uppercase tracking-tight flex items-center gap-2">
                      {item.stat && (
                        <span className="text-orange-600 font-black text-xl">{item.stat}</span>
                      )}
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

          {/* Right Column: Exactly One High-End Aesthetic Contextual Asset */}
          <div className="lg:col-span-5 relative">
            {/* Graphic Accent Background - Using Dominant Lemon Green Layering */}
            <div className="absolute -inset-4 bg-[#b5d334]/10 rounded-2xl -z-0 transform -rotate-1 hidden sm:block" />

            {/* Premium Structural Overview Image */}
            <div className="relative w-full z-10 overflow-hidden rounded-3xl aspect-[4/5] shadow-xl border border-stone-100">
              <img
                src="/assets/grace_city_prime_land/PL1.jpeg"
                alt="Serene Eco-Friendly Luxury Property Landscape"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              
              {/* Minimalist Border Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white border border-stone-100 px-6 py-4 rounded-2xl shadow-lg">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#b5d334] block mb-1">
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