import { H1, H2 } from "./ui/typography";

import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";
import { ProjectPost } from "./projectPost";

const POSTS_QUERY = `*[
  _type == "projectPost"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, body, slug, publishedAt, "imageUrls": images[].asset->url}`;

const options = { next: { revalidate: 5 } };

export default async function Work() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <div
      id="work"
      className="mt-4 items-center justify-items-center min-h-screen scroll-m-16"
    >
      <H1>Work</H1>
      <div className="grid grid-cols-1 gap-8">
        {posts.map((post) => (
          <div className="py-2" key={post._id}>
            <ProjectPost post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
