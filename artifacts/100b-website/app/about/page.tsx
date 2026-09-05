import type { Metadata } from "next";
import { Accent, SectionTitle } from "@/components/Section";
import { TheName } from "@/components/TheName";
import { Founders } from "@/components/Founders";
import { PressStrip } from "@/components/PressStrip";
import { ContactCTA } from "@/components/ContactCTA";
import { PageHero } from "@/components/PageHero";
import aboutBanner from "@assets/about-banner-vn.jpg";

export const metadata: Metadata = {
  title: "About",
  description:
    "Between two worlds. Giữa hai thế giới. Who 100B is, where the name comes from, and how we work: no referral fees, partner not middleman, in both rooms.",
  alternates: { canonical: "/about" },
};

// Team grid across 100B, Container Club, ZAD, 100Bold. Populate when the
// roster is confirmed; the section renders only when there are members.
type Member = { name: string; role: string; company: string };
const team: Member[] = [];

const howWeWork = [
  { en: "No referral fees.", enSub: "Equity only.", vi: "Không hoa hồng giới thiệu.", viSub: "Chỉ cổ phần." },
  { en: "Partner, not middleman.", enSub: "", vi: "Đối tác, không phải trung gian.", viSub: "" },
  { en: "We pass often.", enSub: "", vi: "Chúng tôi từ chối nhiều.", viSub: "" },
  { en: "We're in both rooms.", enSub: "", vi: "Chúng tôi có mặt ở cả hai đầu.", viSub: "" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* 6.1 HERO */}
      <PageHero
        image={aboutBanner.src}
        imagePosition="center 55%"
        title={
          <>
            <span className="block">Between two worlds.</span>
            <span className="block">
              <Accent>Giữa hai thế giới.</Accent>
            </span>
          </>
        }
        meta={
          <>
            <span>Austin · Hanoi · Ho Chi Minh City</span>
            <span className="w-px h-3 bg-border-subtle hidden sm:inline-block" aria-hidden />
            <span>Three founders · Both sides</span>
          </>
        }
      />

      {/* 6.2 THE NAME */}
      <TheName />

      {/* 6.3 FOUNDING TEAM */}
      <section className="py-20 lg:py-28 bg-bg-alt border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle className="mb-12 lg:mb-16">
            Three founders. <Accent>Both sides.</Accent>
          </SectionTitle>
          <Founders variant="long" />
        </div>
      </section>

      {/* 6.4 THE TEAM */}
      {team.length > 0 && (
        <section className="py-20 lg:py-28 bg-bg-dark border-b border-border-subtle">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 mt-10">
              {team.map((m) => (
                <div key={m.name} className="flex flex-col gap-3">
                  <div className="aspect-square rounded-2xl bg-[#111111] border border-white/10" />
                  <span className="font-serif text-lg text-text-heading">{m.name}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-semibold">
                    {m.role} · {m.company}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6.5 HOW WE WORK. Four statements, one per panel, large type. */}
      <section className="bg-bg-dark border-b border-border-subtle">
        {/* Two panels abreast on a phone rather than four stacked: the same
            four statements in half the scrolling. */}
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {howWeWork.map((item, i) => (
            <div
              key={item.en}
              className={`relative min-h-[240px] sm:min-h-[320px] lg:min-h-[480px] p-5 sm:p-8 lg:p-10 flex flex-col items-center text-center justify-between border-border-subtle ${
                i % 2 === 1 ? "border-l" : ""
              } ${i > 0 ? "lg:border-l" : ""} ${
                i < 2 ? "border-b lg:border-b-0" : ""
              } ${i % 2 === 0 ? "bg-bg-dark" : "bg-bg-alt"}`}
            >
              <span className="text-[26px] sm:text-[34px] lg:text-[40px] font-display text-gradient-gold leading-none font-medium">
                0{i + 1}
              </span>
              <div className="flex flex-col items-center gap-3 sm:gap-6">
                <p className="font-serif font-light text-[17px] sm:text-2xl md:text-[28px] lg:text-[32px] leading-[1.15] text-text-heading">
                  {item.en}
                  {item.enSub && (
                    <>
                      <br />
                      <span className="text-gradient-gold">{item.enSub}</span>
                    </>
                  )}
                </p>
                <p className="font-serif italic text-[13px] sm:text-lg lg:text-xl text-text-body leading-snug">
                  {item.vi}
                  {item.viSub && (
                    <>
                      <br />
                      {item.viSub}
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6.6 PRESS */}
      <section className="py-20 lg:py-28 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <PressStrip />
        </div>
      </section>

      {/* 6.7 CONTACT */}
      <ContactCTA
        title={
          <>
            Between two worlds. <Accent>Reach either one.</Accent>
          </>
        }
        meta="Austin · Hanoi · Ho Chi Minh City"
        note="48 hours."
      />
    </div>
  );
}
