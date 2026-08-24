import Image from "next/image";

export default function MacCapitalFeatures() {
  // Key features extracted exactly from your PDF
  const features = [
    {
      title: "All Rooms En-Suite",
      description: "4 spacious bedrooms, each featuring its own fully fitted private bathroom for ultimate privacy and convenience.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "Fully Fitted Open Kitchen",
      description: "Equipped with modern appliances including a kitchen island, sink, tap, oven, microwave, cooker, and extractor.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Master Suite Oasis",
      description: "A luxurious, fully air-conditioned master area complete with an en-suite bathroom, hot/cold taps, and a relaxing bathtub.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: "Total Climate Control",
      description: "Every single room and living area is fully air-conditioned, providing a comfortable and cool retreat during warmer months.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      )
    },
    {
      title: "Expansive Open Area",
      description: "A spacious, fully air-conditioned open living area perfectly designed for family activities, relaxation, and gathering with guests.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Visitors' Washroom",
      description: "A dedicated and conveniently located washroom specifically designed for your guests' comfort.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-orange-500"></span>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Premium Specifications
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#b5d334] tracking-tight">
            Key Features
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-950 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-[#b5d334] mb-3">{feature.title}</h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: Sticky Image (Picture 8) */}
          <div className="lg:col-span-5 relative h-[500px] lg:h-[700px] w-full rounded-[2rem] overflow-hidden shadow-2xl lg:sticky lg:top-24 border-8 border-white">
            <Image
              src="/assets/mac capital/Picture8.jpg"
              alt="Mac Capital Property Design Features"
              fill
              className="object-cover hover:scale-105 transition-transform duration-1000"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent"></div>
            
            {/* Small floating badge on the image */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-white/50 shadow-lg flex items-center gap-4">
               <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
               </div>
               <div>
                 <p className="text-xs font-bold text-blue-950 uppercase tracking-wider mb-0.5">Move-In Ready</p>
                 <p className="text-[11px] text-slate-600 font-medium">Uncompromising quality and finish.</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}