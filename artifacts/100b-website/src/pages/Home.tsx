import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Users, TrendingUp, Handshake, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CountUp } from "@/components/CountUp";
import cchlPhoto from "@assets/CCHL.webp";
import misaPhoto from "@assets/MISA.webp";
import quangVinhPhoto from "@assets/Gom Quang Vinh.webp";
import hexagonPhoto from "@assets/Hexagon.webp";
import kalotoysPhoto from "@assets/Kalotoys.jpg";
import saoThaiDuongPhoto from "@assets/Sao Thai Duong.webp";
import num01 from "@assets/01_1776952354216.png";
import num02 from "@assets/02_1776952354217.png";
import num03 from "@assets/03_1776952354218.png";

const testimonials = [
  {
    name: "Sandy Phuong Nguyen",
    title: "FOUNDER",
    company: "CỎ CÂY HOA LÁ",
    desc: "Rising Vietnamese wellness brand, 4.3 million products sold in 6 years",
    quote: "When we started in 2017 with only ~3,500 USD, we never imagined selling millions of products—let alone dreaming about going global. But meeting Minh and 100B gave us courage. We dared to leave our comfort zone and dream bigger. I truly believe: TOGETHER, with 100B, we'll empower more Vietnamese brands to succeed globally.",
    headline: "VIETNAMESE SPIRIT, GLOBAL ASPIRATION",
    photo: cchlPhoto as string | null,
    initial: "CỎ"
  },
  {
    name: "Long Lu",
    title: "FOUNDER",
    company: "MISA",
    desc: "Leading accounting software company, 80%+ market share",
    quote: "Congratulations to Minh and the 100B team for their outstanding work in bringing Vietnamese brands and products to the global market. Your efforts are helping elevate the value of Vietnam in the eyes of the world and driving the country's development.",
    headline: "ELEVATING VIETNAM'S GLOBAL VALUE",
    photo: misaPhoto as string | null,
    initial: "M"
  },
  {
    name: "Vinh Ha",
    title: "FOUNDER",
    company: "QUANG VINH CERAMICS",
    desc: "Heritage ceramics maker, exporting to 20+ countries",
    quote: "Huge thanks to 100B for helping Quang Vinh Ceramics see the world with a new perspective—alongside a strong and global-minded community of Vietnamese entrepreneurs. 100B has been a launchpad and a support system, opening opportunities for our manufacturing team to access global markets.",
    headline: "A LAUNCHPAD TO GLOBAL MARKETS",
    photo: quangVinhPhoto as string | null,
    initial: "QV"
  },
  {
    name: "Thang Luu",
    title: "CO-FOUNDER",
    company: "HEXAGON",
    desc: "Top interior firm with 4 factories and 5,000+ completed projects",
    quote: "It's been a joy working with 100B. The direction and vision of 100B deeply aligns with Hexagon's values. We're excited for this partnership and the connections it brings.",
    headline: "ALIGNMENT IN VISION AND VALUES",
    photo: hexagonPhoto as string | null,
    initial: "HX"
  },
  {
    name: "Thanh Dong",
    title: "CO-FOUNDER",
    company: "KALOTOYS",
    desc: "Rising toy brand, 8,000+ orders/day, 98% export revenue",
    quote: "Born from the love of two fathers, Kalotoys has touched the hearts of millions of children and parents around the world. With 100B as a launchpad, we hope Kalotoys—and millions of other Vietnamese brands—can win the trust of global customers.",
    headline: "STEPPING ONTO THE GLOBAL STAGE",
    photo: kalotoysPhoto as string | null,
    initial: "KT"
  },
  {
    name: "Nguyen Thi Huong Lien",
    title: "CO-FOUNDER",
    company: "SAO THÁI DƯƠNG",
    desc: "Herbal care pioneer, 240M+ products sold worldwide",
    quote: "Congratulations to 100B on such an inspiring and impactful mission for Vietnam's economic future.",
    headline: "AN INSPIRING & IMPACTFUL MISSION",
    photo: saoThaiDuongPhoto as string | null,
    initial: "STD"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {/* 1. HERO */}
      <section className="relative bg-bg-dark overflow-hidden h-screen min-h-[720px] flex flex-col justify-center border-b border-border-subtle">
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

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 flex flex-col items-start gap-6 pt-24 lg:pt-28">
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
            {/* Build — darker brushed gunmetal. Uses brand text tokens. */}
            <div
              className="rounded-3xl p-7 lg:p-9 flex flex-col min-h-[440px] shadow-[0_20px_60px_-25px_rgba(0,0,0,0.9)]"
              style={{
                background: "linear-gradient(135deg, #6B6B6B 0%, #262626 100%)",
              }}
            >
              <div className="text-[11px] uppercase tracking-[0.25em] font-semibold text-text-heading mb-6">Build</div>
              <h3 className="text-3xl lg:text-4xl font-serif font-medium text-text-heading leading-tight mb-5">Capital and partnerships across borders</h3>
              <p className="text-text-body leading-relaxed mb-8">The gateway for capital seeking exposure. For founders ready for institutional backing. For operators building something that crosses borders.</p>

              <div className="flex flex-col border-t border-white/20">
                <Link to="/build" className="group flex items-center justify-between py-3 border-b border-white/20 text-text-heading hover:text-brand-gold transition-colors">
                  <span className="font-serif text-xl">Access Vietnam 2026</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/build" className="group flex items-center justify-between py-3 border-b border-white/20 text-text-heading hover:text-brand-gold transition-colors">
                  <span className="font-serif text-xl">Advisory &amp; Equity Stakes</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/build" className="group flex items-center justify-between py-3 text-text-heading hover:text-brand-gold transition-colors">
                  <span className="font-serif text-xl">Cross-Border Deal Flow</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <Link to="/build" className="mt-8 btn-silver-gradient rounded-full px-8 py-4 text-xs uppercase tracking-widest font-semibold w-fit">
                Explore Build
              </Link>
            </div>

            {/* Trade — dark antique brass, brand-gold palette. Brand text tokens. */}
            <div
              className="rounded-3xl p-7 lg:p-9 flex flex-col min-h-[440px] shadow-[0_20px_60px_-25px_rgba(0,0,0,0.9)]"
              style={{
                background: "linear-gradient(135deg, #7C6542 0%, #2A1D0B 100%)",
              }}
            >
              <div className="text-[11px] uppercase tracking-[0.25em] font-semibold text-text-heading mb-6">Trade</div>
              <h3 className="text-3xl lg:text-4xl font-serif font-medium text-text-heading leading-tight mb-5">Direct-to-factory sourcing across Asia</h3>
              <p className="text-text-body leading-relaxed mb-8">We organize direct-sourcing delegations and maintain the vetted trade network for builders who are serious about controlling material costs.</p>

              <div className="flex flex-col border-t border-white/20">
                <Link to="/trade" className="group flex items-center justify-between py-3 border-b border-white/20 text-text-heading hover:text-brand-gold transition-colors">
                  <span className="font-serif text-xl">Build Better Series</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/trade" className="group flex items-center justify-between py-3 border-b border-white/20 text-text-heading hover:text-brand-gold transition-colors">
                  <span className="font-serif text-xl">Vietnam Direct 2026</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/cc" className="group flex items-center justify-between py-3 text-text-heading hover:text-brand-gold transition-colors">
                  <span className="font-serif text-xl">Container Club</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <Link to="/trade" className="mt-8 btn-silver-gradient rounded-full px-8 py-4 text-xs uppercase tracking-widest font-semibold w-fit">
                Explore Trade
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE MOAT */}
      <section className="py-20 lg:py-28 bg-bg-dark border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase leading-tight mb-12">
            ONE PERSON FLUENT IN <em className="font-display italic text-gradient-gold">BOTH WORLDS.</em>
          </h2>

          {/* 2-col: bio left | 2 stats right */}
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-0 items-center mb-16">

            {/* Left: bio */}
            <div className="lg:border-r border-border-subtle lg:pr-16 py-6">
              <p className="text-base lg:text-xl font-light leading-relaxed text-text-body">
                Minh Mac left Vietnam at 17. Spent a decade building across the US — private equity covering a $65B portfolio, real estate, and a 1.6M-user tech startup in SEA. This cross-border identity opens rooms in both markets that most can only access from one side.
              </p>
            </div>

            {/* Right: both stats side by side */}
            <div className="grid grid-cols-2 lg:pl-16 py-6">
              <div className="flex flex-col border-r border-border-subtle pr-8">
                <span className="text-[64px] lg:text-[80px] font-display leading-none mb-2">
                  <span className="text-brand-gold">$</span>65B
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-text-muted font-semibold">AUM Coverage</span>
              </div>
              <div className="flex flex-col pl-8">
                <span className="text-[64px] lg:text-[80px] font-display leading-none mb-2">1.6M</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-text-muted font-semibold">Startup Users</span>
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Private Equity Lens", points: ["Institutional deal structuring", "Leverage & risk modeling", "Clear exit timelines"] },
              { title: "Operator Record", points: ["Hands-on business building", "Agency vetting & replacement", "Go-to-market execution"] },
              { title: "In Both Rooms", points: ["Austin local boardrooms", "Hanoi business networks", "Immediate trust bridges"] },
              { title: "Selective By Design", points: ["High rejection rate", "Strict 100B fit criteria", "Preserved partner value"] }
            ].map((card) => (
              <div key={card.title} className="bg-[#111111] p-6 lg:p-8 rounded-2xl flex flex-col border border-white/5">
                <h3 className="font-display italic text-gradient-gold uppercase tracking-wide text-xl mb-6">{card.title}</h3>
                <ul className="flex flex-col gap-4 mt-auto">
                  {card.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-4 h-4 icon-silver-gradient">
                        <Check size={9} className="text-[#111]" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm font-light text-text-muted leading-tight">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FOUNDERS SPEAK — constrained to a single viewport height. */}
      <section className="min-h-screen h-screen flex flex-col bg-bg-alt border-b border-border-subtle overflow-hidden py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative w-full flex-1 flex flex-col">
          <div className="flex-1 min-h-0 flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="w-full grid grid-cols-1 lg:grid-cols-[1fr_minmax(280px,420px)] gap-8 lg:gap-14 items-center"
              >
                {/* Left — quote content */}
                <div className="relative flex flex-col justify-center">
                  <div className="absolute -top-6 -left-4 text-[140px] leading-none font-serif select-none pointer-events-none text-white/5">"</div>
                  <h3 className="font-display uppercase tracking-wide text-gradient-gold mb-5 lg:mb-6 relative z-10 leading-[1.05] text-[22px] md:text-[28px] lg:text-[34px]">
                    "{testimonials[currentSlide].headline}"
                  </h3>
                  <p className="text-lg md:text-xl lg:text-[22px] font-normal font-serif italic leading-[1.55] text-text-body mb-6 lg:mb-8 relative z-10 line-clamp-6 lg:line-clamp-none">
                    {testimonials[currentSlide].quote}
                  </p>
                  <div className="w-10 h-px bg-brand-gold/50 mb-4"></div>
                  <div className="flex flex-col gap-1">
                    <span className="font-serif italic text-lg md:text-xl text-text-heading">
                      {testimonials[currentSlide].name}
                    </span>
                    <span className="text-[11px] uppercase tracking-widest text-brand-gold font-semibold mt-1">
                      {testimonials[currentSlide].title} · <span className="font-bold">{testimonials[currentSlide].company}</span>
                    </span>
                    <span className="text-xs text-text-muted italic mt-1">{testimonials[currentSlide].desc}</span>
                  </div>
                </div>

                {/* Right — photo with silver gradient frame matched to the Build card frame */}
                <div
                  className="w-full aspect-[4/5] max-h-[min(58vh,500px)] mx-auto rounded-[28px] p-[12px] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(105.42deg, #EAEAEA 0%, #C9C9C9 36%, #FFFFFF 49%, #EAEAEA 69%, #6A6A6A 94%)",
                  }}
                >
                  <div className="w-full h-full rounded-[18px] overflow-hidden ring-1 ring-black/20">
                    {testimonials[currentSlide].photo ? (
                      <img
                        src={testimonials[currentSlide].photo!}
                        alt={testimonials[currentSlide].company}
                        className="w-full h-full object-cover grayscale"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-4 w-full h-full bg-[#111111]">
                        <span className="text-6xl lg:text-7xl font-display text-gradient-gold opacity-30 leading-none">
                          {testimonials[currentSlide].initial}
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-text-muted">
                          {testimonials[currentSlide].company}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-3 mt-8 shrink-0">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  idx === currentSlide ? "w-8 bg-brand-gold" : "w-2 bg-white/15 hover:bg-white/30"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
