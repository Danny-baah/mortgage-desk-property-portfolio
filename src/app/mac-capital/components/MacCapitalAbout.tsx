import Image from "next/image";

export default function MacCapitalAbout() {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          

          <div className="relative h-[500px] md:h-[600px] w-full">
            {/* Decorative background accent box */}
            <div className="absolute -left-4 -top-4 w-3/4 h-3/4 bg-orange-50 rounded-3xl z-0"></div>
            
            {/* Picture 3 - Main Dominant Image */}
            <div className="absolute top-0 right-0 w-[85%] h-[80%] rounded-3xl overflow-hidden shadow-xl z-10 border-4 border-white">
              <Image
                src="/assets/mac capital/Picture3.png"
                alt="Mac Capital Property Interior/Exterior"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Picture 5 - Overlapping Secondary Image */}
            <div className="absolute bottom-0 left-0 w-[60%] h-[50%] rounded-3xl overflow-hidden shadow-2xl border-8 border-white z-20 group">
              <Image
                src="/assets/mac capital/Picture5.jpg"
                alt="Mac Capital Property Details"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>

        
          <div className="flex flex-col">
            
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-blue-900"></span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                The Property
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-[#b5d334] mb-6 leading-tight tracking-tight">
              Modern Living Meets <br/>
              <span className="text-[#b5d334]">Suburban Charm.</span>
            </h2>
            
            {/* Context from PDF */}
            <div className="prose prose-lg text-slate-600 font-light leading-relaxed mb-10">
              <p>
                Nestled in the tranquil growing community of <strong>Amrahia, Ghana</strong>, this stunning 4-bedroom house offers the perfect blend of urban convenience and a peaceful suburban environment.
              </p>
              <p>
                Designed for modern families or those seeking a spacious retreat, every detail has been thoughtfully curated—from the expansive open living areas perfect for gatherings, to the fully air-conditioned spaces that provide a cool sanctuary year-round.
              </p>
            </div>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-blue-950 text-sm mb-1">4 En-Suite Bedrooms</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Each room features its own fully fitted bathroom for ultimate privacy, plus a visitors' washroom.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-900 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-blue-950 text-sm mb-1">Fitted Open Kitchen</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Fully equipped with a kitchen island, sink, oven, microwave, cooker, and extractor.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-900 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-blue-950 text-sm mb-1">Master Suite Oasis</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Spacious master area complete with hot and cold taps, and a relaxing bathtub.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-blue-950 text-sm mb-1">Climate Controlled</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Every room is fully air-conditioned, providing a cool retreat during warmer months.</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}