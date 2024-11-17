import { client } from "@/sanity/client";
import { HERO_QUERY, POSTS_QUERY } from "@/sanity/constants";
import { SanityDocument } from "next-sanity";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";

const options = { next: { revalidate: 5 } };

export default async function Home() {
  const posts: SanityDocument[] = await client.fetch<SanityDocument[]>(
    POSTS_QUERY,
    {},
    options
  );
  const heroContent: SanityDocument = await client.fetch<SanityDocument>(
    HERO_QUERY,
    {},
    options
  );

  console.log("heroContent: ", heroContent);
  return (
    heroContent &&
    posts && (
      <>
        <section className="px-16 mx-auto hidden md:block">
          <Hero imageUrl={heroContent.heroImageUrl} />
        </section>
        <section className="mx-auto">
          <About heroContent={heroContent} />
          <Work posts={posts} />
          <Contact />
        </section>
      </>
    )
  );
}
