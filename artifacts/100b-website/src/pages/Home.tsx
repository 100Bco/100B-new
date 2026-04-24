import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Users, TrendingUp, Handshake, Check } from "lucide-react";
import { CountUp } from "@/components/CountUp";
import num01 from "@assets/01_1776952354216.png";
import num02 from "@assets/02_1776952354217.png";
import num03 from "@assets/03_1776952354218.png";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. HERO */}
      <section className="relative bg-bg-dark overflow-hidden h-screen min-h-[720px] flex flex-col justify-end border-b border-border-subtle">
        {/* Video layer — replace the <div> with a <video> when footage is delivered.
            Keep grain-overlay so the placeholder never looks like a missing asset. */}
        <div
          className="absolute inset-0 grain-overlay"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 70% 85%, rgba(195,163,116,0.10) 0%, transparent 65%),
              radial-gradient(ellipse 50% 45% at 10% 15%, rgba(255,255,255,0.025) 0%, transparent 55%),
              linear-gradient(180deg, #08070A 0%, #000000 55%, #000000 100%)
            `,
          }}
          aria-hidden
        />
        {/*
          When ready, replace the div above with:
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/hero-corridor.mp4" type="video/mp4" />
          </video>
          And keep the readability overlay below.
        */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.85) 100%)",
          }}
          aria-hidden
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 flex flex-col items-start gap-6 pb-16 lg:pb-24">
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-semibold text-brand-gold">
            <span className="w-10 h-px bg-brand-gold/60" />
            <span>Cross-Border Capital &amp; Brand Platform</span>
          </div>

          <h1 className="text-[40px] md:text-7xl lg:text-[108px] font-serif leading-[0.85] tracking-tight">
            <span className="block">The operating partner</span>
            <span className="block text-text-muted">for serious deals</span>
            <span className="block"><em className="font-serif italic text-gradient-gold">between two worlds.</em></span>
          </h1>

          <p className="text-base lg:text-lg font-normal leading-relaxed max-w-2xl text-text-body">
            We connect elite operators, capital, and builders across the US-Vietnam corridor. The deals worth doing are getting bigger and more complex. We are in those rooms.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link to="/build" className="btn-silver-gradient rounded-full px-8 py-4 text-xs uppercase tracking-widest font-semibold w-full sm:w-auto text-center">
              Explore Build
            </Link>
            <Link to="/trade" className="bg-white hover:bg-brand-gold text-bg-dark rounded-full px-8 py-4 text-xs uppercase tracking-widest font-semibold transition-colors duration-300 w-full sm:w-auto text-center border border-transparent">
              Explore Trade
            </Link>
          </div>

          {/* Proof strip — answers "who / where / proof" within 3 seconds.
              Reads as a credit line on a film poster, not a marketing bullet list. */}
          <div className="mt-6 pt-6 border-t border-white/10 w-full flex flex-wrap items-baseline gap-x-8 gap-y-3 text-[10px] uppercase tracking-[0.25em] text-text-muted">
            <span>Austin · Ho Chi Minh · Hanoi</span>
            <span className="w-px h-3 bg-border-subtle hidden sm:inline-block" aria-hidden />
            <span>Est. 2023</span>
            <span className="w-px h-3 bg-border-subtle hidden sm:inline-block" aria-hidden />
            <span>By introduction only</span>
          </div>
        </div>
      </section>

      {/* 2. WHY VIETNAM */}
      <section className="py-20 lg:py-28 bg-bg-alt border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase leading-tight mb-16">
            WHY VIETNAM. <em className="font-display italic text-gradient-gold">WHY NOW?</em>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-16">
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-serif text-text-heading">Your smartest bet in Asia</h3>
              <p className="text-lg font-light text-text-muted italic border-l border-brand-gold/30 pl-4 mb-8">
                "Vietnam isn't the next China. It's the next Vietnam."
              </p>
              <div className="w-full max-w-md mx-auto">
                <img src="/globe.png" alt="Vietnam on the globe" className="w-full object-contain" />
              </div>
            </div>
            
            <div className="flex flex-col gap-8 justify-center">
              <div className="flex gap-4 items-start">
                <div className="mt-1 bg-brand-gold/10 p-2 rounded-full border border-brand-gold/20">
                  <MapPin size={20} className="text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-sans text-text-heading">Strategic Location</h4>
                  <p className="text-text-muted font-light mt-1">Gateway to ASEAN and direct maritime routes to the US.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-1 bg-brand-gold/10 p-2 rounded-full border border-brand-gold/20">
                  <Handshake size={20} className="text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-sans text-text-heading">Trade Agreements</h4>
                  <p className="text-text-muted font-light mt-1">Deep integration via EU, UK, and CPTPP frameworks.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-1 bg-brand-gold/10 p-2 rounded-full border border-brand-gold/20">
                  <Users size={20} className="text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-sans text-text-heading">Young Dynamic Workforce</h4>
                  <p className="text-text-muted font-light mt-1">Highly educated, tech-literate, and highly adaptable labor pool.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-1 bg-brand-gold/10 p-2 rounded-full border border-brand-gold/20">
                  <TrendingUp size={20} className="text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-sans text-text-heading">Competitive Operational Costs</h4>
                  <p className="text-text-muted font-light mt-1">Attractive margins for manufacturing and scaling operations.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-1 bg-brand-gold/10 p-2 rounded-full border border-brand-gold/20">
                  <Check size={20} className="text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-sans text-text-heading">Stable Pro-Business Government</h4>
                  <p className="text-text-muted font-light mt-1">Consistent policies prioritizing FDI and infrastructure development.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-bg-card rounded-3xl p-8 md:p-12 border border-border-subtle grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { to: 100, suffix: "M", label: "People. 70% Under 35" },
              { to: 15, suffix: "+", label: "Free Trade Agreements" },
              { to: 405, prefix: "$", suffix: "B", label: "In Exports" },
              { to: 38, prefix: "$", suffix: "B", label: "In FDI" },
              { to: 1, prefix: "#", label: "Manufacturing in SEA" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2">
                <span className="text-4xl md:text-5xl font-display text-gradient-gold">
                  <CountUp to={stat.to} prefix={stat.prefix} suffix={stat.suffix} />
                </span>
                <span className="text-sm font-light text-text-body">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THREE MODES */}
      <section className="py-20 lg:py-28 bg-bg-dark border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase leading-tight mb-8">
            THREE WAYS 100B <em className="font-display italic text-gradient-gold">BUILDS WITH YOU.</em>
          </h2>
          <p className="text-lg lg:text-xl font-light leading-relaxed max-w-2xl text-text-muted mb-16">
            Every deal we take fits one of these three modes. If it does not fit any of them, we pass.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                img: num01,
                imgOpacity: 1,
                mode: "BUILD",
                title: "CO-BUILD BRANDS FROM SCRATCH",
                items: [
                  "End-to-end US brand creation",
                  "Market entry strategy & distribution",
                  "Vietnam manufacturing network access",
                  "Shared equity model"
                ]
              },
              {
                img: num02,
                imgOpacity: 0.65,
                mode: "ACCELERATE",
                title: "COME IN AS THE OPERATING PARTNER",
                items: [
                  "Operations gap analysis",
                  "Workflow redesign & restructuring",
                  "Hands-on execution management",
                  "Equity stake partnership"
                ]
              },
              {
                img: num03,
                imgOpacity: 0.65,
                mode: "CONNECT",
                title: "BRIDGE CAPITAL ACROSS BORDERS",
                items: [
                  "Cross-border capital introductions",
                  "Founder-to-founder network access",
                  "Bilateral deal flow facilitation",
                  "Trusted corridor navigation"
                ]
              }
            ].map((item) => (
              <div key={item.mode} className="bg-bg-card rounded-2xl border border-border-subtle hover:border-brand-gold/40 transition-colors duration-500 overflow-hidden group">
                {/* Header: number image + mode word side by side */}
                <div className="flex items-center gap-4 px-7 pt-7 pb-4">
                  <img
                    src={item.img}
                    alt=""
                    className="h-[80px] w-auto shrink-0"
                    style={{ opacity: item.imgOpacity }}
                  />
                  <span className="font-display uppercase text-[22px] lg:text-[26px] text-brand-gold font-bold tracking-wide leading-none">
                    {item.mode}
                  </span>
                </div>
                {/* Title below header */}
                <div className="px-7 pb-3">
                  <h3 className="font-display uppercase text-text-heading leading-snug text-sm lg:text-base">
                    {item.title}
                  </h3>
                </div>
                {/* Checklist */}
                <div className="mx-7 pb-7 pt-4 border-t border-border-subtle space-y-0">
                  {item.items.map((bullet, i) => (
                    <div key={i} className="flex items-start gap-3 pt-4">
                      <div className="w-5 h-5 icon-silver-gradient shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#111]" strokeWidth={2.5} />
                      </div>
                      <p className="text-text-muted text-sm leading-relaxed">{bullet}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TWO PLATFORMS */}
      <section className="py-20 lg:py-28 bg-bg-alt border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase leading-tight mb-16">
            TWO PLATFORMS. <em className="font-display italic text-gradient-gold">ONE CORRIDOR.</em>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-gold-gradient rounded-3xl p-8 lg:p-10 text-black flex flex-col min-h-[500px]">
              <div className="text-[11px] uppercase tracking-[0.2em] font-bold mb-8">Trade</div>
              <h3 className="text-3xl lg:text-4xl font-serif font-medium text-black mb-6">Direct-to-factory sourcing across Asia</h3>
              <p className="text-black/80 font-medium mb-12">We organize direct-sourcing delegations and maintain the vetted trade network for builders who are serious about controlling material costs.</p>
              
              <div className="flex flex-col gap-4 mt-auto mb-12">
                <Link to="/trade" className="flex items-center gap-3 font-semibold hover:translate-x-2 transition-transform">
                  Build Better Series <ArrowRight size={16} />
                </Link>
                <Link to="/trade" className="flex items-center gap-3 font-semibold hover:translate-x-2 transition-transform">
                  Vietnam Direct 2026 <ArrowRight size={16} />
                </Link>
                <Link to="/cc" className="flex items-center gap-3 font-semibold hover:translate-x-2 transition-transform">
                  Container Club <ArrowRight size={16} />
                </Link>
              </div>
              
              <Link to="/trade" className="border border-black hover:bg-black hover:text-brand-gold rounded-full px-8 py-4 text-xs uppercase tracking-widest font-bold transition-colors w-fit">
                Explore Trade
              </Link>
            </div>

            <div className="bg-silver-gradient rounded-3xl p-8 lg:p-10 text-black flex flex-col min-h-[500px]">
              <div className="text-[11px] uppercase tracking-[0.2em] font-bold mb-8">Build</div>
              <h3 className="text-3xl lg:text-4xl font-serif font-medium text-black mb-6">Capital and partnerships across borders</h3>
              <p className="text-black/80 font-medium mb-12">The gateway for capital seeking exposure. For founders ready for institutional backing. For operators building something that crosses borders.</p>
              
              <div className="flex flex-col gap-4 mt-auto mb-12">
                <Link to="/build" className="flex items-center gap-3 font-semibold hover:translate-x-2 transition-transform">
                  Access Vietnam 2026 <ArrowRight size={16} />
                </Link>
                <Link to="/build" className="flex items-center gap-3 font-semibold hover:translate-x-2 transition-transform">
                  Advisory & Equity Stakes <ArrowRight size={16} />
                </Link>
                <Link to="/build" className="flex items-center gap-3 font-semibold hover:translate-x-2 transition-transform">
                  Cross-Border Deal Flow <ArrowRight size={16} />
                </Link>
              </div>
              
              <Link to="/build" className="border border-black hover:bg-black hover:text-white rounded-full px-8 py-4 text-xs uppercase tracking-widest font-bold transition-colors w-fit">
                Explore Build
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LETTER FROM THE FOUNDER
          Full-width cream archival surface — the single typographic break in the
          page flow, engineered to read as a printed document, not marketing copy.
          Portrait placeholder on the left accepts a real headshot later. */}
      <section className="surface-paper relative overflow-hidden border-y border-paper-rule/40">
        {/* Aged paper corner shadows */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 0% 0%, rgba(26,21,16,0.10) 0%, transparent 55%),
              radial-gradient(ellipse 70% 50% at 100% 100%, rgba(26,21,16,0.12) 0%, transparent 55%)
            `,
          }}
          aria-hidden
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 relative">
          {/* Letterhead row */}
          <div className="flex items-center justify-between border-b border-paper-rule/60 pb-6 mb-12">
            <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-semibold" style={{ color: "var(--color-paper-ink)" }}>
              <span>100B · Founder's Letter</span>
              <span className="hidden sm:inline-block w-px h-3" style={{ background: "var(--color-paper-rule)" }} aria-hidden />
              <span className="hidden sm:inline opacity-60">No. 001</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] font-semibold opacity-60" style={{ color: "var(--color-paper-ink)" }}>
              Austin · Hanoi
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,320px)_1fr] gap-12 lg:gap-20 items-start">
            {/* Portrait + caption */}
            <div className="flex flex-col gap-5">
              <div
                className="aspect-[4/5] w-full overflow-hidden border relative"
                style={{ borderColor: "var(--color-paper-rule)", background: "rgba(26,21,16,0.04)" }}
              >
                {/*
                  Portrait slot — drop in Minh's real headshot.
                  Suggested treatment: duotone in paper-ink / paper-cream for consistency
                  with the archival surface.
                  <img src="/minh-mac-portrait.jpg" alt="Minh Mac, Founder" className="w-full h-full object-cover" />
                */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center" style={{ color: "rgba(26,21,16,0.35)" }}>
                    <div className="font-serif italic text-5xl leading-none mb-3">MM</div>
                    <div className="text-[9px] uppercase tracking-[0.3em]">Portrait · Placeholder</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1" style={{ color: "var(--color-paper-ink)" }}>
                <div className="font-serif text-xl italic leading-none">Minh Mac</div>
                <div className="text-[11px] uppercase tracking-[0.2em] font-semibold opacity-70 mt-1">
                  Founder &amp; Managing Partner
                </div>
              </div>
            </div>

            {/* Letter body */}
            <article className="flex flex-col gap-6" style={{ color: "var(--color-paper-ink)" }}>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight">
                I left Vietnam at 17.
                <br />
                <em
                  className="italic"
                  style={{
                    background: "linear-gradient(135deg, #6E4E18 0%, #937C54 60%, #3A2A10 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  I have been building between two worlds ever since.
                </em>
              </h2>

              <div className="prose-body flex flex-col gap-5 max-w-[62ch] mt-4">
                <p>
                  The next decade was a private equity desk in New York covering roughly
                  <strong className="font-semibold"> $65B in AUM</strong>, a run in U.S. real estate, and co-founding a
                  Southeast Asia consumer tech company that reached{" "}
                  <strong className="font-semibold">1.6 million users</strong>. Different rooms, same thesis: capital
                  moves faster than relationships, and the highest-value deals are the
                  ones where both sides have already been translated.
                </p>
                <p>
                  100B exists for a specific reason. The U.S.–Vietnam corridor is getting
                  bigger, more complex, and more regulated — and there is a short list of
                  people who can stand in both rooms and actually be trusted. I spent
                  fifteen years getting onto that list. 100B is what we are building with it.
                </p>
                <p>
                  We are selective by design. We say no to most things. The deals we take,
                  we stay in — through structuring, through operations, through the hand-off.
                  If any of this is relevant to you, the door is open.
                </p>
              </div>

              {/* Signature row */}
              <div className="mt-8 pt-8 border-t" style={{ borderColor: "var(--color-paper-rule)" }}>
                <div
                  className="font-serif italic text-3xl md:text-4xl leading-none mb-4"
                  style={{ color: "var(--color-paper-ink)" }}
                >
                  Minh Mac
                </div>
                <div className="flex flex-wrap items-baseline gap-x-8 gap-y-2 text-[10px] uppercase tracking-[0.25em] font-semibold opacity-70">
                  <span>Founder, 100B</span>
                  <span className="w-px h-3" style={{ background: "var(--color-paper-rule)" }} aria-hidden />
                  <span>Prev. Neuberger Berman · 15+ years US / Vietnam</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 6. FOUNDERS SPEAK — static editorial grid, not a carousel.
          One lead quote full-width (FT Lex treatment), five supporting quotes in a
          3/2 mosaic. Every quote is visible at once — readers this age want to
          read, not wait for content to rotate in. */}
      <section className="py-20 lg:py-28 bg-bg-alt border-b border-border-subtle overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-border-subtle" />
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold">
              Founders Who Chose Us
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase leading-tight mb-16 max-w-4xl">
            In the rooms we already{" "}
            <em className="font-display italic text-gradient-gold">stand in.</em>
          </h2>

          {/* Lead quote — full width, FT Lex column */}
          <figure className="relative border-t border-b border-brand-gold/20 py-12 lg:py-16 mb-16">
            <div
              className="absolute -top-8 left-0 text-[140px] leading-none font-serif select-none pointer-events-none"
              style={{ color: "rgba(195,163,116,0.12)" }}
              aria-hidden
            >
              &ldquo;
            </div>
            <blockquote className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-end">
              <p className="font-serif text-2xl md:text-3xl lg:text-[34px] italic leading-[1.3] text-text-heading max-w-[42ch]">
                When we started in 2017 with only about $3,500, we never imagined
                selling millions of products — let alone going global. Meeting Minh
                and 100B gave us the courage to leave our comfort zone.
              </p>
              <figcaption className="flex flex-col gap-1 lg:min-w-[200px] lg:text-right">
                <span className="text-[10px] uppercase tracking-[0.25em] text-brand-gold font-semibold">
                  Founder
                </span>
                <span className="font-serif italic text-xl text-text-heading mt-1">
                  Sandy Phuong Nguyen
                </span>
                <span className="text-xs text-text-body uppercase tracking-widest font-semibold">
                  Cỏ Cây Hoa Lá
                </span>
                <span className="text-[11px] text-text-muted italic mt-2 max-w-[26ch] lg:ml-auto">
                  Vietnamese wellness brand · 4.3M products sold
                </span>
              </figcaption>
            </blockquote>
          </figure>

          {/* Supporting quotes mosaic */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border-subtle">
            {[
              {
                name: "Long Lu",
                title: "Founder",
                company: "MISA",
                desc: "Leading accounting software, 80%+ market share",
                quote:
                  "Your efforts are elevating the value of Vietnam in the eyes of the world and driving the country's development.",
              },
              {
                name: "Vinh Ha",
                title: "Founder",
                company: "Quang Vinh Ceramics",
                desc: "Heritage ceramics exporting to 20+ countries",
                quote:
                  "100B has been a launchpad — opening opportunities for our manufacturing team to access global markets.",
              },
              {
                name: "Thang Luu",
                title: "Co-Founder",
                company: "Hexagon",
                desc: "Interior firm · 4 factories · 5,000+ projects",
                quote:
                  "The direction and vision of 100B deeply aligns with Hexagon's values. We're excited for the partnership.",
              },
              {
                name: "Thanh Dong",
                title: "Co-Founder",
                company: "Kalotoys",
                desc: "Rising toy brand · 8,000+ orders/day · 98% export",
                quote:
                  "With 100B as a launchpad, we hope Kalotoys — and millions of other Vietnamese brands — can win the trust of global customers.",
              },
              {
                name: "Nguyen Thi Huong Lien",
                title: "Co-Founder",
                company: "Sao Thái Dương",
                desc: "Herbal care · 240M+ products sold worldwide",
                quote:
                  "Congratulations to 100B on such an inspiring and impactful mission for Vietnam's economic future.",
              },
              {
                name: null,
                title: null,
                company: null,
                desc: null,
                quote: null,
              },
            ].map((q, idx) =>
              q.name ? (
                <figure
                  key={idx}
                  className="bg-bg-alt p-8 lg:p-10 flex flex-col justify-between min-h-[280px] hover:bg-bg-card-hover transition-colors duration-300"
                >
                  <blockquote className="font-serif italic text-lg lg:text-xl leading-[1.45] text-text-body">
                    &ldquo;{q.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 pt-6 border-t border-border-subtle">
                    <div className="font-serif italic text-lg text-text-heading leading-tight">
                      {q.name}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-brand-gold font-semibold mt-2">
                      {q.title} · <span className="font-bold">{q.company}</span>
                    </div>
                    <div className="text-[11px] text-text-muted italic mt-1">
                      {q.desc}
                    </div>
                  </figcaption>
                </figure>
              ) : (
                <div
                  key={idx}
                  className="bg-bg-alt p-8 lg:p-10 flex flex-col items-start justify-end min-h-[280px]"
                >
                  <div className="text-[10px] uppercase tracking-[0.25em] text-brand-gold font-semibold mb-3">
                    Selective by design
                  </div>
                  <div className="font-serif italic text-2xl lg:text-3xl text-text-heading leading-tight max-w-[20ch]">
                    We say no to most things.
                  </div>
                  <p className="text-sm text-text-muted font-normal leading-relaxed mt-4 max-w-[28ch]">
                    The partners we take on stay with us for years. That is what makes this page short.
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
