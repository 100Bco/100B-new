import { founders } from "@/content/site";

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/** Three founders on near-black. Portrait, name, title, one paragraph. */
export function Founders({ variant = "short" }: { variant?: "short" | "long" }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
      {founders.map((f) => (
        <div key={f.name} className="flex flex-col items-center text-center gap-4">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A0A]">
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
                <span className="absolute inset-0 flex items-center justify-center font-display text-[96px] lg:text-[120px] text-gradient-gold opacity-25 leading-none select-none">
                  {initials(f.name)}
                </span>
              </div>
            )}
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <h3 className="font-sans font-bold text-lg lg:text-xl text-text-heading leading-tight">
              {f.name}
            </h3>
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold">
              {f.title}
            </p>
            <p className="text-sm font-light leading-relaxed text-text-body mt-1">
              {variant === "long" ? f.long : f.short}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
