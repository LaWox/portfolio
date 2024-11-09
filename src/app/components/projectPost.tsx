import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import { SanityDocument } from "next-sanity";
import { H2 } from "./ui/typography";
import { PortableText } from "@portabletext/react";

export const ProjectPost = ({ post }: { post: SanityDocument }) => {
  return (
    <>
      <H2>{post.title}</H2>
      <div className="grid grid-cols-2 gap-8">
        <PortableText value={post.body} />
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {post.imageUrls.map((imgUrl: string) => {
              return (
                imgUrl && (
                  <CarouselItem key={imgUrl} className="w-full">
                    <Image
                      src={imgUrl}
                      alt={""}
                      height={400}
                      width={400}
                      // fill
                      objectFit="fill"
                      className="w-full h-full max-h-[600px]"
                    />
                  </CarouselItem>
                )
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};
