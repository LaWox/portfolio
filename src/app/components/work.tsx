import { H1, H2 } from "./ui/typography";

import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";
import Link from "next/link";
const POSTS_QUERY = `*[
  _type == "projectPost"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function Work() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  console.log("posts: ", posts);

  return (
    <div
      id="work"
      className="mt-4 items-center justify-items-center min-h-screen scroll-m-10"
    >
      <H1>Work</H1>
      {posts.map((post) => (
        <li className="hover:underline" key={post._id}>
          <Link href={`/${post.slug.current}`}>
            <H2>{post.title}</H2>
            <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
          </Link>
        </li>
      ))}
    </div>
  );
}
