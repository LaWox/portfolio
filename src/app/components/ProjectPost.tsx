"use client";
import { SanityDocument } from "next-sanity";
import { Body, H3 } from "./ui/typography";
import { PortableText } from "@portabletext/react";
import { getDevlogLink } from "./utils";
import { ArrowRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

export const ProjectPost = ({
  post,
  idx,
}: {
  post: SanityDocument;
  idx: number;
}) => {
  return (
    <div>
      <H3>{post.title}</H3>
      <div className="grid grid-cols-5 gap-8">
        {idx % 2 === 0 ? (
          <>
            <PostInfo post={post} className="col-span-2" />
            <PostCarousel post={post} className="col-span-3" />
          </>
        ) : (
          <>
            <PostCarousel post={post} className="col-span-3" />
            <PostInfo post={post} className="col-span-2" />
          </>
        )}
      </div>
    </div>
  );
};

const PostCarousel = ({
  post,
  className,
}: {
  post: SanityDocument;
  className?: string;
}) => {
  return (
    <Carousel opts={{ loop: true }} className={cn("", className)}>
      <CarouselContent>
        {post.imageUrls.map((imgUrl: string) => {
          return (
            imgUrl && (
              <CarouselItem key={imgUrl}>
                <Image
                  src={imgUrl}
                  alt={""}
                  height={400}
                  width={400}
                  className="w-full h-full max-h-[500px] object-cover"
                />
              </CarouselItem>
            )
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

const PostInfo = ({
  post,
  className,
}: {
  post: SanityDocument;
  className?: string;
}) => {
  return (
    <>
      <div className={cn("flex flex-col justify-between", className)}>
        <PortableText value={post.body} />
        <div className="flex justify-between">
          <Link className="flex" href={getDevlogLink(post.slug.current)}>
            <Body className="font-base font-semibold">Read more</Body>
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
