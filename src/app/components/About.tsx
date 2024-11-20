import { PortableText, SanityDocument } from "next-sanity";
import { H2 } from "./ui/typography";

import Image from "next/image";
import { Separator } from "./ui/separator";

export const About = ({ heroContent }: { heroContent: SanityDocument }) => {
  return (
    <div
      id="about"
      className="mx-auto pt-2 md:pt-8 py-8 justify-items-center scroll-m-16 relative max-w-6xl"
    >
      <H2 className=""> About </H2>
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
