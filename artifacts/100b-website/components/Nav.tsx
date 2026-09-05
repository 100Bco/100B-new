"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/content/site";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.querySelector("#contact-footer");
    if (!target) return; // let the browser follow the href
    e.preventDefault();
    setMobileMenuOpen(false);
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[88px] md:h-[96px] flex items-center ${
          isScrolled || mobileMenuOpen
            ? "bg-bg-dark/90 backdrop-blur-md border-b border-border-subtle"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center group relative z-50">
            <Image
              src="/logo-100b.png"
              alt="100B Beyond Borders"
              width={150}
              height={48}
              priority
              className="h-12 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = pathname === link.path || pathname.startsWith(link.path + "/");
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`group relative font-sans text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors py-2 ${
                      isActive ? "text-brand-gold" : "text-text-muted hover:text-white"
                    }`}
                  >
                    {link.name}
                    {/* Hover descriptor */}
                    <span
                      className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 mt-1 whitespace-nowrap rounded-full border border-white/10 bg-bg-card/95 backdrop-blur-md px-3 py-1.5 text-[10px] normal-case tracking-[0.05em] font-normal text-text-body opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0"
                      aria-hidden
                    >
                      {link.descriptor}
                    </span>
                  </Link>
                );
              })}
            </div>
            <a
              href="#contact-footer"
              onClick={scrollToContact}
              className="btn-silver-gradient rounded-full px-6 py-3 text-[11px] uppercase tracking-widest font-semibold flex items-center justify-center whitespace-nowrap"
            >
              Start a Conversation
            </a>
          </div>

          <button
            className="lg:hidden relative z-50 p-2 text-text-heading"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-bg-dark/95 backdrop-blur-xl flex flex-col pt-28 px-6 pb-8 h-screen overflow-y-auto">
          <div className="flex flex-col w-full max-w-md mx-auto gap-8">
            <div className="flex flex-col w-full">
              {navLinks.map(
                (link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="flex flex-col gap-1 py-5 border-b border-border-subtle"
                  >
                    <span
                      className={`text-xl font-sans uppercase tracking-[0.2em] font-semibold ${
                        pathname === link.path ? "text-brand-gold" : "text-text-heading"
                      }`}
                    >
                      {link.name}
                    </span>
                    <span className="text-sm font-light text-text-muted">{link.descriptor}</span>
                  </Link>
                ),
              )}
              <Link
                href="/communities"
                className="flex flex-col gap-1 py-5 border-b border-border-subtle"
              >
                <span
                  className={`text-xl font-sans uppercase tracking-[0.2em] font-semibold ${
                    pathname === "/communities" ? "text-brand-gold" : "text-text-heading"
                  }`}
                >
                  Communities
                </span>
                <span className="text-sm font-light text-text-muted">
                  Four networks. Vetted, by introduction.
                </span>
              </Link>
            </div>
            <a
              href="#contact-footer"
              onClick={scrollToContact}
              className="btn-silver-gradient rounded-full px-8 py-4 text-sm uppercase tracking-widest font-semibold w-full text-center"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      )}
    </>
  );
}
