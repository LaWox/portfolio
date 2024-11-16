import { H1 } from "./ui/typography";
import Image from "next/image";

export const Hero = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div id="start" className="scroll-m-20 relative">
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2]">
        <H1>Platon Woxler</H1>
      </div>
      <Image
        className="max-h-[calc(100vh-300px)] w-full"
        src={imageUrl}
        alt={""}
        width={2400}
        height={1600}
      />
    </div>
  );
};
