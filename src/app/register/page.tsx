"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RegisterAcquisitionPage() {
  // Form state
  const [selectedDeveloper, setSelectedDeveloper] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

  // Residential database mapping based on user specifications
  const propertyDatabase: Record<string, string[]> = {
    devtraco: [
      "Arlo Cantonments", 
      "Forte Residences", 
      "Pelican Hotel — Cantonments", 
      "The Address", 
      "Devtraco Woodlands"
    ],
    quao_realty: [
      "The Autograph", 
      "The Manora"
    ],
    atta_doku_meadows: [
      "Nile", 
      "The Densu", 
      "The Pacific"
    ]
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedDeveloper("");
      setFileName("");
    }, 5000);
  };

  return (
    <main className="bg-white min-h-screen flex flex-col">
      
      {/* =========================================================
         1. HERO SECTION WITH FLOATING REGISTRY CARD
         ========================================================= */}
      <section className="relative w-full min-h-[500px] lg:min-h-[580px] flex items-center bg-black-950 overflow-visible z-10">
        {/* Neutral Structured Architecture Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" 
            alt="Asset Management Core"
            fill
            priority
            className="object-cover object-center opacity-25 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/90 to-blue-900/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Direct Heading */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-px bg-orange-500"></span>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400">
                  Pre-Qualification Desk
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
                Formalize Your <br />
                Acquisition <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">
                  Registry Profile.
                </span>
              </h1>
              <p className="text-blue-100/80 text-base md:text-lg font-light leading-relaxed max-w-lg">
                Submit your primary credentials directly to secure verified routing, prioritize structural review, and fast-track institutional backing across our accredited developer landscape.
              </p>
            </div>

            {/* Right Column: Floating Institutional Information Card */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
              <div className="w-full max-w-md bg-white rounded-[32px] p-8 shadow-2xl border border-slate-100/80 lg:translate-y-24 transform transition-all duration-300">
                <div className="flex flex-col h-full space-y-6">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-orange-500 mb-2 block">
                      Secure Allocation
                    </span>
                    <h4 className="text-blue-950 text-2xl font-black mb-3 tracking-tight">
                      Unified Asset Gateway
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-light">
                      This centralized clearance infrastructure ensures direct alignment with premium banking frameworks, offering bespoke protection parameters for all onboarding buyers.
                    </p>
                  </div>
                  
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-sm rotate-45"></div>
                      <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">Access Bank Finance</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-600 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                      Verified Escrow Safeguards
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
         2. CENTRALIZED REGISTRATION REGISTRY FORM
         ========================================================= */}
      <section className="pt-32 pb-24 lg:pt-40 bg-slate-50 relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Side Section Narrative */}
            <div className="lg:col-span-4 flex flex-col space-y-6 lg:sticky lg:top-28">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-900 mb-3">
                  Account Onboarding
                </h2>
                <h3 className="text-3xl font-black text-blue-950 tracking-tight leading-tight mb-4">
                  Provide Your Credentials
                </h3>
                <p className="text-slate-600 font-light text-sm leading-relaxed">
                  Please complete the framework details. All verification data undergoes strict institutional processing via encrypted protocols to guarantee comprehensive compliance.
                </p>
              </div>

              <div className="p-5 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-blue-950 mb-0.5">Identity Verification Required</h4>
                  <p className="text-[11px] text-slate-500 leading-normal">A clear structural scan of your valid national identification card (Ghana Card) is essential to establish authorized purchasing clearance.</p>
                </div>
              </div>
            </div>

            {/* Right Side Complex Form */}
            <div className="lg:col-span-8 bg-white rounded-[24px] p-8 md:p-12 shadow-xl border border-slate-100 relative">
              {submitted && (
                <div className="absolute inset-0 bg-blue-950/95 rounded-[24px] flex flex-col items-center justify-center text-center z-20 p-6">
                  <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white mb-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h4 className="text-2xl font-black text-white mb-2">Registry Application Tracked</h4>
                  <p className="text-slate-300 text-sm font-light max-w-sm leading-relaxed">Thank you, your pre-qualification document portfolio has been officially updated inside the institutional database registry system.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name fields split */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-[11px] font-bold text-blue-950 uppercase tracking-wider mb-1.5">First name</label>
                    <input type="text" placeholder="Daniel" className="w-full bg-slate-50 border border-slate-200/70 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-blue-900 focus:bg-white transition-colors" required />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[11px] font-bold text-blue-950 uppercase tracking-wider mb-1.5">Last name</label>
                    <input type="text" placeholder="Baah" className="w-full bg-slate-50 border border-slate-200/70 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-blue-900 focus:bg-white transition-colors" required />
                  </div>
                </div>

                {/* Phone & Email Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-[11px] font-bold text-blue-950 uppercase tracking-wider mb-1.5">Phone Number</label>
                    <input type="tel" placeholder="+233 50 000 0000" className="w-full bg-slate-50 border border-slate-200/70 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-blue-900 focus:bg-white transition-colors" required />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[11px] font-bold text-blue-950 uppercase tracking-wider mb-1.5">Email Address</label>
                    <input type="email" placeholder="baah23064@gmail.com" className="w-full bg-slate-50 border border-slate-200/70 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-blue-900 focus:bg-white transition-colors" required />
                  </div>
                </div>

                {/* Location & DOB Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-[11px] font-bold text-blue-950 uppercase tracking-wider mb-1.5">Current Location</label>
                    <input type="text" placeholder="e.g., Airport Residential, Accra" className="w-full bg-slate-50 border border-slate-200/70 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-blue-900 focus:bg-white transition-colors" required />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[11px] font-bold text-blue-950 uppercase tracking-wider mb-1.5">Date of Birth (DOB)</label>
                    <input type="date" className="w-full bg-slate-50 border border-slate-200/70 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-blue-900 focus:bg-white transition-colors" required />
                  </div>
                </div>

                {/* Ghana Card File Upload & Employment Status Dropdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Ghana Card Upload Custom Input */}
                  <div className="flex flex-col">
                    <label className="text-[11px] font-bold text-blue-950 uppercase tracking-wider mb-1.5">Upload Ghana Card</label>
                    <label className="w-full flex items-center justify-between bg-slate-50 border border-slate-200/70 rounded-xl px-4 py-3 text-sm cursor-pointer hover:border-slate-300 transition-colors">
                      <span className={fileName ? "text-slate-800 font-medium truncate max-w-[180px]" : "text-slate-400"}>
                        {fileName || "Select ID document scan..."}
                      </span>
                      <span className="text-xs bg-blue-900 text-white font-bold px-3 py-1 rounded-lg flex-shrink-0">Browse</span>
                      <input type="file" accept="image/*,.pdf" onChange={handleFileChange} className="hidden" required />
                    </label>
                  </div>

                  {/* Employment Dropdown */}
                  <div className="flex flex-col">
                    <label className="text-[11px] font-bold text-blue-950 uppercase tracking-wider mb-1.5">Employment Status</label>
                    <select className="w-full bg-slate-50 border border-slate-200/70 rounded-xl px-4 py-3.5 text-slate-800 text-sm focus:outline-none focus:border-blue-900 focus:bg-white transition-colors appearance-none cursor-pointer" required defaultValue="">
                      <option value="" disabled>Select status...</option>
                      <option value="salary_worker">Salary Worker</option>
                      <option value="self_employed">Self Employed</option>
                    </select>
                  </div>
                </div>

                {/* Developer Selection Dropdown Framework */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                  <div className="flex flex-col">
                    <label className="text-[11px] font-bold text-blue-950 uppercase tracking-wider mb-1.5">Select Your Developer</label>
                    <select 
                      value={selectedDeveloper}
                      onChange={(e) => setSelectedDeveloper(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200/70 rounded-xl px-4 py-3.5 text-slate-800 text-sm focus:outline-none focus:border-blue-900 focus:bg-white transition-colors appearance-none cursor-pointer" 
                      required
                    >
                      <option value="" disabled>Choose target developer...</option>
                      <option value="devtraco">Devtraco Plus</option>
                      <option value="mac_capital">MAC Capital</option>
                      <option value="peregrino">Peregrino Residence</option>
                      <option value="quao_realty">Quao Realty</option>
                      <option value="atta_doku_meadows">Atta Doku Meadows</option>
                    </select>
                  </div>

                  {/* CONDITIONAL DROPDOWN LOGIC */}
                  <div className="flex flex-col">
                    <label className="text-[11px] font-bold text-blue-950 uppercase tracking-wider mb-1.5">Select Target Residence / Project</label>
                    {propertyDatabase[selectedDeveloper] ? (
                      <select 
                        className="w-full bg-slate-50 border border-blue-900 rounded-xl px-4 py-3.5 text-slate-800 text-sm focus:outline-none appearance-none cursor-pointer animate-fade-in" 
                        required
                        defaultValue=""
                      >
                        <option value="" disabled>Select specific project option...</option>
                        {propertyDatabase[selectedDeveloper].map((residence) => (
                          <option key={residence} value={residence.toLowerCase().replace(/ /g, "_")}>
                            {residence}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <select 
                        className="w-full bg-slate-100 border border-slate-200 text-slate-400 rounded-xl px-4 py-3.5 text-sm appearance-none cursor-not-allowed" 
                        disabled
                        defaultValue=""
                      >
                        <option value="" disabled>Select developer first...</option>
                      </select>
                    )}
                  </div>
                </div>

                {/* Additional Note Textarea */}
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold text-blue-950 uppercase tracking-wider mb-1.5">Additional Note</label>
                  <textarea rows={4} placeholder="Type any specific framework preferences or credit structuring queries..." className="w-full bg-slate-50 border border-slate-200/70 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-blue-900 focus:bg-white transition-colors resize-none" required></textarea>
                </div>

                {/* Submit button wrapper */}
                <button type="submit" className="w-full md:w-auto inline-flex items-center justify-center px-10 py-4 bg-blue-900 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-300 hover:bg-orange-500 shadow-md cursor-pointer">
                  Submit Registry Portfolio
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
         3. REDIRECT CTA TO CONTACT PAGE WITH FACELESS IMAGE
         ========================================================= */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-[32px] border border-slate-100 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Hand Column: High-Quality Faceless Desk Interaction Scan */}
            <div className="lg:col-span-5 relative h-[320px] lg:h-[420px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070" 
                alt="Faceless legal financial configuration analysis desk"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Right Hand Column: Copy details */}
            <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col items-start text-left">
              <h3 className="text-3xl font-black text-blue-950 tracking-tight leading-tight mb-4">
                Need customized financial mapping? <br />
                Connect with our advisor core.
              </h3>
              <p className="text-slate-600 font-light text-base mb-8 max-w-xl">
                If you have nuanced structural criteria or need dedicated assistance from an individual Mortgage Consultant before registry formalization, access our priority communication desk.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-900 text-white rounded-xl font-bold text-sm shadow-lg hover:bg-orange-500 transition-all duration-300 group"
              >
                Go to Contact Page
                <svg className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}