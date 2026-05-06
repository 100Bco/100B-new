"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Users, TrendingUp, Handshake, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CountUp } from "@/components/CountUp";
import waitlistBg from "@assets/Lien he.png";
import corridorEmblem from "@assets/100B Emblem.png";
import cchlPhoto from "@assets/CCHL.webp";
import misaPhoto from "@assets/MISA.webp";
import quangVinhPhoto from "@assets/Gom Quang Vinh.webp";
import hexagonPhoto from "@assets/Hexagon.webp";
import kalotoysPhoto from "@assets/Kalotoys.jpg";
import saoThaiDuongPhoto from "@assets/Sao Thai Duong.webp";
import num01 from "@assets/01_1776952354216.png";
import num02 from "@assets/02_1776952354217.png";
import num03 from "@assets/03_1776952354218.png";
import socialPress1 from "@assets/press/Social Press 1.jpg";
import socialPress2 from "@assets/press/Social Press 2.jpeg";
import socialPress3 from "@assets/press/Social Press 3.webp";
import socialPress4 from "@assets/press/Social Press 4.jpg";
import businessPress1 from "@assets/press/Business Press 1.jpg";
import businessPress2 from "@assets/press/Business Press 2.jpg";
import businessPress3 from "@assets/press/Business Press 3.jpg";
import nextButtonIcon from "@assets/carbon_next-filled_1777018054288.png";

// Press / media coverage. Drop files into `attached_assets/press/` and wire
// them up via the `image` field. When `image` is null we fall back to a
// gradient placeholder tile so the layout never breaks.
type PressItem = {
  tag: string;
  title: string;
  description: string;
  link: string;
  image: string | null;
};

const pressArticles: PressItem[] = [
  {
    tag: "Ministry of Foreign Affairs",
    title: "Vietnamese diaspora business delegation received at Vietnam's Ministry of Foreign Affairs",
    description:
      "Deputy Minister Le Thi Thu Hang welcomed a delegation of overseas Vietnamese business leaders to deepen cross-border investment ties and strengthen institutional bridges with the homeland.",
    link: "https://scov.gov.vn/cong-tac-ve-nvnonn/tin-tuc/thu-truong-le-thi-thu-hang-tiep-dai-dien-hiep-hoi-doanh-nhan-viet-nam-o-nuoc-ngoai.html",
    image: socialPress1.src,
  },
  {
    tag: "Ministry of Culture, Sports and Tourism",
    title: "Carrying Vietnamese identity onto the global stage",
    description:
      "A national event recognized the next generation of overseas Vietnamese entrepreneurs as cultural ambassadors and a strategic bridge between the homeland and global markets.",
    link: "https://www.vietnam.vn/ngay-quoc-to-viet-nam-toan-cau-va-chuyen-cua-nhung-nguoi-con-xa-xu",
    image: socialPress2.src,
  },
  {
    tag: "Vietnam Real Estate Association",
    title: "Three associations align across real estate, tourism and overseas business",
    description:
      "Leadership from VNREA, VITA and the global Vietnamese business community convened in Hanoi to coordinate cross-sector capital flows between Vietnam and its diaspora.",
    link: "https://vnrea.vn/gap-mat-tan-xuan-giua-ba-hiep-hoi-vnrea-vita-va-baoov-20240229112855902.html",
    image: socialPress3.src,
  },
  {
    tag: "Vietnam Public Affairs",
    title: "21 solidarity homes delivered to families in Vietnam's Northwest provinces",
    description:
      "In partnership with the Vietnam Fatherland Front, the global Vietnamese business community channeled philanthropic capital to support underserved households in Dien Bien.",
    link: "https://m.mattran.org.vn/hoat-dong/hiep-hoi-doanh-nhan-viet-nam-o-nuoc-ngoai-trao-tang-21-can-nha-dai-doan-ket-cho-ho-ngheo-cua-tinh-dien-bien-va-cac-tinh-tay-bac-54522.html",
    image: socialPress4.src,
  },
  {
    tag: "Vietnam News Agency",
    title: "Positioning Vietnamese brands on international media",
    description:
      "A national symposium in Ho Chi Minh City explored how to elevate Vietnamese companies onto global media platforms — a strategic priority for the next wave of cross-border deals.",
    link: "https://baotintuc.vn/kinh-te/dinh-vi-thuong-hieu-doanh-nghiep-viet-tren-truyen-thong-quoc-te-20240127214011094.htm",
    image: businessPress1.src,
  },
  {
    tag: "Vietnam Chamber of Commerce and Industry",
    title: "Overseas Vietnamese entrepreneurs pledge investment in national development",
    description:
      "Diaspora business leaders committed to deeper collaboration and capital partnership to support Vietnam's growth — signaling a new chapter for cross-border investment.",
    link: "https://vccidanang.com.vn/tin-tuc/kieu-bao-doanh-nhan-viet-mong-gop-suc-phat-trien-dat-nuoc/",
    image: businessPress2.src,
  },
  {
    tag: "Industry & Trade Journal",
    title: "Strong products come first: experts on building global Vietnamese brands",
    description:
      "At a Ho Chi Minh City symposium, industry leaders agreed that operational excellence is the foundation of effective communication and lasting global positioning.",
    link: "https://congthuong.vn/doanh-nghiep-muon-truyen-thong-hieu-qua-truoc-het-can-co-san-pham-tot-300633.html",
    image: businessPress3.src,
  },
];

