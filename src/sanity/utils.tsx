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

export const RichText = ({ richText }: { richText?: SanityRichText }) => {
  return richText ? (
    <span>
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
    </span>
  ) : null;
};

export const GetPostQuery = (slug: string) => {
  return `*[
    _type == "projectPost" && slug.current == "${slug}"
  ][0]{_id, title, body, slug, gitLink, publishedAt, "imageUrls": images[].asset->url}`;
};
