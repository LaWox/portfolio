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
import { PropsWithChildren } from "react";

type Props = {
  post: SanityProjectPostType;
  orientation?: "vertical" | "horizontal";
  idx?: number;
};

export const ProjectPost = ({ post, orientation, idx }: Props) => {
  return (
    <Card className="rounded-none mx-[2px] md:mx-0">
      <CardHeader>
        <H3>{post.title}</H3>
      </CardHeader>
      <CardContent>
        <PostGrid orientation={orientation ? orientation : "horizontal"}>
          <DesktopPost idx={idx !== undefined ? idx : -1} post={post} />
        </PostGrid>
        <div className="block md:hidden">
          <MobilePost post={post} />
        </div>
      </CardContent>
    </Card>
  );
};

type PostGridProps = { orientation: "vertical" | "horizontal" };

const PostGrid = ({
  children,
  orientation,
}: PropsWithChildren<PostGridProps>) => {
  return orientation === "horizontal" ? (
    <div className="hidden md:grid grid-row md:grid-cols-5 gap-8">
      {children}
    </div>
  ) : (
    <div className="hidden md:grid grid-col gap-4">{children}</div>
  );
};

const DesktopPost = ({
  idx,
  post,
}: {
  idx: number;
  post: SanityProjectPostType;
}) => {
  if (idx === -1) {
    return (
      <>
        <PostInfo post={post} />
        <PostCarousel post={post} />
      </>
    );
  }
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
        <RichText richText={post.body} className="h-[400px] overflow-hidden" />
        <div className="flex justify-between pt-8 md:pt-4">
          <Link
            className="flex"
            href={getProjectLink(post.slug?.current ?? "")}
          >
            <Body className="font-base font-semibold">Show more</Body>
            <ArrowRightIcon className="pl-2" width={24} height={24} />
          </Link>
        </div>
      </div>
    </>
  );
};
