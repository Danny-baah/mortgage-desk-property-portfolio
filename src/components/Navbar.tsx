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

      {/* Top Brand Accent Bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-blue-900 via-green-600 to-orange-500" />

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
              
              {/* Splitting the text for the Wave Animation */}
              <div className="font-black text-2xl md:text-3xl text-blue-900 leading-none flex gap-2">
                <span className="animate-jump">Property</span>
                {/* The delay makes Portfolio wait a fraction of a second before jumping */}
                <span className="animate-jump" style={{ animationDelay: '0.15s' }}>Portfolio</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Navigation Links */}
          <div className="flex-shrink-0">
            <div className="hidden md:flex items-center gap-2 bg-gray-50 p-1.5 rounded-full border border-gray-200 shadow-inner">
              <Link 
                href="/" 
                className="px-6 py-2 rounded-full text-sm font-bold text-blue-900 hover:text-white hover:bg-green-600 transition-all duration-300"
              >
                Home
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-2 rounded-full text-sm font-bold text-blue-900 hover:text-white hover:bg-green-600 transition-all duration-300"
              >
                Contact Us
              </Link>
              <Link 
                href="/register" 
                className="px-8 py-2 rounded-full text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 shadow-md hover:-translate-y-0.5 transition-all duration-300"
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