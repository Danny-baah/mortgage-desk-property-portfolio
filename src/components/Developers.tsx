import Image from 'next/image';
import Link from 'next/link';

// Array of your developer partners
const developers = [
  {
    id: 'devtraco',
    name: 'Devtraco Plus',
    image: '/assets/devtraco.jpg',
    link: '/developers/devtraco',
  },
  {
    id: 'quao',
    name: 'Quao Realties',
    image: '/assets/Manora.jpg',
    link: '/developers/quao',
  },
  {
    id: 'mac-capital',
    name: 'Mac Capital',
    image: '/assets/mac-capital.jpg',
    link: '/developers/mac-capital',
  },
  {
    id: 'peregrino',
    name: 'Peregrino Properties',
    image: '/assets/peregrino.jpg',
    link: '/developers/peregrino',
  }
];

export default function Developers() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-orange-500"></span>
            <span className="text-sm font-bold uppercase tracking-[0.15em] text-orange-500">
              Trusted Partners
            </span>
            <span className="h-px w-8 bg-orange-500"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">
            Our Developers
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We partner with Ghana's most reputable real estate developers to bring you an exclusive portfolio of premium homes, built to uncompromising standards.
          </p>
        </div>

        {/* Developer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {developers.map((dev) => (
            <Link 
              key={dev.id} 
              href={dev.link}
              className="group relative block rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 h-[400px] cursor-pointer"
            >
              {/* Image with zoom-on-hover effect */}
              <Image 
                src={dev.image} 
                alt={`${dev.name} properties`} 
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              
              {/* Gradient Overlay (Darkens at the bottom so text is readable) */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Text Content inside the card */}
              <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">
                  {dev.name}
                </h3>
                
                {/* Hidden "View Properties" link that fades in on hover */}
                <div className="flex items-center gap-2 text-orange-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <span className="text-sm tracking-wider uppercase">View Properties</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}