import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const links = [
    { name: "Trade", path: "/trade" },
    { name: "Build", path: "/build" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[88px] md:h-[96px] flex items-center ${
          isScrolled
            ? "bg-bg-dark/90 backdrop-blur-md border-b border-border-subtle"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center group relative z-50">
            <img
              src="/logo-100b.png"
              alt="100B Beyond Borders"
              className="h-12 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {links.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`font-sans text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors ${
                      isActive
                        ? "text-brand-gold"
                        : "text-text-muted hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <a
              href="#contact-footer"
              className="btn-silver-gradient rounded-full px-6 py-3 text-[11px] uppercase tracking-widest font-semibold flex items-center justify-center whitespace-nowrap"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact-footer")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Start a Conversation
            </a>
          </div>

          <button
            className="md:hidden relative z-50 p-2 text-text-heading"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-bg-dark bg-opacity-95 backdrop-blur-xl flex flex-col items-center justify-center pt-24 px-6 pb-6 h-screen">
          <div className="flex flex-col items-center gap-12 w-full max-w-sm">
            <div className="flex flex-col items-center gap-8 w-full">
              <Link
                to="/"
                className={`text-2xl font-sans uppercase tracking-[0.2em] font-semibold w-full text-center py-4 border-b border-border-subtle ${
                  location.pathname === "/" ? "text-brand-gold" : "text-text-heading"
                }`}
              >
                Home
              </Link>
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-2xl font-sans uppercase tracking-[0.2em] font-semibold w-full text-center py-4 border-b border-border-subtle ${
                    location.pathname === link.path ? "text-brand-gold" : "text-text-heading"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <a
              href="#contact-footer"
              className="btn-silver-gradient rounded-full px-8 py-4 text-sm uppercase tracking-widest font-semibold w-full text-center"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                document.querySelector("#contact-footer")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Start a Conversation
            </a>
          </div>
        </div>
      )}
    </>
  );
}
