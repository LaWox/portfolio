"use client";
import { client } from "@/sanity/client";
import { HERO_QUERY, POSTS_QUERY } from "@/sanity/constants";
import { SanityDocument } from "next-sanity";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { useEffect, useState } from "react";

const options = { next: { revalidate: 5 } };

export default function Home() {
  const [heroContent, setHeroContent] = useState<SanityDocument>();
  const [posts, setPosts] = useState<SanityDocument[]>();

  useEffect(() => {
    const getPosts = async () => {
      const res: SanityDocument[] = await client.fetch<SanityDocument[]>(
        POSTS_QUERY,
        {},
        options
      );
      setPosts(res);
    };
    const getHeroData = async () => {
      const res: SanityDocument = await client.fetch<SanityDocument>(
        HERO_QUERY,
        {},
        options
      );
      setHeroContent(res);
    };
    getPosts();
    getHeroData();
  }, []);

  return (
    heroContent &&
    posts && (
      <>
        <section className="px-16 mx-auto">
          <Hero imageUrl={heroContent.imageUrl} />
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
