import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

interface CountUpProps {
  /** Target number to count to. */
  to: number;
  /** Optional prefix rendered unchanged (e.g. "$", "#"). */
  prefix?: string;
  /** Optional suffix rendered unchanged (e.g. "M", "B", "+"). */
  suffix?: string;
  /** Animation duration in seconds. Kept slow by default so the count reads
   *  as institutional data reveal, not a lottery-wheel flash. */
  duration?: number;
  /** Fraction of the element that must enter the viewport before counting starts.
   *  0.5 = half-visible. Counts once. */
  threshold?: number;
  className?: string;
}

/**
 * Animates an integer from 0 to `to` with an ease-out curve when the element
 * scrolls into view. Preserves prefix / suffix so "$405B" reads through the
 * entire animation — not "0" → "405" → "$405B".
 */
export function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 1.6,
  threshold = 0.5,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: threshold });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (to === 0) {
      setValue(0);
      return;
    }

    const start = performance.now();
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      setValue(Math.round(to * easeOutCubic(progress)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
