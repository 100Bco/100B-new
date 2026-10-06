/**
 * The social marks, each a filled rounded square with the glyph knocked out
 * rather than painted. The hole is a hole, so whatever the mark sits on shows
 * through it and one set works on the black field, on a portrait and on gold.
 *
 * Each mark is a single path: evenodd only cuts a hole where the subpath is
 * part of the same fill. The letterforms are the platforms' own, scaled to
 * one shared box so the three read at the same weight in a row; only the
 * corner radius is ours.
 */

const SQUARE =
  "M5.5 0h13A5.5 5.5 0 0 1 24 5.5v13a5.5 5.5 0 0 1-5.5 5.5h-13A5.5 5.5 0 0 1 0 18.5v-13A5.5 5.5 0 0 1 5.5 0Z";

const GLYPHS = {
  linkedin:
    "M5.337 7.433a2.064 2.064 0 1 1 0-4.128 2.064 2.064 0 0 1 0 4.128ZM7.119 20.452H3.555V9h3.564v11.452ZM20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286Z",
  facebook:
    "M14.122 7.725H15.325V5.69A16.71 16.71 0 0 0 13.571 5.6C11.83 5.6 10.64 6.662 10.64 8.608v1.677H8.675v2.278h1.965V18.4h2.355v-5.837h1.958l.294-2.278h-2.253V8.832c0-.659.179-1.107 1.126-1.107Z",
  tiktok:
    "M12.291 5.411c.718-.011 1.431-.005 2.144-.011c.044.839.345 1.695.96 2.287c.614.609 1.481.888 2.325.982v2.21c-.79-.027-1.585-.192-2.303-.532c-.313-.143-.603-.324-.888-.51c-.005 1.601.005 3.203-.011 4.799c-.044.768-.296 1.53-.74 2.161c-.718 1.053-1.963 1.738-3.241 1.76c-.784.044-1.568-.17-2.237-.565c-1.108-.653-1.886-1.848-2.002-3.131c-.011-.274-.016-.548-.005-.817c.099-1.042.614-2.04 1.415-2.72c.91-.79 2.183-1.168 3.373-.943c.011.812-.022 1.623-.022 2.435c-.543-.175-1.179-.126-1.656.203c-.345.225-.609.57-.746.96c-.115.28-.082.587-.077.883c.132.899.998 1.656 1.919 1.574c.614-.005 1.201-.362 1.519-.883c.104-.181.219-.367.225-.581c.055-.982.033-1.958.038-2.939c.005-2.21-.005-4.415.011-6.619Z",
} as const;

export type SocialMarkName = keyof typeof GLYPHS;

export function SocialMark({
  name,
  className = "",
}: {
  name: SocialMarkName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      aria-hidden
      focusable="false"
      className={className}
    >
      <path d={SQUARE + GLYPHS[name]} />
    </svg>
  );
}

/** The one mark that is also used on its own, beside a person's name. */
export function LinkedInMark({ className = "" }: { className?: string }) {
  return <SocialMark name="linkedin" className={className} />;
}
