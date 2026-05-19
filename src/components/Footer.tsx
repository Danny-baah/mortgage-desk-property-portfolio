import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 pt-12 lg:pt-16 relative overflow-hidden">
      
      {/* Ultra-smooth, slower micro-marquee animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
          display: flex;
          white-space: nowrap;
        }
      ` }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* The 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Column 1: Logo & Text */}
          <div className="flex flex-col">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-black text-white tracking-tight">
                Ghana <span className="text-orange-500">Mortgage Desk</span>
              </span>
            </Link>
            <p className="text-blue-200/80 leading-relaxed text-sm pr-4">
              Connecting homebuyers with premium residential developments. We provide tailored Access Bank financing options to turn your dream of homeownership into reality.
            </p>
          </div>

          {/* Column 2: Our Developers */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm border-b border-blue-800 pb-2 inline-block">
              Our Developers
            </h4>
            <ul className="space-y-4">
              {['Devtraco Plus', 'Quao Realties', 'Mac Capital', 'Peregrino Properties'].map((dev) => (
                <li key={dev}>
                  <Link 
                    href={`/developers/${dev.toLowerCase().replace(' ', '-')}`}
                    className="text-blue-200 hover:text-orange-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="h-px w-3 bg-orange-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {dev}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm border-b border-blue-800 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Contact Us', path: '/contact' },
                { name: 'Register', path: '/register' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.path}
                    className="text-blue-200 hover:text-orange-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="h-px w-3 bg-orange-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm border-b border-blue-800 pb-2 inline-block">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-blue-200">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>Starlets '91 Road, <br/>Osu, Accra - Ghana</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.273-3.973-6.869-6.869l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>+233 (0) 302 742 699</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>mortgages@accessbankplc.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* REFINED MICRO-MARQUEE 
          - Matches background perfectly
          - text-xs makes it beautifully subtle 
          - Clean micro-borders for a financial terminal look
      */}
      <div className="bg-blue-950/40 py-3 border-y border-blue-800/40 relative overflow-hidden">
        <div className="animate-marquee w-[200%]">
          {[1, 2].map((i) => (
            <div key={i} className="flex-1 flex justify-around items-center text-blue-200/40 uppercase font-semibold text-xs tracking-[0.3em] pointer-events-none select-none">
              <span>Access Bank Mortgage Desk</span>
              <span className="text-orange-500/30 text-lg">•</span>
              <span>Premium Property Portfolio</span>
              <span className="text-orange-500/30 text-lg">•</span>
              <span>Tailored Financing Solutions</span>
              <span className="text-orange-500/30 text-lg">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-blue-300/60 text-xs">
          &copy; {currentYear} Access Bank Ghana Plc. All rights reserved.
        </p>
        <div className="flex gap-4 text-xs text-blue-300/40">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>

    </footer>
  );
}