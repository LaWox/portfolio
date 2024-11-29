import { cn } from "@/lib/utils";
import { RichText } from "@/sanity/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Body } from "../ui/typography";
import { getProjectLink } from "../utils";
import { Entry } from "./types";

export const EntryInfo = ({
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
          {entry.slug && (
            <Link
              className="flex"
              href={getProjectLink(entry.slug?.current ?? "")}
            >
              <Body className="font-base font-semibold">Show more</Body>
              <ArrowRightIcon className="pl-2" width={24} height={24} />
            </Link>
          )}
        </div>
      </div>
    </>
  );
};