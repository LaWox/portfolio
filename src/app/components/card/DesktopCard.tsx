import { EntryInfo } from "./CardEntryInfo";
import { ImageCarousel } from "./ImageCarousel";
import { Entry } from "./types";

export const DesktopEntry = ({ idx, entry }: { idx: number; entry: Entry }) => {
  if (idx === -1) {
    return (
      <>
        <EntryInfo entry={entry} />
        <ImageCarousel entry={entry} />
      </>
    );
  }
  return (
    <>
      {idx % 2 === 0 ? (
        <>
          <EntryInfo entry={entry} className="md:col-span-2" />
          <ImageCarousel entry={entry} className="md:col-span-3" />
        </>
      ) : (
        <>
          <ImageCarousel entry={entry} className="md:col-span-3" />
          <EntryInfo entry={entry} className="md:col-span-2" />
        </>
      )}
    </>
  );
};
