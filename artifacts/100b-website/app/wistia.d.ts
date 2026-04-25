// Wistia player custom element (loaded globally via next/script in layout.tsx).
import type { DetailedHTMLProps, HTMLAttributes } from "react";

type WistiaPlayerAttributes = HTMLAttributes<HTMLElement> & {
  "media-id"?: string;
  aspect?: string;
  autoplay?: string | boolean;
  muted?: string | boolean;
  "end-video-behavior"?: string;
  "controls-visible-on-load"?: string | boolean;
  "play-button"?: string | boolean;
  playbar?: string | boolean;
  "small-play-button"?: string | boolean;
  "fullscreen-button"?: string | boolean;
  "volume-control"?: string | boolean;
  "settings-control"?: string | boolean;
  "quality-control"?: string | boolean;
  "silent-auto-play"?: string;
};

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "wistia-player": DetailedHTMLProps<WistiaPlayerAttributes, HTMLElement>;
    }
  }
}

export {};
