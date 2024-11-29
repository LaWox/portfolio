import { H2 } from "./ui/typography";

import { Separator } from "./ui/separator";
import { SanityProjectPostType } from "@/sanity/sanity.types";
import { ProjectEntry } from "./ProjectEntry";

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
          {posts.map((post, idx) => {
            return (
              <ProjectEntry
                key={post._id}
                entry={{
                  title: post.title,
                  imageUrls: post.imageUrls,
                  slug: post.slug,
                  body: post.body,
                }}
                idx={idx}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
