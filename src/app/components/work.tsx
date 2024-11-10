import { H2 } from "./ui/typography";

import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";
import { ProjectPost } from "./projectPost";
import { POSTS_QUERY } from "@/sanity/constants";

const options = { next: { revalidate: 30 } };

export default async function Work() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <div
      id="work"
      className="pt-12 items-center justify-items-center min-h-screen scroll-m-16"
    >
      <H2>Work</H2>
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
