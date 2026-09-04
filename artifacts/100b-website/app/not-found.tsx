import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Off the corridor · 404",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full bg-bg-dark flex items-center justify-center overflow-hidden px-6">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(195,163,116,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: `repeating-linear-gradient(rgba(255,255,255,0.05) 0 1px, transparent 1px 100%), repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 100%)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 text-center max-w-2xl">
        <div className="text-[10px] uppercase tracking-[0.35em] font-semibold text-brand-gold mb-10">
          404 · No such stop on the route
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-text-heading mb-8">
          Off the <em className="font-serif italic text-gradient-gold">corridor.</em>
        </h1>

        <p className="text-base lg:text-lg font-light text-text-body max-w-md mx-auto mb-12">
          This page isn't on the route. The four doors are back on the home page.
        </p>

        <Link
          href="/"
          className="btn-silver-gradient rounded-full px-8 py-4 text-xs uppercase tracking-widest font-semibold inline-block"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
