"use client";

import { Body, H3 } from "./ui/typography";
import { getProjectLink } from "./utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";

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
import { Card, CardContent, CardHeader } from "./ui/card";
import { RichText } from "@/sanity/utils";
import { SanityProjectPostType } from "@/sanity/sanity.types";

export const ProjectPost = ({
  post,
  idx,
}: {
  post: SanityProjectPostType;
  idx: number;
}) => {
  return (
    <Card className="rounded-none mx-[2px] md:mx-0">
      <CardHeader>
        <H3>{post.title}</H3>
      </CardHeader>
      <CardContent>
        <div className="hidden md:grid grid-row md:grid-cols-5 gap-8">
          <DesktopPost idx={idx} post={post} />
        </div>
        <div className="block md:hidden">
          <MobilePost post={post} />
        </div>
      </CardContent>
    </Card>
  );
};

const DesktopPost = ({
  idx,
  post,
}: {
  idx: number;
  post: SanityProjectPostType;
}) => {
  return (
    <>
      {idx % 2 === 0 ? (
        <>
          <PostInfo post={post} className="md:col-span-2" />
          <PostCarousel post={post} className="md:col-span-3" />
        </>
      ) : (
        <>
          <PostCarousel post={post} className="md:col-span-3" />
          <PostInfo post={post} className="md:col-span-2" />
        </>
      )}
    </>
  );
};

const MobilePost = ({ post }: { post: SanityProjectPostType }) => {
  return (
    <>
      <PostInfo post={post} className="row-span-1" />
      <PostCarousel post={post} className="row-span-1 pt-4" />
    </>
  );
};

const PostCarousel = ({
  post,
  className,
}: {
  post: SanityProjectPostType;
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
                  className="w-full h-full max-h-[300px] md:max-h-[500px] object-cover"
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
  post: SanityProjectPostType;
  className?: string;
}) => {
  return (
    <>
      <div className={cn("flex flex-col justify-between", className)}>
        <RichText richText={post.body} />
        <div className="flex justify-between pt-4">
          <Link
            className="flex"
            href={getProjectLink(post.slug?.current ?? "")}
          >
            <Body className="font-base font-semibold">Read more</Body>
            <ArrowRightIcon className="pl-2" width={24} height={24} />
          </Link>
        </div>
      </div>
    </>
  );
};
