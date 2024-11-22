import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { H2, Body, H3, H4 } from "@/components/ui/typography";
import { CvEntry } from "@/sanity/sanity.types";
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  HomeIcon,
  SewingPinFilledIcon,
} from "@radix-ui/react-icons";
type Props = {
  entries: CvEntry[];
};

export const CV = ({ entries }: Props) => {
  const workEntries = entries.filter((e) => e.entryType === "work");
  const educationEntries = entries.filter((e) => e.entryType === "education");

  return (
    <Card className="max-w-6xl mx-auto my-8 p-4">
      <CardHeader>
        <H2>Platon Woxler</H2>
      </CardHeader>
      <CardContent>
        <div>
          <div className="flex">
            <div className="flex items-center">
              <EnvelopeClosedIcon width={16} height={16} />
              <Body className="pl-1">woxler.platon@gmail.com</Body>
            </div>
            <div className="flex items-center pl-4">
              <HomeIcon width={16} height={16} />
              <Body className="pl-1">Stockholm, Swe</Body>
            </div>
          </div>
        </div>
        <div className="grid grid-flow-col py-8 gap-8">
          <div>
            <H3> Experience </H3>
            <Separator className="h-[2px] bg-black mb-2" decorative />
            {workEntries.map((we) => {
              return (
                <div key={we._id}>
                  <Entry entry={we} />
                  <Separator className="my-4 " />
                </div>
              );
            })}
            <div>
              <H3> Education </H3>
              <Separator className="h-[2px] bg-black mb-2" decorative />
              {educationEntries.map((ee) => {
                return (
                  <div key={ee._id}>
                    <Entry entry={ee} />
                    <Separator className="my-4 " />
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <H3> Projects </H3>
            <Separator className="h-[2px] bg-black" decorative />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Entry = ({ entry }: { entry: CvEntry }) => {
  return (
    <div className="grid gap-1">
      <H4> {entry.title} </H4>
      <Body className="font-semibold"> {entry.companyName} </Body>
      <div className="flex">
        <div className="flex items-center">
          <CalendarIcon width={16} height={16} />
          <Body className="pl-1">
            {entry.startDate} - {entry.endDate ?? "Present"}
          </Body>
        </div>
        <div className="flex pl-4 items-center">
          <SewingPinFilledIcon width={16} height={16} />
          <Body className="pl-1"> {entry.geoPosition} </Body>
        </div>
      </div>
    </div>
  );
};
