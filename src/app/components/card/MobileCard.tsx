import { EntryInfo } from "./CardEntryInfo";
import { ImageCarousel } from "./ImageCarousel";
import { Entry } from "./types";

export const MobileCard = ({ entry }: { entry: Entry }) => {
  return (
    <>
      <EntryInfo entry={entry} className="row-span-1" />
      <ImageCarousel entry={entry} className="row-span-1 pt-4" />
    </>
  );
};
