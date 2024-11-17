export const POSTS_QUERY = `*[
    _type == "projectPost"
    && defined(slug.current)
  ]|order(publishedAt desc)[0...12]{_id, title, body, slug, gitLink, publishedAt, "imageUrls": images[].asset->url}`;

export const HERO_QUERY = `*[
    _type == "heroContent"
    && defined(slug.current)
  ][0]{_id, title, body, slug, gitUrl, linkedinUrl, publishedAt, "heroImageUrl": heroImage.asset->url, "portraitImageUrl": portraitImage.asset -> url}`;
