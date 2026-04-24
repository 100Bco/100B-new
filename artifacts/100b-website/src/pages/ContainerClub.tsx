import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContainerClub() {
  return (
    <div className="flex flex-col">
      {/* 1. HERO */}
      <section className="relative bg-bg-dark pt-32 pb-20 lg:pt-48 lg:pb-28 border-b border-border-subtle">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center text-center gap-8">
          <div className="inline-flex items-center rounded-full border border-brand-gold/30 bg-brand-gold/5 px-4 py-1.5 text-xs uppercase tracking-widest font-semibold text-brand-gold">
            Container Club
          </div>
          
          <h1 className="text-[44px] md:text-6xl lg:text-[100px] font-serif leading-[0.85] tracking-tight max-w-5xl">
            <span className="block">The private network for people who actually</span>
            <span className="block"><em className="font-serif italic text-gradient-gold">move goods.</em></span>
          </h1>
          
          <p className="text-lg lg:text-xl font-light leading-relaxed max-w-2xl text-text-body mt-4">
            Everyone involved in cross-border trade — in one vetted network. By introduction only.
          </p>
        </div>
      </section>

      {/* 2. WHAT IT IS */}
      <section className="py-20 lg:py-28 bg-bg-alt border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-border-subtle"></div>
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold">The Network</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase leading-tight mb-8">
                NOT A DIRECTORY. <em className="font-display italic text-gradient-gold">A NETWORK OF PEOPLE WHO ACTUALLY DELIVER.</em>
              </h2>
              
              <div className="flex flex-col gap-6 text-lg font-light leading-relaxed text-text-body mb-12">
                <p>
                  International trade has a trust problem. Finding a freight vendor who actually shows up, a customs broker who actually knows the regulations, a buyer who actually pays — it requires relationships that take years to build.
                </p>
                <p>
                  Container Club is 100B's vetted private network of everyone who makes cross-border trade work. Every member is introduced, not applied. Every member has a track record.
                </p>
                <p>
                  More details on membership coming soon. If you want to be on the early list, reach out directly.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a href="mailto:global@100b.co" className="btn-silver-gradient rounded-full px-8 py-4 text-xs uppercase tracking-widest font-semibold w-full sm:w-auto text-center">
                  Express Interest
                </a>
                <Link to="/trade" className="border border-brand-gold/50 text-brand-gold hover:bg-brand-gold/10 rounded-full px-8 py-4 text-xs uppercase tracking-widest font-semibold transition-colors w-full sm:w-auto text-center">
                  Back to Trade
                </Link>
              </div>
            </div>
            
            <div className="bg-bg-alt border border-brand-gold/30 p-8 md:p-12 rounded-3xl relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="mb-10 text-center md:text-left">
                <h3 className="font-serif text-5xl text-text-heading leading-none mb-3">
                  Container <span className="italic text-brand-gold">Club</span>
                </h3>
                <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-text-muted">
                  A 100B Network · By Introduction Only
                </p>
              </div>
              
              <ul className="flex flex-col gap-5 border-t border-border-subtle pt-8">
                {[
                  "Freight vendors and forwarders",
                  "Licensed customs brokers",
                  "Verified buyers and importers",
                  "Factory representatives",
                  "Trade finance specialists",
                  "Compliance and logistics advisors"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_8px_rgba(195,163,116,0.8)]"></div>
                    <span className="font-light text-white text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THREE PILLARS */}
      <section className="py-20 lg:py-28 bg-bg-dark border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6 justify-center">
            <div className="w-8 h-px bg-border-subtle"></div>
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold">Why It Works</p>
            <div className="w-8 h-px bg-border-subtle"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase leading-tight mb-16 text-center max-w-4xl mx-auto">
            THE PEOPLE WHO MAKE TRADE WORK <em className="font-display italic text-gradient-gold">DESERVE A ROOM OF THEIR OWN.</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                num: "01",
                title: "Vetted, not listed",
                desc: "Every member is introduced by someone already in the network. No cold applications. No unverified profiles. The vetting is the value."
              },
              {
                num: "02",
                title: "Real deal flow",
                desc: "When a 100B sourcing delegation closes a factory relationship, Container Club is the infrastructure that makes ongoing trade actually work. The network serves the deals."
              },
              {
                num: "03",
                title: "Asia-first focus",
                desc: "Built around the US-Vietnam corridor with the broader Asian trade network in view. The people in this room know how goods actually move across these borders."
              }
            ].map((pillar) => (
              <div key={pillar.num} className="flex flex-col items-center text-center gap-6">
                <div className="w-16 h-16 rounded-full border border-brand-gold/30 flex items-center justify-center bg-brand-gold/5 text-2xl font-serif text-brand-gold mb-2">
                  {pillar.num}
                </div>
                <h3 className="text-xl font-bold font-sans text-white">{pillar.title}</h3>
                <p className="font-light text-text-muted leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CLOSING CTA */}
      <section className="py-24 bg-bg-alt text-center flex flex-col items-center justify-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase leading-tight mb-8">
            BY INTRODUCTION ONLY. <em className="font-display italic text-gradient-gold">MORE DETAILS COMING SOON.</em>
          </h2>
          <p className="text-lg font-light text-text-body mb-10">
            If you want to be on the early list when Container Club formally opens, reach out now.
          </p>
          <a href="mailto:global@100b.co" className="btn-silver-gradient rounded-full px-10 py-4 text-sm uppercase tracking-widest font-semibold inline-block">
            global@100b.co
          </a>
        </div>
      </section>
    </div>
  );
}
