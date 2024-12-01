import { cn } from "@/lib/utils";

type SanityRichText = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  }>;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
  listItem?: "bullet" | "number";
  markDefs?: Array<{
    href?: string;
    _type: "link";
    _key: string;
  }>;
  level?: number;
  _type: "block";
  _key: string;
}>;

export const RichText = ({
  richText,
  className,
}: {
  richText?: SanityRichText;
  className?: string;
}) => {
  return richText ? (
    <div className={cn("", className)}>
      {richText.map((block) => {
        if (block.children) {
          return block.children.map((child) => {
            if (child.marks?.includes("strong")) {
              return <strong key={child._key}> {child.text} </strong>;
            }

            return (
              <span key={child._key}>
                <span>{child.text}</span>
                <br />
              </span>
            );
          });
        }
      })}
    </div>
  ) : null;
};

export const GetPostBySlugQuery = ({
  slug,
  includeDevLogs,
}: {
  slug: string;
  includeDevLogs?: boolean;
}) => {
  return includeDevLogs
    ? `*[ _type == "projectPost" && slug.current == "${slug}"
  ][0]{
    _id, 
    title, 
    body, 
    slug, 
    gitLink, 
    publishedAt, 
    "imageUrls": images[].asset->url,
    "relatedDevLogs": *[_type=="devLogEntry" && references(^._id)][0...5] | order(publishedAt desc){
      _id,
      title, 
      body,
      publishedAt, 
      "imageUrls": images[].asset->url,
      }
}`
    : `*[ _type == "projectPost" && slug.current == "${slug}"
  ][0]{
    _id, 
    title, 
    body, 
    slug, 
    gitLink, 
    publishedAt, 
    "imageUrls": images[].asset->url,
   
}`;
};
