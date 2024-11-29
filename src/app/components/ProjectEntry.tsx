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
import { RichTextType, Slug } from "@/sanity/sanity.types";
import { PropsWithChildren } from "react";

type Entry = {
  title?: string;
  imageUrls?: string[];
  slug?: Slug;
  body?: RichTextType;
};

type Props = {
  entry: Entry;
  orientation?: "vertical" | "horizontal";
  idx?: number;
};

export const ProjectEntry = ({ entry, orientation, idx }: Props) => {
  return (
    <Card className="rounded-none mx-[2px] md:mx-0">
      <CardHeader>
        <H3>{entry.title}</H3>
      </CardHeader>
      <CardContent>
        <EntryGrid orientation={orientation ? orientation : "horizontal"}>
          <DesktopEntry idx={idx !== undefined ? idx : -1} entry={entry} />
        </EntryGrid>
        <div className="block md:hidden">
          <MobileEntry entry={entry} />
        </div>
      </CardContent>
    </Card>
  );
};

type EntryGridProps = { orientation: "vertical" | "horizontal" };

const EntryGrid = ({
  children,
  orientation,
}: PropsWithChildren<EntryGridProps>) => {
  return orientation === "horizontal" ? (
    <div className="hidden md:grid grid-row md:grid-cols-5 gap-8">
      {children}
    </div>
  ) : (
    <div className="hidden md:grid grid-col gap-4">{children}</div>
  );
};

const DesktopEntry = ({ idx, entry }: { idx: number; entry: Entry }) => {
  if (idx === -1) {
    return (
      <>
        <EntryInfo entry={entry} />
        <EntryCarousel entry={entry} />
      </>
    );
  }
  return (
    <>
      {idx % 2 === 0 ? (
        <>
          <EntryInfo entry={entry} className="md:col-span-2" />
          <EntryCarousel entry={entry} className="md:col-span-3" />
        </>
      ) : (
        <>
          <EntryCarousel entry={entry} className="md:col-span-3" />
          <EntryInfo entry={entry} className="md:col-span-2" />
        </>
      )}
    </>
  );
};

const MobileEntry = ({ entry }: { entry: Entry }) => {
  return (
    <>
      <EntryInfo entry={entry} className="row-span-1" />
      <EntryCarousel entry={entry} className="row-span-1 pt-4" />
    </>
  );
};

const EntryCarousel = ({
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

const EntryInfo = ({
  entry,
  className,
}: {
  entry: Entry;
  className?: string;
}) => {
  return (
    <>
      <div className={cn("flex flex-col justify-between", className)}>
        <RichText richText={entry.body} className="h-[400px] overflow-hidden" />
        <div className="flex justify-between pt-8 md:pt-4">
          <Link
            className="flex"
            href={getProjectLink(entry.slug?.current ?? "")}
          >
            <Body className="font-base font-semibold">Show more</Body>
            <ArrowRightIcon className="pl-2" width={24} height={24} />
          </Link>
        </div>
      </div>
    </>
  );
};
