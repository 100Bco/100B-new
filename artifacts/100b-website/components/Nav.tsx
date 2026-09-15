"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
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
          <Link href="/" className="flex items-center group relative z-50 shrink-0">
            <Image
              src="/logo-100b.png"
              alt="100B Beyond Borders"
              width={150}
              height={48}
              priority
              className="h-12 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-6 xl:gap-10">
            <div className="flex items-center gap-5 xl:gap-7">
              {navLinks.map((link) => {
                const own = pathname === link.path || pathname.startsWith(link.path + "/");
                const childActive = (link.children ?? []).some(
                  (c) => pathname === c.path || pathname.startsWith(c.path + "/"),
                );
                const isActive = own || childActive;
                return (
                  <div key={link.path} className="group relative flex items-center">
                    <Link
                      href={link.path}
                      className={`font-sans text-[11px] uppercase whitespace-nowrap tracking-[0.15em] xl:tracking-[0.2em] font-semibold transition-colors py-2 flex items-center gap-1 ${
                        isActive ? "text-brand-gold" : "text-text-muted hover:text-white"
                      }`}
                    >
                      {link.name}
                      {link.children && (
                        <ChevronDown
                          size={12}
                          strokeWidth={2.5}
                          className="transition-transform duration-200 group-hover:rotate-180"
                          aria-hidden
                        />
                      )}
                    </Link>

                    {link.children ? (
                      /* The pages under this one. Held open on hover and on
                         keyboard focus, so it is reachable by tab as well as
                         by pointer. The gap between the link and the panel is
                         padded rather than empty, or the pointer crossing it
                         closes the panel. */
                      <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 translate-y-1 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto">
                        <div className="min-w-[200px] rounded-2xl border border-white/10 bg-bg-card/95 backdrop-blur-md p-2 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.9)]">
                          {link.children.map((child) => {
                            const active =
                              pathname === child.path || pathname.startsWith(child.path + "/");
                            return (
                              <Link
                                key={child.path}
                                href={child.path}
                                className={`flex flex-col gap-0.5 rounded-xl px-3 py-2.5 transition-colors hover:bg-white/5 hover:text-brand-gold ${
                                  active ? "text-brand-gold" : "text-text-heading"
                                }`}
                              >
                                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold">
                                  {child.name}
                                </span>
                                {/* Inherits the row's colour, so the descriptor
                                    turns gold with the name rather than staying
                                    grey under it. */}
                                <span className="text-[10px] font-normal text-current opacity-70">
                                  {child.descriptor}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      /* Hover descriptor */
                      <span
                        className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 mt-1 whitespace-nowrap rounded-full border border-white/10 bg-bg-card/95 backdrop-blur-md px-3 py-1.5 text-[10px] normal-case tracking-[0.05em] font-normal text-text-body opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0"
                        aria-hidden
                      >
                        {link.descriptor}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
            <a
              href="#contact-footer"
              onClick={scrollToContact}
              className="btn-silver-gradient rounded-full px-4 xl:px-6 py-3 text-[11px] uppercase tracking-widest font-semibold flex items-center justify-center whitespace-nowrap"
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
              {navLinks.map((link) => (
                <div key={link.path} className="flex flex-col">
                  <Link
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
                  {(link.children ?? []).map((child) => (
                    <Link
                      key={child.path}
                      href={child.path}
                      className="flex flex-col gap-1 py-5 pl-5 border-b border-border-subtle border-l border-l-white/10"
                    >
                      <span
                        className={`text-base font-sans uppercase tracking-[0.2em] font-semibold ${
                          pathname === child.path ? "text-brand-gold" : "text-text-heading"
                        }`}
                      >
                        {child.name}
                      </span>
                      <span className="text-sm font-light text-text-muted">{child.descriptor}</span>
                    </Link>
                  ))}
                </div>
              ))}
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
