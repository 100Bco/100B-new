// Wistia player custom element (loaded globally via scripts in index.html).
// React 19 moved the JSX namespace under `react`; we augment it here so we can
// drop <wistia-player ...> into JSX with attribute typing.
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
