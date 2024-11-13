import { H1 } from "./ui/typography";
import Image from "next/image";

import { client } from "@/sanity/client";
import { HERO_QUERY } from "@/sanity/constants";
import { SanityDocument } from "next-sanity";

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
      className=" mx-auto items-center justify-items-center scroll-m-16  relative"
    >
      <div className="text-white absolute top-[25%] left-[25%] w-full drop-shadow-[0_5.2px_5.2px_rgba(1,1,1,1)]">
        <H1>Platon Woxler </H1>
      </div>
      {heroContent.imageUrl && (
        <Image
          className="w-full"
          src={heroContent.imageUrl}
          alt={""}
          width={800}
          height={400}
        />
      )}
      {/* <div>
        <PortableText value={heroContent.body} />
      </div> */}
    </div>
  );
}
