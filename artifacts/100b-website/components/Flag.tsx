import type { Locale } from "@/content/locale";

/**
 * The two flags in the language switcher, drawn inline rather than set as
 * emoji. Emoji flags are a platform lottery: Windows renders them as the two
 * letters of the country code instead of a picture, so half the audience
 * would see "VN" and "US" where the design says flag. These are the same
 * everywhere, stay crisp on any screen, and cost no extra request.
 *
 * Both sit in the same 3:2 field so the pair reads as one control, and both
 * carry the thin rule the rest of the bar uses, which keeps the bright cloth
 * from shouting against the black.
 */
export function Flag({ locale, className = "" }: { locale: Locale; className?: string }) {
  const shared = `block rounded-[2px] ${className}`;
  if (locale === "vi") {
    return (
      <svg viewBox="0 0 30 20" className={shared} aria-hidden focusable="false">
        <rect width="30" height="20" fill="#DA251D" />
        <path
          d="M15.00,3.60 L16.44,8.02 L21.09,8.02 L17.32,10.76 L18.76,15.18 L15.00,12.44 L11.24,15.18 L12.68,10.76 L8.91,8.02 L13.56,8.02 Z"
          fill="#FFCD00"
        />
      </svg>
    );
  }
  /* Thirteen stripes and the canton. The stars are a suggestion rather than
     fifty of them: at the size this renders, fifty would be grey mud. */
  return (
    <svg viewBox="0 0 30 20" className={shared} aria-hidden focusable="false">
      <rect width="30" height="20" fill="#F7F7F7" />
      {[0, 2, 4, 6, 8, 10, 12].map((i) => (
        <rect key={i} y={(i * 20) / 13} width="30" height={20 / 13} fill="#B22234" />
      ))}
      <rect width="13.2" height={(7 * 20) / 13} fill="#3C3B6E" />
      {[0, 1, 2, 3].map((row) => {
        const odd = row % 2 === 1;
        const cols = odd ? 4 : 5;
        return Array.from({ length: cols }, (_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={(odd ? 2.81 : 1.55) + col * 2.52}
            cy={1.55 + row * 2.6}
            r="0.6"
            fill="#FFFFFF"
          />
        ));
      })}
    </svg>
  );
}
