import { client } from "@/sanity/client";
import { SanityProjectPostType, HeroContent } from "@/sanity/sanity.types";
import { ProjectPage } from "./ProjectPage";
import { GetPostQuery } from "@/sanity/utils";

const options = { next: { revalidate: 5 } };

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const query = GetPostQuery(slug);

  const post: SanityProjectPostType = await client.fetch<SanityProjectPostType>(
    query,
    {},
    options
  );

  return post && <ProjectPage page={post} />;
}
