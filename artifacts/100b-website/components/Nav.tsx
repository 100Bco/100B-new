"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Flag } from "@/components/Flag";
import { getSite } from "@/content/get-site";
import { ui } from "@/content/copy/ui";
import {
  localeFromPath,
  localePath,
  localeLabels,
  localeTags,
  locales,
  swapLocale,
  type Locale,
} from "@/content/locale";

/**
 * The two flags, side by side. The language you are in is at full strength
 * with a gold rule around it; the other is dimmed until you reach for it.
 *
 * Both are real links to the same page in the other language, so a reader who
 * lands on the Vietnamese Container Club page and switches gets the English
 * one rather than the home page, and a crawler can follow them. The flag
 * carries no text, so each link states its language for a screen reader.
 *
 * It sits in the bar itself at every width, phones included: buried in the
 * menu, a Vietnamese reader landing on the English homepage had no way of
 * knowing the site speaks their language without opening it first.
 */
function LocaleSwitcher({
  locale,
  otherPath,
  size = "desktop",
}: {
  locale: Locale;
  otherPath: string;
  size?: "desktop" | "mobile";
}) {
  const flag = size === "desktop" ? "w-[26px] h-[17px]" : "w-[30px] h-[20px]";
  return (
    <div className="flex items-center gap-1 shrink-0">
      {locales.map((l) => {
        const active = l === locale;
        const mark = (
          <Flag
            locale={l}
            className={`${flag} ring-1 transition-all duration-200 ${
              active
                ? "ring-brand-gold/70 opacity-100"
                : "ring-white/15 opacity-45 group-hover/flag:opacity-100 group-hover/flag:ring-white/40"
            }`}
          />
        );
        const box = "group/flag inline-flex items-center justify-center min-w-[40px] min-h-[40px]";
        return active ? (
          <span key={l} className={box} aria-current="true" title={localeLabels[l]}>
            {mark}
          </span>
        ) : (
          <Link
            key={l}
            href={otherPath}
            hrefLang={localeTags[l]}
            aria-label={localeLabels[l]}
            title={localeLabels[l]}
            className={box}
          >
            {mark}
          </Link>
        );
      })}
    </div>
  );
}

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  /** Which top-level link has its panel held open by a tap. Hover is handled
   *  in CSS; this is what a touch screen has instead of hover. */
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const { navLinks } = getSite(locale);
  /** The same page in the other language, so switching keeps your place. */
  const otherPath = swapLocale(pathname);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  /* A tap anywhere else, or Escape, puts the panel away again. Without this a
     panel opened by touch would stay open until the next navigation. */
  useEffect(() => {
    if (!openMenu) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!(e.target as HTMLElement).closest("[data-nav-item]")) setOpenMenu(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [openMenu]);

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
          <Link href={localePath(locale, "/")} className="flex items-center group relative z-50 shrink-0">
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
                const href = localePath(locale, link.path);
                const own = pathname === href || pathname.startsWith(href + "/");
                const childActive = (link.children ?? []).some((c) => {
                  const ch = localePath(locale, c.path);
                  return pathname === ch || pathname.startsWith(ch + "/");
                });
                const isActive = own || childActive;
                const isOpen = openMenu === link.path;
                return (
                  <div key={link.path} data-nav-item className="group relative flex items-center">
                    <Link
                      href={href}
                      aria-expanded={link.children ? isOpen : undefined}
                      onClick={(e) => {
                        /* A tablet gets no hover, so the panel had no way to
                           open: tapping About simply went to About and the page
                           under it was unreachable from the bar. Where the
                           pointer cannot hover, the first tap opens the panel
                           and the second one follows the link. */
                        if (!link.children || isOpen) return;
                        if (window.matchMedia("(hover: none)").matches) {
                          e.preventDefault();
                          setOpenMenu(link.path);
                        }
                      }}
                      className={`font-sans text-[11px] uppercase whitespace-nowrap tracking-[0.15em] xl:tracking-[0.2em] font-semibold transition-colors py-2 flex items-center gap-1 ${
                        isActive ? "text-brand-gold" : "text-text-muted hover:text-white"
                      }`}
                    >
                      {link.name}
                      {link.children && (
                        <ChevronDown
                          size={12}
                          strokeWidth={2.5}
                          className={`transition-transform duration-200 group-hover:rotate-180 ${
                            isOpen ? "rotate-180" : ""
                          }`}
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
                      <div
                        className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-all duration-200 ${
                          isOpen
                            ? "opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto"
                        }`}
                      >
                        <div className="min-w-[200px] rounded-2xl border border-white/10 bg-bg-card/95 backdrop-blur-md p-2 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.9)]">
                          {link.children.map((child) => {
                            const childHref = localePath(locale, child.path);
                            const active =
                              pathname === childHref || pathname.startsWith(childHref + "/");
                            return (
                              <Link
                                key={child.path}
                                href={childHref}
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
              {ui.nav.cta[locale]}
            </a>
            <LocaleSwitcher locale={locale} otherPath={otherPath} />
          </div>

          {/* On a phone the flags sit in the bar rather than inside the menu,
              so the site says which languages it speaks before anything is
              opened. */}
          <div className="lg:hidden flex items-center gap-1 relative z-50">
            <LocaleSwitcher locale={locale} otherPath={otherPath} size="mobile" />
            <button
              className="relative z-50 p-2 text-text-heading"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={ui.nav.toggleMenu[locale]}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-bg-dark/95 backdrop-blur-xl flex flex-col pt-28 px-6 pb-8 h-screen overflow-y-auto">
          <div className="flex flex-col w-full max-w-md mx-auto gap-8">
            <div className="flex flex-col w-full">
              {navLinks.map((link) => (
                <div key={link.path} className="flex flex-col">
                  <Link
                    href={localePath(locale, link.path)}
                    className="flex flex-col gap-1 py-5 border-b border-border-subtle"
                  >
                    <span
                      className={`text-xl font-sans uppercase tracking-[0.2em] font-semibold ${
                        pathname === localePath(locale, link.path)
                          ? "text-brand-gold"
                          : "text-text-heading"
                      }`}
                    >
                      {link.name}
                    </span>
                    <span className="text-sm font-light text-text-muted">{link.descriptor}</span>
                  </Link>
                  {(link.children ?? []).map((child) => (
                    <Link
                      key={child.path}
                      href={localePath(locale, child.path)}
                      className="flex flex-col gap-1 py-5 pl-5 border-b border-border-subtle border-l border-l-white/10"
                    >
                      <span
                        className={`text-base font-sans uppercase tracking-[0.2em] font-semibold ${
                          pathname === localePath(locale, child.path)
                            ? "text-brand-gold"
                            : "text-text-heading"
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
              {ui.nav.cta[locale]}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
