import Script from "next/script";

/**
 * The Wistia player, loaded only on a page that has a video to play.
 *
 * These four scripts used to sit in the root layout, so every page fetched
 * them, including the privacy policy. Three pages of eleven carry a video.
 * Loading the player on the other eight cost bandwidth on every one of them
 * and, since the player is the only thing on this site that sets a cookie,
 * put a cookie on pages that had nothing to play.
 */
export function WistiaScripts({ mediaId }: { mediaId: string }) {
  return (
    <>
      <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
      <Script
        src={`https://fast.wistia.com/embed/${mediaId}.js`}
        strategy="afterInteractive"
        type="module"
      />
    </>
  );
}
