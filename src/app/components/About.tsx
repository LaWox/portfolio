import { PortableText, SanityDocument } from "next-sanity";
import { H2 } from "./ui/typography";

export const About = ({ heroContent }: { heroContent: SanityDocument }) => {
  return (
    <div
      id="about"
      className="mx-auto items-center justify-items-center scroll-m-16 relative py-8 max-w-6xl"
    >
      <H2> About </H2>
      <PortableText value={heroContent.body} />
    </div>
  );
};
