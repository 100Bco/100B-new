import { Linkedin } from "lucide-react";
import { founders } from "@/content/site";

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/** Three founders on near-black. Portrait, name, title, one paragraph.
 *  They hold one row at every width, phones included: three stacked cards
 *  cost most of a screen of scrolling to say what a row says at a glance. */
export function Founders({ variant = "short" }: { variant?: "short" | "long" }) {
  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-5 lg:gap-6">
      {founders.map((f) => (
        <div key={f.name} className="flex flex-col items-center text-center gap-2.5 sm:gap-4">
          <div className="relative w-full aspect-square rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A0A]">
            {f.photo ? (
              <>
                <img
                  src={f.photo}
                  alt={f.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Warm floor so the portraits sit in the same light as the page */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.55) 100%)",
                  }}
                  aria-hidden
                />
              </>
            ) : (
              <div className="absolute inset-0 grain-overlay">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(195,163,116,0.14) 0%, transparent 70%)",
                  }}
                  aria-hidden
                />
                <span className="absolute inset-0 flex items-center justify-center font-display text-[40px] sm:text-[96px] lg:text-[120px] text-gradient-gold opacity-25 leading-none select-none">
                  {initials(f.name)}
                </span>
              </div>
            )}
          </div>
          <div className="flex flex-col items-center gap-1 sm:gap-1.5">
            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
              <h3 className="font-sans font-bold text-[13px] sm:text-lg lg:text-xl text-text-heading leading-tight">
                {f.name}
              </h3>
              {f.linkedin && (
                <a
                  href={f.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${f.name} on LinkedIn`}
                  className="text-text-muted hover:text-brand-gold transition-colors shrink-0"
                >
                  <Linkedin strokeWidth={1.75} className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              )}
            </div>
            {/* The titles run one to three lines at this width, so the shortest
                reserves the tallest's room and the three bios start level. */}
            <p className="min-h-[46px] sm:min-h-0 text-[8px] sm:text-[11px] uppercase tracking-[0.1em] sm:tracking-[0.2em] font-semibold text-brand-gold leading-snug">
              {f.title}
            </p>
            <p className="text-[11px] sm:text-sm font-light leading-relaxed text-text-body mt-0.5 sm:mt-1">
              {variant === "long" ? f.long : f.short}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
