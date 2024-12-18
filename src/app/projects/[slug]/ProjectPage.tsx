"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { H2 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { SanityProjectPostType } from "@/sanity/sanity.types";
import { RichText } from "@/sanity/utils";
import Image from "next/image";
import { DevLogEntry } from "./DevLogEntry";
import { Separator } from "@/components/ui/separator";

type Props = {
  post: SanityProjectPostType;
};

export const ProjectPage = ({ post }: Props) => {
  return (
    <>
      <div className="justify-center max-w-6xl mx-auto">
        <PostCarousel post={post} className="col-span-2 py-8" />
        <H2 className="mx-auto text-center py-4"> {post.title} </H2>
        <Separator className="h-1" />
        <RichText className="col-span-1 pt-4" richText={post.body} />
        <div className="grid grid-flow-col gap-4 pt-4 grid-cols-3"></div>
        {post.relatedDevLogs?.length ? (
          <>
            <H2 className="text-center py-4"> DevLogs </H2>
            <Separator className="h-1" />
          </>
        ) : null}

        {post.relatedDevLogs && (
          <div className="grid grid-col grid-cols-1 md:grid-cols-2 gap-8 py-8">
            {post.relatedDevLogs?.map((devLog) => {
              return <DevLogEntry key={devLog._id} entry={devLog} />;
            })}
          </div>
        )}
      </div>
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
                  height={800}
                  width={800}
                  className="object-cover max-h-[calc(100vh-300px)]"
                  style={{ width: "100%", height: "100%" }}
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
