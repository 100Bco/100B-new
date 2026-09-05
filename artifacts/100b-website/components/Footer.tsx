import Link from "next/link";
import Image from "next/image";
import { CONTACT_EMAIL, footerLinks } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-start">
        <div className="flex flex-col gap-4">
          <Link href="/" className="inline-block w-fit">
            <Image
              src="/logo-100b.png"
              alt="100B Beyond Borders"
              width={120}
              height={40}
              className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>
          <div className="flex flex-col gap-1 font-serif leading-snug">
            <span className="text-base text-text-heading">100B Beyond Borders</span>
            <em className="italic text-brand-gold/80 text-base">Giữa hai thế giới.</em>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:items-end">
          <nav className="flex flex-wrap gap-x-8 gap-y-3 md:justify-end">
            {footerLinks.map((l) => (
              <Link
                key={l.path}
                href={l.path}
                className="text-[11px] uppercase tracking-[0.2em] font-semibold text-text-muted hover:text-white transition-colors"
              >
                {l.name}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-2 md:items-end">
            <p className="flex items-baseline gap-2">
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold">
                Contact:
              </span>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-serif text-base text-text-heading hover:text-brand-gold transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted">
              Austin · Hanoi · Ho Chi Minh City
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 border-t border-border-subtle flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[10px] uppercase tracking-[0.2em] text-text-muted/70">
        <p>© 2026 100B Beyond Borders.</p>
        <p>
          Powered by{" "}
          <a
            href="https://100bold.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-brand-gold transition-colors"
          >
            100Bold
          </a>
        </p>
      </div>
    </footer>
  );
}
