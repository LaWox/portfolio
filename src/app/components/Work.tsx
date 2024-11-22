import { H2 } from "./ui/typography";

import { ProjectPost } from "./ProjectPost";
import { Separator } from "./ui/separator";
import { SanityProjectPostType } from "@/sanity/sanity.types";

export const Work = ({ posts }: { posts: SanityProjectPostType[] }) => {
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
