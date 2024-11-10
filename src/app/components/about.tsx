import { H1 } from "./ui/typography";
import Image from "next/image";

import { client } from "@/sanity/client";
import { HERO_QUERY } from "@/sanity/constants";
import { PortableText, SanityDocument } from "next-sanity";

const options = { next: { revalidate: 5 } };

export default async function About() {
  const heroContent = await client.fetch<SanityDocument>(
    HERO_QUERY,
    {},
    options
  );
  return (
    <div
      id="about"
      className="mt-4 px-8 max-w-[90%] mx-auto items-center justify-items-center scroll-m-16"
    >
      <H1>Platon Woxler </H1>
      <div className="grid grid-cols-2 gap-4 pt-4">
        {heroContent.imageUrl && (
          <Image
            className="w-full"
            src={heroContent.imageUrl}
            alt={""}
            width={800}
            height={400}
          />
        )}
        <div>
          <PortableText value={heroContent.body} />
        </div>
      </div>
    </div>
  );
}
