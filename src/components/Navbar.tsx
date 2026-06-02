import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-200">
      
      {/* Custom Keyframe Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes jump-and-pause {
          0%, 85%, 100% { transform: translateY(0); }
          88% { transform: translateY(-6px); }
          91% { transform: translateY(0); }
          95% { transform: translateY(-3px); }
        }
        .animate-jump {
          display: inline-block;
          animation: jump-and-pause 5s infinite ease-in-out;
        }
      `}} />

      {/* Top Brand Accent Bar - Using exact HEX #b5d334 */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#b5d334] via-green-600 to-orange-500" />

      {/* Main Centered Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-24">
          
          {/* LEFT SIDE: Logo & Titles */}
          <div className="flex items-center gap-5">
            <Link href="/" className="flex-shrink-0">
              <Image 
                src="/assets/getsitelogo.png" 
                alt="Access Bank Logo" 
                width={150} 
                height={45} 
                className="object-contain"
                priority
              />
            </Link>
            
            {/* Vertical Divider */}
            <div className="hidden lg:block h-12 w-px bg-gray-300 rounded-full"></div>

            {/* Site Title */}
            <div className="hidden sm:flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 mb-0.5">
                Mortgage Desk
              </span>
              
              {/* Properties Portfolio using exact HEX #b5d334 */}
              <div className="font-black text-2xl md:text-3xl text-[#b5d334] leading-none flex gap-2">
                <span className="animate-jump">Properties</span>
                <span className="animate-jump" style={{ animationDelay: '0.15s' }}>Portfolio</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Navigation Links */}
          <div className="flex-shrink-0">
            <div className="hidden md:flex items-center gap-2 bg-gray-50 p-1.5 rounded-full border border-gray-200 shadow-inner relative">
              <Link 
                href="/" 
                className="px-6 py-2 rounded-full text-sm font-bold text-black hover:text-white hover:bg-[#b5d334] transition-all duration-300"
              >
                Home
              </Link>

              {/* DEVELOPERS DROPDOWN */}
              <div className="relative group">
                <button className="px-6 py-2 rounded-full text-sm font-bold text-black hover:text-white hover:bg-[#b5d334] transition-all duration-300 flex items-center gap-1">
                  Developers
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu Box containing all 6 developers */}
                <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden z-50">
                  <Link 
                    href="/devtraco" 
                    className="px-5 py-3 text-sm font-bold text-black hover:bg-[#b5d334] hover:text-white transition-colors border-b border-gray-100"
                  >
                    Devtraco
                  </Link>
                  <Link 
                    href="/quao-realties" 
                    className="px-5 py-3 text-sm font-bold text-black hover:bg-[#b5d334] hover:text-white transition-colors border-b border-gray-100"
                  >
                    Quao Realties
                  </Link>
                  <Link 
                    href="/mac-capital" 
                    className="px-5 py-3 text-sm font-bold text-black hover:bg-[#b5d334] hover:text-white transition-colors border-b border-gray-100"
                  >
                    Mac Capital
                  </Link>
                  <Link 
                    href="/peregrino-properties" 
                    className="px-5 py-3 text-sm font-bold text-black hover:bg-[#b5d334] hover:text-white transition-colors border-b border-gray-100"
                  >
                    Peregrino Properties
                  </Link>
                  <Link 
                    href="/atta-doku-meadows" 
                    className="px-5 py-3 text-sm font-bold text-black hover:bg-[#b5d334] hover:text-white transition-colors border-b border-gray-100"
                  >
                    Atta-Doku Meadows
                  </Link>
                  <Link 
                    href="/royal-kingdom" 
                    className="px-5 py-3 text-sm font-bold text-black hover:bg-[#b5d334] hover:text-white transition-colors"
                  >
                    Royal Kingdom
                  </Link>
                </div>
              </div>

              <Link 
                href="/contact" 
                className="px-6 py-2 rounded-full text-sm font-bold text-black hover:text-white hover:bg-[#b5d334] transition-all duration-300"
              >
                Contact Us
              </Link>
              
              <Link 
                href="/register" 
                className="px-8 py-2 rounded-full text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 shadow-md hover:-translate-y-0.5 transition-all duration-300 ml-2"
              >
                Register
              </Link>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}