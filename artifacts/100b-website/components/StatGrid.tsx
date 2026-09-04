import { CountUp } from "@/components/CountUp";

export type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
};

/** Number grid with ticker animation on scroll. */
export function StatGrid({
  stats,
  columns = 3,
  size = "lg",
}: {
  stats: Stat[];
  columns?: 2 | 3 | 4;
  size?: "md" | "lg";
}) {
  const cols = {
    2: "grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 lg:grid-cols-4",
  }[columns];
  const num =
    size === "lg"
      ? "text-4xl md:text-5xl lg:text-6xl"
      : "text-3xl md:text-4xl lg:text-5xl";

  return (
    <div className={`grid ${cols} gap-px bg-white/[0.06] rounded-3xl overflow-hidden border border-white/[0.06]`}>
      {stats.map((s) => (
        <div key={s.label} className="bg-bg-card p-6 lg:p-8 flex flex-col gap-3">
          <span className={`${num} font-display text-gradient-gold leading-none`}>
            <CountUp
              to={s.value}
              prefix={s.prefix}
              suffix={s.suffix}
              decimals={s.decimals}
            />
          </span>
          <span className="text-xs lg:text-sm font-light text-text-muted leading-snug">
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}
