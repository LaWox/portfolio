import { client } from "@/sanity/client";
import { HERO_QUERY, POSTS_QUERY } from "@/sanity/constants";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { HeroContent, SanityProjectPostType } from "@/sanity/sanity.types";

const options = { next: { revalidate: 5 } };

export default async function Home() {
  const posts: SanityProjectPostType[] = await client.fetch<
    SanityProjectPostType[]
  >(POSTS_QUERY, {}, options);
  const heroContent: HeroContent = await client.fetch<HeroContent>(
    HERO_QUERY,
    {},
    options
  );

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
