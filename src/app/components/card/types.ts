import { Slug, RichTextType } from "@/sanity/sanity.types";

export type Entry = {
  title?: string;
  imageUrls?: string[];
  slug?: Slug;
  body?: RichTextType;
};

export type CardOrientation = "vertical" | "horizontal";