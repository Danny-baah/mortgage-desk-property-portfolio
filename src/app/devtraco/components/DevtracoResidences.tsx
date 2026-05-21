import Image from "next/image";
import Link from "next/link";

export default function DevtracoResidences() {
  const residences = [
    {
      id: "arlo",
      slug: "arlo-cantonments", // Added specific URL slug
      name: "Arlo Cantonments",
      tagline: "Intention Over Excess",
      location: "Cantonments",
      image: "/assets/arlo.jpg",
      description: `Arlo is not about excess — it is about intention. Every layout, finish, window placement, and square metre has been deliberately considered to create residences that feel inspiring, seamless, and effortlessly balanced.\n\nAnchored in the prestigious suburb of Cantonments, Arlo offers a curated collection of Studios, Apartments, and Three-Bedroom Penthouses — each crafted with the modern investor in mind. Breathtaking architecture, indulgent interiors, smart layouts, and premium finishes that speak quietly but carry an unmistakable confidence.\n\nThis is not just a home. This is a statement.`,
    },
    {
      id: "forte",
      slug: "forte-residence", // Added specific URL slug
      name: "Forte Residences",
      tagline: "Where Luxury Meets Timeless Design",
      location: "Prime Accra",
      image: "/assets/forte.jpg",
      description: `Our initiatives include optimizing energy usage through smart building technologies, investing in renewable energy sources, and promoting a culture of conservation among our employees.\n\nBy upgrading our facilities with energy-efficient lighting, heating, and cooling systems, we have significantly reduced our energy consumption. We are proud of the progress we have made and remain dedicated to exploring new ways to enhance our sustainability practices.`,
    },
    {
      id: "pelican",
      slug: "pelican-hotel", // Added specific URL slug
      name: "Pelican Hotel — Cantonments",
      tagline: "A Revolution in Fractional Ownership",
      location: "Cantonments",
      image: "/assets/pelican.jpg",
      description: `Pelican Hotel Apartments introduces a revolutionary way to invest in Ghanaian real estate — Fractional Ownership. As leaders in Ghana's real estate industry, Devtraco is making it possible for more people to own a share of a premium hotel asset without the traditional barriers of full ownership.\n\nThrough fractional ownership, multiple investors jointly own and share a high-value property — combining accessibility with the returns of a luxury hospitality investment. Pelican represents a bold new frontier in real estate, where owning a premium Accra address is no longer reserved for the few.\n\nYour entry into Ghana's most exciting hotel investment starts here.`,
    },
    {
      id: "address",
      slug: "the-address", // Added specific URL slug
      name: "The Address",
      tagline: "A New Standard of Urban Living",
      location: "Roman Ridge",
      image: "/assets/address.jpg",
      description: `Nestled in the prestigious neighbourhood of Roman Ridge, The Address sets a bold new benchmark for what urban living in Accra can be. Elegant private pools, expansive interiors, and thoughtfully designed spaces come together to create a residence that does not simply meet expectations — it redefines them.\n\nThis is modern living at its most refined. A home that reflects who you are and the standard you have worked to achieve.\n\nPrestige has a new address.`,
    },
    {
      id: "woodlands",
      slug: "devtraco-woodlands", // Added specific URL slug
      name: "Devtraco Woodlands",
      tagline: "The Master-Planned Gated City",
      location: "Dawhenya",
      image: "/assets/woodlands.png",
      description: `Devtraco Woodlands is not just a residential development — it is an entirely new way of living. Sprawling across an expansive 592-acre master-planned gated city in Dawhenya, Woodlands offers a rare blend of coastal serenity and urban energy, just minutes from Central University College.\n\nFrom litigation-free land plots and contemporary homes to modern infrastructure, a commercial district, medical centre, and round-the-clock security — every detail has been designed with your convenience and peace of mind at the centre.\n\nWith breathtaking beaches within reach and world-class social and recreational facilities on-site, Woodlands seamlessly weaves together living, work, and leisure into one extraordinary lifestyle destination.`,
    },
  ];

  return (
    <section id="residences" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- SECTION HEADING --- */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500 mb-4">
            The Signature Portfolio
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-blue-900 mb-6 leading-tight">
            Our Iconic Residences
          </h3>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            From cosmopolitan apartments in the city's heart to sprawling gated
            cities on the coast, explore the developments that have defined
            luxury in Ghana for three decades.
          </p>
        </div>

        {/* --- ALTERNATING RESIDENCES LIST --- */}
        <div className="space-y-32 lg:space-y-48">
          {residences.map((res, index) => (
            <div
              key={res.id}
              className={`flex flex-col gap-12 lg:gap-20 items-center ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 group">
                <div className="relative h-[400px] md:h-[500px] w-full rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white transition-transform duration-700 group-hover:scale-[1.02]">
                  <Image
                    src={res.image}
                    alt={res.name}
                    fill
                    className="object-cover"
                  />
                  {/* Location Badge */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-900">
                      {res.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 flex flex-col items-start">
                <h4 className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3">
                  {res.tagline}
                </h4>
                <h3 className="text-3xl md:text-4xl font-black text-blue-900 mb-6 tracking-tight">
                  {res.name}
                </h3>
                <div className="space-y-4 mb-10 text-slate-600 leading-relaxed font-light text-base md:text-lg whitespace-pre-line">
                  {res.description}
                </div>

                {/* View Residence Button - NOW DYNAMIC */}
                <Link
                  href={`/devtraco/${res.slug}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-900 text-white rounded-full font-bold transition-all duration-300 hover:bg-orange-500 shadow-xl shadow-blue-900/10 hover:shadow-orange-500/30 group/btn"
                >
                  View Residence
                  <svg
                    className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}