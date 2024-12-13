import { cn } from "@/lib/utils";
import { RichText } from "@/sanity/utils";
import { ArrowRightIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Body } from "../ui/typography";
import { getProjectLink } from "../utils";
import { CardOrientation, Entry } from "./types";
import { useEffect, useRef, useState } from "react";

export const EntryInfo = ({
  entry,
  className,
  orientation,
}: {
  entry: Entry;
  className?: string;
  orientation?: CardOrientation;
}) => {
  const richTextRef = useRef(null);
  const [showTextFade, setShowTextFade] = useState(false);

  useEffect(() => {
    if (richTextRef?.current) {
      console.log(
        "richTextRef.current.clientHeight: ",
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        richTextRef.current.clientHeight
      );
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setShowTextFade(richTextRef.current.clientHeight > 400);
    }
  }, [richTextRef]);

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
        <button
          className="mx-auto"
          onClick={() => {
            setShowTextFade(false);
          }}
        >
          <ChevronDownIcon height={24} width={24} />
        </button>
      )}
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
