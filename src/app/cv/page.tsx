import { client } from "@/sanity/client";
import { CV_ENTRY_QUERY } from "@/sanity/constants";
import { CV } from "./CV";
import { CvEntry } from "@/sanity/sanity.types";

const options = { next: { revalidate: 600 } };

export default async function page() {
  const cvEntries: CvEntry[] = await client.fetch<CvEntry[]>(
    CV_ENTRY_QUERY,
    {},
    options
  );

  return <CV entries={cvEntries} />;
}
