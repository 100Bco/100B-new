# Press Images

Drop press / media images here (jpg, png, webp).

These are imported by the **Press section ("BÁO VÀ PHÓNG SỰ")** in
`artifacts/100b-website/app/HomeClient.tsx` via the `@assets/press/...` alias.

## Naming convention

Use a short, kebab-case slug that hints at the article topic, e.g.:

- `ket-noi-doanh-nhan-viet-kieu.jpg`
- `100b-summit-2024.webp`

## Adding a new article

1. Drop the image file in this folder.
2. Open `artifacts/100b-website/app/HomeClient.tsx`.
3. Import the image at the top:
   ```ts
   import myArticleImg from "@assets/press/my-article.jpg";
   ```
4. Add an entry to either `pressCommunity` or `pressBusiness` in the file,
   setting `image: myArticleImg.src`.

Articles without an `image` will fall back to a dark gradient tile so the
layout stays intact.
