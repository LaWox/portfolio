import { client } from "@/sanity/client";
import { HERO_QUERY } from "@/sanity/constants";
import { PortableText, SanityDocument } from "next-sanity";
import { H2 } from "./ui/typography";

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
      className="mx-auto items-center justify-items-center scroll-m-16 relative py-8"
    >
      <H2> About </H2>
      <PortableText value={heroContent.body} />
    </div>
  );
}
