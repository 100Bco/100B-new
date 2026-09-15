import type { PressItem, Testimonial } from "@/content/site";
import type { TripPhoto } from "@/components/PhotoCarousel";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://100b.co";

/**
 * Structured data for the three things the site says in carousels: what
 * people said about us, where we were written about, and what the trips
 * looked like. The markup carries the same words the page carries, so a
 * crawler that reads only the head still gets the substance of each section.
 */

/** The quotes on a page, as reviews of 100B. */
export function reviewSchema(testimonials: Testimonial[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "100B Beyond Borders",
    url: SITE_URL,
    review: testimonials.map((t) => ({
      "@type": "Review",
      reviewBody: t.quote,
      name: t.headline ?? t.company,
      author: {
        "@type": "Person",
        name: t.name,
        ...(t.title ? { jobTitle: t.title } : {}),
        worksFor: { "@type": "Organization", name: t.company },
      },
      itemReviewed: { "@type": "Organization", name: "100B Beyond Borders", url: SITE_URL },
    })),
  };
}

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
