import { H1 } from "./ui/typography";
import Image from "next/image";

import { client } from "@/sanity/client";
import { HERO_QUERY } from "@/sanity/constants";
import { SanityDocument } from "next-sanity";

const options = { next: { revalidate: 5 } };

export default async function Hero() {
  const heroContent = await client.fetch<SanityDocument>(
    HERO_QUERY,
    {},
    options
  );
  return (
    <div id="start" className="scroll-m-20 relative">
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2]">
        <H1>Platon Woxler</H1>
      </div>
      {heroContent.imageUrl && (
        <Image
          className="max-h-[calc(100vh-300px)] w-full"
          src={heroContent.imageUrl}
          alt={""}
          width={2400}
          height={1600}
        />
      )}
    </div>
  );
}
