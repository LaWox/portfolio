"use client";

import { EntryCard } from "@/components/card/EntryCard";
import { SanityDevLogEntryType } from "@/sanity/sanity.types";

type Props = {
  entry: SanityDevLogEntryType;
};

export const DevLogEntry = ({ entry }: Props) => {
  return (
    <EntryCard
      entry={{
        title: entry.title,
        imageUrls: entry.imageUrls,
        body: entry.body,
      }}
      orientation="vertical"
    />
  );
};
