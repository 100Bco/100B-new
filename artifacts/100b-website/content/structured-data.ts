import type { PressItem } from "@/content/site";
import type { TripPhoto } from "@/components/PhotoCarousel";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://100b.co";

/**
 * Structured data for what the carousels carry: where we were written about,
 * and what the trips looked like. The markup repeats the words already in the
 * page rather than standing in for them.
 */

/* The quotes are deliberately not marked up as Review.
   Google rejects an item carrying several reviews with no aggregateRating,
   and there is no rating to give: these are testimonials, not scored reviews,
   so any number would be invented. Reviews an organisation publishes about
   itself are self-serving in Google's terms and never eligible for rich
   results either, so the markup could only ever have cost us. The quotes
   themselves are in the page, every one of them, which is what a crawler
   actually reads. */

/** The press placements, each credited to the outlet that published it. */
export function pressSchema(items: PressItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "100B in the press",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "NewsArticle",
        headline: item.headline,
        description: item.description,
        url: item.link,
        ...(item.image ? { image: `${SITE_URL}${item.image}` } : {}),
        publisher: { "@type": "Organization", name: item.outlet },
      },
    })),
  };
}

/** A photo gallery, with the room each frame was taken in. */
export function gallerySchema(name: string, photos: TripPhoto[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name,
    associatedMedia: photos.map((photo) => ({
      "@type": "ImageObject",
      contentUrl: `${SITE_URL}${photo.src}`,
      caption: `${photo.caption}, ${photo.label}`,
      representativeOfPage: false,
    })),
  };
}
