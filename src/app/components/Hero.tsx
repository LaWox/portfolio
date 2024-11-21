import { H1 } from "./ui/typography";
import Image from "next/image";

export const Hero = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="scroll-m-20 relative">
      <div className="absolute left-1/2 -translate-x-1/2 top-[40%] bg-[#e8e4fd] p-4 rounded-md border-4">
        <H1>Platon Woxler</H1>
      </div>
      <Image
        className="max-h-screen lg:max-h-[calc(100vh-150px)] w-full"
        src={imageUrl}
        alt={""}
        width={2400}
        height={1600}
        priority
      />
    </div>
  );
};
