import { cn } from "@/lib/utils";
import { RichText } from "@/sanity/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Body } from "../ui/typography";
import { getProjectLink } from "../utils";
import { CardOrientation, Entry } from "./types";

export const EntryInfo = ({
  entry,
  className,
  orientation,
}: {
  entry: Entry;
  className?: string;
  orientation?: CardOrientation;
}) => {
  return (
    <div className={cn("flex flex-col justify-between", className)}>
      <div className="relative">
        <RichText
          richText={entry.body}
          data-orientation={orientation}
          className="h-[400px] overflow-hidden"
        />
        <div className="absolute bottom-0 h-24 bg-gradient-to-t from-white w-full"></div>
      </div>
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
    </div>
  );
};
