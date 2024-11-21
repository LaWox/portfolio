import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Body, H2, H3 } from "@/components/ui/typography";
import { EnvelopeClosedIcon, HomeIcon } from "@radix-ui/react-icons";

export default function CV() {
  return (
    <Card className="max-w-6xl mx-auto my-8 p-4">
      <CardHeader>
        <H2>Platon Woxler</H2>
      </CardHeader>
      <CardContent>
        <div>
          <div className="flex font-semibold">
            <div className="flex items-center">
              <EnvelopeClosedIcon width={16} height={16} />
              <Body className="pl-1">woxler.platon@gmail.com</Body>
            </div>
            <div className="flex items-center pl-4">
              <HomeIcon width={16} height={16} />
              <Body className="pl-1">Stockholm, Sweden</Body>
            </div>
          </div>
        </div>
        <div className="grid grid-flow-col py-8 gap-8">
          <div>
            <div>
              <H3> Experience </H3>
              <Separator className="h-1" />
            </div>
            <div>
              <H3> Education </H3>
              <Separator className="h-1" />
            </div>
          </div>
          <div>
            <H3> Projects </H3>
            <Separator className="h-1" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
