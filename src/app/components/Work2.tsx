import { H2 } from "./ui/typography";

import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";
import { ProjectPost } from "./ProjectPost2";
import { POSTS_QUERY } from "@/sanity/constants";

const options = { next: { revalidate: 30 } };

export const Work = async () => {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <div
      id="work"
      className="pt-8 items-center justify-items-center min-h-screen scroll-m-16 bg-[#F4F1BB]"
    >
      <H2>Work</H2>
      <div className="grid grid-cols-1 gap-8 max-w-6xl">
        {posts.map((post, idx) => (
          <div className="py-2" key={post._id}>
            <ProjectPost post={post} idx={idx} />
          </div>
        ))}
      </div>
    </div>
  );
};
