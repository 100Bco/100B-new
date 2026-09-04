import { founders } from "@/content/site";

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/**
 * Three founders on near-black. Portrait slots are placeholders until
 * portraits are supplied; swap `photo` in when they land.
 */
export function Founders({ variant = "short" }: { variant?: "short" | "long" }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {founders.map((f) => (
        <div key={f.name} className="flex flex-col gap-6">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0A] grain-overlay">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(195,163,116,0.14) 0%, transparent 70%)",
              }}
              aria-hidden
            />
            <span className="absolute inset-0 flex items-center justify-center font-display text-[96px] lg:text-[120px] text-gradient-gold opacity-25 leading-none select-none">
              {initials(f.name)}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-serif text-2xl lg:text-3xl text-text-heading leading-tight">
              {f.name}
            </h3>
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold">
              {f.title}
            </p>
            <p className="text-sm lg:text-base font-light leading-relaxed text-text-body mt-2">
              {variant === "long" ? f.long : f.short}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
