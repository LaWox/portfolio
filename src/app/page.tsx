import { client } from "@/sanity/client";
import { HERO_QUERY, POSTS_QUERY } from "@/sanity/constants";
import { SanityDocument } from "next-sanity";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";

const options = { next: { revalidate: 5 } };

export default async function Home() {
  const heroContent = await client.fetch<SanityDocument>(
    HERO_QUERY,
    {},
    options
  );

  const workPosts = await client.fetch<SanityDocument[]>(
    POSTS_QUERY,
    {},
    options
  );

  console.log("heroContent.imgUrl: ", heroContent.imageUrl);
  return (
    <>
      <section className="px-16 mx-auto">
        {heroContent.imageUrl && <Hero imageUrl={heroContent.imageUrl} />}
      </section>
      <section className="mx-auto">
        <About heroContent={heroContent} />
        <Work posts={workPosts} />
        <Contact />
      </section>
    </>
  );
}