const testimonials = [
  {
    name: "Sandy Phuong Nguyen",
    title: "FOUNDER",
    company: "CỎ CÂY HOA LÁ",
    desc: "Rising Vietnamese wellness brand, 4.3 million products sold in 6 years",
    quote: "When we started in 2017 with only ~3,500 USD, we never imagined selling millions of products—let alone dreaming about going global. But meeting Minh and 100B gave us courage. We dared to leave our comfort zone and dream bigger. I truly believe: TOGETHER, with 100B, we'll empower more Vietnamese brands to succeed globally.",
    headline: "VIETNAMESE SPIRIT, GLOBAL ASPIRATION",
    photo: cchlPhoto.src as string | null,
    initial: "CỎ"
  },
  {
    name: "Long Lu",
    title: "FOUNDER",
    company: "MISA",
    desc: "Leading accounting software company, 80%+ market share",
    quote: "Congratulations to Minh and the 100B team for their outstanding work in bringing Vietnamese brands and products to the global market. Your efforts are helping elevate the value of Vietnam in the eyes of the world and driving the country's development.",
    headline: "ELEVATING VIETNAM'S GLOBAL VALUE",
    photo: misaPhoto.src as string | null,
    initial: "M"
  },
  {
    name: "Vinh Ha",
    title: "FOUNDER",
    company: "QUANG VINH CERAMICS",
    desc: "Heritage ceramics maker, exporting to 20+ countries",
    quote: "Huge thanks to 100B for helping Quang Vinh Ceramics see the world with a new perspective—alongside a strong and global-minded community of Vietnamese entrepreneurs. 100B has been a launchpad and a support system, opening opportunities for our manufacturing team to access global markets.",
    headline: "A LAUNCHPAD TO GLOBAL MARKETS",
    photo: quangVinhPhoto.src as string | null,
    initial: "QV"
  },
  {
    name: "Thang Luu",
    title: "CO-FOUNDER",
    company: "HEXAGON",
    desc: "Top interior firm with 4 factories and 5,000+ completed projects",
    quote: "It's been a joy working with 100B. The direction and vision of 100B deeply aligns with Hexagon's values. We're excited for this partnership and the connections it brings.",
    headline: "ALIGNMENT IN VISION AND VALUES",
    photo: hexagonPhoto.src as string | null,
    initial: "HX"
  },
  {
    name: "Thanh Dong",
    title: "CO-FOUNDER",
    company: "KALOTOYS",
    desc: "Rising toy brand, 8,000+ orders/day, 98% export revenue",
    quote: "Born from the love of two fathers, Kalotoys has touched the hearts of millions of children and parents around the world. With 100B as a launchpad, we hope Kalotoys—and millions of other Vietnamese brands—can win the trust of global customers.",
    headline: "STEPPING ONTO THE GLOBAL STAGE",
    photo: kalotoysPhoto.src as string | null,
    initial: "KT"
  },
  {
    name: "Nguyen Thi Huong Lien",
    title: "CO-FOUNDER",
    company: "SAO THÁI DƯƠNG",
    desc: "Herbal care pioneer, 240M+ products sold worldwide",
    quote: "Congratulations to 100B on such an inspiring and impactful mission for Vietnam's economic future.",
    headline: "AN INSPIRING & IMPACTFUL MISSION",
    photo: saoThaiDuongPhoto.src as string | null,
    initial: "STD"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 12000);
    return () => clearInterval(timer);
  }, []);

  const goPrev = () =>
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const goNext = () =>
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);

  const [pressPage, setPressPage] = useState(0);
  const pressVisibleCount = 3;
  const pressPageCount = Math.max(1, Math.ceil(pressArticles.length / pressVisibleCount));
  const pressShowNav = pressPageCount > 1;
  const pressPrev = () =>
    setPressPage((p) => (p - 1 + pressPageCount) % pressPageCount);
  const pressNext = () => setPressPage((p) => (p + 1) % pressPageCount);
  // Last page clamps to the final pressVisibleCount items so we never show
  // a half-empty page or wrap back to the start mid-page.
  const pressStartIndex = Math.min(
    pressPage * pressVisibleCount,
    Math.max(0, pressArticles.length - pressVisibleCount)
  );
  const pressVisible: PressItem[] = pressArticles.slice(
    pressStartIndex,
    pressStartIndex + pressVisibleCount
  );

  return (
    <div className="flex flex-col">
      {/* 1. HERO */}
      <section className="relative bg-bg-dark overflow-hidden h-screen min-h-[720px] flex flex-col justify-center border-b border-border-subtle">
        {/* Wistia video background — scales to cover the viewport.
            The embed mounts at 16:9; the wrapper scales/crops so wide and tall
            viewports both get a clean fill. */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              // cover-fit for 16:9 inside any viewport: max of viewport/16*9 vs viewport
              width: "max(100vw, 177.78vh)",
              height: "max(56.25vw, 100vh)",
            }}
          >
            <wistia-player
              media-id="9hbymhvynw"
              aspect="1.7777777777777777"
              autoplay="true"
              muted="true"
              end-video-behavior="loop"
              controls-visible-on-load="false"
              play-button="false"
              playbar="false"
              small-play-button="false"
              fullscreen-button="false"
              volume-control="false"
              settings-control="false"
              quality-control="false"
              silent-auto-play="allow"
              style={{ width: "100%", height: "100%", display: "block" }}
            />
          </div>
        </div>

        {/* Readability overlays — top + bottom dark fades so headline and
            proof strip stay legible over any video frame. */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 25%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0.85) 100%)",
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
            <Link href="/build" className="btn-silver-gradient rounded-full px-8 py-4 text-xs uppercase tracking-widest font-semibold w-full sm:w-auto text-center">
              Explore Build
            </Link>
            <Link href="/trade" className="bg-white hover:bg-brand-gold text-bg-dark rounded-full px-8 py-4 text-xs uppercase tracking-widest font-semibold transition-colors duration-300 w-full sm:w-auto text-center border border-transparent">
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
              {/* Bỏ mx-auto, thêm -translate-x để dịch trái */}
              <div className="w-full max-w-2xl lg:-translate-x-12"> {/* Thêm mt-8 để tạo khoảng cách với chữ phía trên */}
                <img src="/Globe.png" alt="Vietnam on the globe" className="w-full h-auto max-w-[140%] lg:scale-125 origin-center object-contain"/>
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

      {/* 3. THREE MODES — black surface; warm amber glow only at the top edge
          so the section starts lit and fades to clean black by mid-page. */}
      <section className="relative py-20 lg:py-28 bg-bg-dark border-b border-border-subtle grain-overlay glow-warm-top overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase leading-tight mb-8">
            THREE WAYS 100B <em className="font-display italic text-gradient-gold">BUILDS WITH YOU.</em>
          </h2>
          <p className="text-lg lg:text-xl font-light leading-relaxed max-w-2xl text-text-muted mb-16">
            Every deal we take fits one of these three modes. If it does not fit any of them, we pass.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                img: num01.src,
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
                img: num02.src,
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
                img: num03.src,
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
              <div key={item.mode} className="relative bg-bg-card rounded-2xl border border-border-subtle hover:border-brand-gold/50 transition-all duration-500 overflow-hidden group">
                {/* Hover glow — warm amber swells from the bottom edge, like a
                    fireplace flaring as the user leans in. */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background:
                      "radial-gradient(ellipse 85% 55% at 50% 100%, rgba(195,163,116,0.18) 0%, transparent 70%)",
                  }}
                  aria-hidden
                />
                <div className="relative z-10">
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
                        <p className="text-text-heading text-sm leading-relaxed">{bullet}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TWO WORLDS, ONE CORRIDOR — split layout with a vertical gold rule
          and the 100B emblem sitting on it. Build on the left (Austin), Trade
          mirrored on the right (Hanoi). Content unchanged; presentation new. */}
      <section className="relative py-20 lg:py-28 bg-bg-alt border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section header — matches the UTM/caps pattern used by every other
              section title on this page */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase leading-tight mb-8">
            TWO WORLDS, <em className="font-display italic text-gradient-gold">ONE CORRIDOR.</em>
          </h2>
          <p className="text-base lg:text-lg font-light text-white/85 leading-relaxed max-w-2xl mb-12">
            One operator. Two rooms. One corridor between them. Choose the side you need — or walk through both.
          </p>

          {/* Split container — lifted surface, rounded, with a gold vertical
              rule and emblem centered on the divider. */}
          <div
            className="relative grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden border border-white/10"
            style={{
              background: "#2F2C28",
              boxShadow: "0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            {/* Vertical divider — only on md+ */}
            <div
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 z-[2] pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, rgba(195,163,116,0.5) 20%, rgba(195,163,116,0.5) 80%, transparent 100%)",
              }}
              aria-hidden
            />

            {/* 100B emblem on the corridor — bare image, no plate / glow */}
            <img
              src={corridorEmblem.src}
              alt="100B"
              className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[3] w-32 h-32 object-contain pointer-events-none"
              aria-label="100B"
            />

            {/* LEFT — BUILD (Austin) */}
            <div
              className="relative p-8 lg:p-12 flex flex-col min-h-[440px]"
              style={{ background: "#2F2C28" }}
            >
              <div className="flex items-center gap-3 mb-8 relative z-[1]">
                <div className="w-6 h-px bg-brand-gold" />
                <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold">
                  Build — Austin
                </p>
              </div>

              <h3 className="font-serif font-light text-[28px] lg:text-[32px] leading-[1.2] tracking-tight text-text-heading mb-4 relative z-[1]">
                Capital and <em className="italic text-gradient-gold">partnerships</em> across borders
              </h3>

              <p className="text-sm lg:text-[15px] font-light leading-[1.7] text-white/85 mb-8 max-w-[90%] relative z-[1]">
                The gateway for capital seeking exposure. For founders ready for institutional backing. For operators building something that crosses borders.
              </p>

              <div className="flex flex-col mb-8 relative z-[1]">
                {[
                  { num: "01", name: "Access Vietnam 2026", to: "/build" },
                  { num: "02", name: "Advisory & Equity Stakes", to: "/build" },
                  { num: "03", name: "Cross-Border Deal Flow", to: "/build" },
                ].map((s, i, arr) => (
                  <Link
                    key={s.num}
                    href={s.to}
                    className={`group flex items-center justify-between py-4 border-t border-white/12 hover:pl-2 transition-[padding] duration-300 ${
                      i === arr.length - 1 ? "border-b border-white/12" : ""
                    }`}
                  >
                    <div className="flex items-baseline gap-[18px]">
                      <span className="font-serif text-sm font-medium text-brand-gold min-w-[20px]">{s.num}</span>
                      <span className="font-serif text-[17px] lg:text-lg text-text-heading">{s.name}</span>
                    </div>
                    <span className="text-brand-gold transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                ))}
              </div>

              <Link
                href="/build"
                className="group inline-flex items-center gap-[10px] self-start mt-auto pb-[4px] font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-text-heading border-b border-transparent hover:text-brand-gold hover:border-brand-gold transition-colors duration-300 relative z-[1]"
              >
                <span>Explore Build</span>
                <span className="text-brand-gold transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* RIGHT — TRADE (Hà Nội), mirrored */}
            <div
              className="relative p-8 lg:p-12 flex flex-col min-h-[440px]"
              style={{ background: "#35312C" }}
            >
              {/* warm gold glow in the top-right of the Trade panel */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 75% 30%, rgba(195,163,116,0.15) 0%, rgba(147,124,84,0.05) 40%, transparent 70%)",
                }}
                aria-hidden
              />

              <div className="flex items-center justify-end gap-3 mb-8 relative z-[1]">
                <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold">
                  Hà Nội — Trade
                </p>
                <div className="w-6 h-px bg-brand-gold" />
              </div>

              <h3 className="font-serif font-light text-[28px] lg:text-[32px] leading-[1.2] tracking-tight text-text-heading mb-4 text-right relative z-[1]">
                Direct-to-factory <em className="italic text-gradient-gold">sourcing</em> across Asia
              </h3>

              <p className="text-sm lg:text-[15px] font-light leading-[1.7] text-white/85 mb-8 max-w-[90%] ml-auto text-right relative z-[1]">
                We organize direct-sourcing delegations and maintain the vetted trade network for builders who are serious about controlling material costs.
              </p>

              <div className="flex flex-col mb-8 relative z-[1]">
                {[
                  { num: "01", name: "Build Better Series", to: "/trade" },
                  { num: "02", name: "Vietnam Direct 2026", to: "/trade" },
                  { num: "03", name: "Container Club", to: "/cc" },
                ].map((s, i, arr) => (
                  <Link
                    key={s.num}
                    href={s.to}
                    className={`group flex items-center justify-between py-4 border-t hover:pr-2 transition-[padding] duration-300 ${
                      i === arr.length - 1 ? "border-b" : ""
                    }`}
                    style={{
                      borderTopColor: "rgba(195,163,116,0.3)",
                      ...(i === arr.length - 1 ? { borderBottomColor: "rgba(195,163,116,0.3)" } : {}),
                    }}
                  >
                    <span className="text-brand-gold transition-transform duration-300 group-hover:-translate-x-1">←</span>
                    <div className="flex items-baseline gap-[18px]">
                      <span className="font-serif text-[17px] lg:text-lg text-text-heading">{s.name}</span>
                      <span className="font-serif text-sm font-medium text-brand-gold min-w-[20px] text-right">{s.num}</span>
                    </div>
                  </Link>
                ))}
              </div>

              <Link
                href="/trade"
                className="group inline-flex items-center gap-[10px] self-end mt-auto pb-[4px] font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-text-heading border-b border-transparent hover:text-brand-gold hover:border-brand-gold transition-colors duration-300 relative z-[1]"
              >
                <span className="text-brand-gold transition-transform duration-300 group-hover:-translate-x-1">←</span>
                <span>Explore Trade</span>
              </Link>
            </div>
          </div>

          {/* Section footer */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-3 sm:gap-0 mt-8 pt-5 border-t border-white/8 text-[10px] uppercase tracking-[0.2em] font-medium text-white/50 text-center sm:text-left">
            <span>One Operator · Two Markets</span>
            <span>Same Corridor · 12 Hours Apart</span>
          </div>
        </div>
      </section>

      {/* 4B. WAITLIST TRANSITION — slim transitional bar, not a full section.
          Delicate pause between the programs and the founder — art backdrop,
          modest type, compact CTA. */}
      <section
        className="relative border-y border-border-subtle overflow-hidden py-[72px] lg:py-[96px] bg-bg-warm bg-center bg-cover"
        style={{ backgroundImage: `url(${waitlistBg.src})` }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.28) 85%)",
          }}
          aria-hidden
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 lg:px-8 flex flex-col items-center gap-7 lg:gap-9">
          <h2
            className="font-display uppercase leading-[1.1] tracking-[0.04em] text-[30px] md:text-[38px] lg:text-[44px]"
            style={{ color: "#937C54" }}
          >
            Become the global brand<br className="sm:hidden" /> in your industry.
          </h2>
          <a
            href="#contact-footer"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact-footer")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-silver-gradient rounded-full px-7 py-3.5 text-[11px] uppercase tracking-[0.22em] font-semibold inline-flex items-center gap-2"
          >
            Join the Waitlist
            <ArrowRight size={13} />
          </a>
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
              { title: "In Both Rooms", points: ["Texas local boardrooms", "Vietnam business networks", "Immediate trust bridges"] },
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
                      <span className="text-sm text-text-heading leading-tight">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHAT OUR FRIENDS SAY — constrained to a single viewport height. */}
      <section className="min-h-screen h-screen flex flex-col bg-bg-alt border-b border-border-subtle overflow-hidden py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative w-full flex-1 flex flex-col">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase leading-tight mb-8 lg:mb-10 shrink-0">
            WHAT OUR <em className="font-display italic text-gradient-gold">FRIENDS SAY.</em>
          </h2>
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

          <div className="flex items-center justify-center gap-6 mt-8 shrink-0">
            <button
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/15 text-white/70 hover:border-brand-gold hover:text-brand-gold transition-colors"
            >
              <ArrowRight size={16} className="rotate-180" />
            </button>

            <div className="flex items-center gap-3">
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

            <button
              onClick={goNext}
              aria-label="Next testimonial"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/15 text-white/70 hover:border-brand-gold hover:text-brand-gold transition-colors"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 7. PRESS — single combined carousel of all media coverage. Section
          sizes to its content so the layout doesn't pop a giant black gap
          on tall viewports. */}
      <section className="py-20 lg:py-24 bg-bg-dark border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase leading-tight text-center mb-10 lg:mb-12">
            IN THE <em className="font-display italic text-gradient-gold">PRESS.</em>
          </h2>

          <div className="relative">
            {pressShowNav && (
              <button
                onClick={pressPrev}
                aria-label="Previous press article"
                className="hidden md:flex absolute -left-4 lg:-left-14 top-1/2 -translate-y-1/2 z-10 w-11 h-11 lg:w-12 lg:h-12 items-center justify-center transition-all hover:scale-105"
              >
                <img src={nextButtonIcon.src} alt="" className="w-full h-full -scale-x-100" />
              </button>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={pressPage}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 w-full"
              >
                {pressVisible.map((item, idx) => (
                  <article
                    key={pressPage + ":" + idx}
                    className="bg-bg-card rounded-2xl overflow-hidden border border-white/5 flex flex-col"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden shrink-0">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div
                          className="w-full h-full"
                          style={{
                            background:
                              "linear-gradient(135deg, #2A2520 0%, #1A1714 60%, #0D0B09 100%)",
                          }}
                          aria-hidden
                        />
                      )}
                      <span className="absolute bottom-3 left-3 bg-brand-gold/90 text-bg-dark text-[10px] font-semibold px-2.5 py-1 rounded">
                        {item.tag}
                      </span>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-display text-gradient-gold uppercase leading-[1.15] text-base lg:text-lg mb-2 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-[13px] text-text-muted leading-relaxed mb-3 line-clamp-2">
                        {item.description}
                      </p>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto self-start text-sm text-text-heading underline underline-offset-4 decoration-white/30 hover:decoration-brand-gold hover:text-brand-gold transition-colors"
                      >
                        Read more
                      </a>
                    </div>
                  </article>
                ))}
              </motion.div>
            </AnimatePresence>

            {pressShowNav && (
              <button
                onClick={pressNext}
                aria-label="Next press article"
                className="hidden md:flex absolute -right-4 lg:-right-14 top-1/2 -translate-y-1/2 z-10 w-11 h-11 lg:w-12 lg:h-12 items-center justify-center transition-all hover:scale-105"
              >
                <img src={nextButtonIcon.src} alt="" className="w-full h-full" />
              </button>
            )}
          </div>

          {/* Mobile prev/next — buttons hidden on desktop above land here. */}
          {pressShowNav && (
            <div className="md:hidden flex items-center justify-center gap-6 mt-8">
              <button
                onClick={pressPrev}
                aria-label="Previous press article"
                className="w-11 h-11 flex items-center justify-center transition-all hover:scale-105"
              >
                <img src={nextButtonIcon.src} alt="" className="w-full h-full -scale-x-100" />
              </button>
              <button
                onClick={pressNext}
                aria-label="Next press article"
                className="w-11 h-11 flex items-center justify-center transition-all hover:scale-105"
              >
                <img src={nextButtonIcon.src} alt="" className="w-full h-full" />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
