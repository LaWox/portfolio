import { PortableText, SanityDocument } from "next-sanity";
import { H2 } from "./ui/typography";

import Image from "next/image";
import { Separator } from "./ui/separator";

export const About = ({ heroContent }: { heroContent: SanityDocument }) => {
  return (
    <div
      id="about"
      className="mx-auto items-center justify-items-center scroll-m-16 relative py-8 max-w-6xl px-2 md:px-0"
    >
      <H2> About </H2>
      <Separator orientation="vertical" className="h-8 w-[2px] m-4 bg-black" />
      {heroContent.portraitImageUrl && (
        <Image
          src={heroContent.portraitImageUrl}
          alt={"Portraite of Platon Woxler"}
          width={200}
          height={200}
          className="rounded-full"
        />
      )}
      <Separator orientation="vertical" className="h-8 w-[2px] m-4 bg-black" />

      <PortableText value={heroContent.body} />
    </div>
  );
};
