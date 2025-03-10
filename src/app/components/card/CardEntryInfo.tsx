import { cn } from "@/lib/utils";
import { RichText } from "@/sanity/utils";
import {
  ArrowRightIcon,
  GitHubLogoIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { Body } from "../ui/typography";
import { getProjectLink } from "../utils";
import { CardOrientation, Entry } from "./types";
import { useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export const EntryInfo = ({
  entry,
  className,
  orientation,
}: {
  entry: Entry;
  className?: string;
  orientation?: CardOrientation;
}) => {
  console.log("entry: ", entry);
  const richTextRef = useRef<HTMLDivElement | null>(null);

  const showTextFade =
    richTextRef?.current?.clientHeight &&
    richTextRef?.current?.clientHeight > 400;

  return (
    <div className={cn("flex flex-col justify-between", className)}>
      <div className="relative" ref={richTextRef}>
        <RichText
          richText={entry.body}
          data-orientation={orientation}
          className={`overflow-hidden ${showTextFade && "h-[400px]"}`}
        />
        {showTextFade && (
          <div className="absolute bottom-0 h-24 bg-gradient-to-t from-white w-full"></div>
        )}
      </div>
      {showTextFade && (
        <Dialog>
          <DialogTrigger className="mx-auto">
            <PlusCircledIcon width={24} height={24} />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{entry.title}</DialogTitle>
              <RichText richText={entry.body} data-orientation={orientation} />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
      <div className="flex justify-between">
        {entry.slug && (
          <div className="flex justify-between pt-8 md:pt-4">
            <Link
              className="flex"
              href={getProjectLink(entry.slug?.current ?? "")}
            >
              <Body className="font-base font-semibold">Show more</Body>
              <ArrowRightIcon className="pl-2" width={24} height={24} />
            </Link>
          </div>
        )}
        {entry.gitUrl && (
          <Link
            className="flex mt-auto"
            href={getProjectLink(entry.slug?.current ?? "")}
          >
            <GitHubLogoIcon width={24} height={24} />
          </Link>
        )}
      </div>
    </div>
  );
};
