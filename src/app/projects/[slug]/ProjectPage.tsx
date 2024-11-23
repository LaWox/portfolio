import { H1 } from "@/components/ui/typography";
import { SanityProjectPostType } from "@/sanity/sanity.types";

type Props = {
  page: SanityProjectPostType;
};

export const ProjectPage = ({ page }: Props) => {
  return (
    <div>
      <H1> {page.title}</H1>
    </div>
  );
};
