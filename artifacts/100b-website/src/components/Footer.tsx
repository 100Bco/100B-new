import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-border-subtle">
      {/* Contact Section */}
      <div
        id="contact-footer"
        className="max-w-4xl mx-auto text-center px-6 lg:px-8 pt-24 pb-20"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-tight mb-8">
          Capital. Founders. Operators. If that is you,{" "}
          <em className="font-serif italic text-gradient-gold">let's talk.</em>
        </h2>
        <p className="text-sm text-text-muted font-light max-w-xl mx-auto mb-8">
          Inquiries are reviewed personally by Minh Mac and the 100B partner team.
          We respond within 48 hours.
        </p>
        <a
          href="mailto:global@100b.co"
          className="btn-silver-gradient rounded-full px-8 py-4 text-xs uppercase tracking-widest font-semibold inline-block"
        >
          global@100b.co
        </a>
      </div>

      {/* Flight manifest */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-8 border-t border-border-subtle">
        <div className="flex items-center justify-between mb-10">
          <div className="text-[10px] uppercase tracking-[0.3em] font-semibold text-brand-gold">
            Manifest
          </div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-text-muted tabular-nums">
            Est. 2023 · Three Offices
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {[
            {
              code: "AUS",
              city: "Austin",
              region: "Texas, USA",
              line1: "Capital & market access",
              line2: "Central Standard Time",
            },
            {
              code: "SGN",
              city: "Ho Chi Minh City",
              region: "Vietnam",
              line1: "Manufacturing & sourcing",
              line2: "Indochina Time",
            },
            {
              code: "HAN",
              city: "Hanoi",
              region: "Vietnam",
              line1: "Government & institutional relations",
              line2: "Indochina Time",
            },
          ].map((o) => (
            <div key={o.code} className="flex flex-col gap-2 border-t border-border-subtle pt-6">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-brand-gold text-2xl tabular-nums tracking-wider">
                  {o.code}
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-text-muted">
                  Office
                </span>
              </div>
              <div className="font-serif text-xl text-text-heading leading-tight mt-1">
                {o.city}
              </div>
              <div className="text-xs text-text-muted">{o.region}</div>
              <div className="text-sm text-text-body font-light mt-4">{o.line1}</div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-text-muted/70">
                {o.line2}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Platform links strip */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 border-t border-border-subtle flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div className="flex flex-col gap-2">
          <div className="font-serif text-3xl text-text-heading leading-none">
            1<span className="text-brand-gold">OO</span>B
          </div>
          <div className="text-[11px] uppercase tracking-[0.2em] font-semibold text-text-muted">
            Beyond Borders
          </div>
          <div className="mt-3 flex flex-col gap-1 font-serif text-sm text-text-muted leading-snug">
            <em className="italic text-brand-gold/80">Giữa hai thế giới.</em>
            <span>Between two worlds.</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-3">
          <Link
            to="/trade"
            className="text-[11px] uppercase tracking-[0.2em] font-semibold text-text-muted hover:text-white transition-colors"
          >
            Trade
          </Link>
          <Link
            to="/build"
            className="text-[11px] uppercase tracking-[0.2em] font-semibold text-text-muted hover:text-white transition-colors"
          >
            Build
          </Link>
          <Link
            to="/cc"
            className="text-[11px] uppercase tracking-[0.2em] font-semibold text-text-muted hover:text-white transition-colors"
          >
            Container Club
          </Link>
          <a
            href="mailto:global@100b.co"
            className="text-[11px] uppercase tracking-[0.2em] font-semibold text-text-muted hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 border-t border-border-subtle flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[10px] uppercase tracking-[0.2em] text-text-muted/70">
        <p>© 2026 100B Beyond Borders. All rights reserved.</p>
        <p>Powered by 100Bold</p>
      </div>
    </footer>
  );
}
