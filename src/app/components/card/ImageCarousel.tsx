"use client";

import { Entry } from "./types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ImageCarousel = ({
  entry,
  className,
}: {
  entry: Entry;
  className?: string;
}) => {
  return (
    <Carousel opts={{ loop: true }} className={cn("", className)}>
      <CarouselContent>
        {entry.imageUrls?.map((imgUrl: string) => {
          return (
            imgUrl && (
              <CarouselItem key={imgUrl}>
                <Image
                  src={imgUrl}
                  alt={""}
                  height={400}
                  width={400}
                  className="w-full h-[300px] md:h-[500px] object-cover"
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
