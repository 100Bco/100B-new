import { Link } from "react-router-dom";
import { Check } from "lucide-react";

export default function Build() {
  return (
    <div className="flex flex-col">
      {/* 1. HERO */}
      <section className="relative bg-bg-dark pt-32 pb-20 lg:pt-48 lg:pb-28 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-start gap-8">
          <div className="inline-flex items-center rounded-full border border-brand-gold/30 bg-brand-gold/5 px-4 py-1.5 text-xs uppercase tracking-widest font-semibold text-brand-gold">
            Build
          </div>
          
          <h1 className="text-[44px] md:text-6xl lg:text-[100px] font-serif leading-[0.85] tracking-tight max-w-5xl">
            <span className="block">The gateway for capital</span>
            <span className="block"><em className="font-serif italic text-gradient-gold">that moves between two worlds.</em></span>
          </h1>
          
          <p className="text-lg lg:text-xl font-light leading-relaxed max-w-2xl text-text-body mt-4">
            For US capital seeking Vietnam exposure. For Vietnamese founders ready for institutional backing. For operators serious about building something that crosses borders.
          </p>
        </div>
      </section>

      {/* 2. ACCESS VIETNAM 2026 */}
      <section className="py-20 lg:py-28 bg-bg-alt border-b border-border-subtle overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-border-subtle"></div>
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold">Access Vietnam 2026</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase leading-tight mb-8">
                A HISTORIC DELEGATION. <em className="font-display italic text-gradient-gold">21 DAYS. THREE COUNTRIES. ONE CORRIDOR OPENING.</em>
              </h2>
              <p className="text-lg font-light leading-relaxed text-text-body">
                Co-organized by 100B and the Greater Austin Asian Chamber of Commerce. Led by GAACC President and CEO Mark Duval, former President of AmCham China. The delegation brings senior government officials and business leaders from Austin, Houston, and Central Texas directly into Vietnam's top business and government circles.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-bg-dark rounded-2xl p-6 border border-white/5 flex flex-col justify-center text-center">
                <span className="text-4xl font-display text-white mb-2">21</span>
                <span className="text-[11px] uppercase tracking-widest text-text-muted">Days across three countries</span>
              </div>
              <div className="bg-bg-dark rounded-2xl p-6 border border-white/5 flex flex-col justify-center text-center">
                <span className="text-4xl font-display text-white mb-2">15+</span>
                <span className="text-[11px] uppercase tracking-widest text-text-muted">Business and government delegates</span>
              </div>
              <div className="bg-bg-dark rounded-2xl p-6 border border-white/5 flex flex-col justify-center text-center">
                <span className="text-4xl font-display text-white mb-2">3</span>
                <span className="text-[11px] uppercase tracking-widest text-text-muted">Countries: Taiwan, Vietnam, Singapore</span>
              </div>
            </div>
          </div>

          <div className="bg-bg-card p-8 lg:p-12 border border-brand-gold/20 rounded-3xl mb-16">
            <h3 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold mb-10 text-center lg:text-left">
              The Route — May 30 to June 19, 2026
            </h3>
            
            <div className="flex flex-col md:flex-row items-center justify-between relative">
              {/* Line connecting dots - visible on desktop */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-border-subtle -z-10 -translate-y-1/2"></div>
              
              {[
                { city: "Austin", date: "May 30", isVn: false },
                { city: "Taipei", date: "May 31", isVn: false },
                { city: "Hanoi", date: "Jun 7", isVn: true },
                { city: "HCM City", date: "Jun 11", isVn: true },
                { city: "Singapore", date: "Jun 13", isVn: false },
                { city: "Austin", date: "Jun 19", isVn: false }
              ].map((stop, i, arr) => (
                <div key={i} className="flex md:flex-col items-center gap-4 md:gap-4 w-full md:w-auto relative group">
                  {/* Line connecting dots - visible on mobile */}
                  {i !== arr.length - 1 && <div className="md:hidden absolute top-[11px] left-3 w-px h-16 bg-border-subtle -z-10"></div>}
                  
                  <div className={`w-6 h-6 rounded-full border-[4px] border-bg-card flex items-center justify-center ${stop.isVn ? 'bg-brand-gold shadow-[0_0_15px_rgba(195,163,116,0.5)]' : 'bg-white/20'}`}>
                    {stop.isVn && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                  </div>
                  
                  <div className="flex flex-col md:items-center text-left md:text-center pb-8 md:pb-0">
                    <span className={`font-bold font-sans ${stop.isVn ? 'text-brand-gold' : 'text-white'}`}>{stop.city}</span>
                    <span className="text-[11px] uppercase tracking-widest text-text-muted mt-1">{stop.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { num: "01", text: "Engage directly with Vietnam's top government organizations and business leaders." },
              { num: "02", text: "Strengthen diplomatic and economic ties between Vietnam and Austin/Houston." },
              { num: "03", text: "Explore concrete avenues for trade, investment, and business partnership." }
            ].map((obj) => (
              <div key={obj.num} className="flex flex-col gap-4">
                <span className="text-sm font-sans tracking-widest text-brand-gold font-bold">{obj.num}</span>
                <div className="w-full h-px bg-border-subtle"></div>
                <p className="text-text-body font-light leading-relaxed">{obj.text}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact-footer")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white hover:bg-brand-gold text-bg-dark rounded-full px-8 py-4 text-xs uppercase tracking-widest font-bold transition-colors duration-300"
            >
              Request Delegation Information
            </button>
          </div>
        </div>
      </section>

      {/* 3. AUSTIN AS DESTINATION */}
      <section className="py-20 lg:py-28 bg-bg-dark border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-border-subtle"></div>
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold">The Market</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase leading-tight">
                CENTRAL TEXAS HAS BECOME <em className="font-display italic text-gradient-gold">ASIA'S PREFERRED DESTINATION FOR CAPITAL.</em>
              </h2>
            </div>
            <div className="flex flex-col gap-6 text-lg font-light leading-relaxed text-text-body">
              <p>
                Driven by supply chain diversification and a global AI infrastructure supercycle, companies from Taiwan, Korea, Japan, Singapore, India, and Vietnam are aggressively investing in Central Texas.
              </p>
              <p>
                The $37B Samsung Taylor expansion has catalyzed a regional clustering effect drawing hundreds of Tier 1 and 2 suppliers to the Austin-San Antonio corridor.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4 border-t border-brand-gold/30 pt-8">
              <span className="text-5xl md:text-6xl font-display text-white">$37B</span>
              <p className="text-sm font-light text-text-muted leading-relaxed">Samsung Taylor expansion anchoring regional tech manufacturing cluster</p>
            </div>
            <div className="flex flex-col gap-4 border-t border-brand-gold/30 pt-8">
              <span className="text-5xl md:text-6xl font-display text-white">6</span>
              <p className="text-sm font-light text-text-muted leading-relaxed">Asian nations actively investing: Taiwan, Korea, Japan, Singapore, India, Vietnam</p>
            </div>
            <div className="flex flex-col gap-4 border-t border-brand-gold/30 pt-8">
              <span className="text-5xl md:text-6xl font-display text-white">100M</span>
              <p className="text-sm font-light text-text-muted leading-relaxed">Population in Vietnam's high-growth market</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW WE WORK */}
      <section className="py-20 lg:py-28 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-border-subtle"></div>
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold">How We Work</p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase leading-tight mb-8">
            THREE MODES. <em className="font-display italic text-gradient-gold">EVERY DEAL FITS ONE OF THEM.</em>
          </h2>
          <p className="text-lg lg:text-xl font-light leading-relaxed max-w-2xl text-text-muted mb-16">
            If it does not fit, we pass. That selectivity is what makes the deals we take worth something.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                num: "01",
                mode: "Build",
                title: "Co-build US brands with Vietnamese manufacturers",
                desc: "OEM-ready factories with zero US brand presence.",
                details: ["Starting focus: construction and finish materials", "Target partners: $30M-$200M+ annual revenue", "Structure: shared equity in US brand entity"]
              },
              {
                num: "02",
                mode: "Accelerate",
                title: "Come in as the operating partner",
                desc: "We identify the 5-10% of gaps causing 80% of the drag.",
                details: ["Equity stake: 3% to 20% depending on scope", "Target: $5M+ revenue businesses, any industry", "Cash retainer negotiated alongside equity"]
              },
              {
                num: "03",
                mode: "Connect",
                title: "Bridge capital across the corridor",
                desc: "Trusted introduction on either side.",
                details: ["Deal fees: 3-5% of capital or transaction value", "Advisory: board seats, 1-5% equity stakes", "Fastest path to revenue of the three modes"]
              }
            ].map((item) => (
              <div key={item.num} className="bg-bg-dark rounded-3xl p-8 lg:p-10 border border-border-subtle flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold">{item.mode}</span>
                  <span className="text-4xl font-display text-white/10">{item.num}</span>
                </div>
                <h3 className="text-lg lg:text-xl font-bold font-sans text-text-heading mb-4">{item.title}</h3>
                <p className="font-light text-text-body text-base leading-relaxed mb-8">{item.desc}</p>
                
                <div className="mt-auto pt-8 border-t border-border-subtle flex flex-col gap-3">
                  {item.details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-brand-gold font-bold mt-0.5">—</span>
                      <span className="text-sm font-light text-text-muted">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
