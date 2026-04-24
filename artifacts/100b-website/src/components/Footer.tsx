import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-border-subtle flex flex-col items-center justify-center pt-24 pb-12 px-6 lg:px-8">
      {/* Contact Section */}
      <div id="contact-footer" className="max-w-4xl mx-auto text-center mb-24">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-tight mb-8">
          Capital. Founders. Operators. If that is you, <em className="font-serif italic text-gradient-gold">let's talk.</em>
        </h2>
        <a
          href="mailto:global@100b.co"
          className="btn-silver-gradient rounded-full px-8 py-4 text-xs uppercase tracking-widest font-semibold inline-block"
        >
          global@100b.co
        </a>
      </div>

      {/* Footer Content */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-8 border-t border-border-subtle pt-12">
        <div className="flex flex-col gap-4 max-w-sm">
          <div className="font-serif text-3xl text-text-heading leading-none mb-2">
            1<span className="text-brand-gold">OO</span>B
          </div>
          <div className="text-[11px] uppercase tracking-[0.2em] font-semibold text-text-muted">
            Beyond Borders
          </div>
          <p className="text-sm text-text-muted font-light leading-relaxed mt-2">
            The operating partner for serious deals between two worlds.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-12 sm:gap-24">
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold mb-2">Platform</h4>
            <Link to="/trade" className="text-sm text-text-body hover:text-white transition-colors">Trade</Link>
            <Link to="/build" className="text-sm text-text-body hover:text-white transition-colors">Build</Link>
            <Link to="/cc" className="text-sm text-text-body hover:text-white transition-colors">Container Club</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold mb-2">Offices</h4>
            <span className="text-sm text-text-body">Austin</span>
            <span className="text-sm text-text-body">Ho Chi Minh</span>
            <span className="text-sm text-text-body">Hanoi</span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border-subtle mt-16 pt-8 text-xs text-text-muted">
        <p>© 2026 100B Beyond Borders. All rights reserved.</p>
        <p>Powered by 100Bold</p>
      </div>
    </footer>
  );
}
