import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { SanityDocument } from "next-sanity";
import { Body, H3 } from "./ui/typography";
import { PortableText } from "@portabletext/react";
import { getDevlogLink } from "./utils";
import { ArrowRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

import Image from "next/image";
import Link from "next/link";

export const ProjectPost = ({
  post,
  idx,
}: {
  post: SanityDocument;
  idx: number;
}) => {
  return (
    <>
      <H3>{post.title}</H3>
      <div className="grid grid-cols-2 gap-8">
        {idx % 2 === 0 ? (
          <>
            <PostInfo post={post} />
            <PostCarousel post={post} />
          </>
        ) : (
          <>
            <PostCarousel post={post} />
            <PostInfo post={post} />
          </>
        )}
      </div>
    </>
  );
};

const PostCarousel = ({ post }: { post: SanityDocument }) => {
  return (
    <>
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
                    className="w-full h-full max-h-[500px]"
                  />
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

const PostInfo = ({ post }: { post: SanityDocument }) => {
  return (
    <>
      <div className="flex flex-col justify-between">
        <PortableText value={post.body} />
        <div className="flex justify-between">
          <Link
            className="font-semibold flex"
            href={getDevlogLink(post.slug.current)}
          >
            <Body className="font-base">Read more</Body>
            <ArrowRightIcon className="pl-2" width={24} height={24} />
          </Link>
          {post.gitLink && (
            <Link target="_blank" href={post.gitLink}>
              <GitHubLogoIcon width={24} height={24} />
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
