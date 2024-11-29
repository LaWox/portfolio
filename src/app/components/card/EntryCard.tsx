import { Card, CardHeader, CardContent } from "../ui/card";
import { H3 } from "../ui/typography";
import { CardGrid } from "./CardGrid";
import { Entry } from "./types";
import { DesktopEntry } from "./DesktopCard";
import { MobileCard } from "./MobileCard";

type Props = {
  entry: Entry;
  orientation?: "vertical" | "horizontal";
  idx?: number;
};

export const EntryCard = ({ entry, orientation, idx }: Props) => {
  return (
    <Card className="rounded-none mx-[2px] md:mx-0">
      <CardHeader>
        <H3>{entry.title}</H3>
      </CardHeader>
      <CardContent>
        <CardGrid orientation={orientation ? orientation : "horizontal"}>
          <DesktopEntry idx={idx !== undefined ? idx : -1} entry={entry} />
        </CardGrid>
        <div className="block md:hidden">
          <MobileCard entry={entry} />
        </div>
      </CardContent>
    </Card>
  );
};
