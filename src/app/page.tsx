import { client } from "@/sanity/client";
import { HERO_QUERY, POSTS_QUERY } from "@/sanity/constants";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { HeroContent, SanityProjectPostType } from "@/sanity/sanity.types";

const postOptions = { next: { revalidate: 60 } };
const heroOptions = { next: { revalidate: 600 } };

export default async function Home() {
  const posts: SanityProjectPostType[] = await client.fetch<
    SanityProjectPostType[]
  >(POSTS_QUERY, {}, postOptions);
  const heroContent: HeroContent = await client.fetch<HeroContent>(
    HERO_QUERY,
    {},
    heroOptions
  );

  return (
    heroContent &&
    posts && (
      <>
        <section className="mx-auto hidden md:block">
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
