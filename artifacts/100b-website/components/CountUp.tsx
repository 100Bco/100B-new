"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

interface CountUpProps {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

/** Layout effects do not run on the server, so the client uses one and the
 *  server never sees it. Zeroing before the first paint is what keeps the
 *  figure from flashing when the block is already on screen. */
const useBeforePaint = typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * A figure that counts up when it scrolls into view.
 *
 * The final figure is the default: it is what the server renders, what a
 * reader with no JavaScript sees, and what a crawler reads. The count is an
 * enhancement laid over it, not the thing that produces it. On the client the
 * number is set to zero before the first paint and counted back up when the
 * block arrives, so nothing is ever seen changing from the real figure to a
 * zero.
 */
export function CountUp({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.6,
  threshold = 0.5,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: threshold });
  const [value, setValue] = useState(to);
  /** False until the client has taken the figure over. */
  const armed = useRef(false);

  useBeforePaint(() => {
    armed.current = true;
    setValue(0);
  }, []);

  useEffect(() => {
    if (!armed.current || !inView) return;
    if (to === 0) {
      setValue(0);
      return;
    }

    const start = performance.now();
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      setValue(to * easeOutCubic(progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}
