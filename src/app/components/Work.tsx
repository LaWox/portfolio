import { H2 } from "./ui/typography";

import { ProjectPost } from "./ProjectPost";
import { SanityDocument } from "next-sanity";

export const Work = ({ posts }: { posts: SanityDocument[] }) => {
  return (
    <div
      id="work"
      className="pt-8 items-center justify-items-center min-h-screen scroll-m-16 bg-[#F4F1BB] border-t-2"
    >
      <H2>Work</H2>
      <div className="grid grid-cols-1 gap-8 max-w-6xl">
        {posts.map((post, idx) => (
          <ProjectPost key={post._id} post={post} idx={idx} />
        ))}
      </div>
    </div>
  );
};