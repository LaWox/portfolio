import { H2 } from "./ui/typography";

import { ProjectPost } from "./ProjectPost";
import { SanityDocument } from "next-sanity";
import { Separator } from "./ui/separator";

export const Work = ({ posts }: { posts: SanityDocument[] }) => {
  return (
    <>
      <div
        id="work"
        className="items-center justify-items-center scroll-m-16 max-w-6xl mx-auto"
      >
        <Separator className="h-1" />
        <H2 className="py-8">Work</H2>
        <div className="grid grid-cols-1 gap-8">
          {posts.map((post, idx) => (
            <ProjectPost key={post._id} post={post} idx={idx} />
          ))}
        </div>
      </div>
    </>
  );
};
