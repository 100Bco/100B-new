# Press Images

Drop press / media images here (jpg, png, webp).

These are imported by the **Press strip** (Home and About) via the
`@assets/press/...` alias, from `artifacts/100b-website/content/site.ts`.

## Naming convention

Use a short, kebab-case slug that hints at the article topic, e.g.:

- `ket-noi-doanh-nhan-viet-kieu.jpg`
- `100b-summit-2024.webp`

## Adding a new article

1. Drop the image file in this folder.
2. Open `artifacts/100b-website/content/site.ts`.
3. Import the image at the top:
   ```ts
   import myArticleImg from "@assets/press/my-article.jpg";
   ```
4. Add an entry to `pressItems` in the file, setting `image: myArticleImg.src`.
   The strip shows three placements; keep the list to the three that matter.

Articles without an `image` will fall back to a dark gradient tile so the
layout stays intact.
