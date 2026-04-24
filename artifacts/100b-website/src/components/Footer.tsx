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
          Capital. Founders. Operators.
          <br />
          If that is you,{" "}
          <em className="font-serif italic text-gradient-gold">let's talk.</em>
        </h2>
        <p className="text-sm text-text-muted font-light max-w-xl mx-auto mb-8 leading-relaxed">
          Inquiries are reviewed personally by our Founding Team.
          <br />
          We respond within 48 hours.
        </p>
        <a
          href="mailto:global@100b.co"
          className="btn-silver-gradient rounded-full px-8 py-4 text-xs uppercase tracking-widest font-semibold inline-block"
        >
          global@100b.co
        </a>
      </div>

      {/* Platform links strip */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 border-t border-border-subtle flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div className="flex flex-col gap-3">
          <Link to="/" className="inline-block">
            <img
              src="/logo-100b.png"
              alt="100B Beyond Borders"
              className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>
          <div className="mt-2 flex flex-col gap-1 font-serif text-sm text-text-muted leading-snug">
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
