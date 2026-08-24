import Link from 'next/link';
import Image from 'next/image';

export default function CTA() {
  return (
    <section className="pt-20 lg:pt-32 pb-6 lg:pb-12 bg-white relative px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Custom CSS for the zoom/pulse animation on the text.
        Toned down to scale(1.03) over 5 seconds for a subtle, professional feel.
      */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes zoom-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.03); opacity: 0.98; }
        }
        .animate-zoom-pulse {
          animation: zoom-pulse 5s ease-in-out infinite;
          display: inline-block;
          transform-origin: center left;
        }
      ` }} />

      <div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl bg-blue-900">
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-800 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-orange-500 rounded-full blur-3xl opacity-20"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          
          {/* LEFT SIDE: Content */}
          <div className="relative z-10 p-10 sm:p-16 lg:p-20 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-orange-500"></span>
              <span className="text-sm font-bold uppercase tracking-[0.15em] text-orange-400">
                Take The Next Step
              </span>
            </div>
            
            {/* The animating headline */}
            <h2 className="text-4xl sm:text-5xl font-black text-[#b5d334] leading-tight mb-6 animate-zoom-pulse drop-shadow-md">
              Interested in purchasing a Devtraco property?
            </h2>
            
            <p className="text-lg text-blue-100 leading-relaxed mb-10 max-w-lg font-light">
              Our dedicated Mortgage Specialists are on standby to guide you through our premium developer portfolio and tailor a financing plan that perfectly fits your lifestyle.
            </p>
            
            <div>
              <Link 
                href="/contact" 
                className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-orange-500 rounded-full hover:bg-orange-600 shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1"
              >
                Contact Our Team
                <svg 
                  className="w-5 h-5 ml-2 -mr-1 transform transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: Image */}
          <div className="relative h-64 sm:h-80 lg:h-full min-h-[400px] w-full hidden sm:block overflow-hidden">
            {/* NEW IMAGE: Close-up professional handshake (No faces visible).
              Since we whitelisted Unsplash earlier, this loads automatically.
            */}
            <Image 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Close-up of professional handshake representing agreement" 
              fill
              className="object-cover object-center" 
            />
            {/* Gradient overlay to blend the image smoothly into the blue background on the left */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/50 to-transparent"></div>
          </div>

        </div>
      </div>
    </section>
  );
}