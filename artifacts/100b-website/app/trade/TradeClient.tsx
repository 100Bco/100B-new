"use client";

import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Building2, Check, ExternalLink } from "lucide-react";

export default function Trade() {
  return (
    <div className="flex flex-col">
      {/* 1. HERO */}
      <section className="relative bg-bg-dark pt-32 pb-20 lg:pt-48 lg:pb-28 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-start gap-8">
          <div className="inline-flex items-center rounded-full border border-brand-gold/30 bg-brand-gold/5 px-4 py-1.5 text-xs uppercase tracking-widest font-semibold text-brand-gold">
            Trade
          </div>
          
          <h1 className="text-[44px] md:text-6xl lg:text-[100px] font-serif leading-[0.85] tracking-tight max-w-5xl">
            <span className="block">Direct to factory.</span>
            <span className="block"><em className="font-serif italic text-gradient-gold">No markup. No middleman.</em></span>
          </h1>
          
          <p className="text-lg lg:text-xl font-light leading-relaxed max-w-2xl text-text-body mt-4">
            We organize direct-sourcing delegations and maintain the vetted trade network for builders who are serious about controlling material costs.
          </p>
        </div>
      </section>

      {/* 2. BUILD BETTER SERIES */}
      <section className="py-20 lg:py-28 bg-bg-alt border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-border-subtle"></div>
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold">Build Better Series</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase leading-tight">
                THE SOURCING DELEGATION SERIES FOR <em className="font-display italic text-gradient-gold">SERIOUS BUILDERS.</em>
              </h2>
            </div>
            
            <div className="bg-bg-alt p-8 lg:p-10 border border-brand-gold/30 rounded-3xl h-full flex flex-col justify-center">
              <h3 className="font-serif text-2xl text-white mb-8 border-b border-border-subtle pb-4">Why This Works</h3>
              <ul className="flex flex-col gap-6">
                {[
                  "Materials are 25-35% of total construction cost. You are paying 3-4x factory price through domestic distributors.",
                  "Vietnam's construction and finishing material exports reached $17.5B in 2024 and are growing.",
                  "Every factory in our program is pre-vetted. You visit knowing it is already approved.",
                  "20-25% savings going direct vs. domestic distribution. On a $5M project, that is $250K-$500K back in margin."
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-brand-gold font-bold mt-1">—</span>
                    <span className="font-light text-text-body leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-bg-card border border-brand-gold/40 rounded-3xl p-8 lg:p-12 relative overflow-hidden flex flex-col">
              <div className="absolute -top-10 -right-10 text-[200px] font-display text-white/[0.02] pointer-events-none select-none">
                2026
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold/10 border border-brand-gold/30 px-3 py-1 text-xs text-brand-gold w-fit mb-8 relative z-10">
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
                Active — May 30 to June 5, 2026
              </div>
              <h3 className="text-3xl font-serif text-white mb-6 relative z-10">Vietnam Direct 2026</h3>
              <p className="text-text-muted font-light leading-relaxed mb-12 relative z-10 flex-1">
                Ho Chi Minh City to Hanoi. 7 days. 10+ vetted factories across construction and finishing materials — engineered wood, aluminum windows, steel structures, porcelain tile, composite panels and more. By invitation only.
              </p>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact-footer")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-silver-gradient rounded-full px-8 py-4 text-xs uppercase tracking-widest font-semibold w-fit relative z-10"
              >
                Request an Invite
              </button>
            </div>

            <div className="bg-bg-alt border border-dashed border-border-subtle opacity-70 hover:opacity-100 transition-opacity duration-300 rounded-3xl p-8 lg:p-12 flex flex-col">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-text-muted w-fit mb-8">
                Coming 2027
              </div>
              <h3 className="text-3xl font-serif text-white/70 mb-6">Next Chapter — Asia</h3>
              <p className="text-text-muted font-light leading-relaxed mb-12 flex-1">
                The Build Better Series continues. Location to be announced. If you want to be on the early list when the next trip opens, get in touch now.
              </p>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact-footer")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border border-brand-gold/50 text-brand-gold hover:bg-brand-gold/10 rounded-full px-8 py-4 text-xs uppercase tracking-widest font-semibold transition-colors w-fit"
              >
                Join the Waitlist
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VIETNAM DIRECT DETAIL */}
      <section className="py-20 lg:py-28 bg-bg-dark border-b border-border-subtle relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 80% 20%, rgba(195, 163, 116, 0.2) 0%, transparent 50%)`
        }}></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-border-subtle"></div>
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold">Vietnam Direct 2026</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase leading-tight mb-8">
                7 DAYS. 10+ FACTORIES. <em className="font-display italic text-gradient-gold">ONE TRIP THAT CHANGES YOUR MARGINS FOREVER.</em>
              </h2>
              <p className="text-lg font-light leading-relaxed text-text-body mb-12">
                Co-hosted by Minh Mac (100B) and Lezlie Tram (LT Commercial Group). Designed specifically for Austin-area GCs, developers, and architects who are ready to build a direct supply chain in Vietnam.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="flex flex-col gap-2">
                  <span className="text-3xl lg:text-4xl font-display text-white">20-25%</span>
                  <span className="text-sm font-light text-text-muted border-t border-border-subtle pt-2">Savings vs. domestic</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-3xl lg:text-4xl font-display text-white">10+</span>
                  <span className="text-sm font-light text-text-muted border-t border-border-subtle pt-2">Pre-vetted factory partners</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-3xl lg:text-4xl font-display text-white">D2C</span>
                  <span className="text-sm font-light text-text-muted border-t border-border-subtle pt-2">Factory to job site. No markup.</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-3xl lg:text-4xl font-display text-white">7</span>
                  <span className="text-sm font-light text-text-muted border-t border-border-subtle pt-2">Days. HCM City to Hanoi.</span>
                </div>
              </div>
              
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact-footer")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-silver-gradient rounded-full px-8 py-4 text-xs uppercase tracking-widest font-semibold w-full sm:w-auto"
              >
                Request an Invite to Vietnam Direct 2026
              </button>
            </div>
            
            <div>
              <h3 className="text-xl font-serif text-white mb-8 flex items-center gap-3">
                <Building2 size={20} className="text-brand-gold" />
                Factory Categories
              </h3>
              <div className="flex flex-col gap-0 border-t border-border-subtle">
                {[
                  { name: "Engineered Wood & Panels", examples: "An Cuong · Phu Tai" },
                  { name: "Aluminum Windows & Doors", examples: "BM Windows · Eurowindow" },
                  { name: "Steel Structures", examples: "Dai Dung · Hoa Phat" },
                  { name: "Composite & Surface Materials", examples: "Tonmat · AA Corp" },
                  { name: "Packaging & Bioplastics", examples: "An Phat Holdings" },
                  { name: "Furniture & Interiors", examples: "Amy Grupo" }
                ].map((cat, i) => (
                  <div key={i} className="py-5 border-b border-border-subtle flex flex-col gap-1 hover:pl-4 transition-all duration-300 group">
                    <h4 className="font-bold font-sans text-white group-hover:text-brand-gold transition-colors">{cat.name}</h4>
                    <span className="text-sm font-light text-text-muted italic">{cat.examples}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONTAINER CLUB PROMO */}
      <section className="py-20 bg-bg-alt text-center flex flex-col items-center justify-center border-b border-border-subtle">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-border-subtle"></div>
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold">Container Club</p>
            <div className="w-8 h-px bg-border-subtle"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase leading-tight mb-8">
            THE PRIVATE NETWORK FOR PEOPLE WHO <em className="font-display italic text-gradient-gold">ACTUALLY MOVE GOODS.</em>
          </h2>
          <p className="text-lg font-light text-text-body mb-10">
            Everyone involved in cross-border trade — in one vetted network. By introduction only.
          </p>
          <Link href="/cc" className="inline-flex items-center gap-3 text-sm uppercase tracking-widest font-semibold text-white hover:text-brand-gold transition-colors group">
            Explore Container Club
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
