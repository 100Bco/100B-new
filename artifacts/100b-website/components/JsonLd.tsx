/**
 * One block of structured data, rendered with the page rather than injected
 * later, so it is in the HTML a crawler is served on the first request.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
