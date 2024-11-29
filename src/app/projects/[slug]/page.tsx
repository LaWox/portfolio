import { client } from "@/sanity/client";
import { SanityProjectPostType } from "@/sanity/sanity.types";
import { ProjectPage } from "./ProjectPage";
import { GetPostBySlugQuery } from "@/sanity/utils";

const options = { next: { revalidate: 5 } };

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const postQuery = GetPostBySlugQuery({ slug: slug, includeDevLogs: true });

  const post: SanityProjectPostType = await client.fetch<SanityProjectPostType>(
    postQuery,
    {},
    options
  );

  return post && <ProjectPage post={post} />;
}
