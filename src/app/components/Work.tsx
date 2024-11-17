import { H2 } from "./ui/typography";

import { ProjectPost } from "./ProjectPost";
import { SanityDocument } from "next-sanity";
import { Separator } from "./ui/separator";

export const Work = ({ posts }: { posts: SanityDocument[] }) => {
  return (
    <>
      <Separator className="h-1" />
      <div
        id="work"
        className="py-8 items-center justify-items-center scroll-m-16 bg-[#F4F1BB]"
      >
        <H2>Work</H2>
        <div className="grid grid-cols-1 gap-8 max-w-6xl px-2 md:px-none py-4">
          {posts.map((post, idx) => (
            <ProjectPost key={post._id} post={post} idx={idx} />
          ))}
        </div>
      </div>
    </>
  );
};
