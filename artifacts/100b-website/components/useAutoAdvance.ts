"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * The advancing index behind every carousel on the site.
 *
 * The timer is keyed on the current index, so it restarts from zero each time
 * the slide changes, however it changed. Without that, the clock kept running
 * across a click: press next a moment before it was due and the slide you just
 * asked for was gone almost at once, which read as the carousel skipping a
 * person. Now every slide gets its full time on screen, whether it arrived on
 * its own or because someone asked for it.
 */
export function useAutoAdvance(count: number, interval: number) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (count < 2 || interval <= 0) return;
    const timer = setTimeout(
      () => setCurrent((p) => (p + 1) % count),
      interval,
    );
    return () => clearTimeout(timer);
  }, [current, count, interval]);

  const goTo = useCallback(
    (index: number) => setCurrent(((index % count) + count) % count),
    [count],
  );
  const goNext = useCallback(() => setCurrent((p) => (p + 1) % count), [count]);
  const goPrev = useCallback(
    () => setCurrent((p) => (p - 1 + count) % count),
    [count],
  );

  return { current, goTo, goNext, goPrev };
}
