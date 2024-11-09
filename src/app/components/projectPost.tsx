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

export const ProjectPost = ({ post }: { post: SanityDocument }) => {
  return (
    <>
      <H2>{post.title}</H2>

      <p>{post.body}</p>
      <Carousel>
        <CarouselContent>
          {post.imageUrls.map((imgUrl: string) => {
            return (
              imgUrl && (
                <CarouselItem key={imgUrl}>
                  <Image src={imgUrl} alt={""} width={200} height={200} />
                </CarouselItem>
              )
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};
