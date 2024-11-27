import { client } from "@/sanity/client";
import { POSTS_QUERY } from "@/sanity/constants";
import { SanityProjectPostType } from "@/sanity/sanity.types";
import { ProjectPost } from "@/components/ProjectPost";
import { H2 } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";

const options = { next: { revalidate: 5 } };

export default async function Page() {
  const posts: SanityProjectPostType[] = await client.fetch<
    SanityProjectPostType[]
  >(POSTS_QUERY, {}, options);

  return (
    <div className="max-w-6xl mx-auto ">
      <H2 className="text-center py-4"> Projects </H2>
      <Separator className="h-1" />
      <div className="grid grid-row md:grid-col md:grid-cols-2 gap-8 py-4 md:py-8">
        {posts.map((p) => (
          <ProjectPost key={p._id} post={p} orientation="vertical" />
        ))}
      </div>
    </div>
  );
}
